---
title: Titanium SDK API Removal Notices
weight: '40'
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
