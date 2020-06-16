---
title: Appcelerator CLI 7.0.12.GA - 25 June 2019
weight: '10'
---

# Appcelerator CLI 7.0.12.GA - 25 June 2019

Appcelerator CLI 7.0.12.GA is a patch release that includes four bug fixes.

As of this GA release, the previous CLI patch release is no longer supported. End of support for this version will be up to 2019-12-25 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component versions

The following components are shipped with CLI 7.0.12:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">1.13.10</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>API Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">3.2.13</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">2.1.0</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">5.1.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Daemon</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">1.1.3</p></td></tr></tbody></table>

## Fixed issues

* [ALOY-1686](https://jira.appcelerator.org/browse/ALOY-1686) - Alloy: App crashes due to context used when accessing Ti.Database API

* [CLI-1343](https://jira.appcelerator.org/browse/CLI-1343) - Android: Setting "appc-sourcecode-encryption-policy" to "remote" crashes on startup as of 7.3.0

* [CLI-1356](https://jira.appcelerator.org/browse/CLI-1356?src=confmacro) - Compiling platform native modules contains more packages than necessary

* [CLI-1357](https://jira.appcelerator.org/browse/CLI-1357?src=confmacro) - updating CLI to 7.0.12-70X.5, Studio throwing "Update iOS info" error on launching
