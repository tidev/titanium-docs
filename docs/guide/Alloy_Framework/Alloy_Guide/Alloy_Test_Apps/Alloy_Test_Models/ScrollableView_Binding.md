---
title: ScrollableView Binding
weight: '110'
---

# ScrollableView Binding

Demonstrates binding a data collection to a ScrollableView component.

::: tip App Folder Location
alloy/test/apps/**models/binding\_scrollableview**
:::
![scrollableview](./scrollableview.png)

The main `index.xml` view defines the ScrollableView element and sets its dataCollection attribute to the "articles" collection. The content of each ScrollableView screen is defined by the `article.xml` view, which is included via a `<Require/>` element.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <ScrollableView dataCollection="articles">
            <Require src="article"/>
        </ScrollableView>
    </Window>
</Alloy>
```

The `article.xml` view defines a `<ScrollView/>` element containing an Image element and two Label elements. The content of each UI element is bound to the fields in the collection: **image**, **title,** and **content.**

**app/views/article.xml**

```xml
<Alloy>
    <ScrollView>
        <ImageView class="image" image="{image}"/>
        <Label class="title" text="{title}"/>
        <Label class="content" text="{content}"/>
    </ScrollView>
</Alloy>
```

The model configuration file, `article.js`, uses an external SQLite data file to provide the columns and initial data set provided by the `app/assets/articles.sqlite` file.

**app/models/article.js**

```javascript
exports.definition = {
    config: {
        adapter: {
            type: 'sql',
            collection_name: 'articles',
            db_file: '/articles.sqlite'
        }
    }
};
```

## See Also

* [Titanium.UI.ScrollableView](#!/api/Titanium.UI.ScrollableView)

* [SQL Preload sample app](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/Alloy_Test_Models/SQL_Preload/)
