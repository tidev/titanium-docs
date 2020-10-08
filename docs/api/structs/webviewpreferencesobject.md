---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/WebViewConfiguration.yml
---
# WebViewPreferencesObject

<TypeHeader/>

## Examples

### Usage of WebViewConfiguration with WebView in iOS

Creates a configuration object and use it as property of webview.

``` js
var config = Ti.UI.iOS.createWebViewConfiguration({ 
    allowsPictureInPictureMediaPlayback: true,
    preferences: { 
        minimumFontSize : 20,
    }, 
});

var webView = Ti.UI.createWebView({
    configuration: config,
    url: 'https://www.google.com'
});
var window = Ti.UI.createWindow();
window.add(webView);
window.open();
```

<ApiDocs/>
