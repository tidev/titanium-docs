---
title: Studio 5.1.4.GA - 12 September 2019
weight: '10'
---

# Studio 5.1.4.GA - 12 September 2019

Studio 5.1.4 is a patch release that includes one improvement and three bug fixes.

As of this GA release, the previous Studio patch release is no longer supported. End of support for this version will be 2020-03-11 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Improvements

* [TISTUD-9195](https://jira.appcelerator.org/browse/TISTUD-9195) - iOS: Use fullname property from certificate information for developer and distribution certificates when using SDK 8.2.0 or higher

    * Added support for generic Apple certificates

## Fixed issues

* [TISTUD-9190](https://jira.appcelerator.org/browse/TISTUD-9190) - iOS:Running iOS app on same simulator multiple times throws error and exits with code 165

* [TISTUD-9191](https://jira.appcelerator.org/browse/TISTUD-9191) - IOS simulator quits when the process is stopped or app is rebuilt for the same simulator

* [TISTUD-9193](https://jira.appcelerator.org/browse/TISTUD-9193) - Debugging: Studio cannot connect to iOS 13 devices
