---
title: Communication Between WebViews and Titanium
weight: '20'
---

# Communication Between WebViews and Titanium

::: warning ⚠️ Warning
With Titanium SDK 8.0.0, we now use [WKWebView](/guide/Titanium_SDK/Titanium_SDK_How-tos/WKWebView/) to implement Ti.UI.WebView (as Apple has deprecated [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview)).
:::

## Overview

You can use features of the `Ti.UI.WebView` component to interact with local and remote web content. However, as you'll see, most of this functionality is limited to local web content (HTML you load from the device rather than from a web server). In this section, you'll examine how to use the Titanium logging and event APIs with local HTML content. And, you'll see how you can use the `evalJS()` method to inject JavaScript code into remote HTML content.

## Contents

Because capabilities vary, we'll look at local and remote web interactions separately. We'll begin with seeing how you can use logging and events with local content. Then, we'll see how to inject JavaScript code and get data back from remote HTML content.

### Local web content

#### Logging

You can use the `Ti.API` logging methods within HTML content loaded from the device. Just as a quick refresher, let's take a look at the logging functions available:

* `debug(message) -`Creates a Titanium log out of the`message` parameter and assigns it the log level of `debug`

* `error(message)` - Creates a Titanium log out of the `message` parameter and assigns it the log level of `error`

* `info(message)` - Creates a Titanium log out of the `message` parameter and assigns it the log level of `info`

* `log(type, message)` - Creates a Titanium log out of the `message` parameter and assigns it the log level of the given parameter `type`

* `warn(message)` - Creates a Titanium log out of the `message` parameter and assigns it the log level of `warn`

These functions are great for adding logging to our native Titanium code, but they can also be used to add logging to web content in `WebViews`. Let's take a look at a simple example. Here will we add Titanium logging to a `WebView` to let us know when the `<body>` element of the web content has loaded.

**logging.html**

```html
<html>
    <body onload="Ti.API.info('body loaded!');"></body>
</html>
```

**app.js**

```javascript
var win = Ti.UI.createWindow();
var webview = Ti.UI.createWebView({
    url: 'logging.html'
});
win.add(webview);
win.open();
```

When the above app runs and the `<body>` of the `WebView` is loaded, it will put an informational message in the Titanium logging console that says "body loaded!". This is a very simple case, but shows that you can use the logging capabilities of Titanium even when executing Javascript from the context of a `WebView`'s content. These API calls can be made anywhere in your web content's Javascript.

#### Ti.App Events

The `Ti.API` module gives your `WebView` the ability to send messages to the Titanium logging console, but application level events via the `Ti.App` module provide a much higher level of integration. Application level events are events that are not fired or handled by Titanium components, but by the app itself. If you are not already familiar with them, check out the [Event Handling](/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Fundamentals/Event_Handling/) chapter of this book.

So how do application level events help us communicate with `WebViews`? Well they are available to all execution contexts of our Titanium apps, and this includes a `WebView`'s Javascript execution context. By using calls to `Ti.App.fireEvent()` and `Ti.App.addEventListener()`, we can establish bidirectional communication between our native Titanium code and our `WebView's` Javascript code.

Let's take a look at an example of how we can use application level events to communicate bidirectionally with a `WebView`. We will create an app with a native UI button and a button rendered in a `WebView`. The `WebView` will listen for events fired from the native button, and the native Titanium code will listen for events fired from the `WebView` button. Whenever one of these events is received, the appropriate execution context will popup an alert notifying us that the event was received.

```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <script>
      // Send event from the web-view to the app
      function sendEventToApp() {
      Ti.App.fireEvent('app:fromWebView', {
      message: 'Event fired from WebView, handled in Titanium'
    });
      }

    // Subscribe to global event
      Ti.App.addEventListener("app:fromTitanium", function(e) {
        alert(e.message);
      });
    </script>
  </head>
  <body>
    <button onclick="sendEventToApp()">From WebView -> Titanium</button>
  </body>
</html>
```

```javascript
var win = Ti.UI.createWindow();
var webView = Ti.UI.createWebView({
    url: 'logging.html'
});
var button = Ti.UI.createButton({
    title: 'From Titanium -> WebView',
});
button.addEventListener('click', function(e) {
    Ti.App.fireEvent('app:fromTitanium', {
        message: 'Event fired from Titanium, handled in WebView'
    });
});
Ti.App.addEventListener('app:fromWebView', function(e) {
    alert(e.message);
});
win.add(webView);
win.add(button);
win.open();
```

With the above app, we would see the following application flow when testing its functionality:

![WEBVIEW](./WEBVIEW.jpg)

As demonstrated above, we can both fire and listen for application level events in content of the `WebView`. This gives Titanium the ability to react to interactions that occur in the web content. For example, you can set up application level events in your `WebView` such that your Titanium code can respond to button clicks, page loads, mouse overs, or any other event the `WebView` can handle.

### Remote web content

You cannot use any Titanium statements within HTML content loaded from a remote host. The techniques described above will not work with remote content. However, you're not without means to interact with remote content. The WebView component includes the `evalJS()` method that you can use to inject JavaScript into a WebView. A few things to keep in mind:

* You should call `evalJS()` from the webview's `load` event so you're sure the page is done loading before you attempt to inject your code.

* You must pass in the code to run as a single _string_. (Hint: You'll have to JSON.stringify any complex data types you pass into the webview.)

* This method returns a string, so make sure any data you retrieve is a string or it will be treated as a `null`.

Let's see an example. The following loads a remote web page, then uses `evalJS()` to retrieve the cookies set by that server:

**app.js**

```javascript
var webView = Ti.UI.createWebView({
    url: 'https://google.com'
});

webView.addEventListener('load', function(e) {
    var cookies = webview.evalJS('document.cookie').split(';');
    Ti.API.info('# of cookies -> ' + cookies.length);
    for (var i = 0; i <= cookies.length - 1; i++) {
        Ti.API.info('Cookie -> ' + cookies[i]);
    }
});
```

As noted, the use of `evalJS()` is nested within the WebView's `load` event so we're sure the page is loaded before injecting our code. You'll see we're passing in a single string ("document.cookie") which in this case simply retrieves the string of the cookies set by the site. The rest of the code is within Titanium and extracts the cookie values and logs them to the console.

## Summary

In this section, you learned that with local HTML content in a WebView, you can use the `Ti.API` module to log informational and debugging data to the Titanium logging console. You also saw how to use application level events via the `Ti.App` module to establish bidirectional communication between local HTML in WebViews and native Titanium code.

Then, you looked at how to interact with remote HTML content in a WebView by calling the `evalJS()` method. You learned that you pass in, and get back, simple strings, and that you cannot use any Titanium-specific statements within remote content in a WebView.
