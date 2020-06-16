---
title: Studio 4.9.0.GA - 2 June 2017
weight: '50'
---

# Studio 4.9.0.GA - 2 June 2017

Studio 4.9.0.GA is a minor release that includes new features, improvements, and bug fixes.

As of this release, Studio 4.8.x will not be supported six months from 4.9.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New features

* [GB-521](https://jira.appcelerator.org/browse/GB-521) - App Designer for Windows Phone apps

    * Added support to use App Designer for Windows Phones

* [TISTUD-7138](https://jira.appcelerator.org/browse/TISTUD-7138) - AppceleratorStudio: Unable to configure which IP should the LiveView use

    * Added configurability for LiveView to be set with select IP. Please review [LiveView](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/LiveView/) for details.

## Improvements

* [GB-501](https://jira.appcelerator.org/browse/GB-501) - Add search/filter bar in the Properties view

    * Added a search/filter field in the Properties view

* [GB-535](https://jira.appcelerator.org/browse/GB-535) - Default size of the mobile screen to fit into a page

    * Configured default zoom percentages based on the mobile screen fit into the designer page

    * Added default zoom percentages for mobile web

    * Changed the text from "1080x1920 iPhone 6+" to 1080x1920 iPhone 6 Plus"

    * Changed "Snap To" combo to uneditable

* [GB-539](https://jira.appcelerator.org/browse/GB-539) - Properties - App Designer: Enable Delete with Keyboard Delete on ColorCellEditors

    * Added support to delete the assigned color for ColorCell type values

* [GB-540](https://jira.appcelerator.org/browse/GB-540) - Allow deselect of elements in App Designer

    * Added support to deselect element from the Cursor key icon from the editor toolbar or by tapping the ESC key

* [TISTUD-7979](https://jira.appcelerator.org/browse/TISTUD-7979) - Liveview for the Windows Platform

    * Implemented LiveView for the Windows

* [TISTUD-8538](https://jira.appcelerator.org/browse/TISTUD-8538) - Publishing: Block field input until 'Use Existing' is selected by the user on Windows Phone packaging

    * Locked input fields for certificate location and password unless the user selects the `Use Existing` option

* [TISTUD-8557](https://jira.appcelerator.org/browse/TISTUD-8557) - limit the size of a symbol file uploaded to crashserver to 250Mb

    * Set limit of 250MB of symbol file uploads to crashserver

* [TISTUD-8563](https://jira.appcelerator.org/browse/TISTUD-8563) - Studio startup performance improvement

    * Improved Studio startup performance

* [TISTUD-8570](https://jira.appcelerator.org/browse/TISTUD-8570) - Remove call to provisioner.py

    * Deprecated Studio's use of `provisioner.py` script

* [TISTUD-8579](https://jira.appcelerator.org/browse/TISTUD-8579) - Android: Update link to Android tools

    * Revised Studio's update link for Android tooling

* [TISTUD-8598](https://jira.appcelerator.org/browse/TISTUD-8598) - Arrow: Handle error from Arrow deployment better

    * Improved error handling when `appc publish` returns an error when an app cannot be started

* [TISTUD-8605](https://jira.appcelerator.org/browse/TISTUD-8605) - Studio must no longer rely on wait\_for\_device.py

    * Deprecated `wait_for_device.py`

* [TISTUD-8668](https://jira.appcelerator.org/browse/TISTUD-8668) - Studio should not use removed options for build commands

    * Deprecated `sim-type` and `sim-version` from Studio

* [TISTUD-8685](https://jira.appcelerator.org/browse/TISTUD-8685) - Upgrade Appcelerator Studio JDK version to 1.8

    * Upgrade Studio JDK version to JDK 1.8

* [TISTUD-8713](https://jira.appcelerator.org/browse/TISTUD-8713) - Provide example AppID format in the new project creation wizard

    * Improved the New Project Creation wizard to include a sample AppID in the app ID form

    * For example: `com.companyname.appname`

* [TISTUD-8714](https://jira.appcelerator.org/browse/TISTUD-8714) - Avoid showing error reporting message sent confirmation pop-up dialog

    * Removed redundant error reporting server confirmation message after the error has been sent to the server

* [TISTUD-8718](https://jira.appcelerator.org/browse/TISTUD-8718) - Send error reports in the silent mode by default

    * Changed the default error reporting send action from "Ask before sending" to "Always send silently"

* [TISTUD-8729](https://jira.appcelerator.org/browse/TISTUD-8729) - Add support for enterprise ad hoc provisioning profiles

    * Added support for enterprise ad hoc provisioning profiles

* [TISTUD-8747](https://jira.appcelerator.org/browse/TISTUD-8747) - Update node installer links to Node.js v6.10.3(Latest LTS)

## Fixed Issues

* [TISTUD-7569](https://jira.appcelerator.org/browse/TISTUD-7569) - The studio login dialog after entering wrong credentials does not close on cancel

* [TISTUD-7826](https://jira.appcelerator.org/browse/TISTUD-7826) - Error reporting: NPE in Control.internal\_new\_GC

* [TISTUD-7872](https://jira.appcelerator.org/browse/TISTUD-7872) - Studio does not find 5.1.0.GA

* [TISTUD-7965](https://jira.appcelerator.org/browse/TISTUD-7965) - Windows Login: Bad layout on Windows (using Retina screen)

* [TISTUD-7984](https://jira.appcelerator.org/browse/TISTUD-7984) - Studio: UI element draw issue and frequent crash when closing a separate editor window

* [TISTUD-8502](https://jira.appcelerator.org/browse/TISTUD-8502) - Windows: Local Machine missing from run-list

* [TISTUD-8527](https://jira.appcelerator.org/browse/TISTUD-8527) - Norton Security deems Appc Studio unsafe, and Symantec Endpoint Protection think the install is untrustworthy

* [TISTUD-8551](https://jira.appcelerator.org/browse/TISTUD-8551) - Windows: Studio requires Windows SDK path to be set for project creation

* [TISTUD-8556](https://jira.appcelerator.org/browse/TISTUD-8556) - Remove Windows SDK path configuration from the Platform configuration dialog

* [TISTUD-8561](https://jira.appcelerator.org/browse/TISTUD-8561) - Studio dashboard opening page blocks the user doing other activities

* [TISTUD-8566](https://jira.appcelerator.org/browse/TISTUD-8566) - During the studio launch "Validating Status" is taking long time

* [TISTUD-8571](https://jira.appcelerator.org/browse/TISTUD-8571) - tiapp.xml editor schema doesn't allow comma-separated deploy types on modules

* [TISTUD-8575](https://jira.appcelerator.org/browse/TISTUD-8575) - LiveView: vEthernet network connection is selected when building on a Windows system

* [TISTUD-8584](https://jira.appcelerator.org/browse/TISTUD-8584) - Error reporting: Unknown SDK windows

* [TISTUD-8588](https://jira.appcelerator.org/browse/TISTUD-8588) - Windows: 'Mobile App Project' dropdown on module packaging is blank

* [TISTUD-8596](https://jira.appcelerator.org/browse/TISTUD-8596) - CLI:Platform specific folders are not created under resources when additional deployment targets are selected from tiapp.xml

* [TISTUD-8600](https://jira.appcelerator.org/browse/TISTUD-8600) - Studio console log does not show debug logs while building/packaging android module.

* [TISTUD-8603](https://jira.appcelerator.org/browse/TISTUD-8603) - Alloy: Unable to create an alloy component when right clicking on file

* [TISTUD-8638](https://jira.appcelerator.org/browse/TISTUD-8638) - Visual elements not lining up correctly

* [TISTUD-8656](https://jira.appcelerator.org/browse/TISTUD-8656) - Studio freezes momentarily when opening or closing files

* [TISTUD-8662](https://jira.appcelerator.org/browse/TISTUD-8662) - Hide Windows Preference page in Mac OS

* [TISTUD-8665](https://jira.appcelerator.org/browse/TISTUD-8665) - Disclaimer Text on Login Screen for 13" Mac running Windows

* [TISTUD-8675](https://jira.appcelerator.org/browse/TISTUD-8675) - Studio: Error is produced when trying to configure with no options selected

* [TISTUD-8676](https://jira.appcelerator.org/browse/TISTUD-8676) - Studio: "No write Permissions" warning in Platform configuration for iOS

* [TISTUD-8684](https://jira.appcelerator.org/browse/TISTUD-8684) - Mac Installer: Problems with installing JDK

* [TISTUD-8688](https://jira.appcelerator.org/browse/TISTUD-8688) - Windows Platform Configuration is shown on Mac

* [TISTUD-8696](https://jira.appcelerator.org/browse/TISTUD-8696) - Liveview: Unable to find Hyperloop reference on iOS devices

* [TISTUD-8698](https://jira.appcelerator.org/browse/TISTUD-8698) - Windows Platform available as deployment target for a project on Mac OS

* [TISTUD-8701](https://jira.appcelerator.org/browse/TISTUD-8701) - Link to installing JDT Tools goes to wrong page

* [TISTUD-8703](https://jira.appcelerator.org/browse/TISTUD-8703) - Error reporting: NPE after launching the Studio

* [TISTUD-8705](https://jira.appcelerator.org/browse/TISTUD-8705) - Error reporting: Inspect IdeLog.logError() references in the studio

* [TISTUD-8707](https://jira.appcelerator.org/browse/TISTUD-8707) - Error reporting: Could not find default Android SDK error during App preview

* [TISTUD-8710](https://jira.appcelerator.org/browse/TISTUD-8710) - Error reporting: Null or Empty type name attempting to be recorded for a return type

* [TISTUD-8711](https://jira.appcelerator.org/browse/TISTUD-8711) - Error reporting: No provider registered for Ti SDK 4.1 Example

* [TISTUD-8720](https://jira.appcelerator.org/browse/TISTUD-8720) - Cannot access API Docs when running Arrow on Local Server

* [TISTUD-8721](https://jira.appcelerator.org/browse/TISTUD-8721) - Exception:java.lang.Error: Error: could not match input

* [TISTUD-8724](https://jira.appcelerator.org/browse/TISTUD-8724) - Updating Android NDK path does not update configuration file in Windows

* [TISTUD-8727](https://jira.appcelerator.org/browse/TISTUD-8727) - NPE during sign out from studio

* [TISTUD-8740](https://jira.appcelerator.org/browse/TISTUD-8740) - "Manage AVDs" button in Android preference not working with new Android-Tools release

* [TISTUD-8741](https://jira.appcelerator.org/browse/TISTUD-8741) - Studio dashboard shows "Server unavailable" page with the CLI 6.2.0-master.62

* [TISTUD-8753](https://jira.appcelerator.org/browse/TISTUD-8753) - Exception when trying to open "About Appcelerator Studio"

* [TISTUD-8754](https://jira.appcelerator.org/browse/TISTUD-8754) - Studio continuously prompts user to install Java Development Kit 1.8.0\_121 if they don't already have Java 1.8 installed

* [TISTUD-8760](https://jira.appcelerator.org/browse/TISTUD-8760) - Android: Debugging for android device throws "java.lang.NoClassDefFoundError: org/chromium/sdk/JavascriptVmFactory"

* [TISTUD-8772](https://jira.appcelerator.org/browse/TISTUD-8772) - Hyperloop: Errors when running project with liveview and hyperloop enabled

## Known issues

**Managing Android AVDs using Axway Appcelerator Studio 4.9.0.** With Android SDK Tools 25.3.0 (March, 2017) and higher, there is a change in how we manage Android AVD creation in Studio. Google has deprecated the “android” command which was used to launch Android AVD Manager UI and this is not possible now with Android SDK Tools 25.3.0 and higher.

To address this, Studio 4.9.0 has implemented a new UI to allow basic Android AVD creation by capturing the AVD name, device, and system image.

However, to customize the AVD creation, users can use a new program called **avdmanager** in the **tools/bin** folder of your Android SDK from the command line tools.

**Note:** It’s recommended to use Android Tools 25.2.5 and lower or 25.3.2 and higher.
