---
title: Appcelerator CLI 7.0.6.GA - 30 August 2018
weight: '120'
---

# Appcelerator CLI 7.0.6.GA - 30 August 2018

Appcelerator CLI 7.0.6 is a patch release that includes one improvement and two bug fixes.

As of this GA release, the previous CLI patch release is no longer supported. End of support for this version will be up to 2019-03-02 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component versions

The following components are shipped with CLI 7.0.6:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.13.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>API Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>3.0.0</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.10</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.1.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Daemon</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.1.3</p></td></tr></tbody></table>

## Improvements

* [ALOY-1625](https://jira.appcelerator.org/browse/ALOY-1625) - Reduce splash screen image sizes

    * Reduced splash screen image sizes

        * iOS: ~53%

        * Android: ~72%

* [CLI-1048](https://jira.appcelerator.org/browse/CLI-1048) - appc switch and appc login org selection should be consistent

    * Made login and switching organization selection consistent

## Fixed issues

* [CLI-1322](https://jira.appcelerator.org/browse/CLI-1322) - appc ti clean errors if globally set sdk differs from the one configured in tiapp.xml

* [CLI-1324](https://jira.appcelerator.org/browse/CLI-1324) - Windows Unable to install latest version of the CLI (7.0.6-master.5)
