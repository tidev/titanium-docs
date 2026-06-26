---
title: Modules.Map.Snapshotter
properties:
  - name: region
    type: MapRegionTypev2
    summary: A dictionary specifying the location and zoom level of the map.
  - name: showsPointsOfInterest
    type: Boolean
    summary: >
      When this property is set to YES, the map displays icons and labels
      for<br>

      restaurants, schools, and other relevant points of interest.<br>
  - name: size
    type: SnapshotSize
    summary: |
      A dictionary specifying the width and height of the snapshot.<br>
  - name: mapType
    type: Number
    summary: >
      Map type constant, either <a
      href="/api/modules/map/normal_type">Modules.Map.NORMAL_TYPE</a>, <a
      href="/api/modules/map/satellite_type">Modules.Map.SATELLITE_TYPE</a>,<br>

      <a href="/api/modules/map/hybrid_type">Modules.Map.HYBRID_TYPE</a>, <a
      href="/api/modules/map/hybrid_flyover_type">Modules.Map.HYBRID_FLYOVER_TYPE</a>
      or <a
      href="/api/modules/map/satellite_flyover_type">Modules.Map.SATELLITE_FLYOVER_TYPE</a>.<br>
  - name: showsBuildings
    type: Boolean
    summary: >
      Determines whether building will be shown on the map. The mapType property
      must be set<br>

      to <a href="/api/modules/map/standard_type">Modules.Map.STANDARD_TYPE</a>
      for extruded buildings to be displayed.<br>
methods:
  - name: takeSnapshot
    summary: >
      Takes a snap shot of of the map corresponding to the region property or a
      snap of the mapView if<br>

      passed in as a second parameter.<br>
    parameters:
      - name: success
        type: Callback<Titanium.Blob>
        summary: Function to be called upon successful completion.
      - name: error
        type: Callback
        summary: Function to call upon receiving an error.
    returns:
      type: Titanium.Blob
examples:
  - title: Taking a simple snapshot
    code:
      - content: |-
          var MapModule = require('ti.map');

          var win = Ti.UI.createWindow({
              backgroundColor: 'white'
          });

          var Snapshotter = MapModule.createSnapshotter({
              mapType: MapModule.HYBRID_TYPE,
              region: {
                  latitude: 37.3382,
                  longitude: -121.8863,
                  latitudeDelta: 0.4,
                  longitudeDelta: 0.4
              },
              size: {
                  width: 300, 
                  height: 200
              }
          });

          Snapshotter.takeSnapshot({
              success: function(e) {
                  var imageView = Ti.UI.createImageView({
                      image: e.image
                  });
                  win.add(imageView);
              },
              error: function(e) {
                  Ti.API.error("The snapshot could not be taken: " + e.error);
              }
          });

          win.open();
        language: javascript
    intro: >-
      This is a map-example which creates a simple snapshot of the specified
      map-area.
---

# Modules.Map.Snapshotter

Snapshotter is used to allow screen shots to be taken of a specified region or a mapview.

**Extends:** `Titanium.Proxy` · **Since:** 6.0.0, 6.0.0, 9.2.0 · **Platforms:** iphone, ipad, macos

<ApiProperties />

<ApiMethods />

<ApiExamples />

