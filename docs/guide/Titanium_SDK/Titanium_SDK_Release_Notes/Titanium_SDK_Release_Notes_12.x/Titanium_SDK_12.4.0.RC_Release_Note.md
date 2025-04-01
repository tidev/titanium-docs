---
title: Titanium SDK 12.4.0.RC - 10 July 2024
weight: '24'
---

# Titanium SDK 12.4.0.RC Release Note

## Titanium SDK 12.4.0.RC - 10 July 2024

## About this release

Titanium SDK 12.4.0 is a minor release of the SDK, adding new features and platform updates.

## Community Credits

* Michael Gangolf
  * optionBar color properties ([d5cff3c](https://github.com/tidev/titanium_mobile/commit/d5cff3c32d33b2df2469af949c54c4bab1734676))
  * fix webpack command name issue ([420ccdc](https://github.com/tidev/titanium_mobile/commit/420ccdceadff8658803e02bb6144e853c8767a20))
  * new Android Studio settings xml ([ceda65e](https://github.com/tidev/titanium_mobile/commit/ceda65eb73492c671b6dc74639dee072fa512439))
  * track color of the Ti.UI.Switch ([07df689](https://github.com/tidev/titanium_mobile/commit/07df6890e2a363f40e44757147287bf307e86808))
  * prepare SDK for Android 34 ([ada10bb](https://github.com/tidev/titanium_mobile/commit/ada10bb065851d4b8c55e1342b2a888a776ad381))
  * add iOS WebViewConfiguration link ([9f85623](https://github.com/tidev/titanium_mobile/commit/9f85623fa45dda478124a9b52794c77eb60bd5ac))
  * ioslib update ([7b82317](https://github.com/tidev/titanium_mobile/commit/7b82317907a492b57c52059d8a648ad0e07fb834))
  * new event for empty TextFields ([29964cf](https://github.com/tidev/titanium_mobile/commit/29964cf5a6830948b802810a41e42230c3b1e820))
  * textAlignment for DatePicker ([afb253e](https://github.com/tidev/titanium_mobile/commit/afb253e697442cb6bafdb430a9d8d3539235d58e))
  * add source to webView fireEvent ([960d40c](https://github.com/tidev/titanium_mobile/commit/960d40cd153fc3ee9e0cad09e5171a7a65c62253))
  * remove some dead analytics code ([6926f0d](https://github.com/tidev/titanium_mobile/commit/6926f0d9bfc177fe74e43fa1242adc8f30972cae))
  * update ti.playservice to 18.3.0 ([dc180b9](https://github.com/tidev/titanium_mobile/commit/dc180b94f05aa810aa1f302958ee3f6b36ae69c4))
  * expose contentOffset getter in TableView/ListView ([1f75084](https://github.com/tidev/titanium_mobile/commit/1f7508484839ec20626f6c189e94068fca042f08))
  * ndk update ([a852835](https://github.com/tidev/titanium_mobile/commit/a852835f7612d9c0ab034872a0439461dddde488))
  * add moveToBackground method ([229ef10](https://github.com/tidev/titanium_mobile/commit/229ef10fcfba15ad3050af9266aca8f2c2012448))
  * videoPlayer speed property ([7b9a4e9](https://github.com/tidev/titanium_mobile/commit/7b9a4e92b2e26cc6d8816c1f7fbfda06316997b6))
  * bundle webp res files ([6552a2c](https://github.com/tidev/titanium_mobile/commit/6552a2ccb0c11d01a6bcf185f228dcac709b0453))
  * adaptive icons in default template ([2e0e2e5](https://github.com/tidev/titanium_mobile/commit/2e0e2e5dfa8a726561d2f15daad65a9fec7afa3a))
  * attributedString link example ([cb69378](https://github.com/tidev/titanium_mobile/commit/cb6937849970ac8417ea87f950b03467668672cd))
  * update TabbedBar Android properties ([f5dfa92](https://github.com/tidev/titanium_mobile/commit/f5dfa923fcf649a10e861251d87a073526af2896))
  * node-appc update ([644831f](https://github.com/tidev/titanium_mobile/commit/644831f18e6f35e987992da3f72e294e0d9649be))
  * create alloy project with spaces with --alloy ([c601e7e](https://github.com/tidev/titanium_mobile/commit/c601e7e7579b7b527cc2321b63c82232b169faf4))
  * improve accessibility text ([3171e14](https://github.com/tidev/titanium_mobile/commit/3171e140fd106afb3b42f09076b1cc0a0b86f895))
  * remove some deprecated classes ([e1f2dc1](https://github.com/tidev/titanium_mobile/commit/e1f2dc1e4b246c7156e31fd68a287ca04cc4b752))
  * raise android max sdk support ([eb87849](https://github.com/tidev/titanium_mobile/commit/eb87849b67b68205567247e20e30c7d43e8ea990))
  * add overrideUserInterfaceStyle to Picker ([0c93fa7](https://github.com/tidev/titanium_mobile/commit/0c93fa77aa911e92d3dfbae312e2884706414753))
  * fixing typos ([a298387](https://github.com/tidev/titanium_mobile/commit/a2983877b5a7d6c14bdfdc5426a82e2aca590074))
  * improve the ScrollableView clipView description ([940ca9e](https://github.com/tidev/titanium_mobile/commit/940ca9e959aad1010cc42c6196d9a21a92febc0b))
  * npm packages ([48afddf](https://github.com/tidev/titanium_mobile/commit/48afddf5652602ae2f8cc376d9a37156c828d9c1))
  * hide scrollbars in WebView ([6642ed1](https://github.com/tidev/titanium_mobile/commit/6642ed16ec984331cafa62658a887b33c6a9cd2f))
  * indent log correctly ([a7b145d](https://github.com/tidev/titanium_mobile/commit/a7b145d5668b661f903fdfe53b380bd35a82265a))
  * backgroundColor for RefreshControl ([4f78a79](https://github.com/tidev/titanium_mobile/commit/4f78a79cc51b9a90fa7eb2226e98fad471a6db8d))
  * defaultLang option in tiapp.xml ([07e9a6a](https://github.com/tidev/titanium_mobile/commit/07e9a6ac58a72178c35bda6fdf298860d7786885))
  * pass platform to tiappxml ([760ca45](https://github.com/tidev/titanium_mobile/commit/760ca45c9b63c0aa06940a36010d051b7bb2cbed))
  * try/catch around unlink snapshots ([115bbb2](https://github.com/tidev/titanium_mobile/commit/115bbb24214374228d06a299ce720e72661785cb))
  * update gradle ([e41650c](https://github.com/tidev/titanium_mobile/commit/e41650cd9d088435e8e9641ceae5a2802223a3d2))
  * add info about iOS foreground notifications ([4e5ca53](https://github.com/tidev/titanium_mobile/commit/4e5ca53bf58db474d968bbe1616fcca6d18b2b90))
  * link idleTimerDisabled and keepScreenOn ([bd5c5e7](https://github.com/tidev/titanium_mobile/commit/bd5c5e71d24b04691b510f96b1567da16a5b8283))
  * fix some doc errors ([cf14a9b](https://github.com/tidev/titanium_mobile/commit/cf14a9b4ed83cef111e80d87189cc3e89a906d11))
  * update ti.map ([5eb950c](https://github.com/tidev/titanium_mobile/commit/5eb950ce1c3392f26496a6c6317b5dea24eee9e4))

* Hans Knöchel
  * add missing “Calendar.Event.remove” method ([d1bbe8a](https://github.com/tidev/titanium_mobile/commit/d1bbe8ac2d5fc8530858bcaa48b56d94b9c407e4))
  * add swipe actions support for Ti.UI.TableView ([40808cd](https://github.com/tidev/titanium_mobile/commit/40808cd5ffed82abaeb7e7523100f901f336298f))
  * add iOS 17+ symbol effects ([84ccadb](https://github.com/tidev/titanium_mobile/commit/84ccadbdcbe9b800ebc08dbac8ae5eaeac36a7f8))
  * update changelog ([9f144c1](https://github.com/tidev/titanium_mobile/commit/9f144c12c28fe6ead59237759c53c40509f3d4cc))
  * bump master to 12.4.0 ([2f1212f](https://github.com/tidev/titanium_mobile/commit/2f1212fd9e46a4a8aeae0af7a850aaa7bff34e52))
  * address all whitespace-related linting issues part 2 ([8c92dc7](https://github.com/tidev/titanium_mobile/commit/8c92dc7521219efebad8943a5305348014bd32e4))
  * address all whitespace-related linting issues ([e2bf653](https://github.com/tidev/titanium_mobile/commit/e2bf653d406b772deeafb504a0b9f68e363cf3e5))
  * fix linting issues ([bf24bf2](https://github.com/tidev/titanium_mobile/commit/bf24bf26ae07ebda2e2d70c23de198bac6b2ba8e))
  * Revert "feat(ios): support multi-scene applications (#13941)" ([82203d7](https://github.com/tidev/titanium_mobile/commit/82203d782fd499a33723bf86b41e1019e50bc99d))
  * fix some open issues related to scenes ([a0a3aea](https://github.com/tidev/titanium_mobile/commit/a0a3aeaf666b864fbcb75e57f011a142dbae715c))
  * update 12.3.0 changelog ([f97a27b](https://github.com/tidev/titanium_mobile/commit/f97a27b72d7c3195badc3fecac725f5888f3a572))
  * fix debug issues with scenes ([8bcd5c3](https://github.com/tidev/titanium_mobile/commit/8bcd5c31a8dc86415c231a6086c1d83bbb183565))
  * Revert "feat(ios): support multi-scene applications (#13941)" ([4a1d20f](https://github.com/tidev/titanium_mobile/commit/4a1d20f43c82296dd21bfd760fa63b65927e98fd))
  * add 12.3.0.GA changelog ([4cc78b0](https://github.com/tidev/titanium_mobile/commit/4cc78b0d2d506d987ddd0cc58c785a8c18f3ef26))


## Bug Fixes

### Multiple platforms

* create alloy project with spaces with --alloy ([c601e7e](https://github.com/tidev/titanium_mobile/commit/c601e7e7579b7b527cc2321b63c82232b169faf4))
* fix linting issues ([bf24bf2](https://github.com/tidev/titanium_mobile/commit/bf24bf26ae07ebda2e2d70c23de198bac6b2ba8e))

### Android platform

* add missing “Calendar.Event.remove” method ([d1bbe8a](https://github.com/tidev/titanium_mobile/commit/d1bbe8ac2d5fc8530858bcaa48b56d94b9c407e4))
* bundle webp res files ([6552a2c](https://github.com/tidev/titanium_mobile/commit/6552a2ccb0c11d01a6bcf185f228dcac709b0453))
* remove some deprecated classes ([e1f2dc1](https://github.com/tidev/titanium_mobile/commit/e1f2dc1e4b246c7156e31fd68a287ca04cc4b752))

### iOS platform

* fix debug issues with scenes ([8bcd5c3](https://github.com/tidev/titanium_mobile/commit/8bcd5c31a8dc86415c231a6086c1d83bbb183565))
* fix some open issues related to scenes ([a0a3aea](https://github.com/tidev/titanium_mobile/commit/a0a3aeaf666b864fbcb75e57f011a142dbae715c))

## Features

### Multiple platforms

* add swipe actions support for Ti.UI.TableView ([40808cd](https://github.com/tidev/titanium_mobile/commit/40808cd5ffed82abaeb7e7523100f901f336298f))

### Android platform

* adaptive icons in default template ([2e0e2e5](https://github.com/tidev/titanium_mobile/commit/2e0e2e5dfa8a726561d2f15daad65a9fec7afa3a))
* add moveToBackground method ([229ef10](https://github.com/tidev/titanium_mobile/commit/229ef10fcfba15ad3050af9266aca8f2c2012448))
* add source to webView fireEvent ([960d40c](https://github.com/tidev/titanium_mobile/commit/960d40cd153fc3ee9e0cad09e5171a7a65c62253))
* defaultLang option in tiapp.xml ([07e9a6a](https://github.com/tidev/titanium_mobile/commit/07e9a6ac58a72178c35bda6fdf298860d7786885))
* expose contentOffset getter in TableView/ListView ([1f75084](https://github.com/tidev/titanium_mobile/commit/1f7508484839ec20626f6c189e94068fca042f08))
* hide scrollbars in WebView ([6642ed1](https://github.com/tidev/titanium_mobile/commit/6642ed16ec984331cafa62658a887b33c6a9cd2f))
* improve accessibility text ([3171e14](https://github.com/tidev/titanium_mobile/commit/3171e140fd106afb3b42f09076b1cc0a0b86f895))
* indent log correctly ([a7b145d](https://github.com/tidev/titanium_mobile/commit/a7b145d5668b661f903fdfe53b380bd35a82265a))
* new event for empty TextFields ([29964cf](https://github.com/tidev/titanium_mobile/commit/29964cf5a6830948b802810a41e42230c3b1e820))
* optionBar color properties ([d5cff3c](https://github.com/tidev/titanium_mobile/commit/d5cff3c32d33b2df2469af949c54c4bab1734676))
* textAlignment for DatePicker ([afb253e](https://github.com/tidev/titanium_mobile/commit/afb253e697442cb6bafdb430a9d8d3539235d58e))
* track color of the Ti.UI.Switch ([07df689](https://github.com/tidev/titanium_mobile/commit/07df6890e2a363f40e44757147287bf307e86808))
* update gradle ([e41650c](https://github.com/tidev/titanium_mobile/commit/e41650cd9d088435e8e9641ceae5a2802223a3d2))
* update ti.playservice to 18.3.0 ([dc180b9](https://github.com/tidev/titanium_mobile/commit/dc180b94f05aa810aa1f302958ee3f6b36ae69c4))
* videoPlayer speed property ([7b9a4e9](https://github.com/tidev/titanium_mobile/commit/7b9a4e92b2e26cc6d8816c1f7fbfda06316997b6))

### iOS platform

* add iOS 17+ symbol effects ([84ccadb](https://github.com/tidev/titanium_mobile/commit/84ccadbdcbe9b800ebc08dbac8ae5eaeac36a7f8))
* add overrideUserInterfaceStyle to Picker ([0c93fa7](https://github.com/tidev/titanium_mobile/commit/0c93fa77aa911e92d3dfbae312e2884706414753))
* backgroundColor for RefreshControl ([4f78a79](https://github.com/tidev/titanium_mobile/commit/4f78a79cc51b9a90fa7eb2226e98fad471a6db8d))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 12.1.0 | 14.0.0 |
| ti.map | 5.6.1 | 7.3.1 |
| ti.webdialog | 2.3.0 | 3.0.2 |
| ti.playservices | 18.3.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.6 | 7.0.6 |
