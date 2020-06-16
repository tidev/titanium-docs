---
title: Appcelerator CLI 5.3.0.RC - 28 April 2016
weight: '110'
---

# Appcelerator CLI 5.3.0.RC - 28 April 2016

Appcelerator CLI 5.3.0.RC is a minor release that includes several bug fixes.

As of this release, CLI 5.2.x will not be supported six months from 5.3.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component Versions

The following components are shipped with CLI 5.3.0:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.8.7</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.7.31</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.2.0</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.0.8</p></td></tr></tbody></table>

## New Features

* [CLI-664](https://jira.appcelerator.org/browse/CLI-664) - Installr App plugin hook

    * App Preview has been integrated with the CLI

## Fixed Issues

* [CLI-955](https://jira.appcelerator.org/browse/CLI-955) - CLI should not tell a user to install a pre-release CLI as an update from a GA version

* [CLI-978](https://jira.appcelerator.org/browse/CLI-978) - Appc config get <key> always returns null

* [CLI-987](https://jira.appcelerator.org/browse/CLI-987) - Appcelerator Login not triggered when login is required on production build

* [CLI-1000](https://jira.appcelerator.org/browse/CLI-1000) - Uploading app to app preview progress bar is seen multiple times in the studio console

## Improvements

* [CLI-963](https://jira.appcelerator.org/browse/CLI-963) - CLI: enable template options when creating Alloy project

    * Added feature that allows for creating two\_tabbed Alloy project from CLI
