---
breadcrumbLabel: TabGroup
sidebar: auto
---

# Titanium.UI.TabGroup

<ProxySummary/>

## Overview

A tab group can contain one or more [Tab](Titanium.UI.Tab) objects, each of which has an
associated tab control that is used to bring it into focus.

Use the <Titanium.UI.createTabGroup> method or **`<TabGroup>`** Alloy element to create a tab group
that, in turn, contains one or more `<Tab>` elements.

You can add tabs to the group using [addTab](Titanium.UI.TabGroup.addTab), and programmatically
switch to a specific tab using [setActiveTab](Titanium.UI.TabGroup.setActiveTab).

### Platform Implementation Notes

When using a tab group, note the following differences between platforms:

* The tab group controls are positioned at the top of the display on Android and at the bottom
on iOS.

* On Android, only one tab group may exist at one time. A tab group may be closed to allow a new
one to be opened later, but the root of the application must be a heavyweight window to prevent
it exiting. Tabs cannot be removed from the tab group once added, and tabs cannot be reordered.

* On iOS, more than one tab group may exist, and may be opened and closed as required.
Each tab can contain a stack of windows, and the user can switch between them by tapping the
tab's associated control. Tabs can be removed, and the user may (optionally) be allowed to
reorder tabs.

* On iOS, it is also possible to add tabs by updating the
[tabs](Titanium.UI.TabGroup.tabs) property, and to switch active tabs by setting the
[active](Titanium.UI.Tab.active) property on one of the tabs to `true`. Since these mechanisms
are platform-specific, it is recommended that you use `addTab` and `setActiveTab` instead.

* If you use the iOS-specific mechanisms, it is possible to add multiple active tabs
to a tab group. In this case, the result of which tab is initially selected is undefined.

### Further Reading

If using tab groups on iOS, see
[iOS UI Element Usage Guidelines](https://developer.apple.com/ios/human-interface-guidelines/bars/tab-bars/).

<ApiDocs/>
