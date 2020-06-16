---
title: Titanium SDK 7.0.1.RC - 18 December 2017
weight: '280'
---

# Titanium SDK 7.0.1.RC - 18 December 2017

## About this release

Titanium SDK 7.0.1.RC is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Community credits

* [Richard Lustemberg](https://github.com/rlustemberg)

    * [TIMOB-25576](https://jira.appcelerator.org/browse/TIMOB-25576) - Ensuring usage of macros bundled core utilities and shells when adding to iOS buildPhases

## Fixed issues

### Android

* [TIMOB-20332](https://jira.appcelerator.org/browse/TIMOB-20332) - Closing a Ti.UI.TabGroup that contains a ti.map view crashes the app on Android

* [TIMOB-25468](https://jira.appcelerator.org/browse/TIMOB-25468) - Android: HTML Key is missing under the source object for web view

* [TIMOB-25469](https://jira.appcelerator.org/browse/TIMOB-25469) - Android : Custom theme not applying when background color is transparent

* [TIMOB-25477](https://jira.appcelerator.org/browse/TIMOB-25477) - Android: Tapping right-aligned TextField not always receiving focus as of 6.2.2

* [TIMOB-25508](https://jira.appcelerator.org/browse/TIMOB-25508) - Android: Forced rebuild loop due to tiapp.xml navbar-hidden changed

* [TIMOB-25517](https://jira.appcelerator.org/browse/TIMOB-25517) - Android: TableViewProxy unable to create table view row proxy for object

* [TIMOB-25526](https://jira.appcelerator.org/browse/TIMOB-25526) - Android: Listview when showing image with defaultImage causing inconsistency on image

* [TIMOB-25592](https://jira.appcelerator.org/browse/TIMOB-25592) - Android CLI: Migration fails if module version does not follow semver (e.g. 1.0), description key overridden

* [TIMOB-25601](https://jira.appcelerator.org/browse/TIMOB-25601) - Android: Remove "ti.cloudpush" module's "com.google.android.gms.version" metadata tag

### iOS

* [TIMOB-25414](https://jira.appcelerator.org/browse/TIMOB-25414) - iOS : Search bar in absolute-positioned ListView extends when focused

* [TIMOB-25424](https://jira.appcelerator.org/browse/TIMOB-25424) - iOS: Unnecessary symbols compiled to the app

* [TIMOB-25560](https://jira.appcelerator.org/browse/TIMOB-25560) - iOS: extendSafeArea property not behave properly if tabBarHidden = true or navBarHidden = true

* [TIMOB-25573](https://jira.appcelerator.org/browse/TIMOB-25573) - CLI: iOS compiler breaks and compiles incorrectly when building to device - 6.3.0

* [TIMOB-25574](https://jira.appcelerator.org/browse/TIMOB-25574) - iOS: SDK 7.0.0 - App crashes with exception when closing window that contains videoplayer

* [TIMOB-25576](https://jira.appcelerator.org/browse/TIMOB-25576) - Ensuring usage of macros bundled core utilities and shells when adding to iOS buildPhases

* [TIMOB-25586](https://jira.appcelerator.org/browse/TIMOB-25586) - iOS: Crash when selecting filtered row in Ti.UI.SearchBar

## Improvements

* [TIMOB-25572](https://jira.appcelerator.org/browse/TIMOB-25572) - Android: Provide Toolbar customization through DrawerLayout

    * Added `customToolbar` creationOnly property to DrawerLayout which expects an instance of Ti.UI.Toolbar which replaces the embedded Toolbar and provide access to increased customization. This property must be used together with `toolbarEnabled = false` in the creation dictionary to have an effect.

* [TIMOB-25593](https://jira.appcelerator.org/browse/TIMOB-25593) - Android: Update Ti.Identity to work with Android 64 Bit & SDK 7.0.0

    * Updated `Ti.Indentity` to work with Android 64-bit and SDK 7.0.x

## API changes

### New APIs

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

### Deprecated APIs

The following APIs are deprecated in Release 7.0.1 as of December 21st, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Calendar.Calendar.getEventsInMonth | method | Use Titanium.Calendar.Calendar.getEventsBetweenDates instead. |
| Titanium.Calendar.Calendar.getEventsInYear | method | Use Titanium.Calendar.Calendar.getEventsBetweenDates instead. |
| Titanium.Filesystem.File.getParent | method | Use the Titanium.Filesystem.File.parent property to receive a `File`reference instead. If you wish to receive the path, use the `nativePath`property of that reference instead. |
| Titanium.Geolocation.AUTHORIZATION\_AUTHORIZED | property | Use Titanium.Geolocation.AUTHORIZATION\_ALWAYS as advised by Apple. |
| Titanium.Media.VideoPlayer.backgroundView | property | Use Titanium.Media.VideoPlayer.overlayView instead. |
| Titanium.Media.VideoPlayer.getBackgroundView | method | Use Titanium.Media.VideoPlayer.overlayView instead. |
| Titanium.Media.VideoPlayer.getLoadState | method | On iOS, use Titanium.Media.VideoPlayer.moviePlayerStatus instead. |
| Titanium.Media.VideoPlayer.loadState | property | On iOS, use Titanium.Media.VideoPlayer.moviePlayerStatus instead. |
| Titanium.Media.VideoPlayer.setBackgroundView | method | Use Titanium.Media.VideoPlayer.overlayView instead. |

### Removed APIs

The following APIs have been removed in Release 7.0.1 as of December 21st, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Calendar.STATUS\_CANCELLED | property | Use Titanium.Calendar.STATUS\_CANCELED instead. |
| Titanium.Media.CAMERA\_AUTHORIZATION\_NOT\_DETERMINED | property | Use Titanium.Media.CAMERA\_AUTHORIZATION\_UNKNOWN instead. |
| Titanium.Media.VIDEO\_CONTROL\_DEFAULT | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_CONTROL\_EMBEDDED | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_CONTROL\_FULLSCREEN | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_LOAD\_STATE\_PLAYTHROUGH\_OK | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_LOAD\_STATE\_STALLED | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_MEDIA\_TYPE\_AUDIO | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_MEDIA\_TYPE\_NONE | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_MEDIA\_TYPE\_VIDEO | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_PLAYBACK\_STATE\_SEEKING\_BACKWARD | property | This constant has been removed on iOS by using the official Apple AVPlayer that does not expose this functionality so far. |
| Titanium.Media.VIDEO\_PLAYBACK\_STATE\_SEEKING\_FORWARD | property | This constant has been removed on iOS by using the official Apple AVPlayer that does not expose this functionality so far. |
| Titanium.Media.VIDEO\_SCALING\_ASPECT\_FILL | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SCALING\_ASPECT\_FIT | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SCALING\_MODE\_FILL | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SCALING\_NONE | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SOURCE\_TYPE\_FILE | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SOURCE\_TYPE\_STREAMING | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SOURCE\_TYPE\_UNKNOWN | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.fullscreen | event | This event has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.fullscreen | property | This method has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.getFullscreen | method | This method has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.getMediaControlStyle | method | On iOS, use Titanium.Media.VideoPlayer.showsControls instead. |
| Titanium.Media.VideoPlayer.getSourceType | method | This method has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.mediaControlStyle | property | On iOS, use Titanium.Media.VideoPlayer.showsControls instead. |
| Titanium.Media.VideoPlayer.mediatypesavailable | event | This event has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.setFullscreen | method | This method has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.setMediaControlStyle | method | On iOS, use Titanium.Media.VideoPlayer.showsControls instead. |
| Titanium.Media.VideoPlayer.setSourceType | method | This method has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.sourceType | property | This method has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.sourcechange | event | This event has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Network.INADDR\_ANY | property |  |
| Titanium.UI.iPhone | object | Use the unified Titanium.UI.iOS namespace instead. |
| Titanium.UI.iPhone.ActivityIndicatorStyle | object | Use the Titanium.UI.ActivityIndicatorStyle constants instead (without the iPhone namespace). |
| Titanium.UI.iPhone.AlertDialogStyle | object | Use Titanium.UI.iOS.AlertDialogStyle instead. |
| Titanium.UI.iPhone.AnimationStyle | object | Use Titanium.UI.iOS.AnimationStyle instead. |
| Titanium.UI.iPhone.ListViewCellSelectionStyle | object | Use Titanium.UI.iOS.ListViewCellSelectionStyle instead. |
| Titanium.UI.iPhone.ListViewScrollPosition | object | Use Titanium.UI.iOS.ListViewScrollPosition instead. |
| Titanium.UI.iPhone.ListViewSeparatorStyle | object | Use Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_SINGLE\_LINE and Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_NONE instead. |
| Titanium.UI.iPhone.ListViewStyle | object | Use Titanium.UI.iOS.ListViewStyle instead. |
| Titanium.UI.iPhone.ProgressBarStyle | object | Use Titanium.UI.iOS.ProgressBarStyle instead. |
| Titanium.UI.iPhone.RowAnimationStyle | object | Use Titanium.UI.iOS.RowAnimationStyle instead. |
| Titanium.UI.iPhone.ScrollIndicatorStyle | object | Use Titanium.UI.iOS.ScrollIndicatorStyle instead. |
| Titanium.UI.iPhone.SystemButton | object | Use Titanium.UI.iOS.SystemButton instead. |
| Titanium.UI.iPhone.SystemButtonStyle | object | Use Titanium.UI.iOS.SystemButtonStyle instead. |
| Titanium.UI.iPhone.SystemIcon | object | Use Titanium.UI.iOS.SystemIcon instead. |
| Titanium.UI.iPhone.TableViewCellSelectionStyle | object | Use Titanium.UI.iOS.TableViewCellSelectionStyle instead. |
| Titanium.UI.iPhone.TableViewScrollPosition | object | Use Titanium.UI.iOS.TableViewScrollPosition instead. |
| Titanium.UI.iPhone.TableViewSeparatorStyle | object | Use Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_SINGLE\_LINE and Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_NONE instead. |
| Titanium.UI.iPhone.TableViewStyle | object | Use Titanium.UI.iOS.TableViewStyle instead. |
