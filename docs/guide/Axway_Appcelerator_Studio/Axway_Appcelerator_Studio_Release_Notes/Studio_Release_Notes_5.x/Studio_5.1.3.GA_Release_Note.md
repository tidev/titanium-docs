---
title: Studio 5.1.3.GA - 13 August 2019
weight: '20'
---

# Studio 5.1.3.GA - 13 August 2019

Studio 5.1.3 is a patch release that includes improvements and bug fixes.

As of this release, Studio 5.1.x will not be supported six months (2020-02-13) from 5.1.3.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Improvements

* [TISTUD-9169](https://jira.appcelerator.org/browse/TISTUD-9169) - Fix miscellaneous debugger issues

    * Fixed debugging issue with Android apps on Windows

    * Change default caught and uncaught exceptions/errors to break on no exceptions

    * Fixed issue when Hyperloop in enabled that a project cannot be debugged

    * Fixed issue when trying to debug on iOS sim/device for the second time without killing the previous instance of app on the device the debugger does not connect

    * Fixed issue when using Titanium SDK 7.5.X or 8.0.X so that Safari Web Inspector connects properly

    * Removed remnants of Android profiler

    * Fixed issues supporting some ES6+ types in debugger view (like Map, Set, WeakMap, WeakSet).

    * Fixed issue where the debugger hangs in SDK 8.1.0

    * Fixed logging error when Filesystem API isn't used

    * Fixed issue where Alloy wasn't generating sourcemaps for files under `lib` directory

    * Added support for inline source mapping

    * Improved debugging of applications in third party tools and Studio

    * Fixed issue where the debugger suspends on generated file for encrypted JS

* [TISTUD-9178](https://jira.appcelerator.org/browse/TISTUD-9178) - Support inline source mapping

    * Added support for source maps the CLI build generates ( mapping between `Resources` <-> `build` )

* [TISTUD-9185](https://jira.appcelerator.org/browse/TISTUD-9185) - Update Node.js version distributed via studio to v8.16.0

    * The version of Node.js that is distributed with Studio is 8.16.0 and minimum version will be bumped to 8.0

    * If Studio doesn't find Node.js 8.0, it will install 8.16.0

## Fixed issues

* [TISTUD-9049](https://jira.appcelerator.org/browse/TISTUD-9049) - Unable to view application source when debugging Android project on Windows

* [TISTUD-9161](https://jira.appcelerator.org/browse/TISTUD-9161) - iOS Debug: The debugger does not connect when trying to debug second time

* [TISTUD-9166](https://jira.appcelerator.org/browse/TISTUD-9166) - iOS Debug: The iOS debug breaks on few anonymous files before app launches

* [TISTUD-9170](https://jira.appcelerator.org/browse/TISTUD-9170) - Debugger: Exception in variable view due to empty labels for few variables

* [TISTUD-9171](https://jira.appcelerator.org/browse/TISTUD-9171) - Debugger: debugger hangs against 8.1.0 SDK on first breakpoint in ti.main.js

* [TISTUD-9174](https://jira.appcelerator.org/browse/TISTUD-9174) - Debugger: Breakpoints set in alloy /lib files do not get hit

* [TISTUD-9177](https://jira.appcelerator.org/browse/TISTUD-9177) - Android Debug: Array variable cannot be expanded in variables view

* [TISTUD-9183](https://jira.appcelerator.org/browse/TISTUD-9183) - Android Debug: The debugger suspends on wrong js file during alloy project debug on Android device
