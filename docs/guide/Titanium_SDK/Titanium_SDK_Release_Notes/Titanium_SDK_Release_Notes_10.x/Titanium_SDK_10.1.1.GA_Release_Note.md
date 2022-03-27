---
title: Titanium SDK 10.1.1.GA Release Note
weight: '70'
---

# Titanium SDK 10.1.1.GA Release Note

## Titanium SDK 10.1.1.GA - 19 November 2021

## About this release

Titanium SDK 10.1.1 is a patch release of the SDK, addressing high-priority issues from previous releases.
As of this GA release, the previous Titanium SDK patch release (10.1.0) is no longer supported.Axway support for this version and prior versions released by Axway will be discontinued after March 1, 2022.

### Community Credits

* Michael Gangolf

    * [TIMOB-28532](https://jira-archive.titaniumsdk.com/TIMOB-28532) - openPhotoGallery() does not invoke cancel callback if swiped down ([a54f632](https://github.com/appcelerator/titanium_mobile/commit/a54f63281787e675cb52656c8a610b7b4116d799))

### Bug Fixes

#### Android platform

* [TIMOB-28572](https://jira-archive.titaniumsdk.com/TIMOB-28572) - TableView fails to render drawable on API 25 ([58037db](https://github.com/appcelerator/titanium_mobile/commit/58037db8fbfe47d5847cbe39fee1ff4694ec9bb4))

* [TIMOB-28573](https://jira-archive.titaniumsdk.com/TIMOB-28573) - Android: Complex items added to ListView after window open can cause scroll performance issues as of 9.3.0 ([3a5153c](https://github.com/appcelerator/titanium_mobile/commit/3a5153c230f43c34f78d03d572bdd179fe00ee11))

* [TIMOB-28561](https://jira-archive.titaniumsdk.com/TIMOB-28561) - ListView fails to apply i18n "textid" and "titleid" properties on off-screen list items ([29502ac](https://github.com/appcelerator/titanium_mobile/commit/29502acb3dafcb1ac93bc974b5b8bf0e0c93d9c7))

#### iOS platform

* [TIMOB-28556](https://jira-archive.titaniumsdk.com/TIMOB-28556) - Drag-and-dropped text into TextArea will crash on iOS 15 if it exceeds maxLength([5ebb9d2](https://github.com/appcelerator/titanium_mobile/commit/5ebb9d2fcd77a92edf392cb53146a5e5fe85e8c9))

* [TIMOB-28532](https://jira-archive.titaniumsdk.com/TIMOB-28532) - openPhotoGallery() does not invoke cancel callback if swiped down ([a54f632](https://github.com/appcelerator/titanium_mobile/commit/a54f63281787e675cb52656c8a610b7b4116d799))

* [TIMOB-28551](https://jira-archive.titaniumsdk.com/TIMOB-28551) - TabGroup icons are tinted wrong on iOS 12 and older ([248763a](https://github.com/appcelerator/titanium_mobile/commit/248763a26b5c0afcb4994f620f6a45ab2cdab0ac)) ([8d29f63](https://github.com/appcelerator/titanium_mobile/commit/8d29f6306a2fdfa82b7b2ada9c4ec46726fd4889))

* [TIMOB-28550](https://jira-archive.titaniumsdk.com/TIMOB-28550) - TabGroup property "titleColor" is mishandled on iOS 15 ([6fae767](https://github.com/appcelerator/titanium_mobile/commit/6fae767bfbbb7d3ad5bec19590008c1d874aebff))

* [TIMOB-28542](https://jira-archive.titaniumsdk.com/TIMOB-28542) [TIMOB-28549](https://jira-archive.titaniumsdk.com/TIMOB-28549) - Logging an object on simulator does not show full object ([e855063](https://github.com/appcelerator/titanium_mobile/commit/e855063c5657ca02f8c7f5ba4e315d43a4a1d13e)) ([592a76d](https://github.com/appcelerator/titanium_mobile/commit/592a76dabbf4616152c8a72bd42fb2d92897ad0e))

* [TIMOB-28531](https://jira-archive.titaniumsdk.com/TIMOB-28531) - Simulator build does not error correctly if EULA is not accepted ([e855063](https://github.com/appcelerator/titanium_mobile/commit/e855063c5657ca02f8c7f5ba4e315d43a4a1d13e))

* [TIMOB-28545](https://jira-archive.titaniumsdk.com/TIMOB-28545) - device or dist-adhoc builds on an M1 mac errors out ([e8e4e00](https://github.com/appcelerator/titanium_mobile/commit/e8e4e00add312671d90f506e7607815554845b5b))

* [TIMOB-28574](https://jira-archive.titaniumsdk.com/TIMOB-28574) - Window.setToolbar() wrongly uses a transparent background on iOS 15 ([1677d48](https://github.com/appcelerator/titanium_mobile/commit/1677d48201d07baf39024ff51be86bc30dc85b5b))

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
