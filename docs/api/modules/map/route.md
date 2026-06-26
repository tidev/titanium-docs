---
title: Modules.Map.Route
properties:
  - name: points
    type: String, Array<MapPointType>
    summary: Array of map points making up the route.
  - name: color
    type: String
    summary: |
      Color to use when drawing the route, as a color name or hex triplet.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>

      <p><strong>iOS Note:</strong> Changing the color of an existing route will
      only work on iOS 7 and later</p>
  - name: width
    type: Number
    summary: Line width in pixels to use when drawing the route.
    description: >
      <p><strong>iOS Note:</strong> Changing the width of an existing route will
      only work on iOS 7 and later</p>
  - name: level
    type: Number
    summary: >
      The map level at which to place the route. Available in iOS 7.0 and
      later.<br>
    description: >
      <p>Specify one of the following levels:<br>

      <a
      href="/api/modules/map/overlay_level_above_labels">Modules.Map.OVERLAY_LEVEL_ABOVE_LABELS</a>,<br>

      <a
      href="/api/modules/map/overlay_level_above_roads">Modules.Map.OVERLAY_LEVEL_ABOVE_ROADS</a>.</p>
    since: 3.2.0
---

# Modules.Map.Route

Represents a path between two or more points of interest.

The `Route` object gives you low-level control over routes that can be added to a
[map view](Modules.Map.View). A route must have its `points` property set to appear on a map.

Use the [Modules.Map.createRoute](/api/modules/map) method to create a route.

### iOS Platform Notes

The `addRoute` method no longer accepts a dictionary as a parameter. Pass a [Modules.Map.Route](/api/modules/map/route) object instead.

### Android Platform Notes
The parameter `points` accepts additional the route in format `encoded polyline`.  
https://developers.google.com/maps/documentation/utilities/polylinealgorithm 


**Extends:** `Titanium.Proxy` · **Since:** 3.1.0, 3.2.0, 3.2.0, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

