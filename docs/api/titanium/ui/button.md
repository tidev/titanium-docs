---
title: Titanium.UI.Button
properties:
  - name: attributedString
    type: Titanium.UI.AttributedString
    summary: Specify an attributed string for the label.
    description: >
      <p>The underlying attributed string drawn by the label. If set, avoid
      setting common attributes<br>

      in the label, such as <code>color</code> and <code>font</code>, as
      unexpected behaviors may result.</p>

      <p>iOS note: This property can also be used to suppress the underline
      style when accessibility<br>

      is enabled. To do so, set the <code>type</code> to <a
      href="/api/titanium/ui/attribute_underlines_style">Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE</a>
      and the<br>

      <code>value</code> to <a
      href="/api/titanium/ui/attribute_underline_style_none">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_NONE</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 7.5.0
      iphone: 7.5.0
      ipad: 7.5.0
  - name: backgroundImage
    type: String
    summary: >
      Background image for the button in its normal state, specified as a local
      file path or URL.<br>
    description: >
      <p>Also sets the background image for the other button states (disabled,
      focused, selected),<br>

      unless they've been specified explicitly. On iOS, if
      backgroundDisabledImage is unset, the<br>

      image will appear faded to indicate being disabled. Also on iOS, if
      <code>backgroundSelectedImage</code><br>

      is unset, the image will be darkened to indicate being selected.</p>
  - name: backgroundDisabledImage
    type: String
    summary: >
      Background image for the button in its disabled state, specified as a
      local file path<br>

      or URL.<br>
    description: >
      <p>Also sets the background image for the other button states (normal,
      focused, selected),<br>

      unless they've been specified explicitly, except for iOS, which requires a
      backgroundImage.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: backgroundFocusedImage
    type: String
    summary: >
      Background image for the button in its focused state, specified as a local
      file path<br>

      or URL.<br>
    description: >
      <p>Focusable must be true for normal views. Sets the background image for
      the focused<br>

      state only. For iOS, since there is not a trackball, this does
      nothing.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: backgroundSelectedColor
    type: String, Titanium.UI.Color
    summary: Selected background color of the view, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - iphone
      - ipad
      - android
      - macos
    since:
      iphone: 6.1.0
      ipad: 6.1.0
      android: 0.9.0
  - name: backgroundSelectedImage
    type: String
    summary: >
      Background image for the button in its selected state, specified as a
      local file<br>

      path or URL.<br>
    description: >
      <p>On Android, Focusable must be true in order to be selected. Sets the
      background image for the selected<br>

      state only.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: color
    type: String, Titanium.UI.Color
    summary: Default button text color, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: disabledColor
    type: String, Titanium.UI.Color
    summary: >-
      Text color of the button in its disabled state, as a color name or hex
      triplet.
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.2.0
  - name: configuration
    type: Titanium.UI.iOS.ButtonConfiguration, Object
    summary: Button configuration for modern button styling.
    description: >
      <p>A <a href="/api/titanium/ui">Titanium.UI.iOS.ButtonConfiguration</a>
      object that defines the appearance and behavior<br>

      of the button. This provides a modern way to configure buttons with
      support for titles,<br>

      subtitles, images, and various styling options. Right now, the
      configuration is immutable, so you<br>

      cannot change individual properties. Instead, update the whole
      configuration.</p>

      <p>When using a button configuration, it takes precedence over individual
      styling properties<br>

      like <code>title</code>, <code>color</code>, and
      <code>backgroundColor</code>.</p>

      <p>Note: Since Titanium SDK 13.1.0, you can also pass an key-value Object
      directly, which is internally<br>

      converted to a button configuration.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 13.0.0
  - name: enabled
    type: Boolean
    summary: >-
      Set to <code>true</code> to enable the button, <code>false</code> to
      disable the button.
    platforms:
      - android
      - iphone
      - ipad
  - name: font
    type: Font
    summary: Font to use for the button text.
  - name: image
    type: String, Number, Titanium.Blob
    summary: Image to display next to the button title.
    description: >
      <p>As of Titanium 11.0.0, the <a
      href="Titanium.UI.Button.imageIsMask">imageIsMask</a> property determines
      how<br>

      this image is displayed. If set <code>true</code>, this image will be
      tinted using the color assigned to the<br>

      <a href="Titanium.UI.Button.tintColor">tintColor</a> property. If set
      <code>false</code>, the image is displayed as-is.</p>

      <p>On Android, you can set this to a numeric resource drawable ID via
      <code>Ti.App.Android.R.drawable.*</code><br>

      which lets you use native vector drawables that are commonly used as
      icons.</p>
  - name: imageIsMask
    type: Boolean
    summary: Set true to tint the button image. Set false to show the image as-is.
    since: 11.0.0
  - name: selectedColor
    type: String, Titanium.UI.Color
    summary: >-
      Button text color used to indicate the selected state, as a color name or
      hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: shadowColor
    type: String, Titanium.UI.Color
    summary: >-
      Shadow color of the <a href="Titanium.UI.Button.title">title</a>, as a
      color name or hex triplet.
    description: >
      <p>Use in conjunction with <a
      href="Titanium.UI.Button.shadowOffset">shadowOffset</a> and <a
      href="Titanium.UI.Button.shadowRadius">shadowRadius</a>.<br>

      For information about color values, see the &quot;Colors&quot; section of
      <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since: 3.2.0
  - name: shadowOffset
    type: Point
    summary: >-
      Shadow offset of the <a href="Titanium.UI.Button.title">title</a>, as a
      dictionary with the properties <code>x</code> and <code>y</code>.
    description: >
      <p>Use in conjunction with <a
      href="Titanium.UI.Button.shadowColor">shadowColor</a> and <a
      href="Titanium.UI.Button.shadowRadius">shadowRadius</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since: 3.2.0
  - name: shadowRadius
    type: Number
    summary: Shadow radius of the <a href="Titanium.UI.Button.title">title</a>.
    description: >
      <p>Use in conjunction with <a
      href="Titanium.UI.Button.shadowColor">shadowColor</a> and <a
      href="Titanium.UI.Button.shadowOffset">shadowOffset</a>.</p>
    platforms:
      - android
    since: 3.2.0
  - name: style
    type: Number
    summary: The border and fill style the button will use.
    description: >
      <p>On Android, this is a creation-only property and cannot be changed
      dynamically.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 10.0.0
      iphone: 0.8.0
      ipad: 0.8.0
      macos: 9.2.0
  - name: systemButton
    type: Number
    summary: >-
      Specifies an iOS system button appearance, as defined in <a
      href="/api/titanium/ui">Titanium.UI.iOS.SystemButton</a>.
    description: >
      <p>In JavaScript:</p>

      <div class="language-js"><pre class="shiki"><code>var cancelButton =
      Ti.UI.createButton({
          systemButton: Ti.UI.iOS.SystemButton.CANCEL
      });

      </code></pre></div>

      <p>In Alloy, you can omit the namespace when setting the
      <code>systemButton</code> property on a <code>&lt;Button&gt;</code><br>

      element:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;Button
      systemButton=&quot;CAMERA&quot;/&gt;

      </code></pre></div>
    platforms:
      - iphone
      - ipad
      - macos
  - name: textAlign
    type: String, Number
    summary: >
      Text alignment, specified using one of the <a
      href="/api/titanium/ui">Titanium.UI</a> text alignment constants.<br>
  - name: tintColor
    type: String
    summary: Color applied to button's image and title.
    description: >
      <p>Color to be applied to the button's <a
      href="Titanium.UI.Button.image">image</a>, but only if the<br>

      <a href="Titanium.UI.Button.imageIsMask">imageIsMask</a> property is set
      <code>true</code>.</p>

      <p>This tint color is also applied to the button's <a
      href="Titanium.UI.Button.title">title</a><br>

      unless the <a href="Titanium.UI.Button.color">color</a> property is
      set.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 5.4.0
      iphone: 3.1.3
      ipad: 3.1.3
  - name: title
    type: String
    summary: Button title.
  - name: titleid
    type: String
    summary: Key identifying a string from the locale file to use for the button title.
    description: >
      <p>Only one of <code>title</code> or <code>titleid</code> should be
      specified.</p>
    since: '1.5'
  - name: tooltip
    type: String
    summary: The default text to display in the control's tooltip.
    description: >
      <p>Assigning a value to this property causes the tool tip to be displayed
      for the view.<br>

      Setting the property to <code>null</code> cancels the display of the tool
      tip for the view.<br>

      Note: This property is only used for apps targeting macOS Catalyst.</p>
    since: 12.1.0
  - name: verticalAlign
    type: Number, String
    summary: >
      Vertical alignment for the text field, specified using one of the<br>

      vertical alignment constants from <a
      href="/api/titanium/ui">Titanium.UI</a>.<br>
    platforms:
      - android
      - iphone
      - ipad
      - macos
events:
  - name: touchfiltered
    summary: Fired when the device detects a swipe gesture against the view.
    description: >
      <p>If the button's <a
      href="Titanium.UI.View.filterTouchesWhenObscured">filterTouchesWhenObscured</a>
      property<br>

      is set <code>true</code>, then this event will be fired if the touch event
      was discarded because another app's<br>

      overlapping window obscured it.</p>

      <p>This is a security feature to protect an app from
      &quot;tapjacking&quot;, where a malicious app can use a<br>

      system overlay to intercept touch events in your app or to trick the
      end-user to tap on UI<br>

      in your app intended for the overlay.</p>

      <p>You can use this event to display an alert dialog explaining why the
      button's action has been disabled.<br>

      Especially if the overlapping window is completely invisible.</p>
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: obscured
        type: Boolean
        summary: >-
          Always <code>true</code> since the touch event passed through another
          app's overlapping window.
examples:
  - title: Simple Button Example
    code:
      - content: |-
          var win = Ti.UI.createWindow();
          var button = Titanium.UI.createButton({
              title: 'Hello',
              top: 10,
              width: 100,
              height: 50
          });
          button.addEventListener('click',function(e)
          {
              Titanium.API.info("You clicked the button");
          });
          win.add(button);
          win.open();
        language: js
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window id="win" backgroundColor="white">
                  <!-- The title property can also be defined as node text. -->
                  <Button id="button" onClick="doClick" title="Hello"
                      top="10" width="100" height="50" />
              </Window>
          </Alloy>
        language: xml
      - content: |-
          function doClick(e){
              Titanium.API.info("You clicked the button");
          };
        language: js
    intro: |-
      Previous example as an Alloy view.

      button.xml:
---

# Titanium.UI.Button

A button widget that has four states: normal, disabled, focused and selected.


| Android | iOS |
| ------- | --- |
| ![Android](/images/button_android.png) | ![iOS](/images/button_ios.png) |

A button displays its  selected state while it is being pressed. The focused state is
only used on Android devices that have navigation keys or a keyboard, to indicate
which button has input focus.

You can specify background images for each state, as well as button text and a button
icon. On iOS, there are button styles which define appearance for each state, even if
no button images are set.

Use the [Titanium.UI.createButton](/api/titanium/ui) method or a **`<Button>`** Alloy element to create a button
(see [Examples](#!/api/Titanium.UI.Button-examples)) .

#### Android Platform Notes

Android uses default button images for the normal, focused, selected and disabled
states. If you use a custom button image, you should specify versions for the focused
and selected states (and the disabled state, if the button is ever disabled).

Android also supports setting the background color for each of the states. These are not
supported on iOS.

The Material style introduced in Titanium SDK 10.0.0 will change the default look of the buttons.
You can change button styles with a custom theme as follows:
``` xml
<!-- Assign this custom theme to "tiapp.xml" file's Android manifest application element. -->
<style name="Theme.MyTheme" parent="Theme.Titanium.Light">
    <item name="textAppearanceButton">@style/TextAppearance.MyButton</item>
    <item name="android:buttonStyle">@style/Widget.MyButton</item>
    <item name="buttonStyle">@style/Widget.MyButton</item>
</style>

<!-- Affects the appearance of text in all material buttons. -->
<style name="TextAppearance.MyButton" parent="TextAppearance.MaterialComponents.Button">
    <!-- Do not display button text in all-caps. -->
    <item name="android:textAllCaps">false</item>
    <!-- Remove extra spacing between characters. -->
    <item name="android:letterSpacing">0</item>
</style>

<!-- Affects the appearance of all non-material system buttons. -->
<style name="Widget.MyButton" parent="Widget.AppCompat.Button">
    <!-- Do not display button text in all-caps. -->
    <item name="android:textAllCaps">false</item>
    <!-- Remove extra spacing between characters. -->
    <item name="android:letterSpacing">0</item>
</style>
```

#### iOS Platform Notes

* When assigning a custom image to the `backgroundImage` property, the image must be
partially or wholly transparent for the background color or background gradient to be visible.
* Similarly, for an assigned background gradient to show through, the `backgroundColor` may need to be
set to 'transparent'.

Unlike Android, iOS doesn't supply any default background images for buttons--
system button styles serve this purpose.

The `systemButton` property lets you create a predefined system-defined button,
such as the **Camera** or **Add** buttons, for use in toolbars and nav bars.
Specifically, system buttons may be used in the following locations:

* [Titanium.UI.iOS.Toolbar](/api/titanium/ui). The `items` array can contain system buttons.
* [Titanium.UI.iPad.Popover](/api/titanium/ui). The `leftNavButton` and `rightNavButton` properties can
  refer to system buttons
* [Titanium.UI.iOS.SplitWindow](/api/titanium/ui). The `toolbar` array can contain system buttons.
* [Titanium.UI.TextField](/api/titanium/ui/text-field). The `keyboardToolbar` array can contain system buttons.
* [Titanium.UI.TextArea](/api/titanium/ui/text-area). The `keyboardToolbar` array can contain system buttons.
* [Titanium.UI.Window](/api/titanium/ui/window). The `leftNavButton` and `rightNavButton` properties can refer to
  system buttons and the `toolbar` array can contain system buttons.

Use the constants in [Titanium.UI.iOS.SystemButton](/api/titanium/ui)
to specify a button type. The size, style and decoration of system buttons is set
automatically, so you can create a button by setting only the `systemButton` property.

For example:

``` js
var cancelButton = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.CANCEL });
```

In Alloy, you can omit the namespace when setting the `systemButton` property:

``` xml
<Button id="cancelbtn" systemButton="CANCEL"></Button>
```

Note that the `systemButton` property specifies *appearance*, not behavior. For
example, to bring up the camera when the user presses the **Camera** button, you must
add an event listener to the button and call [Titanium.Media.showCamera](/api/titanium/media) when the
button is clicked.

##### iOS Pressed Button Effects

If you do not supply separate background images for the normal and selected states,
iOS supplies a built-in effect for pressed buttons. For most iOS buttons, the effect
dims the entire button (except for the text) while the button is being pressed.

For toolbar buttons that use the [PLAIN](Titanium.UI.BUTTON_STYLE_OPTION_NEUTRAL) style
or use system icons such as [CAMERA](Titanium.UI.iOS.SystemButton.CAMERA), a glow effect is
used. The glow effect shows as a white circular glow or highlight at the center of the button
when the button is pressed.


**Extends:** `Titanium.UI.View` · **Since:** 0.8

<ApiProperties />

<ApiEvents />

<ApiExamples />

