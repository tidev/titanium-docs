---
title: Titanium.UI.iOS.Stepper
properties:
  - name: enabled
    type: Boolean
    summary: Determines if the stepper is enabled or disabled.
  - name: value
    type: Number
    summary: The current value of the stepper.
  - name: continuous
    type: Boolean
    summary: >
      If YES, value change events are sent immediately when the value changes
      during user interaction.<br>

      If NO, a value change event is sent when user interaction ends.<br>

      The default value is YES.<br>
  - name: autorepeat
    type: Boolean
    summary: >
      If YES, the user pressing and holding on the stepper repeatedly alters
      value.<br>

      The default value is YES.<br>
  - name: wraps
    type: Boolean
    summary: >
      If YES, incrementing beyond <a
      href="/api/titanium/ui">Titanium.UI.iOS.Stepper.maximum</a> sets value to
      <a href="/api/titanium/ui">Titanium.UI.iOS.Stepper.minimum</a>. likewise,
      decrementing below<br>

      <a href="/api/titanium/ui">Titanium.UI.iOS.Stepper.minimum</a> sets value
      to <a href="/api/titanium/ui">Titanium.UI.iOS.Stepper.maximum</a>. If NO,
      the stepper does not increment beyond <a
      href="/api/titanium/ui">Titanium.UI.iOS.Stepper.maximum</a> nor<br>

      does it decrement below <a
      href="/api/titanium/ui">Titanium.UI.iOS.Stepper.minimum</a> but rather
      holds at those values.<br>

      The default value is NO.<br>
  - name: minimum
    type: Number
    summary: >
      The minimum value the stepper will be set to, the value must be smaller
      than the maximum value.<br>

      If you attempt to set a value equal to or greater than maximum, the system
      will default the<br>

      value to 0.<br>
  - name: maximum
    type: Number
    summary: >
      The maximum value the stepper will be set to, the value must be greater
      than the minimum value.<br>

      If you attempt to set a value equal to or lower than minimum, the system
      will default the<br>

      value to 100.<br>
  - name: steps
    type: Number
    summary: >
      The value the stepper will increment and decrement by, default value for
      this property is 1. When setting<br>

      a new value, it must be greater than 1.<br>
  - name: tintColor
    type: String, Titanium.UI.Color
    summary: >-
      Sets the color for the widget, any backgroundImages added will be set to
      the same color.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: backgroundImage
    type: String
    summary: >
      Background image for the stepper in its normal state, specified as a local
      file path or URL.<br>
    description: >
      <p>Also sets the background image for other stepper states (focused,
      selected),<br>

      unless they've been specified explicitly. On iOS, if
      backgroundDisabledImage is unset, the<br>

      image will appear faded to indicate being disabled. Also on iOS, if
      backgroundSelectedImage<br>

      is unset, the image will be darkened to indicate being selected.</p>
  - name: decrementImage
    type: String
    summary: >
      Background image for the stepper decrement button in its normal state,
      specified as a local<br>

      file path or URL.<br>
    description: >
      <p>Also sets the background image for the other stepper states (disabled,
      focused, selected),<br>

      unless they've been specified explicitly, except for iOS, which requires a
      backgroundImage.</p>
  - name: decrementDisabledImage
    type: String
    summary: >
      Background image for the stepper decrement button in its disabled state,
      specified as a local<br>

      file path or URL. The decrement button enters a disabled state ones the
      value is equal to the<br>

      minimumValue , setting the enabled property to false will have no effect
      to decrement button state.<br>
  - name: incrementImage
    type: String
    summary: >
      Background image for the stepper increment button in its normal state,
      specified as a local<br>

      file path or URL.<br>
    description: >
      <p>Also sets the background image for the other stepper states (disabled,
      focused, selected),<br>

      unless they've been specified explicitly, except for iOS, which requires a
      backgroundImage.</p>
  - name: incrementDisabledImage
    type: String
    summary: >
      Background image for the stepper increment button in its disabled state,
      specified as a local<br>

      file path or URL.The increment button enters a disabled state ones the
      value is equal to the<br>

      maximumValue , setting the enabled property to false will have no effect
      to increment button state.<br>
events:
  - name: change
    summary: Fired every time the stepper value changes.
    properties:
      - name: value
        type: Number
        summary: The current value of the stepper.
      - name: minimum
        type: Number
        summary: The minimum value of the stepper.
      - name: maximum
        type: Number
        summary: The maximum value of the stepper.
examples:
  - title: Simple Stepper Example
    code:
      - content: |-
          var win = Ti.UI.createWindow({
              backgroundColor: '#fff'
          });

          var stepper = Ti.UI.iOS.createStepper({
              tintColor: "green",
              steps: 3,
              maximum: 30,
              minimum: 0
          });

          stepper.addEventListener("change", function(e) {
              Ti.API.info(e.value);
          });

          win.add(stepper);
          win.open();
        language: js
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window id="window">
                  <Stepper id="stepper" onClick="doClick" tintColor="green" steps="3" />
              </Window>
          </Alloy>
        language: xml
      - content: |-
          function doClick(e) {
              alert(e.value);
          }

          $.window.open();
        language: js
    intro: |-
      Previous example as an Alloy view.

      stepper.xml:
---

# Titanium.UI.iOS.Stepper

A widget used to increment and decrement a value.


| Default | Custom |
| ------- | ------ |
| ![Stepper](/images/stepper.png) | ![Custom](/images/stepper_custom.png) |

A Stepper displays its selected state while it is being pressed.
You can specify background images for each state on iOS.
Use the [Titanium.UI.iOS.createStepper](/api/titanium/ui) method or a **`<Stepper>`** Alloy element to create a stepper
(see the "Examples" section details).

* When assigning a custom image to the `backgroundImage` property, the image must be
partially or wholly transparent for the background color or background gradient to be visible.
* Similarly, for an assigned background gradient to show through, the `backgroundColor` may need to be
set to 'transparent'.

* Note that the stepper cannot be re-sized.


**Extends:** `Titanium.UI.View` · **Since:** 5.4.0, 5.4.0, 9.2.0 · **Platforms:** iphone, ipad, macos

<ApiProperties />

<ApiEvents />

<ApiExamples />

