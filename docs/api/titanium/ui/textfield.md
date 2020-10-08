---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/TextField.yml
---
# Titanium.UI.TextField

<TypeHeader/>

## Overview

| Android | iOS | Windows |
| ------- | --- | ------- |
| ![Android](./textfield_android.png) | ![iOS](./textfield_ios.png) | ![Windows](./textfield_wp.png) |

Use the <Titanium.UI.createTextField> method or **`<TextField>`** Alloy element to create a text field.

### `click` event in iOS

In iOS 11+, `click` event in text field is not fired due to changes from apple. 
Use `touchstart` event instead of `click` event.

## Examples

### Basic Text Field

Create a simple text field with green text color.

``` js
var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var textField = Ti.UI.createTextField({
  backgroundColor: '#fafafa',
  color: 'green',
  width: 250,
  height: 40
});

win.add(textField);
win.open();
```

### Custom Keyboard Toolbar (iOS)

On iOS, a configurable toolbar can be displayed above the virtual keyboard.
Toolbars can be used with both text areas and text fields. See <Titanium.UI.iOS.Toolbar>
for more information.

This code excerpt creates a text field with a toolbar:

``` js
var win = Ti.UI.createWindow({
    backgroundColor: 'white'
});

var send = Ti.UI.createButton({
    title: 'Send',
    style: Ti.UI.iOS.SystemButtonStyle.DONE,
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

var textfield = Ti.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
    hintText: 'Focus to see keyboard with toolbar',
    keyboardToolbar : [cancel, flexSpace, camera, flexSpace, send],
    keyboardToolbarColor: '#999',
    keyboardToolbarHeight: 40,
    top: 10,
    width: 300,
    height: 35
});

win.add(textField);
win.open();
```

### Alloy XML Markup

Previous basic text field with green text color example using Alloy.

Alternatively, define the properties using the TSS file.

``` xml
<Alloy>
    <Window id="win" backgroundColor="white">
        <TextField class="myTextField" color="green" width="250" height="45" />
    </Window>
</Alloy>
```

### Alloy Custom Keyboard Toolbar (iOS)

Previous custom keyboard toolbar example as an Alloy view.  Use the `<KeyboardToolbar>` XML
element to set the `keyboardToolbar` property.

You can also declare the `leftButton` and `rightButton` properties in XML markup as the
`<LeftButton>` and `<RightButton>` XML elements.

``` xml
<Alloy>
    <Window fullscreen="true" backgroundColor="white">
        <TextField
            platform="ios"
            borderStyle="Ti.UI.INPUT_BORDERSTYLE_BEZEL"
            keyboardToolbarColor="#999"
            keyboardToolbarHeight="40"
            top="10"
            height="35"
            width="300"
            value="Focus to see keyboard with toolbar">

            <!-- Sets the keyboardToolbar property -->
            <KeyboardToolbar>
                <Toolbar>
                    <Items>
                        <Button systemButton="CANCEL" />
                        <FlexSpace/>
                        <Button systemButton="CAMERA" />
                        <FlexSpace/>
                        <Button style="DONE">Send</Button>
                    </Items>
                </Toolbar>
            </KeyboardToolbar>
        </TextField>
    </Window>
</Alloy>
```

<ApiDocs/>
