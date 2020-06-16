---
title: Dashboard 6.3.0 Release Note
weight: '40'
---

# Dashboard 6.3.0 Release Note

## Dashboard 6.3.0 - 11 June 2019

Dashboard 6.3.0 is a minor release, which includes new features, improvements, and bug fixes.

## New features

* Introduced a daily process to send email notifications to organization administrators when their organization's usage of Application Development or Cloud Capacity entitlements exceeds specific thresholds. A single notification will be sent once the usage of an entitlement exceeds 75% of its entitlement quota. A second will be sent once usage exceeds 90%. A daily notification will be sent if the usage of any entitlement quotas exceeds 100%.

* Added support for custom queries by location and improved display and consistency of analytics views by location.

## Improvements

* Added AMPLIFY Crash Analytics module to the Downloads view and added a link to Downloads view from APM deprecation warning.

* Added tooltips to describe entitlements listed on the Organization **Usage** view.

* Added tooltips to clarify the column names in the Push Notifications Analytics overview.

* Updated **How It Works** links on the AMPLIFY Platform home page to link to new Developer Portal content.

* Removed pie chart with a breakdown by platform from the AMPLIFY Crash Analytics crash event detail view.

* Updated file upload fields to improve consistency with other form fields.

* Improved render time by decreasing the size of assets fetched on initial load.

## Fixed issues

* Resolved an issue where members of organizations with expired subscriptions may not be able to access Community, Developer, or Support Portals and may be inadvertently redirected to the AMPLIFY Platform home page.

* Resolved an issue where entitlements on the Organization's Usage view may not be displayed properly.

* Resolved an issue where the selection of a custom date range on analytics views may not display the selected range correctly.
