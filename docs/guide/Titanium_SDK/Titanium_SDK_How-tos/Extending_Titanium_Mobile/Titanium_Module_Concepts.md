---
title: Titanium Module Concepts
weight: '20'
---

# Titanium Module Concepts

The Titanium API is made up of _modules_\--collections of related methods, properties, and constants. There are several types of modules:

* The Titanium namespace is made up of built-in modules--modules such as `Titanium.UI` and `Titanium.Geolocation`. These modules are always available to Titanium applications.

* Packaged modules are optional extensions to the Titanium API that can be imported into your application using the `require`method. Packaged modules are imported using an identifier (such as `ti.map`). Packaged modules can include native code, JavaScript, or both.

* CommonJS modules can be used in your application to structure and organize code. Unlike packaged modules, CommonJS modules are not managed by the `titanium` command-line interface. To import a CommonJS module, you import it using the absolute or relative path to the module inside your project's `Resources` folder.

This section deals with extending the Titanium API by building packaged modules, which can be distributed through other means.

## Packaged Titanium modules

A packaged module is a module that can contain native code, JavaScript, or both. It is built, or packaged, for a specific platform--at this point, packaged modules are supported on Android and iOS. When you package a module, any native code is compiled and any JavaScript is obfuscated, so the module can be distributed without sharing your source code.

The Titanium CLI generates one module project for multiple platforms. The module project contains platform-specific resource folders, called `android` and `iphone`, as well as common resources for assets, documentation and examples.

Since packaged modules can contain native code, a module can generally do anything that native code can do. On Android and iOS, there are a number of special considerations for writing native code, as well as a set of module APIs for integrating with Titanium.

### Native modules

To write a native module for Android or iOS, you need to be familiar with several concepts:

* Proxies

* Native Module Objects

* Views and View Proxies

* Converting between JavaScript and native objects

* Events and Callbacks

* Threading

#### Proxies

A _proxy_ is a native object that exposes a JavaScript API. All proxy objects extend a specific proxy class (`TiProxy` on iOS, `KrollProxy` on Android), which provides a mechanism for binding native methods and properties to JavaScript.

In many cases, a proxy object is a wrapper, or proxy, for a native object such as a UI control.For example, the `Ti.UI.Button` object is a proxy object that wraps a native button control on iOS and Android. You can also create a proxy object to represent a complex data type that is shared between the JavaScript and native layers.

When you create an instance of a proxy object and return it to the JavaScript layer, the JavaScript engine creates a corresponding JavaScript object. When you call a method on the JavaScript object that's bound to a native method on the proxy object, the JavaScript engine invokes the native method. Likewise, when you access a property on the JavaScript object that's bound to a property on the proxy object, the JavaScript engine invokes a setter or getter for that property. For example, consider the following code:

```javascript
// 1. Create a proxy object
var win = Ti.UI.createWindow();
// 2. Set a property
win.title = "Hello World";
// 3. Call a method on the proxy.
win.open();
```

The following diagram represents what happens when this code is executed.

![create_proxy](./create_proxy.png)

Although the `win` object appears like an ordinary JavaScript object to a Titanium application, it is important to remember that there are actually two objects – the JavaScript object and the native proxy object. Only properties and methods that are bound to the native proxy object actually invoke calls to the native proxy. Setting an arbitrary property on an object after creation time will add the property to the JavaScript object, but _not_ the proxy object. Consider the following code:

```javascript
var win = Ti.UI.createWindow();
win.myProp = "Some other string";
win.title = "Hello World";
```

In this example, setting the `title` property on `win` causes the title to be set on the native window proxy, but the `myProp` property is only set on the JavaScript object, and is not passed to the native layer.

#### Native module objects

A _module_ object is the native representation of a Titanium module. It extends a native module type (`TiModule` on iOS, `KrollModule` on Android). This native module type inherits from the native proxy type – like a proxy, a module exposes a set of properties and methods to JavaScript. In addition, the native module object can have an assigned identifier – used to import the module with \`require\` – and a set of lifecycle events that the module can respond to.

Your packaged module can only contain a single native module class.

Every proxy object has a _parent_ module. The parent module usually exposes methods for creating its child proxy objects, like the `Ti.UI` module provides a `Ti.UI.createButton` method to create a `Ti.UI.Button` object.

#### Views and view proxies

For UI components, there are some additional classes you'll need to use. A view proxy is a special proxy type that extends `TiViewProxy`, which has additional properties and methods specific to the Titanium UI system. Each view proxy has a corresponding Titanium view type, which extends the `TiUIView` class. The view proxy provides a way for applications to interact with the view from JavaScript. The view object itself may be created and destroyed as needed – for example, the controls in a window don't need to be instantiated until the window is opened.

There are several special features about view and view proxies:

* When you set a property on the view proxy, the underlying native view may not exist. Therefore, the view proxy is responsible for maintaining the properties.

* When a view is created, it is initialized with the current set of properties stored by the view proxy.

* When a view proxy's properties are updated, the view is updated as well.

#### Converting between JavaScript and native objects

When you pass an object to a native method, or return an object from a native method or property to JavaScript, objects must be converted from JavaScript objects to native objects, and vice-versa.

Each native platform has its own set of helpers for converting between JavaScript objects and native objects. However, there are some similarities on both platforms:

* Primitive values, such as numbers, strings and arrays can be converted to their equivalent values.

* Plain JavaScript objects can be converted to native dictionary objects (Java `HashMap` or Objective-C `NSDictionary`, for example).

* More complex types can be passed by creating a special proxy class to represent them.

#### Events and callbacks

When performing an asynchronous operation, you can send data back to the JavaScript layer using events or callbacks.

* An _event_ results in an event listener function being called on all registered listeners.

* A _callback_ invokes a specific JavaScript function.

Because events can have multiple registered listeners, they are somewhat more flexible than callbacks.

#### Threading

JavaScript is inherently single-threaded; it provides no mechanisms for synchronizing between multiple threads. However, the native platforms support multiple threads. In both iOS and Android, an application has a single main thread (or UI thread), which is the only thread allowed to interact with native UI elements. This thread is separate from the JavaScript runtime thread, so both iOS and Android provide methods for executing code on the main thread. Doing anything time-consuming on the UI thread can cause the UI to freeze up, so you should only use the UI thread when necessary:

* Use the UI thread when directly manipulating native UI elements.

* Avoid blocking the UI thread for any reason.

When performing a long-running task in native code, you can spawn a thread or use a native API that is asynchronous. You can deliver results back to the JavaScript runtime thread by calling a callback method or firing an event. Callback functions and event listeners are invoked on the JavaScript runtime thread.

::: warning ⚠️ Warning
On the iOS platform, each JavaScript context operates in its own thread. If you create a `Window` using the `url` property, the window runs in a separate context _and in a separate thread_. For this reason, when communicating between JavaScript contexts on iOS, you should only pass serializable JavaScript objects, _not_ functions or proxy objects.

When calling a callback from a module, the callback is invoked on the appropriate JavaScript runtime thread. When you fire an event from your module, the event listener function is called on the thread where the listener was added. (Potentially, this means that the same event could be delivered on multiple threads if your application has multiple contexts, each with a listener defined for that event.)
:::

### Packaged JavaScript and hybrid modules

To package JavaScript as a native module, create a JavaScript module named `<module-id>.js` in the module's `assets` folder. The APIs exported by this module form the API of the packaged module.

For Android and iOS modules, the module must be formatted as a CommonJS module.

You can place additional JavaScript CommonJS modules in the assets folder and import them into your main module using `require`.

If your module includes both JavaScript and native code, the native and JavaScript module contents are merged when the module is packaged. For example, if your native module exposes a `createView` method, and you have a JavaScript module that exposes a `animateView` method, both of these methods are available on your module:

```javascript
var myModule = require("com.example.module");
var view = myModule.createView({ width: 200, height: 200 });
win.add(view);
myModule.animateView(view);
```
