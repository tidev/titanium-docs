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

## Examples

### Add Searchable Content to the On-Device Index

The following example demonstrates how to create a new Ti.App.iOS.SearchableItem and
add a Ti.App.iOS.SearchableItemAttributeSet. The Ti.App.iOS.SearchableItem is then passed to the
Ti.App.iOS.SearchableIndex object to add it to the on-device search index.

#### app.js

    var searchItems = [];
    var itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({
        itemContentType: Ti.App.iOS.UTTYPE_IMAGE,
        title:"Titanium Core Spotlight Tutorial",
        contentDescription:"Tech Example \nOn: " + String.formatDate(new Date(),"short"),
        keywords:["Mobile","Appcelerator","Titanium"]
    });

    var item = Ti.App.iOS.createSearchableItem({
        uniqueIndentifier:"my-id",
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

<ApiDocs/>
