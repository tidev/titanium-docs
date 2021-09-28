---
title: Titanium SDK 10.1.0.GA Release Note
weight: '50'
---

# Titanium SDK 10.1.0.GA Release Note

## Titanium SDK 10.1.0.GA - 28 September 2021

## About this release

Titanium SDK 10.1.0 is a minor release of the SDK, focusing on support for iOS 15 and Android 12.

Axway support for this version and prior versions released by Axway will be discontinued after March 1, 2022.

### Community Credits

* Hans Knöchel

    * [TIMOB-28525](https://jira.appcelerator.org/browse/TIMOB-28525) - Allow apps with non-arm64 modules to be built on Apple Silicon ([3559744](https://github.com/appcelerator/titanium_mobile/commit/3559744b03505c2734e1dc7dbab00ae8b224fa10))

    * [TIMOB-28524](https://jira.appcelerator.org/browse/TIMOB-28524) - Expose "sectionHeaderTopPadding" for layout backwards compatibility ([934c440](https://github.com/appcelerator/titanium_mobile/commit/934c440da87e3b59fa24cec809bc2b1493bb6aed))

    * [TIMOB-28391](https://jira.appcelerator.org/browse/TIMOB-28391) - Allow string-based "verticalAlign" in Ti.UI.Label ([9363c42](https://github.com/appcelerator/titanium_mobile/commit/9363c4257e231bae838a7e859f16d597ac3f6145))

    * [TIMOB-28405](https://jira.appcelerator.org/browse/TIMOB-28405) - Specify additional parameters to SFSymbol system image ([4d44a18](https://github.com/appcelerator/titanium_mobile/commit/4d44a181e93c0fc26f10586c025aac4958068910))

    * [TIMOB-28530](https://jira.appcelerator.org/browse/TIMOB-28530) - Add heat-map support to "ti.map" module ([4a4c0a3](https://github.com/appcelerator/titanium_mobile/commit/4a4c0a3726611622e3746d2c5c9a1db22b54ca4a))

    * [TIMOB-28488](https://jira.appcelerator.org/browse/TIMOB-28488) - Modal navigation window jumps navigation bar ([d334ac9](https://github.com/appcelerator/titanium_mobile/commit/d334ac970f3d81d6628d068ef9e26d648f56c98f) )

    * Remove some setters in example code blocks ([6c7db5f](https://github.com/appcelerator/titanium_mobile/commit/6c7db5f9c8e68d27cc39bfb4e7a520d3f9d5ca11))

* Michael Gangolf

    * [TIMOB-28515](https://jira.appcelerator.org/browse/TIMOB-28515) - Floating bottom navigation ([af619dc](https://github.com/appcelerator/titanium_mobile/commit/af619dc4c7cbf1732bfa3e2ba3e5ecca12a3e466))

    * [TIMOB-28529](https://jira.appcelerator.org/browse/TIMOB-28529) - Update "ti.map" module to support "camera" property and animateCamera() ([4a4c0a3](https://github.com/appcelerator/titanium_mobile/commit/4a4c0a3726611622e3746d2c5c9a1db22b54ca4a))

### Bug Fixes

#### Android platform

* [TIMOB-28517](https://jira.appcelerator.org/browse/TIMOB-28517) - Card view "touchFeedbackColor" property is ignored ([03ada5d](https://github.com/appcelerator/titanium_mobile/commit/03ada5dd0d60d900aa7e5236a161c0f298574737))

* [TIMOB-26706](https://jira.appcelerator.org/browse/TIMOB-26706) - Correct TextField and ImageView content description component ([db1a83a](https://github.com/appcelerator/titanium_mobile/commit/db1a83a45529993e2d694e55181a881091cfa849))

* [TIMOB-28474](https://jira.appcelerator.org/browse/TIMOB-28474) - Request ACCESS\_COARSE\_LOCATION permission ([30f66e9](https://github.com/appcelerator/titanium_mobile/commit/30f66e9a4cf59440f9741944193bd6d2dd0aaefe))

* [TIMOB-28199](https://jira.appcelerator.org/browse/TIMOB-28199) - Support detail property in row click event ([a615c42](https://github.com/appcelerator/titanium_mobile/commit/a615c4269d3b753be52f14691e2976ab0ba7b67c))

* [MOD-2739](https://jira.appcelerator.org/browse/MOD-2739) - ti.identity module error when authenticating 2nd time ([ec53cf4](https://github.com/appcelerator/titanium_mobile/commit/ec53cf42a150b01c8dc1fcf4bc7ba1de747aa67c))

* [TIMOB-28533](https://jira.appcelerator.org/browse/TIMOB-28533) - ListView scrollToItem always uses first section ([5c3b9d5](https://github.com/appcelerator/titanium_mobile/commit/5c3b9d5fa6749b368a7ef1918187635d2c12b8fd))

* [TIMOB-28437](https://jira.appcelerator.org/browse/TIMOB-28437) - Optimize proxy constructor lookup ([54132d2](https://github.com/appcelerator/titanium_mobile/commit/54132d29ca27531c8ea29f2c326994eebf8317bb))

* [TIMOB-28537](https://jira.appcelerator.org/browse/TIMOB-28537) - auto-scaling mode must stretch ImageView if both width/height set ([ea0d99c](https://github.com/appcelerator/titanium_mobile/commit/ea0d99cc34f7299d01922036558540f40dfaebe9))

* [TIMOB-28538](https://jira.appcelerator.org/browse/TIMOB-28538) - ImageView image download performance slow if HTTP response error occurs ([bdf7e68](https://github.com/appcelerator/titanium_mobile/commit/bdf7e68f3f35b92fd7c422c4fa8293d4433a50ef))

* [TIMOB-18786](https://jira.appcelerator.org/browse/TIMOB-18786) - ImageView sometimes loads wrong image due to hash code collision ([bdf7e68](https://github.com/appcelerator/titanium_mobile/commit/bdf7e68f3f35b92fd7c422c4fa8293d4433a50ef))

* Remove HTTPClient addKeyManager() and addTrustManager() methods ([50225e1](https://github.com/appcelerator/titanium_mobile/commit/50225e12c27cb0bfb440105c6204a7c69dcb0f15))

#### iOS platform

* [TIMOB-28525](https://jira.appcelerator.org/browse/TIMOB-28525) - Allow apps with non-arm64 modules to be built on Apple Silicon ([3559744](https://github.com/appcelerator/titanium_mobile/commit/3559744b03505c2734e1dc7dbab00ae8b224fa10))

* [TIMOB-28391](https://jira.appcelerator.org/browse/TIMOB-28391) - Allow string-based "verticalAlign" in Ti.UI.Label ([9363c42](https://github.com/appcelerator/titanium_mobile/commit/9363c4257e231bae838a7e859f16d597ac3f6145))

* [TIMOB-28518](https://jira.appcelerator.org/browse/TIMOB-28518) - Amend TiMediaVideoPlayer parent controller ([eb319ef](https://github.com/appcelerator/titanium_mobile/commit/eb319efc1909dfd7261414837bde69c4f7545add))

* [TIMOB-28511](https://jira.appcelerator.org/browse/TIMOB-28511) - Create headers directory if it doesn't exist, write a keep file to ensure it persists ([c1a6410](https://github.com/appcelerator/titanium_mobile/commit/c1a64103c146864c28f3efb7ad0fac6ab5db8012))

* [TIMOB-28524](https://jira.appcelerator.org/browse/TIMOB-28524) - Expose "sectionHeaderTopPadding" for layout backwards compatibility ([934c440](https://github.com/appcelerator/titanium_mobile/commit/934c440da87e3b59fa24cec809bc2b1493bb6aed))

* [TIMOB-27875](https://jira.appcelerator.org/browse/TIMOB-27875) - Rare random crashes on 64-bit devices ([ec35a17](https://github.com/appcelerator/titanium_mobile/commit/ec35a17530cc8ff9b83d9705cbf4c3b522d07637))

* [TIMOB-28505](https://jira.appcelerator.org/browse/TIMOB-28505) [TIMOB-28523](https://jira.appcelerator.org/browse/TIMOB-28523) - TabGroup bar is wrongly transparent on iOS 15 ([15e292e](https://github.com/appcelerator/titanium_mobile/commit/15e292eda2187612b1cdf75d1d61e60796ee9c62))

* [TIMOB-28498](https://jira.appcelerator.org/browse/TIMOB-28498) - Hang between sim selection and launch or app install when building to iOS 15 simulator ([7ba85d5](https://github.com/appcelerator/titanium_mobile/commit/7ba85d50d6e481567d46dc9299588c01fd1672d4#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519))

* [TIMOB-28527](https://jira.appcelerator.org/browse/TIMOB-28527) - "ti.map" polyline click events not working if it only has 2 points ([4a4c0a3](https://github.com/appcelerator/titanium_mobile/commit/4a4c0a3726611622e3746d2c5c9a1db22b54ca4a))

* [TIMOB-28488](https://jira.appcelerator.org/browse/TIMOB-28488) - Modal navigation window jumps navigation bar ([d334ac9](https://github.com/appcelerator/titanium_mobile/commit/d334ac970f3d81d6628d068ef9e26d648f56c98f))

* [TIMOB-28536](https://jira.appcelerator.org/browse/TIMOB-28536) - TableView maintains search view focus after close ([7041f6f](https://github.com/appcelerator/titanium_mobile/commit/7041f6f6caab54827c980b339afaac02836c4a3d))

### Features

#### Multiple platforms

* update "ti.map" module ([4a4c0a3](https://github.com/appcelerator/titanium_mobile/commit/4a4c0a3726611622e3746d2c5c9a1db22b54ca4a))

* [TIMOB-24313](https://jira.appcelerator.org/browse/TIMOB-24313) [TIMOB-28432](https://jira.appcelerator.org/browse/TIMOB-28432) - Add "scalingMode" property to Ti.UI.ImageView ([cce763a](https://github.com/appcelerator/titanium_mobile/commit/cce763aefd80c555728c118840d512032ffaa361))

#### Android platform

* [TIMOB-28494](https://jira.appcelerator.org/browse/TIMOB-28494) - Update to Gradle 7.1 ([898dcc0](https://github.com/appcelerator/titanium_mobile/pull/12914/commits/898dcc0fdab47ec28813506f942c82b5204d4e85))

* [TIMOB-28447](https://jira.appcelerator.org/browse/TIMOB-28447) - Add "imageTouchFeedback" to ImageView ([b2e84bd](https://github.com/appcelerator/titanium_mobile/commit/b2e84bde9635e348595feeab8ef42b79c6d40866))

* [TIMOB-28526](https://jira.appcelerator.org/browse/TIMOB-28526) - Add "solid" titanium app theme ([ab3329e](https://github.com/appcelerator/titanium_mobile/commit/ab3329e013f0d6a1aa18e6fa1031662f76299118))

* [TIMOB-28445](https://jira.appcelerator.org/browse/TIMOB-28445) - Add constant Ti.UI.Android.FLAG\_LAYOUT\_NO\_LIMITS ([386c5cf](https://github.com/appcelerator/titanium_mobile/commit/386c5cfde12462864b3538920071c5bfa722d73e))

* [TIMOB-28515](https://jira.appcelerator.org/browse/TIMOB-28515) - Floating bottom navigation ([af619dc](https://github.com/appcelerator/titanium_mobile/commit/af619dc4c7cbf1732bfa3e2ba3e5ecca12a3e466))

* [TIMOB-28473](https://jira.appcelerator.org/browse/TIMOB-28473) - Icon splash screen support ([2baef1e](https://github.com/appcelerator/titanium_mobile/commit/2baef1e9eedbaac3ab86d37bf29d5deacdff4375))

* [TIMOB-28472](https://jira.appcelerator.org/browse/TIMOB-28472) - Target API Level 31 by default ([571038c](https://github.com/appcelerator/titanium_mobile/commit/571038c43564323517b7ad71b515a655e5a46937))

* [TIMOB-28431](https://jira.appcelerator.org/browse/TIMOB-28431) - Implement scrollToIndex animation support ([2c542b8](https://github.com/appcelerator/titanium_mobile/commit/2c542b80cb90ee0c38fa89d62499cbe5a80f5633))

* [TIMOB-28530](https://jira.appcelerator.org/browse/TIMOB-28530) - Add heat-map support to "ti.map" module ([4a4c0a3](https://github.com/appcelerator/titanium_mobile/commit/4a4c0a3726611622e3746d2c5c9a1db22b54ca4a))

* [TIMOB-28476](https://jira.appcelerator.org/browse/TIMOB-28476) - Add PendingIntent constants FLAG\_IMMUTABLE and FLAG\_MUTABLE ([75ce8e4](https://github.com/appcelerator/titanium_mobile/commit/75ce8e4a2783d93df32d35386d336f1596ea7de7))

* [TIMOB-28529](https://jira.appcelerator.org/browse/TIMOB-28529) - Update "ti.map" module to support "camera" property and animateCamera() ([4a4c0a3](https://github.com/appcelerator/titanium_mobile/commit/4a4c0a3726611622e3746d2c5c9a1db22b54ca4a))

* [TIMOB-28435](https://jira.appcelerator.org/browse/TIMOB-28435) - Implement native selection for TableView ([2aee71c](https://github.com/appcelerator/titanium_mobile/commit/2aee71cfda9e7d0f5f150f198d0b6c51233761ca))

* [TIMOB-28436](https://jira.appcelerator.org/browse/TIMOB-28436) - Implement native selection for ListView ([2aee71c](https://github.com/appcelerator/titanium_mobile/commit/2aee71cfda9e7d0f5f150f198d0b6c51233761ca))

#### iOS platform

* [TIMOB-28467](https://jira.appcelerator.org/browse/TIMOB-28467) [TIMOB-28466](https://jira.appcelerator.org/browse/TIMOB-28466) - Declare support for iOS 15 and Xcode 13 ([d0dcb39](https://github.com/appcelerator/titanium_mobile/commit/d0dcb39d38f9adde87ef603bd41eaac1b7a46d12))

* [TIMOB-28405](https://jira.appcelerator.org/browse/TIMOB-28405) - Specify additional parameters to SFSymbol system image ([4d44a18](https://github.com/appcelerator/titanium_mobile/commit/4d44a181e93c0fc26f10586c025aac4958068910))

* [TIMOB-28500](https://jira.appcelerator.org/browse/TIMOB-28500) - Update "ti.map" module for iOS 15 ([4a4c0a3](https://github.com/appcelerator/titanium_mobile/commit/4a4c0a3726611622e3746d2c5c9a1db22b54ca4a)

### SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 11.0.2 | 11.0.1 |
| ti.cloudpush | 8.0.0 | n/a |
| ti.map | 5.3.3 | 6.0.1 |
| ti.webdialog | 2.0.0 | 3.0.1 |
| ti.playservices | 17.5.0 | n/a |
| ti.identity | 3.0.3 | 4.0.1 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.1 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 7.0.4 | 7.0.4 |
