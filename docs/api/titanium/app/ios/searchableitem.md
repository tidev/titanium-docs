---
breadcrumbLabel: SearchableItem
sidebar: auto
---

# Titanium.App.iOS.SearchableItem

<ProxySummary/>

## Overview

To effectively add and remove information from the iOS search index you will need to use the below listed modules:

* <Titanium.App.iOS.SearchableItemAttributeSet> - Used to create metadata related to the `Ti.App.iOS.SearchableItem`
* <Titanium.App.iOS.SearchableItem> - Used to assemble metadata into a unique object package to be used by `Ti.App.iOS.SearchableIndex`
* <Titanium.App.iOS.SearchableIndex> - Used to add and remove `Ti.App.iOS.SearchableItem` objects to the device search index

To use this feature make sure you have a compatible device running iOS 9 or later.

To create a SearchableItem object, use the Titanium.App.iOS.createSearchableItem method.
Pass a dictionary of properties to the method that will help identify the item.
At minimum, you must set the [attributeSet](Titanium.App.iOS.SearchableItem.attributeSet) property, which associates
the metadata with the SearchableItem object.

Then, pass the SearchableItem object to a SearchableIndex object's
[addToDefaultSearchableIndex()](Titanium.App.iOS.SearchableIndex.addToDefaultSearchableIndex) method to add the item
to the device's search index.

<ApiDocs/>
