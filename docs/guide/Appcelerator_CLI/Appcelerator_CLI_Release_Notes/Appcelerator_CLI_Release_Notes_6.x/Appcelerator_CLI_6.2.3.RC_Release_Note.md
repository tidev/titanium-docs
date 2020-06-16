---
title: Appcelerator CLI 6.2.3.RC - 27 July 2017
weight: '60'
---

# Appcelerator CLI 6.2.3.RC - 27 July 2017

Appcelerator CLI 6.2.3.RC is a patch release that includes one improvement and three bug fixes.

As of this GA release, the previous CLI patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component versions

The following components are shipped with CLI 6.2.3.RC:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.9.13</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>API Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.5</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.0.14</p></td></tr></tbody></table>

## Improvements

* [CLI-1236](https://jira.appcelerator.org/browse/CLI-1236) - Trim any spaces from auth code entered for two-factor verification

    * Added feature that trims whitespace character from authentication verification

## Fixed issues

* [CLI-1017](https://jira.appcelerator.org/browse/CLI-1017) - An error is returned when packaging after using appc switch

* [CLI-1117](https://jira.appcelerator.org/browse/CLI-1117) - checkSession endpoint is hit twice when building

* [CLI-1205](https://jira.appcelerator.org/browse/CLI-1205) - Support Appc unpublish specific version
