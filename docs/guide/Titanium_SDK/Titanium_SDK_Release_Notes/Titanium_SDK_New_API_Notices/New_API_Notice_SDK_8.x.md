---
title: New API Notice SDK 8.x
weight: '10'
---

# New API Notice SDK 8.x

List of all new API notices for SDK 8.x.

## SDK 8.x

### 8.1.0

The following APIs are new or have expanded platform support in release 8.1.0.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Database.DB.executeAll | method | Synchronously executes an array of SQL statements against the database and returns an array of `ResultSet`.On failure, this will throw an Error that reports the failed index and partial results(New API, supported on Android.) |
| Titanium.Database.DB.executeAllAsync | method | Asynchronously executes an array of SQL statements against the database and fires a callback with a possible Error, and an array of `ResultSet`.On failure, this will call the callback with an Error that reports the failed index, and a second arguemnt with the partial results(New API, supported on Android.) |
| Titanium.Database.DB.executeAsync | method | Asynchronously executes an SQL statement against the database and fires a callback with a possible `Error` argument, and a second argument holding a possible `ResultSet`.(New API, supported on Android.) |
| Titanium.Platform.canOpenURL | method | Returns whether the system is configured with a default application to handle the URL's protocol/scheme.(Added support for Android.) |
| Titanium.UI.Animation.dampingRatio | property | The damping ratio for the spring animation as it approaches its quiescent state.(New API, supported on iPhone and iPad.) |
| Titanium.UI.Animation.getDampingRatio | method | Access Titanium.UI.Animation.dampingRatio instead. |
| Titanium.UI.Animation.getSpringVelocity | method | Access Titanium.UI.Animation.springVelocity instead. |
| Titanium.UI.Animation.setDampingRatio | method | Set the value using Titanium.UI.Animation.dampingRatio instead. |
| Titanium.UI.Animation.setSpringVelocity | method | Set the value using Titanium.UI.Animation.springVelocity instead. |
| Titanium.UI.Animation.springVelocity | property | The initial spring velocity. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getSeparatorStyle | method | Access Titanium.UI.ListView.separatorStyle instead. |
| Titanium.UI.ListView.getShowSearchBarInNavBar | method | Access Titanium.UI.ListView.showSearchBarInNavBar instead. |
| Titanium.UI.ListView.separatorStyle | property | Separator style constant. (Added support for Android.) |
| Titanium.UI.ListView.setSeparatorStyle | method | Set the value using Titanium.UI.ListView.separatorStyle instead. |
| Titanium.UI.ListView.setShowSearchBarInNavBar | method | Set the value using Titanium.UI.ListView.showSearchBarInNavBar instead. |
| Titanium.UI.ListView.showSearchBarInNavBar | property | A Boolean indicating whether search bar will be in navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_STYLE\_LARGE\_TITLE | property | Specifies the text style for the Font Object. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getShowSearchBarInNavBar | method | Access Titanium.UI.TableView.showSearchBarInNavBar instead. |
| Titanium.UI.TableView.setShowSearchBarInNavBar | method | Set the value using Titanium.UI.TableView.showSearchBarInNavBar instead. |
| Titanium.UI.TableView.showSearchBarInNavBar | property | A Boolean indicating whether search bar will be in navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.setHtml | method | Sets the value of html property. (Added support for Android.) |
| Titanium.UI.Window.getHidesSearchBarWhenScrolling | method | Access Titanium.UI.Window.hidesSearchBarWhenScrolling instead. |
| Titanium.UI.Window.hidesSearchBarWhenScrolling | property | A Boolean value indicating whether the integrated search bar is hidden when scrolling any underlying content. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHidesSearchBarWhenScrolling | method | Set the value using Titanium.UI.Window.hidesSearchBarWhenScrolling instead. |

### 8.0.0

The following APIs are new or have expanded platform support in release 8.0.0.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.rootActivity | property | The first activity launched by the application. (New API, supported on Android.) |
| Titanium.App.started | event | Fired after the "app.js" or "alloy.js" gets executed during application startup. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Platform.cpus | method | Returns an array of basic cpu information for all logical processors (New API, supported on Android.) |
| Titanium.UI.ANIMATION\_CURVE\_EASE\_IN | property | Use with Animation.curve to specify an animation that starts slowly and speeds up. (Added support for Android.) |
| Titanium.UI.ANIMATION\_CURVE\_EASE\_IN\_OUT | property | Use with Animation.curve to specify an animation that starts slowly, and speeds up, then slows down at the end of the animation. (Added support for Android.) |
| Titanium.UI.ANIMATION\_CURVE\_EASE\_OUT | property | Use with Animation.curve to specify an animation that starts quickly, then slows down at the end of the animation. (Added support for Android.) |
| Titanium.UI.ANIMATION\_CURVE\_LINEAR | property | Use with Animation.curve to specify an animation that proceeds at a constant rate. (Added support for Android.) |
| Titanium.UI.Android.TABS\_STYLE\_BOTTOM\_NAVIGATION | property | TabGroup style taking advantage of a bottom navigation controller for switching between tabs. (New API, supported on Android.) |
| Titanium.UI.Android.TABS\_STYLE\_DEFAULT | property | The default TabGroup style that places the Tabs bellow the ActionBar and above the Window content. (New API, supported on Android.) |
| Titanium.UI.Animation.curve | property | Animation curve or easing function to apply to the animation. (Added support for Android.) |
| Titanium.UI.Matrix2D | object | The 2D Matrix is an object for holding values for an affine transformation matrix. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Matrix3D | object | The 3D Matrix is an object for holding values for a 3D affine transform. (New API, supported on iPhone and iPad.) |
| Titanium.UI.NavigationWindow | object | A `NavigationWindow` implements a specialized view that manages the navigation of hierarchical content. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ProgressBar.trackTintColor | property | The color shown for the portion of the progress bar that is not filled. (Added support for Android.) |
| Titanium.UI.Tab.activeTitleColor | property | Defines the color of the title of tab when it's active. (Added support for Android.) |
| Titanium.UI.Tab.titleColor | property | Defines the color of the title of tab when it's inactive. (Added support for Android.) |
| Titanium.UI.TabGroup.shiftMode | property | Determines whether the BOTTOM\_NAVIGATION\_VIEW\_STYLE uses shiftMode. (New API, supported on Android.) |
| Titanium.UI.TabGroup.style | property | Property defining which style for the TabGroup to be used. (New API, supported on Android.) |
| Titanium.UI.TabbedBar | object | A button bar that maintains a selected state. (Added support for Android.) |
| Titanium.UI.WebView.addScriptMessageHandler | method | Adds a script message handler. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.addUserScript | method | Adds a user script. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.allowedURLSchemes | property | List of allowed URL schemes for the web view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.allowsBackForwardNavigationGestures | property | A Boolean value indicating whether horizontal swipe gestures will trigger back-forward list navigations. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.backForwardList | method | An object which maintains a list of visited pages used to go back and forward to the most recent page.  <br />(New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.cachePolicy | property | The cache policy for the request. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.configuration | property | The configuration for the new web view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.handleurl | event | Fired when Titanium.UI.WebView.allowedURLSchemes contains scheme of opening url. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.message | event | Fired when a script message is received from a webpage. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.progress | property | An estimate of what fraction of the current navigation has been loaded. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.progress | event | Fired when web page download progresses. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.redirect | event | Fired when a web view receives a server redirect. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.removeAllUserScripts | method | Removes all associated user scripts. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.removeScriptMessageHandler | method | Removes a script message handler. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.secure | property | A Boolean value indicating whether all resources on the page have been loaded through securely encrypted connections. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.selectionGranularity | property | The level of granularity with which the user can interactively select content in the web view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.sslerror | event | Fired when an SSL error occurred. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.startListeningToProperties | method | Add native properties for observing for change. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.stopListeningToProperties | method | Remove native properties from observing. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.takeSnapshot | method | Takes a snapshot of the view's visible viewport. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.timeout | property | The timeout interval for the request, in seconds. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.title | property | Returns page title of webpage. (New API, supported on iPhone and iPad.) |
| Titanium.UI.createMatrix3D | method | Creates and returns an instance of Titanium.UI.Matrix3D. (New API, supported on iPhone and iPad.) |
| Titanium.UI.createNavigationWindow | method | Creates and returns an instance of Titanium.UI.NavigationWindow. (New API, supported on iPhone and iPad.) |
| Titanium.UI.createTabbedBar | method | Creates and returns an instance of Titanium.UI.TabbedBar. (Added support for Android.) |
| Titanium.UI.iOS.ACTION\_POLICY\_ALLOW | property | Allow the navigation to continue. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.ACTION\_POLICY\_CANCEL | property | Cancel the navigation. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AUDIOVISUAL\_MEDIA\_TYPE\_ALL | property | All media types require a user gesture to begin playing. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AUDIOVISUAL\_MEDIA\_TYPE\_AUDIO | property | Media types containing audio require a user gesture to begin playing. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AUDIOVISUAL\_MEDIA\_TYPE\_NONE | property | No media types require a user gesture to begin playing. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AUDIOVISUAL\_MEDIA\_TYPE\_VIDEO | property | Media types containing video require a user gesture to begin playing. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.CACHE\_POLICY\_RELOAD\_IGNORING\_LOCAL\_CACHE\_DATA | property | Specifies that the data for the URL load should be loaded from the originating source. No existing cache data should be used to satisfy a URL load request. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.CACHE\_POLICY\_RETURN\_CACHE\_DATA\_DONT\_LOAD | property | Specifies that the existing cache data should be used to satisfy a request, regardless of its age or expiration date. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.CACHE\_POLICY\_RETURN\_CACHE\_DATA\_ELSE\_LOAD | property | Specifies that the existing cached data should be used to satisfy the request, regardless of its age or expiration date. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.CACHE\_POLICY\_USE\_PROTOCOL\_CACHE\_POLICY | property | Specifies that the caching logic defined in the protocol implementation, if any, is used for a particular URL load request. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.CREDENTIAL\_PERSISTENCE\_FOR\_SESSION | property | Credential should be stored only for this session. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.CREDENTIAL\_PERSISTENCE\_NONE | property | Credential should not be stored. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.CREDENTIAL\_PERSISTENCE\_PERMANENT | property | Credential should be stored in the keychain. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.CREDENTIAL\_PERSISTENCE\_SYNCHRONIZABLE | property | Credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning AppleID. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.INJECTION\_TIME\_DOCUMENT\_END | property | Inject the script after the document finishes loading, but before other subresources finish loading. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.INJECTION\_TIME\_DOCUMENT\_START | property | Inject the script after the document element is created, but before any other content is loaded. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SELECTION\_GRANULARITY\_CHARACTER | property | Selection endpoints can be placed at any character boundary. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SELECTION\_GRANULARITY\_DYNAMIC | property | Selection granularity varies automatically depending on the selection. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.WebViewConfiguration | object | A collection of properties used to initialize a web view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.WebViewDecisionHandler | object | It represents the decision handler to tell to webview, whether allow or cancel the navigation. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.WebViewProcessPool | object | It represents a pool of Web Content processes. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createWebViewConfiguration | method | Creates and returns an instance of Titanium.UI.iOS.WebViewConfiguration. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createWebViewDecisionHandler | method | Creates and returns an instance of Titanium.UI.iOS.WebViewDecisionHandler. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createWebViewProcessPool | method | Creates and returns an instance of Titanium.UI.iOS.WebViewProcessPool. (New API, supported on iPhone and iPad.) |
