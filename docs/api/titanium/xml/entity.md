---
title: Titanium.XML.Entity
properties:
  - name: notationName
    type: String
    summary: >-
      For unparsed entities, the name of the notation for the entity. For parsed
      entities, this is <code>null</code>.
  - name: publicId
    type: String
    summary: >-
      The public identifier associated with the entity, if specified. If the
      public identifier was not specified, this is <code>null</code>.
  - name: systemId
    type: String
    summary: >-
      The system identifier associated with the entity, if specified. If the
      system identifier was not specified, this is null.
---

# Titanium.XML.Entity

This interface represents an entity, either parsed or unparsed, in an XML document. Note that this models the entity itself not the entity declaration. The nodeName attribute that is inherited from Node contains the name of the entity. An Entity node does not have any parent.
Implements the [DOM Level 2 API](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-527DCFF2) on Android and iOS.

**Extends:** `Titanium.XML.Node` · **Since:** 0.9, 0.9, 0.9, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

