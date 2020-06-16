---
title: Alloy 1.7.33 - 22 February 2016
weight: '30'
---

# Alloy 1.7.33 - 22 February 2016

Alloy 1.7.33 is a patch release that includes new features, improvements, and bug fixes.

As of this release, the previous Alloy patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New Features

Alloy supports the new Ti.UI.iOS.createPreviewContext. A PreviewContext can be added to most views via the `<PreviewContext>` tag. This tag itself supports `<Preview>` and `<Actions>` tags, which maps to `preview` and `actions` properties respectively. The `preview` property must be assigned a single view. The `actions` property can be used with one or more actions (`<Action>`) or action groups (`<ActionGroup>`).

## Improvements

* [ALOY-1264](https://jira.appcelerator.org/browse/ALOY-1264) - Support New iOS SplitWindow in XML Markup

    * There is a new Ti.UI.iOS.SplitWindow class, which deprecates the old Ti.UI.iPad.SplitWindow class. See [Titanium.UI.iOS.SplitWindow](#!/api/Titanium.UI.iOS.SplitWindow) for more details.

* [ALOY-1321](https://jira.appcelerator.org/browse/ALOY-1321) - iOS: packaged app icons for new projects needs to be updated

    * Removed unsupported appicons from project template.

* [ALOY-1341](https://jira.appcelerator.org/browse/ALOY-1341) - Add Arabic lang to builtin MomentJS

    * Added most common Arabic format to MomentJS

* [ALOY-1342](https://jira.appcelerator.org/browse/ALOY-1342) - Sample Todo App TextField text color to black

    * Added font color of black to `#itemField` to alleviate readability problems on Android

* [ALOY-1346](https://jira.appcelerator.org/browse/ALOY-1346) - Controller template should no longer declare args variable

    * Arguments passed into the controller can be accessed from $.args

## Fixed Issues

* [ALOY-1320](https://jira.appcelerator.org/browse/ALOY-1320) - Styles not applied when an element uses another namespace

* [ALOY-1322](https://jira.appcelerator.org/browse/ALOY-1322) - Blackberry still appears in the assets folder

* [ALOY-1323](https://jira.appcelerator.org/browse/ALOY-1323) - Alloy: module-tag in Alloy element effects all controller-views

* [ALOY-1331](https://jira.appcelerator.org/browse/ALOY-1331) - Windows: App crashes with 'Cannot find variable: OS\_BLACKBERRY

* [ALOY-1332](https://jira.appcelerator.org/browse/ALOY-1332) - Alloy.version does not match actual version

* [ALOY-1335](https://jira.appcelerator.org/browse/ALOY-1335) - Use Alloy's deepExtend to handle conditional on-device style inheritance

* [ALOY-1340](https://jira.appcelerator.org/browse/ALOY-1340) - Alloy selective compilation broken since ALOY-1332

* [ALOY-1345](https://jira.appcelerator.org/browse/ALOY-1345) - iOS Attributed Strings are not showing
