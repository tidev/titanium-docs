---
title: Titanium.Contacts.Group
properties:
  - name: name
    type: String
    summary: Name of this group.
  - name: identifier
    type: String
    summary: Identifier of the group.
methods:
  - name: add
    summary: Adds a person to this group.
    parameters:
      - name: person
        type: Titanium.Contacts.Person
        summary: >
          Person to add. For &gt;= iOS 9, it is not required to<br>

          call <a href="/api/titanium/contacts">Titanium.Contacts.save</a> after
          calling this method.<br>
  - name: members
    summary: Gets people that are members of this group.
    returns:
      type: Array<Titanium.Contacts.Person>
  - name: remove
    summary: >
      Removes a person from this group. For &gt;= iOS 9, it is not<br>

      required to call <a
      href="/api/titanium/contacts">Titanium.Contacts.save</a> after calling
      this method.<br>
    parameters:
      - name: person
        type: Titanium.Contacts.Person
        summary: Person to remove.
  - name: sortedMembers
    summary: Gets people that are members of this group, sorted in the specified order.
    parameters:
      - name: sortBy
        type: Number
        summary: |
          Method for sorting.<br>
    returns:
      type: Array<Titanium.Contacts.Person>
---

# Titanium.Contacts.Group

An object which represents a group in the system contacts address book.

See examples in [Titanium.Contacts](/api/titanium/contacts) for more information.

These APIs are unavailable on macOS if the app is built on a version of Xcode &lt; 12.


**Extends:** `Titanium.Proxy` · **Since:** 1.4.0, 1.4.0, 9.2.0 · **Platforms:** iphone, ipad, macos

<ApiProperties />

<ApiMethods />

