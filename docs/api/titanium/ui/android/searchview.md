# Titanium.UI.Android.SearchView

<TypeHeader/>

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

``` xml
<SearchView ns="Ti.UI.Android" platform="android"/>
```

## Examples

### Search View for Table in Action Bar

The following example creates a SearchView widget for a TableView
and displays it as an Action Bar item if the Google API level is 11 or later.
If not, it defaults to use the search bar.

``` js
var win = Ti.UI.createWindow({
    backgroundColor: 'blue',
    fullscreen: false
});

// Use action bar search view
var search = Ti.UI.Android.createSearchView({
    hintText: "Table Search"
});

win.activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
    var menuItem = menu.add({
        title: 'Table Search',
        actionView : search,
        icon: (Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png"),
        showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
    });
};

var data = [];
data.push(Ti.UI.createTableViewRow({title:'Apple'}));
data.push(Ti.UI.createTableViewRow({title:'Banana'}));
data.push(Ti.UI.createTableViewRow({title:'Orange'}));
data.push(Ti.UI.createTableViewRow({title:'Raspberry'}));

var tableview = Titanium.UI.createTableView({
    data: data,
    search: search,
    searchAsChild: false
});

win.add(tableview);
win.open();
```

### Alloy XML Markup

Previous example as an Alloy project.

index.xml:
``` xml
<Alloy>
    <Window id="win" backgroundColor="blue" fullscreen="false" layout="vertical">
        <TableView id="tableview" top="10" searchAsChild="false">
            <TableViewRow title="Apple" />
            <TableViewRow title="Banana" />
            <TableViewRow title="Orange" />
            <TableViewRow title="Raspberry" />
        </TableView>
    </Window>
</Alloy>
```

index.js:
``` js
// use action bar search view
var search = Alloy.createController("searchview").getView();
$.tableview.search = search;
$.win.addEventListener("open", function() {
    $.win.activity.onCreateOptionsMenu = function(e) {
        e.menu.add({
            title: "Table Search",
            icon: (Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png"),
            actionView: search,
            showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
        });
    }
    $.win.activity.invalidateOptionsMenu();
});

$.win.open();
```

searchview.xml:
``` xml
<Alloy>
    <SearchView id="searchView" ns="Ti.UI.Android" platform="android" hintText="Table Search" />
</Alloy>
```

<ApiDocs/>
