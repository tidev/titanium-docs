---
title: Windows Hyperloop Programming Guide
weight: '50'
---

# Windows Hyperloop Programming Guide

::: danger ❗️ Warning
As of Titanium 9.0.0, building Windows apps is no longer supported.The below only applies to users of older Titanium versions.
:::

This document provides information on Windows Hyperloop requirements, classes, instantiation, methods and fields, method resolution, casting, async return types, mix WinRT APIs with Titanium APIs, generic collections, and using 3rd party libraries.

## Requirements

You’ll need to have the following minimum requirements to use Hyperloop for Windows:

* Titanium 6.1.0+

Configure the plugin in tiapp.xml:

```xml
<plugins>
    <plugin>hyperloop</plugin>
</plugins>
```

Configure the module in tiapp.xml:

```xml
<modules>
    <module>hyperloop</module>
</modules>
```

## Classes

Classes in Hyperloop map to the underlying classes defined in Windows Runtime. For example, if you have a class such as `Windows.UI.Xaml.Controls.Canvas` defined, you would reference it using a standard require such as:

```javascript
var Canvas = require('Windows.UI.Xaml.Controls.Canvas');
```

This will return the `Canvas` class object. Meaning, it’s not an instance of a `Canvas`, but the `Canvas` class itself.

Once you have a the class reference returned from `require`, you can call normal JavaScript property and functions against it. Remember, at this point calling functions or properties against the class object above will be accessing class level (static) methods (not instance level).

For example, you could get the `GetLeft` method of the `Canvas` using the example:

```javascript
var left = Canvas.GetLeft(canvas);
```

This is because `GetLeft` is defined as a static method.

## Instantiation

To instantiate a native Class and create an instance, you can simply use `new:`

```javascript
var canvas = new Canvas();
```

When constructing an instance using `new`, it will always call the default constructor. If you have a special constructor that takes arguments, you can use the following as you would in C# or C++/CX:

```javascript
var Uri = require('System.Uri');
var uri = new Uri('http://www.appcelerator.com/');
```

## Methods and fields

Methods in Windows Runtime components are mapped to JavaScript functions. Fields in components are mapped to JavaScript property accessors. static methods or fields (such as constants) will be attached to the class type. For example:

```
public sealed class Example {
  public int field;
  public static String staticString = "";
  public void method(int argument);
  public static bool staticMethod();
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

If a class has overloads for a method (multiple forms of the method with different signatures, but the same name), we will attempt to match the correct method to invoke on the Windows Runtime component side by matching the passed in arguments to the closest match. Typically, this involves matching the name, number of arguments and the ability to convert the passed in arguments (in-order) to the method’s parameter types. We are slightly more liberal in accepting numeric primitives than typical method resolution due to the conversion of JS Numbers.

## Casting

Sometimes interfaces define generic return types such as `Platform::Object` and you will need to cast them to a different type to then reference methods and properties of the class. You can pass along the object you want to wrap to the constructor of the type you want to wrap it in. For example, suppose the result of the function returned an `Object` but you know the implementation is actually a `Canvas`. You could use the following:

```javascript
var canvas = Canvas.cast(object);
```

**Be careful with casting**: If you cast an object which is actually something different, you will experience an error and likely a crash.

Sometimes you need to cast number types explicitly to select specific method signature. For instance, let say we need to call `System.Math.Abs(double)` and `System.Math.Abs(System.Int32)`. In order to select method signature, you can use `cast` explicitly like below. If type cast is omitted, `double` is used implicitly for number types.

```javascript
var System_Math = require('System.Math'),
    System_Double = require('System.Double'),
    System_Int32  = require('System.Int32');

// Call System.Math.Abs(double); (implicit)
System_Math.Abs(-1.23); // 1.23

// Call System.Math.Abs(double); (explicit)
System_Math.Abs(System_Double.cast(-1.23)); // 1.23

// Call System.Math.Abs(Int32);
System_Math.Abs(System_Int32.cast(-1.23)); // 1
```

## Async Return Types

Some of the WinRT APIs return asynchronous return types, such as `Windows.Foundation.IAsyncAction`, `Windows.Foundation.IAsyncActionWithProgress`, `Windows.Foundation.IAsyncOperation`, and `Windows.Foundation.IAsyncOperationWithProgress`.

For methods that return an asynchronous return type, the operation will be wrapped in a [JavaScript Promise object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). In a promise, when a deferred or asynchronous job completes, it passes its value on to a fulfilled or rejected function, where it can be evaluated by the functions and chained to other promises.

After invoking the method, chain either the `then(fulfilledFunction, rejectedFunction)` or `catch(rejectedFunction)` method to the invoked WinRT method to handle the response after the operation completes.

```javascript
var HttpClient = require('Windows.Web.Http.HttpClient'),
    Uri = require('System.Uri'),
    httpclient = new HttpClient(),
    PathIO = require('Windows.Storage.PathIO'),
    ApplicationData = require('Windows.Storage.ApplicationData'),
    CreationCollisionOption = require('Windows.Storage.CreationCollisionOption');

//
// IAsyncOperation<StorageFile>
//
ApplicationData.Current.LocalFolder.CreateFileAsync('content.txt', CreationCollisionOption.ReplaceExisting)
.then(function () {
    var HttpClient = require('Windows.Web.Http.HttpClient'),
        Uri = require('System.Uri'),
        httpclient = new HttpClient();
    //
    // IAsyncOperationWithProgress<HttpResponseMessage, HttpProgress>
    //
    return httpclient.GetAsync(new Uri('http://www.appcelerator.com/'));
})
.then(function (response) {
    //
    // IAsyncOperationWithProgress<string, ulong>
    //
    return response.Content.ReadAsStringAsync();
})
.then(function (content) {
    //
    // IAsyncAction
    //
    return PathIO.WriteTextAsync('ms-appdata:///local/content.txt', content);
})
.then(function () {
    //
    // IAsyncOperation<string>
    //
    return PathIO.ReadTextAsync('ms-appdata:///local/content.txt');
}).
then(function (content) {
    alert('ALL DONE! File Content="' + content + '"');
}, function (err) {
    alert(err);
});
```

## Mix WinRT APIs with Titanium APIs

You can mix and match WinRT and Titanium APIs together. You can call Titanium APIs from a native event callback, or call Native APIs inside a callback registered with Titanium APIs.

You can also mix and match Titanium.UI.View and its subclasses with any WinRT API expecting a `Windows.UI.Xaml.UIElement`. For example, you can create a Titanium Window or View object, then add a native UI element, such as a [Tooltip](https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.xaml.controls.tooltip.aspx), which the Titanium SDK has equivalent API for, to it. Or you can generate a complex layout using the WinRT APIs, then add Titanium Labels, Buttons or Views to it.

```javascript
var win = Ti.UI.createWindow(),
    Button = require('Windows.UI.Xaml.Controls.Button'),
    button = new Button();

button.Content = "PUSH";
button.addEventListener('Tapped', function (e) {
    Ti.API.info('Tapped!');
});

win.add(button);
win.open();
```

We have not yet made the full APIs as seamless as possible. One example is the Titanium SDK can convert between JavaScript and C++ arrays and collections, but explicit native types that are collection subclasses are treated like normal native types and not like a basic array or vector. So if you have a native collection type, such as `UIElementCollection`, you cannot simply treat it as if it is a normal JavaScript array and invoke JavaScript array methods on it. You will need to use the WinRT APIs to manipulate it.

## Generic Collections

Generic collections allow you to define strongly typed collections to provide strong type safety and performance. You can use number of generic collections in `System.Collections.Generic` namespace. For instance you can use `require(System.Collections.Generic.List<T>)` to define array list that is specialized to `T` type.

```javascript
var List = require('System.Collections.Generic.List<System.Int32>'),
    Int32 = require('System.Int32');
var vec = new List();
vec.Add(Int32.cast(0));
vec.Add(Int32.cast(1));
vec.Add(Int32.cast(2));
```

Some generic collections enable you to access its element by using JavaScript array-like syntax. For instance, `System.Collections.Generic.List<T>`provides the ability to access to specific elements using`list[index]` like below.

```
vec[1];       // 1
vec[1] = 100; // update to 100
vec[1];       // 100
```

## Using Third-party libraries

You can use Third-party libraries in Hyperloop such as winmd, lib and DLL.

Let say you have Windows Runtime Component named `WindowsRuntimeComponent1`. The C# code looks like below.

**WindowsRuntimeComponent1.cs**

```csharp
using System;

namespace WindowsRuntimeComponent1
{
    public sealed class Test
    {
        public int SampleNumber { get; set; }

        public static string SayHello(string str)
        {
            return String.Format("Hello, {0}!", str);
        }

        public string sayNumber()
        {
            return String.Format("SampleNumber is {0}.", SampleNumber);
        }
    }
}
```

When you compile your Windows Runtime component in Visual Studio, you should get `.winmd` file. Then place the `winmd` files into the `lib` `/windows/(phone|store|win10)/(x86|ARM)/` folder of your app. Hyperloop will pick up the `winmd` files and will generate necessary bindings and include the `winmd` in your app. Then place `appc.js` directly under your Titanium project folder. Make sure it contains names of your Windows Runtime component under `hyperloop.windows.thirdparty` key. It should look like below.

**appc.js**

```javascript
/**
 * Hyperloop configuration
 */
module.exports = {
    type: 'app',
    group: 'titanium',
    dependencies: {},
    hyperloop: {
        windows:
        {
            /**
             * Optionally, you can bring in third-party or first-party Windows Runtime components.
             * The 'key' is the root namespace of the component that will be used in the require.
             * There's no values for now but we reserve them for future release.
             *
             * Place the library files into the lib/windows/(phone|store|win10)/(x86|ARM)/ folder under your app project.
             * Hyperloop will pick up the winmd files and will generate necessary bindings and include the winmd in your app.
             */
            thirdparty: {
                'WindowsRuntimeComponent1': {}
            }
        }
    }
};
```

You should be able to use your Windows Runtime component in your Titanium app like below.

**app.js**

```javascript
var Test = require('WindowsRuntimeComponent1.Test'),
    test = new Test();

alert(test.SayHello('World!'));
```
