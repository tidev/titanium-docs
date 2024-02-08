---
title: Titanium SDK 12.3.0.RC - 12 January 2024
weight: '19'
---

# Titanium SDK 12.3.0.RC Release Note

## Titanium SDK 12.3.0.RC - 12 January 2024

## About this release

Titanium SDK 12.3.0 is a minor release of the SDK, addressing high-priority issues from previous releases.

## Community Credits

* Hans Knöchel
  * support multi-scene applications ([bfc87a6](https://github.com/tidev/titanium_mobile/commit/bfc87a6517f0b70b82ea760b8d052381bddf1ff4))
  * add iOS 17+ spring animations ([be053b0](https://github.com/tidev/titanium_mobile/commit/be053b07ab0a51158e3a6d0e8e7c368f1935aaa5))
  * update ti.map to 7.3.1 ([10535bc](https://github.com/tidev/titanium_mobile/commit/10535bc9f48949c15ae523ecd3e1739ca130884b))
  * include new versions of ti.map ([e4b3974](https://github.com/tidev/titanium_mobile/commit/e4b397468a01e0ade21ba0a9d41f37cf8d76895f))
  * bump master to 12.3.0 ([acf6b15](https://github.com/tidev/titanium_mobile/commit/acf6b159bf246126c36ce4420d6f38bb415d940a))

* Michael Gangolf
  * update minimum node.js version to 16.x ([af08e72](https://github.com/tidev/titanium_mobile/commit/af08e72c3fccdeade7f10e4e983c2c48dea6f491))
  * set correct title after titleAttributes update ([53738a1](https://github.com/tidev/titanium_mobile/commit/53738a1d05f0945841cb2247bc0e86fb413e0bc3))
  * optimize TiProperties ([e364209](https://github.com/tidev/titanium_mobile/commit/e3642099bacfebaaa0c0835a9a39dd9c2a521934))
  * re-sync CHANGELOG.md ([d9ae9ba](https://github.com/tidev/titanium_mobile/commit/d9ae9ba0354c2bd05af85af47d8b122096045eca))
  * add cli.ignoreLog to ios ([eabedaa](https://github.com/tidev/titanium_mobile/commit/eabedaaf1e7806134b3be9f3c506427b94f524cb))
  * view rotation parity ([5c7edd8](https://github.com/tidev/titanium_mobile/commit/5c7edd8588f4f66c74040ad0febb83ce687e925a))
  * minor CameraX, Recyclerview library update ([8fde8c2](https://github.com/tidev/titanium_mobile/commit/8fde8c20a221a6c959bc05c1f2535df5b803dc94))
  * lineCount/visibleText for Ti.UI.Label ([1eeb301](https://github.com/tidev/titanium_mobile/commit/1eeb30113d752b8871282ad49d84306f4ca75178))
  * window titleAttributes parity ([eb19d17](https://github.com/tidev/titanium_mobile/commit/eb19d17c9a1627a03f8bed3560ab38ba4cf834fe))
  * xml parser null check ([3c0794f](https://github.com/tidev/titanium_mobile/commit/3c0794f1c7610ccf6870da0ac2d85be7b843e998))
  * return more httpclient errors to Ti ([fafdde6](https://github.com/tidev/titanium_mobile/commit/fafdde61c520ac09c374aad3c97c9b8c1c34422f))
  * update hyperloop version ([4b01bc0](https://github.com/tidev/titanium_mobile/commit/4b01bc0fcaa2a74e0201c2e77ef7e9f0ebee4461))
  * null check in ScrollView getAttributeSet ([c3c6cde](https://github.com/tidev/titanium_mobile/commit/c3c6cde3aa596dc7db8db66bf0665137e5eaece5))
  * fix TextArea hinttextid ([845a08d](https://github.com/tidev/titanium_mobile/commit/845a08d650134950ab7ef7325d362f6406b3eada))
  * webview html example ([58f868b](https://github.com/tidev/titanium_mobile/commit/58f868b906c10e61fb90e0005938a23dacb5db05))
  * removing old Appc strings ([2c3ecce](https://github.com/tidev/titanium_mobile/commit/2c3ecce5badc6de2724d9952ed1760c17d84ca00))
  * updated examples ([1ebb379](https://github.com/tidev/titanium_mobile/commit/1ebb3799212a70f88901af8bccb53e98ba88a9f7))
  * label breakStrategy & hyphenationFrequency ([f5181db](https://github.com/tidev/titanium_mobile/commit/f5181dbd808f31b24424d5ee62945bfa528307d1))
  * copyright headers, wiki links ([455d4b2](https://github.com/tidev/titanium_mobile/commit/455d4b278d6d8368086c06b44dc43cefd688b687))
  * remove more appc/jira links ([6726c2c](https://github.com/tidev/titanium_mobile/commit/6726c2cee7c451f81b154cab74ecd0d004d25104))
  * add empty build.gradle ([2c965e4](https://github.com/tidev/titanium_mobile/commit/2c965e4e1e0950a34f7ef777614260c86b063b7a))

* Brianggalvez
  * support for html in AttributedStrings ([ca4a7a9](https://github.com/tidev/titanium_mobile/commit/ca4a7a9e77a3c88d9790671eb8abf8d837c409bd))


## Bug Fixes

### Android platform

* fix TextArea hinttextid ([845a08d](https://github.com/tidev/titanium_mobile/commit/845a08d650134950ab7ef7325d362f6406b3eada))
* null check in ScrollView getAttributeSet ([c3c6cde](https://github.com/tidev/titanium_mobile/commit/c3c6cde3aa596dc7db8db66bf0665137e5eaece5))
* return more httpclient errors to Ti ([fafdde6](https://github.com/tidev/titanium_mobile/commit/fafdde61c520ac09c374aad3c97c9b8c1c34422f))
* set correct title after titleAttributes update ([53738a1](https://github.com/tidev/titanium_mobile/commit/53738a1d05f0945841cb2247bc0e86fb413e0bc3))
* xml parser null check ([3c0794f](https://github.com/tidev/titanium_mobile/commit/3c0794f1c7610ccf6870da0ac2d85be7b843e998))

### Multiple platforms

* simulator and macos builds don't require wwdr ([8c70a0d](https://github.com/tidev/titanium_mobile/commit/8c70a0db7ad33e62e15128061237935bece49843))

## Features

### Multiple platforms

* update minimum node.js version to 16.x ([af08e72](https://github.com/tidev/titanium_mobile/commit/af08e72c3fccdeade7f10e4e983c2c48dea6f491))

### Android platform

* add empty build.gradle ([2c965e4](https://github.com/tidev/titanium_mobile/commit/2c965e4e1e0950a34f7ef777614260c86b063b7a))
* label breakStrategy & hyphenationFrequency ([f5181db](https://github.com/tidev/titanium_mobile/commit/f5181dbd808f31b24424d5ee62945bfa528307d1))
* lineCount/visibleText for Ti.UI.Label ([1eeb301](https://github.com/tidev/titanium_mobile/commit/1eeb30113d752b8871282ad49d84306f4ca75178))
* optimize TiProperties ([e364209](https://github.com/tidev/titanium_mobile/commit/e3642099bacfebaaa0c0835a9a39dd9c2a521934))
* window titleAttributes parity ([eb19d17](https://github.com/tidev/titanium_mobile/commit/eb19d17c9a1627a03f8bed3560ab38ba4cf834fe))

### iOS platform

* add iOS 17+ spring animations ([be053b0](https://github.com/tidev/titanium_mobile/commit/be053b07ab0a51158e3a6d0e8e7c368f1935aaa5))
* add cli.ignoreLog to ios ([eabedaa](https://github.com/tidev/titanium_mobile/commit/eabedaaf1e7806134b3be9f3c506427b94f524cb))
* support for html in AttributedStrings ([ca4a7a9](https://github.com/tidev/titanium_mobile/commit/ca4a7a9e77a3c88d9790671eb8abf8d837c409bd))
* support multi-scene applications ([bfc87a6](https://github.com/tidev/titanium_mobile/commit/bfc87a6517f0b70b82ea760b8d052381bddf1ff4))
* view rotation parity ([5c7edd8](https://github.com/tidev/titanium_mobile/commit/5c7edd8588f4f66c74040ad0febb83ce687e925a))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 12.1.0 | 14.0.0 |
| ti.map | 5.6.0 | 7.3.1 |
| ti.webdialog | 2.3.0 | 3.0.2 |
| ti.playservices | 18.2.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.6 | 7.0.6 |
