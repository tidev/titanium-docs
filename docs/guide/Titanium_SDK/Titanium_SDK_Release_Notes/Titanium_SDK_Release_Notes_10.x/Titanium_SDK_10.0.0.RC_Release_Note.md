---
title: Titanium SDK 10.0.0.RC - 14 April 2021
weight: '10'
---

# Titanium SDK 10.0.0.RC - 14 April 2021

## About this release

Titanium SDK 10.0.0 is a major release of the SDK, addressing high-priority issues from previous releases; introducing some breaking changes; and removing a number of long-deprecated APIs. This version is the last major version released by Axway. Axway support for this version and prior versions released by Axway will be discontinued after March 1, 2022.

## Community Credits

* Hans Knöchel

    * [TIMOB-28376](https://jira.appcelerator.org/browse/TIMOB-28376) - fragments in children of list view and tableview header/footerview ([ef5c95d](https://github.com/appcelerator/titanium_mobile/commit/ef5c95dcbd2d911291309cbe9d632f360ded6ce7))

    * remove unused event ([56ddf95](https://github.com/appcelerator/titanium_mobile/commit/56ddf95eb7581d41c1fbb74b9b9e03eee55c3214))

    * Revert "perf(ios): use new API for rendering view to image" ([91c00ba](https://github.com/appcelerator/titanium_mobile/commit/91c00bad3f615516b39e9abd74282bbb7b303560))

* Michael Gangolf

    * [TIMOB-28348](https://jira.appcelerator.org/browse/TIMOB-28348) - text alignment justify ([851b4f6](https://github.com/appcelerator/titanium_mobile/commit/851b4f6849d3c73f57b760850a86cfa2abb09dc5))

    * [TIMOB-28333](https://jira.appcelerator.org/browse/TIMOB-28333) - rgba(int,int,int) parity ([d36c5c7](https://github.com/appcelerator/titanium_mobile/commit/d36c5c7d543de43b8bd6952e8ca917ab4032b5a8))

    * add missing parameter in NotificationChannel ([fa17daf](https://github.com/appcelerator/titanium_mobile/commit/fa17daf2de5981e1f00a3b78a5109b3e470f202d))

* Sergey Volkov

    * "requestPermissions" and Geolocation APIs return Promise ([971e71e](https://github.com/appcelerator/titanium_mobile/commit/971e71e876284d0828617a74607b8bb4107a2faf))

    * [TIMOB-24549](https://jira.appcelerator.org/browse/TIMOB-24549) - native Promise API ([ea75a0f](https://github.com/appcelerator/titanium_mobile/commit/ea75a0fc9a5291fcc6efbd3c47a50367a85ced11))

## BREAKING CHANGES

* [TIMOB-28346](https://jira.appcelerator.org/browse/TIMOB-28346) - TiAPI: Remove getter/setter methods for properties

* [TIMOB-28011](https://jira.appcelerator.org/browse/TIMOB-28011) - iOS: Drop iOS 10 support in Titanium SDK 10

* [TIMOB-28343](https://jira.appcelerator.org/browse/TIMOB-28343) - CLI: Update minimum Node.js version to 12.13.0

* [TIMOB-28263](https://jira.appcelerator.org/browse/TIMOB-28263) - Android: Change min supported version to Android 5.0 (API Level 21) ([8440ad7](https://github.com/appcelerator/titanium_mobile/commit/8440ad792a35bc11f9f518ab1584e0ac674a108b))

* [TIMOB-28298](https://jira.appcelerator.org/browse/TIMOB-28298) - Android: Material widget support (Requires "Theme.MaterialComponents" based theme)

* [TIMOB-28395](https://jira.appcelerator.org/browse/TIMOB-28395) - Android: Use native APIs for forward/reverseGeocoder()

* [TIMOB-28396](https://jira.appcelerator.org/browse/TIMOB-28396) - iOS: Use native APIs for forward/reverseGeocoder()

* [TIMOB-28403](https://jira.appcelerator.org/browse/TIMOB-28403) - Analytics: Limit number of cached events

* [TIMOB-28198](https://jira.appcelerator.org/browse/TIMOB-28198) - Deprecate TableViewRow header footer properties

The following APIs were removed in 10.0.0:

| Removed API | Notes / Replacement |
| --- | --- |
| `Ti.Android.PENDING_INTENT_FOR_ACTIVITY` | No longer used. |
| `Ti.Android.PENDING_INTENT_FOR_BROADCAST` | No longer used. |
| `Ti.Android.PENDING_INTENT_FOR_SERVICE` | No longer used. |
| `Ti.Android.PENDING_INTENT_MAX_VALUE` | No longer used. |
| `Ti.Android.Intent#getData()` | Use the `Ti.Android.Intent.data` property instead. |
| `Ti.Android.MenuItem#setCheckable()` | Use the `Ti.Android.MenuItem.checkable` property instead. |
| `Ti.Android.MenuItem#setChecked()` | Use the `Ti.Android.MenuItem.checked` property instead. |
| `Ti.Android.MenuItem#setEnabled()` | Use the `Ti.Android.MenuItem.enabled` property instead. |
| `Ti.Android.MenuItem#setVisible()` | Use the `Ti.Android.MenuItem.visible` property instead. |
| `Ti.Media.AudioPlayer#getPaused()` | Use the cross-platform API `Ti.Media.AudioPlayer.paused` property instead. |
| `Ti.Media.AudioPlayer#isPaused()` | Use the cross-platform API `Ti.Media.AudioPlayer.paused` property instead. |
| `Ti.Media.AudioPlayer#getPlaying()` | Use the cross-platform API `Ti.Media.AudioPlayer.playing` property instead. |
| `Ti.Media.AudioPlayer#isPlaying()` | Use the cross-platform API `Ti.Media.AudioPlayer.playing` property instead. |
| `Ti.Media.AudioPlayer#setPaused()` | Use the cross-platform API `Ti.Media.AudioPlayer.pause` instead. |
| `Ti.Media#hasAudioPermissions()` | Use `Ti.Media.hasAudioRecorderPermissions` instead. |
| `PreviewImageError.message` | Use `error` property instead |
| `Ti.Media.Sound.error.message` | Use the `error` property instead |
| `Ti.Media.VideoPlayer.error.message` | Use `error` property instead |
| `Ti.Network.HTTPClient#setTimeout()` | Use the `Ti.Network.HTTPClient.timeout` property instead. |
| `Ti.UI.iOS.NavigationWindow` | Use `Ti.UI.NavigationWindow` instead. |
| `Ti.UI.iOS.TabbedBar` | Use `Ti.UI.TabbedBar` instead. |
| `Ti.UI.iOS.Toolbar` | Use the cross-platform `Ti.UI.Toolbar` instead. |
| `Ti.UI.TabGroup#getActiveTab()` | Use the `Ti.UI.TabGroup.activeTab` property instead. |
| `Ti.UI.TabGroup#setActiveTab()` | Use the `Ti.UI.TabGroup.activeTab` property instead. |
| `Ti.UI.TabGroup#getTabs()` | Use the `Ti.UI.TabGroup.tabs` property instead. |
| `Ti.UI.TableView#setHeaderPullView()` | Use the `Ti.UI.TableView.headerPullView` property instead. |

## Bug Fixes

### Multiple platforms

* [TIMOB-26304](https://jira.appcelerator.org/browse/TIMOB-26304) - TiAPI: Ti.UI.TableViewRow.\* selectedBackgroundColor partially deprecated

* [TIMOB-27807](https://jira.appcelerator.org/browse/TIMOB-27807) - convertPointToView() to use "ti.ui.defaultunit" ([b4f6c3e](https://github.com/appcelerator/titanium_mobile/commit/b4f6c3ed76707ae96b244499acd0636559220412))

* [TIMOB-28205](https://jira.appcelerator.org/browse/TIMOB-28205) - Angular: packaging an angular app fails

* [TIMOB-28264](https://jira.appcelerator.org/browse/TIMOB-28264) - Improve Ti.UI documentation to reflect current state

* [TIMOB-28401](https://jira.appcelerator.org/browse/TIMOB-28401) - declare all variables before their usage ([062c06d](https://github.com/appcelerator/titanium_mobile/commit/062c06d7e1b5c961b693ddc8e154be5d6bf9d6db))

* replace shortened [appcelerator.com](http://appcelerator.com/) URLs with long URLs ([d0caea0](https://github.com/appcelerator/titanium_mobile/commit/d0caea05e8d21e4aae74818dd6af3a6a30f67bea))

* filepath compatibility with windows ([824488f](https://github.com/appcelerator/titanium_mobile/commit/824488f419df6917f5fa3ee90cdbc34a927b50da))

* handle when project has no root package.json ([7b9a747](https://github.com/appcelerator/titanium_mobile/commit/7b9a747d02552b763c562822b9028ab633f0c847))

* record output files for process js task ([e7951bd](https://github.com/appcelerator/titanium_mobile/commit/e7951bdd689666986564fc31d49c680169b1b4bf))

* remove unused event ([56ddf95](https://github.com/appcelerator/titanium_mobile/commit/56ddf95eb7581d41c1fbb74b9b9e03eee55c3214))

* support cjs files in apps equivalent to js files ([4b2c8fc](https://github.com/appcelerator/titanium_mobile/commit/4b2c8fccc067bb89ec2d054fed4fc45defdb81d5))

### Android platform

* [TIMOB-24365](https://jira.appcelerator.org/browse/TIMOB-24365) - Ti.UI.ActivityIndicator "indicatorColor" not working

* [TIMOB-24735](https://jira.appcelerator.org/browse/TIMOB-24735) - AttributedString link underline color

* [TIMOB-26663](https://jira.appcelerator.org/browse/TIMOB-26663) - touchFeedbackColor doesn't work if view has a transparent backgroundColor and a border ([5b5ac48](https://github.com/appcelerator/titanium_mobile/commit/5b5ac486e9c409e760541db5f8ca29a647f7b171))

* [TIMOB-27504](https://jira.appcelerator.org/browse/TIMOB-27504) - touchFeedback / ripple does not work when tapped from child view ([5e77724](https://github.com/appcelerator/titanium_mobile/commit/5e777247be7b69257b446a97d9cd3b23f2e4c644))

* [TIMOB-27807](https://jira.appcelerator.org/browse/TIMOB-27807) - convertPointToView() returns pixels instead of default units

* [TIMOB-28270](https://jira.appcelerator.org/browse/TIMOB-28270) - App builds fail if it includes the "jaxen" library

* [TIMOB-28272](https://jira.appcelerator.org/browse/TIMOB-28272) - Accelerometer spams warning messages when exiting app ([e10b6e6](https://github.com/appcelerator/titanium_mobile/commit/e10b6e676c6ecf76866a74c4cd4359a3a6c269da))

* [TIMOB-28329](https://jira.appcelerator.org/browse/TIMOB-28329) - touchFeedback property on ListView is ignored and true by default ([5e77724](https://github.com/appcelerator/titanium_mobile/commit/5e777247be7b69257b446a97d9cd3b23f2e4c644))

* [TIMOB-28330](https://jira.appcelerator.org/browse/TIMOB-28330) - Application crashes when scrolling a listview with zero items in the first section:

* [TIMOB-28333](https://jira.appcelerator.org/browse/TIMOB-28333) - rgba(int,int,int) parity with iOS ([d36c5c7](https://github.com/appcelerator/titanium_mobile/commit/d36c5c7d543de43b8bd6952e8ca917ab4032b5a8))

* [TIMOB-28345](https://jira.appcelerator.org/browse/TIMOB-28345) - CLI: -b shorthand does not work for Android and perform a full build

* [TIMOB-28352](https://jira.appcelerator.org/browse/TIMOB-28352) - Application crashes when scrolling to listview marker

* [TIMOB-28375](https://jira.appcelerator.org/browse/TIMOB-28375) - Hyperloop fails to access enum types with JDK 12

* [TIMOB-28376](https://jira.appcelerator.org/browse/TIMOB-28376) - Update header and footer view activity ([ef5c95d](https://github.com/appcelerator/titanium_mobile/commit/ef5c95dcbd2d911291309cbe9d632f360ded6ce7))

* [TIMOB-28383](https://jira.appcelerator.org/browse/TIMOB-28383) - minRowHeight of tableview does not work

* [TIMOB-28384](https://jira.appcelerator.org/browse/TIMOB-28384) - rightImage property for tableviewrow does not work for res images in "/images/" folder

* [TIMOB-28385](https://jira.appcelerator.org/browse/TIMOB-28385) - ListView crash error on SDK 9.3.X

* [TIMOB-28387](https://jira.appcelerator.org/browse/TIMOB-28387) - index in TableView click event is no longer unique

* [TIMOB-28388](https://jira.appcelerator.org/browse/TIMOB-28388) - Calling updateRow does not update rows other than the first row

* [TIMOB-28389](https://jira.appcelerator.org/browse/TIMOB-28389) - Calling TableViewRow.remove does not remove child view that is a Label

* [TIMOB-28399](https://jira.appcelerator.org/browse/TIMOB-28399) - TableView setData does not preserve TableViewRow child views ([cee557b](https://github.com/appcelerator/titanium_mobile/commit/cee557b5f7fb345d26a89d40cdfdedf671e80742))

* [TIMOB-28404](https://jira.appcelerator.org/browse/TIMOB-28404) - amend TabGroup selected tab ([c08379b](https://github.com/appcelerator/titanium_mobile/commit/c08379b8b935749ba620b5b793235af145116d34)) ([d13c884](https://github.com/appcelerator/titanium_mobile/commit/d13c884760db30c283f1709158d4d463d601c119))

* [TIMOB-28406](https://jira.appcelerator.org/browse/TIMOB-28406) - ListView on a modal with a \* transparent background is invisible ([55910d8](https://github.com/appcelerator/titanium_mobile/commit/55910d86ce2e7115d778fd360ee37cd0e0648213))

* [TIMOB-28410](https://jira.appcelerator.org/browse/TIMOB-28410) - ListView causes ArrayIndexOutOfBoundsException in production ([aa7a8c2](https://github.com/appcelerator/titanium_mobile/commit/aa7a8c20cdd0a8d8a3ec9464d6f8a37801780ac1))

* add back Ti.Media.Sound.setLooping for now ([1c14926](https://github.com/appcelerator/titanium_mobile/commit/1c14926d922d3908d952d6fddc53c8825e0a92c9))

* add V8Promise constructor with existing pointer value ([b1d88f9](https://github.com/appcelerator/titanium_mobile/commit/b1d88f938ee09fa7eddf93cfe879e003cdd43cff))

* avoid calling toString on empty clipboard text ([d0b632f](https://github.com/appcelerator/titanium_mobile/commit/d0b632f01153b56faaed2d95339d362c7ecc0c50))

* explicitly define Ti.Android.currentService to be null when not a service ([7ce713c](https://github.com/appcelerator/titanium_mobile/commit/7ce713c6fb0a6d8e2b6b4de29b131095ca80f16b))

* expose builder property for hyperloop to mark js files not to process ([a6ad3ed](https://github.com/appcelerator/titanium_mobile/commit/a6ad3ed4383d159302e45b667b21083a724e0e97))

* expose properties for get/set pairs on QuickSettingsService ([b21ece2](https://github.com/appcelerator/titanium_mobile/commit/b21ece2fa8e68d8fff7030515e694e1452df39a7))

* expose Ti.UI.Tab activeTintColor/tintColor properties ([63844f1](https://github.com/appcelerator/titanium_mobile/commit/63844f13992d72d6d3e010aebc1d1b924f3ff22f))

* fix Ti.Blob.arrayBuffer definition ([2d9bfce](https://github.com/appcelerator/titanium_mobile/commit/2d9bfce4c9741bade20d4453c57b306288f81b57))

* guard copying processed js to not do so when encrypting ([9c23b99](https://github.com/appcelerator/titanium_mobile/commit/9c23b990503e377d9c54cfd41ff728caae676854))

* handle resource images/drawables and splash screens ([3cd22eb](https://github.com/appcelerator/titanium_mobile/commit/3cd22eb8c34138c43d8bca617ecfcfa7e9a8c0dc))

* override global.L behavior for non-string default values ([6f6cea2](https://github.com/appcelerator/titanium_mobile/commit/6f6cea24770b416dd3f6d2b1b4ce8c1b11bbea67))

* reject promise with Error in MediaModule ([1de2eb3](https://github.com/appcelerator/titanium_mobile/commit/1de2eb3f1627caa7d2052a3a2ded7664e937c5b4))

* remote policy encryption error dialog handling ([222cba1](https://github.com/appcelerator/titanium_mobile/commit/222cba1bfed28402bd419ef52b796307462d7c1e))

* remove getters for documented properties on RecurrenceRule ([a413a9e](https://github.com/appcelerator/titanium_mobile/commit/a413a9e4f0fc17b04093d2a96e458de5ddfa17ac))

* remove set methods for width/height/center for Views ([70bd7a7](https://github.com/appcelerator/titanium_mobile/commit/70bd7a72da4932348b0d74d150ec74329c0e406c))

* restore MenuItem is\* boolean query methods ([49a6f7f](https://github.com/appcelerator/titanium_mobile/commit/49a6f7f197016dfa8de224ad484d4c2a8538f221))

* restore Sound is\* boolean query methods ([c35cc4a](https://github.com/appcelerator/titanium_mobile/commit/c35cc4a70960e8cee1713b8eaae9517acdd69568))

* set minSdkVersion to 19 ([8440ad7](https://github.com/appcelerator/titanium_mobile/commit/8440ad792a35bc11f9f518ab1584e0ac674a108b))

* TableView regressions ([65ed909](https://github.com/appcelerator/titanium_mobile/commit/65ed90966d596c05c669c329822859a520f2954f))

* the Ti.UI.Clipboard#hasData() arg is optional ([51b6428](https://github.com/appcelerator/titanium_mobile/commit/51b642864020e007c75a07db221a09fb6adb8277))

* use C++14 when building native modules ([2df13a9](https://github.com/appcelerator/titanium_mobile/commit/2df13a96ed08a5644a76aa56ddc71516d8962f3e))

* warning logged by widgets when needlessly removing background ([f89fecf](https://github.com/appcelerator/titanium_mobile/commit/f89fecff7d14114dca4c34a3671ff133a13bbe17))

### iOS platform

* [TIMOB-26913](https://jira.appcelerator.org/browse/TIMOB-26913) - New SearchBar property "showSearchBarInNavBar" does not work with custom item templates

* [TIMOB-27888](https://jira.appcelerator.org/browse/TIMOB-27888) - circular references in require don't work

* [TIMOB-28037](https://jira.appcelerator.org/browse/TIMOB-28037) - Relative path require not working with node\_modules

* [TIMOB-28209](https://jira.appcelerator.org/browse/TIMOB-28209) - App orientations stopped when using the search bar in the listview ([10c1a25](https://github.com/appcelerator/titanium_mobile/commit/10c1a25f7a2bc48194aad00a52b50be3155dee67))

* [TIMOB-28217](https://jira.appcelerator.org/browse/TIMOB-28217) - Ti.Media.VideoPlayer is crashing when setting showsControls earlier than url property ([e84ce9d](https://github.com/appcelerator/titanium_mobile/commit/e84ce9d4ba12407b67633b029e4b6d464f5181e4))

* [TIMOB-28267](https://jira.appcelerator.org/browse/TIMOB-28267) - removing eventlistener multiple times ourCallbackCount should not be in negative value ([798bd54](https://github.com/appcelerator/titanium_mobile/commit/798bd544e577092beee35dacd9f1eb106c9e8141))

* [TIMOB-28275](https://jira.appcelerator.org/browse/TIMOB-28275) - RemovingEventListener in Location event will freeze App ([0749a30](https://github.com/appcelerator/titanium_mobile/commit/0749a30ea0979b01c9f38cd71faf9541a907bfa1))

* [TIMOB-28281](https://jira.appcelerator.org/browse/TIMOB-28281) - Support Big Sur / Apple Silicon

* [TIMOB-28297](https://jira.appcelerator.org/browse/TIMOB-28297) - support ti symbols via xcconfig file to work with swift ([c61d943](https://github.com/appcelerator/titanium_mobile/commit/c61d943e409660ba73c8be69f6c8efae1e0b0e97))

* [TIMOB-28324](https://jira.appcelerator.org/browse/TIMOB-28324) - image from filereader function not being called ([a18fb68](https://github.com/appcelerator/titanium_mobile/commit/a18fb688ab36ff6d4dbea12043edc2d4cd3873e3))

* [TIMOB-28325](https://jira.appcelerator.org/browse/TIMOB-28325) - ListView row is incorrectly sized when using INSET\_GROUPED and Ti.UI.SIZE ([4488fe2](https://github.com/appcelerator/titanium_mobile/commit/4488fe26331c0b8aca1dcbd41ac9cd65572721a3))

* [TIMOB-28331](https://jira.appcelerator.org/browse/TIMOB-28331) - Updating the "labels" property in the "Ti.UI.TabbedBar" sometimes does not work ([6ffe8f9](https://github.com/appcelerator/titanium_mobile/commit/6ffe8f9430a77cc2a411bf8cd197091056255d37))

* [TIMOB-28360](https://jira.appcelerator.org/browse/TIMOB-28360) - DocumentViewer setAnnotation method causing a crash ([bba9eef](https://github.com/appcelerator/titanium_mobile/commit/bba9eefd06c5ba22cffbabb6ad273dbadd35b510))

* [TIMOB-28361](https://jira.appcelerator.org/browse/TIMOB-28361) - largeTitleDisplayMode always is not respected on load when using a ListView in a Window ([26b5bfe](https://github.com/appcelerator/titanium_mobile/commit/26b5bfe301ebb49b800afcfce9d9723bfed154da))

* [TIMOB-28382](https://jira.appcelerator.org/browse/TIMOB-28382) - Requiring a native module errors when building with liveview

* [TIMOB-28394](https://jira.appcelerator.org/browse/TIMOB-28394) - openWindow transition broken / frame dropping (10.x regression)

* [TIMOB-28401](https://jira.appcelerator.org/browse/TIMOB-28401) - Building an app with a DefaultIcon that contains alpha errors

* [TIMOB-28404](https://jira.appcelerator.org/browse/TIMOB-28404) - tabGroup.setActiveTab() and text.setSelection() shows an error ([fff45b2](https://github.com/appcelerator/titanium_mobile/commit/fff45b2c29ada27c2878eb8e18ec2b1edfa37538))

* [TIMOB-28408](https://jira.appcelerator.org/browse/TIMOB-28408) - App with remote policy encryption crashes when offline ([5c9d3f9](https://github.com/appcelerator/titanium_mobile/commit/5c9d3f95f880ca50aceb07e16d137719647f1f39))

* autorelease Ti.Blob#arrayBuffer() Promise ([9afe176](https://github.com/appcelerator/titanium_mobile/commit/9afe176c18bc9ece20fe188f483b1d7a5a346c7c))

* call callback on Geolocation#requestTemporaryFullAccuracyAuthorization if missing purpose ([2155d0a](https://github.com/appcelerator/titanium_mobile/commit/2155d0ad03644b6a6b916457f84545d761391a5a))

* convert JSValue\* to JSValueRef directly ([33508b6](https://github.com/appcelerator/titanium_mobile/commit/33508b622a0408cd74dce18a2a57d28fb7905a06))

* convert KrollPromise to JSValueRef for return types of old proxies ([62ee5c5](https://github.com/appcelerator/titanium_mobile/commit/62ee5c57dc1370c47ad04e11feafbb4b62a72067))

* deprecate selectedBackgroundColor and selectedBackgroundImage ([dc07aeb](https://github.com/appcelerator/titanium_mobile/commit/dc07aeb0c3e9d64158815e51505da942d56f79bb))

* deprecate selectedBackgroundGradient ([9cf10cd](https://github.com/appcelerator/titanium_mobile/commit/9cf10cd83cbe9b702122756d04f711c721e38989))

* detect when ios has service ([7fe9cf4](https://github.com/appcelerator/titanium_mobile/commit/7fe9cf478348810cb1889e7cebb79d078eaf86bf))

* error code/object for Ti.Geolocation permissions/position ([974a7f6](https://github.com/appcelerator/titanium_mobile/commit/974a7f67052a9e656d592d7e717a5bebfe46372b))

* explicitly flush KrollPromises created internally and not exposed to JS ([682e64a](https://github.com/appcelerator/titanium_mobile/commit/682e64a54fa58a8267ea5d1c8176a3fd36295f3c))

* expose KrollPromise as part of TitaniumKit ([a6d2c5b](https://github.com/appcelerator/titanium_mobile/commit/a6d2c5bda5805435be5a34f808880c944a697704))

* expose Ti.Network.HTTPClient#getAllResponseHeaders() ([e520aa2](https://github.com/appcelerator/titanium_mobile/commit/e520aa29dfa84eee6c999a6da489734d28431edf))

* fire authorization changes even when no callback ([25a1873](https://github.com/appcelerator/titanium_mobile/commit/25a1873fcce0adeda37c7c627d4155ffe0bc5b0d))

* fix list-view crash ([7c1aa59](https://github.com/appcelerator/titanium_mobile/commit/7c1aa5911c01b89da1d4d4b75abcbe227915e80d))

* fix sytax error ([0d662e1](https://github.com/appcelerator/titanium_mobile/commit/0d662e1242e044cbe585c762c623604c4240270a))

* fixed sdk build issue ([b0c41aa](https://github.com/appcelerator/titanium_mobile/commit/b0c41aaf7bd0a05b50b1cffccd49687097b1ad5c))

* formatting ([d325bac](https://github.com/appcelerator/titanium_mobile/commit/d325bac6bb1cefd343f04e24144bf5a729f89b67))

* guard launch image code to ios only, match to only root images ([7ce99e8](https://github.com/appcelerator/titanium_mobile/commit/7ce99e8e0aa193b045f306dd71262787a3c1ab0f))

* guard simulator check for Ti.Platform.model with define ([1bcf4d6](https://github.com/appcelerator/titanium_mobile/commit/1bcf4d677ced6e0cd308e85eb8ebfc8b9a207aad))

* have KrollPromise static methods return instancetype, not JSValue\* ([de50c8c](https://github.com/appcelerator/titanium_mobile/commit/de50c8ca24318a1f6d77a2fd23713274bafa3501))

* if user supplies no specific auth constant for hasLocationPermissions, assume WHEN\_IN\_USE ([5db8321](https://github.com/appcelerator/titanium_mobile/commit/5db83213f2fb094c15253d9589c12ffc48858271))

* implement Ti.Blob binary toString natively ([ce900a7](https://github.com/appcelerator/titanium_mobile/commit/ce900a7e0701751c5e688052661e054f0f9af158))

* implement Ti.Blob.arrayBuffer natively ([46842aa](https://github.com/appcelerator/titanium_mobile/commit/46842aa768c1b4d379c661c18c38369658a7457f))

* implement Ti.UI.Tab.setWindow() in JS to avoid error ([2185a8f](https://github.com/appcelerator/titanium_mobile/commit/2185a8fb22026d008f1ac7da981a6837fd4d11e0))

* make JSValue nonatomic property, retain it under the hood, handle exception in creation ([10c4acd](https://github.com/appcelerator/titanium_mobile/commit/10c4acd4c6d06de927a3bc91d582004638c1920b))

* make KrollPromise no-op under covers when KrollFinalizer is running to avoid crash ([b3aaaa3](https://github.com/appcelerator/titanium_mobile/commit/b3aaaa3409941447db679f09312ed4bdc2b754c4))

* merged switch statment ([97d157a](https://github.com/appcelerator/titanium_mobile/commit/97d157a582fa649b10ffc58f123a401f0f0d0718))

* minor fixes for Ti.Geolocation#requestLocationPermissions() ([82ff625](https://github.com/appcelerator/titanium_mobile/commit/82ff625ba0e04b7abce21acec174fd319cc6db3d))

* modify gathering of npm packages ([82f7a33](https://github.com/appcelerator/titanium_mobile/commit/82f7a337eb300d5add557def74f285525cb438e4))

* prevent deprecation warning ([d36b81b](https://github.com/appcelerator/titanium_mobile/commit/d36b81b31ce13071b042c27628a91963bd5458b9))

* properly handle Ti.UI.Clipboard.setData with Files ([485f5cf](https://github.com/appcelerator/titanium_mobile/commit/485f5cf9423cccb5f0247e32cc216405b569742f))

* report Ti.Media.VideoPlayer.error event with all typical error properties ([2f1a84b](https://github.com/appcelerator/titanium_mobile/commit/2f1a84bff0efb75d148024420c56286538b03212))

* tweak to get correct platform values on macos ([e9a6587](https://github.com/appcelerator/titanium_mobile/commit/e9a6587c9c9c67cbb6e3343372e914c341309157))

* use compile guard for determining if macos ([df14d0a](https://github.com/appcelerator/titanium_mobile/commit/df14d0aa3663ba66b2499522bc909795db2c69db))

* remove unsupported architectures ([a4e61bf](https://github.com/appcelerator/titanium_mobile/commit/a4e61bff968ac621998bfe53f1e20f33df386ad5))

## Features

### Multiple platforms

* [TIMOB-24549](https://jira.appcelerator.org/browse/TIMOB-24549) - TiAPI: Add support for Promises ([ea75a0f](https://github.com/appcelerator/titanium_mobile/commit/ea75a0fc9a5291fcc6efbd3c47a50367a85ced11)) ([23541b3](https://github.com/appcelerator/titanium_mobile/commit/23541b36b51708b4e3a2dddb34b2d454b6a2f835)) ([bbb48f8](https://github.com/appcelerator/titanium_mobile/commit/bbb48f84fde98b3676a90fb929082bc43564d216))

* [TIMOB-26352](https://jira.appcelerator.org/browse/TIMOB-26352) - CLI: node\_modules in project root should be handled properly

* [TIMOB-28302](https://jira.appcelerator.org/browse/TIMOB-28302) - add checkbox style to Ti.UI.Switch ([446d215](https://github.com/appcelerator/titanium_mobile/commit/446d21532e967619f870cf4e0372546eb9244078))

* [TIMOB-28317](https://jira.appcelerator.org/browse/TIMOB-28317) - add Ti.UI.OptionBar ([260f65b](https://github.com/appcelerator/titanium_mobile/commit/260f65bb7bac31b21629cbcd731b644f2b9bd3ec))

* [TIMOB-28328](https://jira.appcelerator.org/browse/TIMOB-28328) - Update to recommend installing @appcd/plugin-webpack via appcd pm rather than from npm

* [TIMOB-28340](https://jira.appcelerator.org/browse/TIMOB-28340) - Return Promise for Ti.UI.Window open() and close()

* [TIMOB-28364](https://jira.appcelerator.org/browse/TIMOB-28364) - TiAPI: Return Promises for async Ti.\* Geolocation APIs

* [TIMOB-28367](https://jira.appcelerator.org/browse/TIMOB-28367) - Ti.UI.ProgressBar should smoothly animate value changes

* [TIMOB-28369](https://jira.appcelerator.org/browse/TIMOB-28369) - Add Ti.UI.overrideUserInterfaceStyle property

* [TIMOB-28372](https://jira.appcelerator.org/browse/TIMOB-28372) - Remove native module verification

### Android platform

* [TIMOB-24735](https://jira.appcelerator.org/browse/TIMOB-24735) - implement ATTRIBUTE\_UNDERLINE\_COLOR functionality ([645c91e](https://github.com/appcelerator/titanium_mobile/commit/645c91ea1b9d237790d73349f51d059a79aaf2dd))

* [TIMOB-25954](https://jira.appcelerator.org/browse/TIMOB-25954) - Add "Ti.UI.ButtonBar" support ([5a6be04](https://github.com/appcelerator/titanium_mobile/commit/5a6be04f8d7144da0181b7500920a6bb1c789ace))

* [TIMOB-26263](https://jira.appcelerator.org/browse/TIMOB-26263) - Add "MaterialButton" support to "Ti.UI.Button" ([f835bba](https://github.com/appcelerator/titanium_mobile/commit/f835bba2e29e4ba2516e30457a5b88fd0218ad5f))

* [TIMOB-28082](https://jira.appcelerator.org/browse/TIMOB-28082) - Update "CardView" to support material theme ([a828779](https://github.com/appcelerator/titanium_mobile/commit/a828779fc722e78eff30a9798118e6ab8c7732a5))

* [TIMOB-28083](https://jira.appcelerator.org/browse/TIMOB-28083) - Update dialogs to support material theme

* [TIMOB-28086](https://jira.appcelerator.org/browse/TIMOB-28086) - Update "Toolbar" to support material theme ([1c1431d](https://github.com/appcelerator/titanium_mobile/commit/1c1431dde9f2c64032b84d66b23dd1ee78813629))

* [TIMOB-28286](https://jira.appcelerator.org/browse/TIMOB-28286) - Touch events should fire synchronously

* [TIMOB-28299](https://jira.appcelerator.org/browse/TIMOB-28299) - Add new material theme styles to "TextField" and "TextArea" ([4d81389](https://github.com/appcelerator/titanium_mobile/commit/4d813894527c0268679a3ac1f4b117e8128a6ad9)) ([ed22a7d](https://github.com/appcelerator/titanium_mobile/commit/ed22a7d14c19e938a5be1a4989c6f25b1aa02888))

* [TIMOB-28300](https://jira.appcelerator.org/browse/TIMOB-28300) - Add material "chip" style to Ti.UI.Switch ([4295acc](https://github.com/appcelerator/titanium_mobile/commit/4295acc6a9249da420f514af883e9bc23e44664c))

* [TIMOB-28301](https://jira.appcelerator.org/browse/TIMOB-28301) - Use the material DayNight theme by default ([86a704f](https://github.com/appcelerator/titanium_mobile/commit/86a704f3b682e79a197313d89df84040a1c94eb0))

* [TIMOB-28326](https://jira.appcelerator.org/browse/TIMOB-28326) - Number-based "itemId" is transformed into string in ListView

* [TIMOB-28336](https://jira.appcelerator.org/browse/TIMOB-28336) - Update V8 runtime to 8.8 ([738b2c2](https://github.com/appcelerator/titanium_mobile/commit/738b2c2ccbc76cc0082db41767ddeb7add77877a)) ([be490ba](https://github.com/appcelerator/titanium_mobile/commit/be490bae867f42a4f5f13a3d69d0e21c02f82454))

* [TIMOB-28348](https://jira.appcelerator.org/browse/TIMOB-28348) - Add TEXT\_ALIGNMENT\_JUSTIFY support ([851b4f6](https://github.com/appcelerator/titanium_mobile/commit/851b4f6849d3c73f57b760850a86cfa2abb09dc5))

* [TIMOB-28351](https://jira.appcelerator.org/browse/TIMOB-28351) - Update ProgressBars/ActivityIndicators to use material theme ([b1c5d0a](https://github.com/appcelerator/titanium_mobile/commit/b1c5d0aa2e0339a477bd11ff712eada9e3f70ac5))

* [TIMOB-28353](https://jira.appcelerator.org/browse/TIMOB-28353) - Update Date/Time picker dialogs to use material theme ([6fbe014](https://github.com/appcelerator/titanium_mobile/commit/6fbe0141da2d4101e26bb121da30d3d8d544b22d))

* [TIMOB-28370](https://jira.appcelerator.org/browse/TIMOB-28370) - Add "title" support to Ti.UI.Switch slider style

* [TIMOB-28390](https://jira.appcelerator.org/browse/TIMOB-28390) - Change Ti.UI.SearchBar to use native SearchView ([9637ac1](https://github.com/appcelerator/titanium_mobile/commit/9637ac1cae29b3bdf1e9bf8ed9081193bdd6fc0d))

* [TIMOB-28402](https://jira.appcelerator.org/browse/TIMOB-28402) - Implement delete event for ListView and TableView ([6b60f5f](https://github.com/appcelerator/titanium_mobile/commit/6b60f5f5ae84c108b6448211d27ec3121411981d))

* "requestPermissions" and Geolocation APIs return Promise ([971e71e](https://github.com/appcelerator/titanium_mobile/commit/971e71e876284d0828617a74607b8bb4107a2faf))

* add "?attr/color" string support ([4dde745](https://github.com/appcelerator/titanium_mobile/commit/4dde74525b114c0c472a537d2484059007fdbbfe))

* add npm packages to android apps ([7ea9d0e](https://github.com/appcelerator/titanium_mobile/commit/7ea9d0e72a92a063708578c654b7dece7ca59cad))

* add outlined CardView support ([dc3b279](https://github.com/appcelerator/titanium_mobile/commit/dc3b279573ece7f9d137f6b98d52fefd67b07b92))

* change button theme to not all-caps ([a664bc8](https://github.com/appcelerator/titanium_mobile/commit/a664bc82d8181e1a649b65f438e04b11712eca1a))

* expose Ti.Media.AudioPlayer.audioSessionId as read-only property ([d8c64af](https://github.com/appcelerator/titanium_mobile/commit/d8c64af65345691e2258929d6848d022c11477b0))

* fetchSemanticColor() support dynamic light/dark change ([0b07d89](https://github.com/appcelerator/titanium_mobile/commit/0b07d89d8f0ace3d4655b7df46af3de12b5a0bdf))

* have Ti.Database.DB.executeAllAsync return a Promise ([41e83be](https://github.com/appcelerator/titanium_mobile/commit/41e83bef336e3427543d063f73c02f306eaf79fa))

* scale top tab style to fit icon ([8d2831d](https://github.com/appcelerator/titanium_mobile/commit/8d2831def020195fa9a436a66c9e08724c0f4e0d))

* have Ti.Database.DB.executeAsync return a Promise ([4b03ac6](https://github.com/appcelerator/titanium_mobile/commit/4b03ac6916de5ba81f8fd583b6bc6e4e81377e7c))

* make Geolocation getCurrentHeading/Position return Promises ([fcf6d0a](https://github.com/appcelerator/titanium_mobile/commit/fcf6d0a5418cf6e284f55e99a01a50b26e0f0126))

* return Promise from Ti.UI.Window.close() ([d67537f](https://github.com/appcelerator/titanium_mobile/commit/d67537f5cfe607264dd1f2a276cb35de81fec60c))

* return Promise from Ti.UI.Window.open() ([2fda671](https://github.com/appcelerator/titanium_mobile/commit/2fda6717ff32c8702a047c2c6f22201c58049432))

### iOS platform

* [TIMOB-20473](https://jira.appcelerator.org/browse/TIMOB-20473) - Support storyboard in iOS-modules ([7292d1b](https://github.com/appcelerator/titanium_mobile/commit/7292d1bf3b26f2577ae2468ab5fcfb2e2b2570f8))

* [TIMOB-27355](https://jira.appcelerator.org/browse/TIMOB-27355) - Support native iOS 13+ JavaScriptCore promises

* [TIMOB-27865](https://jira.appcelerator.org/browse/TIMOB-27865) - Titanium should add view controllers as children

* [TIMOB-28259](https://jira.appcelerator.org/browse/TIMOB-28259) - Replace OSSpinLock usage with os\_unfair\_lock

* [TIMOB-28282](https://jira.appcelerator.org/browse/TIMOB-28282) - Use supportedInterfaceOrientations of UINavigationController.topViewController instead of UINavigationController

* [TIMOB-28297](https://jira.appcelerator.org/browse/TIMOB-28297) - swift files doesn't recognize macros defined in defines.h

* [TIMOB-28302](https://jira.appcelerator.org/browse/TIMOB-28302) - macOS: Add checkbox style to Ti.UI.Switch

* [TIMOB-28304](https://jira.appcelerator.org/browse/TIMOB-28304) - Enabling swift in Objc based module is failing while building

* [TIMOB-28334](https://jira.appcelerator.org/browse/TIMOB-28334) - Update modules to set minimum target iOS 11

* [TIMOB-28342](https://jira.appcelerator.org/browse/TIMOB-28342) - Drop iOS 11 support in titanium SDK 10

* have Ti.Database.DB.executeAllAsync return a Promise ([6c4253f](https://github.com/appcelerator/titanium_mobile/commit/6c4253f0a32be191e02717c897864e63b61ac952))

* have Ti.Database.DB.executeAsync return a Promise ([fbbbe98](https://github.com/appcelerator/titanium_mobile/commit/fbbbe982c9a63c03be2c21d5003f0277ac697f7c))

* include project root node\_modules folder in app ([84d5641](https://github.com/appcelerator/titanium_mobile/commit/84d564165cb93a7d77d6d5dcbbc2c32b80516c81))

* move to JS based require implementation ([1e66008](https://github.com/appcelerator/titanium_mobile/commit/1e660087eb34049c00399671454df50a273efc41))

* return Promise from Ti.UI.Window.open()/close() ([5fa6258](https://github.com/appcelerator/titanium_mobile/commit/5fa6258f9ec45eefc6a83b95c61b625d62386fd9))

* return Promises from Ti.Geolocation.getCurrentHeading/Position methods ([a4015cd](https://github.com/appcelerator/titanium_mobile/commit/a4015cd5c161af17ab8da73dd58cdf3d9d69be6f))

* support Ti.UI.NavigationWindow#open()/close() returning Promise ([ca09400](https://github.com/appcelerator/titanium_mobile/commit/ca094007ae0a99db1df156db742aa53cf6ccfa8b))

* support Ti.UI.TabGroup#open()/close() returning Promise ([cafd270](https://github.com/appcelerator/titanium_mobile/commit/cafd27028c5a67cea6ea4ff7081ffc92794a0745))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 11.0.2 | 11.0.0 |
| ti.cloudpush | 7.1.0 | n/a |
| ti.map | 5.0.1 | 5.0.0 |
| ti.webdialog | 2.0.0 | 3.0.0 |
| ti.playservices | 17.5.0 | n/a |
| ti.identity | 3.0.2 | 4.0.0 |
| urlSession | n/a | 4.0.0 |
| ti.coremotion | n/a | 4.0.0 |
| ti.applesignin | n/a | 3.0.0 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 7.0.1 |  |
