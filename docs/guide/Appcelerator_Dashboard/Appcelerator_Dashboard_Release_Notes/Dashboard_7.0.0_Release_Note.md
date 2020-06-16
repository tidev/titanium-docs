---
title: Dashboard 7.0.0 Release Note
weight: '190'
---

# Dashboard 7.0.0 Release Note

## Dashboard 7.0.0 - 28 September 2018

Dashboard 7.0.0 is a major release, which includes new features, several improvements, and several bug fixes.

## New features

* Introduced _Teams_, a new facility for grouping your organization's users and apps. Replaces the previous _App Teams_ functionality, allowing administrators to control visibility and rights to Mobile Backend Services in addition to Titanium, APS SDK, and other app types. Existing app teams were migrated to new teams.

* Added _Teams_ view allowing users to view and administrators to create, update, and remove teams and designate a team as default.

* Added Teams controls on the _Add New Member_ form allowing administrators to add the new member to teams and assign their role.

* Added Teams column to the _Members_ view showing the count of teams of which the user is a member and links to view or manage the user's team membership. This view is also accessible from the Actions dropdown to the right of the user's row.

* Added Teams controls on the _Register App for Services_ form allowing users to assign the app to one or more teams. Apps that are not yet associated with a team are still accessible by org administrators and their creators.

* Added Teams section on _App Overview_ view showing the teams to which the app has been assigned.

* Added OS and app version breakdown to AMPLIFY Crash Analytics crash detail view.

## Improvements

* Added the end-of-life (EOL) date of November 26, 2019 to the deprecation message on app _Performance_ view.

* Simplified administration of users' roles on org _Members_ view. Members' Platform and Service roles can be set from a single list of available roles.

* Simplified user and organization menu and switch org controls in common header.

* Integration Builder Transactions usage is now displayed per-environment (Sandbox vs Production) on the org _Usage_ view.

* Improved filter option labels on AMPLIFY Crash Analytics views for crashed vs handled exceptions.

* Added Crash ID to information on _Crash Details_ view.

* Improved consistency of headers and navigation on Org and User management views.

* Improved consistency of form views' primary action controls and buttons.

## Fixed issues

* Removed deprecated SOASTA CloudTest UI integration. Users of this feature are recommended to explore other mobile application testing frameworks.

* Resolved issue where APS SDK keys may not be generated for registered applications.

* Resolved issue where users may not be able to navigate to AMPLIFY Crash Analytics views from a shared or bookmarked link.

* Enabled enforcement of 25MB file size restrictions for Mobile Backend Services file uploads.

* Resolved issue when selecting **Show only my apps** on _the Apps_ table view.

* Resolved issue with a user not being to add a friend in the Mobile Backend Services _Friends_ view.

* Resolved issue where apps may not be removed from Apps table view after deletion.

* Resolved issue where selecting an organization to log into during authentication may not switch the user into the selected org.

* Resolved issue where branding colors on org _Settings_ view may not be displayed or saved as expected in some browsers.

* Resolved issues where some tooltips or popovers may "stick" as users transition from view to view.

* Resolved issue with sorting org _Members_ table by "Last Login" may cause column widths to change.

* Resolved issue where menus in the org _Settings_ view may not be displayed properly in some browsers.
