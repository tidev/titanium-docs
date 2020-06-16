---
title: Titanium SDK 7.5.1.GA - 26 February 2019
weight: '30'
---

# Titanium SDK 7.5.1.GA - 26 February 2019

## About this release

Titanium SDK 7.5.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. End of support for this version will be 2019-08-26 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New features

* [TIMOB-13966](https://jira.appcelerator.org/browse/TIMOB-13966) - TiAPI: Select Locale for L() at runtime

    * Change language on runtime across app-launches

## Community credits

* Jorge Macias Garcia - [TIMOB-26625](https://jira.appcelerator.org/browse/TIMOB-26625)

* Joe Finnigan - [TIMOB-26628](https://jira.appcelerator.org/browse/TIMOB-26628)

* Thomas Weber - [TIMOB-26612](https://jira.appcelerator.org/browse/TIMOB-26612)

* [Mads Moller](https://github.com/viezel) - [TIMOB-13966](https://jira.appcelerator.org/browse/TIMOB-13966)

* Ricardo Ramirez - [TIMOB-20266](https://jira.appcelerator.org/browse/TIMOB-20266)

* [John Staunton](https://github.com/johnstan) - [TIMOB-26688](https://jira.appcelerator.org/browse/TIMOB-26688)

* Teun Klijn - [TIMOB-26594](https://jira.appcelerator.org/browse/TIMOB-26594)

## Fixed issues

### Android

* [TIMOB-20266](https://jira.appcelerator.org/browse/TIMOB-20266) - Android: ListView with attributed strings are not rendering sometimes

* [TIMOB-26545](https://jira.appcelerator.org/browse/TIMOB-26545) - Android: Using global L() method for localization does not work if second argument is not supplied

* [TIMOB-26580](https://jira.appcelerator.org/browse/TIMOB-26580) - Android: ListView templates not compatible with native modules

* [TIMOB-26625](https://jira.appcelerator.org/browse/TIMOB-26625) - Android: Can't open Titanium app through intent (7.5.0 regression)

* [TIMOB-26626](https://jira.appcelerator.org/browse/TIMOB-26626) - Android apps are taking much longer to load than they did on previous sdks

* [TIMOB-26632](https://jira.appcelerator.org/browse/TIMOB-26632) - Android: App sometimes crashes when backgrounded as of 7.5.0

* [TIMOB-26774](https://jira.appcelerator.org/browse/TIMOB-26774) - Android: When backgrounded, data intent no longer re-executes "app.js" as of 7.5.0

### iOS

* [TIMOB-26452](https://jira.appcelerator.org/browse/TIMOB-26452) - iOS: Object.hasProperty incorrectly reports false when a property's value is null

* [TIMOB-26594](https://jira.appcelerator.org/browse/TIMOB-26594) - iOS: Exception when canceling local notifications with removePendingNotifications

* [TIMOB-26612](https://jira.appcelerator.org/browse/TIMOB-26612) - Problem with Internationalization

* [TIMOB-26628](https://jira.appcelerator.org/browse/TIMOB-26628) - iOS 11.0: App crashes on launch

* [TIMOB-26688](https://jira.appcelerator.org/browse/TIMOB-26688) - iOS: Proxy objects created in timers aren't released properly

## API changes

### New APIs

The following APIs are new or have expanded platform support in release 7.5.1.

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

### Deprecated APIs

The following APIs are deprecated in release 7.5.1.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Media.AudioPlayer.STATE\_BUFFERING | property | Use Titanium.Media.AUDIO\_STATE\_BUFFERING instead. |
| Titanium.Media.AudioPlayer.STATE\_INITIALIZED | property | Use Titanium.Media.AUDIO\_STATE\_INITIALIZED instead. |
| Titanium.Media.AudioPlayer.STATE\_PAUSED | property | Use Titanium.Media.AUDIO\_STATE\_PAUSED instead. |
| Titanium.Media.AudioPlayer.STATE\_PLAYING | property | Use Titanium.Media.AUDIO\_STATE\_PLAYING instead. |
| Titanium.Media.AudioPlayer.STATE\_STARTING | property | Use Titanium.Media.AUDIO\_STATE\_STARTING instead. |
| Titanium.Media.AudioPlayer.STATE\_STOPPED | property | Use Titanium.Media.AUDIO\_STATE\_STOPPED instead. |
| Titanium.Media.AudioPlayer.STATE\_STOPPING | property | Use Titanium.Media.AUDIO\_STATE\_STOPPING instead. |
| Titanium.Media.AudioPlayer.STATE\_WAITING\_FOR\_DATA | property | Use Titanium.Media.AUDIO\_STATE\_WAITING\_FOR\_DATA instead. |
| Titanium.Media.AudioPlayer.STATE\_WAITING\_FOR\_QUEUE | property | Use Titanium.Media.AUDIO\_STATE\_WAITING\_FOR\_QUEUE instead. |
| Titanium.Media.AudioPlayer.play | method | Use the cross-platform API start instead. |
| Titanium.Media.AudioPlayer.setPaused | method | Use the cross-platform API pause instead. |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK | property | Use Titanium.UI.ATTRIBUTE\_PARAGRAPH\_STYLE.lineBreakMode instead. |

## SDK modules versions

### Android and iOS

| Module | iOS version | Android version |
| --- | --- | --- |
| urlSession | 2.1.0 | n/a |
| facebook | 5.9.0 | 7.3.1 |
| ti.coremotion | 2.0.1 | n/a |
| ti.map | 3.1.0 | 4.3.1 |
| ti.safaridialog | 1.1.1 | n/a |
| ti.webdialog | 1.1.0 | 1.1.0 |
| ti.touchid | 2.1.4 | 3.0.1 |
| ti.identity | 1.0.5 | 2.1.0 |
| ti.cloudpush | n/a | 6.0.0 |
| ti.playservices | n/a | 16.1.2 |

### CommonJS

| Module | Version |
| --- | --- |
| ti.cloud | 3.2.11 |

### Hyperloop

| Module | Version |
| --- | --- |
| hyperloop | 3.1.4 |
