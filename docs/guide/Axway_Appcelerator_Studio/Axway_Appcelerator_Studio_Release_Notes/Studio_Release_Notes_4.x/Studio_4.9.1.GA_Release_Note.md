---
title: Studio 4.9.1.GA - 3 August 2017
weight: '30'
---

# Studio 4.9.1.GA - 3 August 2017

Studio 4.9.1.GA is a patch release that includes one new improvement and several bug fixes.

As of this GA release, the previous Studio patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Improvements

* [TISTUD-8746](https://jira.appcelerator.org/browse/TISTUD-8746) - Android: Studio should now use 'id' for emulator instead of 'name' when building for android emulator.

    * The AVD id for the emulator is now used instead of the name when building for Android

## Fixed issues

* [TISTUD-8776](https://jira.appcelerator.org/browse/TISTUD-8776) - The Default Emulator or AVD drop down list in Android Preference page does not refresh after AVD creation

* [TISTUD-8787](https://jira.appcelerator.org/browse/TISTUD-8787) - Change 'Manage AVDs' button text to 'Create AVDs' while working with new Android SDK versions

* [TISTUD-8791](https://jira.appcelerator.org/browse/TISTUD-8791) - Diagnostic log: Sensitive environment variables included

* [TISTUD-8794](https://jira.appcelerator.org/browse/TISTUD-8794) - Studio dashboard page shows server unavailable due to invalid SSO url

* [TISTUD-8795](https://jira.appcelerator.org/browse/TISTUD-8795) - Update JDK 1.8 release notes text in the Studio updates dialog

* [TISTUD-8806](https://jira.appcelerator.org/browse/TISTUD-8806) - Filter out android-tv and android-wear on AVD creation window

* [TISTUD-8820](https://jira.appcelerator.org/browse/TISTUD-8820) - Create AVD window throws error in running avdmanager cmd on windows-10
