---
title: Appcelerator CLI 5.2.0 - 22 February 2016
weight: '150'
---

# Appcelerator CLI 5.2.0 - 22 February 2016

Appcelerator CLI 5.2.0 is a minor release that includes a few improvements and several bug fixes.

As of this release, CLI 5.1.x will not be supported six months from 5.2.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component Versions

The following components are shipped with CLI 5.2.0:

| Name | Version |
| --- | --- |
| Alloy | 1.7.33 |
| Arrow Builder | 1.7.27 |
| Arrow Cloud CLI | 1.1.0 |
| Titanium CLI | 5.0.6 |

## Improvements

* [CLI-746](https://jira.appcelerator.org/browse/CLI-746) - Add SPDX-compliant license string

    * Users can now use the SPDX "LicenseRef-LICENSE" instead of "Appcelerator Commercial" in the package.json files to avoid the "license should be a valid SPDX license expression" warning.

    * The root also now includes a LICENSE.md file

* [CLI-852](https://jira.appcelerator.org/browse/CLI-852) - appc run can not set port for Arrow apps

    * You can now set the port for Arrow apps by using this command: `appc run --port xxxx`

* [CLI-858](https://jira.appcelerator.org/browse/CLI-858) - Add timestamps to logging output

    * When using `-l trace` or `-l debug`, a timestamp is added to log levels of the output. For example:

        ```
        2015-10-29T08:38:48+00:00 | INFO   | Get the registry...
        ```

* [CLI-934](https://jira.appcelerator.org/browse/CLI-934) - Output warning message if appc-install is less than 4.2.3-2

    * Appc CLI 5.2.0 requires appc-install 4.2.3-2+ to work. If a lesser version is installed, users will see the following error message:

        ```bash
        Appcelerator Command-Line Interface, version 5.2.0-249
        Copyright (c) 2014-2016, Appcelerator, Inc.  All Rights Reserved.

        AppC CLI requires appcelerator@4.2.3 or newer.
        To install the latest version: [sudo] npm install appcelerator -g
        ....
        ```

## Fixed Issues

* [CLI-778](https://jira.appcelerator.org/browse/CLI-778) - Update check from the appcelerator npm does not inform the user of available update

* [CLI-788](https://jira.appcelerator.org/browse/CLI-788) - "use" not listed in help

* [CLI-818](https://jira.appcelerator.org/browse/CLI-818) - If a login is required before switching orgs it shouldn't switch at all

* [CLI-827](https://jira.appcelerator.org/browse/CLI-827) - Only CLI 5.0.2 & NodeJS 0.12.7 give: \[Error: Module did not self-register.\]

* [CLI-881](https://jira.appcelerator.org/browse/CLI-881) - If you create an Arrow project with European character sets, then the next prompt will be "What is the api name?"

* [CLI-882](https://jira.appcelerator.org/browse/CLI-882) - Cannot create an Arrow project with DEBUG=\* and -l trace

* [CLI-885](https://jira.appcelerator.org/browse/CLI-885) - Appc new should be more cautious when unable to read Ti activeSDK value

* [CLI-893](https://jira.appcelerator.org/browse/CLI-893) - CLI fails to find core dependencies, incorrect location.

* [CLI-895](https://jira.appcelerator.org/browse/CLI-895) - CLI should not honor invalid url in proxy settings

* [CLI-918](https://jira.appcelerator.org/browse/CLI-918) - appc run doesn't recognize --project-dir

* [CLI-919](https://jira.appcelerator.org/browse/CLI-919) - Cannot create mobile project from Appc CLI

* [CLI-921](https://jira.appcelerator.org/browse/CLI-921): Appc alloy -v returns error

* [CLI-922](https://jira.appcelerator.org/browse/CLI-922) - -d flag error on appc ti sdk install

* [CLI-925](https://jira.appcelerator.org/browse/CLI-925) - CLI flags are not being honored

* [CLI-926](https://jira.appcelerator.org/browse/CLI-926) - Error during arrow app publishing: unknown option \`--username' with CLI 5.2.0-233

* [CLI-927](https://jira.appcelerator.org/browse/CLI-927) - When installing new SDK, the CLI Does not allow ctrl + c

* [CLI-935](https://jira.appcelerator.org/browse/CLI-935) - "appc command random" results command.opts is not a function error

* [CLI-936](https://jira.appcelerator.org/browse/CLI-936) - If you use "-o json", then text is returned along with the JSON data

* [CLI-940](https://jira.appcelerator.org/browse/CLI-940) - iOS: Unable to package project. 'Undefined is not a function'
