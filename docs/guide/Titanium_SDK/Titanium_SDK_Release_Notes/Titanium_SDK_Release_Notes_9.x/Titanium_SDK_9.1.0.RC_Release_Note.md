---
title: Titanium SDK 9.1.0.RC - 14 August 2020
weight: '100'
---

# Titanium SDK 9.1.0.RC - 14 August 2020

## About this release

Titanium SDK 9.1.0 is a minor release of the SDK, addressing high-priority issues from previous releases, as well as the addition of new features/functionality/APIs.

As of this release, Titanium SDK 9.0.x will not receive updates more than six months after the release of 9.1.0 (2021-02-14). Any needed fixes will be in 9.1.x or later supported releases within the 9.x branch. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 will be the new minimum supported version with SDK 9.0.0.
:::
::: danger ❗️ Warning
Deprecation Notice: The next major release of the Titanium CLI, version 6.0.0, will no longer support plugins and hooks for commands other than "appc ti clean", "ti clean", "appc run", and "ti build". Titanium CLI v6 will have a new plugin system with a new hook system and it will be incompatible with Titanium CLI v5 plugins and hooks. Please refer to [TIMOB-27233](https://jira-archive.titaniumsdk.com/TIMOB-27233) and [TIMOB-27255](https://jira-archive.titaniumsdk.com/TIMOB-27255) for more information.
:::
::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, Windows platform will no longer be supported and has been removed from distribution in the SDK. Customers on Pro and Enterprise plans may continue to request critical fixes on SDK 8.x releases until August 18, 2020.
:::

## Overview

Titanium SDK 9.1.0's Notable new features include: [Webpack project support](https://jira-archive.titaniumsdk.com/TIMOB-27428), `Intl`JS APIs on both major platforms, Cross-platform Dark/Light mode theming, Named/Semantic Colors, new `focused`/`closed` query methods on some UI components, cross-platform parity for `Ti.UI.Shortcut`, and `Ti.UI.View.borderRadius` extended to support 2 or 4 values (in addition to single value existing support) to allow for custom border radii (rounded corners).

## Community Credits

* Michael Gangolf

    * [TIMOB-27879](https://jira-archive.titaniumsdk.com/TIMOB-27879) - add getScaledTouchSlop() to ListView ([901f991](https://github.com/tidev/titanium-sdk/commit/901f991c242e6d81b999f88ea2dfa2b69f03e57c))

    * [TIMOB-27977](https://jira-archive.titaniumsdk.com/TIMOB-27977) - add "isTrusted" property to Slider "change" event ([8e96445](https://github.com/tidev/titanium-sdk/commit/8e964456613c956661f6769b9af18e2c1bfe393a))

    * [TIMOB-25633](https://jira-archive.titaniumsdk.com/TIMOB-25633) - adding androidback property to showCamera ([b890f7c](https://github.com/tidev/titanium-sdk/commit/b890f7c7743b8e38292c5d669ed502996b665a20))

    * [TIMOB-27855](https://jira-archive.titaniumsdk.com/TIMOB-27855) - animate color ([4fa4e19](https://github.com/tidev/titanium-sdk/commit/4fa4e191f1ec369554b39f596890b5e64629d421)) and elevation ([38a82ed](https://github.com/tidev/titanium-sdk/commit/38a82ed829e57b2c155d07d8856ed92a0a6d9c78))

    * fix OptionDialog example ([c0b13a1](https://github.com/tidev/titanium-sdk/commit/c0b13a1de7999608d79e5a753ab512e964bfa263) and [6b99cf9](https://github.com/tidev/titanium-sdk/commit/6b99cf9fb026658edafd452da355a7b65c76c9bc))

    * [TIMOB-27834](https://jira-archive.titaniumsdk.com/TIMOB-27834) - navigationWindow open/close event ([ec1976a](https://github.com/tidev/titanium-sdk/commit/ec1976a66127b6de024bb4fe6d20207e46fdcb4c))

* Andrea Vitale

    * [TIMOB-27958](https://jira-archive.titaniumsdk.com/TIMOB-27958) - add fallback for countryCode in reverseGeocoder method ([9823b0d](https://github.com/tidev/titanium-sdk/commit/9823b0dba8482fadd809fc6612ad70674fd51a10))

* Hans Knöchel

    * [TIMOB-27895](https://jira-archive.titaniumsdk.com/TIMOB-27895) - support using named colors for color properties directly ([5135b59](https://github.com/tidev/titanium-sdk/commit/5135b595fc4f24f827ec7e63b7273b8a797de5b7))

    * [TIMOB-27757](https://jira-archive.titaniumsdk.com/TIMOB-27757) - fix watchOS targets that include frameworks ([bd59e19](https://github.com/tidev/titanium-sdk/commit/bd59e19fb5036745dbfba857f117899380b88f63))

    * [TIMOB-27773](https://jira-archive.titaniumsdk.com/TIMOB-27773) - add search bar token API ([0680dcd](https://github.com/tidev/titanium-sdk/commit/0680dcd03b5c65685b35b75187ff45e3d1d16787))

* Sergey Volkov

    * [TIMOB-27519](https://jira-archive.titaniumsdk.com/TIMOB-27519) - semantic colors with alpha value ([3c9aa10](https://github.com/tidev/titanium-sdk/commit/3c9aa102811889793dbdc24eeb03c5a44c1ec449))

    * fix keyboardToolbar property type ([7fbf2c7](https://github.com/tidev/titanium-sdk/commit/7fbf2c70b1c7c9a39805e9d999cf638e5e2f08c4))

    * fix Ti.UI.iOS.MenuPopup.items type ([e886d64](https://github.com/tidev/titanium-sdk/commit/e886d64ee7e81db77fb65b93c3591ae4c6c00c37))

* Skoften

    * [TIMOB-27697](https://jira-archive.titaniumsdk.com/TIMOB-27697) - Add "progress" event to Ti.UI.WebView for Android (parity) ([2caa8e7](https://github.com/tidev/titanium-sdk/commit/2caa8e75a3b40a99d236a5b9b07fe26f5423cbf6))

## Bug Fixes

### Android platform

* [TIMOB-27513](https://jira-archive.titaniumsdk.com/TIMOB-27513) - TabGroup bottom navigation style fires redundant event

* [TIMOB-27519](https://jira-archive.titaniumsdk.com/TIMOB-27519) - Semantic Colors with alpha value

* [TIMOB-27616](https://jira-archive.titaniumsdk.com/TIMOB-27616) - TextField with decimal keyboard type does not allow comma for decimal separator

* [TIMOB-27731](https://jira-archive.titaniumsdk.com/TIMOB-27731) - Camera fails to open when using saveToPhotoGallery: true ([56986c3](https://github.com/tidev/titanium-sdk/commit/56986c33e303081223fd17fa9a13c04d743e517f))

* [TIMOB-27779](https://jira-archive.titaniumsdk.com/TIMOB-27779) - Setting "labels" via TabbedBar "click" event hangs app ([749ff1d](https://github.com/tidev/titanium-sdk/commit/749ff1d67eb812c149f08fc705c87fa440e415a2))

* [TIMOB-27797](https://jira-archive.titaniumsdk.com/TIMOB-27797) - Unable to see "error" event in remote images ([68d11f7](https://github.com/tidev/titanium-sdk/commit/68d11f73cbf317af9a81bd7272fc02d1c39cdac1))

* [TIMOB-27825](https://jira-archive.titaniumsdk.com/TIMOB-27825) - High CPU usage in Android Studio ([11dff9d](https://github.com/tidev/titanium-sdk/commit/11dff9d3ccc61bd04048a11e95016fe8fb409917))

* [TIMOB-27834](https://jira-archive.titaniumsdk.com/TIMOB-27834) - NavigationWindow doesnt trigger open and close events

* [TIMOB-27872](https://jira-archive.titaniumsdk.com/TIMOB-27872) - Blob imageAsX() methods ignore EXIF orientation if not wrapping a file ([7ce3ae1](https://github.com/tidev/titanium-sdk/commit/7ce3ae11f2c886864ed7713b1e88324b60fdf8f6))

* [TIMOB-27882](https://jira-archive.titaniumsdk.com/TIMOB-27882) - Unable to do a production build after switching SDK on Windows

* [TIMOB-27916](https://jira-archive.titaniumsdk.com/TIMOB-27916) - App logs Titanium version as `__VERSION__` on startup as of 9.1.0 ([08227a9](https://github.com/tidev/titanium-sdk/commit/08227a90c0939748b1a93a6764f5949ffa6e0deb))

* [TIMOB-27927](https://jira-archive.titaniumsdk.com/TIMOB-27927) - Changing currently selected row's color in picker does not update shown color

* [TIMOB-27950](https://jira-archive.titaniumsdk.com/TIMOB-27950) - "tiapp.xml" setting `<navbar-hidden>` is ignored if `<fullscreen>` or `<statusbar-hidden>` is also not set as of 9.0.0 ([54e42b1](https://github.com/tidev/titanium-sdk/commit/54e42b1324897f148840a2a0dae431d3b6645ed7))

* [TIMOB-27963](https://jira-archive.titaniumsdk.com/TIMOB-27963) - Always specify default Tab.tintColor ([9a6d417](https://github.com/tidev/titanium-sdk/commit/9a6d417030c1920b5e409bf3de766b22d077f9ee))

* [TIMOB-27972](https://jira-archive.titaniumsdk.com/TIMOB-27972) - ACS push notifications received multiple times on same device after re-installing app

* [TIMOB-27990](https://jira-archive.titaniumsdk.com/TIMOB-27990) - Ti.UI.ShortcutItem has lot of issues

* [TIMOB-28020](https://jira-archive.titaniumsdk.com/TIMOB-28020) - Parity with iOS Shortcut click event payload ([dc102e3](https://github.com/tidev/titanium-sdk/commit/dc102e3ac6c78c35ce294b46a653de710c4958cd))

* changing picker row color should update selected text ([7aa5290](https://github.com/tidev/titanium-sdk/commit/7aa5290036b054bee75240488ae22f8228218906))

* clean/rebuild should release gradle file locks ([be923f1](https://github.com/tidev/titanium-sdk/commit/be923f1d1904912db50218e1addc9acd7147974f))

### iOS platform

* [TIMOB-18256](https://jira-archive.titaniumsdk.com/TIMOB-18256) - setting TextField.value to wrong type triggers change event ([e06f9b5](https://github.com/tidev/titanium-sdk/commit/e06f9b52cdbe494e6c4d19d02373d07fc4a991ff))

* [TIMOB-27649](https://jira-archive.titaniumsdk.com/TIMOB-27649) - deprecate statusbar constant ([3c83fd8](https://github.com/tidev/titanium-sdk/commit/3c83fd80890e7fb44a97702de9600c8b3ef1dc3b))

* [TIMOB-27757](https://jira-archive.titaniumsdk.com/TIMOB-27757) - watchOS: Frameworks are referenced incorrectly

* [TIMOB-27767](https://jira-archive.titaniumsdk.com/TIMOB-27767) - Parity: httpClient should trigger error callback when url is invalid ([7630868](https://github.com/tidev/titanium-sdk/commit/7630868993bac92e2c9d8f005c6a5104683b983c))

* [TIMOB-27821](https://jira-archive.titaniumsdk.com/TIMOB-27821) - ti.urlsession - Event sessioncompleted does not get all specified values ([ebae7bd](https://github.com/tidev/titanium-sdk/commit/ebae7bdc4399d6b0e871db1c60de47d2f0642b89))

* [TIMOB-27832](https://jira-archive.titaniumsdk.com/TIMOB-27832) - Liveview disconnect triggers infinate error loop

* [TIMOB-27846](https://jira-archive.titaniumsdk.com/TIMOB-27846) - Calling Ti.Platform.openURL without all parameters causes the app to crash (regression) ([b5bb437](https://github.com/tidev/titanium-sdk/commit/b5bb4377a384127ccd0702596e396d02f3c9abdf))

* [TIMOB-27874](https://jira-archive.titaniumsdk.com/TIMOB-27874) - parseDecimal() whitespace thousands sep handling ([ed7bbe6](https://github.com/tidev/titanium-sdk/commit/ed7bbe6e1924996f8d173bd757b564f291c24c66))

* [TIMOB-27897](https://jira-archive.titaniumsdk.com/TIMOB-27897) - master branch is not building on Xcode < 11

* [TIMOB-27930](https://jira-archive.titaniumsdk.com/TIMOB-27930) - iPad crashing intermittently during unit test suite ([c2e5fb5](https://github.com/tidev/titanium-sdk/commit/c2e5fb5de565119ce7859298b217abe319f3bb8e))

* [TIMOB-27935](https://jira-archive.titaniumsdk.com/TIMOB-27935) - TableViewRow does not return getRect methods

* [TIMOB-27958](https://jira-archive.titaniumsdk.com/TIMOB-27958) - Ti.Geolocation.reverseGeocoder() crashes the app on iOS

* [TIMOB-27969](https://jira-archive.titaniumsdk.com/TIMOB-27969) - View in a tab window goes under tabs in a tabgroup on Ipad ([e9330a9](https://github.com/tidev/titanium-sdk/commit/e9330a927909f64bd6e7efc05eb3f48de6347476))

* [TIMOB-27994](https://jira-archive.titaniumsdk.com/TIMOB-27994) - itemclick event its firing instead of a move event when ordering items in a list (iOS 13+) ([40cc28d](https://github.com/tidev/titanium-sdk/commit/40cc28da53ed5cebb31c555fe8727db830eee3bb))

* [TIMOB-27997](https://jira-archive.titaniumsdk.com/TIMOB-27997) - Ti.Blob images from device (via Ti.UI.View#toImage()) would report dimensions in points, not pixels ([51b6237](https://github.com/tidev/titanium-sdk/commit/51b6237049a9bec60c1ab31cb268d40c2ecf2093))

* [TIMOB-28001](https://jira-archive.titaniumsdk.com/TIMOB-28001) - setting TableView row layout to "horizontal" or "vertical" crashes ([fd53a51](https://github.com/tidev/titanium-sdk/commit/fd53a51e8e7040f1995c497092fdc782508dfa7e))

* [TIMOB-28031](https://jira-archive.titaniumsdk.com/TIMOB-28031) - CLI: Unable to find an iOS Simulator running iOS 14.0.

* allow custom property getters to work in bindings ([a53f8c6](https://github.com/tidev/titanium-sdk/commit/a53f8c6e05ab34ce7735af617e62f4c308d4f83f))

* call callback with success no byte event on writeFromBuffer with no length ([8a639d8](https://github.com/tidev/titanium-sdk/commit/8a639d8bb50f66468b4ac6cefbe3501c9027110f))

* define dark/light theme constants/properties for ios < 13 ([a16e698](https://github.com/tidev/titanium-sdk/commit/a16e6983ac14955bcf14307a2634cf9b49e63a0d))

* don't ignore close call immediately after open on Window ([07502db](https://github.com/tidev/titanium-sdk/commit/07502db839ef9a4631e28aefbb1c7727ef5fb515))

* handle Ti.Stream.write with length 0 or empty buffer as success no-op ([b58349d](https://github.com/tidev/titanium-sdk/commit/b58349d06b04203c041e1c1d26566260a924db7a))

* have Ti.Color hex be AARRGGBB format (not RRGGBBAA) ([9c3321b](https://github.com/tidev/titanium-sdk/commit/9c3321b1f788c6b18541e4766007ccaeeadb409c))

* make Ti.UI.Window close/open run more async ala Android ([6a6fda4](https://github.com/tidev/titanium-sdk/commit/6a6fda4bc9ca83e44e1c41b9a6d998f2c1e89f64))

* properly report partial results on thrown error for Ti.DB.executeAll ([f1372ba](https://github.com/tidev/titanium-sdk/commit/f1372bab5510eb3abe71b95907b9b6ca0ecbde58))

* remainingComplicationUserInfoTransfers is number on ipad ([0fcd6d2](https://github.com/tidev/titanium-sdk/commit/0fcd6d2c22d3823fe838f1cec2080ee014a9db65))

* TableViewRow does not return getRect methods ([b15d184](https://github.com/tidev/titanium-sdk/commit/b15d1840c9be3cbf7cc74b10381e3656846f87b8))

### Multiple platforms

* [TIMOB-27785](https://jira-archive.titaniumsdk.com/TIMOB-27785) - buffer: Proxy object's 'set' trap returned falsy value for property '0' ([a45a8d0](https://github.com/tidev/titanium-sdk/commit/a45a8d0cd4833a136537a8da27fee976bd617fab))

* [TIMOB-27808](https://jira-archive.titaniumsdk.com/TIMOB-27808) - add missing console.trace ([83a64a1](https://github.com/tidev/titanium-sdk/commit/83a64a1c276b666a2e24e2524fcb10e0a7a25e00))

* [TIMOB-27525](https://jira-archive.titaniumsdk.com/TIMOB-27525) - Liveview: Commented out line with Ti.include in it causes LiveView failure

* [TIMOB-27416](https://jira-archive.titaniumsdk.com/TIMOB-27416) - LiveView: Changes made to a theme's style are not reflected in app when using LiveView

* [TIMOB-26267](https://jira-archive.titaniumsdk.com/TIMOB-26267) - LiveView: Calling "liveview server stop" causes exception, but stops connections

* [TIMOB-26649](https://jira-archive.titaniumsdk.com/TIMOB-26649) - LiveView: Unable to use LiveView with KitchenSink-v2

* [TIMOB-26798](https://jira-archive.titaniumsdk.com/TIMOB-26798) - Angular: Project template is outdated

* do not remove log file when cleaning ([a699bf5](https://github.com/tidev/titanium-sdk/commit/a699bf594d0e41167d4c441de9d958bdc46a9fb4))

* add .buffer and #set to Buffer ([264b175](https://github.com/tidev/titanium-sdk/commit/264b1752d2548a391e4ee4d53832a27d784d5cf6))

* add no-op stubs for fs.chown methods ([1dd99ef](https://github.com/tidev/titanium-sdk/commit/1dd99efecfa6529ac443293e71ee4fbef9ce6f85))

* assume hex is ARGB ([daf8056](https://github.com/tidev/titanium-sdk/commit/daf8056047a0cbdfac0b76862bec8c4d45196075))

* copy sliced buffer doesn't extend beyond view now ([035c579](https://github.com/tidev/titanium-sdk/commit/035c57922d7345985c44e67913c2b9aa9d36feb4))

* expose Buffer.hexSlice to fix console.log of ArrayBuffer ([d7f863b](https://github.com/tidev/titanium-sdk/commit/d7f863b7f618a7b9b617f68936623d224268b614))

* expose constructor off global console instance ([2568c6f](https://github.com/tidev/titanium-sdk/commit/2568c6f15af34a8a7b5a3a6bea9936367623670d))

* correct type sniffing of some ES6 types ([bac4bb3](https://github.com/tidev/titanium-sdk/commit/bac4bb3c4732431b174ed3fd15536932bd0f1f22))

## Features

### Android platform

* [TIMOB-25633](https://jira-archive.titaniumsdk.com/TIMOB-25633) - Add "androidback" callback property to camera overlay ([b890f7c](https://github.com/tidev/titanium-sdk/commit/b890f7c7743b8e38292c5d669ed502996b665a20))

* [TIMOB-26315](https://jira-archive.titaniumsdk.com/TIMOB-26315) - Support touch feedback on backgroundImage, backgroundGradient, and transparent backgrounds ([2a0b1be](https://github.com/tidev/titanium-sdk/commit/2a0b1bea925c9cc1eefb29535e7a33ef724adc09))

* [TIMOB-27240](https://jira-archive.titaniumsdk.com/TIMOB-27240) - Add Intl.NumberFormat support ([269de3f](https://github.com/tidev/titanium-sdk/commit/269de3f91975b758d58608491b44ac6e3dd86323))

* [TIMOB-27242](https://jira-archive.titaniumsdk.com/TIMOB-27242) - Improve getter and setter warnings ([3507dd0](https://github.com/tidev/titanium-sdk/commit/3507dd0d920c027d7a5d1df251ad914b5b7cdfb9))

* [TIMOB-27473](https://jira-archive.titaniumsdk.com/TIMOB-27473) - Replace clang Java formatter with gradle "checkstyle" tool ([3cbc754](https://github.com/tidev/titanium-sdk/commit/3cbc75485d2b6d8a423ef76653b7d2389309bd61))

* [TIMOB-27501](https://jira-archive.titaniumsdk.com/TIMOB-27501) - Be able to determine dark / light theme, as well as changes on it

    * add Ti.UI.Android.getColorResource(), Ti.UI.Color ([d852331](https://github.com/tidev/titanium-sdk/commit/d852331b71a53dbcdae89dd73055210fb04beb37))

* [TIMOB-27697](https://jira-archive.titaniumsdk.com/TIMOB-27697) - Add "progress" event to Ti.UI.WebView for Android (parity) ([82a3579](https://github.com/tidev/titanium-sdk/commit/82a3579c3239a0ed84c83a28c74767effccfa9fe))

* [TIMOB-27719](https://jira-archive.titaniumsdk.com/TIMOB-27719) - Remove python dependency from SDK build

* [TIMOB-27855](https://jira-archive.titaniumsdk.com/TIMOB-27855) - Animate elevation value

* [TIMOB-27862](https://jira-archive.titaniumsdk.com/TIMOB-27862) - Add callback support to Ti.Platform.openURL() ([43d287e](https://github.com/tidev/titanium-sdk/commit/43d287e685fe9da5efedbda9ed0921bf32fff573))

* [TIMOB-27869](https://jira-archive.titaniumsdk.com/TIMOB-27869) - KEYBOARD\_TYPE\_ASCII should not allow emoji like iOS

* [TIMOB-27870](https://jira-archive.titaniumsdk.com/TIMOB-27870) - KEYBOARD\_TYPE\_NUMBERS\_PUNCTUATION should allow all chars except emoji like iOS

* [TIMOB-27871](https://jira-archive.titaniumsdk.com/TIMOB-27871) - Setting TextField/TextArea "editable" to false should allow user to copy text to clipboard

* [TIMOB-27879](https://jira-archive.titaniumsdk.com/TIMOB-27879) - ListView should only fire "scrolling" event when moving a min distance

* [TIMOB-27889](https://jira-archive.titaniumsdk.com/TIMOB-27889) - Implement Ti.UI.Shortcut ([5432efc](https://github.com/tidev/titanium-sdk/commit/5432efce7a3e6a09b32c1ed6f4bed95fe915b214))

* [TIMOB-27890](https://jira-archive.titaniumsdk.com/TIMOB-27890) - Add Intl.DateTimeFormat support ([269de3f](https://github.com/tidev/titanium-sdk/commit/269de3f91975b758d58608491b44ac6e3dd86323))

* [TIMOB-27891](https://jira-archive.titaniumsdk.com/TIMOB-27891) - Add Intl.Collator support ([269de3f](https://github.com/tidev/titanium-sdk/commit/269de3f91975b758d58608491b44ac6e3dd86323))

* [TIMOB-27892](https://jira-archive.titaniumsdk.com/TIMOB-27892) - Update toLocale\*String() methods to support locale/options ([683adaf](https://github.com/tidev/titanium-sdk/commit/683adafc7f32de97656670f570ac696beb5fce6d))

* [TIMOB-27906](https://jira-archive.titaniumsdk.com/TIMOB-27906) - Add Kotlin based template for native modules ([23c3aea](https://github.com/tidev/titanium-sdk/commit/23c3aeafe8fd7c8a64c037fa584201cc8842b243))

* [TIMOB-27938](https://jira-archive.titaniumsdk.com/TIMOB-27938) - Update gradle build tools to 4.0.x

* [TIMOB-27946](https://jira-archive.titaniumsdk.com/TIMOB-27946) - Implement Ti.View.borderRadius multiple values for custom edge radii ([545f8d5](https://github.com/tidev/titanium-sdk/commit/545f8d5d6d641a14289f486a310ca34f08dada6f))

* add NDK side-by-side support ([71f25e8](https://github.com/tidev/titanium-sdk/commit/71f25e8a6d3cf906f59c8c515effa61211f24802))

* [MOD-2588](https://jira-archive.titaniumsdk.com/MOD-2588) - add passcode fallback to ti.identity ([1f84b35](https://github.com/tidev/titanium-sdk/commit/1f84b3551c57ca4a5cf4c91a07d5867f0948ff15))

* added "codeStyleConfig.xml" to SDK ([a9f6895](https://github.com/tidev/titanium-sdk/commit/a9f68957da9304295199096fbbbbc15061cc4bf4))

* [MOD-2634](https://jira-archive.titaniumsdk.com/MOD-2634) [TIMOB-27972](https://jira-archive.titaniumsdk.com/TIMOB-27972) - migrate CloudPush to Firebase ([d61e66e](https://github.com/tidev/titanium-sdk/commit/d61e66e1e33005a9a4bf2204b536b9421fa6c0df))

* module builds should fail with aar in lib folder ([0c72020](https://github.com/tidev/titanium-sdk/commit/0c720208bab8344e08c1ba29a123b78e9ec55d76))

### iOS platform

* [TIMOB-27773](https://jira-archive.titaniumsdk.com/TIMOB-27773) - Support search bar tokens

* [TIMOB-26959](https://jira-archive.titaniumsdk.com/TIMOB-26959) - Add TLS 1.3 support

* [TIMOB-27853](https://jira-archive.titaniumsdk.com/TIMOB-27853) - Add ability to detect that screenshot was taken on iOS ([b9df339](https://github.com/tidev/titanium-sdk/commit/b9df3399d9aa41b34a8d38f1dad96bca20ff9de2))

* [TIMOB-26818](https://jira-archive.titaniumsdk.com/TIMOB-26818) - Move application shortcut under Ti.UI.Shortcut to have parity ([8446d39](https://github.com/tidev/titanium-sdk/commit/8446d3967cd3c1eda8c364af08a99998e9aa1b20))

* [TIMOB-27305](https://jira-archive.titaniumsdk.com/TIMOB-27305) - Implement Ti.View.borderRadius multiple values for custom edge radii ([34b3a93](https://github.com/tidev/titanium-sdk/commit/34b3a930762a5ea47f781644b87a47f78b86657b))

* [TIMOB-27649](https://jira-archive.titaniumsdk.com/TIMOB-27649) - Deprecate Status Bar style constants

* [TIMOB-27767](https://jira-archive.titaniumsdk.com/TIMOB-27767) - Parity: httpClient should trigger error callback when url is invalid

* [TIMOB-27792](https://jira-archive.titaniumsdk.com/TIMOB-27792) - Remove python dependency from SDK build

* [TIMOB-27974](https://jira-archive.titaniumsdk.com/TIMOB-27974) - Make iOS development-project compatible with Xcode 12

* add list of new iPhone/iPad models for `os` module ([8839c2c](https://github.com/tidev/titanium-sdk/commit/8839c2c8c85914ade3f20c55f825da8896aa378f))

### Multiple platforms

* [TIMOB-13764](https://jira-archive.titaniumsdk.com/TIMOB-13764) - TiAPI: After animating properties on a view, update in the view properties ([3fef676](https://github.com/tidev/titanium-sdk/commit/3fef6762cba17f614ca18492883a700a6a6d4665))

* [TIMOB-25968](https://jira-archive.titaniumsdk.com/TIMOB-25968) - Liveview: Write more information to pidfile, such as port and ip data

* [TIMOB-26572](https://jira-archive.titaniumsdk.com/TIMOB-26572) - TiAPI: Extend global console API to be more Node-compatible ([e398a10](https://github.com/tidev/titanium-sdk/commit/e398a10d6eb51a37f13df6500983ff8132353efe))

* [TIMOB-27429](https://jira-archive.titaniumsdk.com/TIMOB-27429) - Webpack: Integration into the CLI build command

* [TIMOB-27501](https://jira-archive.titaniumsdk.com/TIMOB-27501) - cross-platform light/dark mode API ([28eba34](https://github.com/tidev/titanium-sdk/commit/28eba34349ce26dfd1aafca9c16615ce8255ab20))

* [TIMOB-27511](https://jira-archive.titaniumsdk.com/TIMOB-27511) - Webpack: Alloy loader

* [TIMOB-27716](https://jira-archive.titaniumsdk.com/TIMOB-27716) - Webpack: Classic and Alloy project templates

* [TIMOB-27711](https://jira-archive.titaniumsdk.com/TIMOB-27711) - TiAPI: Add state querying methods to UI components

    * add Ti.UI.Window.closed property ([1c66a80](https://github.com/tidev/titanium-sdk/commit/1c66a80bf671309d63cb70d336482de053ed5efb)) ([574fec6](https://github.com/tidev/titanium-sdk/commit/574fec6c3d40762259dcece0512986dec6d85194))

    * add Ti.UI.Window.focused property ([26f8dcd](https://github.com/tidev/titanium-sdk/commit/26f8dcd0be512d4ae09dd70ab4a80bfae9770321)) ([c5de6e2](https://github.com/tidev/titanium-sdk/commit/c5de6e26d253b42483cb270fb8c54de1d9b65d52))

    * add Ti.UI.SearchBar focused property ([64c334d](https://github.com/tidev/titanium-sdk/commit/64c334dd6509dea2884092c0c9e85a1e276afdec)) ([e0161ed](https://github.com/tidev/titanium-sdk/commit/e0161edc73f8c0d32397ec29744d9f40154dce70))

    * add Ti.UI.TextField/Area focused property ([5e822f5](https://github.com/tidev/titanium-sdk/commit/5e822f590219922cf20f1b84edd8609923675788)) ([19ab4dc](https://github.com/tidev/titanium-sdk/commit/19ab4dc1f6bd08537069222a47d428ffbe6edb94)) ([78357ec](https://github.com/tidev/titanium-sdk/commit/78357ecfebb41d24fa3c53029f7f6ae3739e1ace)) ([7b53d67](https://github.com/tidev/titanium-sdk/commit/7b53d675fe4240c6c4673ae90e557dca84fde0d2))

* [TIMOB-27800](https://jira-archive.titaniumsdk.com/TIMOB-27800) - Webpack: Angular plugin

* [TIMOB-27856](https://jira-archive.titaniumsdk.com/TIMOB-27856) - Webpack: Angular project template

* [TIMOB-27857](https://jira-archive.titaniumsdk.com/TIMOB-27857) - Webpack: Add support for plugins from NPM

* [TIMOB-27860](https://jira-archive.titaniumsdk.com/TIMOB-27860) - Webpack: Tap into hooks before/after other plugins

* [TIMOB-27874](https://jira-archive.titaniumsdk.com/TIMOB-27874) - TiAPI: Add Ti.Locale.parseDecimal() method ([6253813](https://github.com/tidev/titanium-sdk/commit/62538137329bcc9fa0c4c5e3d9798d2f5487e421))

* [TIMOB-27895](https://jira-archive.titaniumsdk.com/TIMOB-27895) - TiAPI: Handle semantic colors (dark mode) without helper function

* [TIMOB-27907](https://jira-archive.titaniumsdk.com/TIMOB-27907) - Liveview: Compatibility with Webpack builds

* [TIMOB-27977](https://jira-archive.titaniumsdk.com/TIMOB-27977) - TiAPI: Add "isTrusted" property to Ti.UI.Slider "change" event

* add basic stream shim ([1720456](https://github.com/tidev/titanium-sdk/commit/17204561b22ab39a731a9ed51281d6a34e3dac11))

* [MOD-2621](https://jira-archive.titaniumsdk.com/MOD-2621) - use ASWebAuthenticationSession when possible ([5e1dfa1](https://github.com/tidev/titanium-sdk/commit/5e1dfa1d36c267e8eaed484203366a9fd72ef7b6))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 9.0.0 | 8.0.0 |
| ti.cloudpush | 7.1.0 | n/a |
| ti.map | 5.0.1 | 3.3.0 |
| ti.webdialog | 2.0.0 | 1.2.0 |
| ti.playservices | 17.1.1 | n/a |
| ti.identity | 3.0.2 | 1.1.0 |
| urlSession | n/a | 2.2.0 |
| ti.coremotion | n/a | 2.1.0 |
| ti.applesignin | n/a | 1.1.1 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 5.0.3 | 5.0.3 |
