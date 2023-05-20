---
title: Titanium SDK 8.3.0.GA - 25 November 2019
weight: '20'
---

# Titanium SDK 8.3.0.GA - 25 November 2019

## About this release

Titanium SDK 8.3.0 is a minor release of the SDK, addressing high-priority issues from previous releases.

As of this release, Titanium SDK 8.2.x will not receive updates more than six months after the release of 8.3.0 (2020-05-25). Any needed fixes will be in 8.3.x or later supported releases within the 8.x branch. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html)and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 will be the new minimum supported version with SDK 9.0.0.
:::

## Community Credits

* Sergey Volkov

    * add missing comma ([f08041e](https://github.com/tidev/titanium-sdk/commit/f08041e6c9914a1b1f3a1ec559b7b53079a4933a))

    * [TIMOB-26463](https://jira-archive.titaniumsdk.com/TIMOB-26463) - accessibility properties SDK version ([72a57ef](https://github.com/tidev/titanium-sdk/commit/72a57ef247abb0bedb0288260ac300385cb3d518))

    * [TIMOB-26463](https://jira-archive.titaniumsdk.com/TIMOB-26463) - add accessibility properties to MenuItem ([9f3c6b7](https://github.com/tidev/titanium-sdk/commit/9f3c6b75c3d71dd65ca7cd33383bc90d3e565d6f))

* Hans Knöchel

    * [TIMOB-27450](https://jira-archive.titaniumsdk.com/TIMOB-27450) - fix webview basic authentication ([1553fcd](https://github.com/tidev/titanium-sdk/commit/1553fcdf0f688f106c32fc72a3765e9fba962ac5))

    * [TIMOB-27272](https://jira-archive.titaniumsdk.com/TIMOB-27272) - expose Ti.UI.Slider „tintColor“ and „trackTintColor“ ([7238427](https://github.com/tidev/titanium-sdk/commit/723842717199b1244162a7b14a9874ed46103d42))

    * properly set tint-color on image-view ([7d96b81](https://github.com/tidev/titanium-sdk/commit/7d96b8132a8569818c78d656fd13463deceab354))

* Giorgio Mandolini

    * [TIMOB-27396](https://jira-archive.titaniumsdk.com/TIMOB-27396) - inverted condition on baseURL construction ([a59cf84](https://github.com/tidev/titanium-sdk/commit/a59cf84fb19d96a48589be4f59cc215ac490dc2d))

* Michael Gangolf

    * fix permission example for Android 8 ([be984a1](https://github.com/tidev/titanium-sdk/commit/be984a177c3c279eaf79f6206dff2aa04ed6b56b))

    * [TIMOB-7786](https://jira-archive.titaniumsdk.com/TIMOB-7786)update log strings ([1fc77a1](https://github.com/tidev/titanium-sdk/commit/1fc77a1a1b2355b3b8bf93dfb332edeceb40e054))

    * reset before doing a release (#10800) ([50c645e](https://github.com/tidev/titanium-sdk/commit/50c645e57f563e8499ff318e23e5dd18f920ecd8))

    * [TIMOB-27283](https://jira-archive.titaniumsdk.com/TIMOB-27283) - add contentSize to Ti.UI.ScrollView scroll event ([6ffd9d4](https://github.com/tidev/titanium-sdk/commit/6ffd9d4ce217839017ef66ccf7bc10e9f494e399))

* teunklijn

    * [TIMOB-27165](https://jira-archive.titaniumsdk.com/TIMOB-27165) - localnotificationaction event contains notification id instead of the action id ([11956d2](https://github.com/tidev/titanium-sdk/commit/11956d2a7364f5900f43f68736b333bc1e40dc04))

## Bug Fixes

### Android platform

* allow requestLegacyExternalStorage attribute ([097c5af](https://github.com/tidev/titanium-sdk/commit/097c5af442fdd278db87246fbd8640460f23e6ca))

* allow WebView.setData() to decrypt assets ([1365850](https://github.com/tidev/titanium-sdk/commit/13658500189a8de1c8fa9773518fbe0ee7947036))

* [TIMOB-27512](https://jira-archive.titaniumsdk.com/TIMOB-27512) - amend constants for showSoftKeyboard() ([ae3da3a](https://github.com/tidev/titanium-sdk/commit/ae3da3a64997e00f18beace9498e0287f8362da1))

* calculate correct stream size ([dbfa501](https://github.com/tidev/titanium-sdk/commit/dbfa5011ae0048ca77c45ae3c3428e4ed5120342))

* call WebView.stopLoading() from main thread ([438a43a](https://github.com/tidev/titanium-sdk/commit/438a43a9ec8d244f358af347b44bb7bb0d28fc5b))

* [TIMOB-27496](https://jira-archive.titaniumsdk.com/TIMOB-27496) - do not set properties on recycled proxy ([e4459a1](https://github.com/tidev/titanium-sdk/commit/e4459a12c6767466c702f9c734f240c54a40731f))

* exclude JS in HTML files from processing ([bc45db4](https://github.com/tidev/titanium-sdk/commit/bc45db4d43dc763282b5bf6a6710be362c205b82))

* fix dialog without selectedIndex reusage ([a2a048f](https://github.com/tidev/titanium-sdk/commit/a2a048fda702bfaee61e2e0f6f9dc85aed9983f5))

* [TIMOB-27238](https://jira-archive.titaniumsdk.com/TIMOB-27238) - fix onlink callback being creation only ([3a46b79](https://github.com/tidev/titanium-sdk/commit/3a46b793111f054cf78babad6c9e2c5fcdaca4e7))

* [TIMOB-27293](https://jira-archive.titaniumsdk.com/TIMOB-27293) - fix onprogress payload value for data other than HashMap ([a190a5d](https://github.com/tidev/titanium-sdk/commit/a190a5dc743d4076b6128db83f7c2ff77588c896))

* fix reusing a dialog with a new "parent" window ([a8d06c3](https://github.com/tidev/titanium-sdk/commit/a8d06c35a02d77698ac6fca71e7f118e19108906))

* fix views with border and transparency ([95fed44](https://github.com/tidev/titanium-sdk/commit/95fed440df6051018c73d17e01a0649af820b317))

* fixes background color animation with borders ([86b3699](https://github.com/tidev/titanium-sdk/commit/86b3699667d89077e38f7ebf60aaef867ff95b7e))

* focus on TextInputEditText view ([8192ea2](https://github.com/tidev/titanium-sdk/commit/8192ea2ef626a427d9599324d9c00d8eec785793))

* [TIMOB-27302](https://jira-archive.titaniumsdk.com/TIMOB-27302) - guard for tab counts limit for bottom style ([6a2aa4d](https://github.com/tidev/titanium-sdk/commit/6a2aa4d7d5101824741fe79a77ffa2e0e48fe904))

* [TIMOB-27191](https://jira-archive.titaniumsdk.com/TIMOB-27191) - handle file: URIs without // after scheme ([f4cf7c6](https://github.com/tidev/titanium-sdk/commit/f4cf7c6e97fd19f6c7e7141114a78cafb3e1c7e1))

* [TIMOB-27108](https://jira-archive.titaniumsdk.com/TIMOB-27108) - HTTPClient "responseData" blob returns 0 width/height for images over 512kb ([722d6bc](https://github.com/tidev/titanium-sdk/commit/722d6bc04c79b7831f4fa1ae239d7fb54398e75c))

* [TIMOB-27271](https://jira-archive.titaniumsdk.com/TIMOB-27271) - resuming with intent "FLAG\_ACTIVITY\_MULTIPLE\_TASK" can hang the app ([632c439](https://github.com/tidev/titanium-sdk/commit/632c4398bc71c56be81ffff47422b5686fbb14d1))

* performance issue with deeply nested views as of 7.5.0 ([057dad3](https://github.com/tidev/titanium-sdk/commit/057dad3a09c6b041d6ce3ca38a76bca2f6254fb3))

* prevent conflict with TextField.isSingleLine() ([20ae5fd](https://github.com/tidev/titanium-sdk/commit/20ae5fde99a0d8d29b7721d15fccd2b3faf88fcf))

* [TIMOB-27118](https://jira-archive.titaniumsdk.com/TIMOB-27118) - prevents TabGroup duplicate close event firing ([34714b8](https://github.com/tidev/titanium-sdk/commit/34714b854c6faf47d85730ca15e02edcdd5b1eb0))

* [TIMOB-27177](https://jira-archive.titaniumsdk.com/TIMOB-27177) - regression where closing root window from child window causes app exit issues as of 8.0.1 ([be7b776](https://github.com/tidev/titanium-sdk/commit/be7b77663bd5312a38b025ef70d6870312060d2d))

* release string ([0e21a4f](https://github.com/tidev/titanium-sdk/commit/0e21a4f634008eaffd0b0263d5740fcfdc84fcf0))

* support Geolocation altitudeAccuracy ([ac32e75](https://github.com/tidev/titanium-sdk/commit/ac32e75de7cd7d7c2ab23e539ca223800129d13f))

* ui module dependency path ([3b9bac8](https://github.com/tidev/titanium-sdk/commit/3b9bac8db0f802825c6ff32848cc4289a3551168))

* [TIMOB-27190](https://jira-archive.titaniumsdk.com/TIMOB-27190) - up button flickering when clicked in NavigationWindow ([69dfda5](https://github.com/tidev/titanium-sdk/commit/69dfda5ef5eba65df20cbe979d0bfa912bd4aaa6))

* [TIMOB-27314](https://jira-archive.titaniumsdk.com/TIMOB-27314) - update titanium\_prep windows binaries ([978d625](https://github.com/tidev/titanium-sdk/commit/978d625b7b1fb730b53ba8c15929f64b868e91d8))

* [TIMOB-27193](https://jira-archive.titaniumsdk.com/TIMOB-27193) - use specified Ti.Filesystem.File path to createFile() ([37aace6](https://github.com/tidev/titanium-sdk/commit/37aace6017ec9a4b4ca49aff192c27a64c01e7bd))

* [TIMOB-27444](https://jira-archive.titaniumsdk.com/TIMOB-27444) - video player with border fails to render as of 8.3.0 ([364724b](https://github.com/tidev/titanium-sdk/commit/364724b0c994b15a4362b97ad2fb946f7fc77286))

* [TIMOB-27610](https://jira-archive.titaniumsdk.com/TIMOB-27610) - Debugger does not hit breakpoint for an alloy app on a device ([https://github.com/tidev/titanium\_mobile/pull/11344](https://github.com/tidev/titanium-sdk/pull/11344))

* [TIMOB-27604](https://jira-archive.titaniumsdk.com/TIMOB-27604) - Build to android on windows fails with issue related to ti.cloak ([https://github.com/tidev/titanium\_mobile/pull/11341](https://github.com/tidev/titanium-sdk/pull/11341))

* [TIMOB-27602](https://jira-archive.titaniumsdk.com/TIMOB-27602) - Liveview crashes application and throws error before reloading ([https://github.com/tidev/titanium\_mobile/pull/11338](https://github.com/tidev/titanium-sdk/pull/11338))

* [TIMOB-27606](https://jira-archive.titaniumsdk.com/TIMOB-27606) - Remote encryption policy broken in latest 8.3.0 ([b2cd676](https://github.com/tidev/titanium-sdk/pull/11337/commits/b2cd67653155b8234a219c069b582ad0a3cdf5ae))

### Multiple platforms

* fix typo and add tests for weak map/set ([bc9faba](https://github.com/tidev/titanium-sdk/commit/bc9faba2f5a8ee7ba1a5470399f66a17a7846346))

* [TIMOB-27496](https://jira-archive.titaniumsdk.com/TIMOB-27496) - do not modify original ListView proxy ([b3a0306](https://github.com/tidev/titanium-sdk/commit/b3a0306d093d1550979f6851478eeec4a44b8c61))

* Change from ifdef to if due to variable always being defined ([da45e5f](https://github.com/tidev/titanium-sdk/commit/da45e5f84f348cfb0dde1911dc7b14a0455a133e))

* disable bigint type checks ([cbb8165](https://github.com/tidev/titanium-sdk/commit/cbb81651ffd9c0f54a1d487888523c446d3f69c3))

* rename isRegexp usage to isRegExp ([8c1e265](https://github.com/tidev/titanium-sdk/commit/8c1e265c88270436476668074d3b0ab7c7d8c7d7))

* update Hyperloop to v4.0.4 for iOS 13 compatibility ([d1cc406](https://github.com/tidev/titanium-sdk/commit/d1cc406abd29662e4e6e1b674caa95a73e8dc95f))

* use correct should assertion syntax ([00b9845](https://github.com/tidev/titanium-sdk/commit/00b98453cf948338fba3986def6cfc057e105508))

### iOS platform

* added xcworkspacedata file generation ([75f3881](https://github.com/tidev/titanium-sdk/commit/75f388128a5f6b9035e1c205ff57cd025995eae2))

* [TIMOB-27403](https://jira-archive.titaniumsdk.com/TIMOB-27403) - also lookup semnantic colors in correct location for classic ([8ecfb1e](https://github.com/tidev/titanium-sdk/commit/8ecfb1e95397c7257c5f2ec71446b2ecb2a3e7fe))

* app crashes when error happens in fetching location ([6100379](https://github.com/tidev/titanium-sdk/commit/610037935b92cb26760b2cafdd5e7711b5bfc51d))

* [TIMOB-27515](https://jira-archive.titaniumsdk.com/TIMOB-27515) - avoid crash when openStream fails ([d16b69f](https://github.com/tidev/titanium-sdk/commit/d16b69f29a3473f30d0907ce672e02bae7c81ecd))

* [TIMOB-26453](https://jira-archive.titaniumsdk.com/TIMOB-26453) - can not show fullscreen modal windows anymore ([1e3d161](https://github.com/tidev/titanium-sdk/commit/1e3d161928136583d8d997b6bb629a495d1c8feb))

* close window handling from presentationController’s delegate method ([40154d7](https://github.com/tidev/titanium-sdk/commit/40154d7b68053f68593c804eacd5221a92b43edd))

* console.log does not log properly if it has multiple arguments ([a57701d](https://github.com/tidev/titanium-sdk/commit/a57701dafdc34e65470cb3921cc9302c5273dcd4))

* [TIMOB-27386](https://jira-archive.titaniumsdk.com/TIMOB-27386) - correctly decode device token for ios 13 compatibility ([715ef61](https://github.com/tidev/titanium-sdk/commit/715ef612ac3bfe6ece73bdfd8dc80b4fe4867765))

* fix TiBase header to order macros properly, re-use macros ([ef26648](https://github.com/tidev/titanium-sdk/commit/ef266481f9588bf74dac4fd9e770eb1940f368a9))

* [TIMOB-27354](https://jira-archive.titaniumsdk.com/TIMOB-27354) - guard source property and removed NSNull if it is nil ([80cb018](https://github.com/tidev/titanium-sdk/commit/80cb01890f32a94df07b702ce133a21db551455d))

* hide dimming view ([3d492b7](https://github.com/tidev/titanium-sdk/commit/3d492b727d37548732d13afb8d43da527611fcfd))

* hideShadow handling for iOS 13 ([3b925d3](https://github.com/tidev/titanium-sdk/commit/3b925d3b89e0d59bf89b846bfa127e9656746dbf))

* [TIMOB-27395](https://jira-archive.titaniumsdk.com/TIMOB-27395) - include new iphone models into os extension ([b3a720a](https://github.com/tidev/titanium-sdk/commit/b3a720a415e577d1a93f5d49b3ad4498bdd67a53))

* [TIMOB-27503](https://jira-archive.titaniumsdk.com/TIMOB-27503) - ipad popover crash ([4a2afb9](https://github.com/tidev/titanium-sdk/commit/4a2afb987872f24b6fa987b7cc2b4a944ae299b3))

* non large title navigation bars show default navigation bar ([11aef9c](https://github.com/tidev/titanium-sdk/commit/11aef9cc1069c395e8f9a45570633e40dd80f76e))

* remove additional gc protection once proxy is remembered ([2ac7d80](https://github.com/tidev/titanium-sdk/commit/2ac7d80fba4418ddd0187b1b22c9f49b1ede2930))

* select a valid ios sim xcodebuild destination ([65527be](https://github.com/tidev/titanium-sdk/commit/65527be0e66071b53a35f5eee80bbc64caad1928))

* [TIMOB-27488](https://jira-archive.titaniumsdk.com/TIMOB-27488) - set dest to generic iOS sim ([87bf091](https://github.com/tidev/titanium-sdk/commit/87bf091e69b2b305072e72edd6791d57d400d25c))

* [TIMOB-27480](https://jira-archive.titaniumsdk.com/TIMOB-27480) - setting last index of TabbedBar doesn't work ([afb2a49](https://github.com/tidev/titanium-sdk/commit/afb2a494707ec15605d560d6d38b20c8646df226))

* sf symbol handling for application shortcut ([28907e0](https://github.com/tidev/titanium-sdk/commit/28907e0c3808ca019ee02cdc167d6ef4314f0b0b))

* [TIMOB-27410](https://jira-archive.titaniumsdk.com/TIMOB-27410) - update objc module template clang settings ([da07971](https://github.com/tidev/titanium-sdk/commit/da079713a65ad9a257b67d18c9222bac92e58c3a))

* [MOD-2542](https://jira-archive.titaniumsdk.com/MOD-2542) - update ti.applesigning module to 1.1.1 ([1571e40](https://github.com/tidev/titanium-sdk/commit/1571e400817a89101360ffcc5e97868708e3da1c))

* [TIMOB-27484](https://jira-archive.titaniumsdk.com/TIMOB-27484) - update to core-js 3 ([4918823](https://github.com/tidev/titanium-sdk/commit/4918823b5865cfae6deaa8c4cf6bd71bf08e4e39))

* verify module class type ([3b12015](https://github.com/tidev/titanium-sdk/commit/3b120151ade168e4ffacc58534fd09d5e8881ef2))

* volume event handling ([c697822](https://github.com/tidev/titanium-sdk/commit/c6978221163cb9a628859b39042fa697b6065471))

* [TIMOB-27385](https://jira-archive.titaniumsdk.com/TIMOB-27385) - wkwebview is stripping out = characters in cookies ([1bd852b](https://github.com/tidev/titanium-sdk/commit/1bd852b5f29963c3455da35106fd18a74fc64c80))

* [TIMOB-27583](https://jira-archive.titaniumsdk.com/TIMOB-27583) - Crash with MobileIron wrapped app ([https://github.com/tidev/titanium\_mobile/pull/11356](https://github.com/tidev/titanium-sdk/pull/11356))

## Features

### Android platform

* add new constants for video scaling ([16f04c5](https://github.com/tidev/titanium-sdk/commit/16f04c5a2437a948b6cbd3895421035a4c180983))

* add support for TabGroup in NavigationWindow ([a886ccd](https://github.com/tidev/titanium-sdk/commit/a886ccdacbc5beb0e981aa4d54e0d9e1de0fa126))

* [TIMOB-26542](https://jira-archive.titaniumsdk.com/TIMOB-26542) - Added Ti.App "close" event support ([44a5968](https://github.com/tidev/titanium-sdk/commit/44a596834c3be1f2c4725461901584a195e861ba))

* [TIMOB-26953](https://jira-archive.titaniumsdk.com/TIMOB-26953) - implement foregroundServiceType parameter ([9ca5864](https://github.com/tidev/titanium-sdk/commit/9ca5864439e2b1c2e4e3ff71db983938adb313b7))

* target api level 29 by default ([4d73a63](https://github.com/tidev/titanium-sdk/commit/4d73a63e9562b25a26c1015278d4bd13b798a80e))

### Multiple platforms

* enable color mode for inspect ([78a15ec](https://github.com/tidev/titanium-sdk/commit/78a15ecbdb881de1a7d5ceb68c2d7ba616546aa8))

* add custom inspect behavior for buffers ([1feaf6d](https://github.com/tidev/titanium-sdk/commit/1feaf6d272f7d4b0ee69be123c43ab3cd94bd119))

* add method to convert Buffer to Ti.Buffer ([32da366](https://github.com/tidev/titanium-sdk/commit/32da366fd1b2bc1b62de6ffdab77305ffd9ed590))

* [TIMOB-18583](https://jira-archive.titaniumsdk.com/TIMOB-18583) - node compatible fs module ([74d07c1](https://github.com/tidev/titanium-sdk/commit/74d07c1d26eda73397a2c1805425ee0b376ea541))

* [TIMOB-27286](https://jira-archive.titaniumsdk.com/TIMOB-27286) - add string\_decoder module ([4c5ac3d](https://github.com/tidev/titanium-sdk/commit/4c5ac3df760c2cfe9b244374582ab329b8f90fd3))

* node 12 compatible util module and improved console ([7f19662](https://github.com/tidev/titanium-sdk/commit/7f19662607d0aae7a43a3e4de79d591889c9b659))

* [MOD-2545](https://jira-archive.titaniumsdk.com/MOD-2545) - update to 3.3.0-ios, 4.5.0-android module releases ([d0f0cb9](https://github.com/tidev/titanium-sdk/commit/d0f0cb98eb768aee5b90753971246f6070ab5b71))

### iOS platform

* [MOD-2534](https://jira-archive.titaniumsdk.com/MOD-2534) - update facebook module to 7.0.0 ([16f4d19](https://github.com/tidev/titanium-sdk/commit/16f4d190c1c5bbf02d07f8e528ab6c019addb15e))

## Performance Improvements

### Android platform

* implement ability to pre-cache common js assets ([c3806d0](https://github.com/tidev/titanium-sdk/commit/c3806d041c945044e4b6a1ca3ab05584ee3b2a15))

* remove usage of getResourceAsStream() ([a4c2b7a](https://github.com/tidev/titanium-sdk/commit/a4c2b7ae919c0b8de1b9e0c4c2790abe0379194f))

* refactor asset handling ([c0b4ea1](https://github.com/tidev/titanium-sdk/pull/11045/commits))

![b8c7141874a49157a4575aec38f21d59ddf0c7a57df0c36920070a80973aa301](./b8c7141874a49157a4575aec38f21d59ddf0c7a57df0c36920070a80973aa301.png)

## SDK modules versions

### Android and iOS

| Module | Android version | iOS version |
| --- | --- | --- |
| urlSession | n/a | 2.2.0 |
| facebook | 8.0.0 | 7.0.0 |
| ti.coremotion | n/a | 2.0.1 |
| ti.map | 4.5.0 | 3.3.0 |
| ti.safaridialog | n/a | 1.1.1 |
| ti.webdialog | 1.1.0 | 1.1.0 |
| ti.touchid | 3.0.1 | 2.1.4 |
| ti.identity | 2.1.0 | 1.0.6 |
| ti.applesignin | n/a | 1.1.1 |
| ti.cloudpush | 6.0.1 | n/a |
| ti.playservices | 16.1.3 | n/a |

### CommonJS

| Module | Version |
| --- | --- |
| ti.cloud | 3.2.11 |

### Hyperloop

| Module | Version |
| --- | --- |
| hyperloop | 4.0.4 |
