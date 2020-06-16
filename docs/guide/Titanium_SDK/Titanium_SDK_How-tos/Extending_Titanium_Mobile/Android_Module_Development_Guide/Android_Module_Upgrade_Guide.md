---
title: Android Module Upgrade Guide
weight: '40'
---

# Android Module Upgrade Guide

## Summary

With major releases of the Titanium SDK, you may need to update older modules. This document will provide you with the information to upgrade your Android modules as necessary. Modules built with Titanium 7.0.0 are backward compatible with apps built with Titanium 8.x.x and 9.x.x. However, old modules that are to be built with Titanium 9.0.0 will need to be migrated to use the new gradle build system and support new CPU architectures.

## Migration to SDK 9.0.0

When using Titanium SDK 9.0.0 and later, you can simply switch to your Android module project (e.g. `cd ti.map/android`) and use `appc run -p android --build-only`. The command will prompt you to confirm the migration and update your manifest file for you. The details of the migration are described below.

The following components of the Android manifest file need to be updated:

* **`architecture`** : Make sure the following 4 CPU architectures "arm64-v8a armeabi-v7a x86 x86\_64" are defined

* **`apiversion`** : Update the value to "4"

* **`minsdk`** : Update the value to "9.0.0" when building with Titanium SDK 9.0.0 or higher

* `version`: Update the value to the next major version (read more about semantic versioning [here](https://semver.org/)). If your module version is "1.2.0" right now, it should be revised to "2.0.0"

Please see the "ti.map" module's `manifest` file for an example on how it should be configured when building with Titanium SDK 9.0.0 or higher.

[https://github.com/appcelerator-modules/ti.map/blob/master/android/manifest](https://github.com/appcelerator-modules/ti.map/blob/master/android/manifest)

## Manifest file

The following tables provide an overview of the relations between different properties inside a native Android module project.

### apiversion

| SDK | required apiversion |
| --- | --- |
| 9.x.x | 4 |
| 8.x.x | 4 |
| 7.x.x | 4 |
| 6.x.x | 3 |
| 5.x.x | 2 |

### minsdk

| SDK | required apiversion |
| --- | --- |
| 9.x.x | 9.0.0.GA |
| 8.x.x | 7.0.0.GA |
| 7.x.x | 7.0.0.GA |
| 6.x.x | 6.0.0.GA |
| 5.x.x | 5.0.0.GA |

### architecture

| SDK | Architecture |
| --- | --- |
| 9.x.x | arm64-v8a armeabi-v7a x86 x86\_64 |
| 8.x.x | arm64-v8a armeabi-v7a x86 |
| 7.x.x | arm64-v8a armeabi-v7a x86 |
| 6.x.x | armeabi-v7a x86 |
| 5.x.x | armeabi armeabi-v7a x86 |

### Version

Update the module version to the major version number.

## API updates

Please note any API changes. Refer to [Titanium SDK Release Notes](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/) for the latest info on changes to the API and/or the [API documentation](#!/api).
