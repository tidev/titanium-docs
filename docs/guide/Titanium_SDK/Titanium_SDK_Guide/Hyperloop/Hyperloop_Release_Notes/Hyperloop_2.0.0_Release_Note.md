---
title: Hyperloop 2.0.0 - 18 October 2016
weight: '110'
---

# Hyperloop 2.0.0 - 18 October 2016

Hyperloop 2.0.0 is a major release that includes new improvements and bug fixes.

This version only supports Titanium SDK 6.0.0 and newer.

## Improvements

* [TIMOB-23911](https://jira.appcelerator.org/browse/TIMOB-23911) - iOS: Improve the way properties are generated

    * Improved how the SDK handles instance properties for UIColor, NSBundle and other classes. Example:

        ```
        UIColor.greenColor() -> UIColor.greenColor
        UIScreen.mainScreen() -> UIScreen.mainScreen
        NSBundle.mainBundle() -> NSBundle.mainBundle
        ```

* [TIMOB-24027](https://jira.appcelerator.org/browse/TIMOB-24027) - iOS: Provide migration help for new properties

    * Added a migration help for methods that are now accessed via properties in Hyperloop. Example log:

        ```
        [ERROR] !!! CODE MIGRATION REQUIRED !!!
        [ERROR]
        [ERROR] Due to changes introduced in iOS 10 and Hyperloop 2.0.0 some method calls need
        [ERROR] to be changed to property access. It appears that you used some of the affected
        [ERROR] methods. Please see the following list to help you migrate your code:
        [ERROR]
        [ERROR]   File: controllers/animateview.js
        [ERROR]     Line 67: UIColor.redColor() -> UIColor.redColor
        ```

* [TIMOB-23704](https://jira.appcelerator.org/browse/TIMOB-23704) - iOS: Improve error-message if Podfile has no Pods referenced

    * Improved error message if the Podfile has no prod reference. You should see a warning message like this:

        ```
        [WARN] :   [Hyperloop] Podfile found, but no pod's specified. Skipping ...
        ```

## Fixed issues

* [TIMOB-23667](https://jira.appcelerator.org/browse/TIMOB-23667) - iOS: Calling \[object class\] fails on device

* [TIMOB-23911](https://jira.appcelerator.org/browse/TIMOB-23911) - iOS: Improve the way properties are generated

* [TIMOB-23971](https://jira.appcelerator.org/browse/TIMOB-23971) - iOS: Hyperloop examples not working in 2.0.0 (regression)

* [TIMOB-24029](https://jira.appcelerator.org/browse/TIMOB-24029) - iOS: Log-server port issue when running hyperloop example app on simulator

* [TIMOB-23912](https://jira.appcelerator.org/browse/TIMOB-23912) - Android: Selecting "latest" in tiapp.xml for modules, while having both modules with apiversion 2 & 3 & building gives error "Found incompatible Titanium Modules"

* [TIMOB-23945](https://jira.appcelerator.org/browse/TIMOB-23945) - Android: Hyperloop does not extract /jni/<abi>/\*.so files from an aar

* [TIMOB-24012](https://jira.appcelerator.org/browse/TIMOB-24012) - Android: crashing trying to load non-existing JS resources inside native modules

* [TIMOB-24021](https://jira.appcelerator.org/browse/TIMOB-24021) - Android: require of native class android.content.Intent fails on SDK 6+

* [TIMOB-24022](https://jira.appcelerator.org/browse/TIMOB-24022) - Android: Unable to instantiate hyperloop classes

* [TIMOB-23628](https://jira.appcelerator.org/browse/TIMOB-23628) - Android: Unable to debug an application with run-on-main-thread set to true

* [TIMOB-23697](https://jira.appcelerator.org/browse/TIMOB-23697) - Android: Dexer fails because of duplicated classes
