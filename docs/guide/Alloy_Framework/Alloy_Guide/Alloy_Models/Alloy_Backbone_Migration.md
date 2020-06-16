---
title: Alloy Backbone Migration
weight: '40'
---

# Alloy Backbone Migration

## Overview

Alloy 1.6.0 introduces support for Backbone 1.1.2. Currently, Alloy uses Backbone 0.9.2 to support its Model and Collection objects. This guide covers the changes from Backbone 0.9.2 to 1.1.2 and the modifications you may need to update your application. Note that only changes to the Backbone Collection, Event and Model APIs are discussed in this document. The other APIs (Routers, History and View) are not discussed since Alloy does not make direct use of them.

Due to breaking changes from Backbone 0.9.2 to 1.1.2, Alloy still uses Backbone 0.9.2 as its default Model and Collection implementation. You will need to update the configuration file to use the newer Backbone library, then update your application to fix the breaking behavior changes and take advantage of the new Backbone features.

In the future, Backbone 1.1.2 will become the default and 0.9.2 support will be deprecated and eventually removed.

### Alloy 1.10.12 release

Alloy 1.10.12 adds support for Backbone 1.3.3. However, due to breaking changes in Backbone, 0.9.2 will remain the default version for the 1.10.12 release.

To use Backbone 1.3.3. Add following in `config.json`

**config.json**

```json
"backbone": "1.3.3"
```

Supported versions of Backbone for Alloy 1.10.12 are 0.9.2, 1.1.2, 1.3.3.

## Setup

To use Backbone 1.1.2 to support Alloy Model and Collections objects, open the project's `./app/config.json` file and add the `backbone` key to the to the file with the value set to `1.1.2`. You may also set this value to `0.9.2` to force support of Backbone 0.9.2. In the example below, the boiler plate configuration file is modified to use Backbone 1.1.2.

**app/config.json**

```json
{
    "global": {},
    "env:development": {},
    "env:test": {},
    "env:production": {},
    "os:android": {},
    "os:blackberry": {},
    "os:ios": {},
    "os:mobileweb": {},
    "dependencies": {},
    "backbone": "1.1.2"
}
```

## Summary of Changes

The following sections summarize most of the changes that affect the behavior of an application. For a full list of Backbone changes, see the [Backbone Changelog](http://backbonejs.org/#changelog).

### Collection APIs

#### Fetch Method Behavior Change

Backbone Collection objects no longer emit the `reset` event after a `fetch()` call, which means data-bound views may not update automatically. **This could break existing apps.** To use old functionality, pass `{reset: true}` when calling `fetch()` or extend the Collection class. The following sample code extends the Collection and has been added to the new model template. Note that you will need to comment out the code in the new model template.

```
exports.definition = {
    config: {
        // Model configuration
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            // For Backbone v1.1.2, uncomment the following to override the
            // fetch method to account for a breaking change in Backbone.
            /*
            fetch: function(options) {
                options = options ? _.clone(options) : {};
                options.reset = true;
                return Backbone.Collection.prototype.fetch.call(this, options);
            }
            */
        });
        return Collection;
    }
};
```

#### New Set Method

If you want to smartly update the contents of a Collection (adding new models, removing missing ones, and merging those already present), you now call `set()` a similar operation to calling `set()` on a Model. This is now the default when you call `fetch()` on a collection. To get the old behavior, pass `{reset: true}` to the `fetch()` method.

#### Return Value for Methods

The return values of Collection's `add()`, `push()`, `remove()`, `reset()` and `shift()` methods return the changed (added, removed or updated) model or list of models, instead of `this`.

#### Add Method

When invoking `add()` on a collection, passing `{merge: true}` will now cause duplicate models to have their attributes merged in to the existing models, instead of being ignored.

To improve the performance of `add()`, `options.index` will no longer be set in the `add` event callback. Use `collection.indexOf(model)` to retrieve the index of a model.

### Event APIs

* All `i` `nvalid` events now pass consistent arguments. First the model in question, then the `error` object, then `options`.

* `Collection.sort()` now triggers a `sort` event, instead of a `reset` event.

* Both `sync` and `error` events within `Backbone.sync()` are now triggered regardless of the existence of success or error callbacks.

* While listening to a `reset` event, the list of previous models is now available in `options.previousModels`.

::: warning ⚠️ Warning
The new Event methods `listenTo` and `stopListening` is meant for Backbone View objects to listen to Model and Collection events. These APIs will not work with an Alloy application.
:::

### Model APIs

#### Validation

Model validation is now only enforced with the `save()` method. Previously, models were also validated with the `set()` method. To force validation when the `set()` method is called, pass `{validate: true}` to the method or extend the Model class.

Validation occurs even during "silent" changes (passing `{silent: true}` to methods). Previously, it would not.

Failed validations return the `invalid` event. Previously, a failed model validation would return the `error` event.

::: warning ⚠️ Warning
To validate Model objects, implement the `validate()` method in the `extendModel` key of the model configuration file.
:::

#### Other Changes

* Calling `destroy()` on a Model will now return `false` if the model's `isNew` is set to `true` (model has not been saved to persistent storage).

* `Model.set()` no longer accepts another model as an argument. Only pass the method the attributes to set, `Model.set(attributes)`.

* `url` and `urlRoot` properties may now be passed as options when instantiating a new Model.

* If you want to maintain current models in a collection when using `fetch` the property has changed from `{add:true}` to `{remove:false}`.

### Parse Method

After fetching a model or a collection, _all_ defined parse methods will now be run. So fetching a collection and getting back new models could cause both the collection to parse the list, and then each model to be parsed in turn, if you have both methods defined. By default, the parse method is a no-op function that directly passes the JSON response object.

You are no longer permitted to change the `id` of your model during parse(). Use `idAttribute` instead.

The parse function now receives the `options` dictionary as its second parameter. Previously, it would only be passed a raw `response` object.

### Silent Option

Passing `{silent:true}` to methods now suppresses the `change:attr` events, thus a data-bound view will not be updated to reflect the changes. The sql sync adapter passed this option by default. It has been updated to no longer pass that option when Backbone 1.1.2 is used (still passed with 0.9.2).

If you want the new behavior, where the `change` events are suppressed, you will need to pass this option or extend the Model or Collection class. The following sample code extends the Model `set()` method by forcing the silent option to true. This method is where the silent option is used to fire or not fire change events.

```
exports.definition = {
    config: {
        // Model configuration
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            // Forces silent true option when the model is updated
            set: function(attributes, options) {
                options = options ? _.clone(options) : {};
                options.silent = true;
                return Backbone.Model.prototype.set.call(this, attributes, options);
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here
        });
        return Collection;
    }
};
```

## API Changes

### New APIs

The following APIs have been added between Backbone 1.1.2 and 0.9.2.

| API | Type | Notes |
| --- | --- | --- |
| Backbone.request | event | Fired whenever a request begins to be made to the server during a Backbone.sync operation. |
| Backbone.Collection.findWhere | method | Same as the `Backbone.Collection.where()` method but only returns the first result. |
| Backbone.Collection.set | method | Performs a "smart" update of the collection with the passed list of models. |
| Backbone.Event.once | method | Same as the `Backbone.Event.on()` method except after the event is fired, the callback is removed. |
| Backbone.Model.invert | method | Returns a copy of the object where the object's keys and values are switched. |
| Backbone.Model.keys | method | Returns an array of the object's keys. |
| Backbone.Model.omit | method | Returns a copy of an object without the specified keys. |
| Backbone.Model.pairs | method | Returns an array of `[key, value]` pairs. |
| Backbone.Model.pick | method | Returns a copy of an object with the specified keys. |
| Backbone.Model.values | method | Returns an array of the object's property values. |

### Removed APIs

The following APIs have been removed between Backbone 1.1.2 and 0.9.2.

| API | Type | Notes |
| --- | --- | --- |
| Backbone.Collection.getByCid | method | Pass the CID to the Backbone.Collection.get() method to retrieve the Collection by its Backbone client ID. |
| Backbone.Model.change | method |  |
