---
title: Appcelerator CLI 6.2.0.GA - 13 April 2017
weight: '90'
---

# Appcelerator CLI 6.2.0.GA - 13 April 2017

Appcelerator CLI 6.2.0.GA is a minor release that includes seven bug fixes.

As of this release, CLI 6.1.x will not be supported six months from 6.2.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component versions

The following components are shipped with CLI 6.2.0.GA:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.9.11</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.3</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.4</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.0.12</p></td></tr></tbody></table>

## Fixed issues

* [CLI-1031](https://jira.appcelerator.org/browse/CLI-1031) - Windows: Node process is not killed when you use ctrl+c

* [CLI-1107](https://jira.appcelerator.org/browse/CLI-1107) - deprecated minimatch. Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue

* [CLI-1166](https://jira.appcelerator.org/browse/CLI-1166) - Correct NSP errors in appc-cli-titanium

* [CLI-1169](https://jira.appcelerator.org/browse/CLI-1169) - TypeError: Data must be a string or a buffer thrown when running commands if sid is undefined in config

* [CLI-1171](https://jira.appcelerator.org/browse/CLI-1171) - cannot find module session

* [CLI-1173](https://jira.appcelerator.org/browse/CLI-1173) - Error: Error attempting to login to Arrow Cloud

* [CLI-1174](https://jira.appcelerator.org/browse/CLI-1174) - Bad reference to session lib in install plugin
