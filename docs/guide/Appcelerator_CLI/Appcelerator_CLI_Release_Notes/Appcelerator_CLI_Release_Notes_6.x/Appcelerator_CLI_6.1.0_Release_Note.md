---
title: Appcelerator CLI 6.1.0 - 13 December 2016
weight: '100'
---

# Appcelerator CLI 6.1.0 - 13 December 2016

Appcelerator CLI 6.1.0 is a minor release that includes one new feature and one bug fix.

As of this release, CLI 6.0.x will not be supported six months from 6.1.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component versions

The following components are shipped with CLI 6.1.0:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.9.5</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.10.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.2.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.0.11</p></td></tr></tbody></table>

## New features

* [CLI-1075](https://jira.appcelerator.org/browse/CLI-1075) - Unable to configure which IP should the LiveView use

    * Added feature that allows users to configure which IP LiveView uses

    * This features introduces --liveview-ip, --liveview-fport and --liveview-eport flags

## Improvements

## Fixed issues

* [CLI-1140](https://jira.appcelerator.org/browse/CLI-1140) - Arrow app crashes with Uncaught Exception Cannot find module './ReactHostOperationHistoryHook'
