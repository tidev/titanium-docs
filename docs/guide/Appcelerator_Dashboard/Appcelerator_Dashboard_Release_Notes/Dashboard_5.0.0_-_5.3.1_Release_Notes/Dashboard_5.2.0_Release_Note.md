---
title: Dashboard 5.2.0 Release Note
weight: '70'
---

# Dashboard 5.2.0 Release Note

## Dashboard 5.2.0 - 28 September 2018

Dashboard 5.2.0 is a minor release, which includes several new features, improvements, and bug fixes.

## New feature

* Simplified the Dashboard header. Project selection is now performed on the _Projects_ view. The _Projects_ view is accessed by clicking the **DASHBOARD** link in the header. The **Apps** drop-down menu has been removed.

* Switching logged-in organizations is now performed from the **User** drop-down menu in the right of the header or from the user's _Organizations_ view instead of a separate drop-down menu.

* Added links to user's _Organizations_ view and current org's _Members_ view in the **User** drop-down menu in the header.

* Provided the ability to select a default organization or to be prompted which organization to log into during authentication. This feature is available to users who are members of multiple organizations and may be configured on the user's _Organizations_ view.

* Added top application to the _API Runtime Requests_ widget on the **Overview** tab.

## Improvements

* Improved performance of analytics chart views.

* Improved Mobile Backend Services data forms and other form views.

* When multiple browser tabs are open and signing out in one tab, both tabs will now be logged out and redirect to the sign-in form.

## Fixed issues

* Fixed an issue where the analytics view chart and table data exports may not download.

* Fixed an issue where Mobile Backend Service user confirmation and password reset may not have functioned as expected.

* Fixed an issue where analytics query date range selection may not have allowed selection of specific dates.

* Fixed an issue where analytics queries for date ranges that span across Daylight Savings Time start or end dates may have caused the chart view to render incorrectly.

* Fixed a display issue with AMPLIFY Runtime Services real-time CPU and memory usage charts.

* Fixed an issue where SMS phone number verification codes may not have been accepted.
