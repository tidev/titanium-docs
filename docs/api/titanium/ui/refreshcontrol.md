---
breadcrumbLabel: RefreshControl
sidebar: auto
---

# Titanium.UI.RefreshControl

<ProxySummary/>

## Overview

You use a `RefreshControl` with a [Titanium.UI.TableView](Titanium.UI.TableView), [Titanium.UI.ListView](Titanium.UI.ListView) or [Titanium.UI.ScrollView](Titanium.UI.ScrollView) object. 
It provides an alternate method to implement **pull to refresh** functionality provided by 
[headerPullView](Titanium.UI.TableView.headerPullView) and [pullView](Titanium.UI.ListView.pullView) properties.

Use the [createRefreshControl](Titanium.UI.createRefreshControl) method to create a RefreshControl.

**Important iOS 10+ Note**: If you use the RefreshControl inside a [Titanium.UI.Window](Titanium.UI.Window) that has the `largeTitleEnabled` property
set to `true`, you also need to set the `extendEdges` property to either `[Ti.UI.EXTEND_EDGE_TOP]` or `[Ti.UI.EXTEND_EDGE_ALL]`
in order to prevent a flickering of the refresh spinner. In Titanium SDK 8+, the `extendEdges` property will be set to `[Ti.UI.EXTEND_EDGE_ALL]`
by default to match the native behavior.

<ApiDocs/>
