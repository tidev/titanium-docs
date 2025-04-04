---
title: Titanium SDK 12.0.0.RC - 12 December 2022
weight: '10'
---

# Titanium SDK 12.0.0.RC Release Note

## Titanium SDK 12.0.0.RC - 12 December 2022

## About this release

Titanium SDK 12.0.0 is a major release of the SDK, addressing high-priority issues from previous releases.


## Community Credits

* Hans Knöchel
  * include list state reference in “movestart” event ([ffee75d](https://github.com/tidev/titanium-sdk/commit/ffee75de20efba2c2d0b00b9ab12c14f81b86035))
  * add Dynamic Island support ([f000f3b](https://github.com/tidev/titanium-sdk/commit/f000f3ba9b228aadbcab88ff734438a202ae9c8c))
  * remove unused podspec templace, migrate module template to fix warnings ([e6ac1b3](https://github.com/tidev/titanium-sdk/commit/e6ac1b308cf5477aafc5ae79e561df63670f9a65))
  * redesigned error view ([4232487](https://github.com/tidev/titanium-sdk/commit/4232487aa54c9b8eed038ede29eb7edf92dfa0a5))
  * add null-guard for activity in listview ([34c8b9d](https://github.com/tidev/titanium-sdk/commit/34c8b9da7ec956c76a5f511eb6a9f9214cd38168))
  * be able to detect an emulated iOS app on Apple Silicon ([c225669](https://github.com/tidev/titanium-sdk/commit/c225669ea4eb12951313c277bf5b61abcad73283))
  * clean up default app template ([7cbabb4](https://github.com/tidev/titanium-sdk/commit/7cbabb4871a69ef4191c0805f4b2535380cb8691))
  * fix unbalanced view controller transitions causing issues on iOS 16+ ([50814d7](https://github.com/tidev/titanium-sdk/commit/50814d717910f5b42b6f61972b30f8d10f85a268))
  * guard “example” directory and LICENSE during module build ([95deb4e](https://github.com/tidev/titanium-sdk/commit/95deb4ed843c2d59f6a36880a5cd9c644e1c2600))
  * add Xcode 14 guards, bump minimum iOS version to 13.0 ([0ab0163](https://github.com/tidev/titanium-sdk/commit/0ab01636c3f2a4ddc20d0b84e8fc0e532365b2d1))
  * fix rare crash in Ti.UI.TableView ([10f084f](https://github.com/tidev/titanium-sdk/commit/10f084f9ce60a64ee52f038b19fea5940bc230c7))
  * bump master to 12.0.0 ([3af83a5](https://github.com/tidev/titanium-sdk/commit/3af83a5f2adde0d1cab19febe4edc87f32dbb2e3))

* Michael Gangolf
  * fixing filenames for titanium-docs ([84eed15](https://github.com/tidev/titanium-sdk/commit/84eed159fb65b39752288f423c8e09bdf2a0d392))
  * remove windows images ([7e500b1](https://github.com/tidev/titanium-sdk/commit/7e500b13d22aa30e252be9bd2a02673b3dbd9771))
  * remove ACA in builder ([9d3617d](https://github.com/tidev/titanium-sdk/commit/9d3617d313342cadd25f5b4e34109c52b4586a1e))
  * update default tidev modules ([4ae258d](https://github.com/tidev/titanium-sdk/commit/4ae258da01e3fa328c83914f826dbab57607bf44))
  * adding missing platform to Progressbar.tintColor ([ede3af5](https://github.com/tidev/titanium-sdk/commit/ede3af51ee92eaeba3a03ee79f5c69499dda9b3c))
  * fix textfield autocorrect:false ([29f5807](https://github.com/tidev/titanium-sdk/commit/29f580773ddeace21c78be06f6286701b9851c2c))
  * update libraries ([4dd041c](https://github.com/tidev/titanium-sdk/commit/4dd041ce51763c469f6e8bada972c1a224f90f31))
  * Update TiUITableView.m (#13652) ([580743e](https://github.com/tidev/titanium-sdk/commit/580743edd05b1202a2a8d484ef6db2156cee4367))
  * try/catch in ti.blob loadBitmapInfo ([569a3e0](https://github.com/tidev/titanium-sdk/commit/569a3e061e67d2c90678471eb23aaed2676390bb))
  * update example and readme ([cbfd4c3](https://github.com/tidev/titanium-sdk/commit/cbfd4c3858e141d02580ac4a22a8aef5c3cd52cb))
  * add more images and examples ([3b66561](https://github.com/tidev/titanium-sdk/commit/3b66561d3cd2f6f09289a4b5297f094bf4956810))
  * create Alloy project optimization ([e18c213](https://github.com/tidev/titanium-sdk/commit/e18c21320e2fe588571c9586db87df9c80f67c88))
  * searchBar iconColor ([7fc1c5c](https://github.com/tidev/titanium-sdk/commit/7fc1c5c27679189f650eab7dd8cd4ee554aa2dd9))
  * fixed some TiConvert.toColor warnings ([12b2a71](https://github.com/tidev/titanium-sdk/commit/12b2a7144cddf21a8dcfc1276b5aa4cb0fee678b))
  * fix broken tests ([6c91a4c](https://github.com/tidev/titanium-sdk/commit/6c91a4cbf57b4891ef711d22a781c1d1951aaead))
  * drawer events for rightView ([b837cc2](https://github.com/tidev/titanium-sdk/commit/b837cc29abef976360593fc7bf2804af5ed82cad))
  * material you themes ([3ef9b66](https://github.com/tidev/titanium-sdk/commit/3ef9b664bd9c7abc5c41a43c2081307c3b8dc56b))
  * improve Android Calendar docs ([73c4af4](https://github.com/tidev/titanium-sdk/commit/73c4af45b36560e3303c572e741f782c3a9dd473))
  * add getLastLocation to FusedLocationProvider ([0155e42](https://github.com/tidev/titanium-sdk/commit/0155e421ecf3c4fc4c53094f70819fac1c472878))
  * clean up Andorid min osver ([9202366](https://github.com/tidev/titanium-sdk/commit/9202366cec8e81d772d6acfd06db993b1e823963))
  * github build action ([96a0abc](https://github.com/tidev/titanium-sdk/commit/96a0abc06079d4beacce13bed842ed9ffb1e39be))
  * use maxMemory as property ([f6e6586](https://github.com/tidev/titanium-sdk/commit/f6e658601ffa18d1b620a52610850c71bb8417ea))
  * delete notification channel ([e8e06cd](https://github.com/tidev/titanium-sdk/commit/e8e06cda9512e8384fe00fc78af31631b672bfa6))
  * ignoreLog config ([4c042ee](https://github.com/tidev/titanium-sdk/commit/4c042ee9ee6e588a0d08f6fd315df05837345702))
  * update Android transition example ([a6b6987](https://github.com/tidev/titanium-sdk/commit/a6b69874e62b72641cd5a141b413431499008864))
  * expose Picker text color ([e37bef9](https://github.com/tidev/titanium-sdk/commit/e37bef9d671585ff93de4fda72c9d01f97443826))
  * optimize module build ([4840523](https://github.com/tidev/titanium-sdk/commit/4840523ed315ce563fdd8cf429a56b15d315970f))
  * delete old removed items ([fc3d508](https://github.com/tidev/titanium-sdk/commit/fc3d5080ad1b0152a8e14bae6a53630f2d2b9631))
  * lower build gradle ([b737e76](https://github.com/tidev/titanium-sdk/commit/b737e7675a358ede3d0360f4a393836f63b0ae5d))
  * Android 13 updates ([fa604fa](https://github.com/tidev/titanium-sdk/commit/fa604fac971579225c156a51f749011a416b2c74))
  * optimize ListView continuousUpdate ([ca73559](https://github.com/tidev/titanium-sdk/commit/ca7355975f2f1e3724fd8359f69bc9c2fb9f464f))
  * tabbedbar color properties ([2453af6](https://github.com/tidev/titanium-sdk/commit/2453af6f27fc9a15520c4a2b3d8ca73ad58bb395))

* Jan Vennemann
  * correct method name for isTranslatedBinaryOnAppleSilicon ([bb89d44](https://github.com/tidev/titanium-sdk/commit/bb89d449ce9d17da0cbbd2587bd3a3529b9e3ca7))


## Bug Fixes

### Multiple platforms

* fix broken tests ([6c91a4c](https://github.com/tidev/titanium-sdk/commit/6c91a4cbf57b4891ef711d22a781c1d1951aaead))
* adding missing platform to Progressbar.tintColor ([ede3af5](https://github.com/tidev/titanium-sdk/commit/ede3af51ee92eaeba3a03ee79f5c69499dda9b3c))
* fixing filenames for titanium-docs ([84eed15](https://github.com/tidev/titanium-sdk/commit/84eed159fb65b39752288f423c8e09bdf2a0d392))
* guard “example” directory and LICENSE during module build ([95deb4e](https://github.com/tidev/titanium-sdk/commit/95deb4ed843c2d59f6a36880a5cd9c644e1c2600))

### Android platform

* add null-guard for activity in listview ([34c8b9d](https://github.com/tidev/titanium-sdk/commit/34c8b9da7ec956c76a5f511eb6a9f9214cd38168))
* drawer events for rightView ([b837cc2](https://github.com/tidev/titanium-sdk/commit/b837cc29abef976360593fc7bf2804af5ed82cad))
* fixed some TiConvert.toColor warnings ([12b2a71](https://github.com/tidev/titanium-sdk/commit/12b2a7144cddf21a8dcfc1276b5aa4cb0fee678b))
* github build action ([96a0abc](https://github.com/tidev/titanium-sdk/commit/96a0abc06079d4beacce13bed842ed9ffb1e39be))
* lower build gradle ([b737e76](https://github.com/tidev/titanium-sdk/commit/b737e7675a358ede3d0360f4a393836f63b0ae5d))
* try/catch in ti.blob loadBitmapInfo ([569a3e0](https://github.com/tidev/titanium-sdk/commit/569a3e061e67d2c90678471eb23aaed2676390bb))
* use maxMemory as property ([f6e6586](https://github.com/tidev/titanium-sdk/commit/f6e658601ffa18d1b620a52610850c71bb8417ea))

### iOS platform

* fix rare crash in Ti.UI.TableView ([10f084f](https://github.com/tidev/titanium-sdk/commit/10f084f9ce60a64ee52f038b19fea5940bc230c7))
* fix textfield autocorrect:false ([29f5807](https://github.com/tidev/titanium-sdk/commit/29f580773ddeace21c78be06f6286701b9851c2c))
* fix unbalanced view controller transitions causing issues on iOS 16+ ([50814d7](https://github.com/tidev/titanium-sdk/commit/50814d717910f5b42b6f61972b30f8d10f85a268))
* optimize ListView continuousUpdate ([ca73559](https://github.com/tidev/titanium-sdk/commit/ca7355975f2f1e3724fd8359f69bc9c2fb9f464f))

## Features

### Multiple platforms

* create Alloy project optimization ([e18c213](https://github.com/tidev/titanium-sdk/commit/e18c21320e2fe588571c9586db87df9c80f67c88))
* remove ACA in builder ([9d3617d](https://github.com/tidev/titanium-sdk/commit/9d3617d313342cadd25f5b4e34109c52b4586a1e))
* update default tidev modules ([4ae258d](https://github.com/tidev/titanium-sdk/commit/4ae258da01e3fa328c83914f826dbab57607bf44))
* delete old removed items ([fc3d508](https://github.com/tidev/titanium-sdk/commit/fc3d5080ad1b0152a8e14bae6a53630f2d2b9631))
* improve Android Calendar docs ([73c4af4](https://github.com/tidev/titanium-sdk/commit/73c4af45b36560e3303c572e741f782c3a9dd473))
* remove windows images ([7e500b1](https://github.com/tidev/titanium-sdk/commit/7e500b13d22aa30e252be9bd2a02673b3dbd9771))
* update example and readme ([cbfd4c3](https://github.com/tidev/titanium-sdk/commit/cbfd4c3858e141d02580ac4a22a8aef5c3cd52cb))
* add Xcode 14 guards, bump minimum iOS version to 13.0 ([0ab0163](https://github.com/tidev/titanium-sdk/commit/0ab01636c3f2a4ddc20d0b84e8fc0e532365b2d1))
* bump master to 12.0.0 ([3af83a5](https://github.com/tidev/titanium-sdk/commit/3af83a5f2adde0d1cab19febe4edc87f32dbb2e3))

### Android platform

* add getLastLocation to FusedLocationProvider ([0155e42](https://github.com/tidev/titanium-sdk/commit/0155e421ecf3c4fc4c53094f70819fac1c472878))
* Android 13 updates ([fa604fa](https://github.com/tidev/titanium-sdk/commit/fa604fac971579225c156a51f749011a416b2c74))
* clean up Andorid min osver ([9202366](https://github.com/tidev/titanium-sdk/commit/9202366cec8e81d772d6acfd06db993b1e823963))
* delete notification channel ([e8e06cd](https://github.com/tidev/titanium-sdk/commit/e8e06cda9512e8384fe00fc78af31631b672bfa6))
* expose Picker text color ([e37bef9](https://github.com/tidev/titanium-sdk/commit/e37bef9d671585ff93de4fda72c9d01f97443826))
* ignoreLog config ([4c042ee](https://github.com/tidev/titanium-sdk/commit/4c042ee9ee6e588a0d08f6fd315df05837345702))
* material you themes ([3ef9b66](https://github.com/tidev/titanium-sdk/commit/3ef9b664bd9c7abc5c41a43c2081307c3b8dc56b))
* optimize module build ([4840523](https://github.com/tidev/titanium-sdk/commit/4840523ed315ce563fdd8cf429a56b15d315970f))
* searchBar iconColor ([7fc1c5c](https://github.com/tidev/titanium-sdk/commit/7fc1c5c27679189f650eab7dd8cd4ee554aa2dd9))
* tabbedbar color properties ([2453af6](https://github.com/tidev/titanium-sdk/commit/2453af6f27fc9a15520c4a2b3d8ca73ad58bb395))
* update libraries ([4dd041c](https://github.com/tidev/titanium-sdk/commit/4dd041ce51763c469f6e8bada972c1a224f90f31))

### iOS platform

* add Dynamic Island support ([f000f3b](https://github.com/tidev/titanium-sdk/commit/f000f3ba9b228aadbcab88ff734438a202ae9c8c))
* be able to detect an emulated iOS app on Apple Silicon ([c225669](https://github.com/tidev/titanium-sdk/commit/c225669ea4eb12951313c277bf5b61abcad73283))
* redesigned error view ([4232487](https://github.com/tidev/titanium-sdk/commit/4232487aa54c9b8eed038ede29eb7edf92dfa0a5))

## BREAKING CHANGES


## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 12.0.0 | 13.0.0 |
| ti.map | 5.5.0 | 7.0.0 |
| ti.webdialog | 2.2.0 | 3.0.2 |
| ti.playservices | 18.1.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.4 | 7.0.4 |
