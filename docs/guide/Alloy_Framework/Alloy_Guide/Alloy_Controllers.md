---
title: Alloy Controllers
weight: '20'
---

# Alloy Controllers

## Overview

This topic covers how to write controller code as well as other JavaScript files excluding models. Some traditional Titanium development is required, since Alloy controllers make direct calls to the Titanium SDK API to manipulate UI objects and access non-UI APIs. Refer to the [Titanium API Guides](#!/api) for more information.

## Controllers

In Alloy, controllers contain the application logic used to control the UI and communicate with the model. The following code contains the presentation logic (`index.js`) associated with the view (`index.xml`).

**app/controllers/index.js**

```javascript
function doClick(e) {
    alert($.label.text);
}

$.index.open();
```

**app/views/index.xml**

```xml
<Alloy>
    <Window class="container">
        <Label id="label" onClick="doClick">Hello, World</Label>
    </Window>
</Alloy>
```

All UI elements which have an `id` attribute in a view are automatically defined and available as a property prefixed by the special variable `$` in the controller. The `$` is a reference to the controller. For example, the `$.label` prefix in the controller is used to access the `Ti.UI.Label` object instance in the view. This reference is used to directly access properties or methods of this object. For example, calling `$.label.hide()` hides the label from the view or you can change the label text with `$.label.text`.

To access external controllers and views, use the `Alloy.createController` and `Controller.getView` methods, respectively. See [Alloy API documentation](#!/api/Alloy) for more details.

If the top-level UI object does not have an ID defined, reference it using the name of the controller prefixed by the `$`. Since the Window object in the view does not contain an ID, the controller uses `$.index` to grab the top-level UI object from the view. However, if an `id` attribute was defined, for example, `<Window id='window'>`, the controller needs to use `$.window` to gain access to the Window object; `$.index` will be undefined and the application will throw an error when calling `$.index.open()`.

### Events

Controllers extend `BackBone.Events` and as such can dispatch events.

For example, our index view could also require another controller to deliver the label and listen to an event:

**app/views/index.xml**

```xml
<Alloy>
    <Window class="container">
        <Require id="label" src="label" onNotify="doSomething" />
    </Window>
</Alloy>
```

The view of the required label-controller would listen to the `click` event of the label itself:

**app/views/label.xml**

```xml
<Alloy>
    <Label id="label" onClick="passClick">Hello, World</Label>
</Alloy>
```

And that label-controller would in turn fire the notify event on itself so the index controller will receive it:

**app/controllers/label.js**

```javascript
function passClick(e) {
    $.trigger('notify');
}
```

### Inheritance

Controllers can inherit from other controllers by assigning them as a base (parent) controller: `exports.baseController = 'baseControllerName'`. As in the CommonJS model, the controller inherits any exported functions from the base controller. These functions can also be overwritten.

For example, the animal view-controller defines a label object with a speak method:

**app/controllers/animal.js**

```javascript
exports.speak = function() {
    alert("Yelp!");
};
```

**app/views/animal.xml**

```xml
<Alloy>
    <Label id="animalLabel">Animal</Label>
</Alloy>
```

Then, the following code inherits from the animal view-controller and overrides the speak method and label text property to customize it for a dog controller.

**app/controllers/dog.js**

```javascript
exports.baseController = "animal";
$.animalLabel.text = "Dog";
exports.speak = function() {
    alert("Bark!");
};
```

### Conditional code

Alloy introduces a set of special variables that act like compiler directives. Using these compiler constants optimizes the code at generation/compilation and any non-reachable code is removed.

The following are the constants defined by Alloy for use in the controller code:

* `OS_ANDROID` : true if the current compiler target is Android

* `OS_IOS` : true if the current compiler target is iOS

* `OS_MOBILEWEB` : true if the current compiler target is Mobile Web

* `OS_WINDOWS` (**since Appcelerator CLI 4.0.0/Alloy 1.6.0**): true if the current compiler target is Windows Phone. Note: Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.

* `ENV_DEV` : true if the current compiler target is built for development (running in the simulator or emulator)

* `ENV_TEST` : true if the current compiler target is built for testing on a device

* `ENV_PRODUCTION` : true if the current compiler target is built for production (running after a packaged installation)

* `DIST_ADHOC` (**since Alloy 1.4.0**) : true if the current compiler target is built for iOS Ad Hoc distribution, for example, if you set the `-T dist-adhoc` option when building with the Titanium CLI. Note that the `ENV_PRODUCTION` constant will be true too since this deployment is only for production builds.

* `DIST_STORE` (**since Alloy 1.4.0**) : true if the current compiler target is built for deployment to the Google Play Store or iTunes App Store, for example, if you set the `-T dist-store` option when building with the Titanium CLI. Note that the `ENV_PRODUCTION` constant will be true too since this deployment is only for production builds.

For example, since iOS devices do not include a back button, the application can conditionally add one to a window controller:

```javascript
if (OS_IOS) {
  var closeButton = Ti.UI.createButton({
        title: 'Close',
        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN
    });

    closeButton.addEventListener('click', function(){
        $.window.close();
    });

    $.window.leftNavButton = closeButton;
}
```

### Passing arguments

When initializing an external controller, you can pass arguments to customize it, for instance, `var controller = Alloy.createController('controller', {args1: 'foo'})`. In the external controller, the special variable `$.args` is used to receive the arguments. Prior to Alloy 1.6, you needed to use `arguments[0]`. For example, suppose you want to add multiple TableViewRow objects to a TableView object.

For the TableViewRow object, called 'row', the view contains only the object, and the controller contains only a few lines of code to parse the arguments:

**app/views/row.xml**

```xml
<Alloy>
    <TableViewRow id="rowView"/>
</Alloy>
```

**app/controllers/row.js (Alloy 1.6+)**

```
$.rowView.title = $.args.title || '';
$.rowView.url = $.args.url || '';
```

**app/controllers/row.js (Alloy <1.6)**

```javascript
var args = arguments[0] || {};
```

In a separate controller containing the TableView object, called 'tableView', the code is cycling through an array of data and creating new instances of 'row' to supply it to 'tableView.'

**app/controllers/index.js**

```javascript
var data[];
for (var i=0; i<source.length; i++) {
    var arg = {
        title: source[i].postTitle,
        url: source[i].postLink
    };
    data.push(Alloy.createController('row', arg).getView());
}
$.tableView.setData(data);
```

As seen in the example above, the controller is passing different arguments to the 'row' controller, creating unique instances of 'row'.

### Global namespace

Controllers can store and access global variables using the `Alloy.Globals` namespace. For example, you can store an instance of a parent window in Globals and access it in another window.

Store the parent window:

```
$.index.open();
Alloy.Globals.parent = $.index;
```

Access the parent window in another controller:

```javascript
var parent = Alloy.Globals.parent;
parent.close();
```

Other non-controller JavaScript code can access the Globals variable but need to require the Alloy module. See [Extending Alloy](#extending-alloy,-underscore.js-and-backbone.js) below.

## Initializer file (alloy.js)

The initializer file `app/alloy.js` can be used to execute some code near the beginning of the application's lifecycle. The contents of this file will be executed right before the initial `index.js` controller is loaded, allowing you to execute code before any UI components are loaded and to override built-in Alloy functions before they are executed. The code in this file also has access to the `Alloy` namespace.

For instance, the default `isTablet` method returns true if it is identified as an iPad, an Android device in the large or extra large group, or if either dimension exceeds 400 dp for Mobile Web application. To override that behavior, you can add the following code to `alloy.js`.

```
Alloy.isTablet = function(){
    return !(Math.min(Ti.Platform.displayCaps.platformHeight, Ti.Platform.displayCaps.platformWidth) < 600);
}
```

## Library code and CommonJS modules

Some JavaScript code might not be suitable as controller code, since it does not have an associated view, or you want to separate it from the MVC framework for easier reusability. Create a folder called `lib` in the `app` directory of your Alloy project. Add your CommonJS modules or JavaScript code using the CommonJS format into the `lib` folder. These files are copied to the `Resources` folder, when compiling your Alloy project.

To use the library or CommonJS module, require it with the library name or module name without the 'app/lib' path and '.js' extension:

```javascript
var lib = require('library_name');
lib.foo();
```

::: warning ⚠️ Warning
Titanium and Alloy do not support the Node.js concept of "folders as modules". That is, requiring a folder name does not automatically load the `index.js` or `index.json` file inside the folder, or use the `package.json` file to locate the main entry point. You need to explicitly require the file that serves as the main entry point to the library.
:::

### Specs folder

Starting with **Alloy 1.2.0**, you can add the `specs` folder to your project. Like the `lib` folder, use the `specs` folder to add files to your project, except the files are only used when the deployment type is **not** production.

Create a folder called `specs` in the `app` directory of your Alloy project. Add your files to the specs folder. These files are copied to the `Resources` folder, when compiling your Alloy project if the deployment type is **not** production.

Use the `ENV_PROD` variable to check if the application is running as a production target or not, before using the files in the `specs` folder.

```
if (!ENV_PROD) {
    // Executes the fooFunction from the foo module
  require('specs/foo').fooFuntion();
}
```

### Platform-specific library folders

Starting with Alloy 1.5.0, you can also create platform-specific subfolders in the `lib` directory. Just add a folder named **android** or **ios** under the component folder and add your platform-specific files for Android or iOS into the folder, respectively. Do not include the platform-specific folder name when referencing the file.

```
app/
├──lib
│  ├──ios
│  │   └── library_name.js
│  └── library_name.js
├──models
├──styles
└──views
   └── index.xml
```

### Extending Alloy, Underscore.js and Backbone.js

To access the Alloy API methods, such as `createController` and `createModel`, as well as Underscore.js and Backbone.js in CommonJS modules and JavaScript files in `app/lib`, you need to load those modules in to the library:

```javascript
var Alloy = require('alloy'), _ = require("alloy/underscore")._, Backbone = require("alloy/backbone");

// Alloy extended
Alloy.createController('foo').getView().open();

// Underscore extended
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
Ti.API.info(even);

// Backbone extended
var Book = Backbone.Model.extend();
var book = new Book({title: 'Ulysses', author: 'James Joyce'});
Ti.API.info(JSON.stringify(book));
```

Currently, these modules are automatically available in the global scope and these APIs can be used without loading the modules. Referencing these modules without loading them first with the `require` method is discouraged and this behavior may be deprecated in the future. To ensure compatibility with future releases, always use the `require` method to load and use these modules.
