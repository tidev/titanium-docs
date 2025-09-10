---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Button.yml
---
# Titanium.UI.Button

<TypeHeader/>

## Overview

| Android | iOS |
| ------- | --- |
| ![Android](./button_android.png) | ![iOS](./button_ios.png) |

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

The Material style introduced in Titanium SDK 10.0.0 will change the default look of the buttons.
You can change button styles with a custom theme as follows:
``` xml
<!-- Assign this custom theme to "tiapp.xml" file's android manifest application element. -->
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

### iOS Platform Notes

* When assigning a custom image to the `backgroundImage` property, the image must be
partially or wholly transparent for the background color or background gradient to be visible.
* Similarly, for an assigned background gradient to show through, the `backgroundColor` may need to be
set to 'transparent'.

Unlike Android, iOS doesn't supply any default background images for buttons--
system button styles serve this purpose.

The `systemButton` property lets you create a predefined system-defined button,
such as the **Camera** or **Add** buttons, for use in toolbars and nav bars.
Specifically, system buttons may be used in the following locations:

* <Titanium.UI.iOS.Toolbar>. The `items` array can contain system buttons.
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

``` js
var cancelButton = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.CANCEL });
```

In Alloy, you can omit the namespace when setting the `systemButton` property:

``` xml
<Button id="cancelbtn" systemButton="CANCEL"></Button>
```

Note that the `systemButton` property specifies *appearance*, not behavior. For
example, to bring up the camera when the user presses the **Camera** button, you must
add an event listener to the button and call <Titanium.Media.showCamera> when the
button is clicked.

#### iOS Pressed Button Effects

If you do not supply separate background images for the normal and selected states,
iOS supplies a built-in effect for pressed buttons. For most iOS buttons, the effect
dims the entire button (except for the text) while the button is being pressed.

For toolbar buttons that use the [PLAIN](Titanium.UI.BUTTON_STYLE_OPTION_NEUTRAL) style
or use system icons such as [CAMERA](Titanium.UI.iOS.SystemButton.CAMERA), a glow effect is
used. The glow effect shows as a white circular glow or highlight at the center of the button
when the button is pressed.

## Examples

### Simple Button Example

``` js
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
```

### Alloy XML Markup

Previous example as an Alloy view.

button.xml:
``` xml
<Alloy>
    <Window id="win" backgroundColor="white">
        <!-- The title property can also be defined as node text. -->
        <Button id="button" onClick="doClick" title="Hello"
            top="10" width="100" height="50" />
    </Window>
</Alloy>
```

button.js:
``` js
function doClick(e){
    Titanium.API.info("You clicked the button");
};
```

<ApiDocs/>
