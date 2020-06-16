---
title: Journal
weight: '60'
---

# Journal

Demonstrates how to create a simple personal journal application using models and collections.

::: tip App Folder Location
alloy/test/apps/**models/journal**
:::
![add_entry](./add_entry.png)

The application's model file (journal.js) defines the fields for each journal entry: title, text, mood (happy, angry, or neutral), and creation date.

**app/models/journal.js**

```javascript
exports.definition = {
    config: {
        "columns": {
            "title":"TEXT",
            "text":"TEXT",
            "mood":"TEXT",
            "dateCreated":"TEXT"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "journal"
        }
    }
};
```

The samples uses the Alloy convention to define unique views for iOS, Android and MobileWeb.

**Application view structure**

```
app/views/
├──android
│   └──index.xml
├──ios
│   └──index.xml
└──mobileweb
    └──index.xml
```

Each view, like app/views/android/index.xml shown below, creates a global reference to the `journal` collection, which is assigned to a `ScrollView` element's `dataCollection` attribute.

**app/views/android/index.xml**

```xml
<Alloy>
    <!-- create a global reference to the journal collection -->
    <Collection src="journal"/>
    <Window>
        <Menu>
            <MenuItem onClick="addEntry" title="add entry" icon="ic_menu_add.png"></MenuItem>
        </Menu>
        <Label class="titlebar">Journal</Label>
        <ScrollView id="scroll" dataCollection="journal" dataTransform="doTransform">
            <Require src="entry"/>
        </ScrollView>
    </Window>
</Alloy>
```

The `ScrollView` element also specifies a `dataTransform` function to transform each model in the collection for display. The specified function, `doTransform()`, does the following:

* Transforms the `mood` value ('mad', 'happy', 'neutral') into a corresponding `moodColor`. This color is applied to the `borderColor` attribute of each View item in the ScrollView.

* Uses the built-in moment.js library's [fromNow()](http://momentjs.com/docs/#/displaying/fromnow/) method to transform the entry's `dateCreated` value into `dateSince`.

**app/controllers/index.js**

```javascript
// Require built-in moment.js library for working with dates/times.
var moment = require('alloy/moment');
function doTransform(model) {
    var transform = model.toJSON();
    transform.dateSince = moment(transform.dateCreated,'YYYYMMDDHHmmss').fromNow();
    switch(transform.mood) {
        case 'mad':
            transform.moodColor = '#a00';
            break;
        case 'happy':
            transform.moodColor = '#0a0';
            break;
        case 'neutral':
        default:
            transform.moodColor = '#88f';
            break;
    }
    return transform;
}
function addEntry() {
    Alloy.createController('add').getView().open();
}
Alloy.Collections.journal.comparator = function(entry1, entry2) {
    return entry1.get('dateCreated') > entry2.get('dateCreated') ? -1 : 1;
};
Alloy.Collections.journal.fetch();
```

A Backbone [comparator](http://backbonejs.org/#Collection-comparator) sorts the items according to their `dateCreated` fields. Lastly, each entry displayed by the ScrollView is a View element that binds the transformed fields to the `text` properties of Labels and the `borderColor` of the View.

**views/entry.xml**

```xml
<Alloy>
    <View id="container" borderColor="{moodColor}">
        <Label id="title" text="{title}"/>
        <Label id="text" text="{text}"/>
        <Label id="date" text="{dateSince}"/>
    </View>
</Alloy>
```

The addEntry() function, defined by the add.js controller shown below, creates a new Journal model object, adds it to the global `journal` collection object, and persists it to the SQL database.

```javascript
function addEntry() {
    // create a new model instance based on user input
    var entry = Alloy.createModel('journal', {
        title : $.title.value,
        text: $.text.value,
        mood: getMood($.mood),
        dateCreated: moment().format('YYYYMMDDHHmmss')
    });
    // Add new model to the collection, use silent=true
    // so that a "change" event is not fired and the
    // UI is re-rendered.
    journal.add(entry, {silent:true});
    // Save the entry to persistence, which will re-render
    // the UI based on the binding.
    entry.save();
    closeWindow();
}
```

## See Also

* [Alloy Collection and Model Objects](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Collection_and_Model_Objects/)

* [Alloy Data Binding](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Data_Binding/)
