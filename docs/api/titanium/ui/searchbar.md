---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/SearchBar.yml
---
# Titanium.UI.SearchBar

<TypeHeader/>

## Overview

| Android | iOS |
| ------- | --- |
| ![Android](./searchbar_android.png) | ![iOS](./searchbar_ios.png) |

Search bars are most commonly used for filtering the rows in a [TableView](Titanium.UI.TableView) and
[ListView](Titanium.UI.ListView). You can add a search bar to a table view via its
[search](Titanium.UI.TableView.search) property. You can add a search bar to a list view via its
[searchBar](Titanium.UI.SearchBar) property.

A search bar can also be used on its own.

Use the <Titanium.UI.createSearchBar> method or Alloy **`<SearchBar>`** element to create a search bar.

### Android Notes

On Android, the search bar's `[x]` clear button is used as a cancel button if
[iconifiedByDefault](Titanium.UI.SearchBar.iconifiedByDefault) is set `true`,
causing it to collapse back into an icon. Otherwise, it will only clear the text
and you'll receive a [change](Titanium.UI.SearchBar.change) event instead of a
[cancel](Titanium.UI.SearchBar.cancel) event like iOS.

## Examples

### Simple Search Bar

``` js
var search = Titanium.UI.createSearchBar({
  barColor:'#000',
  showCancel:true,
  height:43,
  top:0,
});
```

### Alloy XML Markup

Previous example as an Alloy view.

``` xml
<Alloy>
    <SearchBar id="search" barColor="#000" showCancel="true" height="43" top="0" />
</Alloy>
```

### Search Bar with TableView

``` js
var search = Ti.UI.createSearchBar({
    showCancel: true
});
var tableview = Ti.UI.createTableView({
    search: search
});
```

### Alloy XML Markup

Previous example as an Alloy view.

``` xml
<Alloy>
    <TableView id="tableview">
        <SearchBar id="search" showCancel="true" />
    </TableView>
</Alloy>
```

<ApiDocs/>
