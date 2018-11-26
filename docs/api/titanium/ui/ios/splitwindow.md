---
breadcrumbLabel: SplitWindow
sidebar: auto
---

# Titanium.UI.iOS.SplitWindow

<ProxySummary/>

## Overview

The [masterView](Titanium.UI.iOS.SplitWindow.masterView) and [detailView](Titanium.UI.iOS.SplitWindow.detailView) 
properties are required before the SplitWindow is opened.

You use this class to implement a master-detail interface, in which the left-side view presents
a list of items and the right-side presents details of the selected item. The `SplitWindow` is supported
for both iPhone and iPad idioms. Use the [createSplitWindow](Titanium.UI.iOS.createSplitWindow) method to create a `SplitWindow` object

By default, `SplitWindow` shows both master and detail views in landscape orientation. When the
device switches into portrait orientation, the master is only shown if [showMasterInPortrait](Titanium.UI.iOS.SplitWindow.showMasterInPortrait)
is set to true.

The property [masterIsOverlayed](Titanium.UI.iOS.SplitWindow.masterIsOverlayed) controls how the master is
displayed in portrait mode. When `masterIsOverlayed` is set to true, the `detailView` occupies the full screen
and and `masterView` is displayed overlayed on top to the left of the screen. When `masterIsOverlayed` is set
to false, the available screen width is split between the `masterView` and `detailView`.

The width of the `masterView` can be controlled by the [portraitSplit](Titanium.UI.iOS.SplitWindow.portraitSplit) and
[landscapeSplit](Titanium.UI.iOS.SplitWindow.landscapeSplit) properties. These values are capped in the range 0.25 to 0.5.
Any values outside this range are ignored.

To add a navigation bar to either the master or detail view of the split window,
use a [Titanium.UI.NavigationWindow](Titanium.UI.NavigationWindow).

The SplitWindow is a top-level window and cannot be contained within another window or view.

<ApiDocs/>
