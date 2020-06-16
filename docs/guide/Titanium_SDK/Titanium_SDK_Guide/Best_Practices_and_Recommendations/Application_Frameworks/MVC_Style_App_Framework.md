---
title: MVC Style App Framework
weight: '10'
---

# MVC Style App Framework

This document contains information on where to download the project scaffold, overview of core concepts and conventions, events, managing orientation UI and cross-platform and form factor files, and app namespace.

## Download

You can download the project scaffold described below by clicking here: [scaffold.zip](./attachments_30278161_1_scaffold.zip)

## Core Concepts and Conventions

This sample framework adapts a model-view-controller architecture, defines an event architecture, and defines an object inheritance pattern. It is not a pure MVC implementation. It also was created prior to our adoption of CommonJS require() as the preferred technique. Still, it is an instructive model and has been used successfully for Appcelerator-led projects.

### Standard Patterns

The use of several patterns will be required throughout this app. For overall object or 'class' construction, a revealing module pattern will be used. Self-invoking functions for singleton objects will be used. For instantiable objects, the 'new' keyword should be used.

Example of a revealing module pattern:

```javascript
App.Models.Messages = function(someId) {
  var id = someId;

  // Member method
    function getLatestMessages() {
        var data = [
            { text: 'This is a test' },
            { text: 'This is a test 2' },
            { text: 'This is a test 3' }
        ];

        return data;
    }

    // Return this object's 'public API'
    return {
        getLatestMessages: getLatestMessages,
        id: someId
    }
};

// This example must be instantiated using the 'new' keyword
var model = new App.Models.Messages(32);
```

If inheritance is needed for any reason then those parent objects will be built with `this` prepended to its public methods / properties. The use of apply/call will be used to inherit methods in to child objects. Due to Titanium's poor performance around mixins, mixin type inheritance shouldn't be used unless it is for small objects.

### Global Namespace

As a general rule, you should add as few objects to the global scope as you can. Such a practice makes garbage collection easier and lessens opportunities for name conflicts / crashes. Additionally, you should _not modify the Titanium proxy objects_, such as Ti.App, by adding properties or methods. To account for these design constraints, this app framework creates a single global `App` object to which you may append objects as needed. While there may be times when another global object is needed, everything will be placed in this namespace and documented in order to stay organized and avoid conflicts. e.g. App.Controllers = {}; would be where we store controllers for this app.

### Models

Models are the data layer for this app. They can serve as two types: instantiable objects that can be reused across the app or as a PDO type object that stores data in memory for the lifetime of the app. Data logic should be offloaded in these objects as much as possible.

### UI and Styles

UI files serve as the 'view' areas of the app. They will control any logic for aesthetic events (e.g. a highlight state), setting UI specific things such as a controller calling UI.setTitle('Cool beans') to change the title in the UI. They also serve for TiUI object creation and management.

Every UI file will have a corresponding 'styles' file. The styles file is an object literal that contains the object properties used to populate UI elements.

### Controllers

Controllers are the main level business of the app. Controllers will manage the UI and model delegation for screens and components across an app. Some controllers may be global to the app and others instantiable, invoked when using a certain part of the app.

### Modules

Modules are CommonJS files that can be dropped in to the project for use. An effort will be made to ensure app widgets are modules so we can reuse them elsewhere in the future. Modules will be contained in their own folder with their own set of files if needed and assets.

## Events

UI, models, and controllers will maintain their own internal events except when needed for global, app-wide cases. UI events will be related to aesthetics, UI state, and other similar functionality. Controller events will manage things in it's internal workings. Model events will mostly fire / update observers that are listening for data changes (mostly in the controller)

Global events will not be placed inside instantiable objects. Global events will be tracked in the global namespace. A good example is the orientation event placed in app.js. It fires a global function located in /lib/app.js 'orientationObserverUpdate'. This listener manages all objects that might have an orientation requirement. The 'orientationObserverUpdate' can fire a current controller or UI object that has an orientation function. e.g. 'currentController.orientationUpdate():' or 'currentController.UI.orientationUpdate();'

## Managing Orientation UI

Titanium doesn't handle different layouts in orientation very well (because of absence of NIB files, etc.) so care must be taken in how this is setup. The design for this project isn't overly complex so it likely won't be a factor. Orientation management will be handled in two ways:

1. Via the controller – For complex orientation handling the controller will need an 'orientationUpdate()' method. This will handle all orientation needs the controller is managing.

2. Via the UI – This is the most common scenario. The orientationObserverUpdate method will check if the current controller's UI and other listening objects have an orientationUpdate() method in the UI namespace. If so it will fire them and the UI will update accordingly. NOTE: See /ui/dashboard/dashboard.js for an example.

Either method above will pass a landscape / portrait argument which can be used by the UI's corresponding style sheet. e.g.

```javascript
function orientationUpdate(type) {
    wrapper.height = App.Styles.Example[type].wrapper.height;
}
Orientation specific styles will be separated like so:

App.Styles.Example = {
    // Orientation specific
    portrait: {
      wrapper: {
        height: 100
      }
    },
    landscape: {
      wrapper: {
        height: 'auto'
      }
    },
    // Defaults (probably won't be necessar once we have a global property of current orientation)
    wrapper: {
        height: 'auto'
    }
};
```

## Managing cross-platform and form factor files

There are several conventions to follow when building against different platforms and form factors:

### Form Factors

Conditionals can be built off of the different form factors for this app, i.e. tablet / handheld. For hardcoded values you can simply use something like:

```
if(App.formFactor === 'tablet') {
  // do something here
}
```

In many cases hard conditionals aren't needed since it's almost always related to UI branching. It's better to use the following:

```javascript
// No conditionals needed
var wrapper = Ti.UI.createView(App.Styles.Example[formFactor].wrapper);
Branch by file if the UI or functionality in a form factor is drastically different:

// For a form factor e.g. dashboard.tablet.js
Ti.include('ui/dashboard/dashboard.' + App.formFactor + '.js');
// Or if just a platform type is needed e.g. dashboard.ios.js
Ti.include('ui/dashboard/dashboard.' + App.type + '.js');
```

### Cross platform and type handling

In similar fashion, iOS / Android / Google TV, etc can be branched by either file or hard conditionals depending on the scenario.

A style.js example for the above scenarios with combined styles can look like this:

```
App.Styles.Example = {
    menu: {
        handset: {
          android: {
        buttonTrack: {
                  height: 30,
                  top: 0
              }
          },
          ios: {
            buttonTrack: {
                  height: 30
              }
          }
        },
        tablet: {
            buttonTrack: {
                height: 100
            }
        }
    }
}
```

To avoid excessive dirty nesting like the above example, branch by file will be used when it makes sense:

```
// This extreme example shows when an included file for a specific form factor AND platform is needed.
// Amounts to a file named 'style.handset.ios.js' for instance
Ti.include('ui/dashboard/style.' + App.formFactor + '.' + App.type + 'js');
```

## The 'App' Namespace

There are numerous properties to be appended to the 'App' namespace. The following is an initial list:

* `App.formFactor` - Used for the different form factored layouts e.g. tablet / handheld

* `App.API` - Data endpoints and other API-ish things. A full set of App API areas for data (if needed). Good for storing PDO models and such.

* `App.Models` - Where models are stored

* `App.Controllers` - Where controllers are stored

* `App.UI` - UI components stored here

* `App.Styles` - Styles objects here

* `App.Sidebar` - Quick access to the sidebar module

* `App.currentPanel` - If using the GlobalPanels, this just tracks the current one open. Might not be needed.

* `App.Plugins` - Place to put 3rd party plugins that don't fall in the category of a module or anything else.

* `App.Window` - The global window this app uses

* `App.currentOrientation` - The Current orientation landscape || portrait

* `App.Header` - The top navigation area

* `App.boot` - Handles booting up the app once things are loaded in

* `App.globalTopNavigationObserver` - Handles global event for sidebar flyouts

* `App.sidebarMenuObserver` - Handles global event for sidebar menus

* `App.onAfterAuthentication` - Handles authentication routing after authentication is confirmed

* `App.orientationObserverUpdate` - Handles orientation update

### App.API

This area handles the data layers of the app.

* `setupDatabase` - Sets up a local sqlite database schema

* `DB` - The data ORM endpoint (using the Joli plugin)

* `Salesforce` - Endpoint for all salesforce calls. This includes the salesforce module and the evently module

* `tableSchemas` - Stores the field names / schema for the database

* `sessionRefresh` - This will try to log in the previously logged in user

* `syncModel` - Syncs the supplied data to local storage

* `syncFullEvent` - Sync full event (all models: sessions, registration, etc)

### App.Platform

This endpoint has several features that help determine things like logic branching based on platform, device type, etc. This endpoint uses the platform module. Some useful examples of how this can be used:

```javascript
var orientationModes = App.Platform.is({
  handheld:[Ti.UI.PORTRAIT],
  tablet:[Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
});

var pointOffset = iApp.Platform.s({
  ios:100,
  android:120
});

App.Platform.is({
  handheld: {
    ios: function() {
      //do iphone/ipod stuff
    },
    android: function() {
      //do android handheld stuff
    }
  },
  tablet: {
    ios: function() {
      //do ipad stuff
    },
    android: function() {
      //do android tablet stuff
    }
  }
});
```
