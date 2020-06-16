---
title: Studio 4.6.0.Beta Release Note - 21 April 2016
weight: '160'
---

# Studio 4.6.0.Beta Release Note - 21 April 2016

Studio 4.6.0.Beta is a minor release that includes new features, improvements, and bug fixes.

As of this release, Studio 4.5.x will not be supported six months from 4.6.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New Features

### App Preview

App Preview integration with iOS Adhoc and Android builds ([TISTUD-8009](https://jira.appcelerator.org/browse/TISTUD-8009) and [TISTUD-8010](https://jira.appcelerator.org/browse/TISTUD-8010)). App Preview is a new capability to distribute beta versions of your apps to testers and stakeholders. With this integration, Studio users can be able to upload an app to app preview.

### App Designer

App Designer is a powerful drag-and-drop UI design capability feature which now comes with the Appcelerator Studio as a default editor for Alloy Views. App Designer supports both designer and code editor.

App Designer is installed when Mac and Windows users install Appcelerator Studio 4.6.0 ([TISTUD-8457](https://jira.appcelerator.org/browse/TISTUD-8457)). When the users upgrade Appcelerator Studio from previous versions to 4.6.0, App Designer is also installed.

For those of you who have App Designer installed on versions of Studio prior to 4.6.0, you will need to uninstall App Designer following these steps:

1. With **Appcelerator Studio** open, go to **Menu** > **About Appcelerator Studio**.

2. In the About Appcelerator Studio window, click on **Installation Details** button (found in the bottom left corner).

3. In the Appcelerator Studio Installation Details window, if the **Install Software** tab isn't selected, select it now.

4. Select **Appcelerator Designer** from the list.

5. Click **Uninstall** button from this window. This will take you to an "uninstall" page.

6. Click the **Finish** button. This process will take about 2-3 minutes. Once the uninstall is complete, Studio will show a window for **Software Updates** to restart it.

7. Click **Yes** to restart Studio.

## Improvements

* [TISTUD-7717](https://jira.appcelerator.org/browse/TISTUD-7717) - Reconnect to the debug session after the app is restarted

    * Reconnect to the debug session after the app is restarted. If the app is accidentally crashed or terminated on a device or simulator, then the user doesn't need to re-launch the studio debug session, rather it automatically connects upon the app launch.

* [TISTUD-7946](https://jira.appcelerator.org/browse/TISTUD-7946) - User should be able to set Arrow port in the launch configuration for Studio

    * Studio users can set Arrow port through Studio Arrow preference option. This option provides a provision to set user specific port, any free port, and default configuration port.

* [TISTUD-8003](https://jira.appcelerator.org/browse/TISTUD-8003) - Non-modal dialog for submitting JIRA ticket from the studio

    * Non-modal dialog for submitting JIRA tickets from Studio

* [TISTUD-8012](https://jira.appcelerator.org/browse/TISTUD-8012) - Studio needs to call "appc run" / "ti build" to build iOS/Android modules

    * Studio builds iOS and Android modules using appc run command that avoids the dependency of python and ant scripts for iOS and Android builds

* [TISTUD-8447](https://jira.appcelerator.org/browse/TISTUD-8447) - Windows: Studio needs to specify the Windows SDK to be used when building to a Windows 10 emulator

    * Studio sends a windows SDK flag --wp-sdk while building for Windows platform emulators to enable SDK specific builds

* [TISTUD-8455](https://jira.appcelerator.org/browse/TISTUD-8455) - An option to set App designer Scratchpad XML editor as a default alloy view editor

    * Studio 4.6.0 comes with App Designer as a default editor for Alloy Views, but that can be changed to standard Alloy View editor using Studio editor preference options

## Fixed Issues

* [TISTUD-7602](https://jira.appcelerator.org/browse/TISTUD-7602) - Remove Samples View from Appcelerator Studio

* [TISTUD-7952](https://jira.appcelerator.org/browse/TISTUD-7952) - iOS: Breakpoints not hit when debugging projects

* [TISTUD-7997](https://jira.appcelerator.org/browse/TISTUD-7997) - SDK update to 5.2.0.GA not found when 6.0 nightly is installed

* [TISTUD-8018](https://jira.appcelerator.org/browse/TISTUD-8018) - iOS Debugger: failed to connect

* [TISTUD-8019](https://jira.appcelerator.org/browse/TISTUD-8019) - Studio: Selecting Two-Tabbed Alloy mobile app project generates a default Alloy project instead

* [TISTUD-8023](https://jira.appcelerator.org/browse/TISTUD-8023) - Don't allow to edit organization name in the Splash screen user login prompt

* [TISTUD-8026](https://jira.appcelerator.org/browse/TISTUD-8026) - Studio can't deal with Genymotion 2.6.0 or later

* [TISTUD-8464](https://jira.appcelerator.org/browse/TISTUD-8464) - xml views files are in web format, cannot open with studio

* [TISTUD-8465](https://jira.appcelerator.org/browse/TISTUD-8465) - Tiapp now opens with the XML editor by default
