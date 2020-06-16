---
title: Alloy 1.10.12 - 25 January 2018
weight: '10'
---

# Alloy 1.10.12 - 25 January 2018

Alloy 1.10.12 is a patch release that includes three improvements and two bug fixes.

As of this release, the previous Alloy patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Improvements

* [ALOY-1597](https://jira.appcelerator.org/browse/ALOY-1597): Use babel-code-frame to provide context when failing to parse code

    * Improved compile error messages to include a code frame that point to source locations

* [ALOY-1592](https://jira.appcelerator.org/browse/ALOY-1592): Builtins: Reimplement measurement by convertUnits

    * Reimplemented measurement by built-ins

* [ALOY-1534](https://jira.appcelerator.org/browse/ALOY-1534): Add support for Backbone 1.3.3 and Underscore 1.8.3

    * Updated Backbone to 1.3.3 and Underscore to 1.8.3

## Fixed issues

* [ALOY-1596](https://jira.appcelerator.org/browse/ALOY-1596): Do not copy Mobileweb assets on alloy new

* [ALOY-1528](https://jira.appcelerator.org/browse/ALOY-1528): Checks the theme’s config.json for dependencies when returning widget directories
