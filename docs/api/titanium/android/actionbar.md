---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Android/ActionBar.yml
---
# Titanium.Android.ActionBar

<TypeHeader/>

## Overview

You can add action items to the action bar by defining an Android menu and setting the
menu items to display as action items. See [Menu](Titanium.Android.Menu) and
[MenuItem](Titanium.Android.MenuItem) for details.

You cannot change the action bar's settings until the window's [activity](Titanium.UI.Window.activity)
or tab group's [activity](Titanium.UI.TabGroup.activity) has been created.
You can detect this by assigning a callback to the activity's [onCreate](Titanium.Android.Activity.onCreate)
property.

Note that setting the [Window.navBarHidden](Titanium.UI.Window.navBarHidden) property
to true disables the Action Bar since it is part of the navigation title bar.

For more examples on using the Action Bar, refer to the
[Android Action Bar guide](https://docs.appcelerator.com/platform/latest/#!/guide/Android_Action_Bar).

### Application Notes for Alloy

Starting with Alloy 1.5.0, you can add ActionBar attributes to the `ActionBar` element.
To use the action bar, add the `<ActionBar>` tag as a child of either a
a `<Window>` or `<TabGroup>`, then set ActionBar attributes in either the XML or TSS file.

Starting with Alloy 1.4.0, you can also add ActionBar attributes to the `Menu` element.
Do not define ActionBar attributes in both the `ActionBar` and `Menu` elements. Only define the
attributes in one element.

To add action items to the action bar, add the `<Menu>` tag as a child of either
a `<Window>` or `<TabGroup>`, then add `<MenuItem>` tags as children of the `<Menu>` tag.
Set MenuItem attributes in either the XML or TSS file.

For an example of using the Action Bar with Alloy, see "Action Bar using Alloy XML Markup" below.

## Examples

### Action Bar using Alloy XML Markup

Adds action items and sets several properties on a window's action bar in the XML and TSS files.

`app/views/index.xml`:
``` xml
<Alloy>
    <Window title="My Test App">
        <ActionBar id="actionbar" title="My XML Menu" onHomeIconItemSelected="doMenuClick" />
        <Menu>
            <MenuItem id="item1" title="Settings" onClick="openSettings" />
            <MenuItem id="item2" title="Search" onClick="doSearch" />
        </Menu>
        <Label id="label">Welcome!</Label>
    </Window>
</Alloy>
```

`app/styles/index.tss`:
```
"MenuItem": {
    showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
},
"#item1": {
    icon: Ti.Android.R.drawable.ic_menu_preferences
},
"#item2": {
    icon: Ti.Android.R.drawable.ic_menu_search
},
"#actionbar": {
    icon: "/actionicon.png",
    displayHomeAsUp: true,
    backgroundImage: "/actionbackground.png"
}
```

### Action Bar Example

The following example sets several properties on a window's action bar.

``` js
const win = Ti.UI.createWindow({
    title: "Old Title",
    navBarHidden: false
});
if (OS_ANDROID) {
    win.activity.onCreate = () => {
        const actionBar = win.activity.actionBar;
        if (actionBar) {
            actionBar.backgroundImage = "/bg.png";
            actionBar.title = "New Title";
            actionBar.onHomeIconItemSelected = () => {
                Ti.API.info("Home icon clicked!");
            };
        }
    };
}
win.open();
```

The above can be done for a tab group via its [activity](Titanium.UI.TabGroup.activity) property.
Note that individual tab windows do not have an activity. Only the root tab group (which hosts the tabs)
provides an activity property.

<ApiDocs/>
