---
title: Titanium.Calendar.Attendee
properties:
  - name: isOrganizer
    type: Boolean
    summary: Indicates whether this attendee is the event organizer.
    platforms:
      - iphone
      - ipad
      - macos
  - name: name
    type: String
    summary: The attendee name.
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 6.2.0
      iphone: 6.0.0
      ipad: 6.0.0
  - name: email
    type: String
    summary: The attendee email.
    description: >
      <p>Due to privacy concerns in iOS, this value will be empty if the
      attendee<br>

      is the device owner.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 6.2.0
      iphone: 6.0.0
      ipad: 6.0.0
  - name: role
    type: Number
    summary: The role of the attendee.
    platforms:
      - iphone
      - ipad
      - macos
  - name: type
    type: Number
    summary: The type of the attendee.
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 6.2.0
      iphone: 6.0.0
      ipad: 6.0.0
  - name: status
    type: Number
    summary: The status of the attendee.
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 6.2.0
      iphone: 6.0.0
      ipad: 6.0.0
  - name: relationship
    type: Number
    summary: The relationship of the attendee to the user.
    platforms:
      - android
    since: 6.2.0
---

# Titanium.Calendar.Attendee

An object that represents a single attendee of an event.

The API supports retrieving information about the attendee of an event.


**Extends:** `Titanium.Proxy` · **Since:** 6.0.0 · **Platforms:** iphone, ipad, macos

<ApiProperties />

