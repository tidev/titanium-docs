---
breadcrumbLabel: Toolbar
sidebar: auto
---

# Titanium.UI.iOS.Toolbar

<ProxySummary/>

## Overview

A `Toolbar` is created by the [createToolbar](Titanium.UI.iOS.createToolbar) factory method or **`<Toolbar>`** Alloy element.

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
UI component [Titanium.UI.Toolbar](Titanium.UI.Toolbar) that can also be used on Android. The API itself
did not change, so it is a drop-in replacement for existing usages. This deprecated
API will be removed in Titanium SDK 8.0.0 and later.

See also:

*  [Toolbar in the iOS Human Interface Guidelines.](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/#//apple_ref/doc/uid/TP40006556-CH12-SW4)

<ApiDocs/>
