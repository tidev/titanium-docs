---
title: Titanium.Calendar.Reminder
properties:
  - name: id
    type: String
    summary: Identifier of this reminder.
  - name: method
    type: Number
    summary: Method by which this reminder will be delivered.
  - name: minutes
    type: Number
    summary: >
      Reminder notice period in minutes, that determines how long prior to the
      event this reminder<br>

      should trigger.<br>
---

# Titanium.Calendar.Reminder

An object that represents a single reminder for an event in a calendar.

Reminders should be created using the [Titanium.Calendar.Event.createReminder](/api/titanium/calendar/event) method 
rather than directly.

See [Titanium.Calendar](/api/titanium/calendar) for examples of retrieving reminder information and creating 
reminders for events.


**Extends:** `Titanium.Proxy` · **Since:** 3.2.0 · **Platforms:** android

<ApiProperties />

