---
title: Dashboard 4.0.0 Release Note
weight: '120'
---

# Dashboard 4.0.0 Release Note

The Dashboard 4.0.0 release is a major release, introducing new features and behavior changes from previous releases.

## Notice of Features and Behavior Changes

* The top-level **APIs** menu, introduced in Release 2.3.0, was removed and most API applications can now be accessed from the top-level **Apps** menu. The **Apps** menu now lists all applications, which includes Titanium, native Android, native iOS, Arrow (formerly Node.ACS or Service APIs) and standalone ArrowDB (formerly ACS or Data APIs) applications. Note that only standalone ArrowDB applications not created with a client application will be displayed. For ArrowDB applications created with a client application, access the ArrowDB application from the client application's **Arrow** tab.

* The _All Apps_ and _All APIs_ pages have been merged into an _All Projects_ page. To access the page, select **All Projects** from the **Apps** menu. The page lists the application name, type, supported platforms for client applications and the ability to favorite the application or delete the client application. Previously, the _All Apps_ and _All APIs_ pages would provide the creation date, operation status for API applications and ability to go to the _App Teams_ page for client applications. Note that **Data** types are now called **ArrowDB** and **Service** types are called **Arrow**.

* In the _Application_ page, the **APIs** tab was renamed to **Arrow** in the left navigation.

## New Features

* To delete data from an ArrowDB application (formerly an ACS app or Data APIs), you will now be presented with a dialog that asks you to confirm the data deletion by entering the name of the application. The dialog appears after you click **Delete** from the ArrowDB application's _Manage Data_ page.

* If a user is a member of only one organization, the **Orgs** menu will be hidden. If you are an organization admin and need access to the _Manage Organization_ page, select **Organization** from the **Profile** menu.

* Add **Manage** **Billing** to the **Profile** menu to go to the Billing Management site, where you can update your billing information or upgrade your Appcelerator Platform subscription.
