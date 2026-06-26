---
title: Modules.Map
properties:
  - name: ANNOTATION_DRAG_STATE_START
    type: Number
    summary: >
      Used in the <a
      href="Modules.Map.View.pinchangedragstate">pinchangedragstate</a>
      event<br>

      to indicate that the user started dragging the annotation.<br>
    since: 3.1.0
  - name: ANNOTATION_DRAG_STATE_END
    type: Number
    summary: >
      Used in the <a
      href="Modules.Map.View.pinchangedragstate">pinchangedragstate</a>
      event<br>

      to indicate that the user finished moving the annotation.<br>
    since: 3.1.0
  - name: ANNOTATION_GREEN
    type: Number
    summary: >
      Color constant used to set a map annotation to green via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
  - name: ANNOTATION_BLUE
    type: Number
    summary: >
      Color constant used to set a map annotation to blue via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
    since:
      iphone: 6.1.0
      ipad: 6.1.0
      android: 3.1.0
  - name: ANNOTATION_AZURE
    type: Number
    summary: >
      Color constant used to set a map annotation to azure via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
    since:
      iphone: 6.1.0
      ipad: 6.1.0
      android: 3.1.0
      macos: 9.2.0
  - name: ANNOTATION_CYAN
    type: Number
    summary: >
      Color constant used to set a map annotation to cyan via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
    since:
      iphone: 6.1.0
      ipad: 6.1.0
      android: 3.1.0
      macos: 9.2.0
  - name: ANNOTATION_MAGENTA
    type: Number
    summary: >
      Color constant used to set a map annotation to magenta via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
    since:
      iphone: 6.1.0
      ipad: 6.1.0
      android: 3.1.0
      macos: 9.2.0
  - name: ANNOTATION_ORANGE
    type: Number
    summary: >
      Color constant used to set a map annotation to orange via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
    since:
      iphone: 6.1.0
      ipad: 6.1.0
      android: 3.1.0
      macos: 9.2.0
  - name: ANNOTATION_PURPLE
    type: Number
    summary: >
      Color constant used to set a map annotation to purple via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
    since:
      iphone: 3.2.0
      ipad: 3.2.0
      android: 6.1.0
      macos: 9.2.0
  - name: ANNOTATION_ROSE
    type: Number
    summary: >
      Color constant used to set a map annotation to rose via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
    since:
      iphone: 6.1.0
      ipad: 6.1.0
      android: 3.1.0
      macos: 9.2.0
  - name: ANNOTATION_YELLOW
    type: Number
    summary: >
      Color constant used to set a map annotation to yellow via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
    since:
      iphone: 6.1.0
      ipad: 6.1.0
      android: 3.1.0
      macos: 9.2.0
  - name: ANNOTATION_VIOLET
    type: Number
    summary: >
      Color constant used to set a map annotation to violet via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
    since:
      iphone: 6.1.0
      ipad: 6.1.0
      android: 3.1.0
      macos: 9.2.0
  - name: ANNOTATION_RED
    type: Number
    summary: >
      Color constant used to set a map annotation to red via the<br>

      <a href="/api/modules/map/annotation">Modules.Map.Annotation.pincolor</a>
      property.<br>
  - name: SATELLITE_TYPE
    type: Number
    summary: >-
      Used with <a href="Modules.Map.View.mapType">mapType</a> to display
      satellite imagery of the area.
  - name: SATELLITE_FLYOVER_TYPE
    type: Number
    summary: >-
      Used with <a href="Modules.Map.View.mapType">mapType</a> to display
      satellite flyover imagery of the area. Available in iOS 9.0 and later.
  - name: NORMAL_TYPE
    type: Number
    summary: >-
      Used with <a href="Modules.Map.View.mapType">mapType</a> to display a
      street map that shows the position of all roads and some road names.
  - name: TERRAIN_TYPE
    type: Number
    summary: >-
      Used with <a href="Modules.Map.View.mapType">mapType</a> to display the
      terrain that shows the position of all roads and some road names.
    platforms:
      - android
  - name: HYBRID_TYPE
    type: Number
    summary: >-
      Used with <a href="Modules.Map.View.mapType">mapType</a> to display a
      satellite image of the area with road and road name information layered on
      top.
  - name: HYBRID_FLYOVER_TYPE
    type: Number
    summary: >-
      Used with <a href="Modules.Map.View.mapType">mapType</a> to display a
      satellite flyover image of the area with road and road name information
      layered on top. Available in iOS 9.0 and later.
  - name: MUTED_STANDARD_TYPE
    type: Number
    summary: >
      Used with <a href="Modules.Map.View.mapType">mapType</a> to display a
      street map where your data is emphasized over<br>

      the underlying map details. Available in iOS 11.0 and later. On Android it
      is mapped to <code>NORMAL_TYPE</code>.<br>
  - name: REASON_API_ANIMATION
    type: Number
    summary: >-
      Used in the <a
      href="Modules.Map.View.regionwillchange">regionwillchange</a> event. The
      animation was initiated in response to the user actions.
    platforms:
      - android
  - name: REASON_DEVELOPER_ANIMATION
    type: Number
    summary: >-
      Used in the <a
      href="Modules.Map.View.regionwillchange">regionwillchange</a> event. The
      camera moved in response to a request from the application.
    platforms:
      - android
  - name: REASON_GESTURE
    type: Number
    summary: >-
      Used in the <a
      href="Modules.Map.View.regionwillchange">regionwillchange</a> event. The
      camera moved in response to the user gestures on the map.
    platforms:
      - android
  - name: SUCCESS
    type: Number
    summary: >-
      Code returned from <a
      href="/api/modules/map">Modules.Map.isGooglePlayServicesAvailable</a>.
      Google Play services is available, and the connection is successful.
    platforms:
      - android
  - name: SERVICE_MISSING
    type: Number
    summary: >-
      Code returned from <a
      href="/api/modules/map">Modules.Map.isGooglePlayServicesAvailable</a>.
      Google Play services is not installed on the device.
    platforms:
      - android
  - name: SERVICE_VERSION_UPDATE_REQUIRED
    type: Number
    summary: >-
      Code returned from <a
      href="/api/modules/map">Modules.Map.isGooglePlayServicesAvailable</a>.
      Google Play services is out of date.
    platforms:
      - android
  - name: SERVICE_DISABLED
    type: Number
    summary: >-
      Code returned from <a
      href="/api/modules/map">Modules.Map.isGooglePlayServicesAvailable</a>.
      Google Play services has been disabled on this device.
    platforms:
      - android
  - name: SERVICE_INVALID
    type: Number
    summary: >-
      Code returned from <a
      href="/api/modules/map">Modules.Map.isGooglePlayServicesAvailable</a>. The
      version of Google Play services installed on this device is not authentic.
    platforms:
      - android
  - name: OVERLAY_LEVEL_ABOVE_LABELS
    type: Number
    summary: >-
      Place the overlay above roadways but below map labels, shields, or
      point-of-interest icons. Available in iOS 7.0 and later.
    since: 3.2.0
  - name: OVERLAY_LEVEL_ABOVE_ROADS
    type: Number
    summary: >
      Place the overlay above map labels, shields, or point-of-interest icons
      but below annotations and 3D projections of buildings.<br>

      Available in iOS 7.0 and later.<br>
    since: 3.2.0
  - name: POLYLINE_JOINT_BEVEL
    type: Number
    summary: |
      Flat bevel on the outside of the joint.<br>
    platforms:
      - android
    since: 5.1.0
  - name: POLYLINE_JOINT_DEFAULT
    type: Number
    summary: >
      Default: Mitered joint, with fixed pointed extrusion equal to half the
      stroke width on the outside of the joint.<br>
    platforms:
      - android
    since: 5.1.0
  - name: POLYLINE_JOINT_ROUND
    type: Number
    summary: >
      Rounded on the outside of the joint by an arc of radius equal to half the
      stroke width, centered at the vertex.<br>
    platforms:
      - android
    since: 5.1.0
  - name: POLYLINE_PATTERN_DASHED
    type: Number
    summary: >
      Polyline type constant used to display a dashed polyline via <a
      href="/api/modules/map/polyline">Modules.Map.Polyline.pattern</a>
      property.<br>
    since: 6.2.0
  - name: POLYLINE_PATTERN_DOTTED
    type: Number
    summary: >
      Polyline type constant used to display a dotted polyline via <a
      href="/api/modules/map/polyline">Modules.Map.Polyline.pattern</a>
      property.<br>
    since: 6.2.0
  - name: FEATURE_VISIBILITY_ADAPTIVE
    type: Number
    summary: Constant indicating that title text adapts to the current map state.
    description: >
      <p>For markers in the normal state, title text is displayed and subtitle
      text is hidden. When a marker<br>

      is selected, the title and subtitle text are hidden when the marker
      requires a callout.</p>
    since: 6.3.0
  - name: FEATURE_VISIBILITY_HIDDEN
    type: Number
    summary: Constant indicating that title text is always hidden.
    since: 6.3.0
  - name: FEATURE_VISIBILITY_VISIBLE
    type: Number
    summary: Constant indicating that title text is always visible.
    since: 6.3.0
  - name: FEATURE_DISPLAY_PRIORITY_REQUIRED
    type: Number
    summary: Constant indicating that the item is required.
    description: >
      <p>An annotation view with this priority does not participate in
      clustering.</p>
    since: 6.3.0
  - name: FEATURE_DISPLAY_PRIORITY_DEFAULT_HIGH
    type: Number
    summary: Constant indicating that the item's display priority is high.
    description: >
      <p>An annotation view with this priority is removed from the map when its
      bounds<br>

      collide with the bounds of another view with a higher priority. If the
      priorities<br>

      of the two views are equal, the view furthest from the center of the map's
      visible<br>

      region is hidden first.</p>
    since: 6.3.0
  - name: FEATURE_DISPLAY_PRIORITY_DEFAULT_LOW
    type: Number
    summary: Constant indicating that the item's display priority is low.
    description: >
      <p>An annotation view with this priority is removed from the map when its
      bounds<br>

      collide with the bounds of another view with a higher priority. If the
      priorities<br>

      of the two views are equal, the view furthest from the center of the map's
      visible<br>

      region is hidden first.</p>
    since: 6.3.0
  - name: FEATURE_TERRITORIES
    type: Number
    summary: >
      The option that represents territorial boundaries such as a national
      border,<br>

      a state boundary, or a neighborhood.<br>
    since: 12.0.0
  - name: FEATURE_PHYSICAL_FEATURES
    type: Number
    summary: >
      The option that represents physical map features such as mountain ranges,
      rivers,<br>

      and ocean basins.<br>
    since: 12.0.0
  - name: FEATURE_TYPE_POINT_OF_INTEREST
    type: Number
    summary: >-
      The option that represents points of interest such as museums, cafes,
      parks, or schools.
    since: 12.0.0
  - name: ANNOTATION_VIEW_COLLISION_MODE_RECTANGLE
    type: Number
    summary: >
      Constant indicating that the full collision frame rectangle should be used
      for<br>

      detecting collisions.<br>
    platforms:
      - iphone
      - ipad
    since: 6.3.0
  - name: ANNOTATION_VIEW_COLLISION_MODE_CIRCLE
    type: Number
    summary: >
      Constant indicating that a circle inscribed in the collision frame
      rectangle should<br>

      be used to determine collisions.<br>
    since: 6.3.0
  - name: SEARCH_RESULT_TYPE_ADDRESS
    type: Number
    summary: A value that indicates that search results include addresses.
    since: 12.3.0
  - name: SEARCH_RESULT_TYPE_POINT_OF_INTEREST
    type: Number
    summary: A value that indicates that search results include points of interest.
    since: 12.3.0
  - name: SEARCH_RESULT_TYPE_QUERY
    type: Number
    summary: >-
      A value that indicates that the search completer includes query
      completions in results.
    since: 12.3.0
methods:
  - name: isGooglePlayServicesAvailable
    summary: >-
      Returns a code to indicate whether Google Play Services is available on
      the device.
    returns:
      type: Number
      summary: |
        One of the following status codes:
        <Modules.Map.SUCCESS>, <Modules.Map.SERVICE_MISSING>,
        <Modules.Map.SERVICE_VERSION_UPDATE_REQUIRED>,
        <Modules.Map.SERVICE_DISABLED> or <Modules.Map.SERVICE_INVALID>.
  - name: search
    summary: >
      Uses the native <code>MKLocalSearchCompleter</code> class to search places
      for<br>

      a given input value.<br>
    description: >
      <p>Please use the <code>didUpdateResults</code> event to get updates for a
      search<br>

      completion request via the <code>results</code> field. If the search
      failed, the<br>

      <code>results</code> field is empty and an <code>error</code> is
      provided.</p>
    parameters:
      - name: value
        type: String
        summary: The value to search with.
      - name: options
        type: SearchCompletionOptions
        summary: Additional options to fine-tune the search request.
  - name: geocodeAddress
    summary: >
      Resolve address details using the <code>CLGeocoder</code> to get
      information (e.g.<br>

      latitude, longitude, postal code and city) about a given input
      address.<br>
    description: |
      <p>The result is provided via the callback (second function argument).</p>
    parameters:
      - name: address
        type: String
        summary: The address to resolve.
      - name: callback
        type: Callback<Object>
        summary: |
          Function to be called upon completion (either success with a place<br>
          or an error).<br>
  - name: getLookAroundImage
    summary: >-
      A utility function that you use to create a static image from a LookAround
      scene.
    parameters:
      - name: callback
        type: Callback<Object>
        summary: >-
          Function to be called upon completion (either success with an image or
          an error).
      - name: latitude
        type: Number
        summary: Latitude of the preferred region.
      - name: longitude
        type: Number
        summary: Longitude of the preferred region.
  - name: openLookAroundDialog
    summary: Opens a LookAround window modally.
    parameters:
      - name: latitude
        type: Number
        summary: Latitude of the preferred region.
      - name: longitude
        type: Number
        summary: Longitude of the preferred region.
examples:
  - title: Basic Map Example
    code:
      - content: |-
          import Map from 'ti.map';

          const window = Ti.UI.createWindow();

          const mountainView = Map.createAnnotation({
              latitude: 37.390749,
              longitude: -122.081651,
              title: 'Appcelerator Headquarters',
              subtitle: 'Mountain View, CA',
              pincolor: Map.ANNOTATION_RED,
              myid: 1 // Custom property to uniquely identify this annotation.
          });

          const mapView = Map.createView({
              mapType: Map.NORMAL_TYPE,
              region: { 
                  latitude: 33.74511,
                  longitude: -84.38993,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
              },
              animate: true,
              regionFit: true,
              userLocation: true,
              annotations: [ mountainView ]
          });

          const circle = Map.createCircle({
              center: {
                  latitude: 33.74511,
                  longitude: -84.38993
              },
              radius: 1000, // = 1.0 km
              fillColor: '#20FF0000'
          });

          mapView.addCircle(circle);
          window.add(mapView);

          mapView.addEventListener('click', event => {
              Ti.API.info('Clicked ' + event.clicksource + ' on ' + event.latitude + ', ' + event.longitude);
          });

          window.open();
        language: javascript
    intro: >-
      This is a basic map example that places a custom annotation on the map,
      and

      listens for click events on the annotation.


      In this example, a custom property (`myid`) is added to the annotation
      object.

      While adding custom members to a Titanium object is not generally
      recommended,

      in this case it provides a mechanism for uniquely identifying an
      annotation. This

      can be useful, for example, if the annotations are dynamically generated

      and it is not practical to identify them by title.
  - title: Alloy XML Markup
    code:
      - content: >-
          // Loads the map module to the global Alloy scope, which can be
          referenced by Alloy.Globals.Map

          Alloy.Globals.Map = require('ti.map');
        language: javascript
      - content: |-
          <Alloy>
              <Window>
                  <Module id="mapView" module="ti.map" onClick="report" method="createView">
                      <Annotation id="appcHQ" myId="1337" />
                  </Module>
              </Window>
          </Alloy>
        language: xml
      - content: |-
          "#mapView": {
              region: {
                  latitude: 33.74511,
                  longitude: -84.38993,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
              }
          },
          "#appcHQ": {
              latitude: 37.368122,
              longitude: -121.913653,
              title: "Appcelerator Headquarters",
              subtitle: "San Jose, CA",
              pincolor: Alloy.Globals.Map.ANNOTATION_RED
          }
        language: javascript
      - content: |-
          function report(event) {
              Ti.API.info('Annotation ' + event.title + ' clicked, ID: ' + event.annotation.myID);
          }

          $.index.open();
        language: javascript
    intro: >-
      Previous example as an Alloy view.


      In XML markup, use the `View` element with the `module` attribute set to
      `ti.map` to create an

      instance of a map view, then use the `Annotation` element to define an
      annotation.


      In the initializer file, load the map module and assign it to the
      `Alloy.Globals.Map` namespace.

      This variable can be used to reference map module constants in the
      project, as seen in the TSS

      file to assign the `pincolor` attribute.


      `alloy.js`:
  - title: Map Clustering (iOS 11+)
    code:
      - content: |-
          import Map from 'ti.map';

          const window = Ti.UI.createWindow();
          const annotations = [];

          for (let i = 0; i < 10; i++) {
              annotations.push(Map.createAnnotation({
                  title: 'Appcelerator Inc.',
                  subtitle: 'TiRocks!',
                  clusterIdentifier: 'abc', // Required for clusters
                  collisionMode: Map.ANNOTATION_VIEW_COLLISION_MODE_RECTANGLE,
                  showAsMarker: true,
                  markerGlyphText: i.toString(),
                  markerColor: 'blue',
                  markerGlyphColor: 'green',
                  markerTitleVisibility: Map.FEATURE_VISIBILITY_VISIBLE,
                  markerSubtitleVisibility: Map.FEATURE_VISIBILITY_HIDDEN,
                  markerGlyphImage: 'path/to/flag.png',
                  markerSelectedGlyphImage: 'path/to/flag-selected.png',
                  annotationDisplayPriority: Map.FEATURE_DISPLAY_PRIORITY_DEFAULT_LOW,
                  latitude: (Math.random() * 10) + 40,
                  longitude: Math.random() * 10,
              }));
          }

          const mapView = Map.createView({
              annotations: annotations,
              rotateEnabled: true,
              mapType: Map.MUTED_STANDARD_TYPE,
              showsPointsOfInterest: false,
              userLocation: true
          });

          mapView.addEventListener('clusterstart', event => {
              Ti.API.info('clustering started!');

              const clusterAnnotation = Map.createAnnotation({
                  showAsMarker: true,
                  markerText: event.memberAnnotations.length.toString(),
                  title: 'Cluster Title',
                  subtitle: 'Cluster Subtitle',
              });

              mapView.setClusterAnnotation({
                  annotation: clusterAnnotation,
                  memberAnnotations: event.memberAnnotations
              });
          });
          window.add(mapView);
          window.open();
        language: javascript
    intro: >-
      This is a map-example which creates marker annotation and clustering of
      annotations.


      The `clusterIdentifier` property and the `clusterstart` event are required
      in order to enable

      clustering. You can control the clustering by defining the `collisionMode`
      property and

      setting special cluster annotations using the `setClusterAnnotation`
      method on your map

      view instance.
  - title: Search Request (iOS only)
    code:
      - content: |-
          import Map from 'ti.map';

          Map.addEventListener('didUpdateResults', event => {
              console.warn('Found place:');
              console.warn(event)
          });

          Map.search('Colosseum', {
            region: {
              latitude: 41.890560,
              longitude: 12.494270,
              latitudeDelta: 1,
              longitudeDelta: 1,
            },
            resultTypes: [Map.SEARCH_RESULT_TYPE_POINT_OF_INTEREST, Map.SEARCH_RESULT_TYPE_ADDRESS]
          });
        language: javascript
    intro: |-
      The following example shows the MapKit based search request.
      The options in `search` (2nd parameter) are optional, but improve
      the accuracy of the results.
---

# Modules.Map

Add-on Map module

### Requirements

-   Google Maps API key (required for both development and production)
-   Google Play services SDK installed using the Android SDK manager
-   This module only works on Android devices.  This module is not supported on the Android emulator

### Getting Started

-   Edit the `modules` section of your tiapp.xml file to include this module:

    ``` xml
    <ti:app>
        <modules>
            <!-- Add this line to your modules section -->
            <module platform="android">ti.map</module>
        </modules>
    </ti:app>
    ```

-   Obtain a Google Maps API key.  For instructions, refer to the "Obtain and Add a Google API Key"
    section in the
    [Google Maps v2 for Android guide](http://docs.appcelerator.com/titanium/latest/#!/guide/Google_Maps_v2_for_Android).

-   Add the following `meta-tag` element to the Android manifest section of the tiapp.xml
    file. You may need to add the `manifest` and `application` elements.
    ``` xml
    <ti:app>
        <android xmlns:android="http://schemas.android.com/apk/res/android">
            <manifest>
                <application>
                    <!-- Replace "YOUR_API_KEY" with the Google API key you obtained -->
                    <meta-data 
                        android:name="com.google.android.geo.API_KEY"
                        android:value="YOUR_API_KEY" />
                </application>
            </manifest>
        </android>
    </ti:app>
    ```

-   Instantiate the module with the `import Map from 'ti.map'` API, then make subsequent API calls with
    the new map object.

    ``` javascript
    import Map from 'ti.map';

    const mapView = Map.createView({
      mapType: Map.NORMAL_TYPE
    });
    ```

## iOS

This module is a replacement for the built-in Titanium.Map module on iOS.

For more instructions and examples of using the module, refer to the
[iOS Map Kit guide](http://docs.appcelerator.com/titanium/latest/#!/guide/iOS_Map_Kit).

### Requirements

-   Applications using this module must be built using Xcode 5 or later.

### Getting Started

-   Edit the `modules` section of your tiapp.xml file to include this module:

    ``` xml
    <ti:app>
        <modules>
            <!-- Add this line to your modules section -->
            <module platform="iphone">ti.map</module>
        </modules>
    </ti:app>
    ```

-   To use the `userLocation` property in iOS 8 and later, add either the
    [`NSLocationWhenInUseUsageDescription`](https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW26)
    or
    [`NSLocationAlwaysUsageDescription`](https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW18)
    key to the iOS plist section of the project's `tiapp.xml` file.

    ``` xml
    <ti:app>
        <ios>
            <plist>
                <dict>
                    <key>NSLocationAlwaysUsageDescription</key>
                    <string>
                        Specify the reason for accessing the user's location information.
                        This appears in the alert dialog when asking the user for permission to
                        access their location.
                    </string>
                </dict>
            </plist>
        </ios>
    </ti:app>
    ```

-   Instantiate the module with the `import Map from 'ti.map'` API, then make subsequent API calls with
    the new map object.

    ``` javascript
    import Map from 'ti.map';

    const mapView = Map.createView({
      mapType: Map.NORMAL_TYPE
    });
    ```

### Breaking Changes

-   The `addRoute` method no longer accepts a dictionary as a parameter. Pass a [Modules.Map.Route](/api/modules/map/route) object instead.


**Extends:** `Titanium.Module` · **Since:** 3.1.0, 3.2.0, 3.2.0, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

<ApiExamples />

