---
title: Titanium.Calendar.Event
properties:
  - name: alerts
    type: Array<Titanium.Calendar.Alert>
    summary: >-
      Alarms associated with the calendar item, as an array of <a
      href="/api/titanium/calendar/alert">Titanium.Calendar.Alert</a> objects.
    description: |
      <p>This property is read-only on Android.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: allDay
    type: Boolean
    summary: Indicates whether this event is all day.
    description: |
      <p>This property is read-only on Android.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: begin
    type: Date
    summary: Start date/time of this event.
    description: |
      <p>This property is read-only on Android.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: notes
    type: String
    summary: Notes for this event.
    platforms:
      - iphone
      - ipad
      - macos
  - name: description
    type: String
    summary: Description of this event.
    platforms:
      - android
  - name: end
    type: Date
    summary: End date/time of this event.
    description: |
      <p>This property is read-only on Android.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: extendedProperties
    type: Dictionary
    summary: Extended properties of this event.
    platforms:
      - android
  - name: hasAlarm
    type: Boolean
    summary: Indicates whether an alarm is scheduled for this event.
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: id
    type: String
    summary: Identifier of this event.
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: location
    type: String
    summary: Location of this event.
    description: |
      <p>This property is read-only on Android.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: reminders
    type: Array<Titanium.Calendar.Reminder>
    summary: Existing reminders for this event.
    platforms:
      - android
  - name: status
    type: Number
    summary: Status of this event.
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: availability
    type: Number
    summary: Availability of this event.
    platforms:
      - iphone
      - ipad
      - macos
  - name: isDetached
    type: Boolean
    summary: >
      Boolean value that indicates whether an event is a detached instance of
      a<br>

      repeating event.<br>
    description: >
      <p>This value is <code>YES</code> if and only if the event is part of a
      repeating event<br>

      and one or more of its attributes have been modified from the repeating
      event's<br>

      default attributes.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: title
    type: String
    summary: Title of this event.
    description: |
      <p>This property is read-only on Android.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: recurrenceRules
    type: Array<Titanium.Calendar.RecurrenceRule>
    summary: The recurrence rules for the calendar item.
    description: >
      <p>On Android, only the first element of the recurrenceRules is taken into
      account<br>

      due to the way it handles conditions for recurrence rules.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 7.1.0
      iphone: 3.1.0
      ipad: 3.1.0
  - name: visibility
    type: Number
    summary: Visibility of this event.
    platforms:
      - android
  - name: attendees
    type: Array<Titanium.Calendar.Attendee>
    summary: >-
      The list of event attendees. This list will be empty if the event has no
      attendees.
    platforms:
      - iphone
      - ipad
      - macos
    since: 6.0.0
methods:
  - name: createAlert
    summary: Creates an alert for this event.
    parameters:
      - name: data
        type: Dictionary<Titanium.Calendar.Alert>
        summary: Properties for the alert.
    returns:
      type: Titanium.Calendar.Alert
  - name: createReminder
    summary: Creates a reminder for this event.
    parameters:
      - name: data
        type: Dictionary<Titanium.Calendar.Reminder>
        summary: Properties for the reminder.
    returns:
      type: Titanium.Calendar.Reminder
  - name: getExtendedProperty
    summary: Gets the value of the specified extended property.
    parameters:
      - name: name
        type: String
        summary: Name of an existing extended property.
    returns:
      type: String
  - name: setExtendedProperty
    summary: Sets the value of the specified extended property.
    parameters:
      - name: name
        type: String
        summary: Property name.
      - name: value
        type: String
        summary: Property value.
  - name: createRecurrenceRule
    summary: >
      Creates an recurrence pattern for a recurring event.<br>

      All of the properties for the recurrence rule must be set during
      creation.<br>

      The recurrence rule properties cannot be modified.<br>
    parameters:
      - name: data
        type: Dictionary<Titanium.Calendar.RecurrenceRule>
        summary: Properties for the recurrence rule.
    returns:
      type: Titanium.Calendar.RecurrenceRule
  - name: save
    summary: Saves changes to an event permanently.
    description: >
      <p>This method raises an exception if it is passed an event from another
      calendar.</p>

      <p>When an event is saved, it is updated in the Calendar database. Any
      fields you did<br>

      not modify are updated to reflect the most recent value in the database.
      If the<br>

      event has been deleted from the database, it is re-created as a new
      event.</p>

      <p>On Android, this method only updates the recurrence rule (if set). See
      <a
      href="https://jira-archive.titaniumsdk.com/TIMOB-24248">TIMOB-24248</a><br>

      to track this new feature.</p>
    parameters:
      - name: span
        type: Number
        summary: >
          The span to use. Indicates whether the save affects future instances
          of the<br>

          event in the case of a recurring event.<br>
    returns:
      type: Boolean
  - name: remove
    summary: Removes an event from the calendar.
    description: >
      <p>This method raises an exception on iOS if an event from another
      calendar is used.</p>
    parameters:
      - name: span
        type: Number
        summary: >
          iOS-only: The span to use. Indicates whether to remove future
          instances of the event in<br>

          the case of a recurring event.<br>
    returns:
      type: Boolean
  - name: refresh
    summary: >-
      Updates the event's data with the current information in the Calendar
      database.
    description: >
      <p>This method should be only used on events that your application is
      editing, and only<br>

      when your application receives the <a
      href="Titanium.Calendar.change">change</a> notification.<br>

      If this method returns NO, the event has been deleted or otherwise
      invalidated,<br>

      and you should not continue to use it.</p>
    returns:
      type: Boolean
  - name: addRecurrenceRule
    summary: Adds a recurrence rule to the recurrence rule array.
    parameters:
      - name: rule
        type: Titanium.Calendar.RecurrenceRule
        summary: The recurrence rule to be added.
  - name: removeRecurrenceRule
    summary: Removes a recurrence rule to the recurrence rule array.
    parameters:
      - name: rule
        type: Titanium.Calendar.RecurrenceRule
        summary: The recurrence rule to be removed.
---

# Titanium.Calendar.Event

An object that represents a single event in a calendar.

The API supports retrieving information about existing events and creating new events.
On iOS, existing events can be modified or deleted. On Android, only recurrence rules
can be modified.

See [Titanium.Calendar](/api/titanium/calendar) for examples of retrieving event information and creating events.


**Extends:** `Titanium.Proxy` · **Since:** 3.2.0, 3.1.0, 3.1.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

