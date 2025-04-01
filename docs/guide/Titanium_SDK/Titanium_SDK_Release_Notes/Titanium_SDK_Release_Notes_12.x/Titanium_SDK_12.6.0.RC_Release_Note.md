---
title: Titanium SDK 12.6.0.RC - 01 December 2024
weight: '29'
---

# Titanium SDK 12.6.0.RC Release Note

## Titanium SDK 12.6.0.RC - 01 December 2024

## About this release

Titanium SDK 12.6.0 is a minor release of the SDK, adding new features and addressing potential bugs from previous releases.

## Community Credits

* Michael Gangolf
  * update node-titanium-sdk ([5c25ec1](https://github.com/tidev/titanium_mobile/commit/5c25ec197b929c341b1c51a0429c87454ebb9c75))
  * optimize cameraX rotation after camera is active ([69b645f](https://github.com/tidev/titanium_mobile/commit/69b645f185d860b4371ae5c912fd2b36e55bbfda))
  * tableView row parent ([6fc9dcb](https://github.com/tidev/titanium_mobile/commit/6fc9dcbb40d0c1c739af5d9a2b5fe2088f7398fd))
  * findStateDrawableIndex reflection method ([4364a7c](https://github.com/tidev/titanium_mobile/commit/4364a7c1c6b8b826ceb5e2bb0f35648e88e4b2de))
  * fix starting activity when launching from home screen ([c69e2ec](https://github.com/tidev/titanium_mobile/commit/c69e2ecfcd5594fd9a6e137b25537d6501084044))
  * webview content will fill up the whole Ti.UI.WebView by default ([c817069](https://github.com/tidev/titanium_mobile/commit/c817069cbfc3de352e7fa0d7b93dea45294a7c6e))
  * fix Material3 BottomNavigation height ([d83d64e](https://github.com/tidev/titanium_mobile/commit/d83d64ef4573d5301337d813c6f104b95566f888))
  * add x/y to ScrollView drag events ([70073c4](https://github.com/tidev/titanium_mobile/commit/70073c425c72d7e3a62ed2bb749c896b0cff832b))
  * enable gradle config caching ([6f0d755](https://github.com/tidev/titanium_mobile/commit/6f0d755e05a01d5abbc66d5610af5f6fdfdceaf8))
  * add direction to ListView scrolling ([81d5d1e](https://github.com/tidev/titanium_mobile/commit/81d5d1e79b13f6677041256e7416f72662c2f2dc))
  * build module with example app ([b8d1a8f](https://github.com/tidev/titanium_mobile/commit/b8d1a8fe6a8a7b6c4d2209f2873f4a3eb0c52981))
  * update NotificationChannel example ([cd0b55f](https://github.com/tidev/titanium_mobile/commit/cd0b55fd4a7263b96f31918f229cf3f1b6de0aa0))
  * update gradle files ([f3676e1](https://github.com/tidev/titanium_mobile/commit/f3676e19e1eacadba532010f511f6123efc0f244))
  * add responseDictionary to HTTPClient documentation ([d98f6a6](https://github.com/tidev/titanium_mobile/commit/d98f6a6fbf5d6406ceb20492ba89410400b6a95c))

* Hans Knöchel
  * update hyperloop to 7.0.9 to fix dex issues ([829d4ab](https://github.com/tidev/titanium_mobile/commit/829d4ab2b481e5cb4e5ee399ab8cad419267c21d))
  * update ti.facebook to latest ([5aec767](https://github.com/tidev/titanium_mobile/commit/5aec767eb550e95a2ae86395e6bdfdb661f5e661))
  * update hyperloop to 7.0.8 to support SDK 12.6.0+ ([c5f2132](https://github.com/tidev/titanium_mobile/commit/c5f2132e87d2eca048e2c866ed9e8f2457d7994a))
  * update hyperloop to 7.0.7 ([d084485](https://github.com/tidev/titanium_mobile/commit/d084485ed0bd0c0bfcc84154ad543be4ccdd59cf))

* dlewis23
  * iOS 18 dark mode icons (#14138) ([8f201d9](https://github.com/tidev/titanium_mobile/commit/8f201d94bd13dc3a7c67ce850d11c828d2ca12e7))

* Abdullah Al-Faqeir
  * override user interface style ([5bebfdb](https://github.com/tidev/titanium_mobile/commit/5bebfdb97f59e3cb76a7eb82d6d940762563b6ab))
  * fixing not finding themes when building sdk app.js ([5dd0259](https://github.com/tidev/titanium_mobile/commit/5dd0259b7a2310f92f45f78e52913437d93b4677))
  * be able to add plugins to build.gradle ([e1212e9](https://github.com/tidev/titanium_mobile/commit/e1212e9fccd79f5c302a8380157288df356081da))
  * gradle 8 ([50d8604](https://github.com/tidev/titanium_mobile/commit/50d8604ea40b4c2aacb55ee1128a2706f421715c))
  * ios click speed ([6cc8830](https://github.com/tidev/titanium_mobile/commit/6cc8830f874474a176cc181390e4d3c18f7b8b38))

* Douglas Alves
  * handle x/y position for touch in dragstart/dragend events on iOS ([62e9d4a](https://github.com/tidev/titanium_mobile/commit/62e9d4abfdaf893b854465b8d0766fa662ca6f35))


## Bug Fixes

### Android platform

* build module with example app ([b8d1a8f](https://github.com/tidev/titanium_mobile/commit/b8d1a8fe6a8a7b6c4d2209f2873f4a3eb0c52981))
* findStateDrawableIndex reflection method ([4364a7c](https://github.com/tidev/titanium_mobile/commit/4364a7c1c6b8b826ceb5e2bb0f35648e88e4b2de))
* fix Material3 BottomNavigation height ([d83d64e](https://github.com/tidev/titanium_mobile/commit/d83d64ef4573d5301337d813c6f104b95566f888))
* fix starting activity when launching from home screen ([c69e2ec](https://github.com/tidev/titanium_mobile/commit/c69e2ecfcd5594fd9a6e137b25537d6501084044))
* fixing not finding themes when building sdk app.js ([5dd0259](https://github.com/tidev/titanium_mobile/commit/5dd0259b7a2310f92f45f78e52913437d93b4677))
* ios click speed ([6cc8830](https://github.com/tidev/titanium_mobile/commit/6cc8830f874474a176cc181390e4d3c18f7b8b38))
* optimize cameraX rotation after camera is active ([69b645f](https://github.com/tidev/titanium_mobile/commit/69b645f185d860b4371ae5c912fd2b36e55bbfda))
* override user interface style ([5bebfdb](https://github.com/tidev/titanium_mobile/commit/5bebfdb97f59e3cb76a7eb82d6d940762563b6ab))
* tableView row parent ([6fc9dcb](https://github.com/tidev/titanium_mobile/commit/6fc9dcbb40d0c1c739af5d9a2b5fe2088f7398fd))

## Features

### Multiple platforms

* update ti.facebook to latest ([5aec767](https://github.com/tidev/titanium_mobile/commit/5aec767eb550e95a2ae86395e6bdfdb661f5e661))
* update hyperloop to 7.0.7 ([d084485](https://github.com/tidev/titanium_mobile/commit/d084485ed0bd0c0bfcc84154ad543be4ccdd59cf))
* update hyperloop to 7.0.8 to support SDK 12.6.0+ ([c5f2132](https://github.com/tidev/titanium_mobile/commit/c5f2132e87d2eca048e2c866ed9e8f2457d7994a))
* update hyperloop to 7.0.9 to fix dex issues ([829d4ab](https://github.com/tidev/titanium_mobile/commit/829d4ab2b481e5cb4e5ee399ab8cad419267c21d))

### Android platform

* add x/y to ScrollView drag events ([70073c4](https://github.com/tidev/titanium_mobile/commit/70073c425c72d7e3a62ed2bb749c896b0cff832b))
* be able to add plugins to build.gradle ([e1212e9](https://github.com/tidev/titanium_mobile/commit/e1212e9fccd79f5c302a8380157288df356081da))
* enable gradle config caching ([6f0d755](https://github.com/tidev/titanium_mobile/commit/6f0d755e05a01d5abbc66d5610af5f6fdfdceaf8))
* webview content will fill up the whole Ti.UI.WebView by default ([c817069](https://github.com/tidev/titanium_mobile/commit/c817069cbfc3de352e7fa0d7b93dea45294a7c6e))

### iOS platform

* add direction to ListView scrolling ([81d5d1e](https://github.com/tidev/titanium_mobile/commit/81d5d1e79b13f6677041256e7416f72662c2f2dc))
* handle x/y position for touch in dragstart/dragend events on iOS ([62e9d4a](https://github.com/tidev/titanium_mobile/commit/62e9d4abfdaf893b854465b8d0766fa662ca6f35))
* iOS 18 dark mode icons (#14138) ([8f201d9](https://github.com/tidev/titanium_mobile/commit/8f201d94bd13dc3a7c67ce850d11c828d2ca12e7))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 13.0.0 | 15.0.0 |
| ti.map | 5.6.1 | 7.3.1 |
| ti.webdialog | 2.3.0 | 3.0.2 |
| ti.playservices | 18.3.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.9 | 7.0.9 |
