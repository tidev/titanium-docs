---
title: RESTe
weight: '30'
---

# RESTe

## Introduction

If you have been working with mobile apps very long, you have probably have seen that APIs are a huge chunk of your workload. Everything is connected to APIs these days and mobile is no exception. This document helps developers consume APIs in a very robust and user-friendly fashion.

Written by [Jason Kneen](http://github.com/jasonkneen), RESTe wraps HTTP calls and can consume any kind of web-based API (not just REST ones). It also generates a JavaScript API automatically and supports Backbone.js Models and Collections in Alloy.

The idea for RESTe came from a requirement Jason had when developing Titanium apps:

> “I build a lot of apps that integrate with APIs. These could be written using the open-source Parse Server or a hosted service, but more often they are custom APIs written by another developer. I used to use a basic api.js library to handle the API integration, but this typically involved writing my own module for the API in question, requiring the api.js module, and writing specific methods for the app.”

## Developing apps before RESTe

When developing apps before RESTe, Jason says he would use an `api.js` module that had basic `GET`, `POST` methods, then write specific code per project, like this:

```javascript
exports.getPreviousLocations = function(callback) {
    var Rest = new Api(Alloy.CFG.baseURL + “users/“ + token + “/previouslocations”);

    Rest.get(function(e) {
        processResponse(e, function() {
            callback(e.result);
        });
    });
};
```

or this:

```javascript
exports.updateUser = function(name, email, password, callback) {
    var Rest = new Api(Alloy.CFG.baseURL + “users/“ + token);

    Rest.post(JSON.stringify({
        “name” : name,
        “email” : email,
        “password” : password
    }), function(e) {
        processResponse(e, function( ) {
            callback(e);
        });
    });
};
```

## RESTe

The idea behind RESTe was to write a simple module that could take the effort out of hooking up to APIs – he could drop it into any project and configure it easily on a per-project basis.

Getting started is simple — run this in the root of your Alloy project: `npm install reste`

Then, configuring a basic setup is a case of initializing a configuration in the `alloy.js` file, in this case:

```javascript
var reste = require("reste");
var api = new reste();

// now we can do our one-time configure
api.config({
    debug: true, // allows logging to console of ::REST:: messages
    errorsAsObjects: true, // Default: false. New in 1.4.5, will break 1.4.4 apps that handle errors
    autoValidateParams: false, // set to true to throw errors if url properties are not passed
    validatesSecureCertificate: false, // Optional: If not specified, default behaviour from http://goo.gl/sJvxzS is kept.
    timeout: 4000,
    url: "https://api.parse.com/1/",
    requestHeaders: {
        “X-Parse-Application-Id”: “APPID”,
        “X-Parse-REST-API-Key”: “RESTID”,
        “Content-Type”: “application/json”
    },
    methods: [{
        name: “courses”,
        post: “functions/getCourses”,
        onError: function(e, callback, globalOnError){
          alert(“There was an error getting the courses!”);
        }
    }, {
        name: “getVideos”,
        get: “classes/videos”
    }, {
        name: “getVideoById”,
        get: “classes/videos/”
    }, {
        name: “addVideo”,
        post: “classes/videos”
    }],
    onError: function(e, retry) {
        var dialog = Ti.UI.createAlertDialog({
            title: “Connection error”,
            message: “There was an error connecting to the server, check your network connection and  retry.”,
            buttonNames: [‘Retry’]
        });

        dialog.addEventListener(“click”, function() {
            retry();
        });
        dialog.show();
    },
    onLoad: function(e, callback) {
        callback(e);
    }
});
```

Once you’ve setup the config, you have these auto generated methods you can call:

```
api.getVideoById({
    videoId: “fUAM4ZFj9X”
}, function(video) {
    // do stuff with the video
});
```

and:

```
api.updateVideo({
    objectId: “123”,
    body: {
        categoryId: 2,
        name: “My Video2”
    }
}, function(video) {
    // do stuff with the video
});
```

RESTe allows you to make it work with almost any API no matter how it’s written — it doesn’t have to be a “pure” REST-based API.

There’s lots of other options mentioned in the [readme file](https://github.com/jasonkneen/RESTe) like hooks and events you can intercept if there are errors or if you need to transform or manipulate the data retrieved.

You can even build in your own caching of data. And other contributors have added support for Promises using libraries like `q.js`.

One of the most powerful features of RESTe is its support for Backbone.js Models and Collections in Alloy and is, without a doubt, one of its most loved features.

By adding some entries to the RESTe configuration, you can add full support for Backbone.js Models and Collections:

```
models: [{
   name: "location",
   id: "objectId",
   read: "getLocation",
   //content: "results" < - use this is your method returns an array object
   create: "createLocation",
   update: "updateLocation",
   delete: "deleteLocation",
   collections: [{
     name: "locations",
     content: "results",
     read: "getLocations"
   }, {
     name: "locationsByName",
     content: "results",
     read: "getLocationsByName"
   }],
 }],
 methods: [{
   name: "getLocations",
   get: "classes/locations"
 }, {
   name: "getLocation",
   get: "classes/locations/"
 },{
   name: "getLocationsByName",
   get: 'classes/locations?where={"name": ""}'
 }, {
   name: "updateLocation",
   put: "classes/locations/"
 }, {
   name: "createLocation",
   post: "classes/locations/"
 }, {
   name: "deleteLocation",
   delete: "classes/locations/"
 }]
```

This includes support for fetching, data-binding, transformations and even Backbone.js events like `sync`, `change`, and so on.

So after configuring the example above, you can drop this into a controller:

  `Alloy.Collections.locations.fetch();`

And the this into the View XML:

```xml
<TableView dataCollection=“locations” onClick=“selectLocation”>
  <TableViewRow id=“locationRow” model=“{objectId}” >
    <Label class=“title” top=“10”left=“20” text=“{name}”/>
    <Label class=“subTitle” bottom=“10” left=“20” text=“{address}”/>
  </TableViewRow>
</TableView>
```

You can even fetch based on parameters, or add sorting and much more.

One important thing to note here is that if you use RESTe then you don’t use the `<Collection>` or `<Model>` tags you’d usually use with Alloy projects. These are an Alloy implementation of its own method of configuring Backbone.js.

A useful feature of the Model and Collection support is the ability to create Models and Collections on-the-fly. This is great if you want to add some simple data binding but aren’t ready to connect to a live API yet and simply want to mockup a user interface.

Using `.createModel(name, attributes)` or `.createCollection(name, array)` you can create Models and Collections, bind them to Alloy Views all without touching an API.

As Jason says:

> It’s been so nice developing apps with RESTe where I can create the app screens, create mock data to bind and format them, and make sure everything’s working. I can even add models to collections to test say, adding comments to a post and save the data to local properties to persist it. When the API is ready, I can easily plug in the end points and with very little change, the app “just works”.

Before RESTe, when binding data in Alloy, many developers often had to write my own API code and wire it up manually, resulting in using various libraries, looping through results, creating TableView rows or adding to an array to bind to a ListView later.

With RESTe, I’m able to setup a configuration once, and use ONE line of code in a controller, and change ONE line in a View, and add some variables and that’s it. I write less code, my app is less complex to manage and everything is setup in one, easy-to-write (and understand) configuration.

## Further reading

Find out more about RESTe and [install it from npm](https://www.npmjs.com/package/reste), or check and contribute to [the repo on GitHub](https://github.com/jasonkneen/reste).
