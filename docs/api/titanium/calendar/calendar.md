---
title: Titanium.Calendar.Calendar
properties:
  - name: hidden
    type: Boolean
    summary: Indicates whether this calendar can be edited or deleted.
    description: |
      <p>This property is <code>true</code> when this calendar is editable.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: id
    type: String
    summary: Identifier of this calendar.
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: name
    type: String
    summary: Display name of this calendar.
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: selected
    type: Boolean
    summary: Indicates whether the calendar is selected.
    description: >
      <p>Set to <code>true</code> when this calendar is selected.</p>

      <p>See <a href="/api/titanium/calendar">Titanium.Calendar</a> for
      examples.</p>
    platforms:
      - android
  - name: sourceTitle
    type: String
    summary: Displays the source title.
    platforms:
      - iphone
      - ipad
      - macos
    since: 6.1.0
  - name: sourceType
    type: Number
    summary: Displays the source type.
    platforms:
      - iphone
      - ipad
      - macos
    since: 6.1.0
  - name: sourceIdentifier
    type: String
    summary: Displays the source identifier.
    platforms:
      - iphone
      - ipad
      - macos
    since: 6.1.0
methods:
  - name: createEvent
    summary: Creates an event in this calendar.
    parameters:
      - name: properties
        type: Dictionary<Titanium.Calendar.Event>
        summary: Properties of the event
    returns:
      type: Titanium.Calendar.Event
  - name: createEvents
    summary: Creates multiple events at once in this calendar.
    description: >
      <p>Use this method to bulk-create events for faster performance.<br>

      Successful or failed results are returned at the same position as passed
      in the parameters list.<br>

      For failed events, it will return <code>null</code> and <a
      href="/api/titanium/calendar/event">Titanium.Calendar.Event</a> for
      successful events.</p>
    parameters:
      - name: propertiesArray
        type: Array<Dictionary<Titanium.Calendar.Event>>
        summary: Array of the event properties
    returns:
      type: Array<Titanium.Calendar.Event>
  - name: getEventById
    summary: Gets the event with the specified identifier.
    parameters:
      - name: id
        type: String
        summary: Identifier of the event.
    returns:
      type: Titanium.Calendar.Event
  - name: getEventsById
    summary: Gets multiple events with their specified identifier(s).
    description: |
      <p>Use this method to bulk-fetch events for faster performance.<br>
      Only successful events are returned, so the identifier of events<br>
      should be used to compare which events were not fetched successfully.</p>
    parameters:
      - name: ids
        type: Array<Number>, Array<String>
        summary: Array of identifiers of events.
    returns:
      type: Array<Titanium.Calendar.Event>
  - name: deleteEvents
    summary: Deletes multiple events with their specified identifier(s).
    description: >
      <p>Use this method to bulk-delete events for faster performance.<br>

      This method only returns the count of successfully deleted events.<br>

      If it is important for apps to know whether the event was deleted or
      not,<br>

      either use the <a href="Titanium.Calendar.Event.remove">remove()</a>
      method, or<br>

      a single identifier that is passed as an array to this method.<br>

      If a specified identifier event does not exist, it will not be treated as
      a count,<br>

      so the count range can be in <code>0 &lt;= count &lt;=
      ids.length</code>.</p>
    parameters:
      - name: ids
        type: Array<Number>, Array<String>
        summary: Array of identifiers of events.
    returns:
      type: Number
      summary: Count of successfully deleted events.
  - name: getEventsBetweenDates
    summary: Gets events that occur between two dates.
    parameters:
      - name: date1
        type: Date, String
        summary: Start date.
      - name: date2
        type: Date, String
        summary: End date.
    returns:
      type: Array<Titanium.Calendar.Event>
  - name: getEventsInDate
    summary: Gets events that occur on a specified date.
    parameters:
      - name: year
        type: Number
        summary: Year of the events.
      - name: month
        type: Number
        summary: >-
          Month of the events, as a zero-based integer with January at 0 and
          December at 11.
      - name: day
        type: Number
        summary: Day of the month of the events.
    returns:
      type: Array<Titanium.Calendar.Event>
  - name: getEventsInMonth
    summary: Gets events that occur during a specified month.
    parameters:
      - name: year
        type: Number
        summary: Year of the events.
      - name: month
        type: Number
        summary: >-
          Month of the events, as a zero-based integer with January at 0 and
          December at 11.
    returns:
      type: Array<Titanium.Calendar.Event>
  - name: getEventsInYear
    summary: Gets all events that occur during a specified year.
    parameters:
      - name: year
        type: Number
        summary: Year of the events.
    returns:
      type: Array<Titanium.Calendar.Event>
---

# Titanium.Calendar.Calendar

An object that represents a single calendar.

**Extends:** `Titanium.Proxy` · **Since:** 3.2.0, 3.1.0, 3.1.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

