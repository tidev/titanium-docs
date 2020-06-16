---
title: Appcelerator CLI 5.0.4 - 27 October 2015
weight: '170'
---

# Appcelerator CLI 5.0.4 - 27 October 2015

Appcelerator CLI 5.0.4 is a patch release, addressing high-priority issues from previous releases. This release of the Appcelerator CLI includes version 4.2.1 of the NPM package and version 5.0.4 of the Core package.

As of this GA release, the previous CLI patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component Versions

The following components are shipped with CLI 5.0.4:

| Name | Version |
| --- | --- |
| **[Alloy](https://github.com/appcelerator/alloy/releases)** | **1.7.18 (update)** |
| Arrow Builder | 1.2.62 |
| **[Arrow Cloud CL](/guide/AMPLIFY_Runtime_Services/AMPLIFY_Runtime_Services_Release_Notes/)[I](/guide/AMPLIFY_Runtime_Services/AMPLIFY_Runtime_Services_Release_Notes/)** | **1.0.28 (update)** |
| Titanium CLI | 5.0.5 |

## Fixed Issues and Improvements

* [CLI-842](https://jira.appcelerator.org/browse/CLI-842): Improve performance of appc -v command

* [CLI-843](https://jira.appcelerator.org/browse/CLI-843): If you run "appc -v -o json", then Appc CLI NPM will not understand the "-o" flag

* [CLI-844](https://jira.appcelerator.org/browse/CLI-844): If you install a mobile app to device or simulator/emulator, the parent process does not fully terminate if you try to kill it
