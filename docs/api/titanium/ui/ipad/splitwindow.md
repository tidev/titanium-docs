---
breadcrumbLabel: SplitWindow
sidebar: auto
---

# Titanium.UI.iPad.SplitWindow

<ProxySummary/>

## Overview

You use this class to implement a master-detail interface, in which the left-side view presents
a list of items and the right-side presents details of the selected item. The SplitView is for
use exclusively on iPad devices.

By default, `SplitView` shows both master and detail views in landscape orientation. When the
device switches into portrait orientation, the detail view occupies the entire screen. The user
can click a button to bring up the master view as floating, "popover" view. (To show the master
view in both orientations, set `showMasterInPortrait` to `true`.)

Use the [createSplitWindow](Titanium.UI.iPad.createSplitWindow) method or **`<SplitWindow>`** Alloy element to create a
SplitWindow. A `<SplitWindow>` element only accepts a `<Window>` or `<NavigationWindow>` element
as children.

The `masterView` and `detailView` properties are required in the constructor of the SplitWindow
and cannot be changed once set. In an Alloy application, the first `<Window>` element declared
inside the `<SplitWindow>` is assigned to `masterView`; the second declared `<Window>` element
is assigned to `detailView`.

To add a navigation bar to either the master or detail view of the split window,
use a [Titanium.UI.NavigationWindow](Titanium.UI.NavigationWindow). See examples below.

The SplitWindow is a top-level window and cannot be contained within another window or view.

<ApiDocs/>
