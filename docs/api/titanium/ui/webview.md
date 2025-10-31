---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/WebView.yml
---
# Titanium.UI.WebView

<TypeHeader/>

## Overview

Use the <Titanium.UI.createWebView> method or **`<WebView>`** Alloy element to create a web view.

Web views are more expensive to create than other native views because of the requirement to
load the HTML browser into memory.

The web view content can be any valid web content such as HTML, PDF, SVG or other WebKit supported
content types.

### JavaScript Context in WebViews--Local vs. Remote Content

JavaScript in the web view executes in its own context.  The web view can interact with this
content, but most of this functionality is limited to local content.

**Local Scripts**

When running local web content
(that is, content that is included in the application's resources), scripts have
access to the Titanium namespace. In particular, when running local web content:

- You can use <Titanium.App.addEventListener> and
  <Titanium.App.fireEvent> to receive and send application-level events.

- Events can be logged using the <Titanium.API> logging methods.

**Remote Scripts**

Scripts downloaded from remote web servers cannot access the Titanium namespace.

To interact with remote content, wait until the content is loaded, then use the
[evalJS](Titanium.UI.WebView.evalJS) method to execute a JavaScript expression
inside the web view and retrieve the value of an expression.

You can inject the local `Ti.App.fireEvent` bindings yourself by adding a script element using
evalJS.

```js
webview.evalJS(
  'javascript=(function addBinding(){' +
    'var s=document.createElement("script");' +
    's.setAttribute("type","text/javascript");' +
    's.innerHTML="' + /* insert content of binding.min.js */ + '";'
    +
    'document.getElementsByTagName("body")[0].appendChild(s);' +
  '})()'
);
```
The `binding.min.js` is available in the [repository](https://github.com/tidev/titanium-sdk/tree/main/android/modules/ui/assets/Resources/ti.internal/webview).

For iOS check the example in <Titanium.UI.WebView.addScriptMessageHandler>.

### Local JavaScript Files

During the build process for creating a package, all JavaScript files, that is, any file with a
'.js' extension, are removed and their content is encrypted and obfuscated into one resource,
causing these files to not load properly in a WebView if they are loaded externally.

For JavaScript files referenced in static local HTML files, these JavaScript files are omitted
from processing and left intact, which means they can be correctly loaded in the WebView.

For local JavaScript files not referenced in static local HTML files, for example, a
dynamically-generated HTML file referencing a local JavaScript file,
rename the file extension of the local JavaScript files to '.jslocal' instead of '.js'.

The build process for testing your application on the simulator, emulator or device does not
affect the loading of local JavaScript files.

### iOS Platform Implementation Notes

On the iOS platform, the native web view handles scrolling and other related touch
events internally. If you add event listeners on the web view **or its parent views**
for any of the standard touch events (`touchstart`, `click`, and so on), these events
do not reach the native web view, and the user will not be able to scroll, zoom, click
on links, and so on. To prevent this default behavior, set
[willHandleTouches](Titanium.UI.WebView.willHandleTouches) to `false`.

In other words, you can have either Titanium-style events against the
web view instance, or internal JavaScript events in the DOM, but not both.

### Android Platform Implementation Notes

**Android 4.4 and Later Support**

Starting with Android 4.4 (API Level 19), the WebView component is based off of Chromium,
introducing a number of changes to its rendering engine.  Web content may look or behave
differently depending on the Android version.  The WebView does not
have full feature parity with Chrome for Android.

By default, the Chromium WebView uses hardware acceleration, which may cause content to
fail to render. If the WebView fails to render the content, the web view will clear
itself, displaying only the default background color. The following log messages will be
displayed in the console:

```
[WARN] :   AwContents: nativeOnDraw failed; clearing to background color.
[INFO] :   chromium: [INFO:async_pixel_transfer_manager_android.cc(56)]
```

To workaround this issue, you can enable software rendering by setting the WebView's
[borderRadius](Titanium.UI.WebView.borderRadius) property to a value greater than zero.

If you are developing local HTML content and size your elements using percentages, the WebView may
not calculate the sizes correctly when hardware acceleration is enabled, resulting in the same
behavior previously mentioned.

To workaround this issue, you can use the previously mentioned workaround to enable software
rendering, use absolute size values or use the
[onresize](https://developer.mozilla.org/en-US/docs/Web/API/Window.onresize) event to set the
heights of the components.  For example, if you have a div element with an id set to `component`
that needs to use the entire web view, the following callback resizes the content to use the
full height of the web view:

``` js
window.onresize= function(){
    document.getElementById("component").style.height = window.innerHeight + 'px';
};
```

For more information, see the following topics:

  * [Android Developers: Migrating to WebView in Android 4.4](https://developer.android.com/guide/webapps/migrating.html)
  * [Google Chrome: WebView for Android](https://developer.chrome.com/multidevice/webview/overview)

**Plugin Support**

The Android web view supports native plugins.

To use plugin content, you must set the [pluginState](Titanium.UI.WebView.pluginState) property
to either [WEBVIEW_PLUGINS_ON](Titanium.UI.Android.WEBVIEW_PLUGINS_ON) or
[WEBVIEW_PLUGINS_ON_DEMAND](Titanium.UI.Android.WEBVIEW_PLUGINS_ON_DEMAND).

You must also call [pause](Titanium.UI.WebView.pause) when the current activity is
paused, to prevent plugin content from continuing to run in the background. Call
[resume](Titanium.UI.WebView.resume) when the current activity is resumed. You can
do this by adding listeners for the [Activity.pause](Titanium.Android.Activity.pause)
and [Activity.resume](Titanium.Android.Activity.resume) events.

**Accessing Cookies**

On Android, the web view uses the system cookie store which does not share cookies with the
<Titanium.Network.HTTPClient> cookie store. Developers can manage their cookies for both
cookie stores using the methods <Titanium.Network.addHTTPCookie>, <Titanium.Network.addSystemCookie>,
<Titanium.Network.getHTTPCookies>, <Titanium.Network.getHTTPCookiesForDomain>, <Titanium.Network.getSystemCookies>,
<Titanium.Network.removeHTTPCookie>, <Titanium.Network.removeHTTPCookiesForDomain>, <Titanium.Network.removeAllHTTPCookies>,
<Titanium.Network.removeSystemCookie>, <Titanium.Network.removeAllSystemCookies>.

**WKWebView**

With Titanium SDK 8.0.0, we now use WKWebView to implement Ti.UI.WebView (as Apple has deprecated UIWebView).
WKWebView has few restriction specially with local file accessing. For supporting custom-fonts with WKWebView
a little modification is required in the HTML files:

``` html
<style>
  @font-face
    {
      font-family: 'Lato-Regular';
      src: url('fonts/Lato-Regular.ttf');
    }
</style>
```

To have a WKWebView scale the page the same way as UIWebView, add the following meta tag to the HTML header:

``` html
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
</html>
```

### Ti.UI.SIZE and WebViews

With Titanium 8.0.0+, <Titanium.UI.SIZE> does not work for WebViews. We recommend to give a **fixed height**
to <Titanium.UI.WebView> (as noted in [TIDOC-3355](https://jira-archive.titaniumsdk.com/TIDOC-3355)).

As a workaround you can try to get the `document.body.scrollHeight` inside <Titanium.UI.WebView.load> event
of webview and set the height to webview. See following example.

``` js
var win = Ti.UI.createWindow();

var verticalView = Ti.UI.createView({layout: 'vertical', width: "100%", height: "100%"});

verticalView.add(Ti.UI.createLabel({text: 'Label 1', top: 30, width: Ti.UI.SIZE, height: Ti.UI.SIZE}));

var htmla = "<div style='font-family: Helvetica Neue; font-size:16px'><ul><li>Item 1</li><li>Item 2</li></ul></div>";
var html = "<!DOCTYPE html>";

html += "<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'><style type='text/css'>html {-webkit-text-size-adjust: none;}</style><script type='text/javascript'>document.ontouchmove = function(event){event.preventDefault();}</script></head><body style='overflow: hidden'>";
html += htmla;
html += "</body></html>";

var webview = Ti.UI.createWebView({left: '14dp', right: '14dp', top: '7dp', height: Ti.UI.SIZE, html: html, backgroundColor: "yellow"});

verticalView.add(webview);

verticalView.add(Ti.UI.createLabel({text: 'Label 2', top: 30, width: Ti.UI.SIZE, height: Ti.UI.SIZE}));

win.add(verticalView);

win.open();

webview.addEventListener('load', function(e) {
  var result = webview.evalJSSync('document.body.scrollHeight');
  Ti.API.info('webview height: ' + result);
  webview.height = result;
});
```

### For More Information

See [Integrating Web
Content](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/Integrating_Web_Content/)
in the Titanium Mobile Guides for more information on using web views, including use
cases, more code examples, and best practices for web view content.

## Examples

### Basic Web View to External URL

Create a web view to a remote URL and open the window as modal.

``` js
var webview = Titanium.UI.createWebView({url:'http://www.titaniumsdk.com'});
var window = Titanium.UI.createWindow();
window.add(webview);
window.open({modal:true});
```

### Alloy XML Markup

Previous example as an Alloy view.

``` xml
<Alloy>
    <Window id="win" modal="true">
        <WebView id="webview" url="http://www.titaniumsdk.com" />
    </Window>
</Alloy>
```

### Listening to Web View properties in iOS

Create a web view and listen 'title' property of web view.

``` js
var webview = Ti.UI.createWebView({
    url:'http://www.titaniumsdk.com'
});
webview.startListeningToProperties([ 'title' ]);
webview.addEventListener('title', function(e) {
    alert('Title is : -' +e.value);
});
var window = Ti.UI.createWindow();
window.add(webview);
window.open();
```

### Usage of allowedURLSchemes and handleurl in iOS

Create a web view and listen 'handleurl' event to open url from Titanium platform.

``` js
var webview = Ti.UI.createWebView({
    url: 'https://www.google.com',
    allowedURLSchemes: [ 'https', 'http' ]
});

webview.addEventListener('handleurl', function(e) {
    var handler = e.handler;
    Ti.Platform.openURL(e.url);
    handler.invoke(Ti.UI.iOS.ACTION_POLICY_CANCEL);
});
var window = Ti.UI.createWindow();
window.add(webview);
window.open();
```

<ApiDocs/>
