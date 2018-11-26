---
breadcrumbLabel: SearchQuery
sidebar: auto
---

# Titanium.App.iOS.SearchQuery

<ProxySummary/>

## Overview

You can use this API to search multiple [Titanium.App.iOS.SearchableItem](Titanium.App.iOS.SearchableItem) objects at the same time. You can do that 
by using the `queryString` parameter that has a special syntax to filter and index several items. Please refer 
to the official [Apple documentation](https://developer.apple.com/reference/corespotlight/cssearchquery) for detailed information on how to structure your search-query to get the 
best possible results.

To use this feature make sure you have a compatible device running iOS 10 or later.

To create a SearchableItem object, use the Titanium.App.iOS.createSearchableItem method.
Pass a dictionary of properties to the method that will help identify the item.
At minimum, you must set the [attributeSet](Titanium.App.iOS.SearchableItem.attributeSet) property, which associates
the metadata with the SearchableItem object.

<ApiDocs/>
