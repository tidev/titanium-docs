---
title: Windows Runtime Direct API Access
weight: '10'
---

# Windows Runtime Direct API Access

::: danger ❗️ Warning
WIndows Runtime Direct API Access was removed in Titanium SDK 6.1.0. Use [Hyperloop](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/) to access native APIs.
:::

## Introduction

For the Windows Platform, the Titanium SDK allows you to directly use the Windows Runtime (WinRT) C++ APIs in your project's JavaScript files. The Titanium SDK will scan your JavaScript files to see if it uses any of the WinRT APIs and will create C++ wrappers and add any dependencies. The Windows Runtime C#, VB and JavaScript APIs are not supported as well as the Windows 10 Mobile APIs.

::: warning ⚠️ Warning
The first time you build a project that includes WinRT APIs, the first build will be slow (will take several minutes). Subsequent builds should be faster even if you add more WinRT classes.
:::

## Usage

To use a Windows API, you must first require in the class, then you can invoke its APIs. For most APIs, you can directly use the API name without any modification.

Before using an API make sure it can be supported first. Open the [API reference](https://msdn.microsoft.com/en-us/library/windows/apps/br211369.aspx) for the API you want to use.

1. Check if it is supported in C++. In the _Syntax_ section at the top of the API reference, the tabbed group should contain a C++ tab.

2. Check that the minimum API version is at least Windows 8 or 8.1. At the bottom of the API reference, check for a _Requirements (Windows 8.x and Windows Phone)_ section.

3. Check if the API supports only Windows Phone or only Windows. Some APIs may only support one platform. Check the platform in the application before invoking the API.

### Require a class

To include a WinRT C++ class, pass the fully qualified class name to the `require()` method. Do not pass variables or concatenated strings that evaluate to the class name to the `require()` call. The Titanium SDK looks specifically for any string literals that start with `Windows`. in order to include the class when building the application.

```javascript
// WILL WORK
var win = require('Windows.UI.Xaml.Window');

// WILL NOT WORK
var window_class = 'Windows.UI.Xaml.Window',
    win = require(win_class);

var windows_ui_xaml_ns = 'Windows.UI.Xaml',
    win = require(windows_ui_xaml_ns + 'Window');
```

After requiring in the class, you can invoke API calls:

```javascript
var Window = require('Windows.UI.Xaml.Window'),
    TextBlock = require('Windows.UI.Xaml.Controls.TextBlock'),
    window = Window.Current,
    text = new TextBlock();
    text.Text = "Click me, please!";

// For enum values, you do not need to require in the class
// See the next section
text.TextAlignment = Windows.UI.Xaml.TextAlignment.Center;
text.VerticalAlignment = Windows.UI.Xaml.VerticalAlignment.Center;
text.HorizontalAlignment = Windows.UI.Xaml.HorizontalAlignment.Center;
text.FontSize = 60;
window.Content = text;
window.Activate();
```

### Enumerations

Enumerations in WinRT are exposed automatically for you when you require any API that may use that enumeration. For example, the `Windows.UI.Xaml.TextAlignment`, `Windows.UI.Xaml.VerticalAlignment` and `Windows.UI.Xaml.HorizontalAlignment` enum values will automatically be included when you require `Windows.UI.Xaml.Controls.TextBlock`.

```javascript
var TextBlock = require('Windows.UI.Xaml.Controls.TextBlock'),
    text = new TextBlock();

text.TextAlignment = Windows.UI.Xaml.TextAlignment.Center;
text.VerticalAlignment = Windows.UI.Xaml.VerticalAlignment.Center;
text.HorizontalAlignment = Windows.UI.Xaml.HorizontalAlignment.Center;
```

### Event handling

Event handling follows the JavaScript syntax by adding and removing event handlers with the `addEventListener()` and `removeEventListener()` methods rather than the C++ syntax.

In C++, you would create an event handler and assign it to an event property of a Windows object or class.

**DO NOT USE C++ Syntax**

```
click_event_ = component->Tapped += ref new TappedEventHandler([this, ctx](Platform::Object^ sender, TappedRoutedEventArgs^ e) {
    // do something
});
```

In JavaScript, invoke the `addEventListener()` method on the Windows object or class, and pass the event name and event handler to the method.

**Use JavaScript Syntax**

```
component.addEventListener('Tapped', function(e) {
    // do something
});
```

### Async return types

Some of the WinRT APIs return asynchronous return types, such as `Windows.Foundation.IAsyncAction`, `Windows.Foundation.IAsyncActionWithProgress`, `Windows.Foundation.IAsyncOperation`, and `Windows.Foundation.IAsyncOperationWithProgress`.

For methods that return an asynchronous return type, the operation will be wrapped in a [JavaScript Promise object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). In a promise, when a deferred or asynchronous job completes, it passes its value on to a fulfilled or rejected function, where it can be evaluated by the functions and chained to other promises.

After invoking the method, chain either the `then(fulfilledFunction, rejectedFunction)` or `catch(rejectedFunction)` method to the invoked WinRT method to handle the response after the operation completes.

```javascript
var PathIO = require('Windows.Storage.PathIO');
PathIO.ReadTextAsync('ms-appdata:///somefile.txt').then(
    function (content) {
        alert(content);
    },
    function (err) {
        alert('It failed!');
    }
);
```

### Mix WinRT APIs with Titanium APIs

You can mix and match WinRT and Titanium APIs together. You can call Titanium APIs from a native event callback, or call Native APIs inside a callback registered with Titanium APIs.

You can also mix and match Titanium.UI.View and its subclasses with any WinRT API expecting a `Windows.UI.Xaml.UIElement`. For example, you can create a Titanium Window or View object, then add a native UI element, such as a [Tooltip](https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.xaml.controls.tooltip.aspx), which the Titanium SDK has equivalent API for, to it. Or you can generate a complex layout using the WinRT APIs, then add Titanium Labels, Buttons or Views to it.

We have not yet made the full APIs as seamless as possible. One example is the Titanium SDK can convert between JavaScript and C++ arrays and collections, but explicit native types that are collection subclasses are treated like normal native types and not like a basic array or vector. So if you have a native collection type, such as `UIElementCollection`, you cannot simply treat it as if it is a normal JavaScript array and invoke JavaScript array methods on it. You will need to use the WinRT APIs to manipulate it.
