---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/SplitWindow.yml
---
# Titanium.UI.iOS.SplitWindow

<TypeHeader/>

## Overview

The [masterView](Titanium.UI.iOS.SplitWindow.masterView) and [detailView](Titanium.UI.iOS.SplitWindow.detailView)
properties are required before the SplitWindow is opened.

You use this class to implement a master-detail interface, in which the left-side view presents
a list of items and the right-side presents details of the selected item. The `SplitWindow` is supported
for both iPhone and iPad idioms. Use the <Titanium.UI.iOS.createSplitWindow> method to create a `SplitWindow` object.

The `SplitWindow` is backed by the native `UISplitViewController` and uses its default behavior:

* In a wide regular width, such as an iPad in landscape, the master view and the detail view are shown side by side.
* In a narrower regular width, such as an iPad in portrait, the master view is hidden. The display mode button in the
  navigation bar of the detail view and a swipe from the leading edge show it as an overlay.
* In a compact width, such as an iPhone in portrait, the split window collapses to a single column and the system
  navigates between the master view and the detail view.

Use [displayMode](Titanium.UI.iOS.SplitWindow.displayMode) and [splitBehavior](Titanium.UI.iOS.SplitWindow.splitBehavior)
to request a different arrangement, [showMasterView](Titanium.UI.iOS.SplitWindow.showMasterView) and
[hideMasterView](Titanium.UI.iOS.SplitWindow.hideMasterView) to show or hide the master view, and
[primaryColumnWidthFraction](Titanium.UI.iOS.SplitWindow.primaryColumnWidthFraction) to control its width.

The system embeds each view in a navigation controller, so the `title` and the navigation bar properties of a
<Titanium.UI.Window> apply directly. Set `navBarHidden` to `true` on a window to hide its navigation bar. Use a
<Titanium.UI.NavigationWindow> as `masterView` or `detailView` to push windows inside a pane.

The SplitWindow is a top-level window and cannot be contained within another window or view.

<ApiDocs/>
