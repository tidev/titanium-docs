---
title: Modules.Map.View
properties:
  - name: animate
    type: Boolean
    summary: Indicates if changes to the mapping region should be animated.
    description: >
      <p>Setting this to 'false' will not stop the animation from clicking the
      My Location button,<br>

      since that is native Android behavior.</p>
  - name: annotations
    type: Array<Modules.Map.Annotation>
    summary: An array of annotations to add to the map.
    description: >
      <p>There is no guarantee that the order of elements in the
      <code>annotations</code> property will be<br>

      maintained when creating, adding or deleting annotations from the
      Ti.Map.View object.<br>

      If the application depends on the annotations being in a set order, it
      should keep<br>

      references to all of the annotations in a separate array.</p>
  - name: liteMode
    type: Boolean
    summary: Create a liteMode map version
    description: >
      <p>When the <code>liteMode</code> is switched on the map will be displayed
      as a bitmap with limited interaction.<br>

      Please refer to <a
      href="https://developers.google.com/maps/documentation/android-sdk/lite">Google
      developers documentation</a><br>

      for more details.</p>
    platforms:
      - android
    since: 5.0.3
  - name: mapType
    type: Number
    summary: >
      Map type constant, either <a
      href="/api/modules/map/normal_type">Modules.Map.NORMAL_TYPE</a>, <a
      href="/api/modules/map/satellite_type">Modules.Map.SATELLITE_TYPE</a>,<br>

      <a href="/api/modules/map/terrain_type">Modules.Map.TERRAIN_TYPE</a>, <a
      href="/api/modules/map/hybrid_type">Modules.Map.HYBRID_TYPE</a>, <a
      href="/api/modules/map/hybrid_flyover_type">Modules.Map.HYBRID_FLYOVER_TYPE</a>
      or<br>

      <a
      href="/api/modules/map/satellite_flyover_type">Modules.Map.SATELLITE_FLYOVER_TYPE</a>.<br>
  - name: zOrderOnTop
    type: Boolean
    summary: Controls wether the map view's surface is placed on top of its window.
    description: >
      <p>Please refer to <a
      href="https://developers.google.com/maps/documentation/android/reference/com/google/android/gms/maps/GoogleMapOptions#zOrderOnTop(boolean)">zOrderOnTop</a><br>

      for more details.</p>
  - name: region
    type: MapRegionTypev2
    summary: |
      A dictionary specifying the location and zoom level of the map.<br>
  - name: padding
    type: MapViewPadding
    summary: Sets the distance between each edges of the view to the map controls.
    description: |
      <p>The map view controls may be obscured by other elements.</p>
    since: 7.4.0
  - name: userLocation
    type: Boolean
    summary: >
      Boolean indicating if the user's current device location should be shown
      on the<br>

      map.<br>
    description: >
      <p>If <code>true</code>, the user's location is marked with a pin, and the
      My Location button will appear in the top<br>

      right corner of the screen. Starting in iOS 8, permissions must be added
      to tiapp.xml. Details in description.</p>
  - name: userLocationButton
    type: Boolean
    summary: >
      Enable or disables the My Location button. If the button is enabled, it is
      only shown when <code>userLocation</code><br>

      is enabled.<br>
    description: |
      <p>If <code>true</code>, the My Location button is enabled.</p>
    platforms:
      - android
    since: 3.1.1
  - name: compassEnabled
    type: Boolean
    summary: Enable or disables the compass button.
    since:
      android: 3.2.3
      iphone: 6.1.0
      ipad: 6.1.0
      macos: 9.2.0
  - name: mapToolbarEnabled
    type: Boolean
    summary: Enable or disables the map toolbar.
    platforms:
      - android
    since: 6.1.0
  - name: enableZoomControls
    type: Boolean
    summary: |
      Enables or disables the built-in zoom controls.<br>
    description: >
      <p>If enabled, the zoom controls are a pair of buttons (one for zooming
      in, one for zooming out) that appear on the screen.<br>

      When pressed, they cause the camera to zoom in (or out) by one zoom level.
      If disabled, the zoom controls are not shown.</p>
    platforms:
      - android
  - name: maxZoomLevel
    type: Number
    summary: Returns the maximum zoom level available at the current camera position.
    description: >
      <p>Returns the maximum zoom level for the current camera position.<br>

      This takes into account what map type is currently being used.<br>

      For example, satellite or terrain may have a lower max zoom level than the
      base map tiles.</p>

      <p>This will only give the correct value after the 'complete' event is
      fired.</p>
    platforms:
      - android
    since: 3.2.3
  - name: minZoomLevel
    type: Number
    summary: Returns the minimum zoom level available at the current camera position.
    description: >
      <p>Returns the minimum zoom level. This is the same for every location
      (unlike the maximum zoom level)<br>

      but may vary between devices and map sizes.</p>

      <p>This will only give the correct value after the 'complete' event is
      fired.</p>
    platforms:
      - android
    since: 3.2.3
  - name: minClusterSize
    type: Number
    summary: Sets the minium size of a cluster.
    description: >
      <p>The minium cluster size is the smallest number of annotations that are
      merged together and<br>

      (minClusterSize + 1) is the smallest number that will appear on the
      cluster.</p>
    platforms:
      - android
    since: 5.2.0
  - name: zoom
    type: Number
    summary: Returns the current zoom level from the current camera position.
    description: >
      <p>Returns the current zoom level from the current camera position.<br>

      Note: This will only return the correct value once the
      <code>complete</code> event is fired.</p>
    platforms:
      - android
    since: 7.1.0
  - name: traffic
    type: Boolean
    summary: Toggles the traffic layer on or off.
    description: >
      <p>Set to <code>true</code> to display the traffic layer or
      <code>false</code> to hide it.<br>

      This is subject to the availability of traffic data.</p>
    platforms:
      - android
  - name: camera
    type: Modules.Map.Camera
    summary: The camera used for determining the appearance of the map.
    description: >
      <p>A camera object defines a point above the map's surface from which to
      view the map. Applying a camera to a map has the<br>

      effect of giving the map a 3D-like appearance. You can use a camera to
      rotate the map so that it is oriented to match<br>

      the user's heading or to apply a pitch angle to tilt the plane of the
      map.</p>

      <p>Assigning a new camera to this property updates the map immediately and
      without animating the change. If you want to<br>

      animate changes in camera position, use the <code>animateCamera</code>
      method instead.</p>

      <p>You must not set this property to null. To restore the map to a flat
      appearance, apply a camera with a pitch angle of 0,<br>

      which yields a camera looking straight down onto the map surface.</p>
    since:
      android: 9.1.0
      iphone: 3.2.0
      ipad: 3.2.0
      macos: 9.2.0
  - name: pitchEnabled
    type: Boolean
    summary: >-
      A Boolean value indicating whether the map camera's pitch information is
      used.
    description: >
      <p>When this property is set to <code>true</code> and a valid camera is
      associated with the map,<br>

      the camera's pitch angle is used to tilt the plane of the map. When this
      property<br>

      is set to <code>false</code>, the camera's pitch angle is ignored and the
      map is always displayed<br>

      as if the user is looking straight down onto it.</p>
    since: 3.2.0
  - name: rotateEnabled
    type: Boolean
    summary: >-
      A Boolean value indicating whether the map camera's heading information is
      used.
    description: >
      <p>When this property is set to <code>true</code> and a valid camera is
      associated with the map,<br>

      the camera's heading angle is used to rotate the plane of the map around
      its center<br>

      point. When this property is set to <code>false</code>, the camera's
      heading angle is ignored and the<br>

      map is always oriented so that true north is situated at the top of the
      map view.</p>
    since: 3.2.0
  - name: scrollEnabled
    type: Boolean
    summary: >-
      A Boolean value indicating whether the map can be scrolled by dragging
      gesture.
    description: >
      <p>When this property is set to <code>true</code> the a map view can be
      panned or scrolled by dragging the map view.</p>
    since:
      android: 8.0.0
      iphone: 7.2.0
      ipad: 7.2.0
      macos: 9.2.0
  - name: showsBuildings
    type: Boolean
    summary: >-
      A Boolean indicating whether the map displays extruded building
      information.
    description: >
      <p>When this property is set to <code>true</code> and the camera has a
      pitch angle greater than zero,<br>

      the map extrudes buildings so that they extend above the map plane,
      creating a 3D effect.<br>

      The <code>mapType</code> property must be set to <a
      href="/api/modules/map/normal_type">Modules.Map.NORMAL_TYPE</a> for
      extruded buildings to be displayed.</p>
    since: 3.2.0
  - name: showsPointsOfInterest
    type: Boolean
    summary: >-
      A Boolean indicating whether the map displays point-of-interest
      information.
    description: >
      <p>When this property is set to <code>true</code>, the map displays icons
      and labels for restaurants,<br>

      schools, and other relevant points of interest.</p>
    since: 3.2.0
  - name: showsCompass
    type: Boolean
    summary: A Boolean indicating whether the map displays a compass control.
    description: >
      <p>When this property is set to <code>true</code>, the map displays the
      control that lets users change the heading<br>

      orientation of the map.</p>
    deprecated: true
    since: 5.2.0
  - name: showsScale
    type: Boolean
    summary: A Boolean indicating whether the map shows scale information.
    description: >
      <p>When this property is set to <code>true</code>, the map displays the
      scale information.</p>
    since: 5.2.0
  - name: showsTraffic
    type: Boolean
    summary: A Boolean value indicating whether the map displays traffic information.
    description: >
      <p>The mapType property must be set to <a
      href="/api/modules/map/normal_type">Modules.Map.NORMAL_TYPE</a> or <a
      href="/api/modules/map/hybrid_type">Modules.Map.HYBRID_TYPE</a> for<br>

      traffic information to be shown.</p>
    since: 5.2.0
  - name: style
    type: String
    summary: JSON String to style the Map.
    description: >
      <p>This property will change the look (colors, roads, labels) of the map.
      A valid JSON can be created<br>

      at <a href="https://mapstyle.withgoogle.com/">Google Maps Styling
      Wizard</a></p>
    platforms:
      - android
    since: 6.1.0
  - name: zoomEnabled
    type: Boolean
    summary: >-
      A Boolean value indicating whether the map can be zoomed by pinching or
      tapping.
    description: >
      <p>When this property is set to <code>true</code> the a map view can be
      zoomed by pinching inwards to zoom out<br>

      and reverse to zoom in. Zooming in can also be accomplished by
      double-tapping the map view. Zooming<br>

      out can also be accomplished by two-finger tapping the map view.</p>
    since:
      android: 8.0.0
      iphone: 7.2.0
      ipad: 7.2.0
      macos: 9.2.0
  - name: indoorEnabled
    type: Boolean
    summary: A Boolean value indicating whether the indoor mapping is enabled.
    description: >
      <p>This property is used to enabled/disable the indoor mapping feature of
      Google Maps.<br>

      Changing the value after the MapView is drawn can cause flickering.<br>

      You can read more at:<br>

      <a href="https://www.google.com/maps/about/partners/indoormaps/">Google
      Indoor Maps</a></p>
    platforms:
      - android
    since: 7.5.0
methods:
  - name: addAnnotation
    summary: Adds a new annotation to the map.
    parameters:
      - name: annotation
        type: Modules.Map.Annotation
        summary: >-
          a <a href="/api/modules/map/annotation">Modules.Map.Annotation</a>
          instance.
  - name: addAnnotations
    summary: Adds one or more new annotations to the map.
    parameters:
      - name: annotations
        type: Array<Modules.Map.Annotation>
        summary: |
          Array of <a href="Modules.Map.Annotation">Annotation</a> objects<br>
  - name: addRoute
    summary: Adds a route to the map.
    parameters:
      - name: route
        type: Modules.Map.Route
        summary: Modules.Map.Route
  - name: addHeatmap
    summary: Adds a heatmap to the map.
    description: |
      <p>A heatmap is defined by an array of coordinates.</p>
    parameters:
      - name: coordinates
        type: MapPointType
        summary: An array of coordinates
  - name: containsCoordinate
    summary: |
      Validated whether or not a given coordinate is currently visible<br>
      in the map rect.<br>
    parameters:
      - name: coordinate
        type: MapPointType
        summary: >-
          The <code>latitude</code> and <code>longitude</code> pair represented
          by an Object.
    returns:
      type: Boolean
      summary: Returns `true` if given coordinate is within the displayed map view.
  - name: deselectAnnotation
    summary: >
      Deselects the specified annotation, so the main annotation is hidden and
      only<br>

      a pin image is shown.<br>
    parameters:
      - name: annotation
        type: String, Modules.Map.Annotation
        summary: >-
          Annotation to deselect, identified by an annotation title or a <a
          href="/api/modules/map/annotation">Modules.Map.Annotation</a>
          reference.
  - name: removeAllAnnotations
    summary: Removes all annotations from the map.
  - name: removeAnnotation
    summary: Removes an existing annotation from the map.
    parameters:
      - name: annotation
        type: String, Modules.Map.Annotation
        summary: >-
          Annotation to remove, identified by an annotation title or a <a
          href="/api/modules/map/annotation">Modules.Map.Annotation</a>
          reference.
  - name: removeAnnotations
    summary: Removes one or more existing annotations from the map.
    description: >
      <p>Annotations can be identified by title or by a <a
      href="/api/modules/map/annotation">Modules.Map.Annotation</a><br>

      reference.</p>
    parameters:
      - name: annotations
        type: Array<String>, Array<Modules.Map.Annotation>
        summary: Array of annotations to remove.
  - name: removeRoute
    summary: Remove a previously added route.
    parameters:
      - name: route
        type: Modules.Map.Route
        summary: An instance of <a href="/api/modules/map/route">Modules.Map.Route</a>
  - name: selectAnnotation
    summary: Selects the annotation, showing the full annotation.
    parameters:
      - name: annotation
        type: String, Modules.Map.Annotation
        summary: >-
          Annotation to show, identified by an annotation title or a <a
          href="/api/modules/map/annotation">Modules.Map.Annotation</a>
          reference.
  - name: setMapType
    summary: Sets the type of map (satellite, normal, or terrain).
    parameters:
      - name: mapType
        type: Number
        summary: >
          Map type constant, either <a
          href="/api/modules/map/normal_type">Modules.Map.NORMAL_TYPE</a>, <a
          href="/api/modules/map/satellite_type">Modules.Map.SATELLITE_TYPE</a>,<br>

          <a href="/api/modules/map/terrain_type">Modules.Map.TERRAIN_TYPE</a>,
          <a href="/api/modules/map/hybrid_type">Modules.Map.HYBRID_TYPE</a>, <a
          href="/api/modules/map/hybrid_flyover_type">Modules.Map.HYBRID_FLYOVER_TYPE</a>
          or<br>

          <a
          href="/api/modules/map/satellite_flyover_type">Modules.Map.SATELLITE_FLYOVER_TYPE</a>.<br>
  - name: setLocation
    summary: Sets the map location and zoom level.
    description: >
      <p>The location is set using a simple dictionary object, described in
      &lt;MapLocationTypeV2&gt;. If <code>latitudeDelta</code><br>

      and <code>longitudeDelta</code> are set, these specified parameters bound
      the area of interest, which is centered<br>

      and displayed at the greatest possible zoom level. This method can only be
      called after the map<br>

      completes loading. Before that, use <a
      href="Modules.Map.View.region">region</a> to set the map location.<br>

      For example:</p>

      <div class="language-javascript"><pre
      class="shiki"><code>myMapView.setLocation({
        latitude: 37.337681,
        longitude: -122.038193,
        animate: true,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
      });

      </code></pre></div>
    parameters:
      - name: location
        type: MapLocationTypeV2
        summary: |
          Dictionary specifying the location and the zoom level for the map.<br>
  - name: zoom
    summary: Zooms in or out of the map.
    description: >
      <p>Zooms in or out by specifying a relative zoom level. A positive value
      increases<br>

      the current zoom level and a negative value decreases the zoom level.</p>

      <p>Each increase in zoom level increases the magnification by a factor of
      two.</p>
    parameters:
      - name: level
        type: Number
        summary: Relative zoom level (positive to zoom in, negative to zoom out).
  - name: snapshot
    summary: Takes a snapshot of the map
    description: >
      <p>Takes a snapshot of the current map and returns the image via <a
      href="Modules.Map.View.onsnapshotready">onsnapshotready</a> event.</p>
  - name: animateCamera
    summary: >-
      Changes the camera used for determining the map's viewing parameters and
      animates the change.
    parameters:
      - name: animationParams
        type: CameraAnimationParams
        summary: >
          Properties for controlling the camera animation. The property
          <code>camera</code> is required.<br>
      - name: callback
        type: Callback<Object>
        summary: >
          A method that will be called when the camera animation completes.
          Optionally, the completion<br>

          of camera animations can be captured by listening for a
          <code>regionchanged</code> event with <code>animated</code><br>

          set to true.<br>
  - name: showAnnotations
    summary: >
      Sets the visible region so that the map displays the specified
      annotations. If no array is passed<br>

      annotations on the map will be shown. The default padding of 20px is
      applied and can be changed by<br>

      using the <a href="/api/modules/map/view">Modules.Map.View.padding</a>
      property.<br>
    parameters:
      - name: annotations
        type: Array<Modules.Map.Annotation>
        summary: >
          An array of <a
          href="/api/modules/map/annotation">Modules.Map.Annotation</a> to
          display.<br>
        optional: true
  - name: addPolygon
    summary: Adds a new polygon to the map.
    parameters:
      - name: polygon
        type: Modules.Map.Polygon
        summary: a <a href="/api/modules/map/polygon">Modules.Map.Polygon</a> instance.
  - name: addPolygons
    summary: Adds one or more new polygons to the map.
    parameters:
      - name: polygons
        type: Array<Modules.Map.Polygon>
        summary: |
          Array of <a href="Modules.Map.Polygon">Polygons</a> objects<br>
  - name: removePolygon
    summary: Remove a polygon from the map.
    parameters:
      - name: polygon
        type: Modules.Map.Polygon
        summary: |
          A <a href="Modules.Map.Polygon">Polygon</a> object<br>
  - name: removeAllPolygons
    summary: Remove all polygons from the map.
  - name: addPolyline
    summary: Adds a new polylines to the map.
    parameters:
      - name: polygon
        type: Modules.Map.Polyline
        summary: >-
          a <a href="/api/modules/map/polyline">Modules.Map.Polyline</a>
          instance.
  - name: addPolylines
    summary: Adds one or more new polylines to the map.
    parameters:
      - name: polylines
        type: Array<Modules.Map.Polyline>
        summary: |
          Array of <a href="Modules.Map.Polyline">Polyline</a> objects<br>
  - name: removePolyline
    summary: Remove a polyline from the map.
    parameters:
      - name: polyline
        type: Modules.Map.Polyline
        summary: |
          An <a href="Modules.Map.Polyline">Polyline</a> object<br>
  - name: removeAllPolylines
    summary: Remove all polylines from the map.
  - name: addCircle
    summary: Adds a new circle to the map.
    parameters:
      - name: circle
        type: Modules.Map.Circle
        summary: a <a href="/api/modules/map/circle">Modules.Map.Circle</a> instance.
  - name: addCircles
    summary: Adds one or more new circles to the map.
    parameters:
      - name: circles
        type: Array<Modules.Map.Circle>
        summary: |
          Array of <a href="Modules.Map.Circle">Circle</a> objects<br>
  - name: removeCircle
    summary: Remove a circle from the map.
    parameters:
      - name: circle
        type: Modules.Map.Circle
        summary: |
          An <a href="Modules.Map.Circle">Circle</a> object<br>
  - name: removeAllCircles
    summary: Remove all circles from the map.
  - name: addImageOverlay
    summary: Adds a new image overlay to the map.
    parameters:
      - name: imageOverlay
        type: Modules.Map.ImageOverlay
        summary: >-
          A <a
          href="/api/modules/map/image-overlay">Modules.Map.ImageOverlay</a>
          instance.
  - name: addImageOverlays
    summary: Adds one or more new image overlays to the map.
    parameters:
      - name: imageOverlays
        type: Array<Modules.Map.ImageOverlay>
        summary: >
          Array of <a href="Modules.Map.ImageOverlay">ImageOverlay</a>
          objects<br>
  - name: removeImageOverlay
    summary: Remove an image overlay from the map.
    parameters:
      - name: imageOverlay
        type: Modules.Map.ImageOverlay
        summary: |
          An <a href="Modules.Map.ImageOverlay">ImageOverlay</a> object<br>
  - name: removeAllImageOverlays
    summary: Remove all image overlays from the map.
  - name: setClusterAnnotation
    summary: Set new cluster annotation for the clustered annotation.
    description: >
      <p>This method should be called inside the <code>clusterstart</code>
      event.<br>

      See the example &quot;Map Example With Marker Annotation and
      Clustering&quot;.</p>
    parameters:
      - name: clusterAnnotationParam
        type: ClusterAnnotationParams
        summary: Properties for creating cluster annotation.
events:
  - name: clusterstart
    summary: Fired when a collision between annotations occurs.
    properties:
      - name: memberAnnotations
        type: Array<Modules.Map.Annotation>
        summary: Array of annotations participating in clustering.
      - name: map
        type: Modules.Map.View
        summary: This map view.
  - name: onsnapshotready
    summary: >-
      Fired when the snapshot is ready after <a
      href="Modules.Map.View.snapshot">snapshot</a> is invoked.
    properties:
      - name: snapshot
        type: Titanium.Blob
        summary: snapshot of the current map
  - name: pinchangedragstate
    summary: Fired when the user interacts with a draggable annotation.
    properties:
      - name: annotation
        type: Modules.Map.Annotation
        summary: Annotation being dragged.
      - name: map
        type: Modules.Map.View
        summary: This map view.
      - name: title
        type: String
        summary: Annotation title.
      - name: newState
        type: Number
        summary: >
          New drag state for the annotation, one of<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_NONE">ANNOTATION_DRAG_STATE_NONE</a>,<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_START">ANNOTATION_DRAG_STATE_START</a>,<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_DRAG">ANNOTATION_DRAG_STATE_DRAG</a>,<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_CANCEL">ANNOTATION_DRAG_STATE_CANCEL</a>
          or<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_END">ANNOTATION_DRAG_STATE_END</a>.<br>
      - name: oldState
        type: Number
        summary: >
          Previous drag state for the annotation, one of<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_NONE">ANNOTATION_DRAG_STATE_NONE</a>,<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_START">ANNOTATION_DRAG_STATE_START</a>,<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_DRAG">ANNOTATION_DRAG_STATE_DRAG</a>,<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_CANCEL">ANNOTATION_DRAG_STATE_CANCEL</a>
          or<br>

          <a
          href="Titanium.Map.ANNOTATION_DRAG_STATE_END">ANNOTATION_DRAG_STATE_END</a>.<br>
  - name: click
    summary: >
      Fired when the user selects or deselects an annotation, a polygon, a
      polyline or a circle.<br>
    description: >
      <p>Note that the <code>click</code> event is not fired every time the user
      clicks on the map.<br>

      It is fired in two circumstances:</p>

      <ul>

      <li>The user clicks on the annotation. This will select the
      annotation.</li>

      <li>The user deselects an annotation either by clicking on the map or
      another annotation.</li>

      <li>The user clicks on a polygon, a polyline or a circle.</li>

      </ul>

      <p>Note that only one annotation can be selected at any given time.</p>

      <p>The <code>click</code> event includes a value,
      <code>clicksource</code>, which describes the part of the annotation<br>

      that was clicked. The <code>clicksource</code> can be one of
      <code>pin</code>, <code>infoWindow</code>, <code>leftButton</code> or
      <code>rightButton</code><br>

      on iOS and <code>pin</code>, <code>title</code>, <code>subtitle</code>,
      <code>leftPane</code>, <code>rightPane</code>, <code>infoWindow</code> or
      <code>null</code> on Android.<br>

      If the user deselects an annotation by clicking on the pin,
      <code>clicksource</code> is <code>pin</code>.<br>

      If the user deselects the annotation by clicking elsewhere in the map
      view, <code>clicksource</code> is <code>map</code>.</p>

      <p>For polygon, polyline or circle, The <code>click</code> event includes
      the following values.<br>

      <code>clicksource</code> is a string describing the shape type.
      <code>map</code> is the map view instance.<br>

      <code>latitude</code> and <code>longitude</code> is the corresponding
      coordinates on the map where the user<br>

      clicked in the shape.</p>
    properties:
      - name: title
        type: String
        summary: Title of the annotation.
      - name: subtitle
        type: String
        summary: Subtitle of the annotation.
      - name: map
        type: Modules.Map.View
        summary: The map view instance.
      - name: clicksource
        type: String
        summary: >
          Source of the click event. Can be one of <code>pin</code>,
          <code>leftPane</code>, <code>rightPane</code>, <code>infoWindow</code>
          or <code>null</code>.<br>

          If it's a shape, it can be one of <code>polygon</code>,
          <code>polyline</code>, or <code>circle</code>. On Android, this also
          applies<br>

          for <code>title</code> and <code>subtitle</code>.<br>
      - name: annotation
        type: Modules.Map.Annotation
        summary: Annotation source object.
      - name: latitude
        type: Number
        summary: >
          Latitude of the clicked annotation or the point clicked in the
          polygon, polyline and circle.<br>
      - name: longitude
        type: Number
        summary: >
          Longitude of the clicked annotation or the point clicked in the
          polygon, polyline and circle.<br>
      - name: deselected
        type: Boolean
        summary: >
          Will show if the annotation was selected (false) or deselected
          (true)<br>
  - name: complete
    summary: Fired when the map completes loading.
  - name: mapclick
    summary: |
      Fired when the user clicks on the map<br>
    description: >
      <p>The <code>mapclick</code> event is fired when the user clicks on the
      map and returns the longitude/latitude of<br>

      that position.</p>
    properties:
      - name: map
        type: Modules.Map.View
        summary: The map view instance.
      - name: latitude
        type: Number
        summary: |
          Latitude of the clicked position.<br>
      - name: longitude
        type: Number
        summary: |
          Longitude of the clicked position.<br>
  - name: regionwillchange
    summary: |
      Fired when the mapping region will change.<br>
    properties:
      - name: longitude
        type: Number
        summary: Longitude value for the center point of the map, in decimal degrees.
      - name: latitude
        type: Number
        summary: Latitude value for the center point of the map, in decimal degrees.
      - name: longitudeDelta
        type: Number
        summary: >
          The amount of east-to-west distance displayed on the map, measured in
          decimal degrees.<br>
      - name: latitudeDelta
        type: Number
        summary: >
          The amount of north-to-south distance displayed on the map, measured
          in decimal degrees.<br>
      - name: animated
        type: Boolean
        summary: >
          The regionwillchange event was caused by an <code>animation</code>,
          such as a animating the camera.<br>
      - name: reason
        type: Number
        summary: >
          The reason for the camera change, either <a
          href="/api/modules/map/reason_api_animation">Modules.Map.REASON_API_ANIMATION</a>,<br>

          <a
          href="/api/modules/map/reason_developer_animation">Modules.Map.REASON_DEVELOPER_ANIMATION</a>
          or <a
          href="/api/modules/map/reason_gesture">Modules.Map.REASON_GESTURE</a>.<br>
  - name: regionchanged
    summary: |
      Fired when the mapping region finished changing.<br>
    properties:
      - name: longitude
        type: Number
        summary: Longitude value for the center point of the map, in decimal degrees.
      - name: latitude
        type: Number
        summary: Latitude value for the center point of the map, in decimal degrees.
      - name: longitudeDelta
        type: Number
        summary: >
          The amount of east-to-west distance displayed on the map, measured in
          decimal degrees.<br>
      - name: latitudeDelta
        type: Number
        summary: >
          The amount of north-to-south distance displayed on the map, measured
          in decimal degrees.<br>
      - name: animated
        type: Boolean
        summary: >
          The regionchanged event was caused by an <code>animation</code>, such
          as a animating the camera.<br>
  - name: longclick
    summary: |
      Fired when the user makes a long-press gesture on the map.<br>
    description: >
      <p>A long press is generated by touching and holding on the touch
      screen.</p>

      <p>The event occurs before the finger/button is lifted.</p>

      <p>The <code>longclick</code> event returns longitude and latitude of the
      point on the ground that was pressed.</p>
    properties:
      - name: latitude
        type: Number
        summary: latitude of the point on the ground that was pressed.
      - name: longitude
        type: Number
        summary: longitude of the point on the ground that was pressed.
      - name: map
        type: Modules.Map.View
        summary: The map view instance.
  - name: userLocation
    summary: |
      Fired when the user changes on the map.<br>
    description: >
      <p>When the user location is available or changes at the map it will fire
      the event.</p>
    properties:
      - name: latitude
        type: Number
        summary: Latitude of the point on the ground that was pressed.
      - name: longitude
        type: Number
        summary: Longitude of the point on the ground that was pressed.
  - name: poideselect
    summary: >-
      Fired when the user deselects a Point of Interest (e.g. restaurant or
      hotel).
  - name: poiclick
    summary: >-
      Fired when the user selects a Point of Interest (e.g. restaurant or
      hotel).
    description: >
      <p>Make sure to use the <a
      href="/api/modules/map/view">Modules.Map.View.selectableMapFeatures</a>
      property to define<br>

      annotations tha should be selectable. Available in iOS 16+</p>
    properties:
      - name: name
        type: String
        summary: The descriptive name associated with the map item.
      - name: featureType
        type: Number
        summary: >
          The type of map feature this annotation represents. See the <a
          href="https://developer.apple.com/documentation/mapkit/mkmapfeaturetype">Apple
          docs</a><br>

          for all possible enum values.<br>
      - name: pointOfInterestCategory
        type: Number
        summary: >
          The point-of-interest category for the map item. See the <a
          href="https://developer.apple.com/documentation/mapkit/mkpointofinterestcategory">Apple
          docs</a><br>

          for all possible enum values.<br>
      - name: phoneNumber
        type: String
        summary: The phone number associated with a business at the specified location.
      - name: url
        type: String
        summary: The URL associated with the specified location.
      - name: place
        type: Object
        summary: The placemark object containing the location information.
      - name: latitude
        type: Number
        summary: Latitude of the annotation that was selected.
      - name: longitude
        type: Number
        summary: Longitude of the annotation that was selected.
---

# Modules.Map.View

Map view is used for embedding native mapping capabilities as a view in your application.

With native maps, you can control the mapping location, the type of map, the zoom level
and you can add custom annotations and routes directly to the map. Once the map view is
displayed, the user can pan, zoom and tilt the map using the native control gestures.

Use the [Modules.Map.createView](/api/modules/map) method to create a map view.

In Alloy, use the **`<Module>`** element with the `module` attribute set to `ti.map`
and `method` attribute set to `createView` to create a map view in XML markup:

``` xml
<Module module="ti.map" method="createView" />
```

All latitude and longitude values are specified in decimal degrees. Values in degrees,
minutes and seconds (DMS) must be converted to decimal degrees before being passed to
the map view.

You can add [Annotation](Modules.Map.Annotation) objects to the map to mark points of
interest. An annotation has two states: selected and deselected. A deselected annotation
is marked by a pin image. When selected, the full annotation is displayed, typically
including a title and an optional subtitle.

You can add [Route](Modules.Map.Route) objects to the map to create paths between
two or more points of interest.

To use the `userLocation` property in iOS 8 and later, add either the
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


**Extends:** `Titanium.UI.View` · **Since:** 3.1.0, 3.2.0, 3.2.0, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

<ApiEvents />

