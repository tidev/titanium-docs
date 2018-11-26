---
breadcrumbLabel: ScrollView
sidebar: auto
---

# Titanium.UI.ScrollView

<ProxySummary/>

## Overview

Use the [createScrollView](Titanium.UI.createScrollView) method or **`<ScrollView>`** Alloy element to create a scroll view.

Views added to the scroll view will be scrolled based on the size of the scrollable region of
content. If a scrollable region fits within the size of its scroll view, the view will not
scroll.

### Android Platform Notes

On Android, a scroll view can only scroll in one direction, either vertically or horizontally,
and not both at the same time. The [scrollType](Titanium.UI.ScrollView.scrollType) property sets the scroll
direction explicitly. If the `scrollType` property is not assigned a value, the scroll view
attempts to determine the scroll direction based on some the following rules:

* If [contentWidth](Titanium.UI.ScrollView.contentWidth) and [width](Titanium.UI.ScrollView.width) are both
set and are equal to each other, or if they are both set
*and* `showVerticalScrollIndicator` is set to `true`, then the scroll direction is set to
"vertical".

* If [contentHeight](Titanium.UI.ScrollView.contentHeight) and [height](Titanium.UI.ScrollView.height) are
both set and are equal, or if they are both set and [showHorizontalScrollIndicator](Titanium.UI.ScrollView.showHorizontalScrollIndicator) is set to
`true`, then the scroll direction is set to "horizontal".

Pinching a `ScrollableView` to zoom in and out of content is not supported on Android. On iOS, this action
is natively supported by the UIScrollView class, but on Android, the native ScrollView class does
not support this action.

<ApiDocs/>
