---
title: Appcelerator CLI 8.1.1 GA  - 15 September 2020
weight: '50'
---

# Appcelerator CLI 8.1.1 GA - 15 September 2020

Appcelerator CLI 8.1.1 GA is a patch release that includes bug fixes.

## Component versions

The following components are shipped with CLI 8.1.1:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.15.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.1.8</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.2.4</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Daemon</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>3.2.0</p></td></tr></tbody></table>

## Fixed issues

* [ALOY-1738](https://jira.appcelerator.org/browse/ALOY-1738) - Regression in behaviour of the Require XML tag

* [ALOY-1737](https://jira.appcelerator.org/browse/ALOY-1737) - Alloy: ListView dataBinding creates deprecated setItems call
    [CLI-1394](https://jira.appcelerator.org/browse/CLI-1394) - Duplicate symbol error when using Appc Source Code Encryption

    * Fixes a potential symbol clash between appc-verify and some modules, this fix is available for use in SDK 9.2.0 and above, and also SDK 9.1.0 and below

* [CLI-1396](https://jira.appcelerator.org/browse/CLI-1396) - Always prompted for iOS code base on module creation even if set

* [CLI-1397](https://jira.appcelerator.org/browse/CLI-1397) - Update appc-verify to be built as an xcframework

    * Adds SDK 9.2.0 compatability to appc-verify which is used for Appc Source Code Encryption

* [CLI-1398](https://jira.appcelerator.org/browse/CLI-1398) \- Update to Titanium CLI 5.2.4

    * This fixes an issue where symlinks were not preserved when installing Titanium
