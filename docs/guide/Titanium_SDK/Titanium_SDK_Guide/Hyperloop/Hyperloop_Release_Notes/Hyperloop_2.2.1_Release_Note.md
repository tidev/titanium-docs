---
title: Hyperloop 2.2.1 - 26 October 2017
weight: '40'
---

# Hyperloop 2.2.1 - 26 October 2017

Hyperloop 2.2.1 is a patch release that includes four bug fixes.

## Fixed issues

* #### iOS

    * [TIMOB-25426](https://jira.appcelerator.org/browse/TIMOB-25426) - Hyperloop: iOS - Metabase binary has wrong file-permissions, causing build to fail

        * Fixed a build-crash caused by wrong file-permissions on some systems

    * [TIMOB-25436](https://jira.appcelerator.org/browse/TIMOB-25436) - Hyperloop: iOS - framework-parser should skip "Headers/" in framework if not exists

        * Fixed a use-case where the build would crash if a framework does not include public headers

    * [TIMOB-25432](https://jira.appcelerator.org/browse/TIMOB-25432) - Hyperloop: iOS - Cannot find class with name: SFSpeechRecognizer when placed in app/lib

        * Fixed a possible issue caused by referencing system-frameworks that are not linked correctly

    #### Android

    * [TIMOB-25428](https://jira.appcelerator.org/browse/TIMOB-25428) - Hyperloop: Android - Block scope declaration errors with node4

        * Fixed a crash that occurred when running Hyperloop Android on Node 4. Note: This is the last Hyperloop release to support Node 4. Please update the Node LTS for future releases.
