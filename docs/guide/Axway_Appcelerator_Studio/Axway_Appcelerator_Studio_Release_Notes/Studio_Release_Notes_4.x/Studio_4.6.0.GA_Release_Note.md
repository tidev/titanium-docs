---
title: Studio 4.6.0.GA - 2 June 2016
weight: '140'
---

# Studio 4.6.0.GA - 2 June 2016

Studio 4.6.0.GA is a minor release that includes new features, improvements, and bug fixes.

This release also includes [App Designer](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_How-tos/App_Designer_Overview/) that allows you to create and edit Alloy views using drag-drop and property editors and [App Preview](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_How-tos/App_Preview/) that allows you to distribute beta versions of your apps to testers and stakeholders.

**Note**: You cannot package an application for Windows 10. A fix is on the way in 4.7.0. In the meantime, use this CLI command: `appc run -p windows -T dist-phonestore --wp-sdk 10.0`

As of this release, Studio 4.5.x will not be supported six months from 4.6.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## App Preview

App Preview integration with iOS Adhoc and Android builds ([TISTUD-8009](https://jira.appcelerator.org/browse/TISTUD-8009) and [TISTUD-8010](https://jira.appcelerator.org/browse/TISTUD-8010)). App Preview is a new capability to distribute beta versions of your apps to testers and stakeholders. With this integration, Studio users can be able to upload an app to app preview.

App Preview has also been integrated with the CLI ([CLI-664](https://jira.appcelerator.org/browse/CLI-664)).

Please see [App Preview](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_How-tos/App_Preview/) for details on this new feature.

## App Designer

App Designer is a powerful drag-and-drop UI design capability feature which now comes with the Appcelerator Studio for editing for Alloy Views. App Designer supports both designer and code editor.

App Designer is installed when Mac and Windows users install Appcelerator Studio 4.6.0 ([TISTUD-8457](https://jira.appcelerator.org/browse/TISTUD-8457) and [TISTUD-8448](https://jira.appcelerator.org/browse/TISTUD-8448)). When the users upgrade Appcelerator Studio from previous versions to 4.6.0, App Designer is also upgraded to version 1.0.6.

Please review [App Designer Overview](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_How-tos/App_Designer_Overview/) for a quick overview of how App Designer works.

## Improvements

* [TISTUD-7717](https://jira.appcelerator.org/browse/TISTUD-7717) - Reconnect to the debug session after the app is restarted

    * Reconnect to the debug session after the app is restarted. If the app is accidentally crashed or terminated on a device or simulator, then the user doesn't need to re-launch the studio debug session, rather it automatically connects upon the app launch.

* [TISTUD-7946](https://jira.appcelerator.org/browse/TISTUD-7946) - User should be able to set Arrow port in the launch configuration for Studio

    * Studio users can set Arrow port through Studio Arrow preference option. This option provides a provision to set user specific port, any free port, and default configuration port.

* [TISTUD-8003](https://jira.appcelerator.org/browse/TISTUD-8003) - Non-modal dialog for submitting JIRA ticket from the studio

    * Non-modal dialog for submitting JIRA tickets from Studio

* [TISTUD-8012](https://jira.appcelerator.org/browse/TISTUD-8012) - Studio needs to call "appc run" / "ti build" to build iOS/Android modules

    * Studio builds iOS and Android modules using `appc run` command that avoids the dependency of python and ant scripts for iOS and Android builds

* [TISTUD-8447](https://jira.appcelerator.org/browse/TISTUD-8447) - Windows: Studio needs to specify the Windows SDK to be used when building to a Windows 10 emulator

    * Studio sends a windows SDK flag `--wp-sdk` while building for Windows platform emulators to enable SDK specific builds

* [TISTUD-8466](https://jira.appcelerator.org/browse/TISTUD-8466) - App designer in full screen mode - Showing Properties and Elements on the leftside

    * App Designer's perspective includes showing Properties and Elements on the right side

## Fixed Issues

* [TISTUD-7602](https://jira.appcelerator.org/browse/TISTUD-7602) - Remove Samples View from Appcelerator Studio

* [TISTUD-7952](https://jira.appcelerator.org/browse/TISTUD-7952) - iOS: Breakpoints not hit when debugging projects

* [TISTUD-7997](https://jira.appcelerator.org/browse/TISTUD-7997) - SDK update to 5.2.0.GA not found when 6.0 nightly is installed

* [TISTUD-8018](https://jira.appcelerator.org/browse/TISTUD-8018) - iOS Debugger: failed to connect.

* [TISTUD-8019](https://jira.appcelerator.org/browse/TISTUD-8019) - Studio: Selecting Two-Tabbed Alloy mobile app project generates a default Alloy project instead

* [TISTUD-8023](https://jira.appcelerator.org/browse/TISTUD-8023) - Don't allow to edit organization name in the Splash screen user login prompt

* [TISTUD-8026](https://jira.appcelerator.org/browse/TISTUD-8026) - Studio can't deal with Genymotion 2.6.0 or later

* [TISTUD-8460](https://jira.appcelerator.org/browse/TISTUD-8460) - Default Android SDK downloaded by configuration is to old and not supported by Titanium 5.2.2

* [TISTUD-8464](https://jira.appcelerator.org/browse/TISTUD-8464) - xml views files are in web format, cannot open with studio

* [TISTUD-8465](https://jira.appcelerator.org/browse/TISTUD-8465) - Tiapp now opens with the XML editor by default

* [TISTUD-8471](https://jira.appcelerator.org/browse/TISTUD-8471) - Android: Creating project with just android 6.0 platform installed studio shows a message "Android development requires \[2.3.3,6.0)"

* [TISTUD-8473](https://jira.appcelerator.org/browse/TISTUD-8473) - Unable to create android module in studio.

* [TISTUD-8474](https://jira.appcelerator.org/browse/TISTUD-8474) - Enable app preview options if appc core is bundled with an app preview hook

* [TISTUD-8475](https://jira.appcelerator.org/browse/TISTUD-8475) - Unable to build to Windows device

* [TISTUD-8476](https://jira.appcelerator.org/browse/TISTUD-8476) - Run targets should show the Windows phone device name rather than udid

* [TISTUD-8490](https://jira.appcelerator.org/browse/TISTUD-8490) - App designer: index.xml opened with App designer throws nullpointer exception on closing if studio is installed from installer

* [TISTUD-8495](https://jira.appcelerator.org/browse/TISTUD-8495) - Spelling error on adhoc deployment wizard
