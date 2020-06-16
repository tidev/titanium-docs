---
title: Dashboard 4.9.0 - 30 August 2016
weight: '30'
---

# Dashboard 4.9.0 - 30 August 2016

Dashboard 4.9.0 is a minor release, which includes new features, behavior changes, improvements, and several bug fixes.

## New Features

* Search for apps by GUID in both the Apps drop-down and All Projects view.

* Arrow application logs may be viewed on Dashboard.

* Database and file storage totals are listed separately on the ArrowDB datasource Usage view in the Dashboard.

* ArrowDB custom objects may be filtered on custom fields by string, numeric, or Boolean values.

## Behavior Changes

* Updated the password policy. Passwords must be a minimum of eight characters in length, cannot use repeating character sequences (e.g. 11111), and must not be a common weak password (e.g. "password" or "12345678").

* Added stronger protection against invalid account access attempts. User accounts are temporarily locked and login attempts will be rejected if five or more failed login attempts occur. The user will receive an email indicating there was suspicious activity on the account and provide a link to unlock the account. Additionally, failing multiple login attempts across more than one account may result in further login attempts being rejected temporarily.

* Session expiry is now based on the elapsed period of user inactivity. The default session expiry for a web session is 30 minutes. If the user checks the "Keep me signed-in for one-week" option during login, the expiry is increased to 7 days.

## Improvements

* Improved user account and activation forms to show "Confirm password must be the same as Password" message when passwords provided do not match.

* Improved load time for Manage Orgs views.

* Downloads view now displays module SDK version compatibility.

* Improved the user experience when accessing Arrow Admin during local development. Users will be redirected back to Arrow Admin after logging in. Recent Activity and Notifications may be viewed on Arrow Admin during local development.

* If the user is unable to delete an app, the delete button is now present, but disabled (grayed out), and hovering over it will show a tooltip with the reason why it cannot be deleted.

* A user is informed to disable Demo Data in order to view Arrow apps.

* Corrected issues with Arrow application analytics and now show access counts by path.

* All ArrowDB datasources are now listed on the All Projects view and in the Apps drop-down.

## Fixed Issues

* Fixed issue where test and APM services may not be provisioned for enterprise organizations and keys for APM service may not be generated.

* Fixed issue where apps listed on ArrowDB analytics metric overviews may be listed as "Unknown" and not linked to the app's overview.

* Fixed issue when entering a number in a custom field to an ArrowDB object was converted into a string.

* Fixed issue where ArrowDB app-specific analytics may not be displayed.

* Fixed issue when generating keys and ArrowDB is already provisioned that it shouldn't show an error message.

* Fixed issue where special characters in application names may not be escaped.

* Fixed issue where, if a user logs into an inactive organization, but is a member of only one other active organization, the org drop-down is not shown.

* Fixed issue where metric overview analytics may not be displayed.

* Fixed issue where Arrow application CPU usage load may not be displayed correctly.
