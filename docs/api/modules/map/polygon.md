---
title: Modules.Map.Polygon
properties:
  - name: points
    type: Array<MapPointType>
    summary: >-
      Array of map points making up the polygon. Can also be an array of
      longitude (index 0), latitude (index 1) tuples.
  - name: holes
    type: Array<Array<MapPointType>>
    summary: Array of points arrays that define holes in the polygon.
  - name: fillColor
    type: String
    summary: |
      Color to use when shading the polygon, as a color name or hex triplet.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: strokeColor
    type: String
    summary: >
      Color to use for the border of the polygon, as a color name or hex
      triplet.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: strokeWidth
    type: Number
    summary: Line width in pixels to use when drawing the polygon.
  - name: touchEnabled
    type: Boolean
    summary: Determines whether view should receive touch events.
    since: 6.2.0
  - name: zIndex
    type: Number
    summary: |
      The order (depth) in which to display the polygons.<br>
    description: >
      <p>For iOS, the polygons are drawn in the order in which they are
      added.</p>
    platforms:
      - android
  - name: bounds
    type: MapRegionTypev2
    summary: Returns the bounding box of the polygon. Useful to center the region.
    platforms:
      - android
    since: 12.3.0
---

# Modules.Map.Polygon

Represents a bounded area on the map.

The `Polygon` object gives you low-level control over polygons that can be added to a
[map view](Modules.Map.View). A polygon must have its `points` property set to appear on a map.

Use the [Modules.Map.createPolygon](/api/modules/map) method to create a polygon.


**Extends:** `Titanium.Proxy` · **Since:** 4.1.0, 4.1.0, 4.1.0, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

