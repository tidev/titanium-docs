---
title: Non-Persistent Model Bindings
weight: '90'
---

# Non-Persistent Model Bindings

Demonstrates using a static, non-persistent data collection.

::: tip App Folder Location
alloy/test/apps/**models/binding\_no\_persistence**
:::

In the sample application, clicking the `<Label>` or `<TableView>` UI element causes the application to make trivial changes to the underlying model or collection data. To update the UI with the new model or collections data, it then calls the `trigger()`method on both model and collection objects. One difference between using a persistent and non-persistent model or collection is that you can't call the [model](http://docs.appcelerator.com/backbone/0.9.2/#Model-fetch) or [collection](http://docs.appcelerator.com/backbone/0.9.2/#Collection-fetch)'s `fetch()` method on a non-persistent collection, as this generates a runtime error. Instead, call the `trigger()` method on the model or collection, as demonstrated.

![no_persist](./no_persist.png)

The **appState** model models the application state with a counter and hexadecimal color value, and the **heroes** collection contains a list of super heroes. The sample uses the [Backbone.Model()](http://docs.appcelerator.com/backbone/0.9.2/#Model) and [Backbone.Collection()](http://docs.appcelerator.com/backbone/0.9.2/#Collection) methods to create the model and collection directly, instead of the [Alloy.createModel(](#!/api/Alloy-method-createModel)) and [Alloy.createCollection()](#!/api/Alloy-method-createCollection) methods.

**app/alloy.js**

```javascript
Alloy.Models.appState = new Backbone.Model({
  counter: 1,
  color: '#00f'
});
Alloy.Collections.heroes = new Backbone.Collection();
Alloy.Collections.heroes.reset([
  { name: 'Ironman' },
  { name: 'Superman' },
  { name: 'Thor' },
  { name: 'Captain America' },
  { name: 'Hulk' },
  { name: 'Green Lantern' },
  { name: 'Punisher' },
  { name: 'Spiderman' },
  { name: 'Wolverine' },
  { name: 'Cyclops' }
]);
```

The model data is updated by the `modifyHero()` and `updateState()` functions, called when the user clicks the Label or TableView elements on their respective tabs.

**app/controllers/index.js**

```javascript
// Contrived update function to modify the model
// associated with the clicked row
function modifyHero(e) {
  var model = heroes.at(e.index);
  model.set('name', model.get('name') + '+');
}
// Update the model's counter and color, which in turn
// updates the UI via model binding
function updateState() {
  appState.set({
    counter: appState.get('counter')+1,
    color: generateRandomColor()
  });
}
// Simulate a change in our model to trigger UI binding.
// Remember, don't use fetch() when using a model with
// no persistence, it will generate an error.
appState.trigger('change');
heroes.trigger('change');
```

## See also

* [Backbone Objects without Alloy](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Backbone_Objects_without_Alloy/)
