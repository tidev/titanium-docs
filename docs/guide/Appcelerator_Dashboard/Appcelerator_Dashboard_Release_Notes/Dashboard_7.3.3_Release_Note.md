---
title: Dashboard 7.3.3 Release Note
weight: '20'
---

# Dashboard 7.3.3 Release Note

## Dashboard 7.3.3 - 26 May 2020

Dashboard 7.3.3 is a patch release, which includes a new feature, improvements, and bug fixes.

## New features

* For organizations subscribed to Mesh Governance or Flow Manager, a new Platform Role named Auditor is now assignable, granting the user access to Search UI to introspect Central proxied app analytics. Additionally, an AMPLIFY Central and Flow Manager Role named Analytics Specialist is also available for Mesh Governance and Flow Manager subscribed orgs respectively.

## Improvements

* Added titles to better indicate the user's current view and ease navigation between views.

* Updated the APS SDK for Android and revised the instructions for enabling the SDK within Android applications.

* Improved the confirmation dialog when removing a member from an organization to show the user's name or email.

* Added a confirmation dialog when removing users or apps from a team.

* Improved the Assigned Members and Assigned Apps navigation in the Team form view for teams with large numbers of members or apps.

* Reintroduced the AMPLIFY Platform Dashboard version and a link to Dashboard Release Notes in the page footer.

## Fixed issues

* Fixed an issue where attempting to sort table views on some columns may not behave as expected.

* Fixed an issue where Entitlements for a subscription on the Organization Overview may not be collapsed after they are extended.

* Fixed an issue where users who have set a Login Preference setting of "Always Ask for Org" may not be successfully logged in using the AMPLIFY CLI.

* Fixed an issue where users may not be prompted to set their org name once activated after signing up.

* Fixed an issue where users may not be able to update their profile on DevLink.

* Fixed an issue where the Dev Map on DevLink showed an error and failed to render.
