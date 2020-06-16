---
title: Dashboard 4.6.0 - 15 April 2016
weight: '110'
---

# Dashboard 4.6.0 - 15 April 2016

Dashboard 4.6.0 is a minor release, which includes several improvements and bug fixes.

## Improvements

* Users will now get a notice when their ArrowDB iOS push notification p12 certificate is expiring. Users should receive an email in advance of the expiration.

* Added a hover window showing information on user's join and last active date and user's email address in the management screen

* The Insights tablet application is no longer available on the Downloads page and will be open sourced in the future

## Fixed Issues

* When a user's role in their org has changed, the existing session is now updated and no longer requires the user to log back in

* Mitigated a case where multiple ArrrowDB apps may show on an app's Arrow view

* Fixed a bug where, when logging into the Dashboard with a second browser, the original browser may display the EULA acceptance page

* Fixed an issue preventing access to test/performance tabs on Dashboard

* Fixed a bug where, when viewing ArrowDB apps, the left menu may show the name of a previously viewed ArrowDB app

* Fixed an issue where a user may not be able to update a registered APS SDK application's information

* Fixed a bug where, when a user moves from a paid organization to a trial organization, the user was moved into the production environment instead of being moved into the development environment
