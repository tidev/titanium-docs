---
breadcrumbLabel: ScrollableView
sidebar: auto
---

# Titanium.UI.ScrollableView

<ProxySummary/>

## Overview

Use the <Titanium.UI.createScrollableView> method or **`<ScrollableView>`** Alloy element to create
a scrollable view.

The `ScrollableView` supports an on-screen paging control to indicate whether a previous or next
page exists. When the paging control is enabled on iOS, by default it appears as
small dots on the bottom of the screen, whereas Android displays arrows on the left and
right-hand sides.

Use the `cacheSize` property to cache views inside the scrollable view. This can be required when
using complex view structures in the scrollable view (e.g. map views) and the app might crash if no
proper cache size is specified. See the <Titanium.UI.ScrollableView.cacheSize> documentation for more
infos regarding view caching.

Only the `scroll` event exists for the `ScrollableView` on Android. To support others, child
views may be added to pages, and event listeners added to these views instead of the pages
themselves.

In a previous Titanium version for iOS, the `maxZoomScale` and `minZoomScale` properties were
removed for performance and parity reasons. As they still remain in <Titanium.UI.ScrollView>,
the equivalent functionality may be obtained by adding a `ScrollView` to `ScrollableView`. See
the "Simple Scrollable View with 2 Zoomable Images" example for a demonstration.

<ApiDocs/>
