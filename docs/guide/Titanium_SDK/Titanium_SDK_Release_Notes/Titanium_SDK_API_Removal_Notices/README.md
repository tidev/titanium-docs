---
title: Titanium SDK API Removal Notices
weight: '70'
---

# Titanium SDK API Removal Notices

This document lists every SDK removal notice.

List of all removal notices for SDK 8.x.

## SDK 8.x

### 8.0.0

The following APIs have been removed in Release 8.0.0 as of February 20th, 2019.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Contacts.AUTHORIZATION\_RESTRICTED | property | iOS 9 and later does not use this constant anymore. Use the other available constants instead. |
| Titanium.UI.KEYBOARD\_APPEARANCE\_ALERT | property |  |
| Titanium.UI.KEYBOARD\_ASCII | property | Use Titanium.UI.KEYBOARD\_TYPE\_ASCII instead. |
| Titanium.UI.KEYBOARD\_DECIMAL\_PAD | property | Use Titanium.UI.KEYBOARD\_TYPE\_DECIMAL\_PAD instead. |
| Titanium.UI.KEYBOARD\_DEFAULT | property | Use Titanium.UI.KEYBOARD\_TYPE\_DEFAULT instead. |
| Titanium.UI.KEYBOARD\_EMAIL | property | Use Titanium.UI.KEYBOARD\_TYPE\_EMAIL instead. |
| Titanium.UI.KEYBOARD\_NAMEPHONE\_PAD | property | Use Titanium.UI.KEYBOARD\_TYPE\_NAMEPHONE\_PAD instead. |
| Titanium.UI.KEYBOARD\_NUMBERS\_PUNCTUATION | property | Use Titanium.UI.KEYBOARD\_TYPE\_NUMBERS\_PUNCTUATION instead. |
| Titanium.UI.KEYBOARD\_NUMBER\_PAD | property | Use Titanium.UI.KEYBOARD\_TYPE\_NUMBER\_PAD instead. |
| Titanium.UI.KEYBOARD\_PHONE\_PAD | property | Use Titanium.UI.KEYBOARD\_TYPE\_PHONE\_PAD instead. |
| Titanium.UI.KEYBOARD\_URL | property | Use Titanium.UI.KEYBOARD\_TYPE\_URL instead. |
| Titanium.Yahoo | object | Use the standalone Ti.Yahoo module instead. |

List of all removal notices for SDK 7.x.

## SDK 7.x

### 7.0.0

The following APIs have been removed in Release 7.0.0 as of December 8th, 2017.

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
| Titanium.Media.VideoPlayer.sourcechange | event | This event has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.sourceType | property | This method has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
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

### 7.0.1

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

List of all removal notices for SDK 6.x.

## SDK 6.x

### 6.0.0

The following APIs have been removed in Release 6.0.0 as of November 14th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Filesystem.File.getWriteable | method | Use Titanium.Filesystem.File.writable instead. |
| Titanium.Filesystem.File.writeable | property | Use Titanium.Filesystem.File.writable instead. |
| Titanium.Media.VideoPlayer.getMovieControlMode | method | Use Titanium.Media.VideoPlayer.mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.movieControlMode | property | Use Titanium.Media.VideoPlayer.mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.setMovieControlMode | method | Use Titanium.Media.VideoPlayer.mediaControlStyle instead. |
| Titanium.UI.AUTODETECT\_ADDRESS | property | Use Titanium.UI.AUTOLINK\_MAP\_ADDRESSES instead. |
| Titanium.UI.AUTODETECT\_ALL | property | Use Titanium.UI.AUTOLINK\_ALL instead. |
| Titanium.UI.AUTODETECT\_CALENDAR | property | Use Titanium.UI.AUTOLINK\_CALENDAR instead. |
| Titanium.UI.AUTODETECT\_LINK | property | Use Titanium.UI.AUTOLINK\_URLS instead. |
| Titanium.UI.AUTODETECT\_NONE | property | Use Titanium.UI.AUTOLINK\_NONE instead. |
| Titanium.UI.AUTODETECT\_PHONE | property | Use Titanium.UI.AUTOLINK\_PHONE\_NUMBERS instead. |
| Titanium.UI.BLEND\_MODE\_CLEAR | property | Use Titanium.UI.iOS.BLEND\_MODE\_CLEAR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_BURN | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_BURN instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_DODGE | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_DODGE instead. |
| Titanium.UI.BLEND\_MODE\_COPY | property | Use Titanium.UI.iOS.BLEND\_MODE\_COPY instead. |
| Titanium.UI.BLEND\_MODE\_DARKEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DARKEN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_IN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OVER instead. |
| Titanium.UI.BLEND\_MODE\_DIFFERENCE | property | Use Titanium.UI.iOS.BLEND\_MODE\_DIFFERENCE instead. |
| Titanium.UI.BLEND\_MODE\_EXCLUSION | property | Use Titanium.UI.iOS.BLEND\_MODE\_EXCLUSION instead. |
| Titanium.UI.BLEND\_MODE\_HARD\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_HARD\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_HUE | property | Use Titanium.UI.iOS.BLEND\_MODE\_HUE instead. |
| Titanium.UI.BLEND\_MODE\_LIGHTEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_LIGHTEN instead. |
| Titanium.UI.BLEND\_MODE\_LUMINOSITY | property | Use Titanium.UI.iOS.BLEND\_MODE\_LUMINOSITY instead. |
| Titanium.UI.BLEND\_MODE\_MULTIPLY | property | Use Titanium.UI.iOS.BLEND\_MODE\_MULTIPLY instead. |
| Titanium.UI.BLEND\_MODE\_NORMAL | property | Use Titanium.UI.iOS.BLEND\_MODE\_NORMAL instead. |
| Titanium.UI.BLEND\_MODE\_OVERLAY | property | Use Titanium.UI.iOS.BLEND\_MODE\_OVERLAY instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_DARKER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_DARKER instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_LIGHTER instead. |
| Titanium.UI.BLEND\_MODE\_SATURATION | property | Use Titanium.UI.iOS.BLEND\_MODE\_SATURATION instead. |
| Titanium.UI.BLEND\_MODE\_SCREEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SCREEN instead. |
| Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOFT\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_IN instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_XOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_XOR instead. |
| Titanium.UI.Window.getUrl | method |  |
| Titanium.UI.Window.setUrl | method |  |
| Titanium.UI.Window.url | property |  |
| Titanium.UI.iOS.3DMatrix | object | Use Titanium.UI.3DMatrix instead. |
| Titanium.UI.iOS.Attribute | object | Use Attribute instead. |
| Titanium.UI.iOS.AttributedString | object | Use Titanium.UI.AttributedString instead. |
| Titanium.UI.iOS.NavigationWindow.getUrl | method |  |
| Titanium.UI.iOS.NavigationWindow.setUrl | method |  |
| Titanium.UI.iOS.NavigationWindow.url | property |  |
| Titanium.UI.iPad.DocumentViewer | object | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.SplitWindow | object | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPad.createDocumentViewer | method | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.createSplitWindow | method | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPhone.getStatusBarHidden | method | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.getStatusBarStyle | method | Use Titanium.UI.Window.statusBarStyle instead. |
| Titanium.UI.iPhone.statusBarHidden | property | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.statusBarStyle | property | Use Titanium.UI.Window.statusBarStyle instead. |

List of all removal notices for SDK 5.x.

## SDK 5.x

### 5.4.0

The following APIs have been removed in Release 5.4.0 as of August 10th, 2016 .

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Filesystem.File.getWriteable | method | Use writable instead. |
| Titanium.Filesystem.File.writeable | property | Use writable instead. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_AMBIENT | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_PLAYBACK | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_PLAY\_AND\_RECORD | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_RECORD | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.VIDEO\_CONTROL\_VOLUME\_ONLY | property | Use Titanium.Media.VIDEO\_CONTROL\_EMBEDDED instead. |
| Titanium.Media.VideoPlayer.getMovieControlMode | method | Use mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.movieControlMode | property | Use mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.setMovieControlMode | method | Use mediaControlStyle instead. |
| Titanium.UI.AUTODETECT\_ADDRESS | property | Use Titanium.UI.AUTOLINK\_MAP\_ADDRESSES instead. |
| Titanium.UI.AUTODETECT\_ALL | property | Use Titanium.UI.AUTOLINK\_ALL instead. |
| Titanium.UI.AUTODETECT\_CALENDAR | property | Use Titanium.UI.AUTOLINK\_CALENDAR instead. |
| Titanium.UI.AUTODETECT\_LINK | property | Use Titanium.UI.AUTOLINK\_URLS instead. |
| Titanium.UI.AUTODETECT\_NONE | property | Use Titanium.UI.AUTOLINK\_NONE instead. |
| Titanium.UI.AUTODETECT\_PHONE | property | Use Titanium.UI.AUTOLINK\_PHONE\_NUMBERS instead. |
| Titanium.UI.BLEND\_MODE\_CLEAR | property | Use Titanium.UI.iOS.BLEND\_MODE\_CLEAR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_BURN | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_BURN instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_DODGE | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_DODGE instead. |
| Titanium.UI.BLEND\_MODE\_COPY | property | Use Titanium.UI.iOS.BLEND\_MODE\_COPY instead. |
| Titanium.UI.BLEND\_MODE\_DARKEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DARKEN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_IN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OVER instead. |
| Titanium.UI.BLEND\_MODE\_DIFFERENCE | property | Use Titanium.UI.iOS.BLEND\_MODE\_DIFFERENCE instead. |
| Titanium.UI.BLEND\_MODE\_EXCLUSION | property | Use Titanium.UI.iOS.BLEND\_MODE\_EXCLUSION instead. |
| Titanium.UI.BLEND\_MODE\_HARD\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_HARD\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_HUE | property | Use Titanium.UI.iOS.BLEND\_MODE\_HUE instead. |
| Titanium.UI.BLEND\_MODE\_LIGHTEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_LIGHTEN instead. |
| Titanium.UI.BLEND\_MODE\_LUMINOSITY | property | Use Titanium.UI.iOS.BLEND\_MODE\_LUMINOSITY instead. |
| Titanium.UI.BLEND\_MODE\_MULTIPLY | property | Use Titanium.UI.iOS.BLEND\_MODE\_MULTIPLY instead. |
| Titanium.UI.BLEND\_MODE\_NORMAL | property | Use Titanium.UI.iOS.BLEND\_MODE\_NORMAL instead. |
| Titanium.UI.BLEND\_MODE\_OVERLAY | property | Use Titanium.UI.iOS.BLEND\_MODE\_OVERLAY instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_DARKER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_DARKER instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_LIGHTER instead. |
| Titanium.UI.BLEND\_MODE\_SATURATION | property | Use Titanium.UI.iOS.BLEND\_MODE\_SATURATION instead. |
| Titanium.UI.BLEND\_MODE\_SCREEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SCREEN instead. |
| Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOFT\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_IN instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_XOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_XOR instead. |
| Titanium.UI.iOS.3DMatrix | object | Use Titanium.UI.3DMatrix instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_EASE\_IN | property | Use Titanium.UI.ANIMATION\_CURVE\_EASE\_IN instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_EASE\_IN\_OUT | property | Use Titanium.UI.ANIMATION\_CURVE\_EASE\_IN\_OUT instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_EASE\_OUT | property | Use Titanium.UI.ANIMATION\_CURVE\_EASE\_OUT instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_LINEAR | property | Use Titanium.UI.ANIMATION\_CURVE\_LINEAR instead. |
| Titanium.UI.iOS.ATTRIBUTE\_BACKGROUND\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_BACKGROUND\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_BASELINE\_OFFSET | property | Use the Titanium.UI.ATTRIBUTE\_BASELINE\_OFFSET constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_EXPANSION | property | Use the Titanium.UI.ATTRIBUTE\_EXPANSION constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_FONT | property | Use the Titanium.UI.ATTRIBUTE\_FONT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_FOREGROUND\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_FOREGROUND\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_KERN | property | Use the Titanium.UI.ATTRIBUTE\_KERN constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_LETTERPRESS\_STYLE | property | Use the Titanium.UI.ATTRIBUTE\_LETTERPRESS\_STYLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_LIGATURE | property | Use the Titanium.UI.ATTRIBUTE\_LIGATURE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_LINK | property | Use the Titanium.UI.ATTRIBUTE\_LINK constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_OBLIQUENESS | property | Use the Titanium.UI.ATTRIBUTE\_OBLIQUENESS constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_SHADOW | property | Use the Titanium.UI.ATTRIBUTE\_SHADOW constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STRIKETHROUGH\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_STRIKETHROUGH\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STRIKETHROUGH\_STYLE | property | Use the Titanium.UI.ATTRIBUTE\_STRIKETHROUGH\_STYLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STROKE\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_STROKE\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STROKE\_WIDTH | property | Use the Titanium.UI.ATTRIBUTE\_STROKE\_WIDTH constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_TEXT\_EFFECT | property | Use the Titanium.UI.ATTRIBUTE\_TEXT\_EFFECT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINES\_STYLE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINES\_STYLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_BY\_WORD | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_BY\_WORD constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT\_DOT | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT\_DOT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DOT | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DOT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_SOLID | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_SOLID constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_DOUBLE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_DOUBLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_NONE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_NONE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_SINGLE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_SINGLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_THICK | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_THICK constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_EMBEDDING | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_EMBEDDING constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_LEFT\_TO\_RIGHT | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_LEFT\_TO\_RIGHT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_NATURAL | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_NATURAL constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_OVERRIDE | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_OVERRIDE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_RIGHT\_TO\_LEFT | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_RIGHT\_TO\_LEFT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.AUTODETECT\_ADDRESS | property | Use Titanium.UI.AUTOLINK\_MAP\_ADDRESSES instead. |
| Titanium.UI.iOS.AUTODETECT\_ALL | property | Use Titanium.UI.AUTOLINK\_ALL instead. |
| Titanium.UI.iOS.AUTODETECT\_CALENDAR | property | Use Titanium.UI.AUTOLINK\_CALENDAR instead. |
| Titanium.UI.iOS.AUTODETECT\_LINK | property | Use Titanium.UI.AUTOLINK\_URLS instead. |
| Titanium.UI.iOS.AUTODETECT\_NONE | property | Use Titanium.UI.AUTOLINK\_NONE instead. |
| Titanium.UI.iOS.AUTODETECT\_PHONE | property | Use Titanium.UI.AUTOLINK\_PHONE\_NUMBERS instead. |
| Titanium.UI.iOS.Attribute | object | use Attribute instead. |
| Titanium.UI.iOS.AttributedString | object | use Titanium.UI.AttributedString instead. |
| Titanium.UI.iOS.create3DMatrix | method | Use Titanium.UI.3DMatrix instead. |
| Titanium.UI.iOS.createAttribute | method | use Attribute instead. |
| Titanium.UI.iOS.createAttributedString | method | use Titanium.UI.AttributedString instead. |
| Titanium.UI.iPad.DocumentViewer | object | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.SplitWindow | object | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPad.createDocumentViewer | method | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.createSplitWindow | method | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPhone.getStatusBarHidden | method | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.getStatusBarStyle | method | Use Titanium.UI.Window.statusBarStyle instead. |
| Titanium.UI.iPhone.statusBarHidden | property | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.statusBarStyle | property | Use Titanium.UI.Window.statusBarStyle instead. |

### 5.0.0

The following APIs have been removed in Release 5.0.0 as of September 16th, 2015 .

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Network.HTTPClient.addAuthFactory | method |  |
| Titanium.UI.ListView.rowAction | event | Event renamed to editaction |
