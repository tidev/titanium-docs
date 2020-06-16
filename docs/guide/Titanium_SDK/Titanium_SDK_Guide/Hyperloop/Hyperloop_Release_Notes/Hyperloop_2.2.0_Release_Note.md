---
title: Hyperloop 2.2.0 - 20 October 2017
weight: '50'
---

# Hyperloop 2.2.0 - 20 October 2017

Hyperloop 2.2.0 is a feature release that includes new features, improvements, and bug fixes.

## New features

* [TIMOB-23853](https://jira.appcelerator.org/browse/TIMOB-23853) - iOS - Support embedded binaries

    * Added full support for embedded / dynamic binaries including Swift frameworks

* [TIMOB-23854](https://jira.appcelerator.org/browse/TIMOB-23854) - iOS - Support creating of Run Script phases

    * Added support to hooks scripts into the application build phase. This can be configured via the appc.js file with the following example:

        **Run Script phase**

        ```
        hyperloop: {
          ios: {
            xcodebuild: {
              scripts: [{
                name: 'My script phase',
                shellScript: '${APPC_PROJECT_DIR}/src/script.sh'
              }]
            }
          }
        }
        ```

## Improvements

* [TIMOB-23956](https://jira.appcelerator.org/browse/TIMOB-23956) - iOS: Improve error handling for non-default Xcode installations

    * Improved error handling for non-default Xcode installation

* [TIMOB-24623](https://jira.appcelerator.org/browse/TIMOB-24623) - iOS: Drop support for CocoaPods 0.39 and below

    * Dropped support for CocoaPods 0.39 and below. Use CocoaPods 1.x instead as we support and recommend the latest version 1.3.1

* [TIMOB-24532](https://jira.appcelerator.org/browse/TIMOB-24532) - Android: Use .aar handling from AndroidBuilder

    * Removed the AAR handling from Hyperloop hook; Instead, AAR handling relies on features introduced in Titanium SDK 6.1.0

* [TIMOB-24829](https://jira.appcelerator.org/browse/TIMOB-24829) - Android: Slow Compile-time, too many JS-wrappers generated

    * Improved Android build performance by

        * Moving the Hyperloop wrapper sources from being processed by the normal Android build process (it will also no longer regenerate all wrappers on every build)

        * Hyperloop wrappers will no longer be copied to the Resources directory which caused some confusion in classic apps. The hook will now generate all files under the build directory.

        * All important build steps are now being able to work incrementally. This will allow the Hyperloop processing to only trigger for changed or deleted files instead all of them.

## Deprecations

Starting in Hyperloop 2.2.0, manually configuring frameworks has been deprecated ([TIMOB-25283](https://jira.appcelerator.org/browse/TIMOB-25283)) with the introduction of dynamic frameworks in modules in Titanium SDK 6.2.0 ([TIMOB-20557](https://jira.appcelerator.org/browse/TIMOB-20557) ) and the updated framework handling for Hyperloop. Instead, place your frameworks in `app/platform/ios` (Alloy) or `platform/ios` (Classic Titanium) in Hyperloop 2.0.0+ and they will be computed automatically. The use-case to directly use Objective-C and Swift source files should also be discouraged in favor of using frameworks.

## Fixed issues

* [TIMOB-24151](https://jira.appcelerator.org/browse/TIMOB-24151) - Android: Requiring certain classes throws an error

* [TIMOB-25372](https://jira.appcelerator.org/browse/TIMOB-25372) - Android: The module android.support.v4.content.ContextCompat is missing with TiSDK 6.2.2.GA

* [TIMOB-23570](https://jira.appcelerator.org/browse/TIMOB-23570) - iOS: Support use\_frameworks flag in Cocoapods

* [TIMOB-24160](https://jira.appcelerator.org/browse/TIMOB-24160) - iOS: Exclude CocoaPods products from being removed

* [TIMOB-24614](https://jira.appcelerator.org/browse/TIMOB-24614) - iOS: AVFoundation/AVSpeechSynthesizer class not found

* [TIMOB-25341](https://jira.appcelerator.org/browse/TIMOB-25341) - iOS: Error after iOS 11 / Xcode 9 update

* [TIMOB-25354](https://jira.appcelerator.org/browse/TIMOB-25354) - iOS: Building hyperloop-examples app fails with Hyperloop 2.2.0

* [TIMOB-25401](https://jira.appcelerator.org/browse/TIMOB-25401) - iOS: Hyperloop does not generate code for Flurry & Contentful Pods

* [TIMOB-25402](https://jira.appcelerator.org/browse/TIMOB-25402) - iOS: Framework handling regressions

* [TIMOB-25403](https://jira.appcelerator.org/browse/TIMOB-25403) - iOS: Can't find blocks from typedefs

* [TIMOB-25192](https://jira.appcelerator.org/browse/TIMOB-25192) - Windows: Evaluating a null value from Hyperloop crashes the App

* [TIMOB-24644](https://jira.appcelerator.org/browse/TIMOB-24644) - Windows: Decouple Hyperloop logic and Ti SDK

* [TIMOB-23926](https://jira.appcelerator.org/browse/TIMOB-23926) - CLI: Improve Ti SDK handling durin CI builds

* [TIMOB-23948](https://jira.appcelerator.org/browse/TIMOB-23948) - CLI: Replace deprecated wrench with fs-extra
