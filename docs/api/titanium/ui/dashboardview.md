---
breadcrumbLabel: DashboardView
sidebar: auto
---

# Titanium.UI.DashboardView

<ProxySummary/>

## Overview

The DashboardView is created using the [createDashboardView](Titanium.UI.createDashboardView) method or **`<DashboardView>`** 
Alloy element.

Dashboard view's edit mode may be activated by a longpress of a [Titanium.UI.DashboardItem](Titanium.UI.DashboardItem) item, 
unless this behavior has been disabled by the [editable](Titanium.UI.DashboardView.editable) 
property. As a dashboard view does not inherently provide a way to exit edit mode, this must be 
explicitly defined.

When edit mode has been activated, the item icons wobble by default to act as a visual cue. 
This behavior may be disabled using the [wobble](Titanium.UI.DashboardView.wobble) property.

If a dashboard contains more than 9 items, it will be paged into screens in a 3 x 3 formation 
using its built-in scrollable view. A paging control is added to the bottom of the view to 
indicate the active page.

Note that a dashboard is only intended to be used in [PORTRAIT](Titanium.UI.PORTRAIT) 
orientation mode.

<ApiDocs/>
