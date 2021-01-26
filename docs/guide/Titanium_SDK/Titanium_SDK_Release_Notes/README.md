---
title: Titanium SDK Release Notes
weight: '40'
---

# Titanium SDK Release Notes

## Titanium SDK 9.3.0.GA - 14 December 2020

### About this release

Titanium SDK 9.3.0 is a minor release of the SDK, addressing high-priority issues from previous releases.

As of this release, Titanium SDK 9.2.x will not receive updates more than six months after the release of 9.3.0 (2021-05-14). Any needed fixes will be in 9.3.x or later supported releases within the 9.x branch. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.
:::

Overview

Titanium SDK 9.3.0 is primarily focused on providing support for Android 11.

### Community Credits

* Sergey Volkov

    * [TIMOB-25556](https://jira.appcelerator.org/browse/TIMOB-25556) - add separate lock mode for left and right drawers ([e51c84b](https://github.com/appcelerator/titanium_mobile/commit/e51c84be4482b0daa3c12b0da1e9a8f85a0e4d06))

* Michael Gangolf

    * [TIDOC-3186](https://jira.appcelerator.org/browse/TIDOC-3186) - adding drawerlayout alloy example ([7d5b1f5](https://github.com/appcelerator/titanium_mobile/commit/7d5b1f58a6fe443db2b79c46310828ed481ce17c))

    * [TIMOB-27779](https://jira.appcelerator.org/browse/TIMOB-27779) - fix TabbedBar Click loop ([1c5327d](https://github.com/appcelerator/titanium_mobile/commit/1c5327df7f719267a6e9d3f1c6935b90440fbda1))

    * [TIMOB-27859](https://jira.appcelerator.org/browse/TIMOB-27859) - add Ti.UI.Tab.badge and badgeColor ([a19c36e](https://github.com/appcelerator/titanium_mobile/commit/a19c36ec07740d7eb8e139458322335d7e1cb24b)) ([6ca467a](https://github.com/appcelerator/titanium_mobile/commit/6ca467a888012f4e1ec6f2d5b0fd24e562420258))

    * fix Ti.UI.Window.extendSafeArea default value text ([ec2f867](https://github.com/appcelerator/titanium_mobile/commit/ec2f8675e5ba23247a9d1e5c54954b0554b14fe6))

* Hans Knöchel

    * [TIMOB-28104](https://jira.appcelerator.org/browse/TIMOB-28104) - support new date picker styles ([78bce40](https://github.com/appcelerator/titanium_mobile/commit/78bce40cd4dd9b90a06929729122dd9e17272450))

    * [TIMOB-28232](https://jira.appcelerator.org/browse/TIMOB-28232) - iOS: Several memory leaks in Titanium

### Features

#### Android platform

* [TIMOB-28045](https://jira.appcelerator.org/browse/TIMOB-28045) - Android 11 Support

* [TIMOB-18069](https://jira.appcelerator.org/browse/TIMOB-18069) - make ListSection.getItemCount() and/or getContentCount() public

* [TIMOB-24983](https://jira.appcelerator.org/browse/TIMOB-24983) - Add "HTTPClient.responseHeaders" support (feature parity with iOS)

* [TIMOB-25556](https://jira.appcelerator.org/browse/TIMOB-25556) - Extend drawerLockMode to set Gravity

* [TIMOB-25854](https://jira.appcelerator.org/browse/TIMOB-25854) - Grant WebView permissions for Audio/Video WebRTC streams

* [TIMOB-25991](https://jira.appcelerator.org/browse/TIMOB-25991) - RefreshControl in ListView only works when dragging content

* [TIMOB-27077](https://jira.appcelerator.org/browse/TIMOB-27077) - Rewrite Ti.UI.TableView to use RecyclerView

* [TIMOB-27138](https://jira.appcelerator.org/browse/TIMOB-27138) - Add photo/video capture support to WebView

* [TIMOB-27201](https://jira.appcelerator.org/browse/TIMOB-27201) - Update "Ti.Filesystem.File" to support unimplemented APIs when wrapping a "content://" URL

* [TIMOB-27714](https://jira.appcelerator.org/browse/TIMOB-27714) - Add "Material Components" theme support ([eb46ca0](https://github.com/appcelerator/titanium_mobile/commit/eb46ca07aab67895f010ccae68b9927a685fd538))

* [TIMOB-27743](https://jira.appcelerator.org/browse/TIMOB-27743) - Remove hidden API usage from SDK

* [TIMOB-27787](https://jira.appcelerator.org/browse/TIMOB-27787) - Add C/C++ debugging to SDK test app builds

* [TIMOB-27838](https://jira.appcelerator.org/browse/TIMOB-27838) - Style default tableViewSection headerTitle using XML

* [TIMOB-27859](https://jira.appcelerator.org/browse/TIMOB-27859) - Add "badge" support to TabGroup

* [TIMOB-27873](https://jira.appcelerator.org/browse/TIMOB-27873) - Remove "nineoldandroids" library from SDK

* [TIMOB-27887](https://jira.appcelerator.org/browse/TIMOB-27887) - Support WebAssembly in V8

* [TIMOB-27934](https://jira.appcelerator.org/browse/TIMOB-27934) - Update "ti.playservices" module to use 17.5.0

* [TIMOB-27948](https://jira.appcelerator.org/browse/TIMOB-27948) - Use of wrong string operator in string comparison in TiJSService

* [TIMOB-27970](https://jira.appcelerator.org/browse/TIMOB-27970) - Update V8 runtime to 8.4

* [TIMOB-28046](https://jira.appcelerator.org/browse/TIMOB-28046) - Compile with SDK version 30 (Android 11)

* [TIMOB-28047](https://jira.appcelerator.org/browse/TIMOB-28047) - Target API Level 30 (Android 11) by default ([4490c3e](https://github.com/appcelerator/titanium_mobile/commit/4490c3ea8554ad50c60d410208d401723525d771))

* [TIMOB-28049](https://jira.appcelerator.org/browse/TIMOB-28049) - Investigate "ACCESS\_BACKGROUND\_LOCATION" handling on Android 11

* [TIMOB-28050](https://jira.appcelerator.org/browse/TIMOB-28050) - Investigate "package visibility" handling on Android 11

* [TIMOB-28051](https://jira.appcelerator.org/browse/TIMOB-28051) - Add foreground service type constants for "camera" and "microphone" ([8fcbd4a](https://github.com/appcelerator/titanium_mobile/commit/8fcbd4a2fee97fb3c53a9f7a65f59ecf08311d68)) ([0e98584](https://github.com/appcelerator/titanium_mobile/commit/0e985849e0578ca48c3e2c67f3bb5cae179f1391))

* [TIMOB-28057](https://jira.appcelerator.org/browse/TIMOB-28057) - Modify WebView to use scoped storage for `<input/>` file selection

* [TIMOB-28058](https://jira.appcelerator.org/browse/TIMOB-28058) - Change Ti.Filesystem "temp" APIs to use app's cache folder

* [TIMOB-28059](https://jira.appcelerator.org/browse/TIMOB-28059) - Modify Ti.Media APIs to use scoped storage

* [TIMOB-28080](https://jira.appcelerator.org/browse/TIMOB-28080) - Add "tapjacking" prevention features ([34cbeea](https://github.com/appcelerator/titanium_mobile/commit/34cbeeae1b33de1aa056e92f98952786332a2c30)) ([413da3e](https://github.com/appcelerator/titanium_mobile/commit/413da3e821c5a4ed4f47acec439f6543331c2d9b))

* [TIMOB-28084](https://jira.appcelerator.org/browse/TIMOB-28084) - use material theme by default ([00e2816](https://github.com/appcelerator/titanium_mobile/commit/00e28160218593d5591971b97f1d202ed97d5111))

* [TIMOB-28087](https://jira.appcelerator.org/browse/TIMOB-28087) - Add "NoTitleBar" and "Fullscreen" themes which derive from custom app theme ([00e2816](https://github.com/appcelerator/titanium_mobile/commit/00e28160218593d5591971b97f1d202ed97d5111))

* [TIMOB-28088](https://jira.appcelerator.org/browse/TIMOB-28088) - Rewrite Ti.UI.ListView to use RecyclerView

* [TIMOB-28102](https://jira.appcelerator.org/browse/TIMOB-28102) - Update module Kotlin language support to 1.4.x ([5dc0872](https://github.com/appcelerator/titanium_mobile/commit/5dc08725eb313419b5749fea7789731ab534483f))

* [TIMOB-28140](https://jira.appcelerator.org/browse/TIMOB-28140) - WebView should request location permission when HTML uses geolocation API

* [TIMOB-28146](https://jira.appcelerator.org/browse/TIMOB-28146) - Ti.Filesystem.File rename() should support an absolute path in same directory

* [TIMOB-28173](https://jira.appcelerator.org/browse/TIMOB-28173) - Update gradle to 6.7

* [TIMOB-28182](https://jira.appcelerator.org/browse/TIMOB-28182) - Only add WRITE\_EXTERNAL\_STORAGE permission when needed

* [TIMOB-28183](https://jira.appcelerator.org/browse/TIMOB-28183) - Add Ti.Media.requestPhotoGalleryPermissions() support

* [TIMOB-28214](https://jira.appcelerator.org/browse/TIMOB-28214) - Remove dead "TiAuthenticator" Java code to avoid security warnings

* [TIMOB-28223](https://jira.appcelerator.org/browse/TIMOB-28223) - Use vector graphics for list/table icons

* [TIMOB-28230](https://jira.appcelerator.org/browse/TIMOB-28230) - Add Ti.Filesystem.externalCacheDirectory support

* [TIMOB-28231](https://jira.appcelerator.org/browse/TIMOB-28231) - Change Ti.Filesystem.externalStorageDirectory to use scoped storage

* [TIMOB-28269](https://jira.appcelerator.org/browse/TIMOB-28269) - Amend session event behaviour

* [MOD-2588](https://jira.appcelerator.org/browse/MOD-2588) - add passcode fallback to ti.identity ([7e7934d](https://github.com/appcelerator/titanium_mobile/commit/7e7934d1c61d9099c02146519048b30046d68d25))

#### iOS platform

* [TIMOB-27984](https://jira.appcelerator.org/browse/TIMOB-27984) - allow multiple photo selection ([8b53023](https://github.com/appcelerator/titanium_mobile/commit/8b530233dd21eadb162f35416a98c7ea6ea6df39))

* [TIMOB-28195](https://jira.appcelerator.org/browse/TIMOB-28195) - Add node-ios-device v1 support for Node 14

* add iphone 12 models to Node.js `os` shim ([69bf699](https://github.com/appcelerator/titanium_mobile/commit/69bf69928235551fd055b2fe44a099f2787147f1))

* add new constants for `Ti.Media.VIDEO_MEDIA_TYPE_` ([d85d6f8](https://github.com/appcelerator/titanium_mobile/commit/d85d6f82f4d38ec51011381bdd93a5ccfd35dcbb))

#### Multiple platforms

* add `"build.post.install"` build hook ([372bf70](https://github.com/appcelerator/titanium_mobile/commit/372bf7040aabfcd497c4038fa9e7af5f0959e45f)) ([7186384](https://github.com/appcelerator/titanium_mobile/commit/7186384f49eea480b72fdafe1682ef4e28dd3bf2))

* emit `'create.module.app.finalize'` build hook during module build before launching test app ([8778f3f](https://github.com/appcelerator/titanium_mobile/commit/8778f3f033198e305c7325960a3e86a0a5ca18f0)) ([403d7e2](https://github.com/appcelerator/titanium_mobile/commit/403d7e2ab1f967f21c9d06206264f45c5d66ad33))

### Bug Fixes

#### Android platform

* [TIMOB-15015](https://jira.appcelerator.org/browse/TIMOB-15015) - TableView.headerView cannot be set after setting data

* [TIMOB-16498](https://jira.appcelerator.org/browse/TIMOB-16498) - Undesired tableView separatorColor is appearing in footerView

* [TIMOB-24874](https://jira.appcelerator.org/browse/TIMOB-24874) - Selected row does not stay highlighted when using a TableView.

* [TIMOB-25333](https://jira.appcelerator.org/browse/TIMOB-25333) - SearchBar height should default to Ti.UI.SIZE like iOS instead of FILL

* [TIMOB-26602](https://jira.appcelerator.org/browse/TIMOB-26602) - Ti.Media.takePicture() will wrongly assign mp4 extension to image file if camera is configured for MEDIA\_TYPE\_VIDEO

* [TIMOB-26887](https://jira.appcelerator.org/browse/TIMOB-26887) - TableView "headerTitle" and "footerTitle" cannot be changed after creation

* [TIMOB-27481](https://jira.appcelerator.org/browse/TIMOB-27481) - Navigating back from camera overlay can wrongly close the app

* [TIMOB-27796](https://jira.appcelerator.org/browse/TIMOB-27796) - TableViewSection does not scroll after a certain point

* [TIMOB-27948](https://jira.appcelerator.org/browse/TIMOB-27948) - string reference equality in service ([5ba35d3](https://github.com/appcelerator/titanium_mobile/commit/5ba35d344c887191dc0c3f1b2247dc05dae78643))

* [TIMOB-28027](https://jira.appcelerator.org/browse/TIMOB-28027) - Build fails as duplicate string with "app\_name" in i18n strings.xml file ([98ff0e7](https://github.com/appcelerator/titanium_mobile/commit/98ff0e7251cf86b9f67584c141fd0ae5fb8ce93e)) ([d8d442e](https://github.com/appcelerator/titanium_mobile/commit/d8d442ecf09c08010a29a0c79b872b6894343bf3))

* [TIMOB-28048](https://jira.appcelerator.org/browse/TIMOB-28048) - RefreshControl in TableView only works when dragging content

* [TIMOB-28079](https://jira.appcelerator.org/browse/TIMOB-28079) - ACA module no longer loaded first on startup as of 8.1.0

* [TIMOB-28081](https://jira.appcelerator.org/browse/TIMOB-28081) - App build fails if it includes an Apache "commons-logging" library

* [TIMOB-28084](https://jira.appcelerator.org/browse/TIMOB-28084) - Modal/Translucent window ignores `<navbar-hidden/>` setting in "tiapp.xml"

* [TIMOB-28105](https://jira.appcelerator.org/browse/TIMOB-28105) - AudioRecorder "recording" and "stopped" properties return the wrong state values ([340bc36](https://github.com/appcelerator/titanium_mobile/commit/340bc3620a00987cdbd3ad1b3ead9a12c0a2f024)) ([8e8d160](https://github.com/appcelerator/titanium_mobile/commit/8e8d160be4dfc3a35774b227052afd6614a223d1))

* [TIMOB-28149](https://jira.appcelerator.org/browse/TIMOB-28149) - App builds fail if it includes "Java-WebSocket" library

* [TIMOB-28161](https://jira.appcelerator.org/browse/TIMOB-28161) - Modules built with 9.1.0 and using deprecated getter/setter property methods will crash on 9.0.x apps ([6e025c5](https://github.com/appcelerator/titanium_mobile/commit/6e025c52f39fd33f07c85ca5a4d35da113ec6bc5))

* [TIMOB-28162](https://jira.appcelerator.org/browse/TIMOB-28162) - TableViewRow does not scale to height of parent

* [TIMOB-28163](https://jira.appcelerator.org/browse/TIMOB-28163) - TableViewRow ignores borderRadius

* [TIMOB-28164](https://jira.appcelerator.org/browse/TIMOB-28164) - TableViewRow displays incorrect background upon press

* [TIMOB-28165](https://jira.appcelerator.org/browse/TIMOB-28165) - TableViewRow does not activate ripple effect from child views

* [TIMOB-28166](https://jira.appcelerator.org/browse/TIMOB-28166) - TableViewRow does not apply opacity to child views

* [TIMOB-28167](https://jira.appcelerator.org/browse/TIMOB-28167) - ListViewItem does not activate ripple effect from child views

* [TIMOB-28176](https://jira.appcelerator.org/browse/TIMOB-28176) - createTempDirectory() does not create a directory

* [TIMOB-28177](https://jira.appcelerator.org/browse/TIMOB-28177) - createTempFile() should create file under Ti.Filesystem.tempDirectory

* [TIMOB-28178](https://jira.appcelerator.org/browse/TIMOB-28178) - Canceling out of Ti.Media.openPhotoGallery() causes a crash as of 9.1.0 ([0e284e5](https://github.com/appcelerator/titanium_mobile/commit/0e284e58b92179f1d17799418b1e7ab5bd4edd8c))

* [TIMOB-28189](https://jira.appcelerator.org/browse/TIMOB-28189) - Opening TabGroup crashes when using AppCompat theme as of 9.3.0 ([6403da2](https://github.com/appcelerator/titanium_mobile/commit/6403da2453bceed654e7bb5a8c9cb43af51427ae))

* [TIMOB-28193](https://jira.appcelerator.org/browse/TIMOB-28193) - Selecting multiple photos/videos via openPhotoGallery() can cause a crash as of 9.1.0 ([0b1116f](https://github.com/appcelerator/titanium_mobile/commit/0b1116f6eeed4be5c1ac205a53f9288fc8e948aa))

* [TIMOB-28212](https://jira.appcelerator.org/browse/TIMOB-28212) - Listview modifies other rows on scroll

* [TIMOB-28220](https://jira.appcelerator.org/browse/TIMOB-28220) - tintColor/activeTintColor or titleColor/activeTitleColor not respected for tabgroup with style TABS\_STYLE\_BOTTOM\_NAVIGATION ([f640850](https://github.com/appcelerator/titanium_mobile/commit/f6408505023dd85a4b13857130e0ef31289cc870))

* [TIMOB-28222](https://jira.appcelerator.org/browse/TIMOB-28222) - Ti.Android.R.transition doesn't exist ([2773c51](https://github.com/appcelerator/titanium_mobile/commit/2773c51368786bb0b9698ece1e3ea0d3b4fe4a45))

* [TIMOB-28240](https://jira.appcelerator.org/browse/TIMOB-28240) - TableViewRow unable to change colour of row after a set time (Regression)

* [TIMOB-28246](https://jira.appcelerator.org/browse/TIMOB-28246) - Ti.Media.previewImage() fails to display in-memory blobs as of 9.1.0 ([984f811](https://github.com/appcelerator/titanium_mobile/commit/984f8118d6f39b68c2bdb576871291a0cbb680db))

* [TIMOB-28252](https://jira.appcelerator.org/browse/TIMOB-28252) - Modules built before 9.3.0 will return empty string instead of null

* [TIMOB-28271](https://jira.appcelerator.org/browse/TIMOB-28271) - The searchBar border not shown in tableview/listview

* [TIMOB-28276](https://jira.appcelerator.org/browse/TIMOB-28276) - ListView/TableView "headerView" may not show when setting height as of 9.3.0

* [TIMOB-28283](https://jira.appcelerator.org/browse/TIMOB-28283) - Hyperloop based requires fail to load when using "remote" encryption policy

* add accessor for Ti.Media.fullscreen property, default initialPlaybackTime to 0 ([204827d](https://github.com/appcelerator/titanium_mobile/commit/204827d863ee3c8f5b546f8e996ee59870127810))

* allow overriding of toString() ([f20ed51](https://github.com/appcelerator/titanium_mobile/commit/f20ed5123c9da72a581ad4ed5d9f67d99d79747b))

* amend chevron vector icon color and size ([8fde5bb](https://github.com/appcelerator/titanium_mobile/commit/8fde5bb6cf0851803c42a9bfabde019ee1f4ee7f))

* amend icon color and size ([8e63037](https://github.com/appcelerator/titanium_mobile/commit/8e63037a16e39d0164f20ba910cf1a930ab362a6))

* amend size of more icon ([ae23408](https://github.com/appcelerator/titanium_mobile/commit/ae234083e4005076b6b04e813edbe568ca28cbbd))

* amend Ti.UI.Shortcut implementation ([975af13](https://github.com/appcelerator/titanium_mobile/commit/975af137337ef6dbc6ef324ec548b7efdc04e156))

* debug snapshot generation ([dcfd0c7](https://github.com/appcelerator/titanium_mobile/commit/dcfd0c70bc1eef5061946ec44754f8a6c32c0857))

* default to newer scalingMode constant default value ([c151ff0](https://github.com/appcelerator/titanium_mobile/commit/c151ff0ab801d70ff5fe8a7e75145f883cc9ebc0))

* draw outer border path correctly ([e8c6d54](https://github.com/appcelerator/titanium_mobile/commit/e8c6d549dfb9cb78c11bed55039930d0b9a094fe))

* formatting ([db0cd77](https://github.com/appcelerator/titanium_mobile/commit/db0cd77859de5f31ad433b3ea0248c34959e51e0))

* formatToParts() on Android 4.4 ([2a2f0dc](https://github.com/appcelerator/titanium_mobile/commit/2a2f0dc23da360e2edbdd37f179b62bff2a256cf))

* match static value for Ti.Media.MEDIA\_TYPE\_VIDEO to iOS ([b0f6527](https://github.com/appcelerator/titanium_mobile/commit/b0f65279fcbd6980d4545ec2fcac2544b18b44c1))

* null out Ti.UI.Window's navigationWindow property before close event ([bdce8ae](https://github.com/appcelerator/titanium_mobile/commit/bdce8ae291151d2f01279ca29a6c95576015e546))

* remove Ti.Media.VideoPlayer.contentURL property ([5bf7826](https://github.com/appcelerator/titanium_mobile/commit/5bf7826b37c22425d924a047e6c360b0bafd7856))

* remove unnecessary v8 refs ([4122858](https://github.com/appcelerator/titanium_mobile/commit/4122858166119d724457e9fcc4a9c28ef872f38c))

* return empty array rather than null for Ti.Media.availableCameras if no cameras ([48006b6](https://github.com/appcelerator/titanium_mobile/commit/48006b69b6030f84204cb72848402f31428f9966))

* snapshot template ([3eab6b7](https://github.com/appcelerator/titanium_mobile/commit/3eab6b7241965317dca69912fefae585cde80a46))

* start zip read, close zipfile when done ([bdf7d36](https://github.com/appcelerator/titanium_mobile/commit/bdf7d365edc39d9d273570996494ddbc3f9a442e))

* update more icon into down chevron ([569dc77](https://github.com/appcelerator/titanium_mobile/commit/569dc77128df5e1b967bbe2236a1e14c09024eca))

* use manifest shortcuts for staticItems ([79102ee](https://github.com/appcelerator/titanium_mobile/commit/79102ee7ba7de0385c953f1719aee70687625dee))

* window toString() ([d1fd590](https://github.com/appcelerator/titanium_mobile/commit/d1fd59090c5e246a8e86bc588baa968b2938a7b2))

#### Multiple platforms

* [TIMOB-28200](https://jira.appcelerator.org/browse/TIMOB-28200) - Angular: Project created from template fails build with type errors

* set prompt on project dir option ([f5a4391](https://github.com/appcelerator/titanium_mobile/commit/f5a43911f547dc9500e064b8b38eae26679a4b90))

* return back userInfo.gid not guid ([a70bbe3](https://github.com/appcelerator/titanium_mobile/commit/a70bbe3367b96e5a451f5be318bffb13ece26ab0))

#### iOS platform

* [TIMOB-13903](https://jira.appcelerator.org/browse/TIMOB-13903) - Reading TableView's "sectionCount" property crashes app ([149eb4a](https://github.com/appcelerator/titanium_mobile/commit/149eb4a2bad451630651c46dc60504652394b8a3))

* [TIMOB-27935](https://jira.appcelerator.org/browse/TIMOB-27935) - TableViewRow does not return getRect methods

* [TIMOB-28111](https://jira.appcelerator.org/browse/TIMOB-28111) - TabGroup focus event firing unexpectedly ([5fa704d](https://github.com/appcelerator/titanium_mobile/commit/5fa704dfd656609a2698cb5035d12b9b4c20504b))

* [TIMOB-28148](https://jira.appcelerator.org/browse/TIMOB-28148) - app crashes when updating tableview

* [TIMOB-28160](https://jira.appcelerator.org/browse/TIMOB-28160) - "unrecognized selector sent to instance" logged for errors from native side

* [TIMOB-28207](https://jira.appcelerator.org/browse/TIMOB-28207) - Packaging fails when Xcode path contains a space

* [TIMOB-28211](https://jira.appcelerator.org/browse/TIMOB-28211) - The color property of Ti.UI.Button does not work when used in navbar ([66e8d37](https://github.com/appcelerator/titanium_mobile/commit/66e8d3768a97a963c03c529f62bc05da90aa706a))

* [TIMOB-28218](https://jira.appcelerator.org/browse/TIMOB-28218) - Ti.UI.Clipboard example usage crashes on macOS

* [TIMOB-28219](https://jira.appcelerator.org/browse/TIMOB-28219) - Ti.UI.Clipboard#remove() doesn't exist, but is documented

* [TIMOB-28221](https://jira.appcelerator.org/browse/TIMOB-28221) - Default value of property Ti.Media.VideoPlayer.pictureInPictureEnabled should be true ([ba7e5aa](https://github.com/appcelerator/titanium_mobile/commit/ba7e5aab70925e9b1ad8cb197e0c1c39056081c2))

* [TIMOB-28232](https://jira.appcelerator.org/browse/TIMOB-28232) - Several memory leaks in Titanium

* [TIMOB-28227](https://jira.appcelerator.org/browse/TIMOB-28227) - Ti.UI.dateTimeColor is crashing on mac

* fix Ti.Filesystem.getAsset and getFile on devices ([3b2865d](https://github.com/appcelerator/titanium_mobile/commit/3b2865daf131eaabdfeaac2c5b6b6772e514e3dc))

* fix typo on Ti.Media.MUSIC\_PLAYER\_STATE\_SEEK\_FORWARD ([de780ec](https://github.com/appcelerator/titanium_mobile/commit/de780ec99b714056b2e5ebae782f428111d2b766))

* gaurd code for MediaModule on xcode 11 to avoid compile issues ([4144c96](https://github.com/appcelerator/titanium_mobile/commit/4144c96ea19145e2e1fbb23687bfcad3b875f11d))

* get rid of removed constants/properties ([8a9a05e](https://github.com/appcelerator/titanium_mobile/commit/8a9a05eba7b158248bc69a1fd5388e05a89481a6))

* handle adding Ti.UI.Shortcut when existing array is nil ([f967cf9](https://github.com/appcelerator/titanium_mobile/commit/f967cf90c6cf2dea959dc2980a59e5359103418b))

* modify BOOL to bool for return types to fix JS representation ([43042cc](https://github.com/appcelerator/titanium_mobile/commit/43042cce456c3491e526da2ab2e005acb8339cf3))

* set Ti.Codec.CHARSET\_ISO\_LATIN\_1 to 'latin1' ([4123b9b](https://github.com/appcelerator/titanium_mobile/commit/4123b9ba88425d647cf29e31708a048409074162))

* shortcut guard in Ti.UI module ([7f44d8d](https://github.com/appcelerator/titanium_mobile/commit/7f44d8d02fbcb6be8ecfff52debd0e9af7830dad))

### SDK Module Versions

| Module | Android version | iOS version |
| --- | --- | --- |
| facebook | 10.0.0 | 9.0.0 |
| ti.cloudpush | 7.1.0 | n/a |
| ti.map | 5.0.1 | 4.0.1 |
| ti.webdialog | 2.0.0 | 2.0.0 |
| ti.playservices | 17.5.0 | n/a |
| ti.identity | 3.0.2 | 3.0.0 |
| urlSession | n/a | 3.0.0 |
| ti.coremotion | n/a | 3.0.0 |
| ti.applesignin | n/a | 2.0.0 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 6.0.2 | 6.0.2 |

### Recent Releases

* [Titanium SDK 9.3.1 GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.3.1_GA_Release_Note/)

* [Titanium SDK 9.3.0 GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.3.0_GA_Release_Note/)

* [Titanium SDK 9.3.0 RC Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.3.0_RC_Release_Note/)

* [Titanium SDK 9.2.2.GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.2.2.GA_Release_Note/)

* [Titanium SDK 9.2.1.GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.2.1.GA_Release_Note/)

* [Titanium SDK 9.2.0 GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.2.0_GA_Release_Note/)

* [Titanium SDK 9.2.0 RC Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.2.0_RC_Release_Note/)

* [Titanium SDK 9.1.0.GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.1.0.GA_Release_Note/)

* [Titanium SDK 9.1.0.RC Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.1.0.RC_Release_Note/)

* [Titanium SDK 9.0.3.GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.0.3.GA_Release_Note/)

* [Titanium SDK 9.0.2.GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.0.2.GA_Release_Note/)

* [Titanium SDK 9.0.1.GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.0.1.GA_Release_Note/)

* [Titanium SDK 9.0.0.GA Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.0.0.GA_Release_Note/)

* [Titanium SDK 9.0.0.RC Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_9.x/Titanium_SDK_9.0.0.RC_Release_Note/)
