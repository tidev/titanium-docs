---
title: Appcelerator CLI 5.0.0 - 16 September 2015
weight: '210'
---

# Appcelerator CLI 5.0.0 - 16 September 2015

Appcelerator CLI 5.0.0 is a major release, introducing new features, improvements and bug fixes. This release of the Appcelerator CLI includes version 4.2.0 of the NPM package and version 5.0.0 of the Core package.

As of this release, CLI 4.x will not be supported one calendar year from 5.0.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component Versions

The following components are shipped with CLI 5.0.0:

| Name | Version |
| --- | --- |
| **[Alloy](https://github.com/appcelerator/alloy/releases)** | **1.7.8 (update)** |
| Arrow Builder | 1.2.48 |
| Arrow Cloud CLI | 1.0.26 |
| **[Titanium CLI](https://github.com/appcelerator/titanium/releases)** | **5.0.3 (update)** |

## New Features

* Support to create, build, run and package watchOS applications

* New `appc info` command to display development environment information

* New `appc switch org` command to switch between organizations without logging in and out of the CLI

## Fixed Issues

* [CLI-624](https://jira.appcelerator.org/browse/CLI-624): Platform-SDK: Logout request is incorrect

* [CLI-648](https://jira.appcelerator.org/browse/CLI-648): appc setup continues to show latest Ti SDK installed even after it has been deleted

* [CLI-708](https://jira.appcelerator.org/browse/CLI-708): Login token flag is not removed

* [CLI-731](https://jira.appcelerator.org/browse/CLI-731): Error when publishing app

* [CLI-747](https://jira.appcelerator.org/browse/CLI-747): Node processes are getting orphaned in certain cases

* [CLI-749](https://jira.appcelerator.org/browse/CLI-749): If you do "appc ti sdk select <SDK\_VERSION>", a "Failed to run command sdk" error message will appear

* [CLI-755](https://jira.appcelerator.org/browse/CLI-755): Cannot run appc commands with CLI 4.2.0-5+

* [CLI-756](https://jira.appcelerator.org/browse/CLI-756): When you create an Apple Watch app, ® trademark appears after Apple

* [CLI-774](https://jira.appcelerator.org/browse/CLI-774): Support for WatchOS2 project in appc

* [CLI-760](https://jira.appcelerator.org/browse/CLI-760): Project creation prompts for App ID; --id not supported

* [CLI-768](https://jira.appcelerator.org/browse/CLI-768): Alloy app fails to build on window's with error "Alloy compiler failed"

* [CLI-786](https://jira.appcelerator.org/browse/CLI-786): Creating an Apple WatchOS2 app crashes if selected SDK is pre-5.0

* [CLI-792](https://jira.appcelerator.org/browse/CLI-792): Regression running project

* [CLI-809](https://jira.appcelerator.org/browse/CLI-809): Cannot create Apple Watch App from Appc CLI
