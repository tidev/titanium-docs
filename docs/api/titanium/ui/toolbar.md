---
title: Titanium.UI.Toolbar
properties:
  - name: barColor
    type: String, Titanium.UI.Color
    summary: Background color for the toolbar, as a color name or hex triplet.
    description: >
      <p>To use a background image on the toolbar, either <code>barColor</code>
      must be a fully or<br>

      partially transparent color,<br>

      or the <a href="Titanium.UI.Toolbar.translucent">translucent</a> property
      must be <code>true</code>.</p>

      <p>To use a background gradient on a toolbar, <code>barColor</code> must
      be <code>'transparent'</code><br>

      <em>and</em> the the <a
      href="Titanium.UI.Toolbar.translucent">translucent</a> property must be
      <code>true</code>.</p>

      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - iphone
      - ipad
      - android
      - macos
  - name: items
    type: Array<Titanium.UI.View>
    summary: An array of buttons (or other widgets) contained in the toolbar.
    platforms:
      - iphone
      - ipad
      - android
      - macos
  - name: extendBackground
    type: Boolean
    summary: If <code>true</code>, the background of the toolbar extends upwards.
    description: >
      <p>This property allows the user to specify that the toolbar's background
      show through the status bar.<br>

      and is only intended to be used with toolbars hosted in windows with
      <strong>no navigation controllers</strong>.<br>

      The toolbar must be placed at the top of the screen just below the status
      bar and used as an ActionBar on Android for this<br>

      property to work as expected.<br>

      This <strong>must</strong> be specified at creation.</p>
    platforms:
      - iphone
      - ipad
      - android
      - macos
  - name: translucent
    type: Boolean
    summary: >-
      If <code>true</code>, a translucent background color is used for the
      toolbar.
    description: >
      <p>Note that if <code>translucent</code> is <code>false</code>, views
      under the toolbar are hidden, even<br>

      if <a href="Titanium.UI.Toolbar.barColor">barColor</a> is set to a
      semi-transparent or<br>

      transparent color.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: contentInsetEndWithActions
    type: Number
    summary: >-
      Returns the margin after the toolbar's content when there are action
      buttons.
    platforms:
      - android
  - name: contentInsetStartWithNavigation
    type: Number
    summary: >-
      Returns the margin at the toolbar's content start when there is a
      navigation button.
    platforms:
      - android
  - name: logo
    type: String, Titanium.Blob, Titanium.Filesystem.File
    summary: Image to be used as a logo in the Toolbar.
    description: >
      <p>This property is used only when the Toolbar is used as an
      ActionBar.</p>
    platforms:
      - android
  - name: navigationIcon
    type: String, Titanium.Blob, Titanium.Filesystem.File
    summary: Image to be used for a navigation icon.
    description: >
      <p>This property is used only when the Toolbar is used as an
      ActionBar.</p>
    platforms:
      - android
  - name: navigationIconColor
    type: String
    summary: Tint color of the navigation icon (e.g. home arrow)
    platforms:
      - android
    since: 12.1.0
  - name: overflowIcon
    type: String, Titanium.Blob, Titanium.Filesystem.File
    summary: Image to be used for the overflow menu.
    description: >
      <p>This property is used only when the Toolbar is used as an
      ActionBar.</p>
    platforms:
      - android
  - name: subtitle
    type: String
    summary: Text of the subtitle.
    platforms:
      - android
  - name: subtitleTextColor
    type: String
    summary: Color for toolbar's subtitle
    platforms:
      - android
  - name: title
    type: String
    summary: Text of the title.
    platforms:
      - android
  - name: titleTextColor
    type: String
    summary: Color string with any Titanium supported format
    platforms:
      - android
methods:
  - name: collapseActionViews
    summary: Collapses expanded ActionViews if there is any
  - name: dismissPopupMenus
    summary: Collapses expanded ActionViews and hides overflow menu
  - name: getContentInsetEnd
    summary: Returns the margin at the toolbar's content end.
    returns:
      type: Number
  - name: getContentInsetLeft
    summary: Returns the margin on the left of the toolbar's content.
    returns:
      type: Number
  - name: getContentInsetRight
    summary: Returns the margin on the right of the toolbar's content.
    returns:
      type: Number
  - name: getContentInsetStart
    summary: Returns the margin at the toolbar's content start.
    returns:
      type: Number
  - name: getCurrentContentInsetEnd
    summary: >-
      Returns the margin at the toolbar's content end that will be used with the
      current configuration of the toolbar.
    returns:
      type: Number
  - name: getCurrentContentInsetLeft
    summary: >-
      Returns the margin on the left of the toolbar's content that will be used
      with the current configuration of the toolbar.
    returns:
      type: Number
  - name: getCurrentContentInsetRight
    summary: >-
      Returns the margin on the right of the toolbar's content that will be used
      with the current configuration of the toolbar.
    returns:
      type: Number
  - name: getCurrentContentInsetStart
    summary: >-
      Returns the margin at the toolbar's content start that will be used with
      the current configuration of the toolbar.
    returns:
      type: Number
  - name: hasExpandedActionView
    summary: Checks if the toolbar is currently hosting an expanded action view.
    returns:
      type: Boolean
  - name: hideOverflowMenu
    summary: Hides the overflow menu if there is one.
  - name: isOverflowMenuShowing
    summary: Checks if the toolbar is currently hosting an expanded action view.
    returns:
      type: Boolean
  - name: setContentInsetsAbsolute
    summary: Sets the content margins of the toolbar
    parameters:
      - name: insetLeft
        type: Number
        summary: Offset at the left side of the content
      - name: insetRight
        type: Number
        summary: Offset at the right side of the content
  - name: setContentInsetsRelative
    summary: Sets the content margins relative to the layout direction
    parameters:
      - name: insetStart
        type: Number
        summary: Offset before the start of the content
      - name: insetEnd
        type: Number
        summary: Offset after the end of the content
  - name: showOverflowMenu
    summary: Shows the overflow menu if there is one
examples:
  - title: Simple Toolbar
    code:
      - content: |-
          var win = Ti.UI.createWindow({
              backgroundColor: 'white'
          });

          var send = Ti.UI.createButton({
              title: 'Send'
          });

          var camera = Ti.UI.createButton({
              title: 'Camera'
          });

          var cancel = Ti.UI.createButton({
              title: 'Cancel'
          });

          var toolbar = Ti.UI.createToolbar({
              items: [send, camera, cancel],
              bottom: 0
          });

          win.add(toolbar);
          win.open();
        language: js
    intro: >-
      The following code excerpt creates a simple toolbar, placed at the bottom
      of the window.
  - title: Toolbar (iOS) with extended background
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

          var toolbar = Ti.UI.createToolbar({
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
  - title: Alloy Example (simple Toolbar)
    code:
      - content: |-
          <Alloy>
              <Window>
                  <Toolbar bottom="0">

                      <!-- The Items tag sets the Toolbar.items property. -->
                      <Items>
                          <Button id="send" title="Send" />
                          <Button id="camera" title="Camera" />
                          <Button id="cancel" title="Cancel" />
                      </Items>

                  </Toolbar>
              </Window>
          </Alloy>
        language: xml
    intro: Simple Toolbar example as an Alloy view.
  - title: Alloy Example (Toolbar as ActionBar)
    code:
      - content: |-
          <Alloy>
              <Window title="My Test App" backgroundColor="gray" customToolbar="toolbar">
                  <Toolbar
                      title="MyMenu"
                      subtitle="Subtitle"
                      width="Ti.UI.FILL"
                      top="0"
                      barColor="#639851"
                      displayHomeAsUp="true"
                      homeButtonEnabled="true"
                      overflowIcon="logo.png">

                      <!-- The Items tag sets the Toolbar.items property. -->
                      <Items>
                          <Button id="ok" title="OK"/>
                          <Button id="cancel" title="Cancel"/>
                      </Items>
                  </Toolbar>

                  <!-- The MenuItem's to be mapped to the toolbar -->
                  <Menu>
                      <MenuItem id="item1" title="Settings" showAsAction="Ti.Android.SHOW_AS_ACTION_NEVER"/>
                      <MenuItem id="item2" title="Search" showAsAction="Ti.Android.SHOW_AS_ACTION_NEVER"/>
                  </Menu>
              </Window>
          </Alloy>
        language: xml
    intro: Example how to set up Toolbar as an ActionBar
---

# Titanium.UI.Toolbar

A Toolbar can contain buttons, as well as certain other widgets, including text fields and labels.

A `Toolbar` is created by the [Titanium.UI.createToolbar](/api/titanium/ui) factory method or **`<Toolbar>`** Alloy element.

To provide spacing between items in the toolbar, on iOS you can use the special system button types,
[FIXED_SPACE](Titanium.UI.iOS.SystemButton.FIXED_SPACE) and
[FLEXIBLE_SPACE](Titanium.UI.iOS.SystemButton.FLEXIBLE_SPACE).

Note that toolbars are positioned like other views (using the `top` and `bottom` properties,
for example), but the [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/#//apple_ref/doc/uid/TP40006556-CH12-SW4)
have specific requirements for placing toolbars, specifically:

* On the iPhone and Android, a toolbar should be at the bottom of the window.
* On the iPad, a toolbar should appear at the top or bottom of a window.

Due to an iOS limitation, the buttons in the toolbar only support the `click` event.
The native object underlying a toolbar button does not generate standard view events,
such as `touchstart` and `touchend`.

On Android a toolbar can also be used as an ActionBar for [activities](Titanium.Android.Activity). This allows a toolbar to
inherit [ActionBar's](Titanium.Android.ActionBar) methods, properties and events as well as provide a better customization of this
design element. For example you can provide your own images to be used as navigation button icon, overflow menu icon and logo.
In order to do that, an application must use a theme without a title bar. For Titanium 9.3.0 and higher,
set the theme to `Theme.Titanium.NoTitleBar`. For older Titanium versions, set the theme to `Theme.AppCompat.NoTitleBar`.

See also:

*  [Toolbar in the iOS Human Interface Guidelines.](https://developer.apple.com/ios/human-interface-guidelines/bars/toolbars/)


**Extends:** `Titanium.UI.View` · **Since:** 6.2.0 · **Platforms:** iphone, ipad, android, macos

<ApiProperties />

<ApiMethods />

<ApiExamples />

