---
title: Dashboard 5.0.0 Release Note
weight: '130'
---

# Dashboard 5.0.0 Release Note

## Dashboard 5.0.0 - 13 July 2018

Dashboard 5.0.0 is a major release, which includes new features, improvements, and several bug fixes.

## New features

* AMPLIFY homepage has a new simpler look.

* Introduced a new Labs section on the AMPLIFY homepage providing early public access to alpha and beta features and products.

* Added new Quick Start on-boarding page for new users.

* Added feature events count widget on org-level overview and app overviews.

* Added controls for API Runtime Admin users and application owners to manage environment variables for a running application and unpublish or change the published version of the app.

* Added batch delete by query to Mobile Backend Services Manage Data table views.

* Added real-time CPU load and memory usage for AMPLIFY Runtime Services applications.

* Added new Organizations view for users that are members of multiple organizations.

* Added new Organization Family view for enterprise orgs to view and manage org hierarchy.

* Added ability for Appcelerator Platform Services SDK keys for Mobile Backend Services to be regenerated.

* Added new Version Adoption chart.

## Improvements

* Revised interface site-wide to improve consistency with other Axway cloud products UI.

* Improved performance of the all projects view for orgs with a high number of applications.

* Improved performance of Manage Organization and Manage Members views.

* Removed Appcelerator Demo application.

* Simplified navigation of app analytics views.

* Changed Apps dropdown to only show favorite apps. Users are able to search for any app.

* Revised app overview.

* Updated analytics chart views and improved.

* Added more date range options and ability to page to prior ranges.

* Revised user account view and added organization and app team membership information.

* Revised app real-time analytics view.

* Max Unique Devices analytics widget and chart now reference time range requested (for example, when requesting Max Unique Device for 24 hour period, values are referenced as "Max Hourly Unique Devices".)

* Simplified the Add New Member and App Team management user interfaces. Admins may search for apps to assign the member's role in the apps team.

* Revised analytics map views.

* Center position and zoom level are now kept consistent on all analytics maps views.

* Added ability for Mobile Backend Services datasources to be renamed.

* Added a delete option in the app view header actions drop-down.

* Improved pagination controls on table views.

* Revised links in the header navigation.

* Updated documentation references to point to [docs.axway.com](http://docs.axway.com).

* Added link on member profile back to Manage Members view.

## Fixed issues

* Corrected status of AMPLIFY Runtime Services applications.

    * Green: active application

    * Red: faulty application

    * Grey: inactive or not yet published application

* Remove regular expression filter on Mobile Backend Services Manage Data table view filters.
