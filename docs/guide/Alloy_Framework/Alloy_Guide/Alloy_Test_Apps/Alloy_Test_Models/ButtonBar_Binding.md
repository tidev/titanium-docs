---
title: ButtonBar Binding
weight: '10'
---

# ButtonBar Binding

Demonstrates how you can use data binding to populate the list of buttons in a ButtonBar or TabbedBar, or Toolbar component.

::: tip App Folder Location
alloy/test/apps/**models/binding\_bars**
:::

![screenshot](./screenshot.png)

The alloy.js file creates the `Item` model and `Items` collection referenced by the `dataCollection` attribute of all elements in the XML view (see below). It also initializes the Items collection with a set of objects consisting of `title` and `enabled` fields.

**app/alloy.js**

```javascript
var Item = Backbone.Model.extend();
var Items = Backbone.Collection.extend({
  model: Item
});
Alloy.Collections.items = new Items();
Alloy.Collections.items.reset([
  { title: 'button 1', enabled: true },
  { title: 'button 2', enabled: false },
  { title: 'button 3', enabled: true }
]);
```

The XML view defines the three UI elements, and the `items` collection to the `dataCollection` attribute for each of them. As the collection is updated, the view reflects the changes made to the models. In addition, the Toolbar includes a dataFilter attribute whose value is the name of the function that will filter the items collection before the data binding occurs.

**views/ios/index.xml**

```xml
<Window>
  <ButtonBar>
    <Labels dataCollection="items">
      <Label title="{title}" enabled="{enabled}"/>
    </Labels>
  </ButtonBar>
  <TabbedBar>
    <Labels dataCollection="items">
      <Label title="{title}" enabled="{enabled}"/>
    </Labels>
  </TabbedBar>
  <Toolbar>
    <Items dataCollection="items" dataFilter="filterItems">
      <Button title="{title}"/>
    </Items>
  </Toolbar>
</Window>
```

To make the data bindings take effect, there must be a `change` event triggered on the `items` collection. One way to do this is to call the Backbone collection's [`trigger()` method](http://docs.appcelerator.com/backbone/0.9.2/#Events-trigger), as shown below in the the main index.js controller file. The controller defines a `filterItems()` function that only returns those items in the collection whose `enabled` property is set to true. Only those items are displayed by the ToolBar control.

**app/controllers/index.js**

```javascript
function filterItems(collection) {
  return collection.where({enabled:true});
}
Alloy.Collections.items.trigger('change');
$.index.open();
```

## See Also

* [Collection-View Binding](#undefined)
