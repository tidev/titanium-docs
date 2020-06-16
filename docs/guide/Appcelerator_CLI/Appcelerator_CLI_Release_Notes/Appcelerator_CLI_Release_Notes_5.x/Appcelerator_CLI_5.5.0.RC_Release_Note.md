---
title: Appcelerator CLI 5.5.0.RC - 31 August 2016
weight: '30'
---

# Appcelerator CLI 5.5.0.RC - 31 August 2016

Appcelerator CLI 5.5.0.RC is a minor release that includes new features, improvements, and bug fixes.

As of this release, CLI 5.4.x will not be supported six months from 5.5.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component Versions

The following components are shipped with CLI 5.5.0.RC:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.9.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.8.4</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.2.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.0.9</p></td></tr></tbody></table>

## Fixed Issues

* [CLI-1070](https://jira.appcelerator.org/browse/CLI-1070) - If you use node 0.12.X, then you'll be unable to download the Hyperloop module through 'appc new'

* [CLI-1079](https://jira.appcelerator.org/browse/CLI-1079) - Modules and plugins are not overwritten if the files already exist
