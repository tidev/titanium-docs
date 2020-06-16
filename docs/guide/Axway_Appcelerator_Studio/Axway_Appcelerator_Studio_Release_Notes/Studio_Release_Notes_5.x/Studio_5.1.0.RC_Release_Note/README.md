---
title: Studio 5.1.0.RC Release Note
weight: '90'
---

# Studio 5.1.0.RC Release Note

## Studio 5.1.0.RC - 27 July 2018

Studio 5.1.0.RC is a minor release that includes a few improvements and several bug fixes.

As of this release, Studio 5.0.x will not be supported six months from 5.1.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

### Improvements

* [TISTUD-7565](https://jira.appcelerator.org/browse/TISTUD-7565) - Upgrade Eclipse base to Oxygen (4.7)

    * Updated Eclipse base to Oxygen (4.7)

* [TISTUD-8878](https://jira.appcelerator.org/browse/TISTUD-8878) - Axway Appcelerator Studio support for JDK 1.8.152/153 and JDK 9

    * Added support for JDK 1.8.152/153 and JDK 9

* [TISTUD-9006](https://jira.appcelerator.org/browse/TISTUD-9006) - The "full\_uninstall.txt" file in the Appcelerator folder is outdated

    * Removed the outdated `full_uninstall.txt` file from Studio. Users are advised to visit [Uninstalling Studio](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Updating_Studio/Uninstalling_Studio/) for details on uninstalling Studio.

* [TISTUD-9018](https://jira.appcelerator.org/browse/TISTUD-9018) - Supporting 64-bit Studio Windows installers as there is no 32-bit Java 9

    * Added support for 64-bit Windows Installers

* [TISTUD-9019](https://jira.appcelerator.org/browse/TISTUD-9019) - Updating JRuby plugins to support Java 9

    * Updated jRuby to 9.1.16, Ruby to 2.5.0

    * Updated ruby gems (rake to 12.3.0)

* [TISTUD-9085](https://jira.appcelerator.org/browse/TISTUD-9085) - Update to liveview 1.2.2

    * Updated to liveview to version 1.2.2 to address [TIMOB-25790](https://jira.appcelerator.org/browse/TIMOB-25790)

* [TISTUD-9086](https://jira.appcelerator.org/browse/TISTUD-9086) - Add transpile identifer to the tiapp.xml schema

    * Added transpile to the `tiapp.xml` schema

### Fixed issues

* [TISTUD-8652](https://jira.appcelerator.org/browse/TISTUD-8652) - Studio toolbar buttons(run,device/emulator dropdown menu) are too small and the text on them are illegible

* [TISTUD-8885](https://jira.appcelerator.org/browse/TISTUD-8885) - Cannot fully scroll tiapp.xml until view is resized

* [TISTUD-8898](https://jira.appcelerator.org/browse/TISTUD-8898) - Mac: Appcelerator Studio freezes with the latest JDK 8u151 or JDK 8u152

* [TISTUD-8902](https://jira.appcelerator.org/browse/TISTUD-8902) - Appcelerator Studio crashes intermittently on clearing logs

* [TISTUD-8905](https://jira.appcelerator.org/browse/TISTUD-8905) - Mac: Axway Appcelerator Studio menus are greyed out on OSX 10.13.1 Beta (17B42a)

* [TISTUD-8916](https://jira.appcelerator.org/browse/TISTUD-8916) - Appcelerator Studio crashes on Select + Delete on Mac

* [TISTUD-8945](https://jira.appcelerator.org/browse/TISTUD-8945) - Dashboard API calls are getting failed due to non json reponse

* [TISTUD-8963](https://jira.appcelerator.org/browse/TISTUD-8963) - Project icons aren't being shown, after migrating to eclipse-oxygen

* [TISTUD-8966](https://jira.appcelerator.org/browse/TISTUD-8966) - iOS Debugger: Not able to resume when debugger stops at first line of code

* [TISTUD-8967](https://jira.appcelerator.org/browse/TISTUD-8967) - Eclipse Oxygen: Error while accessing "Axway Appcelerator" item from the import project menu -

* [TISTUD-8971](https://jira.appcelerator.org/browse/TISTUD-8971) - Eclipse Oxygen: Issues with menu items

* [TISTUD-8978](https://jira.appcelerator.org/browse/TISTUD-8978) - Eclipse Oxygen: Issues with project import

* [TISTUD-8979](https://jira.appcelerator.org/browse/TISTUD-8979) - Eclipse Oxygen: Error during step into or step over during debug

* [TISTUD-8983](https://jira.appcelerator.org/browse/TISTUD-8983) - Studio: Cannot package iOS module projects

* [TISTUD-8984](https://jira.appcelerator.org/browse/TISTUD-8984) - Eclipse-oxygen-2: Exceptions while creating Mobile Project while in debug perspective

* [TISTUD-8997](https://jira.appcelerator.org/browse/TISTUD-8997) - Eclipse Oxygen: The Run and Device drop down are shown truncated in Windows OS

* [TISTUD-8998](https://jira.appcelerator.org/browse/TISTUD-8998) - The logged in User, feedback button and change organization button at the bottom right are not shown

* [TISTUD-9016](https://jira.appcelerator.org/browse/TISTUD-9016) - The installer installs JDK1.8.0\_131 even if JDK 1.9 is already installed

* [TISTUD-9026](https://jira.appcelerator.org/browse/TISTUD-9026) - Install 64-bit Java with the 64-bit Windows Installers

* [TISTUD-9027](https://jira.appcelerator.org/browse/TISTUD-9027) - Textual changes in Workspace Selection dialog

* [TISTUD-9029](https://jira.appcelerator.org/browse/TISTUD-9029) - Button colors not proper on login screen on windows OS

* [TISTUD-9035](https://jira.appcelerator.org/browse/TISTUD-9035) - Issues with Android SDK setup from studio

* [TISTUD-9036](https://jira.appcelerator.org/browse/TISTUD-9036) - Null Pointer Exception shown on studio launch with a new workspace

* [TISTUD-9045](https://jira.appcelerator.org/browse/TISTUD-9045) - Two notifications shown for availability of studio update

* [TISTUD-9047](https://jira.appcelerator.org/browse/TISTUD-9047) - Appc studio 5.1.0.201803260453 gives "Terminal is not functional" on clicking terminal tab

* [TISTUD-9048](https://jira.appcelerator.org/browse/TISTUD-9048) - Error while packaging an iOS module

* [TISTUD-9053](https://jira.appcelerator.org/browse/TISTUD-9053) - Error during import of sample projects on Windows OS

* [TISTUD-9055](https://jira.appcelerator.org/browse/TISTUD-9055) - Error building iOS module

* [TISTUD-9060](https://jira.appcelerator.org/browse/TISTUD-9060) - Android: Available software sites are not pre populated to select for download JDT tools

* [TISTUD-9075](https://jira.appcelerator.org/browse/TISTUD-9075) - Commenting out code with "command+ / " does not work properly & errors in studio console

* [TISTUD-9093](https://jira.appcelerator.org/browse/TISTUD-9093) - Windows: Studio says it requires Windows 8.1 SDK

* [TISTUD-9097](https://jira.appcelerator.org/browse/TISTUD-9097) - Studio shows the wrong node update

### Breaking changes

* With Appcelerator Studio 5.1.0 release, we have upgraded the Eclipse core from 4.4 to 4.7. This update brings a different directory structure to Studio for MacOS users.

* Due to several internal changes, it is not possible to update from Studio 5.0.0 to 5.1.0. Users are advised to download and install a fresh copy of Studio 5.1.0 installer directly for both Windows and MacOS. Please review [Uninstalling Studio](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Updating_Studio/Uninstalling_Studio/) for removing Studio (as necessary for your setup).

* You are advised to use the existing workspace directory when launching Studio 5.1.0 to get your old studio projects
