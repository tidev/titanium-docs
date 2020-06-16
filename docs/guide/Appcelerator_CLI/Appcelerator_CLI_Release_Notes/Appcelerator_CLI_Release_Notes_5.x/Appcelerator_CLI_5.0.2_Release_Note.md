---
title: Appcelerator CLI 5.0.2 - 24 September 2015
weight: '190'
---

# Appcelerator CLI 5.0.2 - 24 September 2015

Appcelerator CLI 5.0.2 is a patch release, addressing high-priority issues from previous releases.

As of this GA release, the previous CLI patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component Versions

The following components are shipped with CLI 5.0.2:

| Name | Version |
| --- | --- |
| **[Alloy](https://github.com/appcelerator/alloy/releases)** | **1.7.10 (update)** |
| Arrow Builder | 1.2.62 |
| **[Arrow Cloud CLI](/guide/AMPLIFY_Runtime_Services/AMPLIFY_Runtime_Services_Release_Notes/)** | **1.0.27 (update)** |
| **[Titanium CLI](https://github.com/appcelerator/titanium/releases)** | **5.0.4 (update)** |

## Fixed Issues

* [CLI-810](https://jira.appcelerator.org/browse/CLI-810): appc run -p ios is forcing rebuild for subsequent runs when there's no changes

* [CLI-814](https://jira.appcelerator.org/browse/CLI-814): Failed to parse titanium config file: TypeError: Cannot read property 'selected' of undefined
