---
title: Studio 4.10.0.GA - 4 October 2017
weight: '10'
---

# Studio 4.10.0.GA - 4 October 2017

Axway Appcelerator Studio 4.10.0.GA is a minor release that includes new improvements and bug fixes. This release include two main highlights: Rebranding of Studio to align with Axway/Appcelerator branding and App Designer improvements.

As of this release, Studio 4.9.x will not be supported six months from 4.10.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New features

## Improvements

### Axway/Appcelerator rebranding

Studio 4.10.0 features various updates centering around the Axway Appcelerator rebranding effort. Highlights of the rebranding include the following:

* [TISTUD-8797](https://jira.appcelerator.org/browse/TISTUD-8797) - Update branding for Studio Windows installer

    * updated Installer with new Axway branding and a new name: "Axway Appcelerator Studio"

* [TISTUD-8798](https://jira.appcelerator.org/browse/TISTUD-8798) - Update Terms of Use for Studio

    * Updated the Terms of Use document under Software License Agreement

* [TISTUD-8799](https://jira.appcelerator.org/browse/TISTUD-8799) - Update "About Studio" text

    * Updated the About Studio text

* [TISTUD-8800](https://jira.appcelerator.org/browse/TISTUD-8800) - Update references to Arrow in the Studio

    * Renamed references of "Arrow" to "API Builder"

* [TISTUD-8835](https://jira.appcelerator.org/browse/TISTUD-8835) - Update Studio splash screen as per Axway Appcelerator Studio branding

    * Splash Screen updated for new Axway Appcelerator branding

* [TISTUD-8836](https://jira.appcelerator.org/browse/TISTUD-8836) - Replace all "Appcelerator Studio" text references with the "Axway Appceleator Studio"

    * Replaced all references of "Appcelerator Studio" with "Axway Appcelerator Studio" within the application

* [TISTUD-8848](https://jira.appcelerator.org/browse/TISTUD-8848) - Update studio app icons as per Axway Appcelerator Studio rebranding

    * Updated the application icons to reflect the Axway rebranding effort

* [TISTUD-8852](https://jira.appcelerator.org/browse/TISTUD-8852) - Update Axway branding for Studio Mac installer

    * Updated installer to include the new branding iconography and text

* [TISTUD-8864](https://jira.appcelerator.org/browse/TISTUD-8864) - Update Axway Appcelerator Studio release notes url in the studio

    * Updated Studio to point to the renamed release notes

* [TISTUD-8865](https://jira.appcelerator.org/browse/TISTUD-8865) - Update Windows shortcut, start menu and Control panel program icon

    * Updated the Studio application icon

* [TISTUD-8866](https://jira.appcelerator.org/browse/TISTUD-8866) - Update new Axway Appcelerator Studio folder icon in MacOS during studio update

    * Updated the Studio folder icon for MacOS

### App Designer

* [GB-541](https://jira.appcelerator.org/browse/GB-541) - Allow Tabbing on Properties view pertaining to App Designer

    * Added capability to "tab through" cells in the Properties View

* [GB-542](https://jira.appcelerator.org/browse/GB-542) - Highlight the selected element when switch from XML view to Design view

    * Selected XML components in the XML View are also highlighted in the Design View

* [GB-550](https://jira.appcelerator.org/browse/GB-550) - App Designer in full screen mode

    * Added capability to allow App Designer to go full screen

* [GB-551](https://jira.appcelerator.org/browse/GB-551) - Handle Multi-Select efficiently

    * Added feature when multiple elements are selected, you cannot tab through the cells as some of those cell types may not be have the same navigation behavior

* [GB-552](https://jira.appcelerator.org/browse/GB-552) - Fix issues with defaulting of properties

    * Added feature when using the tab key to navigate, no values are activated when moving through the cells

### LiveView improvements

* [TISTUD-8781](https://jira.appcelerator.org/browse/TISTUD-8781) - LiveView: include version 1.2.0

    * Implemented ES6 support for LiveView

* [TISTUD-8840](https://jira.appcelerator.org/browse/TISTUD-8840) - LiveView: Include version 1.2.1

    * Update for Windows application in LiveView; Studio shows the splash screen and then crashes with no error log. Please refer [TIMOB-25072](https://jira.appcelerator.org/browse/TIMOB-25072) for more info.

## Fixed issues

### Android

* [TISTUD-8775](https://jira.appcelerator.org/browse/TISTUD-8775) - Spinner shown after creation of AVD from preferences when using Android tools more than 25.3.0

* [TISTUD-8819](https://jira.appcelerator.org/browse/TISTUD-8819) - Error in Create Android AVD window when JDK 1.8 not installed

* [TISTUD-8876](https://jira.appcelerator.org/browse/TISTUD-8876) - Studio: Android Emulators no longer listed

### iOS

* [TISTUD-8838](https://jira.appcelerator.org/browse/TISTUD-8838) - iOS simulators are not shown and NPE upon launching the studio

* [TISTUD-8850](https://jira.appcelerator.org/browse/TISTUD-8850) - iOS Ad Hoc/Enterprise distribution error: Attribute notifyUsers is not of type java.lang.String.

* [TISTUD-8875](https://jira.appcelerator.org/browse/TISTUD-8875) - Studio: When compiling an error is thrown: env: node: No such file or directory

### Windows

* [TISTUD-8769](https://jira.appcelerator.org/browse/TISTUD-8769) - TiApp: Windows is not viewed as a valid platform for module tag

* [TISTUD-8770](https://jira.appcelerator.org/browse/TISTUD-8770) - Windows: LiveView flag not being passed on Windows Local Machine build

* [TISTUD-8777](https://jira.appcelerator.org/browse/TISTUD-8777) - Windows: Error during JDK update when studio not launched as admin

* [TISTUD-8778](https://jira.appcelerator.org/browse/TISTUD-8778) - Port 8080 remains blocked even after terminating an Arrow app running on Local Server

* [TISTUD-8788](https://jira.appcelerator.org/browse/TISTUD-8788) - Windows OS: Error prompt when selecting a default project in the new workspace

### Misc

* [GB-561](https://jira.appcelerator.org/browse/GB-561) - Exception when Tab onto “OrientationModes” property for Windows element

* [TISTUD-8564](https://jira.appcelerator.org/browse/TISTUD-8564) - Hyperloop: Errors when running project with liveview and hyperloop enabled

* [TISTUD-8749](https://jira.appcelerator.org/browse/TISTUD-8749) - Can't auto login into studio dashboard with the SSO generated URL

* [TISTUD-8779](https://jira.appcelerator.org/browse/TISTUD-8779) - Studio Error reporting: Error while adding a breakpoint in app.js file

* [TISTUD-8817](https://jira.appcelerator.org/browse/TISTUD-8817) - Address XML External Entity Injection issues reported by Fortify

* [TISTUD-8827](https://jira.appcelerator.org/browse/TISTUD-8827) - Handle Fortify SCA reported NPE's

* [TISTUD-8829](https://jira.appcelerator.org/browse/TISTUD-8829) - Command Injection can cause the program to execute malicious commands

## Known issues

* [TISTUD-8878](https://jira.appcelerator.org/browse/TISTUD-8878) - JDK 1.9 is not supported with the Axway Appcelerator Studio 4.10.0
