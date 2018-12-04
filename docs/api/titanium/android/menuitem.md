# Titanium.Android.MenuItem

<ProxySummary/>

## Overview

As of Release 3.3.0, the Menu and MenuItem APIs are used to create action items for the action bar.
Prior to Release 3.3.0, the APIs could also be used to customize the Options Menu.

In JavaScript, use the Menu's [add()](Titanium.Android.Menu.add) method to create
new action items.

In Alloy you can define **`<MenuItem>`** elements inside a `<Menu>` element.

    <Menu id="menu" platform="android">
        <MenuItem id="saveitem" title="Save" icon="item1.png" onClick="doSave" />
        <MenuItem id="closeitem" title="Close" icon="item1.png" onClick="doClose" />
    </Menu>

Action items can appear in either the action bar or the action bar's
overflow menu.  To determine how an action item is displayed, set
[showAsAction](Titanium.Android.MenuItem.showAsAction).

You can optionally customize the look of action items using the
[actionView](Titanium.Android.MenuItem.actionView) property.

See the <Titanium.Android.Menu> reference page for additional code examples.

Further Reading:

  * [Android Developers: MenuItem](https://developer.android.com/reference/android/view/MenuItem.html)

<ApiDocs/>
