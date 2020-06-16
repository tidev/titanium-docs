---
title: Appcelerator CLI 6.2.2.GA - 24 May 2017
weight: '70'
---

# Appcelerator CLI 6.2.2.GA - 24 May 2017

Appcelerator CLI 6.2.2.GA is a patch release that includes two bug fixes.

As of this GA release, the previous CLI patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component versions

The following components are shipped with CLI 6.2.2:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><span style="color: #183691;">1.9.11</span></p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><span style="color: #183691;">2.0.5</span></p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><span style="color: #183691;">5.0.14</span></p></td></tr></tbody></table>

## Fixed issues

* [CLI-969](https://jira.appcelerator.org/browse/CLI-969) - If you install Appc CLI Core >= 5.2.1-3, then a corrupted appcelerator tgz will appear in the package folder

* [CLI-1208](https://jira.appcelerator.org/browse/CLI-1208) - appc run removes last arg
