---
title: Android Hyperloop Programming Guide
weight: '20'
---

# Android Hyperloop Programming Guide

This document provides information on Android Hyperloop requirements, classes, instantiation, methods and fields, casting, interfaces, creating your own classes, and using 3rd party libraries.

## Requirements

### Software

See [Hyperloop Requirements](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/Hyperloop_Requirements/#requirements) for software requirements for using Hyperloop with Android.

### Configure tiapp.xml

Make sure to add the Hyperloop module to the `<modules>` section of the `tiapp.xml`:

```xml
<modules>
    <module>hyperloop</module>
</modules>
```

## Classes

Classes in Hyperloop map to the underlying classes defined in Java. For example, if you have a class such as `android.view.View` defined, you would reference it using a standard require such as:

```javascript
var View = require('android.view.View');
```

This will return the `View` class object (it’s not an instance of a `View`, but the `View` class itself).

Once you have the Class reference returned from `require`, you can call normal JavaScript property and functions against it. Remember, at this point calling functions or properties against the class object above will be accessing Class level (static) Java methods (not instance level).

For example, you could get the generated view id of the `View` using the example:

```javascript
var generatedId = View.generateViewId();
```

This is because `generateViewId` is defined as a static method.

## Instantiation

Please refer to our [hyperloop-examples app](https://github.com/appcelerator/hyperloop-examples/tree/master/app) in those code-level examples. For example, to use a `View`, the activity needs to be set:

```javascript
var activity = new Activity(Ti.Android.currentActivity);
```

See [animateview.js (Github)](https://github.com/appcelerator/hyperloop-examples/blob/master/app/controllers/android/animateview.js#L10) for an working sample.

## Methods and fields

Methods in Java are mapped to JavaScript functions. Fields in Java are mapped to JavaScript property accessors. Static methods or fields (such as constants) will be attached to the class type. For example:

```
public class Example {
  public int field;
  public static final String staticString = "";
  public void method(int argument);
  public static boolean staticMethod();
}
```

Would map to the following in JavaScript:

```javascript
example.field = 123;
example.staticString;
example.method(567);
var result = example.staticMethod();
```

## Method resolution

If a class has overloads for a method (multiple forms of the method with different signatures, but the same name), Hyperloop will attempt to match the correct method to invoke on the Java side by matching the passed in arguments to the closest match. Typically, this involves matching the name, number of arguments and the ability to convert the passed in arguments (in-order) to the method’s parameter types. Hyperloop is slightly more liberal in accepting numeric primitives than typical method resolution due to the conversion of JavaScript Numbers.

## Casting

Sometimes, interfaces define generic return types such as `Object` and you will need to cast them to a different type to then reference methods and properties of the class. You can pass along the object you want to wrap to the constructor of the type you want to wrap it in. For example, suppose the result of the function returned an `Object` but you know the implementation is actually a `View`. You could use the following:

```javascript
var view = new View(object); // call View instance methods on view variable
```

**Be careful with casting**: If you cast an object which is actually something different, you will experience an error and likely a crash.

You can also cast a Titanium UI Component into its equivalent. For example:

```javascript
var tiView = Ti.UI.createView({ backgroundColor : 'red' });
var nativeView = new View(tiView);
console.log('X (relative to parent): ', nativeView.getLeft());
```

## Interfaces

Interfaces may be implemented using a Javascript syntax similar to an anonymous Java class. Call the constructor of the interface type with a JavaScript object that contains properties that match the interface method names, and corresponding values as function that implement them. For example, to create an instance that implements `android.view.View.OnTouchListener`:

```javascript
var OnTouchListener = require('android.view.View.OnTouchListener');
var listener = new OnTouchListener({
  onTouch: function(v, event) {
    // Do some work here
    return true;
  }
});
```

## Creating your own classes

Hyperloop provides you the ability to dynamically create your own Java classes at runtime. Once created, these classes can be used as normal in either Hyperloop or passed to native calls. Hyperloop generates the custom subclass using the "extend" function of the type we want to extend, which takes a single JavaScript Object as an argument containing the overriding method implementations (same as we did for interface implementations). The returned value is a new class type that subclasses the extended type. We can then use the constructor to generate instances of that subclass.

Let's create a simple custom subclass of `android.view.View`, and instantiate an instance of it:

```javascript
var Activity = require('android.app.Activity'),
    activity = new Activity(Ti.Android.currentActivity),
    View = require('android.view.View');

var MyView = android.view.View.extend({
    onDraw: function(canvas) {
      this.super.onDraw(canvas);
      // implementation here
    }
});
var customView = new MyView(activity); // Add your custom view to the content...
```

This will create a new class in the Java runtime which will extend `android.view.View` which is equivalent to the following code (though please note that we do _not_ generate Java source, but instead generate Dalvik bytecode that gets loaded into the runtime as a class):

```
class MyView extends android.view.View {
    protected void onDraw(Canvas canvas) {
      // implementation here
    }
}
```

## Accessing native XML Layouts

In native Android development, you have many situations where you are inflating native XML layouts in your source-code. In Hyperloop, you can do the same with just a few lines of code:

```javascript
var Activity = require('android.app.Activity');
    Context = require('android.content.Context'),
    Inflater = require('android.view.LayoutInflater'),
    activity = new Activity(Ti.Android.currentActivity);

// Load the layout inflater
var inflater = Inflater.cast(activity.getApplicationContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE));

// Load the "main_content.xml" from [app]/platform/android/res/layout/
// This can also be used for other kind of resources, like images, colors and values
var resId = activity.getResources().getIdentifier('main_content', 'layout', activity.getPackageName());
var view = inflater.inflate(resId, null);

// Add "view" your Titanium view here ...
```

Learn more about a native XML layouts in our [Native Layout Example](https://github.com/appcelerator/hyperloop-examples/blob/master/app/controllers/android/nativelayout.js) as part of the [Hyperloop Examples](https://github.com/appcelerator/hyperloop-examples) app.

## Using 3rd party libraries

::: warning ⚠️ Warning
As of Titanium 9.0.0, you can no longer use Google's deprecated Support libraries. You must use the AndroidX libraries instead.
:::

### Gradle Dependencies

As of Titanium 9.0.0, Hyperloop can reference libraries via gradle by adding a `build.gradle` file to the `platform/android` (Classic) or `app/platform/android` (Alloy) folder of your app. This is the preferred way of adding library dependencies.

An example can be found here: [hyperloop-examples - /app/platform/android/build.gradle](https://github.com/appcelerator/hyperloop-examples/blob/master/app/platform/android/build.gradle)

The below is an example `build.gradle` file which provides access to the Google "Material Components" library.

```
dependencies {
    implementation 'com.google.android.material:material:1.1.0'
}
```

### Local Dependencies

You can add 3rd party library files such as JARs and AARs directly to Hyperloop.

Place the **JAR** and **AAR** files into the `platform/android` (Classic) or `app/platform/android` (Alloy) folder of your app. Hyperloop will load the Java classes from these libraries and generate the necessary bindings. All Java classes within the JARs and AARs will be merged into your app. For AARs, the build system will also extract its resource files, assets, \*.so libraries, and merge its `AndroidManfiest.xml` into your app.

### Third-party Examples

Make sure to check out more Android third-party libraries (like Localytics, SSDP, Shimmer) in our [Hyperloop Sample App](https://github.com/appcelerator/hyperloop-examples/tree/master/app/controllers/android/libraries).
