---
title: Appcelerator CLI Release Notes
weight: '40'
---

# Appcelerator CLI Release Notes

## Appcelerator CLI 8.1.0 GA - 25 August 2020

Appcelerator CLI 8.1.0 GA is a minor release that includes new features, improvements, and bug fixes.

### Component versions

The following components are shipped with CLI 8.1.0:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.15.1</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.1.8</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.2.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Daemon</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>3.2.0</p></td></tr></tbody></table>

### New Features

* [ALOY-1732](https://jira.appcelerator.org/browse/ALOY-1732) - Add ability to run in the background without UI

    * This change is dependent on the to be released Titanium SDK ticket [TIMOB-27896](https://jira.appcelerator.org/browse/TIMOB-27896) and is shipping ahead of time to make upgrades to that version smoother

### Improvements

* [ALOY-1253](https://jira.appcelerator.org/browse/ALOY-1253) - Alloy: Support WPATH in widget XML view attribute values

* [ALOY-1733](https://jira.appcelerator.org/browse/ALOY-1733) - Add templates for webpack usage

* [ALOY-1735](https://jira.appcelerator.org/browse/ALOY-1735) - Add vscode settings file to projects

* [CLI-1391](https://jira.appcelerator.org/browse/CLI-1391) - Allow specifying Native Module templates

    * Module templates will now be prompted for when creating a module. You can also specify them by using the `--android-code-base` and the `--ios-code-base` options

* [CLI-1392](https://jira.appcelerator.org/browse/CLI-1392) - Improve handling of no MBaaS entitlement

* [CLI-1393](https://jira.appcelerator.org/browse/CLI-1393) - Allow passing template option through when creating a classic application

    * The `--template` option will now be respected when creating an application with the `--classic` flag

* [CLI-1395](https://jira.appcelerator.org/browse/CLI-1395) - Upgrade to acs 2.1.8

### Fixed issues

* [ALOY-1256](https://jira.appcelerator.org/browse/ALOY-1256) - Widget/Require as top-level element uses controller as view

* [ALOY-1720](https://jira.appcelerator.org/browse/ALOY-1720) - Version string comparison will break for SDK 10.0.0

* [ALOY-1734](https://jira.appcelerator.org/browse/ALOY-1734) - JS files imported in "alloy.js" don't have access to Alloy globals as of Titanium 9.0.0

* [ALOY-1736](https://jira.appcelerator.org/browse/ALOY-1736) - aloy new fails if dev dependencies do not exist in package.Json

## Recent Releases

* [Appcelerator CLI 7.1.2.RC Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.2.RC_Release_Note/)

* [Appcelerator CLI 7.1.2.GA Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.2.GA_Release_Note/)

* [Appcelerator CLI 7.1.1.RC Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.1.RC_Release_Note/)

* [Appcelerator CLI 7.1.1.GA Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.1.GA_Release_Note/)

* [Appcelerator CLI 7.1.0.RC Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.0.RC_Release_Note/)

* [Appcelerator CLI 7.1.0.GA Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.0.GA_Release_Note/)
