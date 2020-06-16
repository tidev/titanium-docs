---
title: Alloy 1.9.0 - 22 April 2016
weight: '80'
---

# Alloy 1.9.0 - 22 April 2016

Alloy 1.9.0 is a minor release that includes new features and bug fixes.

As of this release, Alloy 1.8.x will not be supported six months from 1.9.0's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New Features

* [ALOY-1481](https://jira.appcelerator.org/browse/ALOY-1481) - Data binding: Support binding multiple models to the same view

    * Multiple models can be bound to the same element or property

* [ALOY-1482](https://jira.appcelerator.org/browse/ALOY-1482) - Data binding: Support deep binding of model object attributes

    * Added support for deep binding of module attributes

* [ALOY-1494](https://jira.appcelerator.org/browse/ALOY-1494) - iOS: Support Ti.UI.iOS.Stepper in Alloy

    * Added support for stepper elements and should be able to use custom images with stepper elements

## Fixed Issues

* [ALOY-1478](https://jira.appcelerator.org/browse/ALOY-1478) - Data binding fails when binding string or model attribute name has dash, space or quote

* [ALOY-1480](https://jira.appcelerator.org/browse/ALOY-1480) - Bug/Regression: Data binding always returns string values

* [ALOY-1503](https://jira.appcelerator.org/browse/ALOY-1503) - After Alloy compile, property which has array disappear.
