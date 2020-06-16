---
title: Appcelerator CLI 5.2.1 - 24 March 2016
weight: '130'
---

# Appcelerator CLI 5.2.1 - 24 March 2016

Appcelerator CLI 5.2.1 is a patch release that includes a few improvements and several bug fixes.

As of this GA release, the previous CLI patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component Versions

The following components are shipped with CLI 5.2.1:

| Name | Version |
| --- | --- |
| Alloy | 1.8.2 |
| Arrow Builder | 1.7.29 |
| Arrow Cloud CLI | 1.2.0 |
| Titanium CLI | 5.0.6 |

## Fixed Issues

* [CLI-928](https://jira.appcelerator.org/browse/CLI-928) - 9.2.1 iPhone crashes when jailbreak-detect is enabled

* [CLI-943](https://jira.appcelerator.org/browse/CLI-943) - Core 5.2.0 displays incorrect/confusing warning if NPM is still < 4.2.3

* [CLI-949](https://jira.appcelerator.org/browse/CLI-949) - Windows: config files are written to different drive than process.env.HOME

* [CLI-950](https://jira.appcelerator.org/browse/CLI-950) - Process doesn't cleanup children in certain scenarios

* [CLI-957](https://jira.appcelerator.org/browse/CLI-957) - Unable to build modules from Appc CLI

* [CLI-967](https://jira.appcelerator.org/browse/CLI-967) - iOS: Arguments to path.join must be strings

* [CLI-973](https://jira.appcelerator.org/browse/CLI-973) - Update Alloy version to 1.8.0

## Improvements

CLI 5.2.1 now supports the creation of test applications without the need to create a classic project ([CLI-687](https://jira.appcelerator.org/browse/CLI-687)). You can now use the `--testapp` flag with `appc new` to do the same thing in one step. Previously, you had to run the following steps:

```bash
appc new -t titanium --classic -i com.appc.picker -n AlloyPicker
cd AlloyPicker
appc alloy new --testapp ui/picker
```

With this version, you can use this one command:

```bash
appc new -t titanium -i com.appc.picker -n AlloyPicker --testapp ui/picker
```
