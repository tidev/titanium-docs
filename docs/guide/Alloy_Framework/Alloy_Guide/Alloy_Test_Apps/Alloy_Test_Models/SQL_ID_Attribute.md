---
title: SQL ID Attribute
weight: '120'
---

# SQL ID Attribute

This example demonstrates how you can use a custom model identifier with the `idAttribute` field in the model definition file.

::: tip App Folder Location
alloy/test/apps/**models/sql\_idAttribute**
:::
![screenshot](./screenshot.png)

By default, a Alloy model's unique identifier is stored under the alloy\_id attribute. To use a custom identifier, in the model configuration file, add the custom field to the "columns" object and also, in the "adaptor" object, set the `idAttribute` field to the name of the custom field. The example's fighters.js model configuration file demonstrates this.

**app/models/fighters.js**

```javascript
exports.definition = {
  config: {
    "columns": {
      name: 'TEXT',
      nickname: 'TEXT',
      fighterId: 'TEXT PRIMARY KEY'
    },
    "adapter": {
      "type": "sql",
      "collection_name": "fighters",
      "idAttribute": "fighterId"
    }
  }
};
```

The alloy.js file populates the `fighters` collection with models that use the custom ID:

**alloy.js**

```javascript
Alloy.Collections.fighters = Alloy.createCollection('fighters');
var fighters = [
  { name: 'Wanderlei Silva', nickname: 'The Axe Murderer', fighterId: 'wandy' },
  { name: 'Manny Pacquiao', nickname: 'Pac-Man', fighterId: 'manny' },
  { name: 'Muhammad Ali', nickname: 'The Greatest', fighterId: 'ali' }
];
_.each(fighters, function(fighter) {
  var model = Alloy.createModel('fighters', fighter);
  model.save();
});
```

Selecting an row in the table displays a JSON representation of the associated model, as shown in the screenshot above.

## See also

* [Alloy Sync Adapters and Migrations](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Sync_Adapters_and_Migrations/)
