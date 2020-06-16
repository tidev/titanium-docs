---
title: Todo List
weight: '170'
---

# Todo List

Demonstrates how to create a basic "Todos" application by binding a data collection to a TableView.

::: tip App Folder Location
alloy/test/apps/models/todo
:::

The sample lets you add and delete items, mark items as complete, and filter the list to display all items, only active items, or just completed items.

![todos](./todos.png)

The data model for each todo item consists of three fields:

* **item** – The text for the todo item.

* **done** – A number that indicates if the todo item is complete.

* **data\_completed** – The date that the item was marked as complete.

The todo.js model configuration file defines columns for these fields, and also extends the model with a custom validate() function that validates input, and a comparator function that's used to filter

**app/models/todo.js**

```javascript
var moment = require('alloy/moment');
exports.definition = {
    config: {
        "columns": {
            "item":"text",
            "done":"integer",
            "date_completed":"text"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "todo"
        }
    },
    extendModel : function(Model) {
        _.extend(Model.prototype, {
            validate : function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) {
                        if (key === "item") {
                            if (value.length <= 0) {
                                return 'Error: No item!';
                            }
                        }
                        if (key === "done") {
                            if (value.length <= 0) {
                                return 'Error: No completed flag!';
                            }
                        }
                    }
                }
            }
        });
        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(todo) {
                return todo.get('done');
            }
        });
        return Collection;
    }
};
```

The main `index.xml` view declares the `<TableView>` element to display todo items, as well as UI elements to open the add item form (`app/views/add.xml`), and to filter the list items. The TableView's dataCollection attribute is set to the "todos" collection defined by the model configuration file. The TableViewRow used to display each row in the TableView is defined in another XML view file (`app/views/rows.xml`) and required by `index.xml`.

**views/index.xml**

```xml
<Alloy>
    <!-- Main Window -->
    <Window id="todoWin" title="Todo">

        <!-- header -->
        <View id="header" platform="ios,mobileweb">
            <Label id="title">Alloy Todo</Label>
            <View class="divider"/>
            <View id="addView" onClick="addToDoItem">
                <ImageView id="addImage"/>
            </View>
        </View>

        <TableView id="todoTable" dataCollection="todo"
                       dataFilter="whereFunction" dataTransform="transformFunction">
                <Require src="row"/>
        </TableView>
        <!-- iOS: footer with buttons -->
        <View platform="ios" id="footer">
            <TabbedBar onClick="showTasks" id="tabbedbar">
                <Labels>
                    <Label>All</Label>
                    <Label>Active</Label>
                    <Label>Done</Label>
                </Labels>
            </TabbedBar>
        </View>

        <!-- Android: menu -->
        <Menu platform="android">
            <MenuItem icon="Ti.Android.R.drawable.ic_input_add" onClick="addToDoItem" showAsAction="Ti.Android.SHOW_AS_ACTION_ALWAYS"/>
            <MenuItem title="All" onClick="showTasks" showAsAction="Ti.Android.SHOW_AS_ACTION_NEVER"/>
            <MenuItem title="Active" onClick="showTasks" showAsAction="Ti.Android.SHOW_AS_ACTION_NEVER"/>
            <MenuItem title="Done" onClick="showTasks" showAsAction="Ti.Android.SHOW_AS_ACTION_NEVER"/>
        </Menu>
    </Window>
</Alloy>
```

The function specified by the "dataFilter" attribute `(whereFunction)` filters the list of items in the collection according to their status (complete or active).

If whereIndex is 0 (that is, !whereIndex == true) the filter function returns all the models in the collection, represented by the Backbone [collection.models](http://backbonejs.org/#Collection-models) property. Otherwise, the Backbone [collection.where()](http://backbonejs.org/#Collection-where) function is used to only return those model items whose done value is 0 or 1, depending on the value of whereIndex.

**controllers/index.js**

```javascript
function whereFunction(collection) {
  return !whereIndex ? collection.models : collection.where({done: whereIndex === 1 ? 0 : 1 });
}
```

The function specified by the "dataTransform" attribute `(transformFunction)` is used to modify a collection item value before being applied to a TableViewRow. In this case, the transform function simply wraps the entered item in square brackets.

```javascript
function transformFunction(model) {
    var transform = model.toJSON();
    transform.item = '[' + transform.item + ']';
    return transform;
}
```

New todo models are added to the todos collection via the `addItem()` method, and then saved to the SQL database. To keep the UI from updating twice, the `add()` method is passed `silent=true` in its options hash.

**controllers/add.js**

```javascript
function addItem() {
    var todos = Alloy.Collections.todo;
    // Create a new todo model and initialize it with
    var task = Alloy.createModel('Todo', {
        item : $.itemField.value,
        done : 0
    });
    todos.add(task, { silent: true } );
    task.save();
    closeWindow();
}
```

## See also

* [Alloy Collection and Model Objects](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Collection_and_Model_Objects/)
