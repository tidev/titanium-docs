---
title: Dashboard 5.3.0 Release Note
weight: '20'
---

# Dashboard 5.3.0 Release Note

## Dashboard 5.3.0 - 3 January 2019

Dashboard 5.3.0 is a minor release, which includes new features, improvements, and bug fixes.

## New features

* Added registration of non-mobile applications. In addition to the existing support for registering APS SDK applications, the following application types are now supported:

    * Website/web applications

    * API/Microservice (for applications not hosted on AMPLIFY Runtime Services)

    * Other (user may indicate application type and platform)

* Added an option to allow users to add or remove services when registering applications.

* Added an option to allow users to opt in and out of specific environments when provisioning MBS datasources for registered applications.

* Added Custom Queries functionality to allow creating and saving complex queries with filtering and grouping on analytics events' properties.

* Added the ability for administrator users to delete multiple applications.

## Improvements

* Updated the project list search to prioritize matches on app name above matches on creator name or email.

* Updated the _Subscribed Devices_ in MBS Push Notification views to include a subscribed device count.

* Improved the performance and consistency of analytics chart and table views.

* Improved the consistency of the action control selections and the drop-down menus.

* Added an indicator on the admin's Members view to show which organization members have two-factor authentication (2fa) enabled.

* Added a banner to AMPLIFY Platform landing page and all projects view to display future scheduled maintenance messages.

## Fixed issues

* Fixed an issue with two-factor authentication (2FA) account verification not working for SMS numbers in some regions.

* Fixed an issue where some special characters in user or organization names may cause in header navigation to not render properly.

* Fixed an issue where the build verification process may error out on first-party and partner modules.
