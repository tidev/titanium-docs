---
breadcrumbLabel: Tab
sidebar: auto
---

# Titanium.UI.Tab

<ProxySummary/>

## Overview

A `TabGroup` tab instance. Each tab includes a button and one or more windows, which
holds the "contents" of the tab. Users can select a tab by clicking on the tab button.

Use the [createTab](Titanium.UI.createTab) method or **`<Tab>`** Alloy element to create a tab.

Use [TabGroup.setActiveTab](Titanium.UI.TabGroup.setActiveTab) to switch between tabs
in a tab group. The [currentTab](Titanium.UI.currentTab) property provides a global reference to
the currently active tab.

The behavior of tabs and tab groups follows the platform's native navigation style,
which varies significantly between platforms.

### iOS Platform Implementation Notes

On iOS, the tab maintains a stack of windows. Windows on top
of the stack can partially or totally obscure windows lower in the stack.  Calling
[open](Titanium.UI.Tab.open) opens a new window on top of the window stack. When a window
is closed, either by the user or by code, the window is removed from the stack, making
the previous window visible. The root tab window cannot be removed.

On iOS the tab controls are generally kept on screen to allow a user to
navigate inside the app. Tab controls are hidden when the user is performing a modal
task (for example, composing a message). In this case, the app should provide a button
in the navigation bar to return to the previous screen. On iOS, the window should also
be opened as modal. On iOS, The tab controls can also be hidden by opening the new window
with [tabBarHidden](Titanium.UI.Window.tabBarHidden) set to `true`.

When closing a tab window in iOS, you should always use the
[Tab.close](Titanium.UI.Tab.close) method to ensure that the tab group maintains its
navigation state.

### Android Platform Implementation Notes

On Android, the tab does not maintain a stack of windows.
Calling [open](Titanium.UI.Tab.open) opens a new, heavyweight window, which
by default covers the tab group entirely. This seems quite different from the iOS model,
but it is the standard model for Android applications. Users can use the **Back** button
to close the window and return to the tab group.

On Android, tab windows can be closed using either
[Tab.close](Titanium.UI.Tab.close) or [Window.close](Titanium.UI.Window.close). Since
no window stack is maintained, only a single window opened using
[Tab.open](Titanium.UI.Tab.open) can be closed using `Tab.close`.

As on iOS, the root tab window cannot be closed.

<ApiDocs/>
