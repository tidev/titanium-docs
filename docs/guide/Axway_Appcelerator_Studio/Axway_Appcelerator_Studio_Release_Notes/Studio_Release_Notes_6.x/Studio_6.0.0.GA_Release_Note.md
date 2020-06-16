---
title: Studio 6.0.0.GA - 2 June 2020
weight: '10'
---

# Studio 6.0.0.GA - 2 June 2020

Studio 6.0.0.GA is a major release that includes new features, improvements, and bug fixes.

::: danger ❗️ 32-bit Builds Removed
32-bit builds of Studio are no longer supported, as Eclipse has removed 32-bit OS support.
:::
::: danger ❗️ API Builder Support Removed
[TISTUD-9207](https://jira.appcelerator.org/browse/TISTUD-9207) - Inline with the API Builder v3 deprecation, API Builder support has been removed from Studio
:::

## New features

* [TISTUD-9056](https://jira.appcelerator.org/browse/TISTUD-9056) - Java 10 support for studio

* [TISTUD-9132](https://jira.appcelerator.org/browse/TISTUD-9132) - Java 11 support for studio

## Improvements

* [TISTUD-8879](https://jira.appcelerator.org/browse/TISTUD-8879) - Install latest Node.js LTS version

* [TISTUD-8991](https://jira.appcelerator.org/browse/TISTUD-8991) - Studio: Eclipse Upgrade from Oxygen to Eclipse 4.9(2018-09)

* [TISTUD-9115](https://jira.appcelerator.org/browse/TISTUD-9115) - Studio 6.0 GA: Update Node.js version distributed by Studio

* [TISTUD-9119](https://jira.appcelerator.org/browse/TISTUD-9119) - Liveview: Disable hook attachment when using SDK 8 or above

* [TISTUD-9138](https://jira.appcelerator.org/browse/TISTUD-9138) - Support 'source-maps' property in tiapp.xml

* [TISTUD-9148](https://jira.appcelerator.org/browse/TISTUD-9148) - Update the Node.js installer links to the latest LTS 10.13

* [TISTUD-9155](https://jira.appcelerator.org/browse/TISTUD-9155) - Studio 6.0 GA: Install Java 11 with Studio 6.0 installers

* [TISTUD-9156](https://jira.appcelerator.org/browse/TISTUD-9156) - Studio 6.0 RC: Update Studio 6.0 with the JDK 11 temporary links for macOS and Win64

* [TISTUD-9162](https://jira.appcelerator.org/browse/TISTUD-9162) - TSS: Update TSS parser to handle $.args usage in TSS files

* [TISTUD-9197](https://jira.appcelerator.org/browse/TISTUD-9197) - Upgrade Eclipse base to 4.13

* [TISTUD-9204](https://jira.appcelerator.org/browse/TISTUD-9204) - Android: Module packaging disabled in studio for module created with SDK supporting gradle

## Fixed issues

* [TISTUD-7442](https://jira.appcelerator.org/browse/TISTUD-7442) - Appcelerator Studio doesn't start

* [TISTUD-7746](https://jira.appcelerator.org/browse/TISTUD-7746) - LiveView via CLI does not work (anymore) until it has been used via Studio after install/update

* [TISTUD-8736](https://jira.appcelerator.org/browse/TISTUD-8736) - Studio hangs upon opening file in offline mode when there was no previous appc session

* [TISTUD-8832](https://jira.appcelerator.org/browse/TISTUD-8832) - Fix NPE for String Join within StringUtil

* [TISTUD-8858](https://jira.appcelerator.org/browse/TISTUD-8858) - Studio support for new API Builder UI URL

* [TISTUD-8889](https://jira.appcelerator.org/browse/TISTUD-8889) - Error Reporting: Import Project from dashboard throws NPE intermittently

* [TISTUD-8976](https://jira.appcelerator.org/browse/TISTUD-8976) - Eclipse Oxygen: Issues in Studio Preferences

* [TISTUD-8985](https://jira.appcelerator.org/browse/TISTUD-8985) - Eclipse Oxygen: UI Issues in the Windows OS

* [TISTUD-9004](https://jira.appcelerator.org/browse/TISTUD-9004) - How do I switch back to previous studio version

* [TISTUD-9042](https://jira.appcelerator.org/browse/TISTUD-9042) - iOS: Create modules in "dist" directory

* [TISTUD-9043](https://jira.appcelerator.org/browse/TISTUD-9043) - Appc Studio Installer crashes during install process if only JDK 9 is installed

* [TISTUD-9065](https://jira.appcelerator.org/browse/TISTUD-9065) - Cannot fully scroll tiapp overview page

* [TISTUD-9092](https://jira.appcelerator.org/browse/TISTUD-9092) - Error occurred during "Getting Diagnostic Logs"

* [TISTUD-9096](https://jira.appcelerator.org/browse/TISTUD-9096) - The error marker for any error in script is always shown on the first line

* [TISTUD-9099](https://jira.appcelerator.org/browse/TISTUD-9099) - Incorrect filename shown in message on the error marker

* [TISTUD-9101](https://jira.appcelerator.org/browse/TISTUD-9101) - Install android 8.1 by default in the appcelerator studio

* [TISTUD-9107](https://jira.appcelerator.org/browse/TISTUD-9107) - Studio hangs on Startup

* [TISTUD-9108](https://jira.appcelerator.org/browse/TISTUD-9108) - Update [preview.appcelerator.com/appc-studio](http://preview.appcelerator.com/appc-studio) with the 64-bit Windows builds

* [TISTUD-9112](https://jira.appcelerator.org/browse/TISTUD-9112) - Avoid sending studio crash reports in development and testing mode

* [TISTUD-9123](https://jira.appcelerator.org/browse/TISTUD-9123) - Issues with the re-engineered session management

* [TISTUD-9129](https://jira.appcelerator.org/browse/TISTUD-9129) - Cannot launch studio with JDK 11

* [TISTUD-9137](https://jira.appcelerator.org/browse/TISTUD-9137) - Studio prompts for hyperloop plugin update with SDK > 7.0 if hyperloop folder inside modules directory is deleted.

* [TISTUD-9140](https://jira.appcelerator.org/browse/TISTUD-9140) - \[Android\]If USB debugging is not accepted on device, user is unable to select device/emulator from drop down menu

* [TISTUD-9142](https://jira.appcelerator.org/browse/TISTUD-9142) - LiveView: Newline character is displayed when using liveview

* [TISTUD-9145](https://jira.appcelerator.org/browse/TISTUD-9145) - Syntax errors in imported sample project "hyperloop-examples"

* [TISTUD-9199](https://jira.appcelerator.org/browse/TISTUD-9199) - Hyperloop: Prompted to install very out of date Hyperloop 1.2.8 release

* [TISTUD-9200](https://jira.appcelerator.org/browse/TISTUD-9200) - Android: Debugger does not hit breakpoint for an alloy app on a device.

* [TISTUD-9203](https://jira.appcelerator.org/browse/TISTUD-9203) - macOS RCP: zipped RCP .app folder is not signed, causing macOS to report as damaged or refusing to open

* [TISTUD-9211](https://jira.appcelerator.org/browse/TISTUD-9211) - Issues with version number and About page in RC build
