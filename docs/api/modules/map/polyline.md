---
title: Modules.Map.Polyline
properties:
  - name: jointType
    type: Number
    summary: Defines the shape of corner points.
    description: >
      <p>Defines the shape of corner points. Can be one of the following shapes:
      <a
      href="/api/modules/map/polyline_joint_default">Modules.Map.POLYLINE_JOINT_DEFAULT</a>,<br>

      <a
      href="/api/modules/map/polyline_joint_round">Modules.Map.POLYLINE_JOINT_ROUND</a>
      or <a
      href="/api/modules/map/polyline_joint_bevel">Modules.Map.POLYLINE_JOINT_BEVEL</a></p>
    platforms:
      - android
    since: 5.1.0
  - name: points
    type: Array<MapPointType>, String
    summary: >-
      Array of map points making up the polyline. Can also be an array of
      longitude (index 0), latitude (index 1) tuples. On Android platform you
      can use an encoded polyline as string.
  - name: strokeColor
    type: String
    summary: |
      Color to use for the the polyline, as a color name or hex triplet.<br>
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: strokeWidth
    type: Number
    summary: Line width in pixels to use when drawing the polyline.
  - name: touchEnabled
    type: Boolean
    summary: Determines whether view should receive touch events.
    since: 6.2.0
  - name: zIndex
    type: Number
    summary: |
      The order (depth) in which to display the polylines.<br>
    description: >
      <p>For iOS, the polylines are drawn in the order in which they are
      added.</p>
    platforms:
      - android
  - name: pattern
    type: Object
    summary: Pattern used to draw the polylines.
    description: >
      <p>As per default polylines are drawn with a solid line. You can specify
      to<br>

      draw them with a dashed line using <a
      href="/api/modules/map/polyline_pattern_dashed">Modules.Map.POLYLINE_PATTERN_DASHED</a><br>

      or with a dotted line using <a
      href="/api/modules/map/polyline_pattern_dotted">Modules.Map.POLYLINE_PATTERN_DOTTED</a>.</p>

      <p>You can also specify the dimensions to use when you create a dashed
      or<br>

      dotted polyline.</p>

      <p>For a dashed polyline, you can do something like this:</p>

      <div class="language-javascript"><pre
      class="shiki"><code>polyline.setPattern({
          type: TiMap.POLYLINE_PATTERN_DASHED,
          gapLength: 25,
          dashLength: 50
      });

      </code></pre></div>

      <p>or for a dotted polyline, you can do:</p>

      <div class="language-javascript"><pre
      class="shiki"><code>polyline.setPattern({
          type: TiMap.POLYLINE_PATTERN_DOTTED,
          gapLength: 25
      });

      </code></pre></div>
    since: 6.2.0
---

# Modules.Map.Polyline

Represents a bounded area on the map.

The `Polyline` object gives you low-level control over polylines that can be added to a
[map view](Modules.Map.View). A polyline must have its `points` property set to appear on a map.

Use the [Modules.Map.createPolyline](/api/modules/map) method to create a polyline.

### Example

``` javascript
var polyline = Map.createPolyline({
    points: [{
            latitude: -33.891614,
            longitude: 151.276417
        },
        [-33.87365, 151.20689]
    ],
    strokeWidth: 3,
    strokeColor: '#f00',
    zIndex: 1
});
mapView.addPolyline(polyline);
```


**Extends:** `Titanium.Proxy` · **Since:** 4.1.0, 4.1.0, 4.1.0, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

