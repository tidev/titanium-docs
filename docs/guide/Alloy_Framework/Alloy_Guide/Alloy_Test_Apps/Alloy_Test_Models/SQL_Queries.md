---
title: SQL Queries
weight: '150'
---

# SQL Queries

Demonstrates how to use a SQL query with a database fetch operation.

::: tip 💡 App Folder Location
alloy/test/apps/**models/sql\_queries**
:::
![sql_query](./sql_query.png)

When using the SQLite sync adaptor included with Alloy, the `fetch()` method accepts a [SQL query as a parameter](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Sync_Adapters_and_Migrations/#sqlite-sync-adapter). You pass a dictionary to the `fetch()` method that contains a key named `query`. This value assigned to this key can either be a SQL query string, or a prepared SQL statement. For a prepared statement, set `query.statement` to your SQL statement template, and `query.params` to the parameter values to pass to the statement, as shown below.

**Using a SQL query with a fetch() call**

```javascript
var library = Alloy.createCollection('book');
// Simple query
library.fetch({
  query:'SELECT * from books where author="' + searchAuthor + '"'
});
// or a prepared statement
library.fetch({
  query: {
    statement: 'SELECT * from ' + table + ' where author = ?',
    params: [searchAuthor]
  }
});
```

In the example, the `main.xml` view displays a TableView that's bound to the **user** data collection. Each user model in the collection has an associated color.

**views/<platform>/main.xml**

```xml
<Alloy>
  <Label class="header" platform="android">Users</Label>
  <TableView id="table" dataCollection="user" onClick="showColorInfo">
    <Require src="row"/>
  </TableView>
</Alloy>
```

When the user clicks a TableView row, the `showColorInfo()` method is called. This method creates a prepared statement to query the colors data collection for items that match the user's color.

**app/controllers/main.js**

```javascript
function showColorInfo(e) {
  var color = e.row.model.color;
  var collection = Alloy.createCollection('color');
  collection.fetch({
    query: {
      statement: 'SELECT * FROM colors WHERE color = ?',
      params: [color]
    }
  });
  var colorModel = collection.at(0);
  // open the color info window
  if (colorModel) {
    var win = Alloy.createController('color', colorModel).getView();
    if (OS_IOS) {
      Alloy.Globals.navgroup.openWindow(win);
    } else {
      win.open();
    }
  } else {
    alert('No color info found!');
  }
}
```

Lastly, a new controller is created and is passed the model data returned by the SQL query. This data is used to populate the view with the proper values:

**app/controllers/color.js**

```javascript
var model = arguments[0];
$.theColor.backgroundColor = model.get('color');
$.name.text = 'Name: ' + model.get('color');
$.hexCode.text = 'Hex: ' + model.get('hexCode');
$.wavelength.text = 'Wavelength: ' + model.get('wavelength');
```
