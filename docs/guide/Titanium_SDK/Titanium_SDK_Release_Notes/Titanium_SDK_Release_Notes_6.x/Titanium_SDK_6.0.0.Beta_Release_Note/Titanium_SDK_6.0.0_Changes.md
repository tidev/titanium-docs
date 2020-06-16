---
title: Titanium SDK 6.0.0 Changes
weight: '10'
---

# Titanium SDK 6.0.0 Changes

With the release of Titanium SDK 6.0.0, we introduced many great features and improvements. However, some of these changes broke features in previous releases. This document lists all the breaking changes as well as how to handle them.

## Rebuilding Android Modules

For this release of Titanium SDK 6.0.0, V8 has been updated to the latest LTS release ([TIMOB-19790](https://jira.appcelerator.org/browse/TIMOB-19790)). Any projects built on previous versions of the SDK will need to rebuild all of the Android modules.

If you have Android titanium modules, you have to rebuild them with this V8 in order for it to be supported on Titanium SDK 6.0.0.

You will need to update the android/manifest by:

1. Bump apiversion from 2 to 3.

2. Remove "armeabi" ABI from listing (keep "armeabi-v7a").

3. Bump their module version (typically bump the major number since this is a backwards-incompatible change).

4. Update minsdk to 6.0.0.

5. Then rebuild the module.

Note, you may also need to edit the Java code to remove references to deprecate classes that have been removed in 6.0.0 (such as TiContext).

## Node.js

Node 4.2.0 is the new minimum supported version and 4.6.x is the maximum supported version. Please install or update Node.js accordingly.

## Xcode

Xcode 8 in the minimum supported version. Please install or update Xcode accordingly.

## Deprecated APIs

For this release, we removed 176+ APIs across iOS and Android. Please review [API changes](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_6.x/Titanium_SDK_6.0.0.Beta_Release_Note/#api-changes) in [Titanium SDK 6.0.0.Beta Release Note](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_6.x/Titanium_SDK_6.0.0.Beta_Release_Note/).

## watchOS 1

As of SDK 6.0.0, the watchOS 1 template and all related code are no longer supported. See [TIMOB-20083](https://jira.appcelerator.org/browse/TIMOB-20083) for details.

## Listen to androidback

With SDK 6.0.0+, we changed how the override of a default behavior for the back button on Android works. This change requires apps using this version to override the back button to update their code when using calls like this: `win.addEventListener('androidback', onBack);`

See [TIMOB-19919](https://jira.appcelerator.org/browse/TIMOB-19919) for more details.

## Module guides use CLI instead of build.py

As of SDK 6.0.0, we have removed all Python scripts that are normally used to in the app build process. Users can use the CLI equivalent (`ti build`) and it should be backwards compatible on all your projects. As of SDK 5.2.1, all new projects warn users that the `build.py` script will be deprecated.

To build an iOS or Android module, use the ti build command from the CLI:

* iOS: `ti build -p ios --build-only`

* Android: `ti build -p android --build-only`

If you omit the `--build-only` flag, it will run `ti create` and `ti build` with the example code in the module.

**Note**: The `--project-dir`flag must point to the platform-specific subdirectory in the module directory.

For those who use the Unified CLI and are confused if you should use either `appc run` or `appc ti` build, you should change directories into`<module-dir>/iphone` and `run appc run -p ios --build-only` command.

To upgrade your module to stop using the `build.py` script, follow these steps:

1. Delete the `build.py` file.

2. Execute either one of these commands:

    * `ti build -p <platform> --build-only`

    * `appc run -p <platform> --build-only`

There isn't anything else you need to change.

**Note for Android users**: `ant` is no longer required.

For those iOS users who need to create customized storyboards or for users who copy content into the `../platform/iphone/ios` directory, you can now create a directory called `Resources` in each platform-specific directory and place all your files in there that you wish to be copied into your app.

## Studio 4.8.0

**Recommendation:** If you upgraded SDK to version 6.0.0, we strongly urge you to upgrade Studio to version 4.8.0 to avoid any backwards compatibility issues.

## Removal of Ti.include

Ti.include has been deprecated since version 3.3.0. With the release of 6.0.0, we have completely removed it ([TIMOB-23185](https://jira.appcelerator.org/browse/TIMOB-23185)). For those who are still using it, we urge you to replace usage with the necessary **require()** calls. If you did not migrate until now, please follow [this guide](#!/api/Global-method-require) to do so.

As a last resort, consider using this workaround:

**Ti.include workaround**

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><code>function</code> <code>include(file) {</code><code></code><code>return</code> <code>eval(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, file).read().text);</code><code>}</code></p></td></tr></tbody></table>
