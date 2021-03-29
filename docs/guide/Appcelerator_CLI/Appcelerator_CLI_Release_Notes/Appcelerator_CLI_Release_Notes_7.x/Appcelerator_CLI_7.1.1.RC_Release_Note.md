---
title: Appcelerator CLI 7.1.1.RC - 22 August 2019
weight: '10'
---

# Appcelerator CLI 7.1.1.RC - 22 August 2019

Appcelerator CLI 7.1.1.RC is a patch release that includes one improvement and several bug fixes.

As of this GA release, the previous CLI patch release is no longer supported. End of support for this version will be up to 2020-02-22 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](#undefined) documents for details.

## Component versions

The following components are shipped with CLI 7.1.1:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">1.14.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>API Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">3.2.13</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">2.1.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">5.2.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Daemon</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p class="p1">1.1.3</p></td></tr></tbody></table>

## Improvements

* [ALOY-1697](https://jira.appcelerator.org/browse/ALOY-1697) - Add WebView "onlink" callback support

    * added support for setting `onlink` in views

* [CLI-1362](https://jira.appcelerator.org/browse/CLI-1362) - Update to latest acs cli

    * Updated acs to version 2.1.2

## Fixed issues

* [ALOY-1698](https://jira.appcelerator.org/browse/ALOY-1698) - Compile: Errors thrown during sourcemap step are not visible to a user

* [CLI-1355](https://jira.appcelerator.org/browse/CLI-1355) - Android "appc run" will always trigger rebuild if "tiapp.xml" is missing encryption policy property

* [CLI-1359](https://jira.appcelerator.org/browse/CLI-1359) - When commenting out modules in the Tiapp.xml and running a build all modules move to one line

* [CLI-1363](https://jira.appcelerator.org/browse/CLI-1363) - Daemon: Can't detect iOS 13 simulators

* [CLI-1365](https://jira.appcelerator.org/browse/CLI-1365) - Daemon is not shut down when downloading a core via appc use

* [CLI-1366](https://jira.appcelerator.org/browse/CLI-1366) - Studio restarts daemon during the appc use switching
