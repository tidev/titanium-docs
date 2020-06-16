---
title: Appcelerator CLI 4.0.2 - 11 June 2015
weight: '50'
---

# Appcelerator CLI 4.0.2 - 11 June 2015

Appcelerator CLI 4.0.2 is a patch release, addressing high-priority issues from previous releases. This release of the Appcelerator CLI includes version 4.0.1 of the NPM package and version 4.0.2 of the Core package.

## Component Versions

The following components are shipped with CLI 4.0.2:

| Name | Version |
| --- | --- |
| **[Alloy](https://github.com/appcelerator/alloy/blob/1_6_X/CHANGELOG.md)** | **1.6.2 (update)** |
| **[Arrow Builder](/guide/Axway_API_Builder/API_Builder/API_Builder_Release_Notes/)** | **0.4.3 (update)** |
| Arrow Cloud CLI | 1.0.24 |
| **[Titanium CLI](https://github.com/appcelerator/titanium/blob/4_0_X/CHANGELOG.md)** | **4.0.1 (update)** |

## Fixed Issues

* [CLI-531](https://jira.appcelerator.org/browse/CLI-531): appc unpublish should support "--project-dir"

* [CLI-536](https://jira.appcelerator.org/browse/CLI-536): When passing in --org-id to certain commands when logged out I still am prompted to select an org

* [CLI-571](https://jira.appcelerator.org/browse/CLI-571): appc ti -v returns Appc CLI version

* [CLI-606](https://jira.appcelerator.org/browse/CLI-606): appc -v should show both the NPM and active version

* [CLI-610](https://jira.appcelerator.org/browse/CLI-610): Device authorization code is referred to with two different terms when authorizing hardware

* [CLI-643](https://jira.appcelerator.org/browse/CLI-643): appc ti -v should not print out a banner

* [CLI-649](https://jira.appcelerator.org/browse/CLI-649): Android build tool warning directs user to run "ti config"

* [CLI-673](https://jira.appcelerator.org/browse/CLI-673): Older Alloy projects fail to build due to an outdated alloy.js in plugins

* [CLI-680](https://jira.appcelerator.org/browse/CLI-680): Set proxy details without downloading CLI core package

* [CLI-682](https://jira.appcelerator.org/browse/CLI-682): Running appc ti commands fail with Error: Cannot find module './commands/config'

* [CLI-683](https://jira.appcelerator.org/browse/CLI-683): Appc commands fail with no return output

* [CLI-692](https://jira.appcelerator.org/browse/CLI-692): Directory permission error
