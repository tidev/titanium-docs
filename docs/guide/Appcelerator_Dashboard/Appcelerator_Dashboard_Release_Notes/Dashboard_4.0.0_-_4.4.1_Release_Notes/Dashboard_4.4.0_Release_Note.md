---
title: Dashboard 4.4.0
weight: '20'
---

# Dashboard 4.4.0

Dashboard 4.4.0 is a minor release, which includes behavior changes and a few bug fixes.

## Behavior Changes

* In this release, users will now see a banner providing them with information regarding their trial or license status. For individual users employing the **free trial**, you will see a "days since signup " counter along with a link to billing. **Enterprise trial** users will see a countdown timer and a link to contact your sales rep. Licensed **On-demand** users will not see this banner as your notifications will arrive via email or can be reviewed at [https://billing.appcelerator.com](https://billing.appcelerator.com/). If you ordered your license via an **order form**, you will see the time remaining in the banner along with a link to contact your sales rep.

* Mapbox now enforces map boundary restrictions.

* You can now assign your users one of four user roles: Admin, Developer, Collaborator, and Insight. See User Roles and Features below for more details.

* The default date range for analytics was changed from 7 days to 24 hours.

## Roles and Features

Dashboard 4.4.0 introduces the capability to assign users to different roles that grant them different rights to the dashboard. Those roles and rights are:

* **Org Admin** - user has admin rights over your organization's Dashboard

* **Developer** - user who has general developer rights

* **Collaborator** - developer role (any license with collaboration enabled) from another organization who has access to your organization without taking up a license

* **Insight** - user who has a "read-only" access such as viewing performance management, crash analytics, and query builder results to the team's assigned apps

In addition to these user roles, you can add the following features to your roles:

* Support

* Test (available for enterprise only)

* Performance management (included to enterprise)

## Fixed Issues

* Cannot Edit Cloud Data on the Dashboard

* Uncaught exception on org lookup

* Missing entitlements on some free organizations after signup caused an error on org push

* Read-only users should be able to create/manage event funnels

* Profile Update: Latitudes < 0 not accepted

* Can not dismiss EULA Dialog

* Profile: option\_44 - 46 missing in update endpoint

* Profile: Few fields missing/different from old (DL1) WebDB users

* Profiles: Unable to remove geocodes
