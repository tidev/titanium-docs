---
title: Studio 4.4.0 - 19 November 2015
weight: '180'
---

# Studio 4.4.0 - 19 November 2015

Studio 4.4.0 is a minor release that includes new features, improvements, and bug fixes. See the [full list of issues address in Release 4.4.0](https://jira.appcelerator.org/issues/?filter=17008).

As of this release, Studio 4.3.x will not be supported six months from 4.4.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New Features and Improvements

* You can set environment variable for all commands going to CLI before invocation.

* For the Package on Android App Store, the SDK version drop-down list has been removed. Best practices for Android specify that you should use the latest API tools available, setting compatibility targets with your tiapp.xml. For this reason, as of version 3.2, the CLI uses the newest version of the Android SDK installed.

* Studio login now has an option to remember your username.

* Consolidated Titanium and Titanium360 users.

* Updated [go.appcelerator.com](http://go.appcelerator.com) with the new Node.js version (4.2.2).

* Appcelerator Studio Windows Installer now installs NodeJS 4.2.2 on a clean machine.

## Fixed Issues

* [TISTUD-7431](https://jira.appcelerator.org/browse/TISTUD-7431): "user profile" link in "New Mobile App Project" wizard directs to wrong URL when signed out on studio dashboard

* [TISTUD-7620](https://jira.appcelerator.org/browse/TISTUD-7620): Studio account session expires in 24h

* [TISTUD-7712](https://jira.appcelerator.org/browse/TISTUD-7712): After you terminate a build process and close Studio, orphaned node processes will linger

* [TISTUD-7762](https://jira.appcelerator.org/browse/TISTUD-7762): Studio unable to update if OSX (El Capitan) logon using iCloud Account

* [TISTUD-7799](https://jira.appcelerator.org/browse/TISTUD-7799): Error connecting to profiler and debugger: Error Domain=NSPOSIXErrorDomain Code=2 "No such file or directory"

* [TISTUD-7804](https://jira.appcelerator.org/browse/TISTUD-7804): Cannot open Studio after clean install

* [TISTUD-7485](https://jira.appcelerator.org/browse/TISTUD-7485): Studio logged in user name shows wrong in status bar

* [TISTUD-7743](https://jira.appcelerator.org/browse/TISTUD-7743): Studio hangs in Verifying state during startup

* [TISTUD-7750](https://jira.appcelerator.org/browse/TISTUD-7750): LiveView does not work on incremental builds: Failed to copy app to device

* [TISTUD-7779](https://jira.appcelerator.org/browse/TISTUD-7779): If you have Node 0.10.X installed, you cannot log into Studio 4.4.0

* [TISTUD-7783](https://jira.appcelerator.org/browse/TISTUD-7783): When you create new project, the App Id field and URL field are in the reverse order

* [TISTUD-7784](https://jira.appcelerator.org/browse/TISTUD-7784): Clicking on publish for android packaging opens android studio preferences window

* [TISTUD-7867](https://jira.appcelerator.org/browse/TISTUD-7867): Node is not correctly installed by 4.4.0 windows installer on a win machine with no node

* [TISTUD-6655](https://jira.appcelerator.org/browse/TISTUD-6655): Breakpoints disappear after formatting controller file

* [TISTUD-7781](https://jira.appcelerator.org/browse/TISTUD-7781): "Unable to locate the CLI executable.." error during the studio startup

* [TISTUD-7787](https://jira.appcelerator.org/browse/TISTUD-7787): ArrayIndexOutOfBoundsException during launch of app in Android emulator

* [TISTUD-7562](https://jira.appcelerator.org/browse/TISTUD-7562): For limited plan billing is not opened via wizard
