---
title: Appcelerator CLI 5.1.0 - 20 November 2015
weight: '160'
---

# Appcelerator CLI 5.1.0 - 20 November 2015

Appcelerator CLI 5.1.0 is a minor release that includes improvements and bug fixes.

As of this release, CLI 5.0.x will not be supported six months from 5.1.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Component Versions

The following components are shipped with CLI 5.1.0:

| Name | Version |
| --- | --- |
| Alloy | 1.7.26 |
| **[Arrow Builder](/guide/Axway_API_Builder/API_Builder/API_Builder_Release_Notes/)** | **1.3.22** |
| Arrow Cloud CLI | 1.0.31 |
| Titanium CLI | 5.0.5 |

## Fixed Issues and Improvements

* [CLI-615](https://jira.appcelerator.org/browse/CLI-615): Unable to run 'appc setup' on io.js

* [CLI-616](https://jira.appcelerator.org/browse/CLI-616): Building to android with SDK 3.5.1.GA fails when using appc cli 0.2.280

* [CLI-691](https://jira.appcelerator.org/browse/CLI-691): Using invalid connector on appc install returns error

* [CLI-728](https://jira.appcelerator.org/browse/CLI-728): Appc info should not require login

* [CLI-740](https://jira.appcelerator.org/browse/CLI-740): Remove unnecessary secondary call to retrieve user information

* [CLI-817](https://jira.appcelerator.org/browse/CLI-817): Update alloy hook file in the project before invoking alloy build

* [CLI-825](https://jira.appcelerator.org/browse/CLI-825): Publishing a stable version of appc-cli doesn't tag it as latest

* [CLI-828](https://jira.appcelerator.org/browse/CLI-828): Add "bugs" URL to package.json

* [CLI-832](https://jira.appcelerator.org/browse/CLI-832): Add additional logging for Arrow cloud login calls

* [CLI-838](https://jira.appcelerator.org/browse/CLI-838): Cannot login to prod; body parameters error

* [CLI-856](https://jira.appcelerator.org/browse/CLI-856): In Appc CLI, if you create a project with European character sets, then the CLI prompt will not accept them

* [CLI-865](https://jira.appcelerator.org/browse/CLI-865): If incorrect credentials are input on login then the CLI will error with 'The registry server is currently unavailable'

* [CLI-869](https://jira.appcelerator.org/browse/CLI-869): In preprod, you cannot import a mobile project with a non-platform guide
