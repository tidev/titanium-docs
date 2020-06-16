---
title: New API Notice SDK 5.x
weight: '40'
---

# New API Notice SDK 5.x

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
