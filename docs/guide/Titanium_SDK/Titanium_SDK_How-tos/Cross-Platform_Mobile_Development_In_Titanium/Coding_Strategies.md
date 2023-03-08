---
title: Coding Strategies
weight: '40'
---

# Coding Strategies

## Objective

In this chapter, you will examine techniques for writing large JavaScript applications within the Titanium environment. You'll look also at some coding strategies that will help you organize your code, reduce repetition, and ease development and maintenance.

## Contents

For many programmers, their first Titanium app is also their first experience with a large JavaScript project. While most have experience with browser-based JavaScript for adding client side interactivity, few have built entire applications using it. As you grow as a Titanium developer, you will find that a bevy of globally scoped functions and variables will quickly become unmanageable.

Let's take a look at the coding principles and application structures to which you should adhere to create high quality Titanium apps. In addition, we'll take a brief look at some community-supplied frameworks that are available to improve the structure and scalability of your Titanium projects.

### Coding principles

When writing JavaScript for your Titanium apps, you should strive to achieve these programming principles:

* Protect the global scope

* Keep your code DRY

* Use a single execution context

#### Global scope

JavaScript has a limited notion of [scope](http://en.wikipedia.org/wiki/Scope_(computer_science)), with variables too often being dumped into one global context. In fact, the only [scope](http://eloquentjavascript.net/chapter3.html#key10) besides global that JavaScript supports is functional scope. This means that the scope of your variables and functions can be contained within other functions. For example, here's a simple case where functional scope is used to keep temporary variables from polluting the global scope. We make use of an immediate function to execute our code:

```javascript
var sum = (function() {
    var tmpValue = 0;
    for (var i = 0; i < 100; i++) {
        tmpValue += i;
    }
    return tmpValue;
})();
```

Now we have the computed value in our `sum` variable, and the `tmpValue` and `i` variables are no longer part of the scope as they were contained within the functional scope of our immediate function.

In addition to its concept of scope, JavaScript is also quite flexible in that it is loosely typed. This means that you can repurpose objects, including variables and functions, at any time in your code via assignment. But as I'm sure you've heard before, with great power comes great responsibility. If we are not careful with the management of our code, the power of JavaScript's expressive code can cause just as many problems as it solves.

We touched on protecting the global scope in the [JavaScript Development Primer](/guide/Titanium_SDK/Titanium_SDK_Guide/Welcome_To_Titanium/JavaScript_Development_Primer/) chapter. As we stated there, a much better approach than global variables/functions is to enclose all your application's API functions and properties into a single variable ([namespace](http://en.wikipedia.org/wiki/Namespace_(computer_science))). This will minimize the chances of your code colliding with other code or libraries.

To refresh your memory on creating namespaces to protect the global scope, here's the example we gave back in the Primer chapter:

```javascript
// Define a single namespace to hold all your variables, it's the only global variable
var myapp = {};
myapp.key = "value";

/* Or, define the namespace and a few variables all at once with
var myapp = {
    key: 'value',
    foo: 'bar',
    charlie: 'horse'
};
*/

// add a function to your namespace
myapp.dosomething = function(foo) {
    // do something
};

// extend and encapsulate by using self-calling functions
(function() {
    function helper() {
        // this is a private function not directly accessible from the global scope
    }

    myapp.info = function(msg) {
        // added to the app's namespace, so a public function
        helper(msg);
        Ti.API.info(msg)
    };
})();
// you could then call your function with
myapp.info('Hello World');
```

#### Stay DRY

By DRY, we mean "don't repeat yourself." The less you repeat code, the easier it is to write, maintain, and fix that code. There are many techniques that will help you keep your code DRY. Among these are creating [factory methods](http://en.wikipedia.org/wiki/Factory_method_pattern) for instantiating program components, capitalizing on JavaScript's [inheritance](http://javascript.crockford.com/prototypal.html) model, and creating libraries of [reusable modules](http://vimeopro.com/appcelerator/forging-titanium/video/27447911).

#### Execution contexts

If you've ever created web pages, you know that JavaScript variables on one page have no access to the JavaScript variables on another. You have to take special steps – setting and getting POST or GET parameters, using cookies, or some similar measure – to get data from one page to another. Each page has its own global variable, which is cut off from that of any other page. We say each page runs in its own "execution context."

By default, a Titanium SDK application has a single execution context in which it runs. Your application's app.js file bootstraps your application and serves as the root context. Your application can have multiple execution contexts (but as we'll show, you generally don't want it to). New execution contexts are typically created by opening a new window that points to an external URL in its `url` property:

**app.js**

```javascript
Ti.UI.createWindow({
  url:'window.js'
}).open();
```

When the window is opened, the script window.js is immediately run in a new execution context. If the preceding code were run in app.js, any variables or function declarations made in app.js would be unavailable within window.js. Try it:

1. Create a new Titanium SDK project.

2. In app.js, cut the following text and paste it into a new file named win1.js:

    **win1.js**

    ```javascript
    var label1 = Titanium.UI.createLabel({
      color:'#999',
      text:'I am Window 1',
      font:{fontSize:20,fontFamily:'Helvetica Neue'},
      textAlign:'center'
    });

    win1.add(label1);
    ```

3. Then, update the code that defines win1, like this:

    **app.js**

    ```javascript
    var win1 = Titanium.UI.createWindow({
        title:'Tab 1',
        backgroundColor:'#fff',
      url:'win1.js'
    });
    ```

4. Build your project for the simulator/emulator. You'll receive an error that `win1` is undefined in the win1.js file. The `win1` variable is defined in app.js, which is a separate context. Let's fix that.

5. In win1.js, add this statement at the top:

    **win1.js**

    ```javascript
    var win1 = Ti.UI.currentWindow;
    ```

6. Build your project for the simulator/emulator and this time it will run without errors. To pass data into a separate context, you can add custom properties to your window object.

7. In app.js, update the code to read:

    **app.js**

    ```javascript
    var win1 = Titanium.UI.createWindow({
        title:'Tab 1',
        backgroundColor:'#fff',
      url:'win1.js',
      mylabel:'Hello from app.js'
    });
    ```

8. Then, in win1.js, update the code to read:

    **win1.js**

    ```javascript
    var label1 = Titanium.UI.createLabel({
      color:'#999',
      text:win1.mylabel,
      font:{fontSize:20,fontFamily:'Helvetica Neue'},
      textAlign:'center'
    });
    ```

9. Build your project for the simulator/emulator. The custom window property you set in app.js is available within the win1.js context and is used as the label's text.

It is possible to communicate across execution contexts using application-level events. Using Titanium's custom event API, arbitrary JavaScript data structures can be sent and received in different execution contexts. Note that the 'payload' of your event must be JSON serializable, so business objects will not preserve any instance methods associated with them. The APIs used to fire and receive events are in the Ti.App namespace.

Let's modify the project you just used to demonstrate multiple contexts.

1. In win1.js, add this code:

    **win1.js**

    ```javascript
    label1.addEventListener('click', function() {
      Ti.App.fireEvent('app:labelclicked', {newlabel:'Sent from win1.js'});
    });
    ```

2. Back in app.js, scroll down to find the `label2` code. This code is in the app.js context, walled off from the win1.js context. We'll add an event listener here to update the text of `label2` when label1 is clicked. Add this code after `label2`:

    **app.js**

    ```javascript
    Ti.App.addEventListener('app:labelclicked', function(e) {
      label2.text = e.newlabel;
    });
    ```

3. Build your project for the simulator/emulator. Click the label on tab 1. Switch to tab 2 and the label should now read 'Sent from win1.js'.

##### Should I use a single context or multiple contexts?

As is often the case in software development, the answer is "that depends". Most of the time, we recommend you use a single execution context for these reasons:

* You can pass complex objects easily within your app's single context — With events, you can pass JSON-serializable objects, but not objects with methods.

* You include your libraries/dependencies only once, since there's only one context — With multiple contexts, each file would need to include your libraries/dependencies, increasing memory usage.

* In most of the projects done by Appcelerator's own Professional Services team on Titanium SDK, a single execution context with multiple included external files is used. However, there are instances where having multiple execution contexts is useful. For example, in our Kitchen Sink application, it is advantageous to have a 'clean slate' for every API usage example, so we don't have to worry about polluting the global scope and can keep the examples easy.

### Creating High Quality JavaScript Based Apps

Let's recap: keep your code DRY, don't pollute the global scope, and strive for a single context app. We offer a couple of techniques you can use to meet these goals:

* Namespaced pattern with self-calling functions

* CommonJS modules

(These aren't formal [design patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/), but important development concepts for JavaScript and Titanium developers.)

#### Namespaced pattern with self-calling functions

A technique we teach in our classroom training sessions involves breaking your app into modular pieces, each constructed using [self-calling functions](http://2007-2010.lovemikeg.com/2008/08/17/a-week-in-javascript-patterns-self-invocation/) which modify a single app namespace. (If you want to be semantically-correct, these are [Immediately Invoked Function Expressions](http://benalman.com/news/2010/11/immediately-invoked-function-expression/), or IIFEs.) This technique lets you divide code into multiple files, each focused on a discrete purpose. As each library is loaded, it modifies the app's namespace object, which is the only variable added to the global namespace. Let's demonstrate this with code:

**app.js**

```javascript
// create an object literal to be your app's namespace
var myapp = {};
// include necessary libraries
Ti.include('ui.js');

// instantiate and open the main UI component of our app
myapp.mainWindow = myapp.ui.createApplicationWindow();
myapp.mainWindow.open();
```

The ui.js library file contains the code that constructs your app's user interface.

**ui.js**

```javascript
// create a self-calling function
(function(){
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

You would add other libraries, as necessary, to round out the functionality of your app. For example, you might put all your database code in a `db.js` file, your network code in a `network.js`, and so forth. You can include multiple libraries in a single `include` call, or make a separate call to `include` for each library. We recommend you keep namespace variable names short: you'll be typing them a lot. Use function names that describe their purpose and return value. Take `createApplicationWindow()` as an example. It "creates" a "window" and the middle part describes what type of window it's creating. The purpose of the function is clear just by reading its name.

A good example of an app that uses this namespaced pattern is [Tweetanium Mobile](https://github.com/appcelerator-titans/tweetanium). We encourage you to download that and study the way that app is put together.

(As presented here, this is not officially an implementation of the formal [modular pattern](http://addyosmani.com/largescalejavascript/#modpattern). But it would not be too difficult to adapt the code presented here to match that design pattern.)

#### CommonJS modules

Titanium SDK is moving toward the adoption of the [CommonJS](http://www.commonjs.org/) module specification as the way in which developers should structure their JavaScript code. While CommonJS Modules are a "standard" [specification](http://wiki.commonjs.org/wiki/Modules/1.1), there are differences in implementation across multiple technology stacks. The aim of this specification is to delineate what is and is not supported by the Titanium SDK implementation of this spec, starting in 1.8 and moving forward.

##### Definitions

* **Module** - Any CommonJS-compliant module which will be consumed in a Titanium SDK application. This can be a JavaScript file included with an application, or a native extension to Titanium which exposes a JavaScript API.

* **Resources** - The Resources directory of a Titanium application, where the user's source code lives before any processing by our build system.

* `exports` - a free variable within a module, to which multiple properties may be added to create a public interface

* `module.exports` - an object within a module, which may be REPLACED by an object representing the public interface to the module

Our specific implementation of the [CommonJS Module Specification](http://wiki.commonjs.org/wiki/Modules/1.1) is based on (and the early implementation on Android taken directly from) that of [Node.js](http://nodejs.org/docs/v0.6.0/api/modules.html). While we should not consider our implementation a direct clone of node, we should favor node conventions where possible to foster reuse of modules across both environments.

##### Basic usage

In order to use a module within Titanium, you must use the `require()` function, which is built in to the global scope in every JavaScript context.

```javascript
var myModule = require('/MyModule'); // don't include the ".js" extension!
```

The string passed to `require()` is the path to and base name of the JavaScript module to load. We recommend that you use absolute paths, where `/` corresponds to your app's Resources directory, to make sure Titanium can locate and load your module. The `require()` function returns a JavaScript object, with properties, functions, and other data assigned to it which form the public interface to the module. If the module we loaded into the application above exposed a function `sayHello()`, which would print a name and a welcome message to the console, it would be accessed in this way:

```javascript
var myModule = require('/MyModule');
myModule.sayHello('Kevin');
//console output is "Hello Kevin!"
```

##### JavaScript Module Composition

As in the [CommonJS Module specification](http://wiki.commonjs.org/wiki/Modules/1.1), inside the module's JavaScript file, there will be a special variable called `exports` to which properties may be added for the public interface of the module. Anything assigned to it will be available in the calling context as a property of the returned object.

**MyModule.js**

```javascript
// variables defined in this files are private
var defaultMessage = "Hello world";

// we make objects, variables, functions available to the
// calling context by adding them to the exports object
exports.sayHello = function(msg) {
  Ti.API.info(msg);
};

// we can assign other objects, functions, and variables to
// exports and they will be available to the calling context
exports.helloWorld = function() {
  Ti.API.info(defaultMessage);
}
```

Alternately, if the module author wishes to make the exported value from the module an object of their own design and choosing, there is a non-standard (but common, as with Node.js) extension to the Module specification which allows for this. The `module.exports` object is available within the module file, and may be assigned any value which the developer would like to return from the `require` function for their module. This is most commonly used for functions which act as object constructors. The following would be a typical use case for this:

```javascript
function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName+' '+this.lastName;
};

module.exports = Person;
```

Usage:

**Resources/app.js**

```javascript
var Person = require('Person');
var fred = new Person('Fred','Flintstone');
var fredsName = fred.fullName(); // "Fred Flinstone"
```

(You should not mix and match usage of `module.exports` and `exports.*`.)

CommonJS is being rapidly and widely adopted by professional JavaScript programmers. It is implemented in high-profile projects like [Node.js](http://nodejs.org/), NarwhalJS, [SproutCore](http://www.sproutcore.com/), and more. Much of the code currently being written by our team members follows the CommonJS `require()` module pattern. We encourage you to use this pattern in your Titanium projects.

Some additional CommonJS resources we recommend you check out are:

* [CommonJS Modules in Titanium](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/CommonJS_Modules_in_Titanium/)

* [Forging Titanium Episode 1: CommonJS Modules](http://vimeopro.com/appcelerator/forging-titanium/video/27447911)

* [ToDoList Sample App](https://github.com/appcelerator-titans/TodoList)

### Model-View-Controller using the Alloy Framework

The Alloy framework provides an alternate model for developing Titanium applications. Alloy is a Model-View-Controller (MVC) framework for Titanium that allows you to define UI elements in declarative markup, instead of code. For more information, see:

* [Alloy Framework](/guide/Alloy_Framework/)

## Hands-on Practice

### Goal

In this activity, you will create a project in which you first implement the self-calling function pattern. Then, you'll refactor the code to implement the CommonJS module pattern.

### Steps

**Part A**

1. Create a new project. Delete the default content of app.js.

2. Using the module/self-calling technique outlined above, write an app that:

    * Defines a single, hierarchical namespace such that only one variable is added to the global namespace

    * Opens a window with a red background.

    * Includes a single label with white text, centered at the top of the window. Use the label text of your choice.

    * Includes a method to update the label's text. Use `setTimeout()` to update the label with new text after a few second delay.

    * If you implement this app in multiple files, add the necessary `Ti.include()` statement to import them all.

3. Build and test your app in the simulator/emulator.

**Part B**

1. Refactor the code to use the CommonJS `require()` technique. Your app should still only define a single, hierarchical namespace such that only one variable is added to the global namespace.

2. Build and test your app in the simulator/emulator.

### References and Further Reading

* Finished code for [Part A](http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/2.3_codingpatterns_A.zip) and [Part B](http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/2.3_codingpatterns_B.zip)

* [CommonJS Modules in Titanium](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/CommonJS_Modules_in_Titanium/) (Titanium SDK best practices guide)

* [Functional JavaScript](http://www.hunlock.com/blogs/Functional_Javascript)

* Video: [Douglas Crockford on JavaScript functions](http://yuilibrary.com/theater/douglas-crockford/crockonjs-3/)

* [Module Pattern](http://yuiblog.com/blog/2007/06/12/module-pattern/)

* [Essential JavaScript Design Patterns ebook](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

* [Patterns For Large-Scale JavaScript Application Architecture](http://addyosmani.com/largescalejavascript)

* [Immediately Invoked Function Expressions](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

## Summary

In this chapter, you examined techniques for writing large JavaScript applications within the Titanium environment. You also looked at some coding patterns that can help you organize your code, reduce repetition, and ease development and maintenance. Next we'll look at how we can developer Titanium apps for multiple mobile platforms with a single code base.
