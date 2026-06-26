---
title: Titanium.Calendar.Alert
properties:
  - name: absoluteDate
    type: Date
    summary: The absolute date for the alarm.
    description: |
      <p>If you set this property for a relative offset alarm, it loses<br>
      the relative offset and becomes an absolute alarm.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: relativeOffset
    type: Number
    summary: The offset from the start of an event, at which the alarm fires.
    description: >
      <p>If you set this value for an absolute alarm, it loses its absolute date
      and<br>

      becomes a relative offset alarm.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: alarmTime
    type: Date
    summary: Date/time at which this alert alarm is set to trigger.
    platforms:
      - android
  - name: begin
    type: Date
    summary: Start date/time for the corresponding event.
    platforms:
      - android
  - name: end
    type: Date
    summary: End date/time for the corresponding event.
    platforms:
      - android
  - name: eventId
    type: Number
    summary: Identifier of the event for which this alert is set.
  - name: id
    type: String
    summary: Identifier of this alert.
    platforms:
      - android
  - name: minutes
    type: Number
    summary: >
      Reminder notice period in minutes, that determines how long prior to the
      event this alert<br>

      should trigger.<br>
    platforms:
      - android
  - name: state
    type: Number
    summary: The current state of the alert.
    platforms:
      - android
---

# Titanium.Calendar.Alert

An object that represents a single alert for an event in an calendar.

**Extends:** `Titanium.Proxy` · **Since:** 3.2.0, 3.1.0, 3.1.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

