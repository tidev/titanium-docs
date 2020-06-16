---
title: Dashboard 6.2.0 Release Note
weight: '60'
---

# Dashboard 6.2.0 Release Note

## Dashboard 6.2.0 - 17 May 2019

Dashboard 6.2.0 is a minor release, which includes new features, improvements, behavior changes, and bug fixes.

## New features

* Revised the AMPLIFY Platform home page. **Service Offerings and Products** displays available offerings, indicates any active trial or subscription status, and links to views displaying each offerings' capabilities. **My Capabilities** displays capabilities for your organization's active trials and subscriptions. Users in organizations with active subscriptions will be shown the **My Capabilities** view after logging in.

* Added links to **Developer Portal****,** **Community Portal**, and **Support Portal** to AMPLIFY Platform home page.

## Improvements

* Improved display and accuracy of Location analytics data, e.g., Installs by Location.

* Added support for request method, status code, and response time in AMPLIFY Runtime Services analytics views.

* Added a widget to the Overview tab to display the AMPLIFY Crash Analytics event counts.

* Added Platform Version as an available field for Custom Queries.

* Updated the links and product names in the common header navbar.

* Updated the links on the common footer navbar.

## Behavior Changes

* Signing up for the AMPLIFY Platform now starts beta trials in Choreography and Mesh Governance. Signing up no longer starts an Application Development trial. New users may request their 60-day trial of AMPLIFY Application Development offers by clicking "Start Free Trial" on the home page.

* Removed support for Microsoft Edge versions 13 and 14.

* Deprecated support for GitHub OAuth for the `platform.appcelerator.com` domain. The feature is now only supported on `platform.axway.com.`

* Analytics events for an organization whose subscriptions have expired more than 30 days prior to the receipt will no longer be accepted.

* Added a deprecation warning to the Appcelerator Performance Management (Crittercism) embedded interface, prompting users to update their applications to use the AMPLIFY Crash Analytics module. For more details, please refer to the [documentation](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_allOS_en/page/amplify_crash_analytics.html).

* Added a deprecation warning to the Appcelerator CloudTest (SOASTA) embedded interface.

## Fixed issues

* Fixed an issue where users may not be able to log in after initial activation.

* Fixed an issue where clicking **Sign In** from some services may not redirect users back to that service once authenticated.

* Fixed an issue where users may not be able to claim an Indie Application Development subscription after their trial expired.

* Fixed a display issue with the field and value selectors on Custom Queries.

* Fixed an issue where seat counts may show zero after removing a member from an organization.
