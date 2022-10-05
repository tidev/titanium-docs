---
title: Integrating Web Content
weight: '30'
---

# Integrating Web Content

::: warning ⚠️ Warning
With Titanium SDK 8.0.0, we now use [WKWebView](/guide/Titanium_SDK/Titanium_SDK_How-tos/WKWebView/) to implement Ti.UI.WebView (as Apple has deprecated [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview)).
:::

While Titanium offers the power of using native UI components, sometimes it is necessary to use web content in our apps. For this reason, Titanium has the `Ti.UI.WebView` component that gives you access to the platform's underlying native webview. With this component you get the full range of HTML/CSS/JS capabilities that the platform has to offer.

While it's highly encouraged to use native UI components whenever possible, there are some situations that are best suited for `WebViews`, like:

* Rendering existing HTML/CSS

* Animation and interaction via the HTML5 `<canvas>` tag

* Integrating web-based tools

But be cautious when using `WebViews`. They are the heaviest of native UI components. They take time to render and can affect the performance of your apps if used too often. This will be discussed in more detail in [WebView Use Cases](/guide/Titanium_SDK/Titanium_SDK_How-tos/Integrating_Web_Content/WebView_Use_Cases.html).

## WebView documents

**[The WebView Component](/guide/Titanium_SDK/Titanium_SDK_How-tos/Integrating_Web_Content/The_WebView_Component.html)**

In this document, you'll learn how to use the `Ti.UI.WebView` component to display and interact with web content in your apps. You'll see how to use both static and dynamic local web content, as well as existing web pages, RSS feeds, and other remote web content. You'll also find some resources for optimizing web content to work well with `WebViews` (and mobile browsers).

**[Communication Between WebViews and Titanium](/guide/Titanium_SDK/Titanium_SDK_How-tos/Integrating_Web_Content/Communication_Between_WebViews_and_Titanium.html)**

Here you'll learn how to use Titanium application level events to bidirectionally communicate between Javascript code in `WebViews` and native Titanium code. This gives you the ability to have web content interact with the native Titanium environment and vice versa.

**[WebView Use Cases](/guide/Titanium_SDK/Titanium_SDK_How-tos/Integrating_Web_Content/WebView_Use_Cases.html)**

Finally, you'll explore some common use cases of the `Ti.UI.WebView` in Titanium apps. You will also further explore why caution must be taken to not overuse these components, particularly when the same result could be achieved with native components.
