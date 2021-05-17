---
title: Appcelerator CLI Release Notes
weight: '40'
---

# Appcelerator CLI Release Notes

## Appcelerator CLI 9.0.0 GA - 17 May 2021

Appcelerator CLI 9.0.0 GA is a major release that includes new features, improvements, and bug fixes.

Appcelerator CLI will no longer be supported after March 2022.

::: danger ❗️ Warning
Appcelerator CLI 9 removes support for Node.js versions older than 12.13.0.
:::

### Component versions

The following components are shipped with CLI 9.0.0:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.16.0</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.1.10</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.3.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Daemon</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>4.0.4</p></td></tr></tbody></table>

### New Features

* [ALOY-1746](https://jira.appcelerator.org/browse/ALOY-1746) - Support Ti.UI.OptionBar as a tag

* [CLI-1402](https://jira.appcelerator.org/browse/CLI-1402) - Update to Daemon v4

* [CLI-1400](https://jira.appcelerator.org/browse/CLI-1400) - Update to acs CLI 2.1.10

### Improvements

* [CLI-1406](https://jira.appcelerator.org/browse/CLI-1406) - Disable Daemon update check when running appcd commands

* [CLI-1401](https://jira.appcelerator.org/browse/CLI-1401) - Support Node.js 14 and 15

* [ALOY-1744](https://jira.appcelerator.org/browse/ALOY-1744) - Allow TabGroup as a child of a NavigationWindow

* [ALOY-1741](https://jira.appcelerator.org/browse/ALOY-1741) - Remove iOS splash screens from Alloy template

### Fixed issues

* [CLI-1409](https://jira.appcelerator.org/browse/CLI-1409) - "Resource Not Found" error when building an app that is not registered with the platform

* [CLI-1408](https://jira.appcelerator.org/browse/CLI-1408) - Daemon process is stopped when recompiling native modules for a Node.js version change

* [CLI-1405](https://jira.appcelerator.org/browse/CLI-1405) - TypeError when running appc appcd

* [CLI-1404](https://jira.appcelerator.org/browse/CLI-1404) - "This app is not provisioned for crash analytics." error when adding ACA to an application and performing a device or distribution build

* [ALOY-1743](https://jira.appcelerator.org/browse/ALOY-1743) - Runtime error when a Widget includes another Widget at the top level

* [DAEMON-342](https://jira.appcelerator.org/browse/DAEMON-342) - No watchOS simulators shown in Studio

## Recent Releases

* [Appcelerator CLI 9.0.0 RC Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_9.x/Appcelerator_CLI_9.0.0_RC_Release_Note/)

* [Appcelerator CLI 9.0.0 GA Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_9.x/Appcelerator_CLI_9.0.0_GA_Release_Note/)
