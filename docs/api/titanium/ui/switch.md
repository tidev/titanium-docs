---
title: Titanium.UI.Switch
properties:
  - name: animated
    type: Boolean
    summary: Determines if there is animation when the switch value changes.
    description: >
      <p>Set to <code>true</code> if animation is desired or <code>false</code>
      for no animation.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 5.1.1
  - name: color
    type: String, Titanium.UI.Color
    summary: Color to use for switch text, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - android
  - name: enabled
    type: Boolean
    summary: Determines whether the switch is enabled.
    description: >
      <p>Be careful not to confused this with the <a
      href="Titanium.UI.Switch.value">value</a> property, which<br>

      is used to turn the switch on and off.</p>

      <p>Set to <code>true</code> to enable or <code>false</code> to disable the
      switch.</p>
  - name: font
    type: Font
    summary: Font to use for the switch text.
    platforms:
      - android
  - name: style
    type: Number
    summary: Style of the switch.
    description: >
      <p>For Titanium versions older than 10.0.0, this is an Android only
      property and must be assigned<br>

      a <code>SWITCH_STYLE_*</code> constant from the <a
      href="/api/titanium/ui">Titanium.UI</a> module.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 0.8.0
      iphone: 10.0.0
      ipad: 10.0.0
      macos: 10.0.0
  - name: textAlign
    type: String, Number
    summary: |
      Horizontal text alignment of the switch title.<br>
    description: >
      <p>This property is only applicable when the switch <a
      href="Titanium.UI.Switch.style">style</a> is set to<br>

      <a href="Titanium.UI.SWITCH_STYLE_CHECKBOX">SWITCH_STYLE_CHECKBOX</a>,<br>

      <a href="Titanium.UI.SWITCH_STYLE_SLIDER">SWITCH_STYLE_SLIDER</a>, or<br>

      <a
      href="Titanium.UI.SWITCH_STYLE_TOGGLE_BUTTON">SWITCH_STYLE_TOGGLE_BUTTON</a>,</p>

      <p>This property is only effective if the <a
      href="Titanium.UI.Switch.width">width</a> property is set to a<br>

      value greater than the width of the <a
      href="Titanium.UI.Switch.title">title</a> contents.</p>
    platforms:
      - android
  - name: title
    type: String
    summary: >-
      Text to display next to the switch, when the checkbox or slider style is
      in use.
    description: >
      <p>This property is only effective when the <a
      href="Titanium.UI.Switch.style">style</a> property is set to<br>

      <a href="Titanium.UI.SWITCH_STYLE_CHECKBOX">SWITCH_STYLE_CHECKBOX</a>
      or<br>

      <a href="Titanium.UI.SWITCH_STYLE_SLIDER">SWITCH_STYLE_SLIDER</a>.</p>

      <p>Use the <a href="Titanium.UI.Switch.textAlign">textAlign</a> property
      to align this text within the switch.</p>
    platforms:
      - android
  - name: titleOff
    type: String
    summary: >-
      Text to display on the switch in its &quot;off&quot; state, when the
      toggle button style is in use.
    description: >
      <p>Set to an empty string to remove title text.</p>

      <p>It is typically useful to set the <code>width</code> and/or
      <code>height</code> properties, to prevent the switch<br>

      changing size between its on/off state.</p>
    platforms:
      - android
  - name: titleOn
    type: String
    summary: >-
      Text to display on the switch in its &quot;on&quot; state, when the toggle
      button style is in use.
    description: >
      <p>Set to an empty string to remove title text.</p>

      <p>It is typically useful to set the <code>width</code> and/or
      <code>height</code> properties, to prevent the switch<br>

      changing size between its on/off state.</p>
    platforms:
      - android
  - name: tintColor
    type: String, Titanium.UI.Color
    summary: The color used to tint the outline of the switch when it is turned off.
    description: >
      <p>The color used to tint the outline of the switch when it is turned
      off.</p>

      <p>Android: Track color of the Material Switch.</p>
    platforms:
      - android
      - iphone
      - ipad
    since:
      android: 12.4.0
      iphone: 3.3.0
      ipad: 3.3.0
  - name: onThumbColor
    type: String, Titanium.UI.Color
    description: >
      <p>The color used to tint the thumb icon of the switch when it is turned
      on.</p>

      <p>Android: Active thumb color of the Material Switch.</p>
    platforms:
      - android
    since:
      android: 12.4.0
  - name: thumbColor
    type: String, Titanium.UI.Color
    description: >
      <p>The color used to tint the thumb icon of the switch when it is turned
      off.</p>

      <p>Android: Inactive thumb color of the Material Switch.</p>
    platforms:
      - android
    since:
      android: 12.4.0
  - name: onTintColor
    type: String, Titanium.UI.Color
    summary: The color used to tint the appearance of the switch when it is turned on.
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 12.4.0
      iphone: 3.3.0
      ipad: 3.3.0
  - name: thumbTintColor
    type: String, Titanium.UI.Color
    summary: The color used to tint the appearance of the thumb.
    platforms:
      - iphone
      - ipad
      - macos
    since: 3.3.0
  - name: value
    type: Boolean
    summary: >
      Indicates whether the switch has been turned on or off by the user. May
      also be set<br>

      programmatically.<br>
    description: >
      <p>Set to <code>true</code> to turn on and <code>false</code> to turn off
      the switch.</p>

      <p>On Android, if this property is not defined, the rendered state of the
      switch is off.</p>

      <p>On iOS, be aware that this property must be set when the switch is
      rendered, otherwise it<br>

      will not be visible. This is a known issue.</p>
  - name: verticalAlign
    type: Number, String
    summary: Vertical alignment for the text field.
    platforms:
      - android
events:
  - name: change
    summary: Fired when the switch value changes.
    properties:
      - name: value
        type: Boolean
        summary: New value of the switch.
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

      <p>The click event can also be generated by a trackball click.</p>

      <p>If you want to receive and trigger the value of switch, please use the
      <code>change</code><br>

      event instead.</p>
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
examples:
  - title: Simple Switch Example
    code:
      - content: |-
          var win = Ti.UI.createWindow({
            backgroundColor: 'white'
          });

          var basicSwitch = Ti.UI.createSwitch({
            value:true // mandatory property for iOS
          });
          win.add(basicSwitch);

          basicSwitch.addEventListener('change',function(e){
            Ti.API.info('Switch value: ' + basicSwitch.value);
          });

          win.open();

          // print initial value
          Ti.API.info('Switch value: ' + basicSwitch.value);
        language: js
    intro: >-
      Create a standard switch, using default values, and output value property
      on each `change`

      event.
  - title: Toggle Button Switch Example (Android)
    code:
      - content: |-
          var win = Ti.UI.createWindow({
            backgroundColor: 'white'
          });

          var basicSwitch = Ti.UI.createSwitch({
            style: Ti.UI.SWITCH_STYLE_TOGGLE_BUTTON,
            titleOn:'Notifications Enabled',
            titleOff:'Notifications Disabled',
            value:true,
            width: 200, height:120
          });
          win.add(basicSwitch);

          basicSwitch.addEventListener('change',function(e){
            Ti.API.info('Switch value: ' + basicSwitch.value);
          });

          win.open();
        language: js
    intro: >-
      Create a standard (toggle button) switch with a customized title for each
      on/off state, and

      output value property on each `change` event.
  - title: Checkbox Switch Example (Android)
    code:
      - content: |-
          var win = Ti.UI.createWindow({
            backgroundColor: 'white'
          });

          var basicSwitch = Ti.UI.createSwitch({
            style: Ti.UI.SWITCH_STYLE_CHECKBOX,
            textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
            title:'Notifications',
            value:true,
            width: 300 // necessary for textAlign to be effective
          });
          win.add(basicSwitch);

          basicSwitch.addEventListener('change',function(e){
            Ti.API.info('Switch value: ' + basicSwitch.value);
          });

          win.open();
        language: js
    intro: >-
      Create a checkbox switch, and output value property on each `change`
      event.
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window id="win" backgroundColor="white">
                  <Switch id="basicSwitch" value="true" onChange="outputState"/>
              </Window>
          </Alloy>
        language: xml
      - content: |-
          function outputState(){
              Ti.API.info('Switch value: ' + $.basicSwitch.value);
          }
        language: js
    intro: |-
      Previous simple switch example as an Alloy view.

      switchexample.xml:
---

# Titanium.UI.Switch

An on/off switch control.

| Android | iOS |
| ------- | --- |
| ![Android](/images/switch_android.png) | ![iOS](/images/switch_ios.png) |

The appearance of a `Switch` control varies by platform:

* On Android, a Switch object can be styled either as a switch, checkbox or
toggle button based on the [Titanium.UI.Switch.style](/api/titanium/ui/switch) property. The checkbox style can
optionally display a label next to the control.

* On iOS, a Switch appears as an iOS on/off switch and doesn't have any text associated with it.

Use the [Titanium.UI.createSwitch](/api/titanium/ui) method or **`<Switch>`** Alloy element to create a switch.


**Extends:** `Titanium.UI.View` · **Since:** 0.8

<ApiProperties />

<ApiEvents />

<ApiExamples />

