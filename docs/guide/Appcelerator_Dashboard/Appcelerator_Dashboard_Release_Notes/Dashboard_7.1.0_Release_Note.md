---
title: Dashboard 7.1.0 Release Note
weight: '160'
---

# Dashboard 7.1.0 Release Note

## Dashboard 7.1.0 - 24 October 2019

Dashboard 7.1.0 is a minor release, which includes two new features and several bug fixes.

## New features

* Added a facility to search AMPLIFY Crash Analytics events by usernames set in-app metadata.

* Added a _Settings_ view to set user preferences for layout, theme, default org rule, and analytics demo mode.

## Fixed issues

* Resolved an issue displaying Mobile Backend Services request logs for datasources in Virtual Private Cloud environments.

* Resolved an issue where storage values on the Mobile Backend Services _Overview_ view and the organization's _Usage_ view may inconsistent.

* Resolved an issue where authenticating using tooling (such as Appcelerator CLI) may invalidate prior sessions for the same user.

* Resolved an issue on the _Add New Team_, _Edit Team_, or _Add New Member_ views where adding a member to a team while changing another member's role or the member's role in another team may cause the role list to disappear.

* Resolved an issue where application builds may fail due to an error verifying APM or ACA module entitlements.

* Resolved an issue where org-level _Analytics_ table views may link to the Mobile Backend Services datasource associated with an app rather than to the app.

* Resolved an issue where phone number verifications on the _Account_ view may fail if the phone number provided did not follow the E.164 formatting standard.

* Resolved an issue where navigating away from the APS SDK app _Services_ view while generating keys may have shown an error.
