---
breadcrumbLabel: Toolbar
sidebar: auto
---

# Titanium.UI.Toolbar

<ProxySummary/>

## Overview

A `Toolbar` is created by the [createToolbar](Titanium.UI.createToolbar) factory method or **`<Toolbar>`** Alloy element.

A `Toolbar` can contain buttons, as well as certain other widgets, including text fields and
labels.

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
inherit [ActionBar's](Titanium.Android.ActionBar) methods, properties and events and provide a better customization of this
design element. For example you can provide your own images to be used as navigation button icon, overflow menu icon and logo.
In order to do that, an application must be using Theme.AppCompat.NoTitleBar.
It can be set in the tiapp.xml file of the application.

See also:

*  [Toolbar in the iOS Human Interface Guidelines.](https://developer.apple.com/ios/human-interface-guidelines/bars/toolbars/)

<ApiDocs/>
