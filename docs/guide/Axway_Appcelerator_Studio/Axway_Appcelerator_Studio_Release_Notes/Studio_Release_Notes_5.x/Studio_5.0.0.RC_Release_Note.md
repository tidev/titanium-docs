---
title: Studio 5.0.0.RC - 30 November 2017
weight: '110'
---

# Studio 5.0.0.RC - 30 November 2017

Studio 5.0.0.RC is a major release that includes new features, improvements, and bug fixes.

As of this release, Studio 4.x will not be supported one calendar year from 5.0.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

* Continued to update Axway Appcelerator Studio with branding changes ([DASH-31](https://jira.appcelerator.org/browse/DASH-31))

* Removed MobileWeb support from Studio

    * [TISTUD-8880](https://jira.appcelerator.org/browse/TISTUD-8880)

    * [GB-517](https://jira.appcelerator.org/browse/GB-517)

    * [TISTUD-8899](https://jira.appcelerator.org/browse/TISTUD-8899)

* Removed Windows 8.1 support from Studio ([TISTUD-8886](https://jira.appcelerator.org/browse/TISTUD-8886))

* Updated Android debugger on SDK 7.0.0+ to use the new inspector protocol ([TISTUD-8750](https://jira.appcelerator.org/browse/TISTUD-8750))

* Integrated Appcelerator Daemon with Studio

    * [TISTUD-8911](https://jira.appcelerator.org/browse/TISTUD-8911)

    * [TISTUD-8926](https://jira.appcelerator.org/browse/TISTUD-8926)

    * [TISTUD-8927](https://jira.appcelerator.org/browse/TISTUD-8927)

## Improvements

* [TISTUD-7981](https://jira.appcelerator.org/browse/TISTUD-7981) - Use appc daemon to request system info

    * Studio no longer uses `ti info -t <platform>` with the introduction of the appc daemon. Studio connects to this server over a WebSocket and query the system information and listen for changes.

* [TISTUD-8873](https://jira.appcelerator.org/browse/TISTUD-8873) - iOS: Use JSCore by default with SDK 7.0

    * JSCore will be configured by default if you're working with SDK 7.0 and higher

* [TISTUD-8890](https://jira.appcelerator.org/browse/TISTUD-8890) - Install node.js 8.7 with the studio 5.0 installers

    * Install node.js 8.7 with the Atudio 5.0 installers and increase the minimum version required to 7.6

## Fixed issues

* [TISTUD-7905](https://jira.appcelerator.org/browse/TISTUD-7905) - \["Expected ')'","",1\] in Dev Toolbox Console on launch

* [TISTUD-8610](https://jira.appcelerator.org/browse/TISTUD-8610) - iOS Debugger: JSCore: When debugging on iOS device the debug process keeps on waiting for app launch on device

* [TISTUD-8612](https://jira.appcelerator.org/browse/TISTUD-8612) - iOS Debugger: JSCore: NPE on click of any debug control button after debug has been terminated

* [TISTUD-8636](https://jira.appcelerator.org/browse/TISTUD-8636) - iOS Debugger: JSCore: Debug on iOS ignores all breakpoints on device

* [TISTUD-8841](https://jira.appcelerator.org/browse/TISTUD-8841) - Appc Studio: Use of grunt in Titanium Project failing

* [TISTUD-8847](https://jira.appcelerator.org/browse/TISTUD-8847) - Windows OS: Error prompt when importing a sample project from dashboard

* [TISTUD-8859](https://jira.appcelerator.org/browse/TISTUD-8859) - 4.9.1 Studio crashes immediately

* [TISTUD-8881](https://jira.appcelerator.org/browse/TISTUD-8881) - Enabling Appcelerator services generates new GUID

* [TISTUD-8882](https://jira.appcelerator.org/browse/TISTUD-8882) - Error reporting prompt shown when the login dialog is cancelled

* [TISTUD-8883](https://jira.appcelerator.org/browse/TISTUD-8883) - Error occured when I cancel the platform configuration dialog

* [TISTUD-8912](https://jira.appcelerator.org/browse/TISTUD-8912) - Have a flag to disable appc daemon in the studio

* [TISTUD-8913](https://jira.appcelerator.org/browse/TISTUD-8913) - Appc daemon: Unexpected token END OF FILE at position 65536

* [TISTUD-8918](https://jira.appcelerator.org/browse/TISTUD-8918) - Packaging an iOS module throws an error

* [TISTUD-8920](https://jira.appcelerator.org/browse/TISTUD-8920) - iOS Debugger: Need to delete .appc\_studio\_keystore file to debug on each new device

* [TISTUD-8922](https://jira.appcelerator.org/browse/TISTUD-8922) - Unable to see any android devices or emulators on studio 5.0.0.201711210649

* [TISTUD-8925](https://jira.appcelerator.org/browse/TISTUD-8925) - Calls to "appc ti info" still seen in studio logs

* [TISTUD-8928](https://jira.appcelerator.org/browse/TISTUD-8928) - Avoid Appcd calls when -Dappcd.disable flag set in the system property

* [TISTUD-8929](https://jira.appcelerator.org/browse/TISTUD-8929) - Start Daemon during the studio startup

* [TISTUD-8930](https://jira.appcelerator.org/browse/TISTUD-8930) - Appcelerator Studio Prerequisite for Android is not shown correctly

* [TISTUD-8932](https://jira.appcelerator.org/browse/TISTUD-8932) - Daemon not restarted if killed outside of Studio

* [TISTUD-8933](https://jira.appcelerator.org/browse/TISTUD-8933) - "appc appcd exec status" is not working with 7.0.0-master.48

* [TISTUD-8934](https://jira.appcelerator.org/browse/TISTUD-8934) - Using daemon studio fails to run genymotion emulator with invalid "--device-id" error

* [TISTUD-8936](https://jira.appcelerator.org/browse/TISTUD-8936) - Studio needs to recognize new iOS module template

* [TISTUD-8938](https://jira.appcelerator.org/browse/TISTUD-8938) - Hyperloop is not getting enabled in the tiapp.xml in the services section
