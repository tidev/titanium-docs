---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/TextArea.yml
---
# Titanium.UI.TextArea

<TypeHeader/>

## Overview

| Android | iOS |
| ------- | --- |
| ![Android](./textarea_android.png) | ![iOS](./textarea_ios.png) |

Use the <Titanium.UI.createTextArea> method or **&lt;TextArea&gt;** Alloy element to create a text area.

### `click` event in iOS

In iOS 11+, `click` event in text area is not fired due to changes from apple.
Use `touchstart` event instead of `click` event.

## Examples

### Basic Text Area with Customizations

This example creates a highly customized text area.

``` js
var win = Ti.UI.createWindow();
var textArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
  keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  value: 'I am a textarea',
  top: 60,
  width: 300, height : 70
});
win.add(textArea);
win.open();
```

### Text Area with Custom Keyboard Toolbar (iOS)

On iOS, a configurable toolbar can be displayed above the virtual keyboard.
Toolbars can be used with both text areas and text fields. See <Titanium.UI.iOS.Toolbar>
for more information.

This code excerpt creates a text area with a toolbar:

Example using a custom keyboard toolbar:

``` js
var send = Ti.UI.createButton({
    style : Ti.UI.BUTTON_STYLE_OPTION_POSITIVE,
    title : 'Send'
});

var camera = Ti.UI.createButton({
    systemButton : Ti.UI.iOS.SystemButton.CAMERA
});

var cancel = Ti.UI.createButton({
    systemButton : Ti.UI.iOS.SystemButton.CANCEL
});

var flexSpace = Ti.UI.createButton({
    systemButton : Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE
});

var textarea = Ti.UI.createTextArea({
    borderColor : '#000',
    color : '#000',
    keyboardToolbar : [cancel, flexSpace, camera, flexSpace, send],
    keyboardToolbarColor : '#999',
    keyboardToolbarHeight : 40,
    value : 'Focus to see keyboard with toolbar',
    top : 10,
    width : 300, height : 120
});
```

### Alloy XML Markup

Previous basic text area with customizations example as an Alloy view.

``` xml
<Alloy>
    <Window id="win">
        <TextArea id="textArea"
            borderWidth="2" borderColor="#bbb" borderRadius="5"
            color="#888" textAlign="left" value="I am a textarea"
            top="60" width="300" height="70" />
    </Window>
</Alloy>
```

<ApiDocs/>
