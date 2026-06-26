---
title: Modules.Map.Camera
properties:
  - name: altitude
    type: Number
    summary: |
      The altitude above the ground, measured in meters.<br>
      On Android these zoom values are:<br>
      1: World<br>
      5: Landmass/continent<br>
      10: City<br>
      15: Streets<br>
      20: Buildings<br>
  - name: centerCoordinate
    type: MapPointType
    summary: |
      The coordinate point on which the map should be centered.<br>
  - name: heading
    type: Number
    summary: >
      The heading of the camera (measured in degrees) relative to true
      north.<br>
    description: >
      <p>The value 0 means that the top edge of the map view corresponds to true
      north.<br>

      The value 90 means the top of the map is pointing due east. The value 180
      means<br>

      the top of the map points due south, and so on.</p>
  - name: pitch
    type: Number
    summary: |
      The viewing angle of the camera, measured in degrees.<br>
    description: >
      <p>A value of 0 results in a camera pointed straight down at the map.
      Angles greater than<br>

      0 result in a camera that is pitched toward the horizon by the specified
      number of degrees.<br>

      The value in this property may be clamped to a maximum value to maintain
      map readability.<br>

      There is no fixed maximum value, though, because the actual maximum value
      is dependent on<br>

      the current altitude of the camera.</p>
  - name: eyeCoordinate
    type: MapPointType
    summary: >
      The coordinate point at which to place the camera. Only used on creation
      when <code>altitude</code><br>

      and <code>centerCoordinate</code> are also provided. Setting this property
      at anytime other time will<br>

      have no effect.<br>
    description: >
      <p>If the value for this parameter is equal to the value in the
      <code>centerCoordinate</code> parameter,<br>

      the map is displayed as if the camera is looking straight down. If this
      point is offset<br>

      from the <code>centerCoordinate</code> value, the map is displayed with an
      appropriate heading and pitch angle.<br>

      Not used on Android.</p>
---

# Modules.Map.Camera

A camera object defines a point above the map's surface from which to view the map. Available in iOS 7.0 and later.

Applying a camera to a map has the effect of giving the map a 3D-like appearance.
You can use a camera to rotate the map so that it is oriented to match the user's
heading or to apply a pitch angle to tilt the plane of the map.

If the app is run on pre iOS 7, camera functionality will not be available.
After creating a `Camera` object, it can be applied to the map by setting the `camera` property of the
[map view](Modules.Map.View).

Use the [Modules.Map.createCamera](/api/modules/map) method to create a camera.

If `altitude`, `eyeCoordinate`, and `centerCoordinate` are passed in on creation, a camera will be
returned using the specified viewing angle information.

### Example:
``` javascript
var camera = Map.createCamera({
    altitude: 15.5,
    centerCoordinates: {
        longitude: 151.276417,
        latitude: -33.891614
    },
    heading: 45,
    pitch: 75
});
mapview.camera = camera;
```


**Extends:** `Titanium.Proxy` · **Since:** 9.1.0, 3.2.0, 3.2.0, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

