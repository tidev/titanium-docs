---
title: Modules.Map.Annotation
properties:
  - name: canShowCallout
    type: Boolean
    summary: >-
      Defines whether the annotation view is able to display extra information
      in a callout bubble.
    description: >
      <p>When this is set to <code>true</code>, the annotation view shows the
      callout bubble on selection.<br>

      Set this to <code>false</code> to disabled the showing of the callout
      bubble on selection.<br>

      This must be set before the annotation is added to the map.</p>

      <p>If this value is undefined, the value is treated as <strong>explicit
      true</strong>.</p>
  - name: centerOffset
    type: Point
    summary: Defines a center offset point for the annotation.
    description: >
      <p>By default, the center point of an annotation view is placed at the
      coordinate point of the<br>

      associated annotation. Use this property to reposition the annotation view
      as needed.<br>

      Positive offset values move the annotation view down and right, while
      negative values<br>

      move it up and left.</p>
  - name: customView
    type: Titanium.UI.View
    summary: Defines a custom view to be used by the annotation.
    description: >
      <p>Must be set during creation. <strong>User interaction is disabled on
      the view.</strong><br>

      No view interaction events (click, touchstart etc) will be fired.</p>
    since: 3.1.0
  - name: showAsMarker
    type: Boolean
    summary: |
      Boolean to show an annotation view that displays a balloon-shaped<br>
      marker at the designated location.<br>
    description: >
      <p>Must be set during creation. This is ignored if the customView property
      is set.<br>

      See the example &quot;Map Example With Marker Annotation and
      Clustering&quot;.</p>
    since: 6.3.0
  - name: markerGlyphText
    type: String
    summary: The text to display in the marker balloon.
    description: >
      <p>Use this property or the <a
      href="/api/modules/map/annotation">Modules.Map.Annotation.markerGlyphImage</a>
      property to specify the marker balloon content.<br>

      If you specify both an image and text, the text is displayed.<br>

      The amount of space available for displaying your glyph text is limited.
      Specify no more than<br>

      two or three characters for any strings you assign to this property.</p>
    since: 6.3.0
  - name: markerGlyphColor
    type: String
    summary: The color to apply to the glyph text or image.
    description: >
      <p>The default value of this property is undefined, which applies the
      standard tint color for the<br>

      current map style.</p>
    since: 6.3.0
  - name: markerColor
    type: String
    summary: The background color of the marker balloon.
    description: >
      <p>The default value of this property is undefined, which applies the
      standard color that is appropriate<br>

      for the current map style.</p>
    since: 6.3.0
  - name: markerGlyphImage
    type: String, Titanium.Blob
    summary: The image displayed in the marker balloon.
    description: >
      <p>Use this property or the <a
      href="/api/modules/map/annotation">Modules.Map.Annotation.markerGlyphText</a>
      property to specify the marker balloon content.<br>

      If you specify both an image and text, the text is displayed.<br>

      The glyph image is displayed when the marker is in the normal state.
      Create glyph images as template<br>

      images so that the glyph tint color can be applied to it. Normally, you
      set the size of this image to<br>

      20 by 20 points on iOS. However, if you do not provide a separate selected
      image in the <a
      href="/api/modules/map/annotation">Modules.Map.Annotation.markerSelectedGlyphImage</a><br>

      property, make the size of this image 40 by 40 points on iOS. MapKit
      scales images that are larger or<br>

      smaller than those sizes.</p>
    since: 6.3.0
  - name: markerSelectedGlyphImage
    type: String, Titanium.Blob
    summary: The image to display when the marker is selected.
    description: >
      <p>The glyph image is displayed when the marker is in the selected state.
      This image is displayed only when the<br>

      marker is selected. If you specify an image for this property, you should
      also specify an image in the <a
      href="/api/modules/map/annotation">Modules.Map.Annotation.markerGlyphImage</a><br>

      property.<br>

      Create glyph images as template images so that the glyph tint color can be
      applied to it. Set the size of this image<br>

      to 40 by 40 points on iOS. MapKit scales images that are larger or smaller
      than those sizes.</p>
    since: 6.3.0
  - name: markerAnimatesWhenAdded
    type: Boolean
    summary: Boolean indicating whether the marker animates into position onscreen.
    since: 6.3.0
  - name: markerTitleVisibility
    type: Number
    summary: The visibility of the title text rendered below the marker balloon.
    description: >
      <p>Title text is normally displayed below the marker balloon. Use <a
      href="/api/modules/map/feature_visibility_adaptive">Modules.Map.FEATURE_VISIBILITY_ADAPTIVE</a>,<br>

      <a
      href="/api/modules/map/feature_visibility_visible">Modules.Map.FEATURE_VISIBILITY_VISIBLE</a>
      or <a
      href="/api/modules/map/feature_visibility_hidden">Modules.Map.FEATURE_VISIBILITY_HIDDEN</a>.</p>
    since: 6.3.0
  - name: markerSubtitleVisibility
    type: Number
    summary: The visibility of the subtitle text rendered below the marker balloon.
    description: >
      <p>The subtitle text is hidden when the marker is not selected. The text
      is shown when the marker<br>

      is selected. Use <a
      href="/api/modules/map/feature_visibility_adaptive">Modules.Map.FEATURE_VISIBILITY_ADAPTIVE</a>,
      <a
      href="/api/modules/map/feature_visibility_visible">Modules.Map.FEATURE_VISIBILITY_VISIBLE</a>
      or <a
      href="/api/modules/map/feature_visibility_hidden">Modules.Map.FEATURE_VISIBILITY_HIDDEN</a>.</p>
    since: 6.3.0
  - name: collisionMode
    type: Number
    summary: The collision mode to use when interpreting the collision frame rectangle.
    description: >
      <p>Use <a
      href="/api/modules/map/annotation_view_collision_mode_rectangle">Modules.Map.ANNOTATION_VIEW_COLLISION_MODE_RECTANGLE</a>
      or <a
      href="/api/modules/map/annotation_view_collision_mode_circle">Modules.Map.ANNOTATION_VIEW_COLLISION_MODE_CIRCLE</a>.</p>
    since: 6.3.0
  - name: annotationDisplayPriority
    type: Number
    summary: The display priority of this annotation view.
    description: >
      <p>An annotation view whose priority is set to
      MKFeatureDisplayPriorityRequired is always visible<br>

      on the map, whereas other priorities may result in the annotation view
      being hidden. Use<br>

      <a
      href="/api/modules/map/feature_display_priority_required">Modules.Map.FEATURE_DISPLAY_PRIORITY_REQUIRED</a>,
      <a
      href="/api/modules/map/feature_display_priority_default_high">Modules.Map.FEATURE_DISPLAY_PRIORITY_DEFAULT_HIGH</a>
      or<br>

      <a
      href="/api/modules/map/feature_display_priority_default_low">Modules.Map.FEATURE_DISPLAY_PRIORITY_DEFAULT_LOW</a>.</p>
    since: 6.3.0
  - name: clusterIdentifier
    type: String
    summary: >-
      An identifier that determines whether the annotation view participates in
      clustering.
    description: >
      <p>The default value of this property is null, which prevents the
      annotation view from being clustered<br>

      with other annotation views. Setting the property to a non null value it
      to participate in clustering.<br>

      Clustering occurs when there is a collision between multiple annotation
      views with the same identifier<br>

      on the map surface. The annotation views involved in the collision are
      removed from the map view and<br>

      replaced by a clustering annotation view, which displays the title from
      one of the annotations and<br>

      provides access to the other annotations.</p>
    since:
      android: 7.4.0
      iphone: 6.3.0
      ipad: 6.3.0
      macos: 9.2.0
  - name: draggable
    type: Boolean
    summary: Determines whether the pin can be dragged by the user.
    description: >
      <p>When an annotation is draggable, it can be moved by the user by long
      pressing on the pin.</p>
  - name: image
    type: String, Titanium.Blob
    summary: Image to use for the the pin.
    description: >
      <p>Must be set during creation. This is ignored if the customView property
      is set.</p>
  - name: latitude
    type: Number
    summary: Latitude of the annotation, in decimal degrees.
  - name: longitude
    type: Number
    summary: Longitude of the annotation, in decimal degrees.
  - name: pincolor
    type: Number, String
    summary: >
      The color of the pin-annotation. Use the <code>ANNOTATION_*</code>
      constants for pre-<br>

      defined colors, e.g <code>ANNOTATION_GREEN</code>.<br>

      <br>

      Note for iOS: Apps running iOS 9 and later can also specify a
      non-constant<br>

      value, e.g. &quot;blue&quot;, &quot;rgb(0, 0, 255 ,1)&quot; or
      &quot;#0000ff&quot;.<br>
    description: >
      <p>Pin color is ignored if a custom pin image is specified using <a
      href="/api/modules/map/annotation">Modules.Map.Annotation.image</a>.</p>
  - name: subtitle
    type: String
    summary: Secondary title of the annotation view.
  - name: subtitleid
    type: String
    summary: Key in the locale file to use for the subtitle property.
    since: 3.1.0
  - name: title
    type: String
    summary: Primary title of the annotation view.
  - name: titleid
    type: String
    summary: Key in the locale file to use for the title property.
    since: 3.1.0
  - name: leftButton
    type: String
    summary: |
      Left button image on the annotation, specified as an image URL.<br>
    since: 3.1.0
  - name: leftView
    type: Titanium.UI.View
    summary: Left view that is displayed on the annotation.
    description: |
      <p>This is ignored if the <code>leftButton</code> property is set.</p>
    since: 3.1.0
  - name: rightButton
    type: String
    summary: |
      Right button image on the annotation, specified as an image URL.<br>
    since: 3.1.0
  - name: rightView
    type: Titanium.UI.View
    summary: Right view that is displayed on the annotation.
    description: |
      <p>This is ignored if the <code>rightButton</code> property is set.</p>
    since: 3.1.0
  - name: showInfoWindow
    type: Boolean
    summary: Show or hide the view that is displayed on the annotation when clicked.
    description: >
      <p>When this is false, clicking on the annotation will not center it on
      the map, but the<br>

      annotation will still be selected, thus triggering the click event.<br>

      If the annotation is selected, and the info window is hidden, then the
      next click<br>

      will deselect the annotation, thus will NOT show the info window,
      regardless of the current state of this property.</p>
    since: 3.2.0
  - name: hidden
    type: Boolean
    summary: Determines whether the annotation is hidden or not.
    since: 6.1.0
  - name: previewContext
    type: Titanium.UI.iOS.PreviewContext
    summary: The preview context used in the 3D-Touch feature &quot;Peek and Pop&quot;.
    description: >
      <p>Preview context to present the &quot;Peek and Pop&quot; of a view. Use
      an configured instance<br>

      of <a href="/api/titanium/ui">Titanium.UI.iOS.PreviewContext</a> here.</p>

      <p>Note: This property can only be used on devices running iOS9 or later
      and supporting 3D-Touch.<br>

      It is ignored on older devices and can manually be checked using <a
      href="/api/titanium/ui">Titanium.UI.iOS.forceTouchSupported</a>.</p>
    since: 6.2.0
methods:
  - name: animate
    summary: Animate annotation to new location.
    parameters:
      - name: newLocation
        type: Array<Number>
        summary: latitude and longitude where annotation will animate.
  - name: rotate
    summary: Rotate annotation on its location.
    parameters:
      - name: angle
        type: Number
        summary: angle on which annotation will rotate.
---

# Modules.Map.Annotation

Represents a labeled point of interest on the map that the user can click on.

The `Annotation` object gives you low-level control over annotations that can be added to
[map view](Modules.Map.View). An annotation must have its `latitude` and `longitude`
properties set to appear on a map.

Use the [Modules.Map.createAnnotation](/api/modules/map) method to create an annotation.  Starting with Alloy
1.4.0, use the **`<Annotation>`** Alloy element to define one in XML markup.

An annotation can also have a title, a subtitle, and two inset buttons or views on the left
and right side of the title. All of these items are optional.

The controls on the left and right side of the annotation can be specified in one of two
ways:

* To display an image, set the [leftButton](Titanium.Map.Annotation.leftButton) or
  [rightButton](Titanium.Map.Annotation.rightButton) property to an image URL. (On
  iOS, you can also use a [SystemButton](Titanium.UI.iPhone.SystemButton) constant
  to use one of the native system button icons.)

* To add another type of view to the annotation, set the
  [leftView](Titanium.Map.Annotation.leftView) or
  [rightView](Titanium.Map.Annotation.rightView) property to a [View](Titanium.UI.View)
  object.

An annotation has two states: selected and deselected. A deselected annotation
is marked by a pin image. When the user selects the pin, the full annotation is
displayed.

You can specify a custom image for the map pin by setting the
[image](Modules.Map.Annotation.image) property.

When the user clicks on an annotation, a `click` event is generated.

On iOS, You can add a click event listener to a specific annotation, or add a
click event listener to the map view to receive click events from all annotations
on the map.

On Android, you must add the click event listener to the map view; the annotation
itself does not generate these events.


**Extends:** `Titanium.Proxy` · **Since:** 3.0.2, 3.2.0, 3.2.0, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

