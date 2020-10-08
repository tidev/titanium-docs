---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/Toolbar.yml
---
# Titanium.UI.iOS.Toolbar

<TypeHeader/>

## Overview

A `Toolbar` is created by the <Titanium.UI.iOS.createToolbar> factory method or **`<Toolbar>`** Alloy element.

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
UI component <Titanium.UI.Toolbar> that can also be used on Android. The API itself
did not change, so it is a drop-in replacement for existing usages. This deprecated
API will be removed in Titanium SDK 8.0.0 and later.

See also:

*  [Toolbar in the iOS Human Interface Guidelines.](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/#//apple_ref/doc/uid/TP40006556-CH12-SW4)

## Examples

### Simple Toolbar

The following code excerpt creates a simple toolbar, placed at the bottom of the window.

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

var toolbar = Titanium.UI.iOS.createToolbar({
    items: [send, flexSpace, camera, flexSpace, cancel],
    bottom: 0
});

win.add(toolbar);
win.open();
```

Note the use of the flexible space for positioning the toolbar buttons -- the
`FLEXIBLE_SPACE` button doesn't appear as a button, but a variable space between the
controls on either side of it. Available space in the toolbar is divided between all of the
flexible space buttons in the toolbar. Without the flexible spaces in this example,
the toolbar buttons would be grouped tightly together on the left side of the toolbar.

### Toolbar with extended background

The following code excerpt creates a simple toolbar, placed at the top of the window which extends its background under the status bar. 

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
```

### Alloy XML Markup

Simple Toolbar example as an Alloy view.

``` js
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
```

<ApiDocs/>
