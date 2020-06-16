---
title: Studio 4.8.0.GA - 14 November 2016
weight: '70'
---

# Studio 4.8.0.GA - 14 November 2016

Studio 4.8.0.GA is a minor release that includes new features, improvements, and bug fixes.

As of this release, Studio 4.7.x will not be supported six months from 4.8.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New features

App Designer remembers the state of which platform and device was last selected and the zoom level ([GB-202](https://jira.appcelerator.org/browse/GB-202)).

![switch_organization_%281%29](./switch_organization_(1).png)

Users no longer have to log in and out of Studio to switch organizations. With Studio 4.8.0 ([TIDOC-2559](https://jira.appcelerator.org/browse/TIDOC-2559) and [TISTUD-7504](https://jira.appcelerator.org/browse/TISTUD-7504)), users can switch organizations via the File menu (**File** > **Switch Organizations**) or by clicking on the **organization icon** in the **status region** (lower right corner). Either way, a dialogue window will pop up and you select which organization you wish to switch into via a drop-down list. Switching organizations takes a few seconds to process so you will see a "switching organization progress" indicator. Users will then be prompted of the successful organization change.

This version of Studio adds support to create, build, and test Windows modules ([TISTUD-8519](https://jira.appcelerator.org/browse/TISTUD-8519)). See the guide called [Windows Module Quick Start](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Windows_Module_Development_Guide/Windows_Module_Quick_Start/) for information.

## Improvements

* [GB-201](https://jira.appcelerator.org/browse/GB-201) - Default Screen Resolution

    * When opening App Designer, the default resolution will be selected based on the platform

* [GB-515](https://jira.appcelerator.org/browse/GB-515) - Close Properties View and Elements View when App Designer editor is closed

    * Properties and Element Views close when App Designer is closed

* [GB-518](https://jira.appcelerator.org/browse/GB-518) - Set default zoom level based the device resolution for android and iOS

    * App Designer sets the default zoom level based on the device resolution. See the table below for the default zoom levels:

        | Device | Zoom Level |
        | --- | --- |
        | iOS |  |
        | 640x960 - iPhone 4, 4s | 60% |
        | 640x1136 - iPhone 5 | 60% |
        | 750x1334 - iPhone 6 | 60% |
        | 1080x1920 - iPhone 6+ | 40% |
        | 1536x2048 - iPad Air, iPad 3, iPad Min Retina | 50% |
        | 2732x2048 - iPad Pro | 50% |
        | Android |  |
        | 768x1280 - Nexus 4 | 50% |
        | 1080x1920 - Nexus 5 | 40% |
        | 1440x2560 - Nexus 6 | 30% |
        | 1200x1920 - Nexus 7 | 40% |
        | 1536x2048 - Nexus 9 | 40% |
        | 1600x2560 - Nexus 10 | 40% |
        | Sony Xperia SP | 50% |
        | Samsung Galaxy S6 | 30% |
        | Samsung Galaxy S5, S4 | 40% |
        | 1080x1920 HTC One | 40% |
        | 2560x1600 Amazon Kindle Fire HDX | 30% |
        | 1920x1280 Barnes & Noble Nook | 40% |

* [TISTUD-7506](https://jira.appcelerator.org/browse/TISTUD-7506) - Add logout menu option in the studio

    * You can now log out of Studio from the File menu. Click on File > Log Out Appcelerator Studio and confirm the logout request by clicking on Yes.

* [TISTUD-8509](https://jira.appcelerator.org/browse/TISTUD-8509) - Set Node 4.X as minimum supported version

    * Set Node 4.2.0 as minimum supported version. Studio will automatically install Node 4.6.0 by default. Users can install higher versions of Node but anything beyond 4.6.0 is not supported.

    * See [Installing Node](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/) for supported versions of Node.

* [TISTUD-8524](https://jira.appcelerator.org/browse/TISTUD-8524) - Show Appcelerator Studio version number on startup splash screen

    * Added the version number on the startup splash screen

* [TISTUD-8530](https://jira.appcelerator.org/browse/TISTUD-8530) - Windows tag support in timodule.xml

    * Added support for the `windows` tag in the `timodule.xml` file

* [TISTUD-8536](https://jira.appcelerator.org/browse/TISTUD-8536) - Support per-platform moduleAPIVersions

    * Added support on a per-platform list of valid modules for a given SDK

* [TISTUD-8544](https://jira.appcelerator.org/browse/TISTUD-8544) - Update node installer links to 4.2.0

    * Updated Node install to use Node 4.2.0 as the minimum but will default to 4.6.0

* [TISTUD-8547](https://jira.appcelerator.org/browse/TISTUD-8547) - Update Hyperloop from the studio

    * Added capability to update Hyperloop from within Studio

## Fixed issues

* [DASH-20](https://jira.appcelerator.org/browse/DASH-20) - Remove 'More' link from the studio dashboard samples area

* [DASH-21](https://jira.appcelerator.org/browse/DASH-21) - Videos no longer shown on frontpage

* [GB-519](https://jira.appcelerator.org/browse/GB-519) - iPad Air/iPad 3/iPad Mini Retina device screen resolutions are not reflecting in App designer editor

* [TISTUD-5557](https://jira.appcelerator.org/browse/TISTUD-5557) - Error in Studio log on "cannot find templates/release\_notes.html"

* [TISTUD-7212](https://jira.appcelerator.org/browse/TISTUD-7212) - Remove shield icon from the bottom toolbar

* [TISTUD-7800](https://jira.appcelerator.org/browse/TISTUD-7800) - Creating a controller in a folder doesn't work

* [TISTUD-7855](https://jira.appcelerator.org/browse/TISTUD-7855) - Studio: Install Android SDK dialog doesn't resize large enough to hold entries

* [TISTUD-7972](https://jira.appcelerator.org/browse/TISTUD-7972) - If you run Test on a non-enabled-service app, then Studio will become unresponsive and crash

* [TISTUD-8015](https://jira.appcelerator.org/browse/TISTUD-8015) - "Missing icon" in TiApp Editor when using DefaultIcon.png

* [TISTUD-8451](https://jira.appcelerator.org/browse/TISTUD-8451) - No console logs displayed when packaging Android & IOS modules with studio 4.6.0.201604041329

* [TISTUD-8462](https://jira.appcelerator.org/browse/TISTUD-8462) - Sending Analytics Ping error

* [TISTUD-8472](https://jira.appcelerator.org/browse/TISTUD-8472) - Android: Building the app for genymotion emulator gives alert "The launch requires 2.3.3 SDK or higher"

* [TISTUD-8523](https://jira.appcelerator.org/browse/TISTUD-8523) - Error reporting: Location to be watched doesn't exist

* [TISTUD-8526](https://jira.appcelerator.org/browse/TISTUD-8526) - Android NDK Version not shown in the studio diagnostic log with android NDK11

* [TISTUD-8527](https://jira.appcelerator.org/browse/TISTUD-8527) - Norton Security deems Appc Studio unsafe, and Symantec Endpoint Protection think the install is untrustworthy

* [TISTUD-8540](https://jira.appcelerator.org/browse/TISTUD-8540) - Installation error while opening studio in the offline mode

* [TISTUD-8541](https://jira.appcelerator.org/browse/TISTUD-8541) - NPE while checking for "Install Appcelerator SDK" from studio help menu

* [TISTUD-8553](https://jira.appcelerator.org/browse/TISTUD-8553) - Install: Install of version 4.8.0 fails due to node prerequisite install

* [TISTUD-8554](https://jira.appcelerator.org/browse/TISTUD-8554) - Install: Studio does not check for 64-bit versions of Node

* [TISTUD-8569](https://jira.appcelerator.org/browse/TISTUD-8569) - Error Reporting:Widget is disposed error during the studio logout

* [TISTUD-8572](https://jira.appcelerator.org/browse/TISTUD-8572) - Error Reporting: NPE while launching mobile app project creation wizard

* [TISTUD-8573](https://jira.appcelerator.org/browse/TISTUD-8573) - Error reporting:Unable to evaluate expression using this context

* [TISTUD-8576](https://jira.appcelerator.org/browse/TISTUD-8576) - Error Reporting: Unable to retrieve user downloads error in offline mode

* [TISTUD-8577](https://jira.appcelerator.org/browse/TISTUD-8577) - Error Reporting: java.lang.IllegalArgumentException: Argument not valid

* [TISTUD-8594](https://jira.appcelerator.org/browse/TISTUD-8594) - Manually checking for appcelerator updates for studio 4.8.0.201609061702 fails due to java.lang.NullPointerException

* [TISTUD-8597](https://jira.appcelerator.org/browse/TISTUD-8597) - Studio: unable to create mobile apps from ruble

* [TISTUD-8641](https://jira.appcelerator.org/browse/TISTUD-8641) - Windows: Studio always installs node

* [TISTUD-8642](https://jira.appcelerator.org/browse/TISTUD-8642) - Android Debugger: Breakpoint not hit during debug of alloy app on android device

* [TISTUD-8643](https://jira.appcelerator.org/browse/TISTUD-8643) - Android Debugger: Not all variables shown during debug of android app with SDK 6.0.0

## Known issues

* [TIDOC-2553](https://jira.appcelerator.org/browse/TIDOC-2553) - Studio Troubleshooting: Launch issue in Windows 64-bit machines

    * Studio requires a 32-bit Java run-time environment in order to launch on either 32 or 64-bit operating systems. During installation, Studio will detect and install a 32-bit JDK if it is not found on your system. However, Studio won't default that Java environment. If you are unable to launch Studio on a Windows 64-bit OS, Studio wasn't able to find the 32-bit JDK. You will see an error similar to this:

        ![_thumb_60015](./_thumb_60015.png)
    * If your default Java environment is set to 64-bit, then you need to add the following argument in the `Appcelerator.ini` file (found in the installation directory):

        ```
        C:\Program Files(x86)\Java\jdk1.7.0_71\bin\javaw.exe
        ```

* [TISTUD-8613](https://jira.appcelerator.org/browse/TISTUD-8613) - iOS Debugger: Breakpoint is not hit for the first time for a clean alloy project

    * When a clean Alloy project is debugged on iOS, the breakpoint is not hit. However when the same project is debugged again without cleaning the previous project build, the breakpoint does hit successfully.

* [TISTUD-8639](https://jira.appcelerator.org/browse/TISTUD-8639) - Android Debugger: Extra call frames shown in debug view whose source file is not shown on click

    * The Debug View shows extra call frame that point to [ti:/module.js](http://ti/module.js) file. Clicking on any of these call frames will show "Source not found."

        ![Screen_Shot_2016-10-28_at_4.14.24_PM_%281%29](./Screen_Shot_2016-10-28_at_4.14.24_PM_(1).png)
* [TISTUD-8655](https://jira.appcelerator.org/browse/TISTUD-8655) - Studio: Logs show 403 error when checking for updates

    * When you check for Appcelerator Studio updates, you'll see an error in the Studio Log detailing a 403 error message like this:

        ```
        !ENTRY com.appcelerator.titanium.update.core 4 0 2016-11-09 14:33:50.565
        !MESSAGE (Build 4.8.0.201611092408) [ERROR]  Server returned HTTP response code: 403 for URL: http://builds.appcelerator.com.s3.amazonaws.com/mobile/5.2.0/index.json
        !STACK 0
        java.io.IOException: Server returned HTTP response code: 403 for URL: http://builds.appcelerator.com.s3.amazonaws.com/mobile/5.2.0/index.json
          at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1626)
          at com.appcelerator.titanium.update.internal.core.TitaniumReleasesUpdater.getURIContents(TitaniumReleasesUpdater.java:699)
          at com.appcelerator.titanium.update.internal.core.TitaniumReleasesUpdater.getReleases(TitaniumReleasesUpdater.java:603)
          at com.appcelerator.titanium.update.internal.core.TitaniumReleasesUpdater.getSDKReleases(TitaniumReleasesUpdater.java:549)
          at com.appcelerator.titanium.update.internal.core.TitaniumReleasesUpdater.getLatestSDKRelease(TitaniumReleasesUpdater.java:805)
          at com.appcelerator.titanium.update.internal.core.TitaniumReleasesUpdater.hasSDKUpdates(TitaniumReleasesUpdater.java:246)
          at com.appcelerator.titanium.update.internal.core.TitaniumReleasesUpdater.hasUpdates(TitaniumReleasesUpdater.java:202)
          at com.appcelerator.titanium.update.ui.handler.TitaniumUpdateHandler$1.run(TitaniumUpdateHandler.java:63)
          at org.eclipse.core.internal.jobs.Worker.run(Worker.java:54)
        ```
