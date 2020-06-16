---
title: Appcelerator CLI 7.0.3.GA - 2 May 2018
weight: '180'
---

# Appcelerator CLI 7.0.3.GA - 2 May 2018

Appcelerator CLI 7.0.3.GA is a minor release that includes several bug fixes.

As of this GA release, the previous CLI patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component versions

The following components are shipped with CLI 7.0.3:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.12.0</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>API Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>3.0.0</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.8</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.1.0</p></td></tr></tbody></table>

## Improvements

* [ALOY-1602](https://jira.appcelerator.org/browse/ALOY-1602) - Avoid some global variables to be only available in parent controller

    * Implemented some global variables to be only available in parent controller

* [ALOY-1603](https://jira.appcelerator.org/browse/ALOY-1603) - Update Moment.js to version 2.21.0

    * Updated Moment.js from version 2.16.0 to version 2.20.1

* [ALOY-1609](https://jira.appcelerator.org/browse/ALOY-1609) - Add alloy.js plugin file to .gitignore

    * Added `alloy.js` file to `.gitignore`

## Fixed issues

* [ALOY-1595](https://jira.appcelerator.org/browse/ALOY-1595) - alloy compile broken on node 9.3.0

* [ALOY-1599](https://jira.appcelerator.org/browse/ALOY-1599) - ALLOY: Model Data binding problem with the first upper case in the model src

* [ALOY-1606](https://jira.appcelerator.org/browse/ALOY-1606) - Android: Debugger not hitting breakpoints on Windows

* [ALOY-1607](https://jira.appcelerator.org/browse/ALOY-1607) - Latest underscore version is breaking removeListener method in BaseController.js

* [CLI-737](https://jira.appcelerator.org/browse/CLI-737) - Files are encrypted on first build when building with development deploy type

* [CLI-997](https://jira.appcelerator.org/browse/CLI-997) - "appc ti config -r <key>" does not remove the key but instead asks for login

* [CLI-1302](https://jira.appcelerator.org/browse/CLI-1302) - Error After Add Jailbreak Related Properties

* [CLI-1304](https://jira.appcelerator.org/browse/CLI-1304) - Android: Adding property encryption policy remote fails the build with java compile error

* [CLI-1305](https://jira.appcelerator.org/browse/CLI-1305) - Error thrown when an uncaughtException is thrown by the CLI process

* [CLI-1308](https://jira.appcelerator.org/browse/CLI-1308) - 'appc use' offline doesn't show installed versions

* [CLI-1309](https://jira.appcelerator.org/browse/CLI-1309) - Include titanium@5.1.0 for CLI is unable to recognise JDK 9 fix

* [CLI-1310](https://jira.appcelerator.org/browse/CLI-1310) - "appc login" no longer shows account lockout info after multiple failed logins

* [CLI-1311](https://jira.appcelerator.org/browse/CLI-1311) - Android: Fix/update soasta make app touch testable to work with java 9/10

* [CLI-1312](https://jira.appcelerator.org/browse/CLI-1312) - Can't start appc daemon with 7.0.3-master.36
