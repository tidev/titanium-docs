---
title: Titanium SDK 9.0.0.RC - 18 February 2020
weight: '110'
---

# Titanium SDK 9.0.0.RC - 18 February 2020

## About this release

Titanium SDK 9.0.0 is a major release of the SDK, addressing high-priority issues from previous releases; introducing some breaking changes; and removing a number of long-deprecated APIs.

As of this release, Titanium SDK 8.x will not be supported one calendar year (2021-02-18) from 9.0.0's release date. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 will be the new minimum supported version with SDK 9.0.0.
:::
::: danger ❗️ Warning
Deprecation Notice: The next major release of the Titanium CLI, version 6.0.0, will no longer support plugins and hooks for commands other than "appc ti clean", "ti clean", "appc run", and "ti build". Titanium CLI v6 will have a new plugin system with a new hook system and it will be incompatible with Titanium CLI v5 plugins and hooks. Please refer to [TIMOB-27233](https://jira.appcelerator.org/browse/TIMOB-27233) and [TIMOB-27255](https://jira.appcelerator.org/browse/TIMOB-27255) for more information.
:::
::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, Windows platform will no longer be supported and has been removed from distribution in the SDK. Customers on Pro and Enterprise plans may continue to request critical fixes on SDK 8.x releases until August 18, 2020.
:::

## Community Credits

* Sergey Volkov

    * \[ [TIMOB-26662](https://jira.appcelerator.org/browse/TIMOB-26662) \] - Android. TableViewRow bugs ( [19f532b](https://github.com/appcelerator/titanium_mobile/commit/19f532b334c75afdb9340e343a1fa0caf7b93bcb) )

    * add "repeatable" property on methods parameters ([ea0da79](https://github.com/appcelerator/titanium_mobile/commit/ea0da79e2fef897c8757303f368990472f4ef7f1))

    * fix optional parameters on "timers" methods ([8a00014](https://github.com/appcelerator/titanium_mobile/commit/8a0001478a94c9714f8b9b68e96c96ad1b5db50b))

    * split interface and property definition for console and JSON ([958a6a3](https://github.com/appcelerator/titanium_mobile/commit/958a6a3dcc086b835ed2c887512bd65c1c9e3ea5))

    * fix Ti.UI.TableView.setData argument ([70c16f7](https://github.com/appcelerator/titanium_mobile/commit/70c16f7ca213f39791330758489be4f951dfa1ab))

    * fix PickerColumn parent class ([0a55a4b](https://github.com/appcelerator/titanium_mobile/commit/0a55a4bf37c78fbbac90029acb2941f0a65f74a2))

    * remove duplicate events from Ti.UI.Tab ([f618aeb](https://github.com/appcelerator/titanium_mobile/commit/f618aeba79bcaae680ccc9adcfcc07c23f8e2f92))

    * fix Ti.UI.iOS.ApplicationShortcuts.getDynamicShortcut ([a841846](https://github.com/appcelerator/titanium_mobile/commit/a8418468355e9e12393426dfba51c7062625aec4))

    * fix Ti.Platform.openURL parameters ([17f258d](https://github.com/appcelerator/titanium_mobile/commit/17f258d651b7d0ead72c195f0a35a4a1d67703b5))

    * fix Ti.UI.Slider.value type ([2663d7d](https://github.com/appcelerator/titanium_mobile/commit/2663d7d052891bf0a72978e2d476e187e3c2c7ba))

    * fix Ti.Media.audioSessionCategory type ([21bca1d](https://github.com/appcelerator/titanium_mobile/commit/21bca1db38af27deb0199e56322e185b872cefb2))

    * fix type of "services" property ([410aee2](https://github.com/appcelerator/titanium_mobile/commit/410aee28f9cd33f68f36d19f545f3bb161edfd1f))

    * add missing types for events properties ([5b7732f](https://github.com/appcelerator/titanium_mobile/commit/5b7732f71a7b50c0572c07abf1df08a74cba0f5a))

    * remove "optional" key from event property ([b1c0967](https://github.com/appcelerator/titanium_mobile/commit/b1c09673123bd08c2248dba05735623a13f7e060))

    * add missing types for events properties ([76cd92a](https://github.com/appcelerator/titanium_mobile/commit/76cd92aaa2676ea7568f63e717b56d675fa06b9d))

    * add [Ti.UI.View.id](http://ti.ui.view.id/) property ([b295e63](https://github.com/appcelerator/titanium_mobile/commit/b295e6321ba38e29612b51d93c1518e87e6fffee))

    * mark as optional property "animated" of AnimationOption ([aee1bdd](https://github.com/appcelerator/titanium_mobile/commit/aee1bdda2de633df07013e0102aacfbb3c77d6cb))

    * remove duplicate prop "category" from "localnotificationaction" ([163065a](https://github.com/appcelerator/titanium_mobile/commit/163065a7496702b9e705f7a9f74b84b5e981220b))

* Hans Knöchel

    * add generated .cxx directory to .gitignore ([37b446c](https://github.com/appcelerator/titanium_mobile/commit/37b446cbdb439d0d911f403a8514ca6aa562c748))

    * \[ [TIMOB-27441](https://jira.appcelerator.org/browse/TIMOB-27441) \] - do not log Ti.App events ([2c84e30](https://github.com/appcelerator/titanium_mobile/commit/2c84e3070a8870edb9b1bc1645468d4f82174fe1))

* Giorgio Mandolini

    * \[ [TIMOB-27522](https://jira.appcelerator.org/browse/TIMOB-27522) \] - webview onlink is now called only on link activated ([aedd2aa](https://github.com/appcelerator/titanium_mobile/commit/aedd2aa87d4fa2800bb3ed79fa2aeed9cbbd3568))

* Michael Gangolf

    * \[ [AC-6444](https://jira.appcelerator.org/browse/AC-6444) \] - optimize all pngs ([#11321](https://github.com/appcelerator/titanium_mobile/pull/11321)) ([e563e28](https://github.com/appcelerator/titanium_mobile/commit/e563e28d1d2cc558dbfe924c38f5df764fb3fea8))

    * \[ [TIMOB-13286](https://jira.appcelerator.org/browse/TIMOB-13286) \] - add single/doubletap to scrollview ([0326b7e](https://github.com/appcelerator/titanium_mobile/commit/0326b7eaf2a7c9f003f955cdad10b2b156dff75c))

* David Bankier

    * \[ [TIMOB-23281](https://jira.appcelerator.org/browse/TIMOB-23281) \] - search bar color ignored on ios 13+ ([0aa9b36](https://github.com/appcelerator/titanium_mobile/commit/0aa9b36065fe63585208412f8f1818253df65778))

* Mathias Lykkegaard Lorenzen

    * make event argument in fireEvent optional ([0250df0](https://github.com/appcelerator/titanium_mobile/commit/0250df08784e6e9a86a375882de1bf4d675a3bef))

## Bug Fixes

### Multiple platforms

* \[ [TIMOB-20141](https://jira.appcelerator.org/browse/TIMOB-20141) \] - Global scope variables can be shared with CommonJS modules

* \[ [TIMOB-27522](https://jira.appcelerator.org/browse/TIMOB-27522) \] - WebView: onlink and beforeload are not consistent across platforms

* \[ [TIMOB-27632](https://jira.appcelerator.org/browse/TIMOB-27632) \] - API: Review uncaughtException event property parity

### Android platform

* \[ [TIMOB-13286](https://jira.appcelerator.org/browse/TIMOB-13286) \] - Android: ScrollView: SingleTap event does not get fired.

* \[ [TIMOB-26662](https://jira.appcelerator.org/browse/TIMOB-26662) \] - Android. TableViewRow bugs

* \[ [TIMOB-27325](https://jira.appcelerator.org/browse/TIMOB-27325) \] - Android: Adding <uses-library/> within "tiapp.xml" file's <manifest/> block creates invalid entry in "AndroidManifest.xml"

* \[ [TIMOB-27406](https://jira.appcelerator.org/browse/TIMOB-27406) \] - Android: Cannot select content from downloads ( [c2d89d4](https://github.com/appcelerator/titanium_mobile/commit/c2d89d48cb652b2426e93176d037661487015f4e) )

* \[ [TIMOB-27420](https://jira.appcelerator.org/browse/TIMOB-27420) \] - Android: ImageView.toImage() does not return the correct Ti.Blob

* \[ [TIMOB-27496](https://jira.appcelerator.org/browse/TIMOB-27496) \] - do not modify original ListView proxy ([e75b514](https://github.com/appcelerator/titanium_mobile/commit/e75b514c1ea0f14a8f1e2e6e91a33502b921e164))

* \[ [TIMOB-27527](https://jira.appcelerator.org/browse/TIMOB-27527) \] - Android: Typing into console in Chrome DevTools cause crash

* \[ [TIMOB-27530](https://jira.appcelerator.org/browse/TIMOB-27530) \] - Android: UI glitches out when using 'applyProperties' with Scroll View Touch Listeners

* \[ [TIMOB-27602](https://jira.appcelerator.org/browse/TIMOB-27602) \] - softRestart() must account for snapshots ([62a603d](https://github.com/appcelerator/titanium_mobile/commit/62a603d4edc74109234306ef00b48dfcacdc3c5e))

* \[ [TIMOB-27606](https://jira.appcelerator.org/browse/TIMOB-27606) \] - amend load app info order ([38ea44b](https://github.com/appcelerator/titanium_mobile/commit/38ea44b6d577d8836e0a463032598651a6232a01))

* \[ [TIMOB-27627](https://jira.appcelerator.org/browse/TIMOB-27627) \] - Android: Prevent snapshot failure from breaking build

* \[ [TIMOB-27633](https://jira.appcelerator.org/browse/TIMOB-27633) \] - Android: Additional parameters in require cause app to crash ( [612afd7](https://github.com/appcelerator/titanium_mobile/commit/612afd7e40dc2469d6e35d5fcea65b44d583b0e0) )

* \[ [TIMOB-27684](https://jira.appcelerator.org/browse/TIMOB-27684) \] - Android: Cold-start launch animation may occur twice ( [135e3dc](https://github.com/appcelerator/titanium_mobile/commit/135e3dc35e99b0c1f5ced6c91b1fb3b453a25815) )

* \[ [TIMOB-27705](https://jira.appcelerator.org/browse/TIMOB-27705) \] - Android: Can't set versionCode via AndroidManifest.xml as of 9.0.0

* \[ [TIMOB-27706](https://jira.appcelerator.org/browse/TIMOB-27706) \] - Android: Native modules having uppercase "name" are excluded from build on case-sensitive systems ( [8a906c7](https://github.com/appcelerator/titanium_mobile/commit/8a906c74d46025247e69179699384c983c09020f) )

* \[ [TIMOB-27720](https://jira.appcelerator.org/browse/TIMOB-27720) \] - Android: Error building SDK if python 3 is installed

* \[ [TIMOB-27723](https://jira.appcelerator.org/browse/TIMOB-27723) \] - Android: Build fails and emulator does not launch

* \[ [TIMOB-27739](https://jira.appcelerator.org/browse/TIMOB-27739) \] - Android: Location permissions not auto-added when using Ti.Geolocation API as of 9.0.0

* \[ [TIMOB-27746](https://jira.appcelerator.org/browse/TIMOB-27746) \] - Android: Apps built with 9.0.0 can't upload to Firebase App Distribution when including certain modules ( [476ac79](https://github.com/appcelerator/titanium_mobile/commit/476ac79f4d1d090f6b3399ce35adb0cdb2f1c868) )

* Android: Old "ti.playservices" modules crash in 9.0.0 when calling makeGooglePlayServicesAvailable() ( [c194ecf](https://github.com/appcelerator/titanium_mobile/commit/c194ecfe06b5fd42b66131d5809f4bee45aaa9f9) )

* \[ [TIMOB-27750](https://jira.appcelerator.org/browse/TIMOB-27750) \] - Android: CLI fails to recognize avd emulator is booted when it starts it

* add extension to encrypted assets ([bf8a6bf](https://github.com/appcelerator/titanium_mobile/commit/bf8a6bfd3ca17d3389cb6c8fc775886638226093))

* avoid infinite recursion in tab/tabgroup toJSON() ([7280fcc](https://github.com/appcelerator/titanium_mobile/commit/7280fcc4f187a10ee41a8fa67d9933c9a8217248))

* avoid recursion, properties beginning with \_ in toJSON() ([f5b6561](https://github.com/appcelerator/titanium_mobile/commit/f5b65613add7357ec4b8fccc663ba24cb84dbfb1))

* can't set versionCode in manifest as of 9.0.0 ([a69f6b6](https://github.com/appcelerator/titanium_mobile/commit/a69f6b6df5bd433306be51b3d86f283573918a32))

* fix scroll view's layout resizing with children ([5723b11](https://github.com/appcelerator/titanium_mobile/commit/5723b11146548fb759092b0db5567b12a151efe4))

* fix support for Java 8 in Kotlin ([2287e83](https://github.com/appcelerator/titanium_mobile/commit/2287e8379091bc4c492d33245f0e48e4bfc61b8a))

* getCurrentPosition() compatibility with some Samsung devices ([fa5866a](https://github.com/appcelerator/titanium_mobile/commit/fa5866aa371e7b34e02e4463abf309946eeb2105))

* improve reliability of fused location lib detection ([b8cc24a](https://github.com/appcelerator/titanium_mobile/commit/b8cc24a7c4974e886d3dc088edf8a8a88d65a6fd))

* location permission not auto-added as of 9.0.0 ([db56070](https://github.com/appcelerator/titanium_mobile/commit/db56070cd4366142205b9b0b5d9b783fedb313c0))

* prevent snapshots from failing build ([40bd1d9](https://github.com/appcelerator/titanium_mobile/commit/40bd1d92749857a37ebea2fa87c2f064d1775a51))

* remove deprecated contacts methods ([7e0a46a](https://github.com/appcelerator/titanium_mobile/commit/7e0a46af3bb795193152f2421e5ea924871365f7)) ([7caecb8](https://github.com/appcelerator/titanium_mobile/commit/7caecb878cf76e89377c55517a7504c72e732925))

* specify default inspector context ([c29960d](https://github.com/appcelerator/titanium_mobile/commit/c29960d41b18923a497ac0468ff0c9e5a216bcc1))

* use correct blob for toImage() ([f07e012](https://github.com/appcelerator/titanium_mobile/commit/f07e012dd25a626415fe56c339fed803af0ff281))

### iOS platform

* \[ [TIMOB-7311](https://jira.appcelerator.org/browse/TIMOB-7311) \] - iOS: Change Ti.Network.BonjourService/BonjourBrowser to take a Ti.Network.Socket.TCP object

* \[ [TIMOB-27076](https://jira.appcelerator.org/browse/TIMOB-27076) \] - iOS: App freezes after calling Ti.Network.BonjourService.publish method

* \[ [TIMOB-27106](https://jira.appcelerator.org/browse/TIMOB-27106) \] - iOS: MusicLibrary compilation error in 8.0.1.GA

* \[ [TIMOB-27159](https://jira.appcelerator.org/browse/TIMOB-27159) \] - iOS: Ti.UI.WebView cannot load html files from cache ([dd7b319](https://github.com/appcelerator/titanium_mobile/commit/dd7b319207277494fb87731a0d0b0232845d7312))

* \[ [TIMOB-27350](https://jira.appcelerator.org/browse/TIMOB-27350) \] - iOS: httpClient returning image response as undefined. ([c95ddb3](https://github.com/appcelerator/titanium_mobile/commit/c95ddb3b45b536f193d60065f7c1cef1ebd44491))

* \[ [TIMOB-27441](https://jira.appcelerator.org/browse/TIMOB-27441) \] - iOS: App should not log Ti.App events

* \[ [TIMOB-27460](https://jira.appcelerator.org/browse/TIMOB-27460) \] - iOS: tintColor not working for TabbedBar/ButtonBar on iOS 13

* \[ [TIMOB-27462](https://jira.appcelerator.org/browse/TIMOB-27462) \] - iOS - NavBar properties not working anymore after 8.2.0.GA

* \[ [TIMOB-27480](https://jira.appcelerator.org/browse/TIMOB-27480) \] - setting last index of tabbedBar after initialization not work ([5fbe782](https://github.com/appcelerator/titanium_mobile/commit/5fbe78276e04049874e13bcc0a3874593f27254e))

* \[ [TIMOB-27484](https://jira.appcelerator.org/browse/TIMOB-27484) \] - update to core-js 3 ([ffa4cef](https://github.com/appcelerator/titanium_mobile/commit/ffa4cefa7c6f3ec1b33963cbee3eecd3e6b07ab0))

* \[ [TIMOB-27528](https://jira.appcelerator.org/browse/TIMOB-27528) \] - iOS: uncaught exceptions in event listeners don't show error modal

* \[ [TIMOB-27630](https://jira.appcelerator.org/browse/TIMOB-27630) \] - iOS: Use correct babel-preset-env target ([c4a998a](https://github.com/appcelerator/titanium_mobile/commit/c4a998ad8442737afa957deee4e1cc2e938fca57))

* \[ [TIMOB-27647](https://jira.appcelerator.org/browse/TIMOB-27647) \] - iOS: Cannot read property 'sort' of undefined when building using Xcode 11.3

* \[ [TIMOB-27648](https://jira.appcelerator.org/browse/TIMOB-27648) \] - iOS: Cannot build a project to iOS device with latest master build

* \[ [TIMOB-27756](https://jira.appcelerator.org/browse/TIMOB-27756) \] - watchOS: Including watchOS framework causing build error

* Abnormal behaviour in <=iOS 10 versions with >=8.1.0.GA SDK - behaviour of toString function of TiBlob fixed ([e63b30e](https://github.com/appcelerator/titanium_mobile/commit/e63b30e41d89f23556a48c6a50d5a6635ff5ef89))

* iOS: Abnormal behaviour in iOS 13 while playing video in fullscreen ([6a5664b](https://github.com/appcelerator/titanium_mobile/commit/6a5664bf92657ee31d478529ab42df67471abc7c))

* iOS: “don’t allow” in push notification dialog triggering success callback ([e835456](https://github.com/appcelerator/titanium_mobile/commit/e835456155f265fd24752c0b9bea89ed1d84c356))

* added proper condition to import MediaPlayer ([3943012](https://github.com/appcelerator/titanium_mobile/commit/3943012eca4abf9515c6290548203f68f6754fc6))

* handle when new proxies are created with dictionary arguments ([2c8e2ac](https://github.com/appcelerator/titanium_mobile/commit/2c8e2ac07e07a49434bded23324d8e7f9492ae8a))

* handle when throwing new obj-c proxy error without subreason ([3e2934b](https://github.com/appcelerator/titanium_mobile/commit/3e2934bbe5bd74626e0b6e12fd28583373f6bcb4))

* navBar properties not working properly with extendEdges set to Ti.UI.EXTEND\_EDGE\_TOP ([d673c36](https://github.com/appcelerator/titanium_mobile/commit/d673c362888de7d0ceda6509ab2a222231d399c8))

* proper macro used for wrapping code ([5bb63c5](https://github.com/appcelerator/titanium_mobile/commit/5bb63c55229ba1088a3e9d5c5e2e5819ddc70e24))

* remove deprecated contacts methods ([207b4ab](https://github.com/appcelerator/titanium_mobile/commit/207b4ab2f59c2852c5e0ba1a5068031fe62fb076))

* remove deprecated contacts methods ([e8c4b43](https://github.com/appcelerator/titanium_mobile/commit/e8c4b436098883767747acf7cb08add04af5d0cc))

* remove deprecated tab blur/focus events ([f5d0bbe](https://github.com/appcelerator/titanium_mobile/commit/f5d0bbe4b681a26259ee206ce420ece9dcda0730))

* remove deprecated tabgroup unselected/selected events ([74f1134](https://github.com/appcelerator/titanium_mobile/commit/74f1134424d825204b9f445499c783711ceb07a7))

* remove deprecated TextField padding properties ([337ee8f](https://github.com/appcelerator/titanium_mobile/commit/337ee8fb67110a06ce56e37b0617a196dc9377a5))

* remove deprecated Ti.Media methods ([e8fff19](https://github.com/appcelerator/titanium_mobile/commit/e8fff19fd1cd4b07498e8cdd39b481e70f3a1662))

* remove deprecated Ti.Media methods ([b3bd05e](https://github.com/appcelerator/titanium_mobile/commit/b3bd05ea6fb2d60ce2591f0bbf7714442384344d))

* remove deprecated UI appearance properties ([b8c1f84](https://github.com/appcelerator/titanium_mobile/commit/b8c1f845e964a03b3fbb0c6236bc6411efba616a))

* remove references to Ti.Contacts methods that are removed ([440e9cc](https://github.com/appcelerator/titanium_mobile/commit/440e9ccb720be9ac5096749ad13d44a09107e5cf))

* tintColor not working for TabbedBar in iOS 13 ([ec6fbf6](https://github.com/appcelerator/titanium_mobile/commit/ec6fbf624e27ac4f7c798bf7d93966ff74a930d7))

* when firing events to new proxies, fill in type/source ([e56abfc](https://github.com/appcelerator/titanium_mobile/commit/e56abfca2705c71e88acbd2ff946a176a4df4e38))

## Features

### Multiple platforms

* \[ [TIMOB-27688](https://jira.appcelerator.org/browse/TIMOB-27688) \] - TiAPI: Clean up apidocs to use common types

* \[ [TIMOB-27740](https://jira.appcelerator.org/browse/TIMOB-27740) \] - TiAPI: Extend removal of deprecated get/set property methods from 9.0.0 to 10.0.0

* \[ [TIMOB-27631](https://jira.appcelerator.org/browse/TIMOB-27631) \] - Optimize png files

* \[ [TIMOB-27639](https://jira.appcelerator.org/browse/TIMOB-27639) \] - Documentation for events' properties

* \[ [TIMOB-27167](https://jira.appcelerator.org/browse/TIMOB-27167) \] - CLI: Move Alloy optimizations into core SDK build ([c21f77c](https://github.com/appcelerator/titanium_mobile/commit/c21f77cec7773b8d925fd801235ce87531c7af9b))

### Android platform

* \[ [TIMOB-27685](https://jira.appcelerator.org/browse/TIMOB-27685) [TIMOB-27298](https://jira.appcelerator.org/browse/TIMOB-27298) [TIMOB-27297](https://jira.appcelerator.org/browse/TIMOB-27297) \] - update hyperloop for gradle ([13f78c4](https://github.com/appcelerator/titanium_mobile/commit/13f78c4a3023ba997e55267b70c039e1331af682))

* \[ [TIMOB-24517](https://jira.appcelerator.org/browse/TIMOB-24517) \] - Android: Add APK signature scheme v2 support

* \[ [TIMOB-25896](https://jira.appcelerator.org/browse/TIMOB-25896) \] - Android: Add Kotlin language support for modules

* \[ [TIMOB-26434](https://jira.appcelerator.org/browse/TIMOB-26434) \] - Android: Support building "app bundles" ( [5d93fea](https://github.com/appcelerator/titanium_mobile/commit/5d93fea7d73b59c510e730167508f789932f3fa2) )

* \[ [TIMOB-27696](https://jira.appcelerator.org/browse/TIMOB-27696) \] - Android: Add "gradle.properties" support to app builds

* \[ [TIMOB-19300](https://jira.appcelerator.org/browse/TIMOB-19300) \] - Android: Change to use Gradle instead of Ant for build

* \[ [TIMOB-27178](https://jira.appcelerator.org/browse/TIMOB-27178) \] - Android: Update V8 runtime to 7.8 ([9006b4d](https://github.com/appcelerator/titanium_mobile/commit/9006b4d58b8fc827545e7fcbc5ff740bf49fe939))

* \[ [TIMOB-27687](https://jira.appcelerator.org/browse/TIMOB-27687) \] - Android: Update V8 runtime to 7.9

* \[ [TIMOB-27242](https://jira.appcelerator.org/browse/TIMOB-27242) \] - Android: Remove getter and setter warnings

* \[ [TIMOB-27297](https://jira.appcelerator.org/browse/TIMOB-27297) \] - Android: Allow Hyperloop to access Titanium's core Java classes

* \[ [TIMOB-27298](https://jira.appcelerator.org/browse/TIMOB-27298) \] - Android: Hyperloop should allow access to a Java inner class within an inner class

* \[ [TIMOB-27472](https://jira.appcelerator.org/browse/TIMOB-27472) \] - Android: Add Java 8 support ([5ce5e72](https://github.com/appcelerator/titanium_mobile/commit/5ce5e72b3a90803fc4b54555cd0e8b900c756d9e))

* \[ [TIMOB-27487](https://jira.appcelerator.org/browse/TIMOB-27487) \] - Android: Build x86\_64 module libraries

* \[ [TIMOB-27718](https://jira.appcelerator.org/browse/TIMOB-27718) \] - Android: Log build warnings if "res" files have invalid names ([e7df669](https://github.com/appcelerator/titanium_mobile/commit/e7df669db667e1aaf22b57d84b0a2bad8750783b))

* \[ [TIMOB-27724](https://jira.appcelerator.org/browse/TIMOB-27724) \] - Android: Build "ti.map" module with gradle

* \[ [TIMOB-27725](https://jira.appcelerator.org/browse/TIMOB-27725) \] - Android: Build "ti.facebook" module with gradle

* \[ [TIMOB-27726](https://jira.appcelerator.org/browse/TIMOB-27726) \] - Android: Build "ti.identity" module with gradle

* \[ [TIMOB-27727](https://jira.appcelerator.org/browse/TIMOB-27727) \] - Android: Build "appcelerator.encrypteddatabase" module with gradle

* \[ [TIMOB-27728](https://jira.appcelerator.org/browse/TIMOB-27728) \] - Android: Build "cloudpush" module with gradle

* \[ [TIMOB-27729](https://jira.appcelerator.org/browse/TIMOB-27729) \] - Android: Build "ti.playservices" module with gradle

* \[ [TIMOB-27730](https://jira.appcelerator.org/browse/TIMOB-27730) \] - Android: Build "ti.webdialog" module with gradle

* \[ [TIMOB-27737](https://jira.appcelerator.org/browse/TIMOB-27737) \] - Android: Build "analytics" module with gradle

* Android: Update "titanium-verify" for SDK 9.0.0 ([e812d00](https://github.com/appcelerator/titanium_mobile/commit/e812d003c93a7adef02aa2b65362318fd073ee84))

* \[ [TIMOB-27685](https://jira.appcelerator.org/browse/TIMOB-27685) \] - Android: Update hyperloop module to support gradle dependencies

* \[ [TIMOB-27686](https://jira.appcelerator.org/browse/TIMOB-27686) \] - Android: Auto-download build system dependencies via gradle ([57a6b49](https://github.com/appcelerator/titanium_mobile/commit/57a6b4952a192b6b52f4f8bddef43c126c52a5e3))

* \[ [TIMOB-27752](https://jira.appcelerator.org/browse/TIMOB-27752) \] - Android: Exclude x86 and x86\_64 architectures in "production" builds by default

* \[ [TIMOB-25240](https://jira.appcelerator.org/browse/TIMOB-25240) \] - Android: Improve incremental build times

* \[ [TIMOB-25726](https://jira.appcelerator.org/browse/TIMOB-25726) \] - Android: Ensure device's installed Google Play Services is available/updated on app startup

* \[ [TIMOB-25889](https://jira.appcelerator.org/browse/TIMOB-25889) \] - Android: Emulator builds should not add additional permissions

* \[ [TIMOB-26472](https://jira.appcelerator.org/browse/TIMOB-26472) \] - Android: Replace support libraries with AndroidX ([0558c28](https://github.com/appcelerator/titanium_mobile/commit/0558c28b54dfb195d7a5c22851060e416e9811f8))

### iOS platform

* \[ [TIMOB-25847](https://jira.appcelerator.org/browse/TIMOB-25847) \] - iOS: Accessibility support for Dynamic Type ( [8045620](https://github.com/appcelerator/titanium_mobile/commit/8045620c933c007d77079e87beeeadddcc0f93f6) )

* \[ [TIMOB-25032](https://jira.appcelerator.org/browse/TIMOB-25032) \] - iOS: Resolve asset-catalog hashes back to real names, fail build when detecting duplicates

* \[ [TIMOB-26837](https://jira.appcelerator.org/browse/TIMOB-26837) \] - iOS: "extendSafeArea" false should not allow status bar to overlap content on iOS 10 and older

## BREAKING CHANGES

### Multiple platforms

* \[ [TIMOB-27605](https://jira.appcelerator.org/browse/TIMOB-27605) \] - Drop support for Node 8, Make Node.JS 10.13 new minimum ( [f35cf0e](https://github.com/appcelerator/titanium_mobile/commit/f35cf0ebfc880d0161f65ca075fdd275a2ecb824) )

* \[ [TIMOB-27650](https://jira.appcelerator.org/browse/TIMOB-27650) \] - Remove deprecated modules from SDK distribution (ti.touchid and ti.safaridialog)

* \[ [TIMOB-25578](https://jira.appcelerator.org/browse/TIMOB-25578) \] - Remove deprecated Geolocation values, only use new ones ([3d32e33](https://github.com/appcelerator/titanium_mobile/commit/3d32e334987e67967c9ef0b513fe88b220ac9e19))

### Android platform

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.Contacts requestAuthorization method (in favor of requestContactsPermissions)

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.Contacts getPersonByID method (in favor of getPersonByIdentifier)

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed the create, destroy, pause, restart, resume, start, and stop events on Ti.Android.Activity (use callback properties) ([0221467](https://github.com/appcelerator/titanium_mobile/commit/02214671f1897371b12894e6e8e5654b67697e6d))

* \[ [TIMOB-27618](https://jira.appcelerator.org/browse/TIMOB-27618) \] - Removed Ti.UI.WebView.onStopBlacklistedUrl event. Please use blacklisturl event instead ([85b32d8](https://github.com/appcelerator/titanium_mobile/commit/85b32d8b110b56e1d6d8b14276a9f254a8d5f00d))

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed deprecated Ti.UI.Window.android:\* events ([f01055c](https://github.com/appcelerator/titanium_mobile/commit/f01055c5038b2da748e3aaecc5819ebcc09abb98))

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed deprecated webview error event properties: errorCode and message ([5144ac9](https://github.com/appcelerator/titanium_mobile/commit/5144ac9646fd9b4ce4e9685238cbcd8de793943f))

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed deprecated tcp error callback errorCode property ([7e405aa](https://github.com/appcelerator/titanium_mobile/commit/7e405aa9449554c81d1014666c57d8497541161a))

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed deprecated stream callback properties ([4b48db8](https://github.com/appcelerator/titanium_mobile/commit/4b48db872f7389218072a07c8734781cc41e7bcb))

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed the LINKIFY\_\* constants living in Android namespace ([7c88912](https://github.com/appcelerator/titanium_mobile/commit/7c88912487fbc9aa84b73e324f8eda25540aa148))

* \[ [TIMOB-27758](https://jira.appcelerator.org/browse/TIMOB-27758) \] - Android: Modules with AARs in "lib" directory should trigger a build failure in 9.0.0

### iOS platform

* \[ [TIMOB-27497](https://jira.appcelerator.org/browse/TIMOB-27497) \] - Remove support of Xcode 8 ([d5ede39](https://github.com/appcelerator/titanium_mobile/commit/d5ede39dfb7023c86bd24932166cb390c8e97b69))

* \[ [TIMOB-27641](https://jira.appcelerator.org/browse/TIMOB-27641) \] - Drop support for iOS 9

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.UI.TextField paddingLeft and paddingRight properties (in favor of padding.left and padding.right)

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.Media requestAudioPermissions method (in favor of requestAudioRecorderPermissions)

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.Media requestAuthorization and requestCameraAccess methods (in favor of requestAudioRecorderPermissions and requestCameraPermissions)

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.Contacts requestAuthorization method (in favor of requestContactsPermissions)

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.Contacts getGroupByID and getPersonByID methods (in favor of getGroupByIdentifier and getPersonByIdentifier)

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.UI.Tab blur/focus events in favor of selected/unselected

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.UI.TabGroup selected/unselected events in favor of focus/blur

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed the BLEND\_MODE\_\* constants on Ti.UI.iOS namespace (use constants on Ti.UI namespace) ([3c2a0ec](https://github.com/appcelerator/titanium_mobile/commit/3c2a0ec5c9b45c30b918c3a116b252ee3077b9bd))

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed Ti.UI.TextArea, Ti.UI.TextField appearance property (in favor of keyboardAppearance)

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed deprecated Ti.Media.cameraAuthorizationStatus property ([cbf994e](https://github.com/appcelerator/titanium_mobile/commit/cbf994e09f30a18afebd5607695d157e88d9caf0))

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed deprecated ipad popover properties: height, width, leftNavButton and rightNavButton ([14cd341](https://github.com/appcelerator/titanium_mobile/commit/14cd341a3922a26d8279e66d8e41aa0ac2686dd4))

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed deprecated tcp error callback errorCode property ([6f4814d](https://github.com/appcelerator/titanium_mobile/commit/6f4814d563b4aa2c854ef5938746b7792e5c01ad))

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] - Removed deprecated stream callback properties ([f4de7a9](https://github.com/appcelerator/titanium_mobile/commit/f4de7a9017dab69c0ec92e3b1bd7a675085c7c4a))

* \[ [TIMOB-27619](https://jira.appcelerator.org/browse/TIMOB-27619) \] - Remove Ti.Network.createTCPSocket, use Ti.Network.Socket.TCP in it's place. ( [9647181](https://github.com/appcelerator/titanium_mobile/commit/9647181250f984db9a70b833486191b9fa52c2ca) )

* \[ [TIMOB-27619](https://jira.appcelerator.org/browse/TIMOB-27619), [TIMOB-27076](https://jira.appcelerator.org/browse/TIMOB-27076) \] - Ti.Network.BonjourService methods have become asynchronous. Use optional callback arguments or event listeners to react to results.

* \[ [TIMOB-26201](https://jira.appcelerator.org/browse/TIMOB-26201) \] -Removed the updateLayout(), startLayout() and finishLayout() methods on Ti.UI.View ([54e2eeb](https://github.com/appcelerator/titanium_mobile/commit/54e2eeb3ce8a309312efcd9cecd2190493b7704c))

## Known Issues

### Android

* \[ [TISTUD-9204](https://jira.appcelerator.org/browse/TISTUD-9204) \] - Android: Module packaging disabled in Studio for module created with SDK supporting gradle

    * For now, Android modules can be packaged from the command line using `appc run -p android` from the `android` folder of your module

## SDK modules versions

### Android and iOS

| Module | Android version | iOS version |
| --- | --- | --- |
| facebook | 9.0.0 | 7.0.1 |
| ti.cloudpush | 7.0.0 | n/a |
| ti.map | 5.0.1 | 3.3.0 |
| ti.webdialog | 2.0.0 | 1.1.0 |
| ti.playservices | 17.1.1 | n/a |
| ti.identity | 3.0.1 | 1.1.0 |
| urlSession | n/a | 2.2.0 |
| ti.coremotion | n/a | 2.0.1 |
| ti.applesignin | n/a | 1.1.1 |

### CommonJS

| Module | Version |
| --- | --- |
| ti.cloud | 3.2.11 |

### Hyperloop

| Module | Version |
| --- | --- |
| hyperloop | 5.0.0 |
