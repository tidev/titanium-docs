---
title: Alloy Data Binding
weight: '10'
---

# Alloy Data Binding

## Introduction

When data in the collection changes, you may want to update the view simultaneously to keep information synchronized. This concept is known as data binding. Both Alloy and Backbone provide some mechanisms to bind model data to a view.

## Alloy binding

In Alloy, collection data can be synchronized to a view object, or a single model can be bound to a view component. Alloy monitors the Backbone add, change, destroy, fetch, remove, and reset events to update the data in the view.

### Collection-view binding

To enable collection-view binding, create a global singleton or controller-specific collection using the [Collection tag](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#CollectionElement) in the XML markup of the main view, then add the view object you want to bind data to. The following Titanium view objects support binding to a Collection:

| View Object | Since Alloy version | Add data binding attributes to... | Repeater Object to map  <br />model attributes to view properties |
| --- | --- | --- | --- |
| ButtonBar | 1.1 | `<Labels>` | `<Label/>` |
| CoverFlowView | 1.1 | `<Images>` | `<Image/>` |
| ListView | 1.2 | `<ListSection>` | `<ListItem/>` |
| Map Module | 1.4 | `<Module module="ti.map" method="createView">` | None, model attributes will be used as params  <br />for createAnnotation() directly. |
| Picker | 1.5 | `<PickerColumn>` or `<Column>` | `<PickerRow/>` or `<Row/>` |
| ScrollableView | 1.1 | `<ScrollableView>` | `<View/>`  <br />May contain children view objects. |
| TableView | 1.0 | `<TableView>` | `<TableViewRow/>`  <br />May contain children view objects. |
| TabbedBar | 1.1 | `<Labels>` | `<Label/>` |
| Toolbar | 1.1 | `<Items>` | `<Item/>` |
| View | 1.0 | `<View>` | Any view object except a top-level container  <br />like a Window or TabGroup |

You need to specify additional attributes in the markup, which are only specific to collection data binding. The only mandatory attribute is `dataCollection`, which specifies the collection singleton or instance to render. Note that you can only add these attributes to specific XML elements (refer to the table above).

* `dataCollection`: specifies the collection singleton or instance to bind to the table. This is the name of the model file for singletons or the ID prefixed with the controller symbol ('$') for instances.

* `dataTransform`: specifies an optional callback to use to format model attributes. The passed argument is a model and the return value is a modified model as a JSON object.

* `dataFilter`: specifies an optional callback to use to filter data in the collection. The passed argument is a collection and the return value is an array of models.

* `dataFunction`: set to an arbitrary identifier (name) for a function call. Use this identifier to call a function in the controller to manually update the view. This is not a declared function in the controller. This attribute creates an alias to access the underlying binding function, which is part of the Alloy data-view binding framework.

Next, create a repeater object (refer to the table above) and place it inline with the view object with the `dataCollection` attribute, or place it in a separate view and use the `Require` tag to import it.

To map model attributes, enclose the attribute with curly brackets or braces ('{' and '}'). You can map more than one attribute to a repeater object's property. For example, to assign the Label.text property to the model's title and author attributes, use this notation: `<Label text="{title} by {author}" />.`For more complex transformations, use the `dataTransform` callback to create a custom attribute.

In the controller code of the repeater object, you can use the special variable `$model` to reference the current model being iterated over. This variable is present only in data bound controllers and is a reference to the currently bound model. For example, to get the title attribute of the current model, use `$model.title` to access it.

::: warning ⚠️ Warning
**IMPORTANT:** When using Alloy's data binding in a view-controller, you **MUST** call the `$.destroy()` function when closing a controller to prevent potential memory leaks. The `destroy` function unbinds the callbacks created by Alloy when the collection-view syntax is used. For example, the code below calls the `destroy` function when the Window's close event is triggered.

```
$.win.addEventListener("close", function(){
    $.destroy();
}
```
:::

#### Example

The following example demonstrates how to add basic collection-view binding to an application. The example binds a collection of album models to a ScrollableView. In the ScrollableView, each model has its own view, which displays the album cover, title of the album and the artist. The `artist` and `title` attributes are bound to a Label object and the `cover` attribute is bound to an ImageView object.

1. Add the `<Collection>` tag as a child of the `<Alloy>` tag.

    **app/views/index.xml**

    ```xml
    <Alloy>
        <Collection src="album" />
    </Alloy>
    ```

2. Next, add the view object(s) you want to bind the data to. In this example, data will be bound to a ScrollableView object.

    **app/views/index.xml**

    ```xml
    <Alloy>
        <Collection src="album" />
        <Window backgroundColor="white" onClose="cleanup">
            <ScrollableView></ScrollableView>
        </Window>
    </Alloy>
    ```

3. Add the `dataCollection` attribute to the appropriate view object. Assign this attribute to the collection you want to use. For a ScrollableView object, add the attribute to the `<ScrollableView>` tag. The element to add the attribute to depends on which view object you want to bind data to.

    **app/views/index.xml**

    ```xml
    <Alloy>
        <Collection src="album" />
        <Window backgroundColor="white" onClose="cleanup">
            <ScrollableView dataCollection="album"></ScrollableView>
        </Window>
    </Alloy>
    ```

4. Next, create your repeater object and add model attributes. Enclose the model attributes with curly brackets or braces ('{' and '}'). For a ScrollableView, the repeater object can be a View object with additional children objects. The repeater object depends on which view object you are using.

    **app/views/index.xml**

    ```xml
    <Alloy>
        <Collection src="album"/>
        <Window backgroundColor="white" onClose="cleanup">
            <ScrollableView dataCollection="album">
                <View layout="vertical">
                    <ImageView image="{cover}" />
                    <Label text="{title} by {artist}" />
                </View>
            </ScrollableView>
        </Window>
    </Alloy>
    ```

5. In the controller, call the Collection's `fetch()` method to initialize the collection and sync any stored models to the view. Remember to call the `$.destroy()` method when you close the controller to prevent memory leaks.

    **app/controllers/index.js**

    ```javascript
    $.index.open();
    Alloy.Collections.album.fetch();

    function cleanup() {
        $.destroy();
    }
    ```

The application is now setup for basic collection-view binding. When any new data is added to the collection, the ScrollableView will be updated with the new data.

### Model-view binding

To bind a single model to a component, create a global singleton or controller-specific model using the [Model tag](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#model-element) in the XML markup of the main view and map the model attribute to the view component. To map the attribute to the view component, prefix the model name or id to the attribute, then enclose it with curly brackets or braces ('{' and '}').

To do complex transformations on the model attributes, extend the model prototype with a `transform()` function. It should return the modified model as a JSON object.

**app/models/album.js**

```javascript
exports.definition = {
  config: {}, // model definition
  extendModel: function(Model) {
    _.extend(Model.prototype, {
      transform: function transform() {
        var transformed = this.toJSON();
        transformed.artist = transformed.artist.toUpperCase();
        return transformed;
      }
    });
    return Model;
  }
};
```

A global singleton instance is a single instance of a particular model that is available for use anywhere in your application. When using global instances that they will be in memory for the duration of your application unless you manually release them. The process of manually releasing the should include:

* If any controllers are using data binding that relies on the global instance, they should call their own destroy() function. `$.destroy()`

* Any other event handlers added to the global instance should be removed with the [off()](http://backbonejs.org/#Events-off) function

* Set the reference of the model to null. `Alloy.Models.nameOfModel = null;`

Note that you need to call the `$.destroy()` function when closing the controller to prevent potential memory leaks. The `destroy` function unbinds the callbacks created by Alloy when the model-view syntax is used.

#### Example

The example below demonstrates how to bind a model to view components in the XML markup. Notice that each attribute is prefixed with the model's name and enclosed with braces.

```xml
<Alloy>
    <Model src="settings"/>
    <Window backgroundColor="white" onClose="cleanup">
        <View layout="vertical">
            <Label text="Text Size" />
            <Slider value="{settings.textsize}" max="5" min="1"/>
            <Label text="Bold"/>
            <Switch value="{settings.bold}" />
            <Label text="Italics"/>
            <Switch value="{settings.italics}" />
        </View>
    </Window>
</Alloy>
```

### Collection example

The example below demonstrates how to display all book models in the collection by the author Mark Twain. It also demonstrates how to use each of the data binding attributes.

**app/views/index.xml**

```xml
<Alloy>
    <Collection src="book" />
    <Window class="container">
        <TableView dataCollection="book"
                   dataTransform="transformFunction"
                   dataFilter="filterFunction"
                   dataFunction="updateUI"
                   onDragEnd="refreshTable">
            <!-- Also can use Require -->
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

function refreshTable(){
    // Trigger the binding function identified by the dataFunction attribute
    updateUI();
}

// Trigger the synchronization
var library = Alloy.Collections.book;
library.fetch();

// Free model-view data binding resources when this view-controller closes
$.index.addEventListener('close', function() {
    $.destroy();
});
```

As the collection is updated, the view reflects the changes made to the models. If you want to suppress an update, specify {`silent: true`} in the `options` parameters when calling Backbone methods to change model data.

### Collection vs Model data binding

You can bind both a collection of models or an individual model. To bind a model attribute the opening curly bracket is first followed by the model name and then the attribute. To bind a collection you add the `dataCollection` attribute to the container using the collection name as value. The generated code will then loop over the collection and add the child elements to the container for each model.

```xml
<Alloy>
    <Model src="currentCategory" />
    <Collection src="book" />
    <Window>

        <!-- model data binding -->
        <Label text="{currentCategory.name}" />

        <!-- collection data binding -->
        <ScrollView dataCollection="book" />
            <Label text="{title}" />
        </ScrollView>

    </Window>
</Alloy>
```

### Global singleton vs Local instance

In the above [code snippet](#undefined), the model and collection are global singletons under `Alloy.Model.currentCategory` and `Alloy.Collection.book`. You can also use local instances for the current controller by adding `instance="true"` as attribute. You also need to assign them an ID in order to reference them in the XML and controller.

```xml
<Alloy>
    <Model src="currentCategory" instance="true" id="c" />
    <Collection src="book" instance="true" id="b" />
    <Window>

        <!-- model data binding -->
        <Label text="{$.c.name}" />

        <!-- collection data binding -->
        <ScrollView dataCollection="$.b" />
            <Label text="{title}" />
        </ScrollView>

    </Win
```

### Simple vs Complex data binding

It’s important to understand the difference between simple and complex data binding as they were implemented in unique ways which results in different behaviour.

Simple data binding involves one model attribute where complex data binding involves a combination of strings (including white space) and model attributes or even multiple model attributes:

```xml
<Alloy>
    <Model src="book">
    <Window>

        <!-- simple -->
        <Label text="{book.title}" />

        <!-- complex -->
        <Label text="Title: {book.title}" />
        <Label text="{book.author.name} {book.author.email}" />

    </Window>
</Alloy>
```

## Backbone binding

The application can monitor Backbone events to trigger updates to the view.

For instance, the code below demonstrates how to update a table, when a model object is added to a collection by monitoring the add event, which is triggered after a call to `Backbone.Collection.add`:

```javascript
library.on('add', function(e){
    // custom function to update the content on the view
    updateFooView(library);
});
```

Another method is to selectively monitor changes. For instance, the code below demonstrates how to update data if a title changes in the collection:

```javascript
library.on('change:title', function(e){
    // custom function to update the content on the view
    updateFooView(library);
});
```

::: warning ⚠️ Warning
This only works if the Backbone method fires the change event and does not enable {`silent: true`} as an option.
:::

## Bind deep object properties

You can [bind deep object properties](https://jira.appcelerator.org/browse/ALOY-1482):

```xml
<Alloy>
    <Model src="book" />
    <Label text="{book.author.name}" />
</Alloy>
```

Before, you needed to use a transformer to create a reference like `authorName`.

Prior to CLI 7.1.0, the only way to set object properties (e.g. `font.fontFamily` for a Label) was to use TSS. You can use dot notation in XML:

```xml
<Alloy>
    <Model src="book" />
    <Label font.fontFamily="Roboto">Hello</Label>
</Alloy>
```

## Use models and properties names with special characters

You can bind models and properties that use [names with special characters](https://jira.appcelerator.org/browse/ALOY-1478) like dashes and spaces. Simply wrap the names in square brackets and quotes like you’d do in JavaScript:

```xml
<Alloy>
    <Model src="my-model">
    <Label text="['my-model']['my-property']" />
</Alloy>
```

## Bind multiple models to the same view

You have the ability to [bind multiple models to the same view](https://jira.appcelerator.org/browse/ALOY-1481):

```xml
<Alloy>
    <Model src="a" />
    <Model src="b" />
    <Label text="{a.hello} {b.world}" />
</Alloy>
```

## Define transformations in the model

Until Alloy 1.8.1, only simple model data-binding would call an optional `transform()`method on the model to allow you to provide derived properties. It was [broken](https://jira.appcelerator.org/browse/ALOY-1368) for complex data binding and [not implemented](https://jira.appcelerator.org/browse/ALOY-1369) for collection data binding.

Since Alloy 1.8.1, all types of data binding will generate the following logic to determine what object will be bound to the view. Note that only with collection binding you can also define a controller-based transform function to use via the `dataTransform` XML attribute.

```javascript
var t;
if (_.isFunction(<dataTransform>) { // only for collection binding
    t = <dataTransform>(model);
} else if (_.isFunction(model.transform) {
    t = model.transform();
} else {
    t = model.toJSON();
}
$.myLabel.text = t.author.name;
```

::: warning ⚠️ Warning
This does mean that the transform method need to return all bound properties, not just the transformed ones. Until Alloy 1.8.1 simple collection data binding did not require this and automatically felt back to the model attributes.
:::

You’d extend a model with a `transform()` method as such:

```javascript
exports.definition = {
    // config
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            transform: function( ) {
                // get model attributes as object
                var t = this.toJSON();

                // override/add transformed properties
                t.titleCaps = t.title.toUpperCase();

                return t;
            }
        });
        return Model;
    }
};
```

## Tips and tricks

### Lazy transformation

The advantage of defining transformations in the model is that you don’t need to repeat them in every controller where you use a collection of these models. And of course it already was the only way to transform attributes for model data binding.

A possible disadvantage however is that everywhere you bind the model all transformations are computed were you might only need some or even none at all.

You can handle this using [Object.defineProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). It’s `get` callback will only be called when the transform key is actually requested. This can improve the performance of you app in particular if you have multiple heavy transformations, like formatting a date:

```javascript
var moment = require('alloy/moment');

exports.definition = {
    // config
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            transform: function( ) {
                var model = this;
                var t = this.toJSON();

                Object.defineProperty(t, 'dateFormatted', {
                  get: function( ) {
                    return moment(t.date).format('LLLL');
                  }
                });

                return t;
            }
        });
        return Model;
    }
};
```

### Populating a model after data binding

When Alloy compiles your views and controllers, the [generated view code precedes your controller code](https://github.com/appcelerator/alloy/blob/master/Alloy/template/component.js#L45). Any models you define for data binding in the XML will also be created at that point. So how would you bind an already existing model? I’ve seen several _workarounds_ for this, but if you think about it it is actually not that much different from binding a collection, which also starts off empty. Just like you call `fetch()` to populate the collection, you do the exact same thing for the model. Depending on the sync adapter you either pass the query/ID as options or first set the model’s id-attribute and then call `fetch()`.

**index.xml**

```xml
<Alloy>
    <Model src="book" instance="true" id="current" />
    <Window>
        <Label text="{book.title}" />
    </Window>
</Alloy>
```

**index.js**

```javascript
$.current.fetch({
    id: Ti.App.Properties.getString('currentBook')
});

$.index.open();
```

::: warning ⚠️ Warning
With the release of CLI 7.1.0, values passed in at creation of a view can be used as values in TSS and XML. For example, if the **name** property was passed in at creation it can be used on a label:

```xml
<Alloy>
    <Model src="book" instance="true" id="current" />
    <Window>
        <Label text="$.args.foo" />
    </Window>
</Alloy>
```
:::

#### Tracker as Example

The [Tracker App](https://github.com/fokkezb/tracker) requires Alloy 1.9 or later and demonstrates [collection data binding](https://github.com/FokkeZB/Tracker/blob/master/app/views/rides.xml), [model data binding](https://github.com/FokkeZB/Tracker/blob/master/app/views/datapoint.xml), [fetching a collection from a query](https://github.com/FokkeZB/Tracker/blob/master/app/controllers/data.js#L11) as well as [lazy transformations](https://github.com/FokkeZB/Tracker/blob/master/app/models/ride.js#L32) and [populating an existing model](https://github.com/FokkeZB/Tracker/blob/master/app/controllers/ride.js#L13).
