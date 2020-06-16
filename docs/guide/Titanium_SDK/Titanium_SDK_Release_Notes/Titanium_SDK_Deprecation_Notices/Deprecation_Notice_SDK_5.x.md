---
title: Deprecation Notice SDK 5.x
weight: '40'
---

# Deprecation Notice SDK 5.x

List of all depreciation notices for SDK 5.x.

## SDK 5.x

Deprecation notice for SDK 5.x.

### 5.4.0

The following APIs are deprecated in Release 5.4.0 as of August 10th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.UI.AlertDialog.getLoginPlaceholder | method | Use Titanium.UI.AlertDialog.loginHintText instead. |
| Titanium.UI.AlertDialog.getPasswordPlaceholder | method | Use Titanium.UI.AlertDialog.passwordHintText instead. |
| Titanium.UI.AlertDialog.getPlaceholder | method | Use Titanium.UI.AlertDialog.hintText instead. |
| Titanium.UI.AlertDialog.loginPlaceholder | property | Use Titanium.UI.AlertDialog.loginHintText instead. |
| Titanium.UI.AlertDialog.passwordPlaceholder | property | Use Titanium.UI.AlertDialog.passwordHintText instead. |
| Titanium.UI.AlertDialog.placeholder | property | Use Titanium.UI.AlertDialog.hintText instead. |
| Titanium.UI.AlertDialog.setLoginPlaceholder | method | Use Titanium.UI.AlertDialog.loginHintText instead. |
| Titanium.UI.AlertDialog.setPasswordPlaceholder | method | Use Titanium.UI.AlertDialog.passwordHintText instead. |
| Titanium.UI.AlertDialog.setPlaceholder | method | Use Titanium.UI.AlertDialog.hintText instead. |
| Titanium.UI.KEYBOARD\_APPEARANCE\_ALERT | property |  |
| Titanium.UI.ListView.getTableSeparatorInsets | method | Use listSeparatorInsets instead |
| Titanium.UI.ListView.setTableSeparatorInsets | method | Use listSeparatorInsets instead |
| Titanium.UI.ListView.tableSeparatorInsets | property | Use listSeparatorInsets instead |
| Titanium.UI.iPhone.AlertDialogStyle | object | Use Titanium.UI.iOS.AlertDialogStyle instead. |
| Titanium.UI.iPhone.AnimationStyle | object | Use Ti.UI.iOS.AnimationStyle instead. |
| Titanium.UI.iPhone.ListViewCellSelectionStyle | object | Use Titanium.UI.iOS.ListViewCellSelectionStyle instead. |
| Titanium.UI.iPhone.ListViewScrollPosition | object | Use Titanium.UI.iOS.ListViewScrollPosition instead. |
| Titanium.UI.iPhone.ListViewStyle | object | Use Titanium.UI.iOS.ListViewStyle instead. |
| Titanium.UI.iPhone.ProgressBarStyle | object | Use Titanium.UI.iOS.ProgressBarStyle instead. |
| Titanium.UI.iPhone.RowAnimationStyle | object | Use Titanium.UI.iOS.RowAnimationStyle instead. |
| Titanium.UI.iPhone.ScrollIndicatorStyle | object | Use Titanium.UI.iOS.ScrollIndicatorStyle instead. |
| Titanium.UI.iPhone.StatusBar | object | Use Titanium.UI.iOS.StatusBar instead. |
| Titanium.UI.iPhone.SystemButton | object | Use a href="#!/api/Titanium.UI.iOS.SystemButton"Titanium.UI.iOS.SystemButton/a instead. |
| Titanium.UI.iPhone.SystemButtonStyle | object | Use Titanium.UI.iOS.SystemButtonStyle instead. |
| Titanium.UI.iPhone.TableViewCellSelectionStyle | object | Use Titanium.UI.iOS.TableViewCellSelectionStyle instead. |
| Titanium.UI.iPhone.TableViewScrollPosition | object | Use Titanium.UI.iOS.TableViewScrollPosition instead. |
| Titanium.UI.iPhone.TableViewStyle | object | Use Titanium.UI.iOS.TableViewStyle instead. |
| Titanium.UI.iPhone.appBadge | property | Use Titanium.UI.iOS.appBadge instead. |
| Titanium.UI.iPhone.appSupportsShakeToEdit | property | Use Titanium.UI.iOS.appSupportsShakeToEdit instead. |
| Titanium.UI.iPhone.getAppBadge | method | Use Titanium.UI.iOS.appBadge instead. |
| Titanium.UI.iPhone.getAppSupportsShakeToEdit | method | Use Titanium.UI.iOS.appSupportsShakeToEdit instead. |
| Titanium.UI.iPhone.setAppBadge | method | Use Titanium.UI.iOS.appBadge instead. |
| Titanium.UI.iPhone.setAppSupportsShakeToEdit | method | Use Titanium.UI.iOS.appSupportsShakeToEdit instead. |

### 5.2.0

The following APIs are deprecated in Release 5.2.0 as of February 22nd, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.UserActivity.useractivitywillsave | event | set property `needsSave` to true everytime you update current activity state instead. |
| Titanium.Calendar.STATUS\_CANCELLED | property | Use STATUS\_CANCELED instead. |
| Titanium.Calendar.eventsAuthorization | property | Use calendarAuthorization instead. |
| Titanium.Calendar.getEventsAuthorization | method | Use calendarAuthorization instead. |
| Titanium.Media.CAMERA\_AUTHORIZATION\_NOT\_DETERMINED | property | Use CAMERA\_AUTHORIZATION\_UNKNOWN instead. |
| Titanium.Media.cameraAuthorizationStatus | property | Use cameraAuthorization instead. |
| Titanium.Media.getCameraAuthorizationStatus | method | Use cameraAuthorization instead. |
| Titanium.UI.KEYBOARD\_ASCII | property | Use KEYBOARD\_TYPE\_ASCII instead. |
| Titanium.UI.KEYBOARD\_DECIMAL\_PAD | property | Use KEYBOARD\_TYPE\_DECIMAL\_PAD instead. |
| Titanium.UI.KEYBOARD\_DEFAULT | property | Use KEYBOARD\_TYPE\_DEFAULT instead. |
| Titanium.UI.KEYBOARD\_EMAIL | property | Use KEYBOARD\_TYPE\_EMAIL instead. |
| Titanium.UI.KEYBOARD\_NAMEPHONE\_PAD | property | Use KEYBOARD\_TYPE\_NAMEPHONE\_PAD instead. |
| Titanium.UI.KEYBOARD\_NUMBERS\_PUNCTUATION | property | Use KEYBOARD\_TYPE\_NUMBERS\_PUNCTUATION instead. |
| Titanium.UI.KEYBOARD\_NUMBER\_PAD | property | Use KEYBOARD\_TYPE\_NUMBER\_PAD instead. |
| Titanium.UI.KEYBOARD\_PHONE\_PAD | property | Use KEYBOARD\_TYPE\_PHONE\_PAD instead. |
| Titanium.UI.KEYBOARD\_URL | property | Use KEYBOARD\_TYPE\_URL instead. |
| Titanium.UI.Tab.blur | event | Use unselected instead. |
| Titanium.UI.Tab.focus | event | Use selected instead. |
| Titanium.UI.TabGroup.selected | event | Use focus instead. |
| Titanium.UI.TabGroup.unselected | event | Use blur instead. |
| Titanium.UI.TextArea.appearance | property | Use keyboardAppearance instead |
| Titanium.UI.TextArea.getAppearance | method | Use keyboardAppearance instead |
| Titanium.UI.TextArea.setAppearance | method | Use keyboardAppearance instead |
| Titanium.UI.TextField.appearance | property | Use keyboardAppearance instead. |
| Titanium.UI.TextField.getAppearance | method | Use keyboardAppearance instead. |
| Titanium.UI.TextField.setAppearance | method | Use keyboardAppearance instead. |

### 5.1.0

The following APIs are deprecated in Release 5.1.0 as of November 20th, 2015.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.UserActivity.getSupported | method | Use the Ti.App.iOS.UserActivity.isSupported() method instead. |
| Titanium.App.iOS.UserActivity.setSupported | method | Use the Ti.App.iOS.UserActivity.isSupported() method instead. |
| Titanium.App.iOS.UserActivity.supported | property | Use the Ti.App.iOS.UserActivity.isSupported() method instead. |
| Titanium.Calendar.requestEventsAuthorization | method | Use requestCalendarPermissions instead. |
| Titanium.Media.requestCameraAccess | method | Use requestCameraPermissions instead. |
| Titanium.UI.TabGroup.blur | event | Use unselected instead. |
| Titanium.UI.TabGroup.focus | event | Use selected instead. |
| Titanium.UI.iPhone.ActivityIndicatorStyle | object | Use Ti.UI.ActivityIndicatorStyle instead. |

### 5.0.0

The following APIs are deprecated in Release 5.0.0 as of September 16th, 2015.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.sendWatchExtensionReply | method | Use Titanium.App.iOS.WatchConnectivity instead, which is supported on iOS 9 and later. |
| Titanium.App.iOS.watchkitextensionrequest | event | Use Titanium.App.iOS.WatchConnectivity instead, which is supported on iOS9 and later. |
