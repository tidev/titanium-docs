---
title: Titanium SDK 9.3.1.GA - 25 January 2021
weight: '10'
---

# Titanium SDK 9.3.1.GA - 25 January 2021

## About this release

Titanium SDK 9.3.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (9.3.0) is no longer supported. End of support for this version will be 2021-07-25 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.
:::

## Bug Fixes

### Android platform

* add elevation and support transparent backgrounds ([9025413](https://github.com/appcelerator/titanium_mobile/commit/9025413f004fddedffef160892cf09e04135c9bd))

* address minor memory leak ([6d9c62c](https://github.com/appcelerator/titanium_mobile/commit/6d9c62c8e2a83226a746a17ed088b246cb8080c3))

* amend getBackground() to ignore transparent backgrounds ([541f3f4](https://github.com/appcelerator/titanium_mobile/commit/541f3f46cf19591841ee32ac6dd91d90c856e6ad))

* [TIMOB-28293](https://jira.appcelerator.org/browse/TIMOB-28293) - amend ListView marker behaviour ([1f6ff22](https://github.com/appcelerator/titanium_mobile/commit/1f6ff229462d126f8675bbf9bb972d6b6d4cb0fb))

* amend method to obtain view in releaseViews() ([52ae6e3](https://github.com/appcelerator/titanium_mobile/commit/52ae6e3f0c7f2f556f8bdfc19c2889fc3f933503))

* amend scrollend event fire condition ([b7609ff](https://github.com/appcelerator/titanium_mobile/commit/b7609ff96e11c7eb41464c7c129409eb597b976f))

* date.toLocaleString() to default to numeric date/time ([436c3a3](https://github.com/appcelerator/titanium_mobile/commit/436c3a374d1c316ec4b6236faf629d929836b697))

* [TIMOB-28312](https://jira.appcelerator.org/browse/TIMOB-28312) - decimal comma TextField handling ([5bfa46a](https://github.com/appcelerator/titanium_mobile/commit/5bfa46afa005155358e38ecc4246121801e3d9bd))

* fire move event after movement ([012d9b5](https://github.com/appcelerator/titanium_mobile/commit/012d9b5c8732f330066dddd3272ab075f01eb8c5))

* implement missing scroll events for ListView and TableView ([2cde1bc](https://github.com/appcelerator/titanium_mobile/commit/2cde1bc6dfd4896fb9b86e205c33aa9858304e4e))

* implement old scrolling event behaviour ([393072c](https://github.com/appcelerator/titanium_mobile/commit/393072c2f9e39fd513480013393fc645c9e548d0))

* include totalItemCount and visibleItemCount properties ([d1079c3](https://github.com/appcelerator/titanium_mobile/commit/d1079c348ebb772e001025e9ab513c97c814c76f))

* include type property in events ([69ac871](https://github.com/appcelerator/titanium_mobile/commit/69ac871d456df8f0cd1ca550f13fb2464cdf5f13))

* [TIMOB-28278](https://jira.appcelerator.org/browse/TIMOB-28278) - localized date/time format should default to numeric ([6323c69](https://github.com/appcelerator/titanium_mobile/commit/6323c698de92568f7050f3ddecac55b03f75a67d))

* obtain bindId for child templates ([88b1e2a](https://github.com/appcelerator/titanium_mobile/commit/88b1e2ab2a6d0b7ed1d4c98b95423d7122be9d08))

* onFling callback return ([29880c7](https://github.com/appcelerator/titanium_mobile/commit/29880c775adfaa04b28bdc0fc42ad57de89faed0))

* [TIMOB-28294](https://jira.appcelerator.org/browse/TIMOB-28294) [TIMOB-28308](https://jira.appcelerator.org/browse/TIMOB-28308) - optimize table and list view updates ([23c0f6c](https://github.com/appcelerator/titanium_mobile/commit/23c0f6cae20dd63e9bb4dbe52d5431702565b41d))

* use parent background when row is transparent ([a743e6d](https://github.com/appcelerator/titanium_mobile/commit/a743e6d64528adc3bb983731d7a619ff05e645ac))

### Multiple platforms

* [TIMOB-28205](https://jira.appcelerator.org/browse/TIMOB-28205) - production builds using aot compiler ([30038d7](https://github.com/appcelerator/titanium_mobile/commit/30038d72c371dc1009d01e10bf6c475bbda0e662))

### iOS platform

* [TIMOB-28303](https://jira.appcelerator.org/browse/TIMOB-28303) - add workspace workaround ([bf6529d](https://github.com/appcelerator/titanium_mobile/commit/bf6529d891f2bdb26e550b6851a05e9df8fe540c))

* [TIMOB-28267](https://jira.appcelerator.org/browse/TIMOB-28267) - removing eventlistener multiple times ourCallbackCount should not be in negative value ([ab9997b](https://github.com/appcelerator/titanium_mobile/commit/ab9997b0391fad13fa760604cf807b0239bc8590))

* [TIMOB-28323](https://jira.appcelerator.org/browse/TIMOB-28323) - set statusbar height to top of safearea view ([28c62f7](https://github.com/appcelerator/titanium_mobile/commit/28c62f7a0f3ad4cd7e02591755d7ee9a77808c1e))

## Features

### Android platform

* [TIMOB-28251](https://jira.appcelerator.org/browse/TIMOB-28251) - add missing options to Intl.DateTimeFormat.resolvedOptions() ([6aa7c83](https://github.com/appcelerator/titanium_mobile/commit/6aa7c835f3675b408e762c49dcd7d9afe4015241))

* display drag handle for movable rows ([8d79902](https://github.com/appcelerator/titanium_mobile/commit/8d7990257c295232dcca483b3e733091df2caeb1))

* fire bubbled-up events synchronously ([7c8ebe6](https://github.com/appcelerator/titanium_mobile/commit/7c8ebe6489743dc1a8b89d6e146c7bd4caad43e0))

* [TIMOB-28286](https://jira.appcelerator.org/browse/TIMOB-28286) - fire touch events synchronously ([59280d2](https://github.com/appcelerator/titanium_mobile/commit/59280d2ccd0e5e2a632c46dc6dc8551044b58ede))

* implement list and table editable and moveable functionality ([acb26f0](https://github.com/appcelerator/titanium_mobile/commit/acb26f05956f00c14b29bf9b634372026520d47b))

## SDK Module Versions

| Module | Android version | iOS version |
| --- | --- | --- |
| facebook | 11.0.2 | 10.0.0 |
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
