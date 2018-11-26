---
breadcrumbLabel: ActionBar
sidebar: auto
---

# Titanium.Android.ActionBar

<ProxySummary/>

## Overview

Starting with Release 3.3.0, the Titanium SDK uses the appcompat library to provide support for
the action bar, including devices running Android 2.3.x and prior. If you are using a release earlier
than 3.3.0, refer to the _Applicaton Note_ below for additional information.

You can add action items to the action bar by defining an Android menu and setting the
menu items to display as action items. See [Menu](Titanium.Android.Menu) and
[MenuItem](Titanium.Android.MenuItem) for details.

In JavaScript, wait for the window or tab group's `open` event before accessing
the action bar from the window or tab group's [activity](Titanium.Android.Activity).

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

### Action Bar Icon

Starting with Release 4.0, due to the requirement that the target SDK must be set to Android 5.0
(API level 21) or higher, the action bar icon may not display. Google is discouraging
the use of icons in toolbars:

    In modern Android UIs developers should lean more on a visually distinct color scheme for toolbars
    than on their application icon. The use of application icon plus title as a standard layout is
    discouraged on API 21 devices and newer.

Source: [Android Developer: Toolbar API reference](https://developer.android.com/reference/android/support/v7/widget/Toolbar.html)

### Application Note for Release 3.2.x and earlier

If you are using Release 3.2.x or earlier, this feature is only available in Android 3.0
(API level 11) and above.

To access the action bar, you must first open a heavyweight window or tab group that
uses one of the action bar themes (such as the Android Holo theme).

<ApiDocs/>
