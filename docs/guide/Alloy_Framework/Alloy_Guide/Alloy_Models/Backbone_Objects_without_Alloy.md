---
title: Backbone Objects without Alloy
weight: '30'
---

# Backbone Objects without Alloy

You can use plain Backbone Collection and Model objects in place of the Alloy versions. This does not require any special Alloy or Titanium code. Use the [Backbone API](http://docs.appcelerator.com/backbone/0.9.2/) to create and control Backbone objects instead of using the `createCollection` and `createModel` methods. Backbone models also do not require a model configuration file. For example:

**app/controllers/index.js**

```javascript
// Initialize a collection class and implement the comparator method for sorting
var collection = Backbone.Collection.extend({
  comparator: function(model){
    return model.get('title');
  }
});

// Create a new collection
var library = new collection([
  {title: 'To Kill a Mockingbird', author:'Harper Lee'},
  {title: 'The Catcher in the Rye', author:'J. D. Salinger'},
  {title: 'Of Mice and Men', author:'John Steinbeck'},
  {title: 'Lord of the Flies', author:'William Golding'},
  {title: 'The Great Gatsby', author:'F. Scott Fitzgerald'},
  {title: 'Tom Sawyer', author:'Mark Twain'},
  {title: 'Animal Farm', author:'George Orwell'}
]);

// Initialize a model class
var model = Backbone.Model.extend();

// Create a new model and add it to the collection
var book = new model({title:'Bossypants', author:'Tina Fey'});
library.add(book);

// Remove the very first model from the collection
model = library.at(0);
library.remove(model);
```

These Backbone objects cannot persist to external storage without implementing the Backbone.sync method, so if you make calls to Collection.fetch, Collection.create, Model.fetch, Model.save and Model.destroy, the application throws an error.

You can use Alloy's Model-View binding mechanism to keep the local Backbone Models and Collections in sync with an Alloy view-controller. Follow the same directions in the [Alloy Model-View Binding](/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Data_Binding/#model-view-binding) section except instead of using the `Model` or `Collections` XML tag, you need to first initialize your model or collection in the alloy.js initializer file and add it to the `Alloy.Models` or `Alloy.Collections` namespace. For example:

**app/alloy.js**

```javascript
// Initialize a collection class and implement the comparator method for sorting
var collection = Backbone.Collection.extend({
  comparator: function(model){
    return model.get('title');
  }
});

// Create a new collection
var library = new collection([
  {title: 'To Kill a Mockingbird', author:'Harper Lee'},
  {title: 'The Catcher in the Rye', author:'J. D. Salinger'},
  {title: 'Of Mice and Men', author:'John Steinbeck'},
  {title: 'Lord of the Flies', author:'William Golding'},
  {title: 'The Great Gatsby', author:'F. Scott Fitzgerald'},
  {title: 'Tom Sawyer', author:'Mark Twain'},
  {title: 'Animal Farm', author:'George Orwell'}
]);

// Add the collection to the global scope
Alloy.Collections.book = library;
```

**app/views/index.xml**

```xml
<!-- Markup the view the same except there is no Collection tag -->
<Alloy>
    <Window class="container">
        <TableView dataCollection="book" dataTransform="transformFunction" dataFilter="filterFunction">
            <TableViewRow title="{title}" />
        </TableView>
    </Window>
</Alloy>
```

**app/controllers/index.js**

```javascript
$.index.open();

// Encase the title attribute in square brackets
function transformFunction(model) {
    // Need to convert the model to a JSON object
    var transform = model.toJSON();
    transform.title = '[' + transform.title + ']';
    // Example of creating a custom attribute, reference in the view using {custom}
    transform.custom = transform.title + " by " + transform.author;
    return transform;
}

// Show only book models by Mark Twain
function filterFunction(collection) {
    return collection.where({author:'Mark Twain'});
}
// Get a reference to the library
var library = Alloy.Collections.book;

// Trigger the update using the 'change' event instead of the fetch method, since we do not have persistent storage
library.trigger('change');

// Same code from the previous example...
// Initialize a model class
var model = Backbone.Model.extend();

// Create a new model and add it to the collection
var book = new model({title:'Bossypants', author:'Tina Fey'});
library.add(book);

// Remove the very first model from the collection
model = library.at(0);
library.remove(model);

// Do not forget to call destroy to unbind the event handlers created by Alloy
$.index.addEventListener('close', function() {
    $.destroy();
});
```
