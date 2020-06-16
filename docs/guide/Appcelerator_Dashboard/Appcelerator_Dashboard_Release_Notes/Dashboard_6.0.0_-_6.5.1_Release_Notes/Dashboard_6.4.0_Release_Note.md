---
title: Dashboard 6.4.0 Release Note
weight: '30'
---

# Dashboard 6.4.0 Release Note

## Dashboard 6.4.0 - 10 July 2019

Dashboard 6.4.0 is a minor release, which includes several improvements and bug fixes.

## Improvements

* With recent improvements to AMPLIFY Platform's single sign-on facilities, the **Keep me signed in for a week** option has been removed from the **Sign In** page. Browser sessions will expire after 30 minutes of inactivity. Tooling sessions (logging in via CLI or Studio) will remain active for seven days.

* Removed strict normalization of analytics events platform information. Now platforms other than iOS, Android, and "(not set)" will be displayed in chart and table series grouped by Platform.

* Added all usage metrics to the organization's **Usage** view. This view now displays monthly usage of Application Integration transactions and lists usage by environment type (for example, "Axway Managed" vs. VPC or "Customer Managed").

* Added a table to the organization overview, which shows the product, plan, start, and end dates of each organization subscription.

* Improved date range calculations to always include the most recent period. Previously, the selection of the **Last 24 Hours** would exclude the current hour. The analytics view chart series will now include partial results for the current hour.

* Improved usability of the **Custom Query**. The **New Query** and **Clear** controls are more consistent and obvious. The label for previewing query results was changed to **Preview**. Once a query is saved, the user is transitioned back to their list of saved queries.

* Removed distinct values for session identifiers in **Custom Query** filters.

* Added Mobile Backend Services (MBS) application creator and date information to the MBS application **Overview** tab.

* Added a primary action on the Choreography tile to link to ACE's new UI once an organization is subscribed and provisioned.

* Corrected the link to the **Content Collaboration** tile's **How It Works** content.

* Added the display of the application identifiers on the AMPLIFY Runtime Services application **Overview** view.

* Improved build verification error messages to make it clear why the build failed and how users can correct the build process.

* Improved the display and consistency of the AMPLIFY Runtime Services and Mobile Backend Services access logs.

* Migrated AMPLIFY Crash Analytics views to display `crash.breadcrumb` events.

## Fixed issues

* Resolved an issue uploading symbol files for applications.

* Resolved a potential login issue when accessing the AMPLIFY Platform in private browsing/Incognito.

* Resolved an issue where Mobile Backend Services applications may have been created without an application name.

* Fixed breadcrumb sorting and limit in the AMPLIFY Crash Analytics detail view.

* Fixed Custom Query display for mix/max values to show infinity if there are no results.

* Fixed an issue where the **Back** button on Mobile Backend Services data views may link to the landing page.
