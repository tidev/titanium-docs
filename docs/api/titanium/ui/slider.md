---
title: Titanium.UI.Slider
properties:
  - name: disabledLeftTrackImage
    type: String
    summary: Image URL of the slider left track when in the disabled state.
    platforms:
      - iphone
      - ipad
      - macos
  - name: disabledRightTrackImage
    type: String
    summary: Image URL of the slider right track when in the disabled state.
    platforms:
      - iphone
      - ipad
      - macos
  - name: disabledThumbImage
    type: String
    summary: Image URL of the slider thumb when in the disabled state.
    platforms:
      - iphone
      - ipad
      - macos
  - name: enabled
    type: Boolean
    summary: Boolean to indicate the enabled state of the slider.
  - name: highlightedLeftTrackImage
    type: String
    summary: Image URL of the slider left track when in the highlighted state.
    platforms:
      - iphone
      - ipad
      - macos
  - name: highlightedRightTrackImage
    type: String
    summary: Image URL of the slider right track when in the highlighted state.
    platforms:
      - iphone
      - ipad
      - macos
  - name: highlightedThumbImage
    type: String
    summary: Image URL of the slider thumb when in the highlighted state.
    platforms:
      - iphone
      - ipad
      - macos
  - name: leftTrackImage
    type: String
    summary: Image URL of the slider left track.
    description: >
      <p>See introduction of the <a
      href="/api/titanium/ui/slider">Titanium.UI.Slider</a> component for
      implementation specific information on Android Platform.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: leftTrackLeftCap
    type: Number
    summary: >-
      Size of the left end cap for the leftTrackImage, disabledLeftTrackImage,
      highlightedLeftTrackImage and selectedLeftTrackImage properties.
    description: >
      <p>This property must be set before the track images are loaded. When
      specified at creation<br>

      this property is loaded before loading any of the track images</p>

      <p>End caps specify the portion of an image that should not be resized
      when an image is<br>

      stretched. This technique is used to implement buttons and other resizable
      image-based<br>

      interface elements. When an image with end caps is resized, the resizing
      occurs only in<br>

      the middle of the image, in the region between the end caps. The end caps
      themselves keep<br>

      their original size and appearance. This property specifies the size of
      the left end cap.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: leftTrackTopCap
    type: Number
    summary: >-
      Size of the top end cap for the leftTrackImage, disabledLeftTrackImage,
      highlightedLeftTrackImage and selectedLeftTrackImage properties.
    description: >
      <p>This property must be set before the track images are loaded. When
      specified at creation<br>

      this property is loaded before loading any of the track images</p>

      <p>End caps specify the portion of an image that should not be resized
      when an image is<br>

      stretched. This technique is used to implement buttons and other resizable
      image-based<br>

      interface elements. When an image with end caps is resized, the resizing
      occurs only in<br>

      the middle of the image, in the region between the end caps. The end caps
      themselves keep<br>

      their original size and appearance. This property specifies the size of
      the top end cap.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: max
    type: Number
    summary: Maximum value of the slider.
    description: >
      <p>Specifies the value of the slider when the thumb is all the way to the
      right. This<br>

      value is inclusive.</p>

      <p>On Android, the selectable values can be limited using the<br>

      <a href="Titanium.UI.Slider.minRange">minRange</a> and <a
      href="Titanium.UI.Slider.maxRange">maxRange</a><br>

      properties.</p>

      <p>On Android this must be an integer value.</p>
  - name: maxRange
    type: Number
    summary: Upper limit on the slider value that can be selected.
    description: >
      <p>If <code>maxRange</code> is specified, value of the slider can't be
      increased above <code>maxRange</code>.</p>

      <p>The total displayed range of the slider is still from <code>min</code>
      to <code>max</code>.</p>

      <p>If <code>undefined</code>, the slider can go all the way to
      <code>max</code>.</p>

      <p>On Android this must be an integer value.</p>
    platforms:
      - android
  - name: min
    type: Number
    summary: Minimum value of the slider.
    description: >
      <p>Specifies the value of the slider when the thumb is all the way to the
      left. This<br>

      value is inclusive.</p>

      <p>On Android, the selectable values can be limited using the<br>

      <a href="Titanium.UI.Slider.minRange">minRange</a> and <a
      href="Titanium.UI.Slider.maxRange">maxRange</a><br>

      properties.</p>

      <p>On Android this must be an integer value.</p>
  - name: minRange
    type: Number
    summary: Lower limit on the slider value that can be selected.
    description: >
      <p>If <code>minRange</code> is specified, value of the slider can't be
      decreased below <code>minRange</code>.</p>

      <p>The total displayed range of the slider is still from <code>min</code>
      to <code>max</code>.</p>

      <p>If <code>undefined</code>, the slider can go all the way to
      <code>min</code>.</p>

      <p>On Android this must be an integer value.</p>
    platforms:
      - android
  - name: rightTrackImage
    type: String
    summary: Image URL of the slider right track.
    description: >
      <p>See introduction of the <a
      href="/api/titanium/ui/slider">Titanium.UI.Slider</a> component for
      implementation specific information on Android Platform.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: rightTrackLeftCap
    type: Number
    summary: >-
      Size of the left end cap for the rightTrackImage, disabledRightTrackImage,
      highlightedRightTrackImage and selectedRightTrackImage properties.
    description: >
      <p>This property must be set before the track images are loaded. When
      specified at creation<br>

      this property is loaded before loading any of the track images</p>

      <p>End caps specify the portion of an image that should not be resized
      when an image is<br>

      stretched. This technique is used to implement buttons and other resizable
      image-based<br>

      interface elements. When an image with end caps is resized, the resizing
      occurs only in<br>

      the middle of the image, in the region between the end caps. The end caps
      themselves keep<br>

      their original size and appearance. This property specifies the size of
      the left end cap.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: rightTrackTopCap
    type: Number
    summary: >-
      Size of the top end cap for the rightTrackImage, disabledRightTrackImage,
      highlightedRightTrackImage and selectedRightTrackImage properties.
    description: >
      <p>This property must be set before the track images are loaded. When
      specified at creation<br>

      this property is loaded before loading any of the track images</p>

      <p>End caps specify the portion of an image that should not be resized
      when an image is<br>

      stretched. This technique is used to implement buttons and other resizable
      image-based<br>

      interface elements. When an image with end caps is resized, the resizing
      occurs only in<br>

      the middle of the image, in the region between the end caps. The end caps
      themselves keep<br>

      their original size and appearance. This property specifies the size of
      the top end cap.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: selectedLeftTrackImage
    type: String
    summary: Image URL of the slider left track when in the selected state.
    platforms:
      - iphone
      - ipad
      - macos
  - name: selectedRightTrackImage
    type: String
    summary: Image URL of the slider right track when in the selected state.
    platforms:
      - iphone
      - ipad
      - macos
  - name: selectedThumbImage
    type: String
    summary: Image URL of the slider thumb when in the selected state.
    platforms:
      - iphone
      - ipad
      - macos
  - name: splitTrack
    type: Boolean
    summary: Separates the thumbImage from the slider track.
    platforms:
      - android
    since: 6.2.0
  - name: thumbImage
    type: String, Titanium.Blob
    summary: Image for the slider thumb.
    description: >
      <p>The thumb image can be specified as a URL.</p>

      <p>Support for using <a href="/api/titanium/blob">Titanium.Blob</a> for
      this property is only available on iOS.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: tintColor
    type: String, Titanium.UI.Color
    summary: The color shown for the portion of the progress bar that is filled.
    platforms:
      - iphone
      - ipad
      - android
      - macos
    since:
      iphone: 3.1.3
      ipad: 3.1.3
      android: 8.3.0
  - name: trackTintColor
    type: String, Titanium.UI.Color
    summary: The color shown for the portion of the progress bar that is not filled.
    platforms:
      - iphone
      - ipad
      - android
      - macos
    since:
      iphone: 8.3.0
      ipad: 8.3.0
      android: 8.3.0
  - name: value
    type: Number
    summary: Current value of the slider.
methods:
  - name: setValue
    summary: Sets the <a href="Titanium.UI.Slider.value">value</a> property.
    description: >
      <p>On iOS, you can specify that the value change should be animated by
      passing the<br>

      optional <code>options</code> parameter.</p>
    parameters:
      - name: value
        type: Number
        summary: >-
          New value for the <a href="Titanium.UI.Slider.value">value</a>
          property.
      - name: options
        type: AnimatedOptions
        summary: >
          Specifies animation options. The only supported property<br>

          for this dictionary is the <code>animated</code> flag, which specifies
          whether<br>

          the value change should be animated. <code>animated</code> is false by
          default. Only used<br>

          on iOS.<br>
        optional: true
events:
  - name: change
    summary: Fired when the value of the slider changes.
    properties:
      - name: value
        type: Number
        summary: New value of the slider.
      - name: thumbSize
        type: Size
        summary: >
          Dictionary with properties <code>width</code> and <code>height</code>
          of the size of the thumb.<br>

          Available with custom thumb image.<br>
      - name: thumbOffset
        type: Point
        summary: >
          Dictionary with properties <code>x</code> and <code>y</code> of the
          thumb's left-top corner in<br>

          the control. Available with custom thumb image.<br>
      - name: isTrusted
        type: Boolean
        summary: >-
          True if change was made by the user. False if change was made
          programmatically.
  - name: click
    summary: Fired when the device detects a click against the view.
    description: >
      <p>There is a subtle difference between singletap and click events.</p>

      <p>A singletap event is generated when the user taps the screen
      briefly<br>

      without moving their finger. This gesture will also generate a click
      event.</p>

      <p>However, a click event can also be generated when the user touches,<br>

      moves their finger, and then removes it from the screen.</p>

      <p>For sliders on Android, the click event is <strong>only</strong>
      generated by a trackball click<br>

      on the slider thumb.</p>
    properties:
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
  - name: start
    summary: Fired when the user starts tracking the slider.
    properties:
      - name: value
        type: Number
        summary: Current value of the slider.
      - name: bubbles
        type: Boolean
        summary: False. This event does not bubble.
  - name: stop
    summary: Fired when the user stops tracking the slider.
    properties:
      - name: value
        type: Number
        summary: Current value of the slider.
      - name: bubbles
        type: Boolean
        summary: False. This event does not bubble.
examples:
  - title: Simple Slider
    code:
      - content: |-
          var slider = Titanium.UI.createSlider({
              top: 50,
              min: 0,
              max: 100,
              width: Ti.UI.FILL,
              value: 50
              });

          var label = Ti.UI.createLabel({
              text: slider.value,
              width: Ti.UI.FILL,
              top: 30,
              left: 0,
              textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
          });

          slider.addEventListener('change', function(e) {
              label.text = String.format('%3.1f', e.value);
          });
        language: js
    intro: >-
      The following sample demonstrates creating a slider and adding a listener
      to

      handle the change events.
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window id="window" backgroundColor="white">
                  <Slider id="slider" top="50" min="0" max="100" width="Ti.UI.FILL" value="50" onChange="updateLabel"/>
                  <Label id="label" width="Ti.UI.FILL" top="30" left="0" />
              </Window>
          </Alloy>
        language: xml
      - content: |-
          $.slider.text = $.slider.value;
          function updateLabel(e) {
              $.label.text = String.format('%3.1f', e.value);
          }
          $.window.open();
        language: js
    intro: >-
      Previous example as an Alloy view.


      Implement the `updateLabel` callback in the controller to update the label
      value

      and set the initial `text` value for the label in the TSS file or
      controller.


      index.xml:
---

# Titanium.UI.Slider

A slider component with a draggable thumb.

| Android | iOS |
| ------- | --- |
| ![Android](/images/slider_android.png) | ![iOS](/images/slider_ios.png) |

A slider lets the user select from a range of values by dragging the slider thumb.

Use the [Titanium.UI.createSlider](/api/titanium/ui) method or **`<Slider>`** Alloy element to create a slider.

#### Android Platform Implementation Notes

On Android, the user can also manipulate the slider using the arrow keys. For this
reason, placing other focusable UI elements to the left or right of
the slider is not recommended.

On Android, both `min` and `max` must be specified for the slider to work properly.

Earlier versions of the Titanium SDK implicitly enforced that both the [leftTrackImage](Titanium.UI.Slider.leftTrackImage) and
[rightTrackImage](Titanium.UI.Slider.rightTrackImage) properties be specified before the properties would be honored. Beginning with
Titanium SDK 4.0.0 this limitation has been removed. However it is recommended that either both or neither be specified.

To style different parts of the Slider you can set these properties in a custom Android theme:
``` xml
  <item name="android:progressBackgroundTint">#f4511e</item>
  <item name="android:progressTint">#388e3c</item>
  <item name="android:thumbTint">#c51162</item>
```
You can also use `@android:color/transparent` to remove the tint.


**Extends:** `Titanium.UI.View` · **Since:** 0.8

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

