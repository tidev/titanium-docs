---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/WebView.yml
---
# BackForwardListItem

<TypeHeader/>

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
