---
title: Deprecation Notice SDK 7.x
weight: '20'
---

# Deprecation Notice SDK 7.x

List of all depreciation notices for SDK 7.x.

## SDK 7.x

### 7.5.0

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

### 7.3.1

The following APIs are deprecated in Release 7.3.1 as of August 30th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.LocalNotification.cancel | method | Use Titanium.App.iOS.UserNotificationCenter.removePendingNotifications instead. |
| Titanium.App.iOS.cancelAllLocalNotifications | method | Use Titanium.App.iOS.UserNotificationCenter.removePendingNotifications instead. |
| Titanium.App.iOS.cancelLocalNotification | method | Use Titanium.App.iOS.UserNotificationCenter.removePendingNotifications instead. |
| Titanium.App.iOS.currentUserNotificationSettings | property | Use Titanium.App.iOS.UserNotificationCenter.requestUserNotificationSettings instead. |
| Titanium.App.iOS.getCurrentUserNotificationSettings | method | Use Titanium.App.iOS.UserNotificationCenter.requestUserNotificationSettings instead. |
| Titanium.Filesystem.File.createTimestamp | method | Use Titanium.Filesystem.File.createdAt instead. |
| Titanium.Filesystem.File.modificationTimestamp | method | Use Titanium.Filesystem.File.modifiedAt instead. |
| Titanium.UI.iOS.BLEND\_MODE\_CLEAR | property | Use Titanium.UI.BLEND\_MODE\_CLEAR instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COLOR | property | Use Titanium.UI.BLEND\_MODE\_COLOR instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COLOR\_BURN | property | Use Titanium.UI.BLEND\_MODE\_COLOR\_BURN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COLOR\_DODGE | property | Use Titanium.UI.BLEND\_MODE\_COLOR\_DODGE instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COPY | property | Use Titanium.UI.BLEND\_MODE\_COPY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DARKEN | property | Use Titanium.UI.BLEND\_MODE\_DARKEN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_ATOP | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_IN | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_IN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OUT | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OVER | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DIFFERENCE | property | Use Titanium.UI.BLEND\_MODE\_DIFFERENCE instead. |
| Titanium.UI.iOS.BLEND\_MODE\_EXCLUSION | property | Use Titanium.UI.BLEND\_MODE\_EXCLUSION instead. |
| Titanium.UI.iOS.BLEND\_MODE\_HARD\_LIGHT | property | Use Titanium.UI.BLEND\_MODE\_HARD\_LIGHT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_HUE | property | Use Titanium.UI.BLEND\_MODE\_HUE instead. |
| Titanium.UI.iOS.BLEND\_MODE\_LIGHTEN | property | Use Titanium.UI.BLEND\_MODE\_LIGHTEN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_LUMINOSITY | property | Use Titanium.UI.BLEND\_MODE\_LUMINOSITY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_MULTIPLY | property | Use Titanium.UI.BLEND\_MODE\_MULTIPLY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_NORMAL | property | Use Titanium.UI.BLEND\_MODE\_NORMAL instead. |
| Titanium.UI.iOS.BLEND\_MODE\_OVERLAY | property | Use Titanium.UI.BLEND\_MODE\_OVERLAY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_PLUS\_DARKER | property | Use Titanium.UI.BLEND\_MODE\_PLUS\_DARKER instead. |
| Titanium.UI.iOS.BLEND\_MODE\_PLUS\_LIGHTER | property | Use Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SATURATION | property | Use Titanium.UI.BLEND\_MODE\_SATURATION instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SCREEN | property | Use Titanium.UI.BLEND\_MODE\_SCREEN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOFT\_LIGHT | property | Use Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_ATOP | property | Use Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_IN | property | Use Titanium.UI.BLEND\_MODE\_SOURCE\_IN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_OUT | property | Use Titanium.UI.BLEND\_MODE\_SOURCE\_OUT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_XOR | property | Use Titanium.UI.BLEND\_MODE\_XOR instead. |

### 7.3.0

The following APIs are deprecated in Release 7.3.0 as of August 17th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.LocalNotification.cancel | method | Use Titanium.App.iOS.UserNotificationCenter.removePendingNotifications instead. |
| Titanium.App.iOS.cancelAllLocalNotifications | method | Use Titanium.App.iOS.UserNotificationCenter.removePendingNotifications instead. |
| Titanium.App.iOS.cancelLocalNotification | method | Use Titanium.App.iOS.UserNotificationCenter.removePendingNotifications instead. |
| Titanium.App.iOS.currentUserNotificationSettings | property | Use Titanium.App.iOS.UserNotificationCenter.requestUserNotificationSettings instead. |
| Titanium.App.iOS.getCurrentUserNotificationSettings | method | Use Titanium.App.iOS.UserNotificationCenter.requestUserNotificationSettings instead. |
| Titanium.Filesystem.File.createTimestamp | method | Use Titanium.Filesystem.File.createdAt instead. |
| Titanium.Filesystem.File.modificationTimestamp | method | Use Titanium.Filesystem.File.modifiedAt instead. |
| Titanium.UI.iOS.BLEND\_MODE\_CLEAR | property | Use Titanium.UI.BLEND\_MODE\_CLEAR instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COLOR | property | Use Titanium.UI.BLEND\_MODE\_COLOR instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COLOR\_BURN | property | Use Titanium.UI.BLEND\_MODE\_COLOR\_BURN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COLOR\_DODGE | property | Use Titanium.UI.BLEND\_MODE\_COLOR\_DODGE instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COPY | property | Use Titanium.UI.BLEND\_MODE\_COPY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DARKEN | property | Use Titanium.UI.BLEND\_MODE\_DARKEN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_ATOP | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_IN | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_IN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OUT | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OVER | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DIFFERENCE | property | Use Titanium.UI.BLEND\_MODE\_DIFFERENCE instead. |
| Titanium.UI.iOS.BLEND\_MODE\_EXCLUSION | property | Use Titanium.UI.BLEND\_MODE\_EXCLUSION instead. |
| Titanium.UI.iOS.BLEND\_MODE\_HARD\_LIGHT | property | Use Titanium.UI.BLEND\_MODE\_HARD\_LIGHT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_HUE | property | Use Titanium.UI.BLEND\_MODE\_HUE instead. |
| Titanium.UI.iOS.BLEND\_MODE\_LIGHTEN | property | Use Titanium.UI.BLEND\_MODE\_LIGHTEN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_LUMINOSITY | property | Use Titanium.UI.BLEND\_MODE\_LUMINOSITY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_MULTIPLY | property | Use Titanium.UI.BLEND\_MODE\_MULTIPLY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_NORMAL | property | Use Titanium.UI.BLEND\_MODE\_NORMAL instead. |
| Titanium.UI.iOS.BLEND\_MODE\_OVERLAY | property | Use Titanium.UI.BLEND\_MODE\_OVERLAY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_PLUS\_DARKER | property | Use Titanium.UI.BLEND\_MODE\_PLUS\_DARKER instead. |
| Titanium.UI.iOS.BLEND\_MODE\_PLUS\_LIGHTER | property | Use Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SATURATION | property | Use Titanium.UI.BLEND\_MODE\_SATURATION instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SCREEN | property | Use Titanium.UI.BLEND\_MODE\_SCREEN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOFT\_LIGHT | property | Use Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_ATOP | property | Use Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_IN | property | Use Titanium.UI.BLEND\_MODE\_SOURCE\_IN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_OUT | property | Use Titanium.UI.BLEND\_MODE\_SOURCE\_OUT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_XOR | property | Use Titanium.UI.BLEND\_MODE\_XOR instead. |

### 7.0.1

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

### 7.0.0

The following APIs are deprecated in Release 7.0.0 as of December 8th, 2017.

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
