---
title: Properties Sync Adaptor
weight: '100'
---

# Properties Sync Adaptor

Demonstrates using Alloy's Titanium.App.Properties sync adaptor to save data.

::: tip App Folder Location
alloy/test/apps/**models/properties**
:::

The sample presents two tabs: Model and Collection. The modelTab.xml view provides buttons to create or destroy an instance of a model, and increment one a numeric model fields. The Collection tab provides UI to add items to a collection, which is bound to a TableView. Clicking a table row updates a field in the corresponding collection item. Long-pressing a table row deletes the corresponding item from the collection.

![propertie_sync](./propertie_sync.png)

The application includes two model configuration files, one used by each tab view. Note that the adaptor type in each configuration file is set to "properties".

**app/models/modelTab.js**

```javascript
exports.definition = {
    config: {
        "columns": {
            "id": "String",
            "count": "Int"
        },
        "defaults": {
            "id": "foobar",
            "count": 0
        },
        "adapter": {
            "type": "properties",
            "collection_name": "singleModel"
        }
    }
};
```

**app/models/collectionTab.js**

```javascript
exports.definition = {
    config: {
        "columns": {
            "name": "String",
            "score": "Int"
        },
        "defaults": {
            "name": "<no name>",
            "score": 0
        },
        "adapter": {
            "type": "properties",
            "collection_name": "collection"
        }
    }
};
```

The modelTab.js view-controller creates an instance of the **modelTab** model, and binds a callback function to the `change` event on the `count` field, which updates the label in the corresponding view with a JSON representation of the model's [attributes](http://backbonejs.org/#Model-attributes). The same handler responds to model `fetch` events. It also defined event handlers for the Create, Destroy, and Increment buttons defined the app/views/modelTab.xml file (not shown).

**app/controllers/modelTab.js**

```javascript
var ID = 'instance';
var app = Alloy.createModel('modelTab');

// Change label when 'count' changes on model
app.on('fetch change:count', function(model) {
  $.label.text = 'model: ' + JSON.stringify(app.attributes);
});
// fetch model from Ti.App.Properties adapter
app.set('id', ID);
app.fetch();

// event handlers
function create(e) {
  app.save(app.defaults);
}
function destroy(e) {
  app.destroy();
}
function increment(e) {
  app.set({
    count: app.get('count')+1,
    id: ID
  });
  app.save();
}
```

The Collection tab provides UI to add items to the collection, which is bound to the `TableView` element's `dataCollection` attribute. Clicking a table row updates the corresponding collection item's "score" field, which is displayed in the row. Whenever a model is added or destroyed (by long-pressing on a TableView row), the new collection data is fetched, which fires the `fetch` event. The `resetTableData()` function re-populates the TableView with new instances of the **controllers/collection/row.js** controller, passing each the ID, name, and score to display.

**app/controllers/collection/collectionTab.js**

```javascript
var items = Alloy.createCollection('collectionTab'),
    rowControllers = [];
// update the row and save the model when the score changes
items.on('change:score', function(model) {
    if (model) {
        var row = _.find(rowControllers, function(r) {
            return r.id === model.id;
        });
        if (row) {
            row.score.text = model.get('score');
            model.save();
        }
    }
});
// reset the table whenever a model is added or destroyed
// completely. Also reset whenever the collection is reset.
// Save the model changes if necessary.
items.on('fetch', function(model) {
    resetTableData();
});
// fetch collection from Ti.App.Properties adapter
items.fetch();
//////////////////////////////////////
////////// private function //////////
//////////////////////////////////////
function resetTableData() {
    rowControllers = [];
    // create row controllers based on all models in the collection
    _.each(items.toJSON(), function(i) {
        rowControllers.push(Alloy.createController('collection/row', {
            id: i.id,
            name: i.name,
            score: i.score
        }));
    });
    // fill table with the controllers' TableViewRow, and sort
    // by the row's ID
    var theArray = _.sortBy(rowControllers, function(r) {
        return r.getView('name').text;
    });
    $.table.setData(_.map(theArray, function(r) {return r.getView();}));
}
////////////////////////////////////
////////// event handlers //////////
////////////////////////////////////
function deleteItem(e) {
    var model = items.get(e.row.id);
    if (model) {
        model.destroy();
    }
    items.fetch();
}
function incrementScore(e) {
    var model = items.get(e.row.id);
    if (model) {
        model.set('score', model.get('score')+1);
    }
}
function addItem(e) {
    var model = items.create({
        name: $.text.value || '<no name>',
        score: 0
    });
    items.add(model);
    items.fetch();
    $.text.value = '';
}
```

## See Also

* [Alloy Sync Adapters and Migrations](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Sync_Adapters_and_Migrations/)

* [Alloy Collection and Model Objects](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Collection_and_Model_Objects/)
