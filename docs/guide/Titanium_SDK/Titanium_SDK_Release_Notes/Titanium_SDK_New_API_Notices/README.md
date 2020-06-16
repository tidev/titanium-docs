---
title: Titanium SDK New API Notices
weight: '60'
---

# Titanium SDK New API Notices

This document lists every SDK new API notice.

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

List of all new API notices for SDK 7.x.

## SDK 7.x

### 7.5.0

| API | Type | Notes |
| --- | --- | --- |
| Global.console.timeLog | method | Log duration taken so far for an operation. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Android.Activity.userinteraction | event | Called whenever a key, touch, or trackball event is dispatched to the activity. (New API, supported on Android.) |
| Titanium.Android.NotificationChannel.getSound | method | Gets the value of the Titanium.Android.NotificationChannel.sound property. (New API, supported on Android.) |
| Titanium.Android.NotificationChannel.setSound | method | Sets the value of the Titanium.Android.NotificationChannel.sound property. (New API, supported on Android.) |
| Titanium.Android.NotificationChannel.sound | property | A URL to the sound to play. (New API, supported on Android.) |
| Titanium.App.Android.shortcutitemclick | event | Fired when a Titanium.UI.ShortcutItem is clicked. (New API, supported on Android.) |
| Titanium.App.shortcutitemclick | event | Fired when a Titanium.UI.ShortcutItem is clicked. (New API, supported on Android, iPhone and iPad.) |
| Titanium.App.trackUserInteraction | property | Indicates whether or not the user interaction shoud be tracked. (New API, supported on iPhone and iPad.) |
| Titanium.App.userinteraction | event | Called whenever an interaction with the window occurred. To be used together with the Titanium.App.trackUserInteraction property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Locale.change | event | Fired when the device locale changes. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AUDIO\_STATE\_BUFFERING | property | Audio data is being buffered from the network. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AUDIO\_STATE\_INITIALIZED | property | Audio playback is being initialized. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AUDIO\_STATE\_PAUSED | property | Playback is paused. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AUDIO\_STATE\_PLAYING | property | Audio playback is active. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AUDIO\_STATE\_STARTING | property | Audio playback is starting. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AUDIO\_STATE\_STOPPED | property | Audio playback is stopped. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AUDIO\_STATE\_STOPPING | property | Audio playback is stopping. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AUDIO\_STATE\_WAITING\_FOR\_DATA | property | Player is waiting for audio data from the network. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AUDIO\_STATE\_WAITING\_FOR\_QUEUE | property | Player is waiting for audio data to fill the queue. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AudioPlayer.allowsExternalPlayback | property | Indicates whether the player allows switching to "external playback" mode. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.complete | event | Fired when the audio has finished playing. (Added support for iPhone and iPad.) |
| Titanium.Media.AudioPlayer.externalPlaybackActive | property | Indicates whether the player is currently playing video in "external playback" mode. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.getAllowsExternalPlayback | method | Gets the value of the Titanium.Media.AudioPlayer.allowsExternalPlayback property. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.getExternalPlaybackActive | method | Gets the value of the Titanium.Media.AudioPlayer.externalPlaybackActive property. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.getMuted | method | Gets the value of the Titanium.Media.AudioPlayer.muted property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AudioPlayer.getRate | method | Gets the value of the Titanium.Media.AudioPlayer.rate property. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.metadata | event | Fired when the timed metadata was encountered most recently within the media as it plays. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.muted | property | Indicates whether or not audio output of the player is muted. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AudioPlayer.rate | property | Indicates the desired rate of playback; 0.0 means "paused", 1.0 indicates a desire to play at the natural rate of the current item. In addition, 2.0would mean that the audio plays twice as fast. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.release | method | Stops buffering audio data and releases audio resources. (Added support for iPhone and iPad.) |
| Titanium.Media.AudioPlayer.restart | method | Restarts (stops and stars) audio playback. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AudioPlayer.seekToTime | method | Moves the playback cursor and invokes the specified block when the seek operation has either been completed or been interrupted. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.setAllowsExternalPlayback | method | Sets the value of the Titanium.Media.AudioPlayer.allowsExternalPlayback property. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.setMuted | method | Sets the value of the Titanium.Media.AudioPlayer.muted property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.AudioPlayer.setRate | method | Sets the value of the Titanium.Media.AudioPlayer.rate property. (New API, supported on iPhone and iPad.) |
| Titanium.Media.QUALITY\_640x480 | property | Media type constant for medium-quality video recording. (Added support for Android.) |
| Titanium.Media.QUALITY\_HIGH | property | Media type constant for high-quality video recording. (Added support for Android.) |
| Titanium.Media.QUALITY\_IFRAME\_1280x720 | property | Media type constant for medium-quality video recording. (Added support for Android.) |
| Titanium.Media.QUALITY\_LOW | property | Media type constant for low-quality video recording. (Added support for Android.) |
| Titanium.Media.getQUALITY\_640x480 | method | Gets the value of the Titanium.Media.QUALITY\_640x480 property. (Added support for Android.) |
| Titanium.Media.getQUALITY\_IFRAME\_1280x720 | method | Gets the value of the Titanium.Media.QUALITY\_IFRAME\_1280x720 property. (Added support for Android.) |
| Titanium.UI.ATTRIBUTE\_PARAGRAPH\_STYLE | property | Use with Attribute.type to manages the behaviour of string set. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ActivityIndicator.anchorPoint | property | Coordinate of the view about which to pivot an animation. (Added support for Android.) |
| Titanium.UI.ActivityIndicator.getAnchorPoint | method | Gets the value of the Titanium.UI.ActivityIndicator.anchorPoint property. (Added support for Android.) |
| Titanium.UI.ActivityIndicator.setAnchorPoint | method | Sets the value of the Titanium.UI.ActivityIndicator.anchorPoint property. (Added support for Android.) |
| Titanium.UI.AlertDialog.anchorPoint | property | Coordinate of the view about which to pivot an animation. (Added support for Android.) |
| Titanium.UI.AlertDialog.buttonClickRequired | property | Setting this to true requires the end-user to click a dialog button to close the dialog. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.getAnchorPoint | method | Gets the value of the Titanium.UI.AlertDialog.anchorPoint property. (Added support for Android.) |
| Titanium.UI.AlertDialog.getButtonClickRequired | method | Gets the value of the Titanium.UI.AlertDialog.buttonClickRequired property. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.setAnchorPoint | method | Sets the value of the Titanium.UI.AlertDialog.anchorPoint property. (Added support for Android.) |
| Titanium.UI.AlertDialog.setButtonClickRequired | method | Sets the value of the Titanium.UI.AlertDialog.buttonClickRequired property. (New API, supported on Android.) |
| Titanium.UI.Android.FLAG\_TRANSLUCENT\_NAVIGATION | property | Window flag which makes the Android system's navigation bar semi-transparent. (New API, supported on Android.) |
| Titanium.UI.Android.FLAG\_TRANSLUCENT\_STATUS | property | Window flag which makes the Android system's top status bar semi-transparent. (New API, supported on Android.) |
| Titanium.UI.Android.ProgressIndicator.anchorPoint | property | Coordinate of the view about which to pivot an animation. (New API, supported on Android.) |
| Titanium.UI.Android.ProgressIndicator.getAnchorPoint | method | Gets the value of the Titanium.UI.Android.ProgressIndicator.anchorPoint property. (New API, supported on Android.) |
| Titanium.UI.Android.ProgressIndicator.setAnchorPoint | method | Sets the value of the Titanium.UI.Android.ProgressIndicator.anchorPoint property. (New API, supported on Android.) |
| Titanium.UI.Button.attributedString | property | Specify an attributed string for the label. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Button.getAttributedString | method | Gets the value of the Titanium.UI.Button.attributedString property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Button.setAttributedString | method | Sets the value of the Titanium.UI.Button.attributedString property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.EmailDialog.anchorPoint | property | Coordinate of the view about which to pivot an animation. (Added support for Android.) |
| Titanium.UI.EmailDialog.getAnchorPoint | method | Gets the value of the Titanium.UI.EmailDialog.anchorPoint property. (Added support for Android.) |
| Titanium.UI.EmailDialog.setAnchorPoint | method | Sets the value of the Titanium.UI.EmailDialog.anchorPoint property. (Added support for Android.) |
| Titanium.UI.OptionDialog.anchorPoint | property | Coordinate of the view about which to pivot an animation. (Added support for Android.) |
| Titanium.UI.OptionDialog.getAnchorPoint | method | Gets the value of the Titanium.UI.OptionDialog.anchorPoint property. (Added support for Android.) |
| Titanium.UI.OptionDialog.setAnchorPoint | method | Sets the value of the Titanium.UI.OptionDialog.anchorPoint property. (Added support for Android.) |
| Titanium.UI.Picker.anchorPoint | property | Coordinate of the view about which to pivot an animation. (Added support for Android.) |
| Titanium.UI.Picker.getAnchorPoint | method | Gets the value of the Titanium.UI.Picker.anchorPoint property. (Added support for Android.) |
| Titanium.UI.Picker.setAnchorPoint | method | Sets the value of the Titanium.UI.Picker.anchorPoint property. (Added support for Android.) |
| Titanium.UI.ScrollableView.clipViews | property | Determines whether the previous and next pages are clipped, so that they are not visibleadjacent to the current page. (Added support for Android.) |
| Titanium.UI.ScrollableView.getClipViews | method | Gets the value of the Titanium.UI.ScrollableView.clipViews property. (Added support for Android.) |
| Titanium.UI.ScrollableView.getPadding | method | Gets the value of the Titanium.UI.ScrollableView.padding property. (New API, supported on Android.) |
| Titanium.UI.ScrollableView.padding | property | The padding applied to the scrollable view. (New API, supported on Android.) |
| Titanium.UI.ScrollableView.setClipViews | method | Sets the value of the Titanium.UI.ScrollableView.clipViews property. (Added support for Android.) |
| Titanium.UI.ScrollableView.setPadding | method | Sets the value of the Titanium.UI.ScrollableView.padding property. (New API, supported on Android.) |
| Titanium.UI.SearchBar.fieldBackgroundDisabledImage | property | Background image of the text field in disabled state, specified as a local file path or URL. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.fieldBackgroundImage | property | Background image of the text field, specified as a local file path or URL. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.getFieldBackgroundDisabledImage | method | Gets the value of the Titanium.UI.SearchBar.fieldBackgroundDisabledImage property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.getFieldBackgroundImage | method | Gets the value of the Titanium.UI.SearchBar.fieldBackgroundImage property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.setFieldBackgroundDisabledImage | method | Sets the value of the Titanium.UI.SearchBar.fieldBackgroundDisabledImage property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.setFieldBackgroundImage | method | Sets the value of the Titanium.UI.SearchBar.fieldBackgroundImage property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ShortcutItem | object | An application shortcut. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Tab.anchorPoint | property | Coordinate of the view about which to pivot an animation. (Added support for Android.) |
| Titanium.UI.Tab.getAnchorPoint | method | Gets the value of the Titanium.UI.Tab.anchorPoint property. (Added support for Android.) |
| Titanium.UI.Tab.setAnchorPoint | method | Sets the value of the Titanium.UI.Tab.anchorPoint property. (Added support for Android.) |
| Titanium.UI.TabGroup.anchorPoint | property | Coordinate of the view about which to pivot an animation. (Added support for Android.) |
| Titanium.UI.TabGroup.getAnchorPoint | method | Gets the value of the Titanium.UI.TabGroup.anchorPoint property. (Added support for Android.) |
| Titanium.UI.TabGroup.setAnchorPoint | method | Sets the value of the Titanium.UI.TabGroup.anchorPoint property. (Added support for Android.) |
| Titanium.UI.TextArea.getLines | method | Gets the value of the Titanium.UI.TextArea.lines property. (New API, supported on Android.) |
| Titanium.UI.TextArea.getMaxLines | method | Gets the value of the Titanium.UI.TextArea.maxLines property. (New API, supported on Android.) |
| Titanium.UI.TextArea.lines | property | Number of lines tall the text area height will be, if set. (New API, supported on Android.) |
| Titanium.UI.TextArea.maxLines | property | Maximum line count of text field input. (New API, supported on Android.) |
| Titanium.UI.TextArea.setLines | method | Sets the value of the Titanium.UI.TextArea.lines property. (New API, supported on Android.) |
| Titanium.UI.TextArea.setMaxLines | method | Sets the value of the Titanium.UI.TextArea.maxLines property. (New API, supported on Android.) |
| Titanium.UI.TextField.getPasswordRules | method | Gets the value of the Titanium.UI.TextField.passwordRules property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextField.passwordRules | property | Set password rules that should be used for this text field. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextField.setPasswordRules | method | Sets the value of the Titanium.UI.TextField.passwordRules property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.anchorPoint | property | Coordinate of the view about which to pivot an animation. (Added support for Android.) |
| Titanium.UI.View.getAnchorPoint | method | Gets the value of the Titanium.UI.View.anchorPoint property. (Added support for Android.) |
| Titanium.UI.View.setAnchorPoint | method | Sets the value of the Titanium.UI.View.anchorPoint property. (Added support for Android.) |
| Titanium.UI.WebView.getMixedContentMode | method | Gets the value of the Titanium.UI.WebView.mixedContentMode property. (New API, supported on Android.) |
| Titanium.UI.WebView.getOnlink | method | Gets the value of the Titanium.UI.WebView.onlink property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.mixedContentMode | property | If `true`, allows the loading of insecure resources from a secure origin. (New API, supported on Android.) |
| Titanium.UI.WebView.onlink | property | Fired before navigating to a link. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setMixedContentMode | method | Sets the value of the Titanium.UI.WebView.mixedContentMode property. (New API, supported on Android.) |
| Titanium.UI.WebView.setOnlink | method | Sets the value of the Titanium.UI.WebView.onlink property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Window.extendSafeArea | property | Specifies whether the screen insets/notches are allowed to overlap the window's content or not. (Added support for Android.) |
| Titanium.UI.Window.getExtendSafeArea | method | Gets the value of the Titanium.UI.Window.extendSafeArea property. (Added support for Android.) |
| Titanium.UI.Window.getHidesBackButton | method | Gets the value of the Titanium.UI.Window.hidesBackButton property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getSafeAreaPadding | method | Gets the value of the Titanium.UI.Window.safeAreaPadding property. (New API, supported on Android.) |
| Titanium.UI.Window.hidesBackButton | property | Set this to true to hide the back button of navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.safeAreaPadding | property | The padding needed to safely display content without it being overlapped by the screen insets and notches. (New API, supported on Android.) |
| Titanium.UI.Window.setExtendSafeArea | method | Sets the value of the Titanium.UI.Window.extendSafeArea property. (Added support for Android.) |
| Titanium.UI.Window.setHidesBackButton | method | Sets the value of the Titanium.UI.Window.hidesBackButton property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.createShortcutItem | method | Creates and returns an instance of Titanium.UI.ShortcutItem. (New API, supported on Android, iPhone and iPad.) |

### 7.4.0

The following APIs are new or have expanded platform support in Release 7.4.0 as of September 17th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_PROVISIONAL | property | The application is provisionally authorized to post non-interruptive user notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_TYPE\_CRITICAL\_ALERT | property | The ability to play sounds for critical alerts.Use with the types property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_TYPE\_PROVIDES\_APP\_NOTIFICATION\_SETTINGS | property | An option indicating the system should display a button for in-app notification settings.Use with the types property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_TYPE\_PROVISIONAL | property | The ability to post non-interrupting notifications provisionally to the Notification Center.Use with the types property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.deleteAllSavedUserActivities | method | Deletes all user activities created by your app. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.deleteSavedUserActivitiesForPersistentIdentifiers | method | Deletes user activities created by your app that have the specified persistent identifiers. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.eligibleForPrediction | property | A Boolean value that determines whether Siri can suggest the user activity as a shortcut to the user. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.getEligibleForPrediction | method | Gets the value of the Titanium.App.iOS.UserActivity.eligibleForPrediction property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.getPersistentIdentifier | method | Gets the value of the Titanium.App.iOS.UserActivity.persistentIdentifier property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.persistentIdentifier | property | A value used to identify the user activity. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.setEligibleForPrediction | method | Sets the value of the Titanium.App.iOS.UserActivity.eligibleForPrediction property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.setPersistentIdentifier | method | Sets the value of the Titanium.App.iOS.UserActivity.persistentIdentifier property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity.useractivitydeleted | event | Fired when the user activity get deleted using the Titanium.App.iOS.UserActivity.deleteAllSavedUserActivities or Titanium.App.iOS.UserActivity.deleteSavedUserActivitiesForPersistentIdentifiers methods. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationCategory.categorySummaryFormat | property | A format string for the summary description used when the system groups the category's notifications. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NEW\_PASSWORD | property | Specifies the expectation of a new password. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ONE\_TIME\_CODE | property | Specifies the expectation of a single-factor SMS login code. (New API, supported on iPhone and iPad.) |

### 7.3.1

The following APIs are new or have expanded platform support in Release 7.3.1 as of August 30th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Global.console.time | method | Start a timer to track duration of an operation. (New API, supported on Android, iPhone and iPad.) |
| Global.console.timeEnd | method | Stop a timer that was previously started. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Android.R.animator | property | Animator resources. See R.animator in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.bool | property | Boolean resources. See R.bool in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.fraction | property | Fraction resources. See R.fraction in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.interpolator | property | Interpolator resources. See R.fraction in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.menu | property | Menu resources. See R.menu in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.mipmap | property | Mipmap resources. See R.mipmap in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.plurals | property | Plurals resources. See R.plurals in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.raw | property | Raw resources. See R.raw in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.transition | property | Transition resources. See R.transition in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.xml | property | XML resources. See R.xml in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.Service.foregroundCancel | method | Puts the service into the "background" state and removes its foreground notification. (New API, supported on Android.) |
| Titanium.Android.Service.foregroundNotify | method | Puts the service into the "foreground" state and displays a notification. (New API, supported on Android.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_ALERT\_STYLE\_ALERT | property | A alert dialog is presented when the notification is received. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_ALERT\_STYLE\_BANNER | property | A banner is presented when the notification is received. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_ALERT\_STYLE\_NONE | property | No banner or alert dialog is presented when the notification is received. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_AUTHORIZED | property | The application is authorized to post user notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_DENIED | property | The application is not authorized to post user notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_NOT\_DETERMINED | property | The user has not yet made a choice regarding whether the application may postuser notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_ALLOW\_IN\_CARPLAY | property | Allow CarPlay to display notifications of this type. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_CUSTOM\_DISMISS\_ACTION | property | Send dismiss actions to the UNUserNotificationCenter object's delegate for handling. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_HIDDEN\_PREVIEWS\_SHOW\_SUBTITLE | property | Show the notification's subtitle, even if the user has disabled notification previews for the app. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_HIDDEN\_PREVIEWS\_SHOW\_TITLE | property | Show the notification's title, even if the user has disabled notification previews for the app. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_NONE | property | No options. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_SETTING\_DISABLED | property | The notification setting is turned off. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_SETTING\_ENABLED | property | The notification setting is turned on. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_SETTING\_NOT\_SUPPORTED | property | The application does not support this notification type. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationCenter | object | The top-level App iOS Notification Center module. It is used to control scheduled notificationsand receive details about the system-wide notification settings. (New API, supported on iPhone and iPad.) |
| Titanium.Filesystem.File.append | method | Appends data to the file identified by this file object. (Added support for Android.) |
| Titanium.Filesystem.File.copy | method | Copies the file identified by this file object to a new path. (Added support for iPhone and iPad.) |
| Titanium.Filesystem.File.createdAt | method | Returns the creation Date for the file identified by this file object. (Added support for Android, iPhone and iPad.) |
| Titanium.Filesystem.File.modifiedAt | method | Returns the last modification Date for the file identified by this file object. (Added support for Android, iPhone and iPad.) |
| Titanium.Geolocation.getShowBackgroundLocationIndicator | method | Gets the value of the Titanium.Geolocation.showBackgroundLocationIndicator property. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.setShowBackgroundLocationIndicator | method | Sets the value of the Titanium.Geolocation.showBackgroundLocationIndicator property. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.showBackgroundLocationIndicator | property | Specifies that an indicator be shown when the app makes use of continuous background location updates. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_CLEAR | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COLOR | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COLOR\_BURN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COLOR\_DODGE | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COPY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DARKEN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_IN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DIFFERENCE | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_EXCLUSION | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_HARD\_LIGHT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_HUE | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_LIGHTEN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_LUMINOSITY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_MULTIPLY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_NORMAL | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_OVERLAY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_PLUS\_DARKER | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SATURATION | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SCREEN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOURCE\_IN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOURCE\_OUT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_XOR | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.MaskedImage | object | A control that displays an image composited with a background image or color. (Added support for Android.) |
| Titanium.UI.TableView.getResultsBackgroundColor | method | Gets the value of the Titanium.UI.TableView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getResultsSeparatorColor | method | Gets the value of the Titanium.UI.TableView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getResultsSeparatorInsets | method | Gets the value of the Titanium.UI.TableView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getResultsSeparatorStyle | method | Gets the value of the Titanium.UI.TableView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getScrollable | method | Gets the value of the Titanium.UI.TableView.scrollable property. (Added support for Android.) |
| Titanium.UI.TableView.resultsBackgroundColor | property | The background color of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.resultsSeparatorColor | property | Separator line color between rows inside search results, as a color name or hex triplet (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.resultsSeparatorInsets | property | The insets for search results separators (applies to all cells & iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.resultsSeparatorStyle | property | The separator style of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.scrollable | property | If `true`, the tableview can be scrolled. (Added support for Android.) |
| Titanium.UI.TableView.setResultsBackgroundColor | method | Sets the value of the Titanium.UI.TableView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setResultsSeparatorColor | method | Sets the value of the Titanium.UI.TableView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setResultsSeparatorInsets | method | Sets the value of the Titanium.UI.TableView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setResultsSeparatorStyle | method | Sets the value of the Titanium.UI.TableView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setScrollable | method | Sets the value of the Titanium.UI.TableView.scrollable property. (Added support for Android.) |
| Titanium.UI.View.getHorizontalMotionEffect | method | Gets the value of the Titanium.UI.View.horizontalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.getVerticalMotionEffect | method | Gets the value of the Titanium.UI.View.verticalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.horizontalMotionEffect | property | Adds a horizontal parallax effect to the view (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.setHorizontalMotionEffect | method | Sets the value of the Titanium.UI.View.horizontalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.setVerticalMotionEffect | method | Sets the value of the Titanium.UI.View.verticalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.verticalMotionEffect | property | Adds a vertical parallax effect to the view (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.getZoomLevel | method | Gets the value of the Titanium.UI.WebView.zoomLevel property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setZoomLevel | method | Sets the value of the Titanium.UI.WebView.zoomLevel property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.zoomLevel | property | Manage the zoom-level of the current page. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Window.getHomeIndicatorAutoHidden | method | Gets the value of the Titanium.UI.Window.homeIndicatorAutoHidden property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getNavigationWindow | method | Gets the value of the Titanium.UI.Window.navigationWindow property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.homeIndicatorAutoHidden | property | Boolean value indicating whether the system is allowed to hide the visual indicator for returning to the Home screen. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.navigationWindow | property | The Titanium.UI.iOS.NavigationWindow instance hosting this window. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHomeIndicatorAutoHidden | method | Sets the value of the Titanium.UI.Window.homeIndicatorAutoHidden property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.createMaskedImage | method | Creates and returns an instance of Titanium.UI.MaskedImage. (Added support for Android.) |
| Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_CONTEXT | property | View presented over its parent window. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_FULL\_SCREEN | property | Presented view covers the screen. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setMODAL\_PRESENTATION\_OVER\_CURRENT\_CONTEXT | method | Sets the value of the Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_CONTEXT property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setMODAL\_PRESENTATION\_OVER\_CURRENT\_FULL\_SCREEN | method | Sets the value of the Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_FULL\_SCREEN property. (New API, supported on iPhone and iPad.) |

### 7.3.0

The following APIs are new or have expanded platform support in Release 7.3.0 as of August 17th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Global.console.time | method | Start a timer to track duration of an operation. (New API, supported on Android, iPhone and iPad.) |
| Global.console.timeEnd | method | Stop a timer that was previously started. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Android.R.animator | property | Animator resources. See R.animator in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.bool | property | Boolean resources. See R.bool in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.fraction | property | Fraction resources. See R.fraction in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.interpolator | property | Interpolator resources. See R.fraction in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.menu | property | Menu resources. See R.menu in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.mipmap | property | Mipmap resources. See R.mipmap in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.plurals | property | Plurals resources. See R.plurals in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.raw | property | Raw resources. See R.raw in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.transition | property | Transition resources. See R.transition in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.xml | property | XML resources. See R.xml in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.Service.foregroundCancel | method | Puts the service into the "background" state and removes its foreground notification. (New API, supported on Android.) |
| Titanium.Android.Service.foregroundNotify | method | Puts the service into the "foreground" state and displays a notification. (New API, supported on Android.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_ALERT\_STYLE\_ALERT | property | A alert dialog is presented when the notification is received. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_ALERT\_STYLE\_BANNER | property | A banner is presented when the notification is received. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_ALERT\_STYLE\_NONE | property | No banner or alert dialog is presented when the notification is received. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_AUTHORIZED | property | The application is authorized to post user notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_DENIED | property | The application is not authorized to post user notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_NOT\_DETERMINED | property | The user has not yet made a choice regarding whether the application may postuser notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_ALLOW\_IN\_CARPLAY | property | Allow CarPlay to display notifications of this type. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_CUSTOM\_DISMISS\_ACTION | property | Send dismiss actions to the UNUserNotificationCenter object's delegate for handling. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_HIDDEN\_PREVIEWS\_SHOW\_SUBTITLE | property | Show the notification's subtitle, even if the user has disabled notification previews for the app. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_HIDDEN\_PREVIEWS\_SHOW\_TITLE | property | Show the notification's title, even if the user has disabled notification previews for the app. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_NONE | property | No options. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_SETTING\_DISABLED | property | The notification setting is turned off. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_SETTING\_ENABLED | property | The notification setting is turned on. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_SETTING\_NOT\_SUPPORTED | property | The application does not support this notification type. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationCenter | object | The top-level App iOS Notification Center module. It is used to control scheduled notificationsand receive details about the system-wide notification settings. (New API, supported on iPhone and iPad.) |
| Titanium.Filesystem.File.append | method | Appends data to the file identified by this file object. (Added support for Android.) |
| Titanium.Filesystem.File.copy | method | Copies the file identified by this file object to a new path. (Added support for iPhone and iPad.) |
| Titanium.Filesystem.File.createdAt | method | Returns the creation Date for the file identified by this file object. (Added support for Android, iPhone and iPad.) |
| Titanium.Filesystem.File.modifiedAt | method | Returns the last modification Date for the file identified by this file object. (Added support for Android, iPhone and iPad.) |
| Titanium.Geolocation.getShowBackgroundLocationIndicator | method | Gets the value of the Titanium.Geolocation.showBackgroundLocationIndicator property. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.setShowBackgroundLocationIndicator | method | Sets the value of the Titanium.Geolocation.showBackgroundLocationIndicator property. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.showBackgroundLocationIndicator | property | Specifies that an indicator be shown when the app makes use of continuous background location updates. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_CLEAR | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COLOR | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COLOR\_BURN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COLOR\_DODGE | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COPY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DARKEN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_IN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DIFFERENCE | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_EXCLUSION | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_HARD\_LIGHT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_HUE | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_LIGHTEN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_LUMINOSITY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_MULTIPLY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_NORMAL | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_OVERLAY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_PLUS\_DARKER | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SATURATION | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SCREEN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOURCE\_IN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOURCE\_OUT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_XOR | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.MaskedImage | object | A control that displays an image composited with a background image or color. (Added support for Android.) |
| Titanium.UI.TableView.getResultsBackgroundColor | method | Gets the value of the Titanium.UI.TableView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getResultsSeparatorColor | method | Gets the value of the Titanium.UI.TableView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getResultsSeparatorInsets | method | Gets the value of the Titanium.UI.TableView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getResultsSeparatorStyle | method | Gets the value of the Titanium.UI.TableView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getScrollable | method | Gets the value of the Titanium.UI.TableView.scrollable property. (Added support for Android.) |
| Titanium.UI.TableView.resultsBackgroundColor | property | The background color of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.resultsSeparatorColor | property | Separator line color between rows inside search results, as a color name or hex triplet (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.resultsSeparatorInsets | property | The insets for search results separators (applies to all cells & iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.resultsSeparatorStyle | property | The separator style of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.scrollable | property | If `true`, the tableview can be scrolled. (Added support for Android.) |
| Titanium.UI.TableView.setResultsBackgroundColor | method | Sets the value of the Titanium.UI.TableView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setResultsSeparatorColor | method | Sets the value of the Titanium.UI.TableView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setResultsSeparatorInsets | method | Sets the value of the Titanium.UI.TableView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setResultsSeparatorStyle | method | Sets the value of the Titanium.UI.TableView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setScrollable | method | Sets the value of the Titanium.UI.TableView.scrollable property. (Added support for Android.) |
| Titanium.UI.View.getHorizontalMotionEffect | method | Gets the value of the Titanium.UI.View.horizontalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.getVerticalMotionEffect | method | Gets the value of the Titanium.UI.View.verticalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.horizontalMotionEffect | property | Adds a horizontal parallax effect to the view (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.setHorizontalMotionEffect | method | Sets the value of the Titanium.UI.View.horizontalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.setVerticalMotionEffect | method | Sets the value of the Titanium.UI.View.verticalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.verticalMotionEffect | property | Adds a vertical parallax effect to the view (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.getZoomLevel | method | Gets the value of the Titanium.UI.WebView.zoomLevel property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setZoomLevel | method | Sets the value of the Titanium.UI.WebView.zoomLevel property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.zoomLevel | property | Manage the zoom-level of the current page. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Window.getHomeIndicatorAutoHidden | method | Gets the value of the Titanium.UI.Window.homeIndicatorAutoHidden property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getNavigationWindow | method | Gets the value of the Titanium.UI.Window.navigationWindow property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.homeIndicatorAutoHidden | property | Boolean value indicating whether the system is allowed to hide the visual indicator for returning to the Home screen. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.navigationWindow | property | The Titanium.UI.iOS.NavigationWindow instance hosting this window. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHomeIndicatorAutoHidden | method | Sets the value of the Titanium.UI.Window.homeIndicatorAutoHidden property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.createMaskedImage | method | Creates and returns an instance of Titanium.UI.MaskedImage. (Added support for Android.) |
| Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_CONTEXT | property | View presented over its parent window. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_FULL\_SCREEN | property | Presented view covers the screen. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setMODAL\_PRESENTATION\_OVER\_CURRENT\_CONTEXT | method | Sets the value of the Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_CONTEXT property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setMODAL\_PRESENTATION\_OVER\_CURRENT\_FULL\_SCREEN | method | Sets the value of the Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_FULL\_SCREEN property. (New API, supported on iPhone and iPad.) |

### 7.2.1

The following APIs are new or have expanded platform support in Release 7.2.1 as of August 17th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Analytics.getOptedOut | method | Gets the value of the Titanium.Analytics.optedOut property. (New API, supported on Android, iPhone, iPad and Windows Phone.) |
| Titanium.Analytics.optedOut | property | Allows the user to opt out from Analytics during runtime to comply to GPDR. (New API, supported on Android, iPhone, iPad and Windows Phone.) |
| Titanium.Analytics.setOptedOut | method | Sets the value of the Titanium.Analytics.optedOut property. (New API, supported on Android, iPhone, iPad and Windows Phone.) |

### 7.1.1

The following APIs are new or have expanded platform support in Release 7.1.1 as of May 2nd, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.ActionBar.customView | property | Sets a view to be used for a custom navigation mode. (New API, supported on Android.) |
| Titanium.Android.ActionBar.getCustomView | method | Gets the value of the Titanium.Android.ActionBar.customView property. (New API, supported on Android.) |
| Titanium.Android.ActionBar.setCustomView | method | Sets the value of the Titanium.Android.ActionBar.customView property. (New API, supported on Android.) |
| Titanium.Android.NotificationManager.areNotificationsEnabled | method | Returns whether showing notifications is enabled for the application. (New API, supported on Android.) |
| Titanium.Calendar.Event.createRecurrenceRule | method | Creates an recurrence pattern for a recurring event.All of the properties for the recurrence rule must be set during creation. The recurrence rule properties cannot be modified. (Added support for Android.) |
| Titanium.Calendar.Event.getRecurrenceRules | method | Gets the value of the Titanium.Calendar.Event.recurrenceRules property. (Added support for Android.) |
| Titanium.Calendar.Event.recurrenceRules | property | The recurrence rules for the calendar item. (Added support for Android.) |
| Titanium.Calendar.Event.save | method | Saves changes to an event permanently. (Added support for Android.) |
| Titanium.Calendar.Event.setRecurrenceRules | method | Sets the value of the Titanium.Calendar.Event.recurrenceRules property. (Added support for Android.) |
| Titanium.Calendar.RecurrenceRule | object | An object that is used to describe the recurrence pattern for a recurring event. (Added support for Android.) |
| Titanium.Media.VideoPlayer.getShowsControls | method | Gets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for Android.) |
| Titanium.Media.VideoPlayer.setShowsControls | method | Sets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for Android.) |
| Titanium.Media.VideoPlayer.showsControls | property | Whether or not the receiver shows playback controls. Default is true. (Added support for Android.) |
| Titanium.UI.Android.DrawerLayout.getToolbar | method | Gets the value of the Titanium.UI.Android.DrawerLayout.toolbar property. (New API, supported on Android.) |
| Titanium.UI.Android.DrawerLayout.setToolbar | method | Sets the value of the Titanium.UI.Android.DrawerLayout.toolbar property. (New API, supported on Android.) |
| Titanium.UI.Android.DrawerLayout.toolbar | property | A Toolbar instance to use as a toolbar. (New API, supported on Android.) |
| Titanium.UI.Android.SearchView.getHintTextColor | method | Gets the value of the Titanium.UI.Android.SearchView.hintTextColor property. (New API, supported on Android.) |
| Titanium.UI.Android.SearchView.hintTextColor | property | Color of hint text that displays when field is empty. (New API, supported on Android.) |
| Titanium.UI.Android.SearchView.setHintTextColor | method | Sets the value of the Titanium.UI.Android.SearchView.hintTextColor property. (New API, supported on Android.) |
| Titanium.UI.SearchBar.color | property | Color of the text in this text field, as a color name or hex triplet. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.getColor | method | Gets the value of the Titanium.UI.SearchBar.color property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.getHintTextColor | method | Gets the value of the Titanium.UI.SearchBar.hintTextColor property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.hintTextColor | property | Hint text color to display when the field is empty. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.setColor | method | Sets the value of the Titanium.UI.SearchBar.color property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.setHintTextColor | method | Sets the value of the Titanium.UI.SearchBar.hintTextColor property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TabGroup.close | event | Fired when the tab group is closed. (Added support for Android.) |

### 7.1.0

The following APIs are new or have expanded platform support in Release 7.1.0 as of March 14th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.ActionBar.customView | property | Sets a view to be used for a custom navigation mode. (New API, supported on Android.) |
| Titanium.Android.ActionBar.getCustomView | method | Gets the value of the Titanium.Android.ActionBar.customView property. (New API, supported on Android.) |
| Titanium.Android.ActionBar.setCustomView | method | Sets the value of the Titanium.Android.ActionBar.customView property. (New API, supported on Android.) |
| Titanium.Android.NotificationManager.areNotificationsEnabled | method | Returns whether showing notifications is enabled for the application. (New API, supported on Android.) |
| Titanium.Calendar.Event.createRecurrenceRule | method | Creates an recurrence pattern for a recurring event.All of the properties for the recurrence rule must be set during creation. The recurrence rule properties cannot be modified. (Added support for Android.) |
| Titanium.Calendar.Event.getRecurrenceRules | method | Gets the value of the Titanium.Calendar.Event.recurrenceRules property. (Added support for Android.) |
| Titanium.Calendar.Event.recurrenceRules | property | The recurrence rules for the calendar item. (Added support for Android.) |
| Titanium.Calendar.Event.save | method | Saves changes to an event permanently. (Added support for Android.) |
| Titanium.Calendar.Event.setRecurrenceRules | method | Sets the value of the Titanium.Calendar.Event.recurrenceRules property. (Added support for Android.) |
| Titanium.Calendar.RecurrenceRule | object | An object that is used to describe the recurrence pattern for a recurring event. (Added support for Android.) |
| Titanium.Media.VideoPlayer.getShowsControls | method | Gets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for Android.) |
| Titanium.Media.VideoPlayer.setShowsControls | method | Sets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for Android.) |
| Titanium.Media.VideoPlayer.showsControls | property | Whether or not the receiver shows playback controls. Default is true. (Added support for Android.) |
| Titanium.UI.Android.DrawerLayout.getToolbar | method | Gets the value of the Titanium.UI.Android.DrawerLayout.toolbar property. (New API, supported on Android.) |
| Titanium.UI.Android.DrawerLayout.setToolbar | method | Sets the value of the Titanium.UI.Android.DrawerLayout.toolbar property. (New API, supported on Android.) |
| Titanium.UI.Android.DrawerLayout.toolbar | property | A Toolbar instance to use as a toolbar. (New API, supported on Android.) |
| Titanium.UI.Android.SearchView.getHintTextColor | method | Gets the value of the Titanium.UI.Android.SearchView.hintTextColor property. (New API, supported on Android.) |
| Titanium.UI.Android.SearchView.hintTextColor | property | Color of hint text that displays when field is empty. (New API, supported on Android.) |
| Titanium.UI.Android.SearchView.setHintTextColor | method | Sets the value of the Titanium.UI.Android.SearchView.hintTextColor property. (New API, supported on Android.) |
| Titanium.UI.SearchBar.color | property | Color of the text in this text field, as a color name or hex triplet. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.getColor | method | Gets the value of the Titanium.UI.SearchBar.color property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.getHintTextColor | method | Gets the value of the Titanium.UI.SearchBar.hintTextColor property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.hintTextColor | property | Hint text color to display when the field is empty. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.setColor | method | Sets the value of the Titanium.UI.SearchBar.color property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.setHintTextColor | method | Sets the value of the Titanium.UI.SearchBar.hintTextColor property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TabGroup.close | event | Fired when the tab group is closed. (Added support for Android.) |

### 7.0.1

The following APIs are new or have expanded platform support in Release 7.0.1 as of December 21st, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.IMPORTANCE\_DEFAULT | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_HIGH | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_LOW | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_MAX | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_MIN | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_NONE | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_UNSPECIFIED | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.Notification.color | property | Accent color used behind icon. (New API, supported on Android.) |
| Titanium.Android.Notification.getColor | method | Gets the value of the Titanium.Android.Notification.color property. (New API, supported on Android.) |
| Titanium.Android.Notification.setColor | method | Sets the value of the Titanium.Android.Notification.color property. (New API, supported on Android.) |
| Titanium.Android.NotificationChannel | object | Module for notification channels. (New API, supported on Android.) |
| Titanium.Android.QuickSettingsService | object | Android service for creating custom quick settings tiles and handling user's interaction with them. (New API, supported on Android.) |
| Titanium.Android.TILE\_STATE\_ACTIVE | property | QuickSettings tile is active. (New API, supported on Android.) |
| Titanium.Android.TILE\_STATE\_INACTIVE | property | QuickSettings tile is inactive. (New API, supported on Android.) |
| Titanium.Android.TILE\_STATE\_UNAVAILABLE | property | QuickSettings tile is unavailble. (New API, supported on Android.) |
| Titanium.Media.VIDEO\_SCALING\_RESIZE | property | Specifies that the video should be stretched to fill the bounds of layer. (New API, supported on iPhone and iPad.) |
| Titanium.Media.VIDEO\_SCALING\_RESIZE\_ASPECT | property | Specifies that the player should preserve the aspect ratio of video and fit the video within the bounds of layer. (New API, supported on iPhone and iPad.) |
| Titanium.Media.VIDEO\_SCALING\_RESIZE\_ASPECT\_FILL | property | Specifies that the player should preserve the aspect ratio of video and fill the bounds of layer. (New API, supported on iPhone and iPad.) |
| Titanium.Media.VideoPlayer.getShowsControls | method | Gets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for iPhone and iPad.) |
| Titanium.Media.VideoPlayer.setShowsControls | method | Sets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for iPhone and iPad.) |
| Titanium.Media.VideoPlayer.showsControls | property | Whether or not the receiver shows playback controls. Default is true. (Added support for iPhone and iPad.) |
| Titanium.Platform.getIdentifierForAdvertising | method | Gets the value of the Titanium.Platform.identifierForAdvertising property. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.getIdentifierForVendor | method | Gets the value of the Titanium.Platform.identifierForVendor property. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.getIsAdvertisingTrackingEnabled | method | Gets the value of the Titanium.Platform.isAdvertisingTrackingEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.identifierForAdvertising | property | An alphanumeric string unique to each device, used only for serving advertisements. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.identifierForVendor | property | An alphanumeric string that uniquely identifies a device to the app's vendor. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.isAdvertisingTrackingEnabled | property | A Boolean value that indicates whether the user has limited ad tracking. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.setIdentifierForAdvertising | method | Sets the value of the Titanium.Platform.identifierForAdvertising property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_BASELINE\_OFFSET | property | Use with Attribute.type to apply a different baseline to the text. (Added support for Android.) |
| Titanium.UI.ListView.allowsMultipleSelectionDuringEditing | property | Determines whether multiple items of this list view can be selected at the same time while editing the table. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getAllowsMultipleSelectionDuringEditing | method | Gets the value of the Titanium.UI.ListView.allowsMultipleSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getSelectedItems | method | Gets the value of the Titanium.UI.ListView.selectedItems property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.selectedItems | property | Returns the selected list view items. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setAllowsMultipleSelectionDuringEditing | method | Sets the value of the Titanium.UI.ListView.allowsMultipleSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setSelectedItems | method | Sets the value of the Titanium.UI.ListView.selectedItems property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.scrollToTop | method | Moves the top of the scrollable region into the viewable area. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.getHintType | method | Gets the value of the Titanium.UI.TextArea.hintType property. (New API, supported on Android.) |
| Titanium.UI.TextArea.hintType | property | Hint type to display on the text field. (New API, supported on Android.) |
| Titanium.UI.TextArea.setHintType | method | Sets the value of the Titanium.UI.TextArea.hintType property. (New API, supported on Android.) |
| Titanium.UI.TextField.getHintType | method | Gets the value of the Titanium.UI.TextField.hintType property. (New API, supported on Android.) |
| Titanium.UI.TextField.hintType | property | Hint type to display on the text field. (New API, supported on Android.) |
| Titanium.UI.TextField.setHintType | method | Sets the value of the Titanium.UI.TextField.hintType property. (New API, supported on Android.) |
| Titanium.UI.Window.getSustainedPerformanceMode | method | Gets the value of the Titanium.UI.Window.sustainedPerformanceMode property. (New API, supported on Android.) |
| Titanium.UI.Window.setSustainedPerformanceMode | method | Sets the value of the Titanium.UI.Window.sustainedPerformanceMode property. (New API, supported on Android.) |
| Titanium.UI.Window.sustainedPerformanceMode | property | Maintain a sustainable level of performance. (New API, supported on Android.) |

### 7.0.0

The following APIs are new or have expanded platform support in Release 7.0.0 as of December 8th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.IMPORTANCE\_DEFAULT | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_HIGH | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_LOW | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_MAX | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_MIN | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_NONE | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_UNSPECIFIED | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.Notification.color | property | Accent color used behind icon. (New API, supported on Android.) |
| Titanium.Android.Notification.getColor | method | Gets the value of the Titanium.Android.Notification.color property. (New API, supported on Android.) |
| Titanium.Android.Notification.setColor | method | Sets the value of the Titanium.Android.Notification.color property. (New API, supported on Android.) |
| Titanium.Android.NotificationChannel | object | Module for notification channels. (New API, supported on Android.) |
| Titanium.Android.QuickSettingsService | object | Android service for creating custom quick settings tiles and handling user's interaction with them. (New API, supported on Android.) |
| Titanium.Android.TILE\_STATE\_ACTIVE | property | QuickSettings tile is active. (New API, supported on Android.) |
| Titanium.Android.TILE\_STATE\_INACTIVE | property | QuickSettings tile is inactive. (New API, supported on Android.) |
| Titanium.Android.TILE\_STATE\_UNAVAILABLE | property | QuickSettings tile is unavailble. (New API, supported on Android.) |
| Titanium.Media.VIDEO\_SCALING\_RESIZE | property | Specifies that the video should be stretched to fill the bounds of layer. (New API, supported on iPhone and iPad.) |
| Titanium.Media.VIDEO\_SCALING\_RESIZE\_ASPECT | property | Specifies that the player should preserve the aspect ratio of video and fit the video within the bounds of layer. (New API, supported on iPhone and iPad.) |
| Titanium.Media.VIDEO\_SCALING\_RESIZE\_ASPECT\_FILL | property | Specifies that the player should preserve the aspect ratio of video and fill the bounds of layer. (New API, supported on iPhone and iPad.) |
| Titanium.Media.VideoPlayer.getShowsControls | method | Gets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for iPhone and iPad.) |
| Titanium.Media.VideoPlayer.setShowsControls | method | Sets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for iPhone and iPad.) |
| Titanium.Media.VideoPlayer.showsControls | property | Whether or not the receiver shows playback controls. Default is true. (Added support for iPhone and iPad.) |
| Titanium.Platform.getIdentifierForAdvertising | method | Gets the value of the Titanium.Platform.identifierForAdvertising property. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.getIdentifierForVendor | method | Gets the value of the Titanium.Platform.identifierForVendor property. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.getIsAdvertisingTrackingEnabled | method | Gets the value of the Titanium.Platform.isAdvertisingTrackingEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.identifierForAdvertising | property | An alphanumeric string unique to each device, used only for serving advertisements. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.identifierForVendor | property | An alphanumeric string that uniquely identifies a device to the app's vendor. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.isAdvertisingTrackingEnabled | property | A Boolean value that indicates whether the user has limited ad tracking. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.setIdentifierForAdvertising | method | Sets the value of the Titanium.Platform.identifierForAdvertising property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_BASELINE\_OFFSET | property | Use with Attribute.type to apply a different baseline to the text. (Added support for Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS | property | Specifies the expectation of an address. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_CITY | property | Specifies the expectation of a city name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_CITY\_STATE | property | Specifies the expectation of a city name combined with a state name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_LINE1 | property | Specifies the expectation of the first line of a street address. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_LINE2 | property | Specifies the expectation of the second line of a street address. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_STATE | property | Specifies the expectation of a state name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_EXPIRATION\_DATE | property | Specifies the expectation of a card expiration date. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_EXPIRATION\_DAY | property | Specifies the expectation of a card expiration day. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_EXPIRATION\_MONTH | property | Specifies the expectation of a card expiration month. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_EXPIRATION\_YEAR | property | Specifies the expectation of a card expiration year. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_NUMBER | property | Specifies the expectation of a card number. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_SECURITY\_CODE | property | Specifies the expectation of a card security code. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_COUNTRY\_NAME | property | Specifies the expectation of a country name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_EMAIL | property | Specifies the expectation of an email address. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_FAMILY\_NAME | property | Specifies the expectation of a family name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_GIVEN\_NAME | property | Specifies the expectation of a given name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_JOB\_TITLE | property | Specifies the expectation of a job title. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_LOCATION | property | Specifies the expectation of a location, such as a point of interest, an address, or another way to identify a location. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_MIDDLE\_NAME | property | Specifies the expectation of a middle name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NAME | property | Specifies the expectation of a name. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NAME\_PREFIX | property | Specifies the expectation of a prefix or title, such as 'Dr.' (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NAME\_SUFFIX | property | Specifies the expectation of a suffix, such as 'Jr.' (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NICKNAME | property | Specifies the expectation of a nickname. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ORGANIZATION\_NAME | property | Specifies the expectation of an organization name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_PASSWORD | property | Specifies the expectation of a password. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_PHONE | property | Specifies the expectation of a telephone number. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_POSTAL\_CODE | property | Specifies the expectation of a postal code. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_SUBLOCALITY | property | Specifies the expectation of a sublocality. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_URL | property | Specifies the expectation of a URL. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_USERNAME | property | Specifies the expectation of an account or login name. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.ListView.allowsMultipleSelectionDuringEditing | property | Determines whether multiple items of this list view can be selected at the same time while editing the table. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getAllowsMultipleSelectionDuringEditing | method | Gets the value of the Titanium.UI.ListView.allowsMultipleSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getSelectedItems | method | Gets the value of the Titanium.UI.ListView.selectedItems property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.selectedItems | property | Returns the selected list view items. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setAllowsMultipleSelectionDuringEditing | method | Sets the value of the Titanium.UI.ListView.allowsMultipleSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setSelectedItems | method | Sets the value of the Titanium.UI.ListView.selectedItems property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.getRefreshControl | method | Gets the value of the Titanium.UI.ScrollView.refreshControl property. (Added support for Android.) |
| Titanium.UI.ScrollView.refreshControl | property | View positioned above the first row that is only revealed when the user drags the scroll view contents down. (Added support for Android.) |
| Titanium.UI.ScrollView.scrollToTop | method | Moves the top of the scrollable region into the viewable area. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.ScrollView.setRefreshControl | method | Sets the value of the Titanium.UI.ScrollView.refreshControl property. (Added support for Android.) |
| Titanium.UI.TextArea.autofillType | property | Sets the autofill type for the text area. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.getAutofillType | method | Gets the value of the Titanium.UI.TextArea.autofillType property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.getHintType | method | Gets the value of the Titanium.UI.TextArea.hintType property. (New API, supported on Android.) |
| Titanium.UI.TextArea.hintType | property | Hint type to display on the text field. (New API, supported on Android.) |
| Titanium.UI.TextArea.setAutofillType | method | Sets the value of the Titanium.UI.TextArea.autofillType property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.setHintType | method | Sets the value of the Titanium.UI.TextArea.hintType property. (New API, supported on Android.) |
| Titanium.UI.TextField.autofillType | property | Sets the autofill type for the text field. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.getAutofillType | method | Gets the value of the Titanium.UI.TextField.autofillType property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.getHintType | method | Gets the value of the Titanium.UI.TextField.hintType property. (New API, supported on Android.) |
| Titanium.UI.TextField.hintType | property | Hint type to display on the text field. (New API, supported on Android.) |
| Titanium.UI.TextField.setAutofillType | method | Sets the value of the Titanium.UI.TextField.autofillType property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.setHintType | method | Sets the value of the Titanium.UI.TextField.hintType property. (New API, supported on Android.) |
| Titanium.UI.Window.extendSafeArea | property | Specifies whether the content (subviews) of the window will render inside the safe-area or not.Only used in iOS 11.0 and later. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getExtendSafeArea | method | Gets the value of the Titanium.UI.Window.extendSafeArea property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getLargeTitleDisplayMode | method | Gets the value of the Titanium.UI.Window.largeTitleDisplayMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getLargeTitleEnabled | method | Gets the value of the Titanium.UI.Window.largeTitleEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getSustainedPerformanceMode | method | Gets the value of the Titanium.UI.Window.sustainedPerformanceMode property. (New API, supported on Android.) |
| Titanium.UI.Window.largeTitleDisplayMode | property | The mode to use when displaying the title of the navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.largeTitleEnabled | property | A Boolean value indicating whether the title should be displayed in a large format. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setExtendSafeArea | method | Sets the value of the Titanium.UI.Window.extendSafeArea property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setLargeTitleDisplayMode | method | Sets the value of the Titanium.UI.Window.largeTitleDisplayMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setLargeTitleEnabled | method | Sets the value of the Titanium.UI.Window.largeTitleEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setSustainedPerformanceMode | method | Sets the value of the Titanium.UI.Window.sustainedPerformanceMode property. (New API, supported on Android.) |
| Titanium.UI.Window.sustainedPerformanceMode | property | Maintain a sustainable level of performance. (New API, supported on Android.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_ALWAYS | property | Always use a larger title when this item is top most. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_AUTOMATIC | property | Automatically use the large out-of-line title based on the state of the previous item in the navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_NEVER | property | Never use a larger title when this item is top most. (New API, supported on iPhone and iPad.) |

List of all new API notices for SDK 6.x.

## SDK 6.x

### 6.3.0

The following APIs are new or have expanded platform support in Release 6.3.0 as of November 1st, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.UI.Window.extendSafeArea | property | Specifies whether the content (subviews) of the window will render inside the safe-area or not. Only used in iOS 11 and later. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getExtendSafeArea | method | Gets the value of the Titanium.UI.Window.extendSafeArea property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getLargeTitleDisplayMode | method | Gets the value of the Titanium.UI.Window.largeTitleDisplayMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getLargeTitleEnabled | method | Gets the value of the Titanium.UI.Window.largeTitleEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.largeTitleDisplayMode | property | The mode to use when displaying the title of the navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.largeTitleEnabled | property | A Boolean value indicating whether the title should be displayed in a large format. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setExtendSafeArea | method | Sets the value of the Titanium.UI.Window.extendSafeArea property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setLargeTitleDisplayMode | method | Sets the value of the Titanium.UI.Window.largeTitleDisplayMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setLargeTitleEnabled | method | Sets the value of the Titanium.UI.Window.largeTitleEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_ALWAYS | property | Always use a larger title when this item is top most. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_AUTOMATIC | property | Automatically use the large out-of-line title based on the state of the p revious item in the navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_NEVER | property | Never use a larger title when this item is top most. (New API, supported on iPhone and iPad.) |

### 6.2.0

The following APIs are new or have expanded platform support in Release 6.2.0 as of September 13th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.Activity.getSupportToolbar | method | Gets the value of the Titanium.Android.Activity.supportToolbar property. (New API, supported on Android.) |
| Titanium.Android.Activity.setSupportActionBar | method | Sets a toolbar instance to be used as an ActionBar. (New API, supported on Android.) |
| Titanium.Android.Activity.setSupportToolbar | method | Sets the value of the Titanium.Android.Activity.supportToolbar property. (New API, supported on Android.) |
| Titanium.Android.Activity.supportToolbar | property | Toolbar instance that serves as ActionBar (New API, supported on Android.) |
| Titanium.Android.Notification.addAction | method | Add an action button to the notification (New API, supported on Android.) |
| Titanium.Android.Notification.getGroupKey | method | Gets the value of the Titanium.Android.Notification.groupKey property. (New API, supported on Android.) |
| Titanium.Android.Notification.getGroupSummary | method | Gets the value of the Titanium.Android.Notification.groupSummary property. (New API, supported on Android.) |
| Titanium.Android.Notification.groupKey | property | The group key that the notification will belong to. (New API, supported on Android.) |
| Titanium.Android.Notification.groupSummary | property | Specifies if this is a group summary notification. (New API, supported on Android.) |
| Titanium.Android.Notification.setGroupKey | method | Sets the value of the Titanium.Android.Notification.groupKey property. (New API, supported on Android.) |
| Titanium.Android.Notification.setGroupSummary | method | Sets the value of the Titanium.Android.Notification.groupSummary property. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_ALARM | property | Used to identify the volume of audio streams for alarms. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_MEDIA | property | Used to identify the volume of audio streams for media playback. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_NOTIFICATION | property | Used to identify the volume of audio streams for notifications. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_RING | property | Used to identify the volume of audio streams for the phone ring. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_SIGNALLING | property | Used to identify the volume of audio streams for DTMF tones or beeps. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_VOICE | property | Used to identify the volume of audio streams for voice calls. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.audioType | property | Changes the audio-stream-type. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.getAudioType | method | Gets the value of the Titanium.Media.AudioPlayer.audioType property. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.setAudioType | method | Sets the value of the Titanium.Media.AudioPlayer.audioType property. (New API, supported on Android.) |
| Titanium.Media.AudioRecorder | object | An audio recorder object used for recording audio from the device microphone. (Added support for Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_ALARM | property | Used to identify the volume of audio streams for alarms. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_MEDIA | property | Used to identify the volume of audio streams for media playback. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_NOTIFICATION | property | Used to identify the volume of audio streams for notifications. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_RING | property | Used to identify the volume of audio streams for the phone ring. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_SIGNALLING | property | Used to identify the volume of audio streams for DTMF tones or beeps. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_VOICE | property | Used to identify the volume of audio streams for voice calls. (New API, supported on Android.) |
| Titanium.Media.Sound.audioType | property | Changes the audio-stream-type. (New API, supported on Android.) |
| Titanium.Media.Sound.getAudioType | method | Gets the value of the Titanium.Media.Sound.audioType property. (New API, supported on Android.) |
| Titanium.Media.Sound.setAudioType | method | Sets the value of the Titanium.Media.Sound.audioType property. (New API, supported on Android.) |
| Titanium.Media.VIDEO\_REPEAT\_MODE\_NONE | property | Constant for disabling repeat on video playback. (Added support for Android.) |
| Titanium.Media.VIDEO\_REPEAT\_MODE\_ONE | property | Constant for repeating one video (i.e., the one video will repeat constantly) during playback. (Added support for Android.) |
| Titanium.Media.VideoPlayer.getRepeatMode | method | Gets the value of the Titanium.Media.VideoPlayer.repeatMode property. (Added support for Android.) |
| Titanium.Media.VideoPlayer.repeatMode | property | Determines how the movie player repeats when reaching the end of playback. (Added support for Android.) |
| Titanium.Media.VideoPlayer.setRepeatMode | method | Sets the value of the Titanium.Media.VideoPlayer.repeatMode property. (Added support for Android.) |
| Titanium.Media.canRecord | property | `true` if the device has a recording input device available. (Added support for Android.) |
| Titanium.Media.createAudioRecorder | method | Creates and returns an instance of Titanium.Media.AudioRecorder. (Added support for Android.) |
| Titanium.Media.getCanRecord | method | Gets the value of the Titanium.Media.canRecord property. (Added support for Android.) |
| Titanium.Media.hasAudioRecorderPermissions | method | Returns `true` if the app has audio permissions. (Added support for Android.) |
| Titanium.Media.requestAudioRecorderPermissions | method | Request the user's permission for audio recording. (Added support for Android.) |
| Titanium.Network.Cookie.isValid | method | Returns true if the cookie is valid. (Added support for Android.) |
| Titanium.UI.AlertDialog.getHinttextid | method | Gets the value of the Titanium.UI.AlertDialog.hinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getLoginhinttextid | method | Gets the value of the Titanium.UI.AlertDialog.loginhinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPasswordhinttextid | method | Gets the value of the Titanium.UI.AlertDialog.passwordhinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.hinttextid | property | Key identifying a string from the locale file to use for the hintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.loginhinttextid | property | Key identifying a string from the locale file to use for the loginHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.passwordhinttextid | property | Key identifying a string from the locale file to use for the passwordHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setHinttextid | method | Sets the value of the Titanium.UI.AlertDialog.hinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setLoginhinttextid | method | Sets the value of the Titanium.UI.AlertDialog.loginhinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPasswordhinttextid | method | Sets the value of the Titanium.UI.AlertDialog.passwordhinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Android.DrawerLayout | object | An elevated view with rounded corners. (New API, supported on Android.) |
| Titanium.UI.ListView.dimBackgroundForSearch | property | A Boolean indicating whether the underlying content is dimmed during a search. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getDimBackgroundForSearch | method | Gets the value of the Titanium.UI.ListView.dimBackgroundForSearch property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setDimBackgroundForSearch | method | Sets the value of the Titanium.UI.ListView.dimBackgroundForSearch property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.dragend | event | Fired when the scrollable region stops being dragged. (Added support for Android.) |
| Titanium.UI.ScrollView.dragstart | event | Fired when the scrollable region starts being dragged. (Added support for Android.) |
| Titanium.UI.Slider.getSplitTrack | method | Gets the value of the Titanium.UI.Slider.splitTrack property. (New API, supported on Android.) |
| Titanium.UI.Slider.setSplitTrack | method | Sets the value of the Titanium.UI.Slider.splitTrack property. (New API, supported on Android.) |
| Titanium.UI.Slider.splitTrack | property | Separates the thumbImage from the slider track. (New API, supported on Android.) |
| Titanium.UI.Tab.popToRootWindow | method | Closes all windows that are currently opened inside the tab. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.TabGroup.getTabsTranslucent | method | Gets the value of the Titanium.UI.TabGroup.tabsTranslucent property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.setTabsTranslucent | method | Sets the value of the Titanium.UI.TabGroup.tabsTranslucent property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.tabsTranslucent | property | A Boolean value that indicates whether the tab bar is translucent. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.dimBackgroundForSearch | property | A Boolean indicating whether the underlying content is dimmed during a search. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getDimBackgroundForSearch | method | Gets the value of the Titanium.UI.TableView.dimBackgroundForSearch property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setDimBackgroundForSearch | method | Sets the value of the Titanium.UI.TableView.dimBackgroundForSearch property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextField.getHinttextid | method | Gets the value of the Titanium.UI.TextField.hinttextid property. (New API, supported on Android, iPhone, iPad, Mobile Web and Windows Phone.) |
| Titanium.UI.TextField.hinttextid | property | Key identifying a string from the locale file to use for the hintText property. (New API, supported on Android, iPhone, iPad, Mobile Web and Windows Phone.) |
| Titanium.UI.TextField.setHinttextid | method | Sets the value of the Titanium.UI.TextField.hinttextid property. (New API, supported on Android, iPhone, iPad, Mobile Web and Windows Phone.) |

### 6.1.0

The following APIs are new or have expanded platform support in Release 6.1.0 as of May 26th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.Notification.setProgress | method | Set the progress this notification represents. (New API, supported on Android.) |
| Titanium.Blob.imageAsCompressed | method | Creates a new blob by compressing the underlying image to the specified quality. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Calendar.Calendar.getSourceIdentifier | method | Gets the value of the Titanium.Calendar.Calendar.sourceIdentifier property. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.getSourceTitle | method | Gets the value of the Titanium.Calendar.Calendar.sourceTitle property. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.getSourceType | method | Gets the value of the Titanium.Calendar.Calendar.sourceType property. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.sourceIdentifier | property | Displays the source identifier. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.sourceTitle | property | Displays the source title. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Calendar.sourceType | property | Displays the source type. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_BIRTHDAYS | property | A birthday calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_CALDAV | property | A calDev calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_EXCHANGE | property | A microsoft exchange calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_LOCAL | property | A local calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_MOBILEME | property | A mobileMe calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.SOURCE\_TYPE\_SUBSCRIBED | property | A subscribed calendar source. (New API, supported on iPhone and iPad.) |
| Titanium.Filesystem.File.createFile | method | Creates a file at the path identified by this file object. (Added support for Android.) |
| Titanium.Media.SystemAlert | object | An object for playing system sounds. (New API, supported on iPhone and iPad.) |
| Titanium.Media.hasAudioRecorderPermissions | method | Returns `true` if the app has audio permissions. (New API, supported on iPhone and iPad.) |
| Titanium.Media.requestAudioRecorderPermissions | method | Request the user's permission for audio recording. (New API, supported on iPhone, iPad and Windows Phone.) |
| Titanium.UI.ATTRIBUTE\_SUBSCRIPT\_STYLE | property | Use with Attribute.type to place the text in a lower position. (New API, supported on Android.) |
| Titanium.UI.ATTRIBUTE\_SUPERSCRIPT\_STYLE | property | Use with Attribute.type to place the text in an upper position. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.getLoginValue | method | Gets the value of the Titanium.UI.AlertDialog.loginValue property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPasswordValue | method | Gets the value of the Titanium.UI.AlertDialog.passwordValue property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getValue | method | Gets the value of the Titanium.UI.AlertDialog.value property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.loginValue | property | Value of the login text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.passwordValue | property | Value of the password text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setLoginValue | method | Sets the value of the Titanium.UI.AlertDialog.loginValue property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPasswordValue | method | Sets the value of the Titanium.UI.AlertDialog.passwordValue property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setValue | method | Sets the value of the Titanium.UI.AlertDialog.value property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.value | property | Value of the text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Button.backgroundSelectedColor | property | Selected background color of the view, as a color name or hex triplet. (Added support for iPhone and iPad.) |
| Titanium.UI.Button.getBackgroundSelectedColor | method | Gets the value of the Titanium.UI.Button.backgroundSelectedColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.Button.setBackgroundSelectedColor | method | Sets the value of the Titanium.UI.Button.backgroundSelectedColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.Clipboard.allowCreation | property | Create a clipboard identified by name if it doesn't exist. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.getAllowCreation | method | Gets the value of the Titanium.UI.Clipboard.allowCreation property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.getName | method | Gets the value of the [Titanium.UI.Clipboard.name](http://titanium.ui.clipboard.name/) property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.getUnique | method | Gets the value of the Titanium.UI.Clipboard.unique property. (New API, supported on iPhone and iPad.) |
| [Titanium.UI.Clipboard.name](http://titanium.ui.clipboard.name/) | property | Create a new named clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.remove | method | Removes the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.setAllowCreation | method | Sets the value of the Titanium.UI.Clipboard.allowCreation property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.setName | method | Sets the value of the [Titanium.UI.Clipboard.name](http://titanium.ui.clipboard.name/) property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.setUnique | method | Sets the value of the Titanium.UI.Clipboard.unique property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.unique | property | Create a new clipboard identified by a unique system-generated name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.HIDDEN\_BEHAVIOR\_GONE | property | Release free space when hiding an object. (New API, supported on Android.) |
| Titanium.UI.HIDDEN\_BEHAVIOR\_INVISIBLE | property | Keeps free space when hiding an object. (New API, supported on Android.) |
| Titanium.UI.Label.getMaxLines | method | Gets the value of the Titanium.UI.Label.maxLines property. (Added support for iPhone and iPad.) |
| Titanium.UI.Label.getMinimumFontSize | method | Gets the value of the Titanium.UI.Label.minimumFontSize property. (Added support for Android.) |
| Titanium.UI.Label.maxLines | property | Makes the label at most this many lines tall. (Added support for iPhone and iPad.) |
| Titanium.UI.Label.minimumFontSize | property | Minimum font size when the font is sized based on the contents. (Added support for Android.) |
| Titanium.UI.Label.setMaxLines | method | Sets the value of the Titanium.UI.Label.maxLines property. (Added support for iPhone and iPad.) |
| Titanium.UI.Label.setMinimumFontSize | method | Sets the value of the Titanium.UI.Label.minimumFontSize property. (Added support for Android.) |
| Titanium.UI.ListItem.getSelectedSubtitleColor | method | Gets the value of the Titanium.UI.ListItem.selectedSubtitleColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListItem.selectedSubtitleColor | property | Color to use for the item subtitle when the item is selected, as a color name or hex triplet. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListItem.setSelectedSubtitleColor | method | Sets the value of the Titanium.UI.ListItem.selectedSubtitleColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListItem.subtitleColor | property | Default text color of the subtitle, as a color name or hex triplet. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.canScroll | property | Determines if the list view can scroll in response to user actions. (Added support for Android.) |
| Titanium.UI.ListView.cancelprefetch | event | Fired when list items that previously were considered as candidates for pre-fetching were not actually used. Note that this event is only available on iOS 10 and later (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getCanScroll | method | Gets the value of the Titanium.UI.ListView.canScroll property. (Added support for Android.) |
| Titanium.UI.ListView.getResultsBackgroundColor | method | Gets the value of the Titanium.UI.ListView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getResultsSeparatorColor | method | Gets the value of the Titanium.UI.ListView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getResultsSeparatorInsets | method | Gets the value of the Titanium.UI.ListView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getResultsSeparatorStyle | method | Gets the value of the Titanium.UI.ListView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.prefetch | event | Fired when new list items are prefetched. The items are ordered ascending by geometric distance from the list view. Note that this event is only available on iOS 10 and later. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.resultsBackgroundColor | property | The background color of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.resultsSeparatorColor | property | Separator line color between rows inside search results, as a color name or hex triplet (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.resultsSeparatorInsets | property | The insets for search results separators (applies to all cells & iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.resultsSeparatorStyle | property | The separator style of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.scrolling | event | Fires when the list view is scrolling. Calling the `scrollTo` methods will not fire this event (Added support for Android.) |
| Titanium.UI.ListView.setCanScroll | method | Sets the value of the Titanium.UI.ListView.canScroll property. (Added support for Android.) |
| Titanium.UI.ListView.setResultsBackgroundColor | method | Sets the value of the Titanium.UI.ListView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setResultsSeparatorColor | method | Sets the value of the Titanium.UI.ListView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setResultsSeparatorInsets | method | Sets the value of the Titanium.UI.ListView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setResultsSeparatorStyle | method | Sets the value of the Titanium.UI.ListView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_ALIGNMENT\_JUSTIFY | property | Justify align text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.badgeColor | property | If this item displays a badge, this color will be used for the badge's background. If set to null, the default background color will be used instead. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.getBadgeColor | method | Gets the value of the Titanium.UI.Tab.badgeColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.setBadgeColor | method | Sets the value of the Titanium.UI.Tab.badgeColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.getUnselectedItemTintColor | method | Gets the value of the Titanium.UI.TabGroup.unselectedItemTintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.setUnselectedItemTintColor | method | Sets the value of the Titanium.UI.TabGroup.unselectedItemTintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.unselectedItemTintColor | property | Unselected items in this tab group will be tinted with this color. Setting this value to null indicates that the tab group should use its default value instead. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextArea.fullscreen | property | Leave some space above the keyboard in landscape mode or not. (New API, supported on Android.) |
| Titanium.UI.TextArea.getFullscreen | method | Gets the value of the Titanium.UI.TextArea.fullscreen property. (New API, supported on Android.) |
| Titanium.UI.TextArea.getPadding | method | Gets the value of the Titanium.UI.TextArea.padding property. (Added support for iPhone and iPad.) |
| Titanium.UI.TextArea.padding | property | Sets the left and right padding of this TextArea. The text will always be vertically centered. (Added support for iPhone and iPad.) |
| Titanium.UI.TextArea.setFullscreen | method | Sets the value of the Titanium.UI.TextArea.fullscreen property. (New API, supported on Android.) |
| Titanium.UI.TextArea.setPadding | method | Sets the value of the Titanium.UI.TextArea.padding property. (Added support for iPhone and iPad.) |
| Titanium.UI.TextField.fullscreen | property | Leave some space above the keyboard in landscape mode or not. (New API, supported on Android.) |
| Titanium.UI.TextField.getFullscreen | method | Gets the value of the Titanium.UI.TextField.fullscreen property. (New API, supported on Android.) |
| Titanium.UI.TextField.setFullscreen | method | Sets the value of the Titanium.UI.TextField.fullscreen property. (New API, supported on Android.) |
| Titanium.UI.View.getHiddenBehavior | method | Gets the value of the Titanium.UI.View.hiddenBehavior property. (New API, supported on Android.) |
| Titanium.UI.View.getTouchFeedback | method | Gets the value of the Titanium.UI.View.touchFeedback property. (New API, supported on Android.) |
| Titanium.UI.View.getTouchFeedbackColor | method | Gets the value of the Titanium.UI.View.touchFeedbackColor property. (New API, supported on Android.) |
| Titanium.UI.View.getViewById | method | Returns the matching view of a given view ID. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.View.hiddenBehavior | property | Sets the behavior when hiding an object to release or keep the free space (New API, supported on Android.) |
| Titanium.UI.View.setHiddenBehavior | method | Sets the value of the Titanium.UI.View.hiddenBehavior property. (New API, supported on Android.) |
| Titanium.UI.View.setTouchFeedback | method | Sets the value of the Titanium.UI.View.touchFeedback property. (New API, supported on Android.) |
| Titanium.UI.View.setTouchFeedbackColor | method | Sets the value of the Titanium.UI.View.touchFeedbackColor property. (New API, supported on Android.) |
| Titanium.UI.View.touchFeedback | property | A material design visual construct that provides an instantaneous visual confirmation of touch point. (New API, supported on Android.) |
| Titanium.UI.View.touchFeedbackColor | property | Optional touch feedback ripple color. This has no effect unless `touchFeedback` is true. (New API, supported on Android.) |
| Titanium.UI.WebView.blacklistedURLs | property | An array of url strings to blacklist. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.blacklisturl | event | Fired when a blacklisted URL is stopped. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.disableContextMenu | property | Determines whether or not the webview should not be able to display the context menu. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.getBlacklistedURLs | method | Gets the value of the Titanium.UI.WebView.blacklistedURLs property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.getDisableContextMenu | method | Gets the value of the Titanium.UI.WebView.disableContextMenu property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.getKeyboardDisplayRequiresUserAction | method | Gets the value of the Titanium.UI.WebView.keyboardDisplayRequiresUserAction property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.getRequestHeaders | method | Gets the value of the Titanium.UI.WebView.requestHeaders property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.getUserAgent | method | Gets the value of the Titanium.UI.WebView.userAgent property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.keyboardDisplayRequiresUserAction | property | A Boolean value indicating whether web content can programmatically display the keyboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.requestHeaders | property | Sets extra request headers for this web view to use on subsequent URL requests. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setBlacklistedURLs | method | Sets the value of the Titanium.UI.WebView.blacklistedURLs property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.setDisableContextMenu | method | Sets the value of the Titanium.UI.WebView.disableContextMenu property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setKeyboardDisplayRequiresUserAction | method | Sets the value of the Titanium.UI.WebView.keyboardDisplayRequiresUserAction property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.setRequestHeaders | method | Sets the value of the Titanium.UI.WebView.requestHeaders property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setUserAgent | method | Sets the value of the Titanium.UI.WebView.userAgent property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.userAgent | property | The User-Agent header used by the web view when requesting content. (Added support for iPhone and iPad.) |
| Titanium.UI.iOS.AnimationStyle.CROSS\_DISSOLVE | property | A transition that dissolves from one view to the next. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AnimationStyle.FLIP\_FROM\_BOTTOM | property | Flip from bottom to top during a transition animation. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AnimationStyle.FLIP\_FROM\_TOP | property | Flip from top to bottom during a transition animation. (New API, supported on iPhone and iPad.) |

### 6.0.0

The following APIs are new or have expanded platform support in Release 6.0.0 as of November 14th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.Properties.removeAllProperties | method | Removes all properties that have been set by the user on runtime, or does nothing otherwise. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.App.iOS.SearchableItemAttributeSet.fullyFormattedAddress | property | The fully formatted address of the item (obtained from MapKit). (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getFullyFormattedAddress | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.fullyFormattedAddress property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getPostalCode | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.postalCode property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getSubThoroughfare | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.subThoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getThoroughfare | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.thoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.postalCode | property | The postal code for the item according to guidelines established by the provider. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setFullyFormattedAddress | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.fullyFormattedAddress property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setPostalCode | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.postalCode property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setSubThoroughfare | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.subThoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setThoroughfare | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.thoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.subThoroughfare | property | The sub-location (e.g., street number) for the item according to guidelines established by the provider. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.thoroughfare | property | The location (e.g., street name) for the item according to guidelines established by the provider. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.handleurl | event | Fired when a new URL is handled by the application. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_CHAIR | property | Attendee role is chair. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_NON\_PARTICIPANT | property | Attendee is not a participant. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_OPTIONAL | property | Attendee role is optional. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_REQUIRED | property | Attendee role is required. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_ROLE\_UNKNOWN | property | Attendee role is unknown. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_ACCEPTED | property | Attendee status is accepted. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_DECLINED | property | Attendee status is declined. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_DELEGATED | property | Attendee status is delegated. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_IN\_PROCESS | property | Attendee status is in process. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_PENDING | property | Attendee status is pending. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_TENTATIVE | property | Attendee status is tentative. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_STATUS\_UNKNOWN | property | Attendee status is unknown. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_GROUP | property | Attendee type is group. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_PERSON | property | Attendee type is person. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_RESOURCE | property | Attendee type is resource. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_ROOM | property | Attendee type is room. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.ATTENDEE\_TYPE\_UNKNOWN | property | Attendee type is unknown. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Attendee | object | An object that represents a single attendee of an event. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Event.attendees | property | The list of event attendees. This list will be empty if the event has no attendees. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.Event.getAttendees | method | Gets the value of the Titanium.Calendar.Event.attendees property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.canceledOnTouchOutside | property | When this is set to `true`, the dialog is canceled when touched outside the window's bounds. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.getCanceledOnTouchOutside | method | Gets the value of the Titanium.UI.AlertDialog.canceledOnTouchOutside property. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.getPreferred | method | Gets the value of the Titanium.UI.AlertDialog.preferred property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.preferred | property | Index to define the preferred button. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setCanceledOnTouchOutside | method | Sets the value of the Titanium.UI.AlertDialog.canceledOnTouchOutside property. (New API, supported on Android.) |
| Titanium.UI.AlertDialog.setPreferred | method | Sets the value of the Titanium.UI.AlertDialog.preferred property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasColors | method | Indicates whether any colors are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasImages | method | Indicates whether any images are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasURLs | method | Indicates whether any URLs are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.RefreshControl.refreshend | event | Fired in response to a user finished action to refresh the contents of the table view, list view or scroll view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.getKeyboardDismissMode | method | Gets the value of the Titanium.UI.ScrollView.keyboardDismissMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.getRefreshControl | method | Gets the value of the Titanium.UI.ScrollView.refreshControl property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.keyboardDismissMode | property | The manner in which the keyboard is dismissed when a drag begins in the scroll view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.refreshControl | property | View positioned above the first row that is only revealed when the user drags the scroll view contents down. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.setKeyboardDismissMode | method | Sets the value of the Titanium.UI.ScrollView.keyboardDismissMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.setRefreshControl | method | Sets the value of the Titanium.UI.ScrollView.refreshControl property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_ELLIPSIZE\_TRUNCATE\_CHAR\_WRAP | property | Add ellipses before the first character that doesnt fit. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_ELLIPSIZE\_TRUNCATE\_CLIP | property | Lines are simply not drawn past the edge of the text container. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_ELLIPSIZE\_TRUNCATE\_NONE | property | Disables ellipsizing of the label. The text will be cut off if it is too long. (New API, supported on Android.) |
| Titanium.UI.TEXT\_ELLIPSIZE\_TRUNCATE\_WORD\_WRAP | property | Add ellipses at word boundaries, unless the word itself doesn't fit on a single line. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_STYLE\_CALLOUT | property | Specifies the text style for the Font Object. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_STYLE\_TITLE1 | property | Specifies the text style for the Font Object. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_STYLE\_TITLE2 | property | Specifies the text style for the Font Object. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TEXT\_STYLE\_TITLE3 | property | Specifies the text style for the Font Object. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextArea.getPadding | method | Gets the value of the Titanium.UI.TextArea.padding property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.padding | property | Sets the left and right padding of this TextArea. The text will always be vertically centered. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.setPadding | method | Sets the value of the Titanium.UI.TextArea.padding property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.getPadding | method | Gets the value of the Titanium.UI.TextField.padding property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.padding | property | Sets the padding of this text field. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.setPadding | method | Sets the value of the Titanium.UI.TextField.padding property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Window.getHidesBarsOnSwipe | method | Gets the value of the Titanium.UI.Window.hidesBarsOnSwipe property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getHidesBarsOnTap | method | Gets the value of the Titanium.UI.Window.hidesBarsOnTap property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getHidesBarsWhenKeyboardAppears | method | Gets the value of the Titanium.UI.Window.hidesBarsWhenKeyboardAppears property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getHidesBarsWhenVerticallyCompact | method | Gets the value of the Titanium.UI.Window.hidesBarsWhenVerticallyCompact property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.hidesBarsOnSwipe | property | Set this to true to hide the navigation bar on swipe. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.hidesBarsOnTap | property | Set this to true to hide the navigation bar on tap. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.hidesBarsWhenKeyboardAppears | property | Set this to true to hide the navigation bar when the keyboard appears. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.hidesBarsWhenVerticallyCompact | property | Set this to true to hide the navigation bar in a vertically compact environment. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHidesBarsOnSwipe | method | Sets the value of the Titanium.UI.Window.hidesBarsOnSwipe property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHidesBarsOnTap | method | Sets the value of the Titanium.UI.Window.hidesBarsOnTap property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHidesBarsWhenKeyboardAppears | method | Sets the value of the Titanium.UI.Window.hidesBarsWhenKeyboardAppears property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHidesBarsWhenVerticallyCompact | method | Sets the value of the Titanium.UI.Window.hidesBarsWhenVerticallyCompact property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.getTintColor | method | Gets the value of the Titanium.UI.tintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.NavigationWindow.popToRootWindow | method | Closes all windows that are currently opened inside the navigation window. (New API, supported on iPhone and iPad.) |
| Titanium.UI.setTintColor | method | Sets the value of the Titanium.UI.tintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.tintColor | property | Sets the global tint color of the application. It is inherited by the child views and can be overwritten by them using the `tintColor` property. (New API, supported on iPhone and iPad.) |
| Titanium.WatchSession.getHasContentPending | method | Gets the value of the Titanium.WatchSession.hasContentPending property. (New API, supported on iPhone.) |
| Titanium.WatchSession.getRemainingComplicationUserInfoTransfers | method | Gets the value of the Titanium.WatchSession.remainingComplicationUserInfoTransfers property. (New API, supported on iPhone.) |
| Titanium.WatchSession.hasContentPending | property | Returns `true` if there is more content for the session to deliver. (New API, supported on iPhone.) |
| Titanium.WatchSession.remainingComplicationUserInfoTransfers | property | The number of calls remaining to `transferCurrentComplication` before the system starts transferring the complicationUserInfo as regular userInfos. (New API, supported on iPhone.) |

List of all new API notices for SDK 5.x.

## SDK 5.x

### 5.5.0

The following APIs are new or have expanded platform support in Release 5.5.0 as of September 13th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.SearchQuery | object | A search query object manages the criteria to apply when searching app content that you have previously indexed by using the Core Spotlight APIs. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.fullyFormattedAddress | property | The fully formatted address of the item (obtained from MapKit). (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getFullyFormattedAddress | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.fullyFormattedAddress property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getPostalCode | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.postalCode property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getSubThoroughfare | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.subThoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.getThoroughfare | method | Gets the value of the Titanium.App.iOS.SearchableItemAttributeSet.thoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.postalCode | property | The postal code for the item according to guidelines established by the provider. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setFullyFormattedAddress | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.fullyFormattedAddress property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setPostalCode | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.postalCode property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setSubThoroughfare | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.subThoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.setThoroughfare | method | Sets the value of the Titanium.App.iOS.SearchableItemAttributeSet.thoroughfare property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.subThoroughfare | property | The sub-location (e.g., street number) for the item according to guidelines established by the provider. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet.thoroughfare | property | The location (e.g., street name) for the item according to guidelines established by the provider. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createSearchQuery | method | Creates and returns an instance of Titanium.App.iOS.SearchQuery. (New API, supported on iPhone and iPad.) |
| Titanium.Media.hasAudioPermissions | method | Returns `true` if the app has audio permissions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.CLIPBOARD\_OPTION\_EXPIRATION\_DATE | property | Specifies the time and date that you want the system to remove the clipboard items from the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.CLIPBOARD\_OPTION\_LOCAL\_ONLY | property | Specifies that the clipboard items should not be available to other devices through Handoff. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.getItems | method | Gets the items that have been specified earlier using Titanium.UI.Clipboard.setItems. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasColors | method | Indicates whether any colors are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasImages | method | Indicates whether any images are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.hasURLs | method | Indicates whether any URLs are stored in the clipboard. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard.setItems | method | Adds an array of items to a clipboard, and sets privacy options for all included items. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.getRefreshControl | method | Gets the value of the Titanium.UI.ScrollView.refreshControl property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.refreshControl | property | View positioned above the first row that is only revealed when the user drags the scroll view contents down. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.setRefreshControl | method | Sets the value of the Titanium.UI.ScrollView.refreshControl property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_PROMINENT | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_REGULAR | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.WatchSession.getHasContentPending | method | Gets the value of the Titanium.WatchSession.hasContentPending property. (New API, supported on iPhone.) |
| Titanium.WatchSession.getRemainingComplicationUserInfoTransfers | method | Gets the value of the Titanium.WatchSession.remainingComplicationUserInfoTransfers property. (New API, supported on iPhone.) |
| Titanium.WatchSession.hasContentPending | property | Returns `true` if there is more content for the session to deliver. (New API, supported on iPhone.) |
| Titanium.WatchSession.remainingComplicationUserInfoTransfers | property | The number of calls remaining to `transferCurrentComplication` before the system starts transferring the complicationUserInfo as regular userInfos. (New API, supported on iPhone.) |

### 5.4.0

The following APIs are new or have expanded platform support in Release 5.4.0 as of August 10th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.Notification.getStyle | method | Gets the value of the Titanium.Android.Notification.style property. (New API, supported on Android.) |
| Titanium.Android.Notification.setStyle | method | Sets the value of the Titanium.Android.Notification.style property. (New API, supported on Android.) |
| Titanium.Android.Notification.style | property | Style object that can apply a rich notification style. (New API, supported on Android.) |
| Titanium.Android.hasPermission | method | Returns `true` if the app has permission access. (New API, supported on Android.) |
| Titanium.Android.requestPermissions | method | Request for permission access. (New API, supported on Android.) |
| Titanium.Database.DB.file | property | A `File` object representing the file where this database is stored. Must only be used for setting file properties. (Added support for Android.) |
| Titanium.Database.DB.getFile | method | Gets the value of the Titanium.Database.DB.file property. (Added support for Android.) |
| Titanium.Filesystem.getAsset | method | Returns a `Blob` object representing the asset catalog image identified by the path arguments. (New API, supported on iPhone and iPad.) |
| Titanium.Filesystem.hasStoragePermissions | method | Returns `true` if the app has storage permissions. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.Filesystem.requestStoragePermissions | method | Requests for storage permissions (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.Media.AudioPlayer.getAudioSessionId | method | Returns the audio session id. (New API, supported on Android.) |
| Titanium.Media.startVideoCapture | method | Starts video capture using the camera specified. (Added support for Android.) |
| Titanium.Media.stopVideoCapture | method | Stops video capture using the camera specified. (Added support for Android.) |
| Titanium.UI.AlertDialog.getHintText | method | Gets the value of the Titanium.UI.AlertDialog.hintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getLoginHintText | method | Gets the value of the Titanium.UI.AlertDialog.loginHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPasswordHintText | method | Gets the value of the Titanium.UI.AlertDialog.passwordHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.hintText | property | Hint text of the text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.loginHintText | property | Hint text of the login text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.passwordHintText | property | Hint text of the password text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setHintText | method | Sets the value of the Titanium.UI.AlertDialog.hintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setLoginHintText | method | Sets the value of the Titanium.UI.AlertDialog.loginHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPasswordHintText | method | Sets the value of the Titanium.UI.AlertDialog.passwordHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_CLIP | property | Raw bit controlling whether the right/bottom edge is clipped to its container, based on the gravity direction being applied. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_PULL\_AFTER | property | Raw bit controlling how the right/bottom edge is placed. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_PULL\_BEFORE | property | Raw bit controlling how the left/top edge is placed. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_SPECIFIED | property | Raw bit indicating the gravity for an axis has been specified. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_X\_SHIFT | property | Bits defining the horizontal axis. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_Y\_SHIFT | property | Bits defining the vertical axis. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_BOTTOM | property | Push object to the bottom of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CENTER | property | Place the object in the center of its container in both the vertical and horizontal axis, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CENTER\_HORIZONTAL | property | Place object in the horizontal center of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CENTER\_VERTICAL | property | Place object in the vertical center of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CLIP\_HORIZONTAL | property | Flag to clip the edges of the object to its container along the horizontal axis. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CLIP\_VERTICAL | property | Flag to clip the edges of the object to its container along the vertical axis. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_DISPLAY\_CLIP\_HORIZONTAL | property | Special constant to enable clipping to an overall display along the horizontal dimension. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_DISPLAY\_CLIP\_VERTICAL | property | Special constant to enable clipping to an overall display along the vertical dimension. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_END | property | Push object to x-axis position at the end of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_FILL | property | Grow the horizontal and vertical size of the object if needed so it completely fills its container. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_FILL\_HORIZONTAL | property | Grow the horizontal size of the object if needed so it completely fills its container. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_FILL\_VERTICAL | property | Grow the vertical size of the object if needed so it completely fills its container. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_HORIZONTAL\_GRAVITY\_MASK | property | Binary mask to get the absolute horizontal gravity of a gravity. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_LEFT | property | Push object to the left of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_NO\_GRAVITY | property | Constant indicating that no gravity has been set (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_RELATIVE\_HORIZONTAL\_GRAVITY\_MASK | property | Binary mask for the horizontal gravity and script specific direction bit. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_RELATIVE\_LAYOUT\_DIRECTION | property | Raw bit controlling whether the layout direction is relative or not (GRAVITY\_START/GRAVITY\_END instead of absolute GRAVITY\_LEFT/GRAVITY\_RIGHT). (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_RIGHT | property | Push object to the right of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_START | property | Push object to x-axis position at the start of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_TOP | property | Push object to the top of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_VERTICAL\_GRAVITY\_MASK | property | Binary mask to get the vertical gravity of a gravity. (New API, supported on Android.) |
| Titanium.UI.Button.getTintColor | method | Gets the value of the Titanium.UI.Button.tintColor property. (Added support for Android.) |
| Titanium.UI.Button.setTintColor | method | Sets the value of the Titanium.UI.Button.tintColor property. (Added support for Android.) |
| Titanium.UI.Button.tintColor | property | Button tint color. (Added support for Android.) |
| Titanium.UI.ImageView.getTintColor | method | Gets the value of the Titanium.UI.ImageView.tintColor property. (Added support for Android.) |
| Titanium.UI.ImageView.setTintColor | method | Sets the value of the Titanium.UI.ImageView.tintColor property. (Added support for Android.) |
| Titanium.UI.ImageView.tintColor | property | The view's tintColor. (Added support for Android.) |
| Titanium.UI.Label.getLineSpacing | method | Gets the value of the Titanium.UI.Label.lineSpacing property. (New API, supported on Android.) |
| Titanium.UI.Label.lineSpacing | property | Line spacing of the text, as a dictionary with the properties `add` and `multiply`. (New API, supported on Android.) |
| Titanium.UI.Label.setLineSpacing | method | Sets the value of the Titanium.UI.Label.lineSpacing property. (New API, supported on Android.) |
| Titanium.UI.ListView.allowsSelectionDuringEditing | property | Determines whether this list View rows can be selected while editing the table. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.disableBounce | property | Determines whether the scroll-bounce of the list view should be disabled. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getAllowsSelectionDuringEditing | method | Gets the value of the Titanium.UI.ListView.allowsSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getDisableBounce | method | Gets the value of the Titanium.UI.ListView.disableBounce property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getListSeparatorInsets | method | Gets the value of the Titanium.UI.ListView.listSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.insert | event | Fired when a list row is inserted by the user. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.listSeparatorInsets | property | The insets for the list view header and footer. This property is applicable on iOS 7 and greater. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.scrolling | event | Fires when the list view is scrolling. Calling the `scrollTo` methods will not fire this event (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setAllowsSelectionDuringEditing | method | Sets the value of the Titanium.UI.ListView.allowsSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setDisableBounce | method | Sets the value of the Titanium.UI.ListView.disableBounce property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setListSeparatorInsets | method | Sets the value of the Titanium.UI.ListView.listSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Notification.getGravity | method | Gets the value of the Titanium.UI.Notification.gravity property. (New API, supported on Android.) |
| Titanium.UI.Notification.gravity | property | Determines the location at which the notification should appear on the screen. (New API, supported on Android.) |
| Titanium.UI.Notification.setGravity | method | Sets the value of the Titanium.UI.Notification.gravity property. (New API, supported on Android.) |
| Titanium.UI.Picker.getNativeSpinner | method | Gets the value of the Titanium.UI.Picker.nativeSpinner property. (New API, supported on Android.) |
| Titanium.UI.Picker.nativeSpinner | property | Creates a native Android control for creating a Time Spinner with Type `Ti.UI.PICKER_TYPE_TIME`. This is invoked rather than the default native "dropdown" style. (New API, supported on Android.) |
| Titanium.UI.Picker.setNativeSpinner | method | Sets the value of the Titanium.UI.Picker.nativeSpinner property. (New API, supported on Android.) |
| Titanium.UI.PickerRow.color | property | Color of the item text, as a color name or hex triplet. (Added support for Android, iPhone and iPad.) |
| Titanium.UI.PickerRow.getColor | method | Gets the value of the Titanium.UI.PickerRow.color property. (Added support for Android, iPhone and iPad.) |
| Titanium.UI.PickerRow.setColor | method | Sets the value of the Titanium.UI.PickerRow.color property. (Added support for Android, iPhone and iPad.) |
| Titanium.UI.ScrollableView.currentPageIndicatorColor | property | Color for the current page of the paging control, as a color name or hex triplet. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.getCurrentPageIndicatorColor | method | Gets the value of the Titanium.UI.ScrollableView.currentPageIndicatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.getPageIndicatorColor | method | Gets the value of the Titanium.UI.ScrollableView.pageIndicatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.insertViewsAt | method | Inserts views at the specified position in the views array. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.ScrollableView.pageIndicatorColor | property | Color of the paging control, as a color name or hex triplet. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.setCurrentPageIndicatorColor | method | Sets the value of the Titanium.UI.ScrollableView.currentPageIndicatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.setPageIndicatorColor | method | Sets the value of the Titanium.UI.ScrollableView.pageIndicatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.cancelButtonTitle | property | The title of the cancel button when the search bar field is focused. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.getCancelButtonTitle | method | Gets the value of the Titanium.UI.SearchBar.cancelButtonTitle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.getStyle | method | Gets the value of the Titanium.UI.SearchBar.style property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.setCancelButtonTitle | method | Sets the value of the Titanium.UI.SearchBar.cancelButtonTitle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.setStyle | method | Sets the value of the Titanium.UI.SearchBar.style property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.style | property | Determines the style of the search bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextField.getHintTextColor | method | Gets the value of the Titanium.UI.TextField.hintTextColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.TextField.hintTextColor | property | Hint text color to display when the field is empty. (Added support for iPhone and iPad.) |
| Titanium.UI.TextField.setHintTextColor | method | Sets the value of the Titanium.UI.TextField.hintTextColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.allowsLinkPreview | property | A Boolean value that determines whether pressing on a link displays a preview of the destination for the link. (New API, supported on iPhone.) |
| Titanium.UI.WebView.blacklistedURLs | property | An array of url strings to blacklist. (New API, supported on Android.) |
| Titanium.UI.WebView.getAllowsLinkPreview | method | Gets the value of the Titanium.UI.WebView.allowsLinkPreview property. (New API, supported on iPhone.) |
| Titanium.UI.WebView.getBlacklistedURLs | method | Gets the value of the Titanium.UI.WebView.blacklistedURLs property. (New API, supported on Android.) |
| Titanium.UI.WebView.onStopBlacklistedUrl | event | Fired when a blacklisted Url is stopped (New API, supported on Android.) |
| Titanium.UI.WebView.setAllowsLinkPreview | method | Sets the value of the Titanium.UI.WebView.allowsLinkPreview property. (New API, supported on iPhone.) |
| Titanium.UI.WebView.setBlacklistedURLs | method | Sets the value of the Titanium.UI.WebView.blacklistedURLs property. (New API, supported on Android.) |
| Titanium.UI.Window.hideToolbar | method | Makes the bottom toolbar invisible. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.showToolbar | method | Makes the bottom toolbar visible. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AlertDialogStyle | object | A set of constants for the style that can be used for the `style` property of Titanium.UI.AlertDialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AnimationStyle | object | A set of constants for the animation styles used for view transitions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_DARK | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_EXTRA\_LIGHT | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_LIGHT | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BlurView | object | A Titanium.UI.iOS.BlurView object gives you an easy way implement some complex visual effects. The blur effect is applied to every view the blur view is added to by default. You can also place the blur view above other views and all visible views layered under the blur view are blurred as well.<br /><br />For more information on BlurView, please refer to the official Apple documentation. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.ListViewCellSelectionStyle | object | A set of constants for the style that can be used for the `selectionStyle` property of a ListItem, which is set in the `properties` dictionary of either the ListDataItem or ItemTemplate. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.ListViewScrollPosition | object | A set of constants for the position value that can be used for the `position` property of ListViewAnimationProperties when invoking the ListView's `scrollToItem`, `appendSection`,`deleteSectionAt`, `insertSectionAt` and `replaceSectionAt` methods. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SEARCH\_BAR\_STYLE\_MINIMAL | property | Use with Titanium.UI.Searchbar.style to change the search bar style. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SEARCH\_BAR\_STYLE\_PROMINENT | property | Use with Titanium.UI.Searchbar.style to change the search bar style. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.ScrollIndicatorStyle | object | A set of constants for the styles available for scrollbars used with Titanium.UI.ScrollView.scrollIndicatorStyle and Titanium.UI.TableView.scrollIndicatorStyle properties. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.StatusBar | object | A set of constants for the status bar style. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.Stepper | object | A widget used to increment and decrement a value (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.iOS.SystemButton | object | A set of constants for creating standard iOS system buttons. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SystemButtonStyle | object | A set of constants for the system button styles that can be used for the button `style` property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.TableViewCellSelectionStyle | object | A set of constants for the style that can be used for the `selectionStyle` property of Titanium.UI.TableViewRow. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.TableViewScrollPosition | object | A set of constants for the position value that can be used for the `position` property of Titanium.UI.TableView when invoking `scrollToIndex`. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.appBadge | property | Value of the badge for the application's springboard icon. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.appSupportsShakeToEdit | property | Determines whether the shake to edit system-wide capability is enabled. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createBlurView | method | Creates and returns an instance of Titanium.UI.iOS.BlurView. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createStepper | method | Creates and returns an instance of Titanium.UI.iOS.Stepper. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createSystemButton | method | Creates and returns an instance of Titanium.UI.iOS.SystemButton. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.getAppBadge | method | Gets the value of the Titanium.UI.iOS.appBadge property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.getAppSupportsShakeToEdit | method | Gets the value of the Titanium.UI.iOS.appSupportsShakeToEdit property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setAppBadge | method | Sets the value of the Titanium.UI.iOS.appBadge property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setAppSupportsShakeToEdit | method | Sets the value of the Titanium.UI.iOS.appSupportsShakeToEdit property. (New API, supported on iPhone and iPad.) |
| Titanium.WatchSession.ACTIVATION\_STATE\_ACTIVATED | property | The watch is currently activated. (New API, supported on iPhone.) |
| Titanium.WatchSession.ACTIVATION\_STATE\_INACTIVE | property | The watch is currently inactive. (New API, supported on iPhone.) |
| Titanium.WatchSession.ACTIVATION\_STATE\_NOT\_ACTIVATED | property | The watch is currently not activated. (New API, supported on iPhone.) |
| Titanium.WatchSession.activationCompleted | event | Called when the session has completed activation. If session state is Titanium.WatchSession.ACTIVATION\_STATE\_NOT\_ACTIVATED there will be an error with more details. (New API, supported on iPhone.) |
| Titanium.WatchSession.activationState | property | Returns the current activation state of the watch. (New API, supported on iPhone.) |
| Titanium.WatchSession.deactivate | event | Called when all events for the previously selected watch has occurred. The session can be re-activated for the now selected watch using activateSession. (New API, supported on iPhone.) |
| Titanium.WatchSession.getActivationState | method | Gets the value of the Titanium.WatchSession.activationState property. (New API, supported on iPhone.) |
| Titanium.WatchSession.getIsActivated | method | Gets the value of the Titanium.WatchSession.isActivated property. (New API, supported on iPhone.) |
| Titanium.WatchSession.inactive | event | Called when the session can no longer be used to modify or add any new transfers and, all interactive messages will be cancelled, but events for background transfers can still fire. This will happen when the selected watch is being changed. (New API, supported on iPhone.) |
| Titanium.WatchSession.isActivated | property | Returns `true` if the watch is currently activated. (New API, supported on iPhone.) |

### 5.2.0

The following APIs are new or have expanded platform support in Release 5.2.0 as of February 22nd, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Calendar.calendarAuthorization | property | Returns an authorization constant indicating if the application has access to the events in the EventKit. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.getCalendarAuthorization | method | Gets the value of the Titanium.Calendar.calendarAuthorization property. (New API, supported on iPhone and iPad.) |
| Titanium.Media.CAMERA\_AUTHORIZATION\_UNKNOWN | property | Constant specifying that app is not yet authorized to use camera. This is available on iOS7 and later. (New API, supported on iPhone and iPad.) |
| Titanium.Media.MEDIA\_TYPE\_LIVEPHOTO | property | Media type constant for live photo media. (New API, supported on iPhone and iPad.) |
| Titanium.Media.cameraAuthorization | property | Returns the authorization status for the camera. (New API, supported on iPhone and iPad.) |
| Titanium.Media.getCameraAuthorization | method | Gets the value of the Titanium.Media.cameraAuthorization property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getKeyboardAppearance | method | Gets the value of the Titanium.UI.AlertDialog.keyboardAppearance property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.keyboardAppearance | property | Keyboard appearance to be displayed when the text field inside the dialog is focused. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setKeyboardAppearance | method | Sets the value of the Titanium.UI.AlertDialog.keyboardAppearance property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Android.TRANSITION\_CHANGE\_BOUNDS | property | Captures layout bounds of target views before and after the scene change and animates those changes during the transition. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_CHANGE\_CLIP\_BOUNDS | property | Captures the clip bounds before and after the scene change and animates those changes during the transition. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_CHANGE\_IMAGE\_TRANSFORM | property | Captures an ImageView's matrix before and after the scene change and animates it during the transition. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_CHANGE\_TRANSFORM | property | Captures scale and rotation for Views before and after the scene change and animates those changes during the transition. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_EXPLODE | property | Moves views in or out from the edges of the scene. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_FADE\_IN | property | Fades in the views. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_FADE\_OUT | property | Fades out the views. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_NONE | property | Resets transition to platform default. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_SLIDE\_BOTTOM | property | Moves views to bottom. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_SLIDE\_LEFT | property | Moves views to left. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_SLIDE\_RIGHT | property | Moves views to right. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_SLIDE\_TOP | property | Moves views to top. (New API, supported on Android.) |
| Titanium.UI.KEYBOARD\_APPEARANCE\_DARK | property | Use the platform-specific dark keyboard appearance. (New API, supported on iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_APPEARANCE\_LIGHT | property | Use the platform-specific light keyboard appearance. (New API, supported on iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_ASCII | property | Use an ASCII keyboard, with the standard keyboard layout. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_DECIMAL\_PAD | property | Use a keyboard with decimal numbers only, with the pad keyboard layout. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_DEFAULT | property | Use the default keyboard, depending on the platform. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_EMAIL | property | Use a keyboard suitable for composing email, with the standard keyboard layout. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_NAMEPHONE\_PAD | property | Use a keyboard suitable for entering names and phone numbers, with the pad keyboard layout. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_NUMBERS\_PUNCTUATION | property | Use a keyboard with numbers and punctuation only, with the standard keyboard layout. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_NUMBER\_PAD | property | Use a keyboard with a number pad only, with the pad keyboard layout. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_PHONE\_PAD | property | Use a keyboard with a phone-style number pad, with the pad keyboard layout. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_TWITTER | property | Use a keyboard optimized for twitter text entry, with easy access to the @ and (New API, supported on iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_URL | property | Use a keyboard optimized for entering URLs, with the standard keyboard layout. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_WEBSEARCH | property | Use a keyboard optimized for web search terms and URL entry. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListItem.canInsert | property | Specifies if the item can be inserted by a user initiated action. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.dragend | event | Fired when the user stops dragging the list view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.dragstart | event | Fired when the user starts dragging the list view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Picker.backgroundColor | property | Background color of the picker, as a color name or hex triplet. (Added support for iPhone and iPad.) |
| Titanium.UI.Picker.dateTimeColor | property | Sets the text color of date- and time-pickers. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Picker.getBackgroundColor | method | Gets the value of the Titanium.UI.Picker.backgroundColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.Picker.getDateTimeColor | method | Gets the value of the Titanium.UI.Picker.dateTimeColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Picker.setBackgroundColor | method | Sets the value of the Titanium.UI.Picker.backgroundColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.Picker.setDateTimeColor | method | Sets the value of the Titanium.UI.Picker.dateTimeColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ProgressBar.getTrackTintColor | method | Gets the value of the Titanium.UI.ProgressBar.trackTintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ProgressBar.setTrackTintColor | method | Sets the value of the Titanium.UI.ProgressBar.trackTintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ProgressBar.trackTintColor | property | The color shown for the portion of the progress bar that is not filled. (New API, supported on iPhone and iPad.) |
| Titanium.UI.RETURNKEY\_CONTINUE | property | Set the return key text to "Continue". (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.getKeyboardAppearance | method | Gets the value of the Titanium.UI.SearchBar.keyboardAppearance property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.keyboardAppearance | property | Determines the appearance of the keyboard to be displayed the field is focused. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.setKeyboardAppearance | method | Sets the value of the Titanium.UI.SearchBar.keyboardAppearance property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_NONE | property | The row divider is hidden. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_SINGLE\_LINE | property | The row divider is shown as a single line. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Tab.getIconInsets | method | Gets the value of the Titanium.UI.Tab.iconInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.iconInsets | property | The icon inset or outset for each edge. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.selected | event | Fired when the tab is selected. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.Tab.setIconInsets | method | Sets the value of the Titanium.UI.Tab.iconInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.unselected | event | Fired when the tab is no longer selected. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.TableView.getMaxClassname | method | Gets the value of the Titanium.UI.TableView.maxClassname property. (New API, supported on Android.) |
| Titanium.UI.TableView.getSeparatorStyle | method | Gets the value of the Titanium.UI.TableView.separatorStyle property. (Added support for Android.) |
| Titanium.UI.TableView.maxClassname | property | Max number of row class names. (New API, supported on Android.) |
| Titanium.UI.TableView.separatorStyle | property | Separator style constant. (Added support for Android.) |
| Titanium.UI.TableView.setMaxClassname | method | Sets the value of the Titanium.UI.TableView.maxClassname property. (New API, supported on Android.) |
| Titanium.UI.TableView.setSeparatorStyle | method | Sets the value of the Titanium.UI.TableView.separatorStyle property. (Added support for Android.) |
| Titanium.UI.TextField.getInputType | method | Gets the value of the Titanium.UI.TextField.inputType property. (New API, supported on Android.) |
| Titanium.UI.TextField.inputType | property | Input type to accept in thetext field. Also influences the Keyboard type to display. (New API, supported on Android.) |
| Titanium.UI.TextField.setInputType | method | Sets the value of the Titanium.UI.TextField.inputType property. (New API, supported on Android.) |
| Titanium.UI.Window.addSharedElement | method | Adds a common UI element to participate in window transition animation. (New API, supported on Android.) |
| Titanium.UI.Window.getSwipeToClose | method | Gets the value of the Titanium.UI.Window.swipeToClose property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.removeAllSharedElements | method | Clears all added shared elements. (New API, supported on Android.) |
| Titanium.UI.Window.setSwipeToClose | method | Sets the value of the Titanium.UI.Window.swipeToClose property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.swipeToClose | property | Boolean value indicating if the user should be able to close a window using a swipe gesture. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LIVEPHOTO\_PLAYBACK\_STYLE\_FULL | property | Plays back the entire motion and sound content of the Live Photo, including transition effects at the start and end. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LIVEPHOTO\_PLAYBACK\_STYLE\_HINT | property | Plays back only a brief section of the motion content of the Live Photo, without sound. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LivePhotoView | object | A view to display a Live Photo object introduced in iOS 9.1. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createLivePhotoView | method | Creates and returns an instance of Titanium.UI.iOS.LivePhotoView. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iPad.Popover.backgroundColor | property | Sets the background color of the popover. (New API, supported on iPad.) |
| Titanium.UI.iPad.Popover.getBackgroundColor | method | Gets the value of the Titanium.UI.iPad.Popover.backgroundColor property. (New API, supported on iPad.) |
| Titanium.UI.iPad.Popover.setBackgroundColor | method | Sets the value of the Titanium.UI.iPad.Popover.backgroundColor property. (New API, supported on iPad.) |

### 5.1.0

The following APIs are new or have expanded platform support in Release 5.1.0 as of November 20th, 2015.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.USER\_NOTIFICATION\_BEHAVIOR\_DEFAULT | property | There will not appear a text input. Use with the behavior property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_BEHAVIOR\_TEXTINPUT | property | There will appear a text input to answer an action outside the application. Use with the behavior property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationAction.behavior | property | Selects whether to show a text input outside the application to reply to a notification. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationAction.getBehavior | method | Gets the value of the Titanium.App.iOS.UserNotificationAction.behavior property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationAction.setBehavior | method | Sets the value of the Titanium.App.iOS.UserNotificationAction.behavior property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.shortcutitemclick | event | Fired when a user taps the Application Shortcut. (New API, supported on iPhone.) |
| Titanium.Buffer | object | Buffer is a mutable, resizable container for raw data. (Added support for Windows Phone.) |
| Titanium.Calendar.hasCalendarPermissions | method | Returns `true` if the app has calendar access (New API, supported on Android, iPhone and iPad.) |
| Titanium.Calendar.requestCalendarPermissions | method | Requests for calendar access (New API, supported on Android, iPhone and iPad.) |
| Titanium.Contacts | object | The top-level Contacts module, used for accessing and modifying the system contacts address book. (Added support for Windows Phone.) |
| Titanium.Contacts.Group | object | An object which represents a group in the system contacts address book. (Added support for Windows Phone.) |
| Titanium.Contacts.Person | object | An object that represents a contact record for a person or organization in the system contacts address book. (Added support for Windows Phone.) |
| Titanium.Geolocation.hasLocationPermissions | method | Returns `true` if the app has location access. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Geolocation.requestLocationPermissions | method | Requests for location access (New API, supported on Android, iPhone and iPad.) |
| Titanium.IOStream | object | IOStream is the interface that all stream types implement. (Added support for Windows Phone.) |
| Titanium.Media.hasCameraPermissions | method | Returns `true` if the app has camera access (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.requestCameraPermissions | method | Requests for camera access (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.ActivityIndicatorStyle | object | A set of constants for the styles available for Titanium.UI.ActivityIndicator objects. (Added support for iPhone and iPad.) |
| Titanium.UI.AlertDialog.getLoginPlaceholder | method | Gets the value of the Titanium.UI.AlertDialog.loginPlaceholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPasswordPlaceholder | method | Gets the value of the Titanium.UI.AlertDialog.passwordPlaceholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPlaceholder | method | Gets the value of the Titanium.UI.AlertDialog.placeholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.loginPlaceholder | property | Placeholder of the login text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.passwordPlaceholder | property | Placeholder of the password text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.placeholder | property | Placeholder of the text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setLoginPlaceholder | method | Sets the value of the Titanium.UI.AlertDialog.loginPlaceholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPasswordPlaceholder | method | Sets the value of the Titanium.UI.AlertDialog.passwordPlaceholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPlaceholder | method | Sets the value of the Titanium.UI.AlertDialog.placeholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Android.CardView | object | A Card view with a rounded corner background and shadow. (New API, supported on Android.) |
| Titanium.UI.Picker | object | A control used to select one or more fixed values. (Added support for Windows Phone.) |
| Titanium.UI.PickerColumn | object | A picker column, representing a selectable group of items in a Titanium.UI.Picker. (Added support for Windows Phone.) |
| Titanium.UI.PickerRow | object | A picker row, representing a selectable item in a Titanium.UI.Picker. (Added support for Windows Phone.) |
| Titanium.UI.TabGroup.selected | event | Fired when a tab is selected. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.unselected | event | Fired when a tab is unselected. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.getPreviewContext | method | Gets the value of the Titanium.UI.View.previewContext property. (New API, supported on iPhone.) |
| Titanium.UI.View.previewContext | property | The preview context used in the 3D-Touch feature "Peek and Pop". (New API, supported on iPhone.) |
| Titanium.UI.View.setPreviewContext | method | Sets the value of the Titanium.UI.View.previewContext property. (New API, supported on iPhone.) |
| Titanium.UI.createPicker | method | Creates and returns an instance of Titanium.UI.Picker. (Added support for Windows Phone.) |
| Titanium.UI.createPickerColumn | method | Creates and returns an instance of Titanium.UI.PickerColumn. (Added support for Windows Phone.) |
| Titanium.UI.createPickerRow | method | Creates and returns an instance of Titanium.UI.PickerRow. (Added support for Windows Phone.) |
| Titanium.UI.iOS.ApplicationShortcuts | object | The Home screen quick action API is for adding shortcuts to your app icon that anticipate and accelerate a user's interaction with your app. (New API, supported on iPhone.) |
| Titanium.UI.iOS.PREVIEW\_ACTION\_STYLE\_DEFAULT | property | The normal style for preview actions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.PREVIEW\_ACTION\_STYLE\_DESTRUCTIVE | property | The destructive style for preview actions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.PREVIEW\_ACTION\_STYLE\_SELECTED | property | The selected style for preview actions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.PreviewAction | object | A PreviewAction provides options to configure action used by the iOS9 3D-Touch feature "Peek and Pop". (New API, supported on iPhone.) |
| Titanium.UI.iOS.PreviewActionGroup | object | A PreviewActionGroup provides options to configure a group of actions used by the iOS9 3D-Touch feature "Peek and Pop". (New API, supported on iPhone.) |
| Titanium.UI.iOS.PreviewContext | object | A PreviewContext provides options to configure the iOS9 3D-Touch feature "Peek and Pop". (New API, supported on iPhone.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_ADD | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_ALARM | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_AUDIO | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_BOOKMARK | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CAPTURE\_PHOTO | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CAPTURE\_VIDEO | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CLOUD | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_COMPOSE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CONFIRMATION | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CONTACT | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_DATE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_FAVORITE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_HOME | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_INVITATION | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_LOCATION | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_LOVE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_MAIL | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_MARK\_LOCATION | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_MESSAGE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_PAUSE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_PLAY | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_PROHIBIT | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_SEARCH | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_SHARE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_SHUFFLE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_TASK | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_TASK\_COMPLETED | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_TIME | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_UPDATE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createApplicationShortcuts | method | Creates and returns an instance of Titanium.UI.iOS.ApplicationShortcuts. (New API, supported on iPhone.) |
| Titanium.UI.iOS.createPreviewAction | method | Creates and returns an instance of Titanium.UI.iOS.PreviewAction. (New API, supported on iPhone.) |
| Titanium.UI.iOS.createPreviewActionGroup | method | Creates and returns an instance of Titanium.UI.iOS.PreviewActionGroup. (New API, supported on iPhone.) |
| Titanium.UI.iOS.createPreviewContext | method | Creates and returns an instance of Titanium.UI.iOS.PreviewContext. (New API, supported on iPhone.) |
| Titanium.UI.iOS.forceTouchSupported | property | Determines if the 3D-Touch capability "Force Touch" is supported (`true`) or not (`false`) by the device. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.getForceTouchSupported | method | Gets the value of the Titanium.UI.iOS.forceTouchSupported property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setForceTouchSupported | method | Sets the value of the Titanium.UI.iOS.forceTouchSupported property. (New API, supported on iPhone and iPad.) |

### 5.0.0

The following APIs are new or have expanded platform support in Release 5.0.0 as of September 16th, 2015.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.Notification.getLargeIcon | method | Gets the value of the Titanium.Android.Notification.largeIcon property. (New API, supported on Android.) |
| Titanium.Android.Notification.largeIcon | property | Add a large icon to the notification (and the ticker on some devices) specified as an Android resource ID, or a local URL to a density-specific image. (New API, supported on Android.) |
| Titanium.Android.Notification.setLargeIcon | method | Sets the value of the Titanium.Android.Notification.largeIcon property. (New API, supported on Android.) |
| Titanium.App.iOS.SearchableIndex | object | The SearchableIndex module is used to add or remove Ti.App.iOS.SearchableItem objects from the device search index. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItem | object | Used to create a unique object containing all of the search information that will appear in the device search index. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet | object | The SearchableItemAttributeSet module defines metadata properties for SearchItem and UserActivity objects. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_APPLE\_ICNS | property | Uniform type identifier for Mac OS icon images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_APPLE\_PROTECTED\_MPEG4\_AUDIO | property | Uniform type identifier for protected MPEG-4 audio (iTunes music store format). (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_AUDIO | property | Uniform type identifier for all audio content. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_BMP | property | Uniform type identifier for Windows bitmap images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_FLAT\_RTFD | property | Uniform type identifier for Rich Text with content embedding, pasteboard format. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_GIF | property | Uniform type identifier for GIF images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_HTML | property | Uniform type identifier for HTML. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_ICO | property | Uniform type identifier for Windows icon images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_IMAGE | property | Uniform type identifier for all image types. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_JPEG | property | Uniform type identifier for JPEG images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_JPEG2000 | property | Uniform type identifier for JPEG 2000 images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MOVIE | property | Uniform type identifier for all audiovisual content. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MP3 | property | Uniform type identifier for MP3 audio. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MPEG | property | Uniform type identifier for MPEG-1 and MPEG-2 content. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MPEG4 | property | Uniform type identifier for MPEG-4 content. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MPEG4\_AUDIO | property | Uniform type identifier for MPEG-4 audio. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_PDF | property | Uniform type identifier for PDF data. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_PICT | property | Uniform type identifier for PICT images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_PLAIN\_TEXT | property | Uniform type identifier for a plain text type, equivalent to MIME type text/plain. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_PNG | property | Uniform type identifier for PNG images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_QUICKTIME\_IMAGE | property | Uniform type identifier for QuickTime images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_QUICKTIME\_MOVIE | property | Uniform type identifier for QuickTime movies. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_RTF | property | Uniform type identifier for Rich Text. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_RTFD | property | Uniform type identifier for Rich Text Format Directory, that is, Rich Text with content embedding, on-disk format. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_TEXT | property | Uniform type identifier for all text types. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_TIFF | property | Uniform type identifier for TIFF images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_TXN\_TEXT\_AND\_MULTIMEDIA\_DATA | property | Uniform type identifier for MLTE (Textension) format for mixed text and multimedia data. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_UTF16\_EXTERNAL\_PLAIN\_TEXT | property | Uniform type identifier for Unicode-16 with byte-order mark (BOM), or if BOM is not present, an external representation byte order (big-endian). (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_UTF16\_PLAIN\_TEXT | property | Uniform type identifier for Unicode-16, native byte order, with an optional byte-order mark (BOM). (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_UTF8\_PLAIN\_TEXT | property | Uniform type identifier for Unicode-8 plain text type. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_VIDEO | property | Uniform type identifier for all video content without audio. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_WEB\_ARCHIVE | property | Uniform type identifier for WebKit webarchive format. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_XML | property | Uniform type identifier for XML. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity | object | The UserActivity module is used to enable device Handoff and to create User Activities. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.continueactivity | event | Fired when iOS continueactivity calls `continueUserActivity`. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createSearchableIndex | method | Creates and returns an instance of Titanium.App.iOS.SearchableIndex. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createSearchableItem | method | Creates and returns an instance of Titanium.App.iOS.SearchableItem. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createSearchableItemAttributeSet | method | Creates and returns an instance of Titanium.App.iOS.SearchableItemAttributeSet. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createUserActivity | method | Creates and returns an instance of Titanium.App.iOS.UserActivity. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.getSupportedUserActivityTypes | method | Gets the value of the Titanium.App.iOS.supportedUserActivityTypes property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.supportedUserActivityTypes | property | Provides an Array of the NSUserActivityTypes keys defined within your Titanium project. (available on iOS 8 and later). (New API, supported on iPhone and iPad.) |
| Titanium.Contacts.getGroupByIdentifier | method | Gets the group with the specified identifier. (New API, supported on iPhone and iPad.) |
| Titanium.Contacts.getPersonByIdentifier | method | Gets the person with the specified identifier. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Contacts.Person.identifier | property | Identifier of the person. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.allowsBackgroundLocationUpdates | property | Determines if the app can do background location updates. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.getAllowsBackgroundLocationUpdates | method | Gets the value of the Titanium.Geolocation.allowsBackgroundLocationUpdates property. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.setAllowsBackgroundLocationUpdates | method | Sets the value of the Titanium.Geolocation.allowsBackgroundLocationUpdates property. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.change | event | Fired when the state of the playback changes. (Added support for Windows Phone.) |
| Titanium.Media.AudioPlayer.complete | event | Fired when the audio has finished playing. (Added support for Windows Phone.) |
| Titanium.Media.AudioPlayer.error | event | Fired when there's an error. (Added support for Windows Phone.) |
| Titanium.Media.Sound.change | event | Fired when the state of the playback changes. (Added support for Windows Phone.) |
| Titanium.Media.Sound.complete | event | Fired when the audio has finished playing. (Added support for Windows Phone.) |
| Titanium.Media.Sound.error | event | Fired when an error occurs while playing the audio. (Added support for Windows Phone.) |
| Titanium.Media.VideoPlayer.complete | event | Fired when movie playback ends or a user exits playback. (Added support for Windows Phone.) |
| Titanium.Media.VideoPlayer.error | event | Fired when movie playback encounters an error. (Added support for Windows Phone.) |
| Titanium.Network.Cookie.getMaxAge | method | Gets the value of the Titanium.Network.Cookie.maxAge property. (New API, supported on Android.) |
| Titanium.Network.Cookie.maxAge | property | Sets the Max-Age attribute of a Cookie, in delta-seconds. (New API, supported on Android.) |
| Titanium.Network.Cookie.setMaxAge | method | Sets the value of the Titanium.Network.Cookie.maxAge property. (New API, supported on Android.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK | property | Use with Attribute.type to wrap and truncate the text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_CHAR\_WRAPPING | property | Use with Attribute.value to wrap words at word boundaries. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_CLIPPING | property | Use with Attribute.value to set lines to not draw past the edge of the text container. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_TRUNCATING\_HEAD | property | Use with Attribute.value to use ellipsis glyph at the beginning of the line for missing text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_TRUNCATING\_MIDDLE | property | Use with Attribute.value to use ellipsis glyph at the middle of the line for missing text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_TRUNCATING\_TAIL | property | Use with Attribute.value to use ellipsis glyph at the end of the line for missing text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_WORD\_WRAPPING | property | Use with Attribute.value to wrap words at word boundaries. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard | object | A module used for accessing clipboard data. (Added support for Windows Phone.) |
| Titanium.UI.ListView.noresults | event | Fired when the search using either searchView or searchText has no results. (Added support for Android.) |
| Titanium.UI.ListView.editaction | event | Fired when the user interacts with one of the custom edit actions. |
| Titanium.UI.Picker.getSelectionOpens | method | Gets the value of the Titanium.UI.Picker.selectionOpens property. (New API, supported on Android.) |
| Titanium.UI.Picker.selectionOpens | property | Determines whether calling the method `setSelectedRow` opens when called (New API, supported on Android.) |
| Titanium.UI.ScrollView.canCancelEvents | property | Determines whether this scroll view can cancel subview touches in order to scroll instead. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.contentOffset | property | X and Y coordinates to which to reposition the top-left point of the scrollable region. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.decelerationRate | property | The deceleration rate of the ScrollView. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.disableBounce | property | Determines whether scroll bounce of the scrollable region is enabled. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getCanCancelEvents | method | Gets the value of the Titanium.UI.ScrollView.canCancelEvents property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getContentOffset | method | Gets the value of the Titanium.UI.ScrollView.contentOffset property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getDecelerationRate | method | Gets the value of the Titanium.UI.ScrollView.decelerationRate property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getDisableBounce | method | Gets the value of the Titanium.UI.ScrollView.disableBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getHorizontalBounce | method | Gets the value of the Titanium.UI.ScrollView.horizontalBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getMaxZoomScale | method | Gets the value of the Titanium.UI.ScrollView.maxZoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getMinZoomScale | method | Gets the value of the Titanium.UI.ScrollView.minZoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getOverScrollMode | method | Gets the value of the Titanium.UI.ScrollView.overScrollMode property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getScrollIndicatorStyle | method | Gets the value of the Titanium.UI.ScrollView.scrollIndicatorStyle property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getScrollType | method | Gets the value of the Titanium.UI.ScrollView.scrollType property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getScrollsToTop | method | Gets the value of the Titanium.UI.ScrollView.scrollsToTop property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getVerticalBounce | method | Gets the value of the Titanium.UI.ScrollView.verticalBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getZoomScale | method | Gets the value of the Titanium.UI.ScrollView.zoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.horizontalBounce | property | Determines whether horizontal scroll bounce of the scrollable region is enabled. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.maxZoomScale | property | Maximum scaling factor of the scrollable region and its content. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.minZoomScale | property | Minimum scaling factor of the scrollable region and its content. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.overScrollMode | property | Determines the behavior when the user overscolls the view. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.scrollIndicatorStyle | property | Style of the scrollbar. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.scrollType | property | Limits the direction of the scrollable region, overriding the deduced setting. Set to`horizontal` or `vertical`. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.scrollsToTop | property | Controls whether the scroll-to-top gesture is effective. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setCanCancelEvents | method | Sets the value of the Titanium.UI.ScrollView.canCancelEvents property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setContentOffset | method | Sets the value of the Titanium.UI.ScrollView.contentOffset property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setDecelerationRate | method | Sets the value of the Titanium.UI.ScrollView.decelerationRate property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setDisableBounce | method | Sets the value of the Titanium.UI.ScrollView.disableBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setHorizontalBounce | method | Sets the value of the Titanium.UI.ScrollView.horizontalBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setMaxZoomScale | method | Sets the value of the Titanium.UI.ScrollView.maxZoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setMinZoomScale | method | Sets the value of the Titanium.UI.ScrollView.minZoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setOverScrollMode | method | Sets the value of the Titanium.UI.ScrollView.overScrollMode property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setScrollIndicatorStyle | method | Sets the value of the Titanium.UI.ScrollView.scrollIndicatorStyle property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setScrollType | method | Sets the value of the Titanium.UI.ScrollView.scrollType property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setScrollsToTop | method | Sets the value of the Titanium.UI.ScrollView.scrollsToTop property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setVerticalBounce | method | Sets the value of the Titanium.UI.ScrollView.verticalBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setZoomScale | method | Sets the value of the Titanium.UI.ScrollView.zoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.verticalBounce | property | Determines whether vertical scroll bounce of the scrollable region is enabled. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.zoomScale | property | Scaling factor of the scroll view's content. (Added support for Windows Phone.) |
| Titanium.UI.Switch.color | property | Color to use for switch text, as a color name or hex triplet. (Added support for Windows Phone.) |
| Titanium.UI.Switch.enabled | property | Determines whether the switch is enabled. (Added support for Windows Phone.) |
| Titanium.UI.Switch.getColor | method | Gets the value of the Titanium.UI.Switch.color property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.getEnabled | method | Gets the value of the Titanium.UI.Switch.enabled property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.getTitleOff | method | Gets the value of the Titanium.UI.Switch.titleOff property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.getTitleOn | method | Gets the value of the Titanium.UI.Switch.titleOn property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.setColor | method | Sets the value of the Titanium.UI.Switch.color property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.setEnabled | method | Sets the value of the Titanium.UI.Switch.enabled property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.setTitleOff | method | Sets the value of the Titanium.UI.Switch.titleOff property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.setTitleOn | method | Sets the value of the Titanium.UI.Switch.titleOn property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.titleOff | property | Text to display on the switch in its "off" state, when the toggle button style is in use. (Added support for Windows Phone.) |
| Titanium.UI.Switch.titleOn | property | Text to display on the switch in its "on" state, when the toggle button style is in use. (Added support for Windows Phone.) |
| Titanium.UI.TextArea.getShowUndoRedoActions | method | Gets the value of the Titanium.UI.TextArea.showUndoRedoActions property. (New API, supported on iPad.) |
| Titanium.UI.TextArea.setShowUndoRedoActions | method | Sets the value of the Titanium.UI.TextArea.showUndoRedoActions property. (New API, supported on iPad.) |
| Titanium.UI.TextArea.showUndoRedoActions | property | Determinates if the undo and redo buttons on the left side of the keyboard should be displayed or not. Only valid on iOS9 and above. (New API, supported on iPad.) |
| Titanium.UI.TextField.getShowUndoRedoActions | method | Gets the value of the Titanium.UI.TextField.showUndoRedoActions property. (New API, supported on iPad.) |
| Titanium.UI.TextField.setShowUndoRedoActions | method | Sets the value of the Titanium.UI.TextField.showUndoRedoActions property. (New API, supported on iPad.) |
| Titanium.UI.TextField.showUndoRedoActions | property | Determinates if the undo and redo buttons on the left side of the keyboard should be displayed or not. Only valid on iOS9 and above. (New API, supported on iPad.) |
| Titanium.UI.View.backgroundImage | property | Background image for the view, specified as a local file path or URL. (Added support for Windows Phone.) |
| Titanium.UI.View.getBackgroundImage | method | Gets the value of the Titanium.UI.View.backgroundImage property. (Added support for Windows Phone.) |
| Titanium.UI.View.getZIndex | method | Gets the value of the Titanium.UI.View.zIndex property. (Added support for Windows Phone.) |
| Titanium.UI.View.setBackgroundImage | method | Sets the value of the Titanium.UI.View.backgroundImage property. (Added support for Windows Phone.) |
| Titanium.UI.View.setZIndex | method | Sets the value of the Titanium.UI.View.zIndex property. (Added support for Windows Phone.) |
| Titanium.UI.View.zIndex | property | Z-index stack order position, relative to other sibling views. (Added support for Windows Phone.) |
| Titanium.WatchSession | object | Used to enable data and file transfers between a watchOS and iOS application. (New API, supported on iPhone.) |
