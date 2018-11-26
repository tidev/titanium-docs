---
breadcrumbLabel: SearchableItemAttributeSet
sidebar: auto
---

# Titanium.App.iOS.SearchableItemAttributeSet

<ProxySummary/>

## Overview

The SearchableItemAttributeSet object provides a large number of properties covering most common scenarios such
as files, music, video, and document searches. To effectively add and remove information from the iOS search index
you will need to use the below listed modules:

* [Titanium.App.iOS.SearchableItemAttributeSet](Titanium.App.iOS.SearchableItemAttributeSet) - Used to create metadata related to the `Ti.App.iOS.SearchableItem`
* [Titanium.App.iOS.SearchableItem](Titanium.App.iOS.SearchableItem) - Used to assemble metadata into a unique object package to be used by `Ti.App.iOS.SearchableIndex`
* [Titanium.App.iOS.SearchableIndex](Titanium.App.iOS.SearchableIndex)  - Used to add and remove `Ti.App.iOS.SearchableItem` objects to the device search index

To use this feature make sure you have a compatible device running iOS 9 or later.

To create a SearchableItemAttributeSet object, use the Titanium.App.iOS.createSearchableItemAttributeSet method.
Pass a dictionary of metadata properties to the method to associate with a SearchableItem object or UserActivity.
At minimum, you must set the [itemContentType](Titanium.App.iOS.SearchableItemAttributeSet.itemContentType) property.

Pass the SearchableItemAttributeSet object to either the Titanium.App.iOS.createSearchableItem method to the `attributeSet` key
or to a UserActivity object's [addContentAttributeSet()](Titanium.App.iOS.UserActivity.addContentAttributeSet) method.

<ApiDocs/>
