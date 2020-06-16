---
title: Appcelerator CLI 7.1.2.GA - 25 November 2019
weight: '70'
---

# Appcelerator CLI 7.1.2.GA - 25 November 2019

Appcelerator CLI 7.1.2 GA is a patch release that includes improvements, and bug fixes.

As of this GA release, the previous CLI patch release is no longer supported. End of support for this version will be up to 2020-05-29 or until the next patch release . Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

Additionally, with this release the formal deprecation of API Builder 3.x begins. Support for API Builder 3.x will cease on 30th April 2020. Use the [v3 to v4 upgrade guide to help migrate](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_v3_to_v4_upgrade_guide.html) your applications to API Builder 4.x.

## Component versions

The following components are shipped with CLI 7.1.2:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Alloy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.14.3</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>API Builder</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>3.2.15</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Cloud CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>2.1.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Titanium CLI</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>5.2.2</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Daemon</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>1.1.3</p></td></tr></tbody></table>

## Improvements

* [ALOY-1693](https://jira.appcelerator.org/browse/ALOY-1693) \- Alloy: Prevent re-opening DB on queries

    * Added a feature that will cache and maintain database connection to prevent unnecessary `open()` and `close()` operations

* [CLI-1369](https://jira.appcelerator.org/browse/CLI-1369) - Remove longjohn dependency

* [CLI-1370](https://jira.appcelerator.org/browse/CLI-1370) \- appc-verify: Amend asset loading for compatibility with asset refactor

    * Sanitize asset path for compatibility with new asset changes in [TIMOB-26043](https://jira.appcelerator.org/browse/TIMOB-26043)

## Fixed issues

* [ALOY-1598](https://jira.appcelerator.org/browse/ALOY-1598) \- samples/apps/models/binding\_no\_persistence produces runtime error

* [ALOY-1633](https://jira.appcelerator.org/browse/ALOY-1633) \- Alloy should assign globals directly rather than using the implicit global scope of app.js

* [ALOY-1701](https://jira.appcelerator.org/browse/ALOY-1701) \- XML: Unable to use platform namespace restriction on event handlers

* [ALOY-1705](https://jira.appcelerator.org/browse/ALOY-1705) \- Fix compile issue when using return keyword outside of a function

* [ALOY-1706](https://jira.appcelerator.org/browse/ALOY-1706) \- Compile error if Alloy view filename contains hyphen

* [ALOY-1710](https://jira.appcelerator.org/browse/ALOY-1710) - Compile error when using import/export syntax

* [CLI-1380](https://jira.appcelerator.org/browse/CLI-1380) - WatchOS simulators not shown in Studio
