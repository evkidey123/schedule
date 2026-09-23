package com.schedule.app

import android.app.AlarmManager
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.media.AudioAttributes
import android.media.RingtoneManager
import android.net.Uri
import android.os.Build
import android.util.Log

object NotificationHelper {
    private const val TAG = "ScheduleApp"
    const val CHANNEL_ID = "schedule_reminders"

    private val DAY_NAMES = arrayOf("Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье")

    fun reminderTitle(type: String): String = when (type) {
        "school" -> "Урок"
        "personal" -> "Занятие"
        "extended" -> "Продлёнка"
        else -> type
    }

    fun dowFromDayIdx(dayIdx: Int): Int = when (dayIdx) {
        0 -> java.util.Calendar.MONDAY
        1 -> java.util.Calendar.TUESDAY
        2 -> java.util.Calendar.WEDNESDAY
        3 -> java.util.Calendar.THURSDAY
        4 -> java.util.Calendar.FRIDAY
        5 -> java.util.Calendar.SATURDAY
        6 -> java.util.Calendar.SUNDAY
        else -> java.util.Calendar.MONDAY
    }

    // Resilient trigger parsing: accepts "08:30–09:15", "8.30-9.15", en/em dashes.
    // Returns the next future trigger millis for the given weekday, or null if
    // the time string is malformed (caller must skip — never abort the batch).
    fun nextTriggerMillis(dayIdx: Int, time: String, whenType: String, mins: Int): Long? {
        val parts = time.split(Regex("[–—\\-]"))
        val ref = (if (whenType == "end") parts.getOrNull(1) else parts.getOrNull(0)) ?: return null
        val hm = ref.trim().replace('.', ':').split(":")
        val h = hm.getOrNull(0)?.trim()?.toIntOrNull() ?: return null
        val m = hm.getOrNull(1)?.trim()?.toIntOrNull() ?: return null
        if (h !in 0..23 || m !in 0..59) return null
        val cal = java.util.Calendar.getInstance().apply {
            set(java.util.Calendar.HOUR_OF_DAY, h)
            set(java.util.Calendar.MINUTE, m)
            set(java.util.Calendar.SECOND, 0)
            set(java.util.Calendar.MILLISECOND, 0)
            val curDow = get(java.util.Calendar.DAY_OF_WEEK)
            var diff = dowFromDayIdx(dayIdx) - curDow
            if (diff < 0) diff += 7
            add(java.util.Calendar.DAY_OF_MONTH, diff)
            add(java.util.Calendar.MINUTE, -mins)
        }
        if (cal.timeInMillis <= System.currentTimeMillis()) {
            cal.add(java.util.Calendar.WEEK_OF_YEAR, 1)
        }
        return cal.timeInMillis
    }

    fun reminderText(type: String, dayIdx: Int, time: String, subj: String, mins: Int, whenType: String): String {
        val action = if (whenType == "end") {
            if (mins == 0) "Заканчивается сейчас"
            else "Заканчивается через $mins ${minutesWord(mins, accusative = true)}"
        } else {
            if (mins == 0) "Начинается сейчас"
            else "До начала $mins ${minutesWord(mins, accusative = false)}"
        }
        return listOf(action, DAY_NAMES.getOrNull(dayIdx), time, subj)
            .filter { !it.isNullOrBlank() }
            .joinToString(" · ")
    }

    private fun minutesWord(n: Int, accusative: Boolean): String {
        val mod10 = n % 10
        val mod100 = n % 100
        return when {
            mod100 in 11..14 -> "минут"
            mod10 == 1 -> if (accusative) "минуту" else "минута"
            mod10 in 2..4 -> "минуты"
            else -> "минут"
        }
    }

    fun createChannel(context: Context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                "Напоминания расписания",
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "Оповещения о начале и конце уроков"
                enableVibration(true)
                vibrationPattern = longArrayOf(0, 300, 200, 300)
            }
            val manager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            manager.createNotificationChannel(channel)
        }
    }

    // Since API 26 channel settings override builder.setSound/setVibrate,
    // so each (sound, vibro) pair gets its own channel.
    fun channelFor(context: Context, soundUri: String, vibro: Boolean): String {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return CHANNEL_ID
        val id = CHANNEL_ID + "_" + (soundUri.ifEmpty { "default" }).hashCode() + if (vibro) "_v" else "_nv"
        val manager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        if (manager.getNotificationChannel(id) != null) return id

        val sound: Uri = if (soundUri.isNotEmpty()) {
            try { Uri.parse(soundUri) } catch (_: Exception) { RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION) }
        } else {
            RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION)
        }
        val channel = NotificationChannel(id, "Напоминания расписания", NotificationManager.IMPORTANCE_HIGH).apply {
            description = "Оповещения о начале и конце уроков"
            setSound(sound, AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                .build())
            if (vibro) {
                enableVibration(true)
                vibrationPattern = longArrayOf(0, 300, 200, 300)
            } else {
                enableVibration(false)
            }
        }
        manager.createNotificationChannel(channel)
        Log.d(TAG, "Notification channel created: $id")
        return id
    }

    // Highest priority scheduling (survives Doze and most OEM killers).
    // Falls back to a 10-minute window if exact alarms are not permitted.
    fun scheduleExact(context: Context, triggerAtMillis: Long, operation: PendingIntent, showIntent: PendingIntent) {
        val am = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val canExact = Build.VERSION.SDK_INT < Build.VERSION_CODES.S || am.canScheduleExactAlarms()
        try {
            if (canExact) {
                am.setAlarmClock(AlarmManager.AlarmClockInfo(triggerAtMillis, showIntent), operation)
            } else {
                am.setWindow(AlarmManager.RTC_WAKEUP, triggerAtMillis, 10 * 60 * 1000L, operation)
                Log.w(TAG, "Exact alarms denied — using setWindow fallback")
            }
        } catch (e: SecurityException) {
            Log.e(TAG, "setAlarmClock denied — using setWindow fallback", e)
            am.setWindow(AlarmManager.RTC_WAKEUP, triggerAtMillis, 10 * 60 * 1000L, operation)
        }
    }
}
