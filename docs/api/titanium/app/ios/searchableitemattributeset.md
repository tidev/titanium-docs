---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/App/iOS/SearchableItemAttributeSet.yml
---
# Titanium.App.iOS.SearchableItemAttributeSet

<TypeHeader/>

## Overview

The SearchableItemAttributeSet object provides a large number of properties covering most common scenarios such
as files, music, video, and document searches. To effectively add and remove information from the iOS search index
you will need to use the below listed modules:

* <Titanium.App.iOS.SearchableItemAttributeSet> - Used to create metadata related to the `Ti.App.iOS.SearchableItem`
* <Titanium.App.iOS.SearchableItem> - Used to assemble metadata into a unique object package to be used by `Ti.App.iOS.SearchableIndex`
* <Titanium.App.iOS.SearchableIndex>  - Used to add and remove `Ti.App.iOS.SearchableItem` objects to the device search index

To use this feature make sure you have a compatible device running iOS 9 or later.

To create a SearchableItemAttributeSet object, use the Titanium.App.iOS.createSearchableItemAttributeSet method.
Pass a dictionary of metadata properties to the method to associate with a SearchableItem object or UserActivity.
At minimum, you must set the [itemContentType](Titanium.App.iOS.SearchableItemAttributeSet.itemContentType) property.

Pass the SearchableItemAttributeSet object to either the Titanium.App.iOS.createSearchableItem method to the `attributeSet` key
or to a UserActivity object's [addContentAttributeSet()](Titanium.App.iOS.UserActivity.addContentAttributeSet) method.

## Examples

### Add Searchable Content to the On-Device Index

The following example demonstrates how to create a new Ti.App.iOS.SearchableItem and
add a Ti.App.iOS.SearchableItemAttributeSet. The Ti.App.iOS.SearchableItem is then passed to the
Ti.App.iOS.SearchableIndex object to add it to the on-device search index.

#### app.js
``` js
var searchItems = [];
var itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({
    itemContentType: Ti.App.iOS.UTTYPE_IMAGE,
    title:"Titanium Core Spotlight Tutorial"
});

itemAttr.contentDescription ="Tech Example \nOn: " + String.formatDate(new Date(),"short");
itemAttr.keywords =["Mobile","Appcelerator","Titanium"];

var item = Ti.App.iOS.createSearchableItem({
    uniqueIdentifier:"my-id",
    domainIdentifier:"com.mydomain",
    attributeSet:itemAttr
});
searchItems.push(item);

var indexer = Ti.App.iOS.createSearchableIndex();

indexer.addToDefaultSearchableIndex(searchItems,function(e){
    if(e.success){
        alert("Press the home button and now search for your keywords");
    }else{
        alert("Errored: " + JSON.stringify(e.error));
    }
});
```

<ApiDocs/>
