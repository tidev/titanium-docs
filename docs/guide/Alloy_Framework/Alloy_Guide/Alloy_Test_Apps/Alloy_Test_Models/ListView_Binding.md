---
title: ListView Binding
weight: '70'
---

# ListView Binding

Demonstrates using binding a data collection to a ListView and applying different list item templates to each list item using a data transformer.

::: tip App Folder Location
alloy/test/apps/**models/binding\_listview**
:::

The application defines three list item templates: one with just a title, one with a title and subtitle, and one with a title, subtitle and image.

![screenshot](./screenshot.png)

The main index.xml view defines three `<ItemTemplate/>` elements – "fullItem", "titleAndSub", and "title" – that define the various UI elements. The `bindId` attribute assigned to each UI element specifies the name used to assign data to it at runtime. The `<ListSection/>` element contains a single `<ListItem/>` element whose `template` attribute is set to the value "{{ `template` }}". It includes attributes whose names correspond to the three possible template UI elements: "title", "subtitle" and "image". The `ListSection` element is bound to the `info` collection and specifies a `dataTransform` function named `doTransform()`.

**app/views/index.xml**

```xml
<ListView id="list" defaultItemTemplate="title">
    <Templates>
        <ItemTemplate name="fullItem" height="70">
            <ImageView bindId="image" class="image"/>
            <Label bindId="title" class="title text-and-image"/>
            <Label bindId="subtitle" class="subtitle text-and-image"/>
        </ItemTemplate>
        <ItemTemplate name="titleAndSub" height="70">
            <Label bindId="title" class="title"/>
            <Label bindId="subtitle" class="subtitle"/>
        </ItemTemplate>
        <ItemTemplate name="title" height="50">
            <Label bindId="title" class="title"/>
        </ItemTemplate>
    </Templates>
    <ListSection id="section" dataCollection="info" dataTransform="doTransform">
        <ListItem template="{template}" title:text="{title}" subtitle:text="{subtitle}" image:image="{image}"/>
    </ListSection>
</ListView>
```

When the user clicks a toolbar button, the `doButtonClick()` is called, which adds a new model to the info collection, and persists it to the SQLite database. The model is initialized with a unique data object, depending on which button was clicked. The `doTransform()` then assigns the correct template to the model depending on its data structure, and returns the updated model for display.

**app/controllers/index.js**

```javascript
// assign a ListItem template based on the contents of the model
function doTransform(model) {
    var o = model.toJSON();
    if (o.subtitle) {
        if (o.image) {
            o.template = 'fullItem';
        } else {
            o.template = 'titleAndSub';
        }
    } else {
        o.template = 'title';
    }
    return o;
}
// Handle the buttonClick event triggered from the button controller.
// Notice that we will be updating the ListView UI without referring
// directly to the ListView itself, only by modifying its data model.
function doButtonClick(e) {
    alert(e);
    if (_.isEmpty(e.modelObj)) {
        // use a custom query to quickly empty the SQLite store
        var db = Ti.Database.open('_alloy_');
        db.execute('DELETE FROM info;');
        db.close();
        // refresh the collection to reflect this in the UI
        info.fetch();
    } else {
        // create a model for the listitem
        var model = Alloy.createModel('info', e.modelObj);
        // add model to collection which will in turn update the UI
        info.add(model);
        // save the model to SQLite
        model.save();
    }
}
```

The application models/info.js defines a a data model with four fields: id, title, subtitle, and image. It also specifies SQL as the persistence adaptor, and the collection name as "info".

**app/models/info.js**

```javascript
exports.definition = {
    config: {
        columns: {
            id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
            title: 'TEXT',
            subtitle: 'TEXT',
            image: 'TEXT'
        },
        adapter: {
            type: 'sql',
            collection_name: 'info',
            idAttribute: 'id'
        }
    }
};
```

## See Also

* [Alloy ListView Guide](#undefined)

* [Titanium.UI.ListView API reference](#!/api/Titanium.UI.ListView)
