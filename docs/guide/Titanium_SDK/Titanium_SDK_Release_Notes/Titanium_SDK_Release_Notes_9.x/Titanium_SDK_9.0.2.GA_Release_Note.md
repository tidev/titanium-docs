---
title: Titanium SDK 9.0.2.GA - 19 May 2020
weight: '90'
---

# Titanium SDK 9.0.2.GA - 19 May 2020

## About this release

Titanium SDK 9.0.2 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (9.0.1) is no longer supported. End of support for this version will be 2020-11-19 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes)documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.
:::
::: danger ❗️ Warning
Deprecation Notice: The next major release of the Titanium CLI, version 6.0.0, will no longer support plugins and hooks for commands other than "appc ti clean", "ti clean", "appc run", and "ti build". Titanium CLI v6 will have a new plugin system with a new hook system and it will be incompatible with Titanium CLI v5 plugins and hooks. Please refer to [TIMOB-27233](https://jira.appcelerator.org/browse/TIMOB-27233) and [TIMOB-27255](https://jira.appcelerator.org/browse/TIMOB-27255) for more information.
:::
::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, Windows platform will no longer be supported and has been removed from distribution in the SDK. Customers on Pro and Enterprise plans may continue to request critical fixes on SDK 8.x releases until August 18, 2020.
:::

## Community Credits

* Hans Knöchel

    * [TIMOB-27721](https://jira.appcelerator.org/browse/TIMOB-27721) - properly set ImageView tintColor ([f3e9507](https://github.com/appcelerator/titanium_mobile/commit/f3e9507b1357d7981c509872f3d524c7cbea2cf4))

* Sergey Volkov

    * [TIMOB-27505](https://jira.appcelerator.org/browse/TIMOB-27505) - configuration change not saved in current context ([ddeafd7](https://github.com/appcelerator/titanium_mobile/commit/ddeafd740949a343e3863b89b77a6dc505632244))

## Bug Fixes

### Android platform

* [TIMOB-27505](https://jira.appcelerator.org/browse/TIMOB-27505) - Configuration change not saved in context for API < 26

* [TIMOB-27513](https://jira.appcelerator.org/browse/TIMOB-27513) - TabGroup bottom navigation style fires redundant event ([5cd74a5](https://github.com/appcelerator/titanium_mobile/commit/5cd74a5f47915cd52571a067aace298e265ab6c3))

* [TIMOB-27625](https://jira.appcelerator.org/browse/TIMOB-27625) - Setting picker's minDate/maxDate after opening window not correctly applied ([8e8bcc6](https://github.com/appcelerator/titanium_mobile/commit/8e8bcc64263e787d264b3e8dfb62ea4dcb1561b6))

* [TIMOB-27721](https://jira.appcelerator.org/browse/TIMOB-27721) - Ti.UI.ImageView#tintColor is multiplied, not replaced (like iOS)

* [TIMOB-27774](https://jira.appcelerator.org/browse/TIMOB-27774) - Ti.Blob.imageAsResized() not working for JPEG with exif rotation as of 8.1.0 ([cf4cc22](https://github.com/appcelerator/titanium_mobile/commit/cf4cc22ce0342584a735dc101858bd9cd4964a3c))

* [TIMOB-27769](https://jira.appcelerator.org/browse/TIMOB-27769) - Textfield inputs not setting in focused textfield and Keyboard not showing (sometimes) on a textfields which is focused ([2afd818](https://github.com/appcelerator/titanium_mobile/commit/2afd8186e8561056a7ec08b65d3d338edf2a44d6))

* [TIMOB-27798](https://jira.appcelerator.org/browse/TIMOB-27798) - module build to download ndk with gradle tool 3.5.0+ ([7545627](https://github.com/appcelerator/titanium_mobile/commit/75456275f1765db5ef13ecf730e3c878cb6acfbc))

* [TIMOB-27849](https://jira.appcelerator.org/browse/TIMOB-27849) - Ti.version returns long version format when transpiled, short when not

* [TIMOB-27850](https://jira.appcelerator.org/browse/TIMOB-27850) - App/Module builds fail with JDK 14 as of 9.0.0 ([ba456bf](https://github.com/appcelerator/titanium_mobile/commit/ba456bf0c0e2098d35f4ce37f74c09785ae6c7a2))

* [TIMOB-27852](https://jira.appcelerator.org/browse/TIMOB-27852) - Production builds no longer copy AAB to distribution folder as of 9.0.1 ([1ca5f70](https://github.com/appcelerator/titanium_mobile/commit/1ca5f70029729e1c378671886fea22a836dd176e))

* [TIMOB-27881](https://jira.appcelerator.org/browse/TIMOB-27881) - ImageView tintColor has no effect ([e025e3b](https://github.com/appcelerator/titanium_mobile/commit/e025e3b3dbe670eedcaff3682ee741f0c66de81c))

### iOS platform

* [TIMOB-27851](https://jira.appcelerator.org/browse/TIMOB-27851) - Ti.Network.createHTTPClient memory leak

* [TIMOB-27861](https://jira.appcelerator.org/browse/TIMOB-27861) - Ti.Platform.openURL() callback not invoked if missing options dictionary as of 8.1.0 ([19fc45d](https://github.com/appcelerator/titanium_mobile/commit/19fc45d85b3084ffc4e9a33b33b3fc9142eaf12f))

* [TIMOB-27868](https://jira.appcelerator.org/browse/TIMOB-27868) - Ti.UI.Window.barColor cannot be changed after it was appeared ([707259b](https://github.com/appcelerator/titanium_mobile/commit/707259b14bbd301ebfffe88c8fa5d2d504cdf797))

* [TIMOB-27894](https://jira.appcelerator.org/browse/TIMOB-27894) - Navigation bar flickers on open (SDK 9.0.2 regression, iOS 13+) ([71eabb2](https://github.com/appcelerator/titanium_mobile/commit/71eabb20d3b20017daf491cc287430a9889e2347))

* [TIMOB-27839](https://jira.appcelerator.org/browse/TIMOB-27839) - Orientationchange Stops Firing on iPadOS ([bc67f73](https://github.com/appcelerator/titanium_mobile/commit/bc67f733e443ce2b40606c37e5d84398207d679b))

## Improvements

### iOS platform

* add list of new iPhone/iPad models for os module ([29795a7](https://github.com/appcelerator/titanium_mobile/commit/29795a7213fe8a35437e17d8b1572bc0acc0cfb9))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 9.0.0 | 7.0.1 |
| ti.cloudpush | 7.0.0 | n/a |
| ti.map | 5.0.1 | 3.3.0 |
| ti.webdialog | 2.0.0 | 1.1.0 |
| ti.playservices | 17.1.1 | n/a |
| ti.identity | 3.0.1 | 1.1.0 |
| urlSession | n/a | 2.2.0 |
| ti.coremotion | n/a | 2.1.0 |
| ti.applesignin | n/a | 1.1.1 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 5.0.3 | 5.0.3 |
