---
breadcrumbLabel: Picker
sidebar: auto
---

# Titanium.UI.Picker

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/picker/picker_android.png" height="150" /></td>
    <td><img src="images/picker/picker_ios.png" height="75" style="border: 1px solid black;"/></td>
    <td><img src="images/picker/picker_wp.gif" height="150" style="border: 1px solid black;"/></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

Use the <Titanium.UI.createPicker> method or Alloy **`<Picker>`** element to create a picker control.

On Android, the `useSpinner` property must be enabled to support multiple columns.
By default, the spinner is automatically sized to fit its content and can overflow
to additional spinner rows. The size of the picker can be adjusted with the `width`
and `height` properties, but may omit picker columns or cut off picker rows
if the size is set too small. This property is deprecated. Please use the default
Android native "dropdown" style by not setting `useSpinner` to `true`.

On iOS, the `height` property is only available in iOS 9 and later.
By default, the size of the picker, including its background, is fixed at the
same height as the iPhone keyboard to respect the
[iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/#//apple_ref/doc/uid/TP40006556-CH15-SW3).
The default `width` on iOS is 320px and the `height` is 228px.
The contents of the picker are sized to fit the picker, which may cut off text
in the picker rows. Adding views to picker rows is also supported on iOS.

On iPad, Apple recommends using a picker only in a popover.  Since the size of the picker
cannot be adjusted, it is not suitable for the main screen.

**Note:** you can only set the [columns](Titanium.UI.Picker.columns) property for the plain picker.
If you set the [type](Titanium.UI.Picker.type) property to anything else except
`Titanium.UI.PICKER_TYPE_PLAIN`, you cannot modify the picker's columns.

<ApiDocs/>
