---
title: DashboardView Binding
weight: '30'
---

# DashboardView Binding

Demonstrates how to use data binding with a DashboardView, which provides an iOS Springboard-like view.

::: tip App Folder Location
alloy/test/apps/**models/binding\_dashboard**
:::

Items in a [DashboardView](#!/api/Titanium.UI.DashboardView) are represented by [DashboardItem](#!/api/Titanium.UI.DashboardItem)s, which can be deleted and re-arranged.

![dashboard](./dashboard.png)

The model file, shown below, defines the columns (fields) for each DashboardItem, which include the following:

* `image` – URL of image to display for item

* `selectedImage` – URL of image to display when item is selected

* `badge` – Number to display in badge overlaid the item.

* `label` – Text to display for the item.

* `weight` – Number that determines the sort order of items.

The model file also defines a [Backbone comparator](http://backbonejs.org/#Collection-comparator) function to keep the items sorted according to the value of their **weight** field. When the user rearranges the items in the DashboardView, their respective weights are updated to reflect their new position (see below).

**app/model/icon.js**

```javascript
exports.definition = {
    config: {
        columns: {
            image: 'TEXT',
            selectedImage: 'TEXT',
            badge: 'INTEGER',
            label: 'TEXT',
            weight: 'INTEGER'
        },
        adapter: {
            type: 'sql',
            collection_name: 'icons'
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            // Extend, override or implement Backbone.Model
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            // Implement the comparator method.
            comparator : function(icon) {
                return icon.get('weight');
            }
        }); // end extend
    return Collection;
    }
};
```

The main view sets up the DashboardView and defines bindings between DashboardItems and the data model. It also associates event handlers for when the user deletes or rearranges the DashboardView items.

```xml
<Alloy>
    <Window>
        <Toolbar id="toolbar">
            <Items>
                <Button id="editButton" onClick="toggleEditMode">Edit</Button>
            </Items>
        </Toolbar>
        <Label id="helptext"/>
        <DashboardView dataCollection="icons" id="dash" onClick="resetBadge" onEdit="handleEdit" onCommit="handleCommit" onDelete="handleDelete">
            <DashboardItem image="{image}" selectedImage="{selectedImage}" badge="{badge}" label="{label}" modelId="{alloy_id}"/>
        </DashboardView>
    </Window>
</Alloy>
```

The main view-controller defines methods that do the following:

* Reset the badge value for a DashboardItem when the user clicks it.

* Stops and starts edit mode on the DashboardView.

* Handles the [commit](#!/api/Titanium.UI.DashboardView-event-commit) event generated when the user leaves edit mode. The `weight` value of each DashboardItem is reset according to its new position, if the user rearranged the items.

* Handles the [delete](#!/api/Titanium.UI.DashboardView-event-delete) event when the user deletes an item in edit mode.

```javascript
var icons = Alloy.Collections.icons;
var isEditable = false;
function resetBadge(e) {
    var model = icons.get(e.item.modelId);
    if (model) {
        model.set('badge', 0);
        model.save();
    } else {
        TI.API.error('No corresponding model found for DashboardItem in resetBadge()');
    }
}
function toggleEditMode(e) {
    if (isEditable) {
        $.dash.stopEditing();
    } else {
        $.dash.startEditing();
    }
}
function handleEdit(e) {
    // edit is fired when you enter edit mode
    $.editButton.title = 'Done';
    $.editButton.style = Ti.UI.iPhone.SystemButtonStyle.DONE;
    isEditable = true;
}
function handleCommit(e) {
    // commit is fired when you exit edit mode
    Ti.API.info('Commit: ' + JSON.stringify(e));
    $.editButton.title = 'Edit';
    $.editButton.style = Ti.UI.iPhone.SystemButtonStyle.PLAIN;
    isEditable = false;
    // rearrange the items by setting their weights equal to their new order in the data e.source.array
    var itemsArray = e.source.data;
    for(var i=0,j=itemsArray.length;i<j;i++) {
        var model = icons.get(itemsArray[i].modelId);
        if (model) {
            model.set('weight', i);
            model.save();
        } else {
            TI.API.error('No corresponding model found for DashboardItem in resetBadge()');
        }
    }
    // have to re-fetch to show the new order without having to fully-quit the app
    icons.fetch();
}
function handleDelete(e) {
    // This event fires on item clicks and other times it should not, see https://jira.appcelerator.org/browse/TIMOB-13649
    Ti.API.info('Delete item: ' + e.item.label);
}
icons.fetch();
$.index.open();
```

## See Also

* [Titanium.UI.DashboardView](#!/api/Titanium.UI.DashboardView) API reference

* [Titanium.UI.DashboardItem](#!/api/Titanium.UI.DashboardItem) API reference
