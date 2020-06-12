# Titanium.App.iOS.SearchQuery

<TypeHeader/>

## Overview

You can use this API to search multiple <Titanium.App.iOS.SearchableItem> objects at the same time. You can do that 
by using the `queryString` parameter that has a special syntax to filter and index several items. Please refer 
to the official [Apple documentation](https://developer.apple.com/reference/corespotlight/cssearchquery) for detailed information on how to structure your search-query to get the 
best possible results.

To use this feature make sure you have a compatible device running iOS 10 or later.

To create a SearchableItem object, use the Titanium.App.iOS.createSearchableItem method.
Pass a dictionary of properties to the method that will help identify the item.
At minimum, you must set the [attributeSet](Titanium.App.iOS.SearchableItem.attributeSet) property, which associates
the metadata with the SearchableItem object.

## Examples

### Perform a simple search-query for all items that start with "Searchable" in it.

The following example demonstrates how to search a Ti.App.iOS.SearchableItem using the iOS 10
Ti.App.iOS.SearchQuery API.

#### app.js
``` js
var win = Ti.UI.createWindow({
    backgroundColor: "#fff"
});
var btn = Ti.UI.createButton({
    title: "Start search-query"
});

var searchItems = [];
var itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({
    itemContentType: Ti.App.iOS.UTTYPE_IMAGE,
    title: "Titanium Core Spotlight Tutorial"
});

itemAttr.contentDescription = "Tech Example \nOn: " + String.formatDate(new Date(), "short");
itemAttr.keywords = ["Mobile", "Appcelerator", "Titanium"];
itemAttr.displayName = "Hello world";

var item = Ti.App.iOS.createSearchableItem({
    uniqueIdentifier: "my-id",
    domainIdentifier: "com.mydomain",
    attributeSet: itemAttr
});
searchItems.push(item);

var indexer = Ti.App.iOS.createSearchableIndex();

indexer.addToDefaultSearchableIndex(searchItems, function(e) {
    if (e.success) {
        Ti.API.info("Press the home button and now search for your keywords");
    } else {
        alert("Searchable index could not be created: " + JSON.stringify(e.error));
    }
});

btn.addEventListener("click", function() {
    // An array of found Ti.App.iOS.SearchableItem's
    var allItems = [];

    // The search-query
    var searchQuery = Ti.App.iOS.createSearchQuery({
        queryString: 'title == "Titanium*"',
        attributes: ["title", "displayName", "keywords", "contentType"]
    });

    // The event to be called when a new batch of items is found
    searchQuery.addEventListener("founditems", function(e) {
        for (var i = 0; i < e.items.length; i++) {
            allItems.push(e.items[i]);
        }
    });

    // The event to be called when the search-query completes
    searchQuery.addEventListener("completed", function(e) {
        if (!e.success) {
            alert(e.error);
        }

        for (var i = 0; i < allItems.length; i++) {
            var attributeSet = allItems[i].attributeSet
            var foundTitle = attributeSet.title
            var foundDisplayName = attributeSet.displayName

            Ti.API.info("title: " + foundTitle + ", displayName: " + foundDisplayName);
        }
    });

    // Start the search-query (or use searchQuery.cancel()) to abort it
    searchQuery.start();
});

win.add(btn);
win.open();
```

<ApiDocs/>
