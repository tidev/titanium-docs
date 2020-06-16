---
title: Alloy Collection and Model Objects
weight: '50'
---

# Alloy Collection and Model Objects

## Models

In Alloy, models inherit from the [Backbone.Model](http://docs.appcelerator.com/backbone/0.9.2/#Model) class. They contain the interactive data and logic used to control and access it. Models are specified with JavaScript files, which provide a table schema, adapter configuration and logic to extend the Backbone.Model class. Models are automatically defined and available in the controller scope as the name of the JavaScript file.

The JavaScript file exports a definition object comprised of three different objects. The first object, called `config`, defines the table schema and adapter information. The next two objects `extendModel` and `extendCollection` define functions to extend, override or implement the Backbone.Model and Backbone.Collection classes, respectively.

**Example of the anatomy of a model file**

```
exports.definition = {
    config : { // table schema and adapter information
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, { // Extend, override or implement Backbone.Model
        });

        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, { // Extend, override or implement Backbone.Collection
    });

    return Collection;
    }
}
```

To access a model locally in a controller, use the `Alloy.createModel` method. The first required parameter is the name of the JavaScript file minus the '.js' extension. The second optional parameter is the attributes for initializing the model object. For example, the following code creates a model object initialized with the specified title and author, retrieves the title and author fields from the model, then sets the label to the book title and author:

**Basic model usage**

```javascript
var book = Alloy.createModel('book', {title:'Green Eggs and Ham', author:'Dr. Seuss'});
var title = book.get('title');
var author = book.get('author');

// Label object in the view with id = 'label'
$.label.text = title + ' by ' + author;
```

The `book` model object is a Backbone object wrapped by Alloy, so it can be treated as a Backbone.Model object. You can use any Backbone Model or Events APIs with this object.

You can also create a global singleton instance of a model, either in markup or in the controller, which may be accessed in all controllers. Use the `Alloy.Models.instance` method with the name of the model file minus the extension as the only parameter to create or access the singleton. For example:

**Working with globally registered models**

```javascript
// This will create a singleton if it has not been previously created,
// or retrieves the singleton if it already exists.
var book = Alloy.Models.instance('book');
```

For examples using markup, see [Alloy XML Markup: Model Element](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#collection-element).

### Configuration object

The `config` object is comprised of three different objects: `columns`, `defaults` and `adapter`.

The `columns` object defines the table schema information. The key is the record name and the value is the data type. The following data types are accepted and mapped to the appropriate SQLite type: `string`, `varchar`, `int`, `tinyint`, `smallint`, `bigint`, `double`, `float`, `decimal`, `number`, `date`, `datetime` and `boolean`. By default, any unknown data type maps to the SQLite type `TEXT`. Alternatively, the SQLite sync adapter accepts the SQLite keywords.

The optional `defaults` object defines the default values for a record if one or more record fields are left undefined upon creation. The key is the record name and the value is the default value.

The adapter object defines how to access persistent storage. It contains two key-value pairs: `type` and `collection_name`. The `type` key identifies the sync adapter and the `collection_name` key identifies the name of the table in the database or a namespace. See [Alloy Sync Adapters and Migrations](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Sync_Adapters_and_Migrations/) for more information.

For example, suppose there is a model object called book (`book.js`) defined as:

**book.js**

```javascript
exports.definition = {
    config: {
        "columns": {
            "title": "String",
            "author": "String"
        },
        "defaults": {
            "title": "-",
            "author": "-"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "books"
        }
    }
}
```

The code above describes a book object, which has two `string` (or `TEXT`) fields: `title` and `author`. If either field is left undefined, it will be assigned with the default value, a dash ("-"). The `sql` type configures Backbone to use the SQL adapter to sync with the SQLite engine on Android and iOS devices to access a table in the database called "books".

You may add custom properties to the `config` object, which are available to the application as the model or collection's `config` property or can be processed by a custom sync adapter during application initialization. See [Alloy Sync Adapters and Migrations: Custom Sync Adapters](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Sync_Adapters_and_Migrations/#custom-sync-adapters) for more information.

### Extending the Backbone.Model class

The Backbone.Model class can be extended using the `extendModel` object, which implements the Backbone.Model `extend` method. This allows the Backbone.js code to be extended, overridden or implemented.

For example, the `validate` method is left unimplemented by Backbone.js. The model JS file can implement `validate(attrs)`, where the parameter `attrs` are changed attributes in the model. In Backbone.js, if `validate` is implemented, it is called by the `set` and `save(attributes)` methods before changing the attributes and is also called by the `isValid` method. For the `save` method, validate is called if the `attributes` parameter is defined.

In the example code `book.js` below, the JavaScript file implements the validate method, and adds a custom property and function.

**Extending a model**

```javascript
exports.definition = {
    config : { // table schema and adapter information
    },

    extendModel: function(Model) {
        _.extend(Model.prototype, {
            // Implement the validate method
            validate: function (attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (key === "title") {
                        if (value.length <= 0) {
                            return "Error: No title!";
                        }
                    }
                    if (key === "author") {
                        if (value.length <= 0) {
                            return "Error: No author!";
                        }
                    }
                }
            },
            // Extend Backbone.Model
            customProperty: 'book',
            customFunction: function() {
                Ti.API.info('I am a book model.');
            },
        });

        return Model;
    }
}
```

In the controller, to access the model, do:

```javascript
var book = Alloy.createModel('book', {title:'Green Eggs and Ham', author:'Dr. Seuss'});
// Since set or save(attribute) is not being called, we can call isValid to validate the model object
if (book.isValid() && book.customProperty == "book") { // Save data to persistent storage
    book.save();
}
else {
    book.destroy();
}
```

For more details, see the [Backbone.Model API](http://docs.appcelerator.com/backbone/0.9.2/#Model).

## Collections

Collections are ordered sets of models and inherit from the Backbone.Collection class. Alloy Collections are automatically defined and available in the controller scope as the name of the model. To access a collection in the controller locally, use the `Alloy.createCollection` method with the name of the JavaScript file minus the '.js' extension as the required parameter. The second optional parameter can be an array of model objects for initialization. For example, the code below creates a collection using the previously defined model and reads data from persistent storage:

**Creating collections**

```javascript
var library = Alloy.createCollection('book');
library.fetch(); // Grab data from persistent storage
```

The `library` collection object is a Backbone object wrapped by Alloy, so it can be treated as a Backbone.Collection object. You can use any Backbone Collection or Events APIs with this object.

You can also create a global singleton instance, either in markup or in the controller, which may be accessed in all controllers. Use the `Alloy.Collections.instance` method with the name of the model file minus the extension as the only parameter to create or access the singleton. For example:

**Working with globally registered collections**

```javascript
// This will create a singleton if it has not been previously created,
// or retrieves the singleton if it already exists.
var library = Alloy.Collections.instance('book');
```

For examples using markup, see [Alloy XML Markup: Collection Element](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#collection-element).

### Extending the Backbone.Collection class

Like the Backbone.Model class, the Backbone.Collection class can be similarly extended in the model JavaScript file. For example, the `comparator` method is left unimplemented in Backbone.js. The code below sorts the library by book title:

**Extending a collection**

```
exports.definition = {
    config : { // table schema and adapter information
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, { // Extend, override or implement the Backbone.Model methods
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, { // Implement the comparator method.
            comparator : function(book) {
                return book.get('title');
            }
        }); // end extend

        return Collection;
    }
}
```

### Underscore.js functionality

Additionally, the Backbone.Collection class inherits some functionality from [Underscore.js](https://underscorejs.org/), which can help simplify iterative functions. For example, to add the title of each book object in the library collection to a table, you could use the `map` function to set the table:

**Iterating over a collection with underscore**

```javascript
var data = library.map(function(book) {
    // The book argument is an individual model object in the collection
    var title = book.get('title');
    var row = Ti.UI.createTableViewRow({"title":title});
    return row;
});
// TableView object in the view with id = 'table'
$.table.setData(data);
```

For more details, see the [Backbone.Collection API](http://docs.appcelerator.com/backbone/0.9.2/#Collection).

## Event handling

When working with Alloy Models and Collections, use the Backbone.Events `on`, `off` and `trigger` methods. For example:

**Using events with collections**

```javascript
var library = Alloy.createCollection('book');
function event_callback (context) {
    var output = context || 'change is bad.';
    Ti.API.info(output);
};
// Bind the callback to the change event of the collection.
library.on('change', event_callback);
// Trigger the change event and pass context to the handler.
library.trigger('change', 'change is good.');
// Passing no parameters to the off method unbinds all event callbacks to the object.
library.off();
// This trigger does not have a response.
library.trigger('change');
```

Alloy Model and Collection objects don't support the Titanium `addEventListener`, `removeEventListener` and `fireEvent` methods.

If you are using Alloy's Model-View binding mechanism, the Backbone add, change, destroy, fetch, remove, and reset events are automatically bound to an internal callback to update the model data in the view. Be careful not to override or unbind these events.

If you want to fire or listen to multiple events, Backbone.js uses spaces to delimit its events in the event string; therefore, do **NOT** name any custom events with spaces.

For more details, see the [Backbone.Events API](http://docs.appcelerator.com/backbone/0.9.2/#Events).
