---
title: New API Notice SDK 6.x
weight: '30'
---

# New API Notice SDK 6.x

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
