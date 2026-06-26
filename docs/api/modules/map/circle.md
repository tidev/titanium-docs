---
title: Modules.Map.Circle
properties:
  - name: center
    type: MapPointType
    summary: >-
      An object with longitude and latitude values. Can also be an array with
      longitude (index 0), latitude (index 1) tuples.
  - name: radius
    type: Number
    summary: >-
      The radius of the circle, specified in meters. It should be zero or
      greater.
  - name: blendMode
    type: Number
    summary: The blend mode to apply to the overlay.
    description: |
      <p>Use one of the <code>Ti.UI.BLEND_MODE_*</code> constants!</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 12.0.0
  - name: fillColor
    type: String
    summary: |
      Color to use when shading the circle, as a color name or hex triplet.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: strokeColor
    type: String
    summary: >
      Color to use for the border of the circle, as a color name or hex
      triplet.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: strokeWidth
    type: Number
    summary: Line width in pixels to use when drawing the circle.
  - name: touchEnabled
    type: Boolean
    summary: Determines whether view should receive touch events.
    since: 6.2.0
  - name: opacity
    type: Number
    summary: Opacity of this map circle, from 0.0 (transparent) to 1.0 (opaque).
  - name: zIndex
    type: Number
    summary: |
      The order (depth) in which to display the circles.<br>
    description: >
      <p>For iOS, the circles are drawn in the order in which they are
      added.</p>
    platforms:
      - android
---

# Modules.Map.Circle

Represents a bounded area on the map.

The `Circle` object gives you low-level control over circles that can be added to a
[map view](Modules.Map.View). A circle must have a `center` property and a `radius` set to appear on a map.

Use the [Modules.Map.createCircle](/api/modules/map) method to create a circle.


**Extends:** `Titanium.Proxy` · **Since:** 4.1.0, 4.1.0, 4.1.0, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

