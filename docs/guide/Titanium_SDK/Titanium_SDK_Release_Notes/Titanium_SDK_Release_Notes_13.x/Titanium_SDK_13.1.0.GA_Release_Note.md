---
title: Titanium SDK 13.1.0.GA - 13 January 2026
weight: '10'
---

## About this release

Titanium SDK 13.1.0 is a minor release of the SDK, addressing high-priority issues from previous releases.


## Community Credits

* Hans Knöchel
  * improve changelog generation ([558cf58](https://github.com/tidev/titanium_mobile/commit/558cf58fcf775f8e2ed3dbbadab55444383070a8))
  * propery handle incremental builds in Xcode ([8ae9374](https://github.com/tidev/titanium_mobile/commit/8ae9374b965b1551afaa9cc7fcd8312f537d2a4e))
  * support swift package manager (SPM) module dependencies ([a6dee74](https://github.com/tidev/titanium_mobile/commit/a6dee746d1c2020353749ae3981bd574510554e8))
  * add support for iOS 26+ UIScrollEdgeEffect API ([6babec0](https://github.com/tidev/titanium_mobile/commit/6babec02c2efb79c8f089d78751847033e822d22))
  * add parity for “backgroundSelectedColor” API ([e47e4b2](https://github.com/tidev/titanium_mobile/commit/e47e4b2e7c069a803cf8c473015a12b18171fc2a))
  * fix local Xcode build ([b1474dd](https://github.com/tidev/titanium_mobile/commit/b1474ddc994981404dde3d5d8a30c9990925e26f))
  * properly set Titanium SDK version for runtime usage ([cf9dfa8](https://github.com/tidev/titanium_mobile/commit/cf9dfa8dba49b37b8014077b89fb4f20e6b7420f))
  * be able to pass button configuration as object, support “loading" state ([03339a1](https://github.com/tidev/titanium_mobile/commit/03339a16dbd8153e5f50617b825945145c5c1214))
  * update hyperloop.next to 7.1.0 to support 16 KB page size ([219f6bc](https://github.com/tidev/titanium_mobile/commit/219f6bcd0872e82e813d54a9ee56a531a8581c45))
  * bump master to 13.1.0 ([ee00961](https://github.com/tidev/titanium_mobile/commit/ee00961b5b96f3187eb3aabe95da612ea5248e63))

* Michael Gangolf
  * update gradle to 8.14.3 ([3b23367](https://github.com/tidev/titanium_mobile/commit/3b23367a2fb6827190e0b71c13f0d7752a00ecc5))
  * kotlin version update ([8170e05](https://github.com/tidev/titanium_mobile/commit/8170e054fb8fecf4aaeb7d30f0c54f3b21d89548))
  * update minSdk to API Level 23 ([089cabc](https://github.com/tidev/titanium_mobile/commit/089cabcf76089c2ba74aba8c4ffc42cac67e8970))
  * include LaunchLogos again ([93b8e61](https://github.com/tidev/titanium_mobile/commit/93b8e61413fbe34859c179e3fd84408ac3b5962a))
  * update workflow ([8200206](https://github.com/tidev/titanium_mobile/commit/82002069c3134258eee9edb5ca87033a7d5331e8))
  * fix BottomNavigation selection when using activeTab ([471e61d](https://github.com/tidev/titanium_mobile/commit/471e61de42c58c43644ef221be88abca8fb6cedd))
  * clearUserCache method ([405c51a](https://github.com/tidev/titanium_mobile/commit/405c51a03add47fd6c312d8349dce07f9a3cf7af))
  * new WebView property 'multipleWindows' ([a8c7278](https://github.com/tidev/titanium_mobile/commit/a8c7278150b6ed0191727e408b47af7c721c542e))
  * navBarColor for Window ([b2b4ac8](https://github.com/tidev/titanium_mobile/commit/b2b4ac8c94d89ce8cceda52dad6461f475f0f5d3))
  * android library updates ([c026d19](https://github.com/tidev/titanium_mobile/commit/c026d194d9c434591ed8088c376f01b3070468dd))
  * fix screenCaptured crash on Android 13 and lower ([fe01676](https://github.com/tidev/titanium_mobile/commit/fe01676870d771d288adbaccacec078feefc3277))
  * fix gradle build ([16c3122](https://github.com/tidev/titanium_mobile/commit/16c312253fd9bcc09ea672b90d2de381f88f04a6))
  * update clang and lint iphone files ([123e61a](https://github.com/tidev/titanium_mobile/commit/123e61a143bf79fa474e52c932c6089a8c6adfac))
  * parity for `screenshotcaptured`  event ([ad0b76f](https://github.com/tidev/titanium_mobile/commit/ad0b76f940b914244aef2cf1ab83b4d3d450ac8a))
  * another commander place ([14fedc6](https://github.com/tidev/titanium_mobile/commit/14fedc68909870ac22bf3dc77428378159fb709b))
  * update commander ([c8c4a40](https://github.com/tidev/titanium_mobile/commit/c8c4a40a12a4c2aa4164465ecd953f93f1860d80))
  * lower clang ([c5c2329](https://github.com/tidev/titanium_mobile/commit/c5c2329255d640567f1da73048255872dff8e715))
  * updates ([c48b66f](https://github.com/tidev/titanium_mobile/commit/c48b66f1080f248cd518c3143bc11454142062e8))
  * remove more modules ([09624eb](https://github.com/tidev/titanium_mobile/commit/09624eb13ce7068a0f1244c8969752528d6326b7))
  * clean up unused src folders ([6aa9089](https://github.com/tidev/titanium_mobile/commit/6aa90894bd2b56ed6eb89f22ce28fd2927c4cac0))
  * downgrade fs-extras and ssri ([6abced1](https://github.com/tidev/titanium_mobile/commit/6abced144e4f286e0d24c44804c3aeac42e0683f))
  * fix lint ([ee65097](https://github.com/tidev/titanium_mobile/commit/ee6509739c2a97b1ab90bb0aeccb667c68bd05f9))
  * npm package updates ([26f2a73](https://github.com/tidev/titanium_mobile/commit/26f2a739d217c373f5d60e79fdfda963d47f89b9))
  * rename APS classes and remove unused analytics class ([40a61fa](https://github.com/tidev/titanium_mobile/commit/40a61fa76765bdb2ae46d04207265cdee050a7cd))
  * remove aps-analytics.jar and titanium-verify.jar ([d4eb9fc](https://github.com/tidev/titanium_mobile/commit/d4eb9fce08a6343113b3dbd2efd4a28dff094734))
  * remove -u parameter from CLI ([5b468e1](https://github.com/tidev/titanium_mobile/commit/5b468e122b5da15c19137a391b2a2249f37961e3))
  * remove URL question in 'ti create' ([68dd395](https://github.com/tidev/titanium_mobile/commit/68dd3958537c033bc72f7e6bb9f1857577667f3e))
  * node package updates ([579f33c](https://github.com/tidev/titanium_mobile/commit/579f33c16652fe8ab03b18ed1412de097758a6e3))

* Hendrik Bugdoll
  * added dSYM for Swift framework-based modules ([eba5c63](https://github.com/tidev/titanium_mobile/commit/eba5c63e103d9e735f0a14ed8ddf145ffeb16108))
  * added dSYM for TitaniumKit.framework ([4dd433e](https://github.com/tidev/titanium_mobile/commit/4dd433e3696cff5d543e26710645c4b5e2b5d1d9))
  * removed old Studio project file ([87b049b](https://github.com/tidev/titanium_mobile/commit/87b049b52f0783cdece04196290d03f2d1c3b628))
  * fixed Swift compilation conditions and flags ([23c26d3](https://github.com/tidev/titanium_mobile/commit/23c26d313daff361763395b397e427190f649683))
  * fixed TabBarItem update for iOS 18+ ([ef3ae90](https://github.com/tidev/titanium_mobile/commit/ef3ae90b3743705cc9510af78f15bc878f608631))
  * fixed multiple matching destinations warning for SDK build and clean app build ([4f42aeb](https://github.com/tidev/titanium_mobile/commit/4f42aebead4cc4cf22c67bf0d10c85e7f6c504db))
  * removed iOS 8 & 9 guards and fallbacks ([25bb40c](https://github.com/tidev/titanium_mobile/commit/25bb40cbb4df528303d265e94502df15178458d0))
  * removed unused imports and const in install hook ([37a63a2](https://github.com/tidev/titanium_mobile/commit/37a63a2443fd8dd44394490979551438584600a8))
  * improved readme and fixed further wording ([40c0cc0](https://github.com/tidev/titanium_mobile/commit/40c0cc01a80df1c45d355cb84ad960a6b1727371))
  * allowed multiple arguments for further scons commands ([d7919be](https://github.com/tidev/titanium_mobile/commit/d7919bee53b3f68d17fa879e04a4766808714751))
  * removed deprecated buffer init in buffer test ([c83bcf0](https://github.com/tidev/titanium_mobile/commit/c83bcf0e79f9bb42da09696bbe48d7f837ec8f75))
  * removed APSAnalytics framework and analytics stuff ([471ca27](https://github.com/tidev/titanium_mobile/commit/471ca27ed53a5b7b4e04de8dda8aa84480247ab0))
  * fixed further typos and wording ([b55d18a](https://github.com/tidev/titanium_mobile/commit/b55d18a4e3f7fea92f58ed4bfe1a4831d551fd5c))
  * fixed some typos in sources ([d2a91c5](https://github.com/tidev/titanium_mobile/commit/d2a91c5b90cb1c31d352eced71a630c06e41c5a8))
  * opt-out new tab bar under iPadOS 18+ ([3a902e5](https://github.com/tidev/titanium_mobile/commit/3a902e594ea8a417bfb3f3c2951d1b9b621cb39e))
  * fixed test:iphone:trace ([8c034a6](https://github.com/tidev/titanium_mobile/commit/8c034a6160a408399363c0ea951de9c4874d3751))
  * removed old iTunes references in apidoc ([2663745](https://github.com/tidev/titanium_mobile/commit/2663745adf46ce79933e6608c99f1831db75ed50))
  * dropped iTunes Sync ([34e7ea8](https://github.com/tidev/titanium_mobile/commit/34e7ea8b28deee0684cea3b65d46a3dea1ac817a))
  * added trace log option for tests ([4a6f0a2](https://github.com/tidev/titanium_mobile/commit/4a6f0a29a30af8d86a5f1e96b740874a3dd600c2))
  * dropped iTunes artwork generation ([6b683f2](https://github.com/tidev/titanium_mobile/commit/6b683f214a06236b2b65002a525d2eefc6def5a4))
  * memory display parity with CLI ([0c9cf2b](https://github.com/tidev/titanium_mobile/commit/0c9cf2bb7cf50eae47b31614ffe1052f0e295d98))
  * simulator background modes warnings ([3424f05](https://github.com/tidev/titanium_mobile/commit/3424f05db4c19157b42f9775dd474e04ba95adab))

* Prashant Saini
  * add script message handler support to Android WebView ([be49840](https://github.com/tidev/titanium_mobile/commit/be4984007eea273e216f16ade64302b265a2a2a7))

* Chris Barber
  * overwrite modules on local SDK build install ([9ca14af](https://github.com/tidev/titanium_mobile/commit/9ca14afedbf1b5356189e5a74219a9b0176a9ba0))
  * rename master to main in files ([f53ddeb](https://github.com/tidev/titanium_mobile/commit/f53ddebe916dc9f509d52cbc0e203f4b0a000eda))
  * show error if build command's config fails ([71d14f6](https://github.com/tidev/titanium_mobile/commit/71d14f6756375edf38d88efcc0a52203b7c3cbae))
  * Refactor Node.js code to ESM (#14040) ([b058a7f](https://github.com/tidev/titanium_mobile/commit/b058a7feb6505d05413e24eb684b726441c66ae2))

