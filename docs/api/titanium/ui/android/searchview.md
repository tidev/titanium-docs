---
breadcrumbLabel: SearchView
sidebar: auto
---

# Titanium.UI.Android.SearchView

<ProxySummary/>

## Overview

`SearchView` provides a user interface to enter a search query and submit a request to a search provider.

Search views are most commonly used for filtering the rows in a [TableView](Titanium.UI.TableView).
Similar to [SearchBar](Titanium.UI.SearchBar), you can add a search view to a table view by setting the table view's 
[search](Titanium.UI.TableView.search) property. A search view can be used without a `TableView`. 

You can also use a `SearchView` object as the <Titanium.UI.ListView.searchView>
property of a [ListView](Titanium.UI.ListView) object.

You can also add `SearchView` to an `ActionBar` as a view (see example below).

Use the <Titanium.UI.Android.createSearchView> method or **`<SearchView>`** Alloy element to create
a search view. You must set the Alloy element's `ns` attribute to **Ti.UI.Android**:

    <SearchView ns="Ti.UI.Android" platform="android"/>

<ApiDocs/>
