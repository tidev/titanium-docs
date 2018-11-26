---
breadcrumbLabel: WebView
sidebar: auto
---

# Titanium.UI.WebView

<ProxySummary/>

## Overview

Use the [createWebView](Titanium.UI.createWebView) method or **`<WebView>`** Alloy element to create a web view.

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

- You can use [addEventListener](Titanium.App.addEventListener) and
  [fireEvent](Titanium.App.fireEvent) to receive and send application-level events.

- Events can be logged using the [Titanium.API](Titanium.API) logging methods.

**Remote Scripts**

Scripts downloaded from remote web servers cannot access the Titanium namespace.

To interact with remote content, wait until the content is loaded, then use the
[evalJS](Titanium.UI.WebView.evalJS) method to execute a JavaScript expression
inside the web view and retrieve the value of an expression.

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

    [WARN] :   AwContents: nativeOnDraw failed; clearing to background color.
    [INFO] :   chromium: [INFO:async_pixel_transfer_manager_android.cc(56)]

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

    window.onresize= function(){
        document.getElementById("component").style.height = window.innerHeight + 'px';
    };

For more information, see the following topics:

  * [Android Developers: Migrating to WebView in Android 4.4](https://developer.android.com/guide/webapps/migrating.html)
  * [Google Chrome: WebView for Android](https://developer.chrome.com/multidevice/webview/overview)

**Plugin Support**

The Android web view supports native plugins such as Flash Player. Note that the Chromium-based
web view introduced in Android 4.4 does not support the Flash Player plugin.

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
[Titanium.Network.HTTPClient](Titanium.Network.HTTPClient) cookie store. Developers can manage their cookies for both
cookie stores using the methods [addHTTPCookie](Titanium.Network.addHTTPCookie), [addSystemCookie](Titanium.Network.addSystemCookie),
[getHTTPCookies](Titanium.Network.getHTTPCookies), [getHTTPCookiesForDomain](Titanium.Network.getHTTPCookiesForDomain), [getSystemCookies](Titanium.Network.getSystemCookies),
[removeHTTPCookie](Titanium.Network.removeHTTPCookie), [removeHTTPCookiesForDomain](Titanium.Network.removeHTTPCookiesForDomain), [removeAllHTTPCookies](Titanium.Network.removeAllHTTPCookies),
[removeSystemCookie](Titanium.Network.removeSystemCookie), [removeAllSystemCookies](Titanium.Network.removeAllSystemCookies).

### For More Information

See [Integrating Web
Content](https://docs.appcelerator.com/platform/latest/#!/guide/Integrating_Web_Content)
in the Titanium Mobile Guides for more information on using web views, including use
cases, more code examples, and best practices for web view content.

<ApiDocs/>
