---
title: Contributing to Open Source Titanium Modules
weight: '40'
---

# Contributing to Open Source Titanium Modules

**Contents**

## Overview

This guide describes how to contribute to Titanium open source modules.

## Signing the Contributors License Agreement (CLA)

Since Appcelerator itself is both an open source project and also a Company that is in charge of its long-term development, we require that you sign a standard Open Source Contributors License Agreement (CLA). As with most open source projects, legal issues regarding intellectual property rights require us to protect ourselves, our contributors and our users from any future ownership claims from third-parties.

Thus, you must first electronically sign the [CLA](http://developer.appcelerator.com/cla) before you can contribute code, documentation or any other materials to the project.

## Create a Ticket

If you are having an issue with an open source module, please please create a ticket in that module's repository issue tracker (https://github.com/tidev/PROJECT/issues). Even if you are going to fix the issue yourself and submit a pull request, it is important to have a ticket so we can track the issue. When creating a ticket, be sure to add sample code and instructions that can be used to reproduce the issue.

## Submitting Contributions

The process for contributing to open source modules is the same as contributing code to Titanium Mobile, but instead of the titanium\_mobile repo you will be working with the [titanium\_modules](https://github.com/appcelerator/titanium_modules) repo. Please refer to the [Pull Request Guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Pull_Request_Guide/) for guidance.

### Versioning

Versions will follow [standard OSGI naming](http://www.osgi.org/wiki/uploads/Links/SemanticVersioning.pdf) with a numberic "dot" format: `<major>.<minor>.<patch>`.

### Checklist

When submitting a fix:

* Include the ticket number and module name in each commit message

    ```
    [MOD-1268] UrbanAirship: open sourcing
    ```

* Increment the version of the module.

* Add an entry to the changelog and include the ticket number.

* Add the appropriate attributions to "ATTRIBUTIONS.md" for any third party code or libraries used.

* Include the new built zip of the module in the pull request.

* Add a comment to the associated ticket with the pull request URL.

    ```
    PR: https://github.com/appcelerator/titanium_modules/pull/0
    ```
