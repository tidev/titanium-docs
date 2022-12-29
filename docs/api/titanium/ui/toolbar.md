---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Toolbar.yml
---
# Titanium.UI.Toolbar

<TypeHeader/>

## Overview

A `Toolbar` is created by the <Titanium.UI.createToolbar> factory method or **`<Toolbar>`** Alloy element.

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

## Examples

### Simple Toolbar

The following code excerpt creates a simple toolbar, placed at the bottom of the window.

``` js
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
```

### Toolbar (iOS) with extended background

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

var toolbar = Ti.UI.createToolbar({
    items: [send, flexSpace, camera, flexSpace, cancel],
    top: 20,
    extendBackground: true
});

win.add(toolbar);
win.open();
```

Note the use of the flexible space for positioning the toolbar buttons -- the
`FLEXIBLE_SPACE` button doesn't appear as a button, but a variable space between the
controls on either side of it. Available space in the toolbar is divided between all of the
flexible space buttons in the toolbar. Without the flexible spaces in this example,
the toolbar buttons would be grouped tightly together on the left side of the toolbar.

### Alloy Example (simple Toolbar)

Simple Toolbar example as an Alloy view.

``` xml
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
```

### Alloy Example (Toolbar as ActionBar)

Example how to set up Toolbar as an ActionBar

``` xml
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
```

<ApiDocs/>
