---
title: Appcelerator CLI 6.2.4.RC - 30 August 2017
weight: '40'
---

# Appcelerator CLI 6.2.4.RC - 30 August 2017

Appcelerator CLI 6.2.4.RC is a patch release that includes new features, improvements, and bug fixes.

As of this GA release, the previous CLI patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component versions

The following components are shipped with CLI 6.2.4.RC:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Arrow Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.0.5</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.0.14</p></td></tr></tbody></table>

## Improvements

* [CLI-785](https://jira.appcelerator.org/browse/CLI-785) - Prompts/Options for creating WatchOS2 project are confusing when not ran in project dir

    * When creating an Watch project, the `appc new -t applewatch` command now asked where the Titanium project directory is and what the WatchOS project name if this command is executed outside the project directory

* [CLI-791](https://jira.appcelerator.org/browse/CLI-791) - If login is needed it should end with a message before continuing with original command

    * When logging in via the CLI, it now displays a message that you have successfully logged in

* [CLI-1229](https://jira.appcelerator.org/browse/CLI-1229) - Rename appc new options

    * Renamed several `appc new` options as part of our product rebranding effort

        | Old option | New option |
        | --- | --- |
        | `Native app (app)` | `Titanium App` |
        | `Arrow app (arrow)` | API Builder Ap |
        | `Titanium Module (timodule)` | `Titanium Module` |
        | Apple Watch™ App | `Apple Watch™ App` |

* [CLI-1230](https://jira.appcelerator.org/browse/CLI-1230) - Update create arrow app command

    * Replaced the "Arrow" name with the `appc new -t` command as part of our product rebranding effort

    * Old usage: `appc new -t arrow`

    * New usage: `appc new -t api`

## Fixed issues

* [CLI-839](https://jira.appcelerator.org/browse/CLI-839) - Switch org: Error thrown when logging into org that user is currently logged in to

* [CLI-1021](https://jira.appcelerator.org/browse/CLI-1021) - "appc user remove" returns "invalid action" error

* [CLI-1058](https://jira.appcelerator.org/browse/CLI-1058) - --port command line option for Arrow not shown in help screen

* [CLI-1241](https://jira.appcelerator.org/browse/CLI-1241) - appc login --host option is not recognized

* [CLI-1249](https://jira.appcelerator.org/browse/CLI-1249) - Windows CLI: Hyperloop not added during project creation
