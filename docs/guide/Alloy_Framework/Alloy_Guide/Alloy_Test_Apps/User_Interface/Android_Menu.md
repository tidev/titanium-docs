---
title: Android Menu
weight: '20'
---

# Android Menu

Demonstrates basic use of Menu and MenuItem objects to display items in the Android action bar.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/android\_menu](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/android_menu). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

The [Menu](#!/api/Titanium.Android.Menu) and [MenuItem](#!/api/Titanium.Android.Menu) elements let you add items to the Android [action bar](http://developer.android.com/guide/topics/ui/actionbar.html), a window feature that identifies the user location, and provides user actions and navigation modes.

![screenshot](./screenshot.png)

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <ActionBar id="actionbar" title="My XML Menu" />
        <!-- This will add an Android menu -->
        <Menu>
            <MenuItem title="option 1" icon="/ic_menu_help.png" onClick="doClick"/>
            <MenuItem title="option 2" icon="/ic_menu_home.png" onClick="openWin2"/>
        </Menu>

        <!-- Build the rest of your UI as usual -->
        <Label>Window 1</Label>
        <Label bottom="20dp">Press the menu button</Label>
    </Window>
</Alloy>
```

The "option 1" and "option 2" MenuItem elements contains `onClick` attributes that define functions, `doClick()` and `openWin2()`, that are invoked when selected.

**app/controllers/index.js**

```javascript
function doClick(e) {
    alert(e.source.title);
}
function openWin2(e) {
    Alloy.createController('win2').getView().open();
}
$.index.open();
```

**app/views/menu.xml**

```xml
<Alloy>
    <Menu>
        <MenuItem title="require 1" icon="/ic_menu_goto.png" onClick="doClick"/>
        <MenuItem title="require 2" icon="/ic_menu_manage.png" onClick="doClick"/>
    </Menu>
</Alloy>
```

## See Also

* [Titanium.Android.Menu](#!/api/Titanium.Android.Menu)

* [Titanium.Android.MenuItem](#!/api/Titanium.Android.MenuItem)

* [Titanium.Android.ActionBar](#!/api/Titanium.Android.ActionBar)

* [Say Goodbye to the Menu Button](http://android-developers.blogspot.com/2012/01/say-goodbye-to-menu-button.html) (Android Developer Blog)
