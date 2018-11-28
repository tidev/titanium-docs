---
breadcrumbLabel: Button
sidebar: auto
---

# Titanium.UI.Button

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/button/button_android.png" height="50" /></td>
    <td><img src="images/button/button_ios.png" height="50" /></td>
    <td><img src="images/button/button_wp.png" height="50" /></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

A button displays its  selected state while it is being pressed. The focused state is
only used on Android devices that have navigation keys or a keyboard, to indicate
which button has input focus.

You can specify background images for each state, as well as button text and a button
icon. On iOS, there are button styles which define appearance for each state, even if
no button images are set.

Use the <Titanium.UI.createButton> method or a **`<Button>`** Alloy element to create a button
(see [Examples](#!/api/Titanium.UI.Button-examples)) .

### Android Platform Notes

Android uses default button images for the normal, focused, selected and disabled
states. If you use a custom button image, you should specify versions for the focused
and selected states (and the disabled state, if the button is ever disabled).

Android also supports setting the background color for each of the states. These are not
supported on iOS.

### iOS Platform Notes

iOS buttons have two special properties, `style` and `systemButton`.

The `style` property specifies the type of button decoration, and can be set to one
of the values described in <Titanium.UI.iOS.SystemButtonStyle>.

To use a custom button style, such as a background gradient, you may need to explicitly set
the button's `style` property to `PLAIN`, to prevent the button style from overriding any background color or gradient.

Also note:

* When assigning a custom image to the `backgroundImage` property, the image must be
partially or wholly transparent for the background color or background gradient to be visible.
* Similarly, for an assigned background gradient to show through, the `backgroundColor` may need to be
set to 'transparent'.

Unlike Android, iOS doesn't supply any default background images for buttons--
system button styles serve this purpose.

The `systemButton` property lets you create a predefined system-defined button,
such as the **Camera** or **Add** buttons, for use in toolbars and nav bars.
Specifically, system buttons may be used in the following locations:

* Some stuff <Titanium.UI.iOS.Toolbar>. The `items` array can contain system buttons.
* <Titanium.UI.iPad.Popover>. The `leftNavButton` and `rightNavButton` properties can
  refer to system buttons
* <Titanium.UI.iOS.SplitWindow>. The `toolbar` array can contain system buttons.
* <Titanium.UI.TextField>. The `keyboardToolbar` array can contain system buttons.
* <Titanium.UI.TextArea>. The `keyboardToolbar` array can contain system buttons.
* <Titanium.UI.Window>. The `leftNavButton` and `rightNavButton` properties can refer to
  system buttons and the `toolbar` array can contain system buttons.

Use the constants in <Titanium.UI.iOS.SystemButton>
to specify a button type. The size, style and decoration of system buttons is set
automatically, so you can create a button by setting only the `systemButton` property.

For example:

    var cancelButton = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.CANCEL });

In Alloy, you can omit the namespace when setting the `systemButton` property:

    <Button id="cancelbtn" systemButton="CANCEL"></Button>

Note that the `systemButton` property specifies *appearance*, not behavior. For
example, to bring up the camera when the user presses the **Camera** button, you must
add an event listener to the button and call <Titanium.Media.showCamera> when the
button is clicked.

#### iOS Pressed Button Effects

If you do not supply separate background images for the normal and selected states,
iOS supplies a built-in effect for pressed buttons. For most iOS buttons, the effect
dims the entire button (except for the text) while the button is being pressed.

For toolbar buttons that use the [PLAIN](Titanium.UI.iOS.SystemButtonStyle.PLAIN) style
or use system icons such as [CAMERA](Titanium.UI.iOS.SystemButton.CAMERA), a glow effect is
used. The glow effect shows as a white circular glow or highlight at the center of the button
when the button is pressed.

<ApiDocs/>
