---
title: Studio 4.7.0.Beta - 13 July 2016
weight: '130'
---

# Studio 4.7.0.Beta - 13 July 2016

Studio 4.7.0.Beta is a minor release that includes new features, improvements, and bug fixes.

As of this release, Studio 4.6.x will not be supported six months from 4.7.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New Features

* [TISTUD-7763](https://jira.appcelerator.org/browse/TISTUD-7763) - Integrate error reporting from Appc Studio into analytics server

    * Appcelerator Studio comes with a built-in error reporting tool that can be used to identify problems within the Studio and automatically upload problems to the Appcelerator analytics server, providing key insights as to where problems may exist in Studio and how they can be improved.

    * Please see [Studio Error Reporting](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_How-tos/Studio_Error_Reporting/) for details on this new feature.

* [TISTUD-8492](https://jira.appcelerator.org/browse/TISTUD-8492) - Enable Hyperloop

    * The Hyperloop Module will give you direct access to the native APIs. Studio supports enabling Hyperloop Module during the new project creation and through tiapp.xml editor.

## Improvements

* [GB-422](https://jira.appcelerator.org/browse/GB-422) - Opening the controller on the creation of an action from the Properties view

    * When creating an action in the Properties of an element, the controller now opened

* [GB-500](https://jira.appcelerator.org/browse/GB-500) - Using Alloy.Globals variables in Appcelerator App Designer get converted to strings

    * Added a new popup menu action called "Set Variable" to set the global properties as a variable

* [TISTUD-7979](https://jira.appcelerator.org/browse/TISTUD-7979) - Liveview for the Windows Platform

    * Added Window platform Liveview hook changes

* [TISTUD-8459](https://jira.appcelerator.org/browse/TISTUD-8459) - Windows: Remove Windows SDK Home field in preferences

    * Windows SDK Home field configuration is removed from the Studio Preferences. CLI automatically detects these locations through the registry keys during the build.

* [TISTUD-8467](https://jira.appcelerator.org/browse/TISTUD-8467) - Studio: Ability to set Windows SDK used to package app

    * Ability to set Windows SDK and publisher cert while packaging an app

## Fixed Issues

* [GB-411](https://jira.appcelerator.org/browse/GB-411) - Ti.UI.VideoPlayer should be implemented as a drag & drop element

* [GB-479](https://jira.appcelerator.org/browse/GB-479) - Unable to view Design editor due to XML parsing error

* [GB-485](https://jira.appcelerator.org/browse/GB-485) - After you select an element, you cannot cancel the selection

* [GB-486](https://jira.appcelerator.org/browse/GB-486) - View's backgroundGradient property has inaccurate information

* [GB-495](https://jira.appcelerator.org/browse/GB-495) - Cannot open controller automatically after creating a function from the designer editor

* [GB-513](https://jira.appcelerator.org/browse/GB-513) - Properties view always shows "GUI Builder - iPhone"

* [TISTUD-8453](https://jira.appcelerator.org/browse/TISTUD-8453) - Studio 4.6.0.201604041329 tries to create the samples view but fails with error

* [TISTUD-8458](https://jira.appcelerator.org/browse/TISTUD-8458) - Ran in to a NPE while trying to run Studio

* [TISTUD-8477](https://jira.appcelerator.org/browse/TISTUD-8477) - Studio should support Github two factor authentication

* [TISTUD-8483](https://jira.appcelerator.org/browse/TISTUD-8483) - Cannot build for Android

* [TISTUD-8506](https://jira.appcelerator.org/browse/TISTUD-8506) - Cannot unpublish an Arrow app

* [TISTUD-8516](https://jira.appcelerator.org/browse/TISTUD-8516) - Avoid error notification for "Unable to retrieve the icon at null for sample Apple WatchOS2"
