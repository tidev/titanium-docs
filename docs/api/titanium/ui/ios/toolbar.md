---
title: Titanium.UI.iOS.Toolbar
properties:
  - name: barColor
    type: String, Titanium.UI.Color
    summary: Background color for the toolbar, as a color name or hex triplet.
    description: >
      <p>To use a background image on the toolbar, either <code>barColor</code>
      must be a fully or<br>

      partially transparent color,<br>

      or the <a href="Titanium.UI.iOS.Toolbar.translucent">translucent</a>
      property must be <code>true</code>.</p>

      <p>To use a background gradient on a toolbar, <code>barColor</code> must
      be <code>'transparent'</code><br>

      <em>and</em> the the <a
      href="Titanium.UI.iOS.Toolbar.translucent">translucent</a> property must
      be <code>true</code>.</p>

      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: items
    type: Array<Titanium.UI.View>
    summary: An array of buttons (or other widgets) contained in the toolbar.
  - name: extendBackground
    type: Boolean
    summary: If <code>true</code>, the background of the toolbar extends upwards.
    description: >
      <p>This property allows the user to specify that the toolbar's background
      show through the status bar. This property is<br>

      only intended to be used with toolbars hosted in windows with <strong>no
      navigation controllers</strong>. The toolbar must be placed at the<br>

      top of the screen just below the status bar for this property to work as
      expected. This <strong>must</strong> be specified at creation.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since:
      iphone: 3.3.0
      ipad: 3.3.0
      macos: 9.2.0
  - name: translucent
    type: Boolean
    summary: >-
      If <code>true</code>, a translucent background color is used for the
      toolbar.
    description: >
      <p>Note that if <code>translucent</code> is <code>false</code>, views
      under the toolbar are hidden, even<br>

      if <a href="Titanium.UI.iOS.Toolbar.barColor">barColor</a> is set to a
      semi-transparent or<br>

      transparent color.</p>
examples:
  - title: Simple Toolbar
    code:
      - content: |-
          var win = Ti.UI.createWindow({
              backgroundColor: 'white'
          });

          var send = Ti.UI.createButton({
              title: 'Send',
              style: Ti.UI.BUTTON_STYLE_OPTION_POSITIVE,
          });

          var camera = Ti.UI.createButton({
              systemButton: Ti.UI.iOS.SystemButton.CAMERA,
          });

          var cancel = Ti.UI.createButton({
              systemButton: Ti.UI.iOS.SystemButton.CANCEL
          });

          var flexSpace = Ti.UI.createButton({
              systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE
          });

          var toolbar = Titanium.UI.iOS.createToolbar({
              items: [send, flexSpace, camera, flexSpace, cancel],
              bottom: 0
          });

          win.add(toolbar);
          win.open();
        language: js
    intro: >-
      The following code excerpt creates a simple toolbar, placed at the bottom
      of the window.
  - title: Toolbar with extended background
    code:
      - content: |-
          var win = Ti.UI.createWindow({
              backgroundColor: 'white'
          });

          var send = Ti.UI.createButton({
              title: 'Send',
              style: Ti.UI.BUTTON_STYLE_OPTION_POSITIVE,
          });

          var camera = Ti.UI.createButton({
              systemButton: Ti.UI.iOS.SystemButton.CAMERA,
          });

          var cancel = Ti.UI.createButton({
              systemButton: Ti.UI.iOS.SystemButton.CANCEL
          });

          flexSpace = Ti.UI.createButton({
              systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE
          });

          var toolbar = Ti.UI.iOS.createToolbar({
              items: [send, flexSpace, camera, flexSpace, cancel],
              top: 20,
              extendBackground: true
          });

          win.add(toolbar);
          win.open();
        language: js
    intro: >-
      The following code excerpt creates a simple toolbar, placed at the top of
      the window which extends its background under the status bar.
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window id="win">
                  <Toolbar platform="ios" bottom="0">

                      <!-- The Items tag sets the Toolbar.items property. -->
                      <Items>
                          <Button id="send" title="Send" style="DONE" />
                          <FlexSpace/>
                          <Button id="camera" systemButton="CAMERA" />
                          <FlexSpace/>
                          <Button id="cancel" systemButton="CANCEL" />
                      </Items>

                      <!-- Place additional views for the Toolbar here -->

                  </Toolbar>
              </Window>
          </Alloy>
        language: js
    intro: Simple Toolbar example as an Alloy view.
---

# Titanium.UI.iOS.Toolbar

&gt; **Deprecated** since 6.2.0: Use the cross-platform [Titanium.UI.Toolbar](Titanium.UI.Toolbar) instead.

An iOS toolbar, which can contain buttons and certain other controls.

A `Toolbar` is created by the [Titanium.UI.iOS.createToolbar](/api/titanium/ui) factory method or **`<Toolbar>`** Alloy element.

A `Toolbar` can contain buttons, as well as certain other widgets, including text fields and
labels.

To provide spacing between items in the toolbar, you can use the special iOS system button types,
[FIXED_SPACE](Titanium.UI.iOS.SystemButton.FIXED_SPACE) and
[FLEXIBLE_SPACE](Titanium.UI.iOS.SystemButton.FLEXIBLE_SPACE).

Note that toolbars are positioned like other views (using the `top` and `bottom` properties,
for example), but the [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/#//apple_ref/doc/uid/TP40006556-CH12-SW4)
have specific requirements for placing toolbars, specifically:

* On iPhone, a toolbar should be at the bottom of the window.
* On the iPad, a toolbar should appear at the top or bottom of a window.

Due to an iOS limitation, the buttons in the toolbar only support the `click` event.
The native object underlying a toolbar button does not generate standard view events,
such as `touchstart` and `touchend`.

**Note**:
This API has been deprecated in Titanium SDK 6.2.0 in favor of the cross-platform
UI component [Titanium.UI.Toolbar](/api/titanium/ui/toolbar) that can also be used on Android. The API itself
did not change, so it is a drop-in replacement for existing usages. This deprecated
API will be removed in Titanium SDK 8.0.0 and later.

See also:

*  [Toolbar in the iOS Human Interface Guidelines.](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/#//apple_ref/doc/uid/TP40006556-CH12-SW4)


**Extends:** `Titanium.UI.View` · **Since:** 0.8, 0.8, 9.2.0 · **Platforms:** iphone, ipad, macos

<ApiProperties />

<ApiExamples />

