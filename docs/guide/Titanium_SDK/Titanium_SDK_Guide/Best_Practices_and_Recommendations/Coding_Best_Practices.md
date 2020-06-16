---
title: Coding Best Practices
weight: '10'
---

# Coding Best Practices

The Appcelerator-approved standard for apps developed on the Titanium platform specifies a **single-context**, **modular pattern**, with **well-structured code**, and **well-organized resources**. By following these standards, developers will create apps that meet the preceding checklist of Stable, Rapid, Performant, and Readable.

## JavaScript and general recommendations

### Avoid the global scope

Putting objects into the global scope can cause various problems:

* Objects placed in the global scope will not be automatically garbage collected. You'll have to manually `null` global objects to mark them ready for collection.

* It's easy to inadvertently overwrite an object in the global scope, because that variable is accessible so widely within your program.

* The global scope of app.js is not accessible from other contexts or within CommonJS modules. So, you can't just dump variables there so you can access them throughout your app.

For these reasons, avoid defining variables in the global scope. Objects are placed in the global scope when:

* You declare a variable outside of a function or CommonJS module. _Using a modular pattern will alleviate this problem._

* You omit the `var` keyword when declaring a variable (within or outside of a function). _So always use_ `var` _when declaring variables._

### Avoid local objects in global event listeners

The following code will cause a memory leak because the locally scoped variables are referenced in a global event listener. This is because the program will need to retain the locally scoped vars in order for the global event listener to use them. The global event listener will also persist until the app exits or the listener is explicitly removed.

```javascript
var someFunction = function() {
    var table = Ti.UI.createTableView(),
        label = Ti.UI.createLabel(),
        view = Ti.UI.createView();

    Ti.App.addEventListener('bad:move', function(e) {
        table.setData(e.data);
    });

    view.add(table);
    view.add(label);

    return view;
};
```

Global event listeners include those associated with Ti.App, Ti.Geolocation, Ti.Gesture, and so forth. The same problem is possible with non-global event listeners, like those you associate with a UI element. If that UI element remains valid in memory, any event listeners – and the objects they refer to – must also be kept in memory.

The above example is an anti-pattern that will eventually consume the app's available memory. It's important to note that this is a common anti-pattern that developers employ in browser-based environments too, where it causes the same result, so it is not unique to Titanium.

If you need to have a custom event, consider a method / callback that you can invoke later on. For the global events like location, network change, etc. it's highly recommended to place them in app.js. The general rule of thumb is global events handle global objects.

### Do not name custom events with spaces

Using spaces to name custom events may cause issues with other JavaScript libraries, such as Backbone.js, which uses spaces to delimit events. Naming events with spaces may cause events to fire multiple times. For example, instead of naming a custom event as "my event", use "my:event" or "my\_event".

### Defer script loading

One of the bottlenecks of a Titanium application is JavaScript evaluation. For that reason, to speed the startup and responsiveness of your application, you should avoid loading scripts until they are absolutely needed. As in the following application, which has three windows to be opened in succession on a click (touch) event, note that the dependent JavaScript for each window is not loaded until absolutely necessary.

**Lazy script loading in app.js**

```javascript
//muse be loaded at launch
var WindowOne = require('ui/WindowOne').WindowOne;

var win1 = new WindowOne();
win1.open();

win1.addEventListener('click', function() {
  //load window two JavaScript when needed...
  var WindowTwo = require('ui/WindowTwo').WindowTwo;
  var win2 = new WindowTwo();
  win2.open();
  win2.addEventListener('click', function() {
    //load window three JavaScript when needed...
    var WindowThree = require('ui/WindowThree').WindowThree;
    var win3 = new WindowTwo();
    win3.open();
  });
});
```

Or, if you're not using CommonJS but building out a namespace:

**Deferred loading to build a namespace**

```javascript
var someNameSpace = function() {
  var API = {
    init: function() {
      // create your UI here or do whatever
    }
    reset: function() {
      // null objects, clean up, etc
    }
  };

  // Construct anything you want outside the local 'API' object

  return API;
};
// And to use it
var test = new someNameSpace();
```

## Titanium-specific recommendations

### Don't extend Titanium prototypes

Many users attempt to add to the Ti namespace as a means to persist data across contexts, extend / override native methods, etc. This can sometimes work but is very unreliable for the following reasons:

1. The Titanium end objects are really not true JavaScript objects. They are proxy representations of native operating system components. As such, they are constructed to pass through properties and method invocations. Your extensions could conflict with native functionality or interfere with proper operation of the proxy objects.

2. Sometimes you might be able to store things on the namespace but it's not changeable (i.e. an array stored on the namespace might not be able to be modified - mutable, etc.). Other-times your stored objects will be completely null.

3. Since this isn't an approved way of storing anything, there's no guarantee it will work in future releases of Titanium.

As a rule do not add to, or extend via the prototype, any object or module in the Titanium namespace. If you want to extend a core part of the Titanium API you should build a native module to accomplish this. If you're just looking for an extendible JS namespace, create your own (i.e. `var MyApp={}`).

### Coding strategies for multiplatform apps

Branching in code is useful when your code will be _mostly the same_ across platforms, but vary here and there. Long blocks of if...then code are difficult to read and maintain. Also, excessive branching will slow your app's execution. If you must use this technique, try to group as much code as you can within a branch and defer loading as much as possible to mitigate the performance penalty of branching.

Using platform-specific JS files is likely to be most useful when your code is _mostly different_ across platforms. This removes long if...then blocks from your main code. Separating platform-specific code reduces the chances of an error that comes from accidentally using the wrong platform's API or property. However, you'll have to remember to apply changes and fixes to _each_ of the platform-specific files. So this approach could increase your work rather than reduce it.

See [Supporting Multiple Platforms in a Single Codebase](/guide/Titanium_SDK/Titanium_SDK_How-tos/Cross-Platform_Mobile_Development_In_Titanium/Supporting_Multiple_Platforms_in_a_Single_Codebase/) for more information and code examples.

### Don't store sensitive data in non-JavaScript files

Your JavaScript files are minified and obfuscated when you build for distribution. Depending on your target platform, they will be further processed and packaged into the compiled or "object-ified" files of your app. However, images, JSON files, SQLite databases, and other files not named with a .js extension are simply packaged as-is with your app's files.

APK and IPA files are essentially Zip files. Their contents can be revealed by any Zip-decompressor. Thus, your non-JavaScript files are accessible to the curious.

You should not include sensitive data in non-JS files. Simply renaming files with a .js extension is not a suitable alternative. Such files might not be supported on device. And, the Titanium build process removes them from the final build.

### Set local variables to avoid calling native methods

Each time you request the value of a device-related property, Titanium has to query the operating system for the value. For example, if you read from `Ti.Platform.osname` or `Ti.Platform.displayCaps.platformHeight`, Titanium must take a "trip across the bridge" to request the value from the operating system. Doing so takes a few cycles and if used too frequently could possibly slow your program. Something like the following would be more efficient:

```javascript
var isAndroid = (Ti.Platform.osname=='android') ? true : false;

if(isAndroid) {
  // do Android specific stuff
} else {
  // do iOS stuff
}
```

## App architecture recommendations

### Modular components with CommonJS

Appcelerator's primary recommended architecture a modular app architecture constructed with CommonJS modules. In fact, we have a whole Best Practices section devoted to [CommonJS Modules in Titanium](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/CommonJS_Modules_in_Titanium/). CommonJS modules are discrete and independent building blocks, eliminating concerns about global variables and naming conflicts. In our testing, it is a highly performant architecture compared to some other solutions. This pattern is also used by other JavaScript-based environments, such as Node.js.

**MyModule.js**

```javascript
// variables defined in this file are private
var defaultMessage = "Hello world";

// we make objects, variables, functions available to the
// calling context by adding them to the exports object
exports.sayHello = function(msg) {
  Ti.API.info('Hello '+msg);
};

// we can assign other objects, functions, and variables to
// exports and they will be available to the calling context
exports.helloWorld = function() {
  Ti.API.info(defaultMessage);
}
```

**app.js**

```javascript
var myModule = require('/MyModule');
myModule.sayHello('Kevin');  //console output is "Hello Kevin!"
```

Other architectures are valid and meet the needs of many developers. Which you choose is ultimately up to you and your experiences

#### Custom objects as components

Another popular pattern is one we teach in our training classes, that of custom objects typically stored within an app-specific namespace hierarchy. This model is flexible and well-suited to rapid deployment projects. It takes advantage of JavaScript's language features. Components are all members of the same global scope, thus sharing data within the app is simple. And when implemented well, this pattern can lead to very readable (and thus maintainable) code.

On the downside, this pattern is less performant than CommonJS modules. The rapid nature of this pattern can lead the developer to general, high-level bad practices and developer 'laziness'. Inheritance is vague or even non-existent. And critically, memory management can be difficult as object references can remain after they're no longer needed.

```javascript
// create an object literal to be your app's namespace
var myapp = {};

// the following could be in a separate "ui.js" file and include()'d into your app.js
(function() {
  myapp.ui = {}; // this sub-namespace extends the app's namespace object

  myapp.ui.createApplicationWindow = function() {
    var win = Ti.UI.createWindow({
      backgroundColor:'white'
    });

    var header = Ti.UI.createLabel({
      text: 'My App Heading',
      top: 10
    });
    win.add(header);
    return win;
  };
})();
```

The same could be accomplished without the self-calling function, if you prefer:

```javascript
// create an object literal to be your app's namespace
var myapp = {};

// the following could be in a separate "ui.js" file and include()'d into your app.js
myapp.ui = function() {
  var API = {
    createApplicationWindow: function() {
      var win = Ti.UI.createWindow({
        backgroundColor:'white'
      });

      var header = Ti.UI.createLabel({
        text: 'My App Heading',
        top: 10
      });
      win.add(header);
      return win;
    }
  }
  return API;
};
```

#### Classical-based patterns

In general, Appcelerator does not recommend classical-inheritance based models because JavaScript is not a class-based language. For an in-depth look at inheritance patterns in JavaScript, we recommend you read Douglas Crockford's [Prototypal Inheritance in JavaScript](http://crockford.com/javascript/prototypal.html) and [Classical Inheritance in JavaScript](http://crockford.com/javascript/inheritance.html) articles.

Classical inheritance is familiar for programmers coming from Java and other class-based languages. They rightly claim that this pattern enforces discipline and logically structured code that is generally easy to read, debug, and document. However, it's our belief that such a pattern confuses the idea of 'classes' and 'objects' in Javascript, forces the programmer to define his or her own inheritance rules, and is slower to implement in a rapid-prototype setting.

The code below is a fragment of this pattern:

```javascript
var SomeUIClass = function() {
  // ----- DEFINE PRIVATE PROPERTIES AND METHODS -----
  var UIGroup = Ti.UI.createView({ zIndex:5 }),
      UIBg = Ti.UI.createView({ borderRadius:10, opacity:0.2, width:150, height:150, backgroundColor:"#000" }),
      UIInd = Ti.UI.createActivityIndicator({ height:50, width:50, bottom:175, style:Ti.UI.iPhone.ActivityIndicatorStyle.BIG });

  // ----- DEFINE PUBLIC PROPERTIES AND METHODS -----

  // ----- Public Properties -----
  this.somePublicProp = null;

  // ----- Public Methods -----
  this.display = function() {};
  this.toggle = function(toggle) {};
};
```
