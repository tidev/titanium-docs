---
title: Android Module Architecture
weight: '20'
---

# Android Module Architecture

## Introduction

The Titanium SDK is based on a modular architecture, which can be utilized to extend the SDK by building modules. The module architecture contains the following key interface components:

* **Proxy**: A base class that represents the native binding between your JavaScript code and native code

* **Module**: A special type of Proxy that describes a specific API set or namespace

* **ViewProxy**: A specialized Proxy that knows how to render Views

* **View**: The visual representation of a UI component which Titanium can render

When building a Module, you can only have one Module class but you can have zero or more Proxies, Views and ViewProxies.

To return visual data between JavaScript and native code, create a View and a ViewProxy. Each View requires a View Proxy. The ViewProxy represents the model data (which is kept inside the proxy itself in case the View needs to be released) and is responsible for exposing the APIs and events that the View supports.

To return non-visual data between JavaScript and native code, create a Proxy. The Proxy knows how to handle any method and property, and dispatching and firing events.

These components require special class names and method signatures. Each components is described in further detail below.

## Module

A Module is a class that provides an API point with a particular ID. That ID can then be used to `require` the module from JavaScript.

All modules must extend the `KrollModule` class and have the `@Kroll.module` annotation. All module class names and file names must have the `Module` suffix.

```
package com.example.actionbarsearch;

import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;

@Kroll.module(name="Actionbarsearch", id="com.example.actionbarsearch")
public class ActionbarsearchModule extends KrollModule
{

}
```

The `id` annotation element specifies the identifier used with `require` to import the module. In this case, the JavaScript to require the module would look like this:

```javascript
var actionBarSearch = require("com.example.actionbarsearch");
```

The module must have a default constructor (that is, one that takes no arguments).

A module can also have a parent module: `Titanium.UI` and `Titanium.App` are children of the Titanium module.

The `@Kroll.module` annotation can also contain a `propertyAccessors` element, which defines a set of properties exposed by the module. See [Properties](#properties) for more information.

### Module lifecycle events

The module provides several places for you to hook into the application's lifecycle.

Use the `@Kroll.onAppCreate` annotation to declare a method to be called when the application object is created. This is optional and is only required if you have any application specific initialization, such as starting up a service that is required by the module.

The app create method is called during application startup. It is only called once, before your module is actually loaded.

```
@Kroll.onAppCreate
public static void onAppCreate(TiApplication app)
{
  Log.d(LCAT, "[MODULE LIFECYCLE EVENT] onAppCreate notification");
}
```

The module also provides callbacks that are invoked when the application's root activity is started, stopped, paused, or resumed.

::: tip 💡 Activity Lifecycle Events
Note that on Titanium applications, the root activity is the one that displays the splash screen. If the first UI component is a heavyweight Window (window with its own activity) or TabGroup, not all of the activity lifecycle events may fire for the root activity. Note that since Release 3.2.0, all Window objects are heavyweight and have their own activity associated with it.

To have the module respond to the activity lifecycle events of a specific activity of a TabGroup or Window in the JavaScript application, override the activity lifecycle callbacks of a module proxy, then associate the proxy with the Window or TabGroup whose lifecycle events you want to monitor when you create the proxy in the JavaScript application. For details, see [Activity Lifecycle Events](#ActivityLifecycleEvents) below.
:::

### Get the current activity

To get access to the current activity, first use TiApplication's getInstance() method, and then use the getCurrentActivity() method:

```
TiApplication appContext = TiApplication.getInstance();
Activity activity = appContext.getCurrentActivity();
```

## Proxy

A Proxy can expose methods, properties, and constants to JavaScript. Each of these can be a primitive type, or a proxy. Proxies also have built-in event management primarily through `fireEvent` and `hasListeners`.

A proxy must extend [KrollProxy](http://docs.appcelerator.com/module-apidoc/latest/android/org/appcelerator/kroll/KrollProxy.html) and have the `@Kroll.proxy` annotation. All proxy class names and file names must have the `Proxy` suffix.

```
package com.example.test;

import org.appcelerator.kroll.KrollProxy;
import org.appcelerator.kroll.annotations.Kroll;

@Kroll.proxy
public class ExampleProxy extends KrollProxy
{

}
```

To automatically generate a "create" method on a parent module, assign the parent module class to the `@Kroll.proxy creatableInModule` annotation element. For example, the following code will expose the `createExample()` method to JavaScript in the TestModule:

```
package com.example.test;

import org.appcelerator.kroll.KrollProxy;
import org.appcelerator.kroll.annotations.Kroll;
@Kroll.proxy(creatableInModule=TestModule.class)
public class ExampleProxy extends KrollProxy
{

}
```

### Methods

Methods of a proxy or module are exposed with the [@Kroll.method](http://docs.appcelerator.com/module-apidoc/latest/android/org/appcelerator/kroll/annotations/Kroll.method.html) annotation. A simple example:

```
@Kroll.method
public String getMessage() {
    return "Hello World";
}
```

You can specify the method parameters in one of two ways:

* Specify parameters explicitly. In this case, the Titanium attempts to validate and convert types before calling the method.

* Specify a single `Object[]` argument. Your method must validate parameters and convert types manually at runtime.

If you specify parameters explicitly _and_ one or more parameters are optional, they must be identified using the `@Kroll.argument` annotation:

```
@Kroll.method
 public void switchView(@Kroll.argument(optional=true) boolean animate) {
    // do something.
 }
```

If one argument is optional, all subsequent arguments must be marked as optional as well.

For methods with a variable number of arguments, specify the signature as taking a single array argument, and check the number and type of the arguments at runtime.

```
@Kroll.method
 public HashMap doSomething(Object[] args) {
    // check and convert arguments
 }
```

For information on runtime type checking and type conversions, see [Type Conversions](#TypeConversions).

If you want to the method name exposed to JavaScript to differ from method name in Java, use the optional `name` element in the `@Kroll.method` annotation to specify the JavaScript method name:

```
@Kroll.method(name="setTab")
public void setTabProxy(TiViewProxy tabProxy)
{
    setParent(tabProxy);
    this.tab = tabProxy;
}
```

### Properties

Each proxy object maintains an internal dictionary of properties. Properties can be exposed to JavaScript in one of two ways:

* Creating custom getter and setter methods. When you create a custom getter and setter methods, you can perform data validation, and take actions when the properties are set.

* Specifying a list of properties in the `@Kroll.proxy` or `@Kroll.module` annotation with the `propertyAccessors` element. This automatically generates getter and setter methods for each of the named properties.

When you use custom getter and setter methods, you are responsible for storing property values in whatever way you want.

Auto-generated property accessors store property values in the internal dictionary. The proxy class provides a set of methods for accessing the proxy's property dictionary from Java:

* Retrieve the value of a single property using `getProperty()`.

* Set an individual property using `setProperty()`.

* Retrieve the entire dictionary using `getProperties()`.

In addition, you can register a _model listener_ – another Java object that receives updates whenever a value is set in the property dictionary. This pattern is commonly used for views and view proxies.

Using custom getter and setter methods is somewhat simpler, and is described first. Subsequent sections describe exposing properties using `propertyAccessors`, and responding to property changes using a model listener.

#### Custom accessor methods

Properties are exposed as a pair of getter and setter methods with the `@Kroll.getProperty` and `@Kroll.setProperty` annotations. This method is very straightforward, but involves writing boilerplate code for each property.

The following example exposes a writable `message` property to JavaScript.

```
private String myMessage;

@Kroll.getProperty
public String getMessage() {
    return myMessage;
}

@Kroll.setProperty
public void setMessage(String message) {
    Log.d(TAG, "Tried setting message to: " + message);
  myMessage = message;
}
```

Note the following two points:

* If there were no paired `@Kroll.setPropert`y method, the `message` property would be read-only.

* You are responsible for storing and retrieving the value. It can be stored in an instance variable (as in the example) or in the internal property dictionary.

In JavaScript, we can now access `message` as a property:

```javascript
var calc = require("module.id");
calc.message = "hi";

console.log("calc.message = " + calc.message);
```

The `@Kroll.getProperty` and `@Kroll.setProperty` annotations support an optional `name` element, which specifies the name of the property. If name is not set, the name of the property is constr

#### propertyAccessors annotation element

You can also define a a set of properties in your `@Kroll.proxy` or `@Kroll.method` annotation using the `propertyAccessors` element, and the accessors will be automatically generated for you:

```
@Kroll.proxy(creatableInModule = ActionbarsearchModule.class,
             propertyAccessors = { "hintText", "value" })
```

In this case, the proxy has two properties, `hintText` and `value`, each with corresponding setter and getter methods, such as `setHintText` and `getValue`. These properties are stored in an internal dictionary. You can query properties using `getProperty` `()` or retrieve the entire dictionary using `getProperties` `()`.

When you define properties this way, you'll usually want to add a model listener to respond to property changes. When you set a property using the generated getter and setter methods, the model listener is automatically notified.

::: warning ⚠️ Warning
If you define properties using the `propertyAccessors` element, you **cannot** override the accessors by defining custom accessor methods. Doing so causes module packaging to fail with a cryptic error. For each property, you must use _either_ `propertyAccessors` or custom accessors, but not both.
:::

#### Handle property changes using the model listener

In most cases, you'll want to _do something_ when the property is set. For this reason, you can use a `KrollProxyListener`, which receives events when the proxy's properties change.

The model listener pattern is typically used for views, so that property changes can be delegated from the view proxy to the view object.

To add a listener, call the proxy's `setModelListener()` method:

```
setModelListener(delegate);
```

In the case of view proxies, the view object is automatically added as a model listener. An instance of the `KrollModule` class acts as its own model listener, providing a convenient mechanism for handling property changes inside a module.

The `KrollProxyListener` interface defines four methods that you need to implement:

| Method | Description |
| --- | --- |
| listenerAdded | Called when an event listener is added to the proxy. |
| listenerRemoved | Called when an event listener is removed from the proxy. |
| processProperties | Called when the model listener is added, with a complete set of the proxy's properties. |
| propertyChanged | Called when one of the proxy's properties changes. |

To handle properties, you must add logic to `processProperties` and `propertyChanged` for each property you support. The `processProperties` method receives a dictionary of properties:

```
@Override
public void processProperties(KrollDict props) {
  super.processProperties(props);
  if (props.containsKey("hintText")) {
      searchView.setQueryHint(props.getString("hintText"));
    }
  if (props.containsKey("value")) {
    searchView.setQuery(props.getString("value"), false);
  }
}
```

The `propertyChanged` method is fired whenever a property is invoked _after_ the initial call to `processProperties`.

```
@Override
public void propertyChanged(String key, Object oldValue, Object newValue, KrollProxy proxy) {
  if (key.equals("hintText")) {
    searchView.setQueryHint((String) newValue);
  } else if (key.equals("value")) {
    searchView.setQuery((String) newValue, false);
  }
}
```

You can set properties programmatically on the proxy using either `setProperty()`or `setPropertyAndFire()`. Both methods update the property dictionary and make the new property value visible to JavaScript. The `setPropertyAndFire()` method also invokes the `propertyChanged` callback on the model listener. In the case of a view proxy, you would typically call `setProperty` to make a value from the native view object visible to the JavaScript layer: for example, when the user sets the text value in a text field, you want to make the value available to JavaScript_._ There is no need to fire the `propertyChanged` callback, since the model listener itself (the view object) is generating the change.

You can also use custom accessor methods when using the model listener. In this case, you'd define the property getter and setter methods using the `@Kroll.setProperty` and `@Kroll.getProperty` annotations instead of listing the property in the `propertyAccessors` element. You can do this if you want to validate or transform the value, or if you want to provide optional arguments in the setter. In the setter, you can then call `setPropertyAndFire` to store the value and notify the model listener.

```
@Kroll.getProperty
public String getMessage() {
        return getProperty("message");
}
@Kroll.setProperty
public void setMessage(String message) {
    // validate or transform the value
    ...
    // store the value and fire the callback
    setPropertyAndFire("message", message);
}
```

### Constants

A constant is simply a static property on a `@Kroll.module`. Annotate the property with `@Kroll.constant`and declare it as both `static` and `final`.

```
@Kroll.module
public class CalcModule extends KrollModule {
    @Kroll.constant
    public static final int ONE_HUNDRED = 100;
}
```

The constant can now be referred to directly from JavaScript:

```
calc.ONE_HUNDRED == 100.
```

### Type conversions

Type conversions can be handled implicitly (through a method signature) or you can explicitly cast Objects to the correct types.

The `TiConvert` class provides a set of helper methods for casting Objects to specific types.

The JavaScript, Number, String, Array, Date can be converted into the corresponding Java types, either implicitly or explicitly, as shown in the following table:

| JavaScript Type | Java Type | Explicit Conversion |
| --- | --- | --- |
| Number | int | [TiConvert.toInt](http://builds.appcelerator.com.s3.amazonaws.com/module-apidoc/2.0.0/android/org/appcelerator/platform/util/TiConvert.html#toInt(java.lang.Object)) |
| Number | float | [TiConvert.toFloat](http://builds.appcelerator.com.s3.amazonaws.com/module-apidoc/2.0.0/android/org/appcelerator/platform/util/TiConvert.html#toFloat(java.lang.Object)) |
| Number | double | [TiConvert.toDouble](http://builds.appcelerator.com.s3.amazonaws.com/module-apidoc/2.0.0/android/org/appcelerator/platform/util/TiConvert.html#toDouble(java.lang.Object)) |
| boolean | boolean | [TiConvert.toBoolean](http://builds.appcelerator.com.s3.amazonaws.com/module-apidoc/2.0.0/android/org/appcelerator/platform/util/TiConvert.html#toBoolean(java.lang.Object)) |
| String | String | [TiConvert.toString](http://builds.appcelerator.com.s3.amazonaws.com/module-apidoc/2.0.0/android/org/appcelerator/platform/util/TiConvert.html#toString(java.lang.Object)) or Cast |
| Object | HashMap<String, Object> | Cast |
| Array | Object\[\] | Cast |
| Date | Date | [TiConvert.toDate](http://builds.appcelerator.com.s3.amazonaws.com/module-apidoc/2.0.0/android/org/appcelerator/platform/util/TiConvert.html#toDate(java.lang.Object)) or Cast |
| Ti.Blob | TiBlob | [TiConvert.toBlob](http://builds.appcelerator.com.s3.amazonaws.com/module-apidoc/2.0.0/android/org/appcelerator/platform/util/TiConvert.html#toBlob(java.lang.Object)) or Cast |
| Ti.Filesystem.File | FileProxy | Cast |

For example, if you declare a method with int values in the signature, the JavaScript Number values passed in will be converted to Java integers implicitly:

```
@Kroll.method
public int multiply(int a, int b)
{
  return a * b;
}
```

The same method with explicit type conversion would look like this:

```
@Kroll.method
public int multiply(Object a, Object b)
{
  int aval = TiConvert.toInt(a);
  int bval = TiConvert.toInt(b);
  return aval * bval;
}
```

#### Files and blobs

When a JavaScript Titanium object is passed to Java, the Java method receives a reference to the associated proxy object. Among the most common of these proxy objects are the File and Blob objects.

The Titanium.Blob JavaScript object is represented by an instance of the `TiBlob`class. Use `TiBlob` in method signatures where you want to accept or return a Blob.

```
@Kroll.method
public void addBlob(TiBlob blob)
```

To return a Blob from Java, create and return an instance of `TiBlob`. The `TiBlob` class provides factory methods to create a `Blob` from a byte array, File, String, or an Android Bitmap. For example, the following code returns a blob representing a bitmap:

```
@Kroll.method
public TiBlob loadImage()
{
  return TiBlob.blobFromImage(myBitmap);
}
```

The ModDevGuide project includes sample code for retrieving a bitmap from resources.

A Titanium File object is passed into Java as a `FileProxy`. Use a `TiBaseFile` object to get an instance of FileProxy given a `TiBaseFile`, and vice versa. Many APIs use the `TiBaseFile` object internally to manipulate files, and you can easily construct a FileProxy from a TiBaseFile

The following example shows one way to create a `TiBaseFile` using `TiFileFactory`, and use the new instance to construct a `FileProxy`:

```
TiBaseFile file = TiFileFactory.createTitaniumFile(new String[] { url }, false);
FileProxy fileProxy = new FileProxy(file);
```

You can retrieve the associated `TiBaseFile` from a `FileProxy` using `getBaseFile`:

```
TiBaseFile file = fileProxy.getBaseFile();
```

### Activity lifecycle events

Starting with Titanium SDK 4.0.0, a proxy can respond to [activity lifecycle events](http://developer.android.com/reference/android/app/Activity.html#ActivityLifecycle) by overriding the activity lifecycle callbacks, then in the JavaScript application, assign either a Window or TabGroup object to the proxy's `lifecycleContainer` property when creating the module proxy to monitor the lifecycle events of that object to trigger the module proxy's lifecycle events.

First, in the module proxy, override the activity lifecycle callbacks you want to respond to, such as `onCreate`, `onStart`, `onRestart`, `onResume`, `onPause`, `onStop` or `onDestroy`.

**ExampleProxy.java**

```java
@Override
    public void onResume(Activity activity) {
        Log.d(LCAT, "onResume called");
        loadState();
    }

    @Override
    public void onPause(Activity activity) {
        Log.d(LCAT, "onPause called");
        saveState();
    }
```

Then, in the JavaScript application, when you create the module proxy, assign its `lifecycleContainer` property to either a Window or TabGroup object to listen for that object's lifecycle events to trigger the module proxy's activity lifecycle callbacks.

**app.js**

```javascript
var win = Ti.UI.createWindow();
var foo = require('com.appc.foo');
var fooProxy = foo.createExample({lifecycleContainer: win});
win.open();
```

## View Proxy and View

To display UI elements with a module, create both a View Proxy and a View. A View Proxy is a special Proxy that is used for Views — objects which interact with the UI to draw things on the screen. The View Proxy is for exposing methods and properties of the view to JavaScript (just as a normal proxy would do), while a View acts as a model listener for the View Proxy. The view implementation is responsible for taking data from the view proxy, and applying it directly to the native [View](http://developer.android.com/reference/android/view/View.html) that it exposes.

### View Proxy

A View Proxy must extend the `TiViewProxy` class and have the `@Kroll.proxy`annotation. All view proxy class names and file names must have the `Proxy` suffix. Any class that extend the `TiViewProxy` class must also implement the `TiUIView createView(Activity activity)`method, which create and returns the associated View.

```
package com.example.test;

import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.titanium.proxy.TiViewProxy;
@Kroll.proxy(creatableInModule=TestModule.class)
public class FooProxy extends TiViewProxy
{
    @Override
    public TiUIView createView(Activity activity)
    {
        // Calls the View constructor
        return new FooView(this);
    }
}
```

To get a reference to the View from the View Proxy, use the `view` variable:

```
FooView fooView = (FooView)view;
```

### View

A View must extend the `TiUIView` class. All view class names and file names must have the `View` suffix. Any class that extends the `TiUIView` class must implement a constructor and call `setNativeView` with an instance of a native Android [View](http://developer.android.com/reference/android/view/View.html) either in the constructor or in `processProperties.`

```
package com.example.test;

import org.appcelerator.titanium.view.TiUIView;
import org.appcelerator.titanium.view.TiCompositeLayout;
import org.appcelerator.titanium.view.TiCompositeLayout.LayoutArrangement;
import org.appcelerator.titanium.proxy.TiViewProxy;
import android.view.View;

private class ExampleView extends TiUIView
{
    public ExampleView(TiViewProxy proxy) {
        super(proxy);
        setNativeView(new TiCompositeLayout(proxy.getActivity(), LayoutArrangement.DEFAULT));
    }
}
```

### View Property and methods

To set a property or invoke a method on a View, the View Proxy acts as an intermediary between the JavaScript and View. The View Proxy exposes APIs to the JavaScript, then invokes APIs on the View. However, the application must be running on the UI thread. The code below checks to see if the application is running on the UI thread. If it is not, it sends a blocking message until it is back on the UI thread.

**FooProxy.java**

```java
private static final int MSG_SET_COLOR = 70000;

@Kroll.setProperty(retain=false)
public void setProperty(final String value)
{
    // Get the view object from the proxy and set the property
    if (view != null) {
        // Check to see if we are on the UI thread
        if (!TiApplication.isUIThread()) {
            // If not,
            TiMessenger.sendBlockingMainMessage(new Handler(TiMessenger.getMainMessenger().getLooper(), new Handler.Callback() {
                public boolean handleMessage(Message msg) {
                    switch (msg.what) {
                        case MSG_SET_PROPERTY: {
                            AsyncResult result = (AsyncResult) msg.obj;
                            FooView fooView = (FooView)view;
                            fooView.setProperty(value);
                            result.setResult(null);
                            return true;
                        }
                    }
                    return false;
                }
            }).obtainMessage(MSG_SET_PROPERTY), value);
        } else {
            // If we are on the UI thread
            FooView fooView = (FooView)view;
            fooView.setProperty(value);
        }
    }

    // Updates the property on the Proxy object
    setProperty("property", value, true);
}
```
