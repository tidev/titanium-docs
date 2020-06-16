---
title: Appcelerator CLI Release Notes
weight: '40'
---

# Appcelerator CLI Release Notes

## Appcelerator CLI 8.0.0.GA - 18 March 2020

Appcelerator CLI 8.0.0.GA is a major release that includes improvements, and bug fixes.

With this release of the Appcelerator CLI, Node.js versions older than 10.13.0 are no longer supported. We also recommend updating to Studio 6.0.0

### Component versions

The following components are shipped with CLI 8.0.0:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.14.5</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.1.3</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.2.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Daemon</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>3.1.0</p></td></tr></tbody></table>

::: danger ❗️ Warning
Appcelerator CLI 8 removes API Builder from distribution. For information on migrating to API Builder v4 please see [https://docs.axway.com/bundle/API\_Builder\_4x\_allOS\_en/page/api\_builder\_v3\_to\_v4\_upgrade\_guide.html](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_v3_to_v4_upgrade_guide.html)
:::

### Improvements

* [CLI-1376](https://jira.appcelerator.org/browse/CLI-1376) - Update to Appc Daemon 3

* [CLI-1383](https://jira.appcelerator.org/browse/CLI-1383) - Update to cloud CLI 2.1.3

    * The package.json `scripts.start` property will now be preferred over the `main` property when publishing to ARS

* [CLI-1065](https://jira.appcelerator.org/browse/CLI-1065) - Improve socket prompt communication and error for `appc login`

### Fixed issues

* [CLI-1381](https://jira.appcelerator.org/browse/CLI-1381) - ACA module not being added to tiapp when creating a new application

* [CLI-1295](https://jira.appcelerator.org/browse/CLI-1295) - `Application not registered error` when building a Titanium application not registered with the platform

* [ALOY-1721](https://jira.appcelerator.org/browse/ALOY-1721) - `Alloy` global variable no longer accessible in styles

### BREAKING CHANGES

* [CLI-1385](https://jira.appcelerator.org/browse/CLI-1385) - Remove API Builder

## Recent Releases

* [Appcelerator CLI Release Notes 7.0.x](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_Release_Notes_7.0.x/)

* [Appcelerator CLI 7.1.2.RC Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.2.RC_Release_Note/)

* [Appcelerator CLI 7.1.2.GA Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.2.GA_Release_Note/)

* [Appcelerator CLI 7.1.1.RC Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.1.RC_Release_Note/)

* [Appcelerator CLI 7.1.1.GA Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.1.GA_Release_Note/)

* [Appcelerator CLI 7.1.0.RC Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.0.RC_Release_Note/)

* [Appcelerator CLI 7.1.0.GA Release Note](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/Appcelerator_CLI_Release_Notes_7.x/Appcelerator_CLI_7.1.0.GA_Release_Note/)
