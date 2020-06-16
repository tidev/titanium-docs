---
title: Dashboard 5.1.0 Release Note
weight: '110'
---

# Dashboard 5.1.0 Release Note

## Dashboard 5.1.0 - 20 July 2018

Dashboard 5.1.0 is a minor release, which includes new features, improvements, and several bug fixes.

## New Features

* Updated provisioning for Axway Labs products. Users must now accept terms of use for Axway Labs products.

* Added an APIs and Microservices Quick Start view linking to the existing Get started with API Builder guide and new onboarding content for API Central once provisioned.

* Added a warning on the Mobile Backend Services Push Notification form if an uploaded iOS push certificate is disabled or expired.

## Improvements

* Improved the AMPLIFY Home and Labs views to make primary actions more obvious.

* Unified navigation notifications indicator will now dismiss once all notifications have been read.

* Improved Titanium and APS SDK analytics views' environments ("deploy type") filter to no longer include Virtual Private Cloud environments.

## Fixed issues

* Fixed an issue where Platform services may not have shown as enabled when creating new applications in App Builder Studio.

* Fixed an issue where searching the contents of a table may cause a full page to reload and loss of the view state and any in-progress changes.

* Fixed an issue where the confirmation message shown after exporting Mobile Backend Services data may not be able to be dismissed.

* Fixed an issue where "Export Data" and "Delete Data" options were presented on Mobile Backend Services Manage Data views, but would not function as expected.

* Fixed an issue where returning to the All Apps view after filtering by application type may cause the filter to show as reselected, but the apps would not be filtered.

* Fixed an issue where links on the metric overview tables may point to the Mobile Backend Service datasource provisioned for a Titanium or APS SDK app, rather than the app.
