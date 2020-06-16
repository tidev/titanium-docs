---
title: Complex Widget
weight: '20'
---

# Complex Widget

Demonstrates a widget using another widget.

::: tip App Folder Location
alloy/test/apps/**widgets/complex**
:::
![search](./search.png)

The application defines two widgets: **com.testing.searchForBooks** and **com.appcelerator.loading**. As their names imply, the first widget provides UI and logic to search for books by title (using the [Google Books API](https://developers.google.com/books/docs/v1/using#PerformingSearch)) , while the second widget displays a loading indicator while the search is in progress.

**App directory structure**

```
app
├──config.json
├──styles
│  ├──app.tss
│  ├──index.tss
│  └──row.tss
├──views
│  ├──index.xml
│  └──row.xml
└──widgets
    ├──com.appcelerator.loading
    │   ├──assets
    │   ├──controllers
    │   │  └──widget.js
    │   ├──styles
    │   │  └──widget.tss
    │   ├──views
    │   │  └──widget.xml
    │   └──widget.json
    └── com.testing.searchForBooks
        ├──assets
        │  └──ic_search.png
        ├──controllers
        │  └──widget.js
        ├──styles
        │  └──widget.tss
        ├──views
        │  └──widget.xml
        └──widget.json
```

The application's main index.xml view includes the **searchForBooks** widget and a `<Table/>` element to display search results.

**app/views/index.ml**

```xml
<Alloy>
    <Window id="win">
        <Widget src="com.testing.searchForBooks" id="sfb"/>
        <TableView id="table"/>
    </Window>
</Alloy>
```

The searchForBooks widget includes a [TextField](#!/api/Titanium.UI.TextField) where the user enters the search term, an [ImageView](#!/api/Titanium.UI.ImageView) that displays a search icon, and a `<Require/>` element that includes the **loading** widget.

**app/widgets/com.testing.searchForBooks/views/widget.xml**

```xml
<Alloy>
    <View id="bar">
        <TextField id="text" onReturn="searchForBooks"/>
        <View class="divider"/>
        <View id="searchView" onClick="searchForBooks">
            <ImageView id="search"/>
            <Require type="widget" src="com.appcelerator.loading" id="loading"/>
        </View>
    </View>
</Alloy>
```

::: tip 💡 Hint
A `<Require/>` element whose `type` attribute is set to "widget", as above, is equivalent to a `<Widget/>` element.
:::

The **loading** widget contains an ImageView whose [images](#!/api/Titanium.UI.ImageView-property-images) property is set to an array of images in the widget's TSS file. Initially, the loading widget's [opacity](#!/api/Titanium.UI.View-property-opacity) property is set to 0 by the loading widget's TSS file so that it's not visible. Once the user initiates the search, the search icon's opacity is set to 0, and the loading widget's opacity is set to 1, making it visible.

```xml
<Alloy>
    <ImageView id="loading"></ImageView>
</Alloy>
```
