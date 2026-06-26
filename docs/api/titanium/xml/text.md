---
title: Titanium.XML.Text
properties:
  - name: textContent
    type: String
    summary: Content (value) of all text nodes within this node.
    description: >
      <p>On Android, <code>textContent</code> is supported on <a
      href="Titanium.XML.Element">Element</a> and<br>

      <a href="Titanium.XML.Text">Text</a> nodes only.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
methods:
  - name: splitText
    summary: >-
      Breaks this node into two nodes at the specified by offset, and returns a
      new node of the same type, which contains all the content at and after the
      offset point. Throws an exception if the specified offset is negative or
      if this node is read only.
    parameters:
      - name: offset
        type: Number
        summary: The offset at which to split, starting from 0.
    returns:
      type: Titanium.XML.Text
      summary: The new node, of the same type as this node
---

# Titanium.XML.Text

Represents the textual content of an [Titanium.XML.Element](/api/titanium/xml/element) or [Titanium.XML.Attr](/api/titanium/xml/attr) Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1312295772) on Android and iOS.

**Extends:** `Titanium.XML.CharacterData` · **Since:** 0.9, 0.9, 0.9, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

