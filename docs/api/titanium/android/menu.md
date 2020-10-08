---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Android/Menu.yml
---
# Titanium.Android.Menu

<TypeHeader/>

## Overview

The Menu and MenuItems APIs are used to create the action items
for the action bar. Action items can appear in either the action bar or the action bar's
overflow menu.

To create action items with JavaScript, assign a callback function to the activity's
[onCreateOptionsMenu](Titanium.Android.Activity.onCreateOptionsMenu) property.
The activity's menu object is passed in to the `onCreateOptionsMenu` function when the menu is created.
Use the Menu's [add()](Titanium.Android.Menu.add) method to create new action items.

In Alloy you can use `<Menu>` and `<MenuItem>` elements to create an options menu.

``` xml
<Menu id="menu" platform="android">
    <!-- Cannot specify node text.  Use attributes only. -->
    <MenuItem id="saveitem" title="Save" icon="item1.png" onClick="doSave" />
    <MenuItem id="closeitem" title="Close" icon="item1.png" onClick="doClose" />
</Menu>
```

To switch menu items dynamically, call
[invalidateOptionsMenu](Titanium.Android.Activity.invalidateOptionsMenu), which causes
the `onCreateOptionsMenu` callback to be called again.

### Menus on Tab Groups

Menus must be added to tab groups using the tab group's
activity. These changes were required to support the Android 3.0 action bar.

The TabGroup activity is available using [TabGroup.getActivity](Titanium.UI.TabGroup.getActivity).
However, unlike a window's activity it is not currently possible to set properties on
the tab group's activity before the tab group is opened. To add a menu to a tab group,
set the `onCreateOptionsMenu` property to the tab group's `open` event listener, and
then call `invalidateOptionsMenu` to force the changes to take effect.

``` js
tabGroup.addEventListener("open", function(e) {
    var activity = globals.tabs.getActivity();
    activity.onCreateOptionsMenu = function(e) {
        var menuItem = e.menu.add({
            title : "Add Task",
            showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
            icon : "add_icon.png"
        });
        menuItem.addEventListener("click", function(e) {
            //
        });
    }
    activity.invalidateOptionsMenu();
});
```

### Application Notes for Release 3.2.x and earlier

If you are using Release 3.2.x and earlier, the options menu is presented differently
based on the Android version and application settings.

On Android devices prior to Android 3.0 (API level 11), the menu is always presented
as an options menu, which is displayed when the **Menu** button is pressed.

On Android 3.0 and later, menu items can be displayed as _action items_ in the action
bar. To enable this, the application must be built with a theme that supports the
action bar, such as the Holo theme. (See
[Android Themes](https://docs.appcelerator.com/platform/latest/#!/guide/Android_Themes) in
the Titanium Guides for information on setting your application's theme.)

For menu items displayed in the menu, the `onCreateOptionsMenu` function is called
once, and the [onPrepareOptionsMenu](Titanium.Android.Activity.onPrepareOptionsMenu) callback function is called each
time the menu is opened. The `onPrepareOptionsMenu` function can be used to switch menu items dynamically.

### Further Reading

See also:

*   [Menus](https://developer.android.com/guide/topics/ui/menus.html) in the
    Android Developer Guides.

*   [Action Bar](https://developer.android.com/guide/topics/ui/actionbar.html) in
    the Android Developer Guides.

*   [Menu](https://developer.android.com/reference/android/view/Menu.html)
    in the Android Developer Reference.

## Examples

### Creating a Simple Menu

This sample creates an Android menu that displays a menu item named "Item 1",
which logs a debug message when clicked.

If the action bar is in use, the menu item will be displayed as an action item if there is room in the action bar.

``` js
var win = Ti.UI.createWindow({
  fullscreen: true
});

var activity = win.activity;

activity.onCreateOptionsMenu = function(e){
  var menu = e.menu;
  var menuItem = menu.add({
    title: "Item 1",
    icon:  "item1.png",
    showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
  });
  menuItem.addEventListener("click", function(e) {
    Ti.API.debug("I was clicked");
  });
};

win.open();
```

### Creating a Dynamic Menu

This sample creates an Android menu that displays a menu item named
"Login" or "Logout", depending on the value of a `loggedIn` Boolean variable.
Click on the item to toggle the variable's value.

``` js
var win = Ti.UI.createWindow({
  fullscreen: true
});
var LOGIN = 1, LOGOUT = 2;
var loggedIn = false;

var activity = win.activity;

activity.onCreateOptionsMenu = function(e){
  var menu = e.menu;
  var login = menu.add({ title: "Login", itemId: LOGIN });
  login.setIcon("login.png");
  login.addEventListener("click", function(e) {
    loggedIn = true;
    // In Android 3.0 and above we need to call invalidateOptionsMenu() for menu changes at runtime
    win.activity.invalidateOptionsMenu();
  });
  var logout = menu.add({ title: "Logout", itemId: LOGOUT });
  logout.setIcon("logout.png");
  logout.addEventListener("click", function(e) {
    loggedIn = false;
    // In Android 3.0 and above we need to call invalidateOptionsMenu() for menu changes at runtime
    win.activity.invalidateOptionsMenu();
  });
};

activity.onPrepareOptionsMenu = function(e) {
  var menu = e.menu;
  menu.findItem(LOGIN).setVisible(!loggedIn);
  menu.findItem(LOGOUT).setVisible(loggedIn);
};
win.open();
```

### Alloy XML Markup

Previous simple menu example as an Alloy view.

Due to the way menus are created in Alloy, menus created using Alloy markup are not
displayed until the options menu is invalidated. To force menus (or action items)
to be displayed, call `invalidateOptionsMenu` from the `open` event listener of the window or tab group
where the menu is defined.

index.xml:
``` xml
<Alloy>
    <!-- Create a heavyweight window to use the Android menu. -->
    <Window id="win" fullscreen="true" onOpen="doOpen">

        <!-- The Menu tag adds the Android menu. -->
        <Menu id="menu" platform="android">

            <!-- Cannot specify node text.  Use attributes only. -->
            <MenuItem id="menuItem" title="Item 1" icon="item1.png" onClick="doClick" showAsAction="Ti.Android.SHOW_AS_ACTION_IF_ROOM" />
        </Menu>

        <!-- Place additional views here -->
    </Window>
</Alloy>
```

index.js:
``` js
function doClick(e) {
    Ti.API.info("Menu item clicked: " + e.source.title);
}

// Ensure menu is displayed
function doOpen(e) {
    $.win.activity.invalidateOptionsMenu();
}
```

<ApiDocs/>
