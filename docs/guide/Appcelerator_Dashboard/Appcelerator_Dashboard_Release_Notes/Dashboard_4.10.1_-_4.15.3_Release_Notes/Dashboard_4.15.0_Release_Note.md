---
title: Dashboard 4.15.0 - 10 November 2017
weight: '30'
---

# Dashboard 4.15.0 - 10 November 2017

Dashboard 4.15.0 is a minor release, which includes new features, behavior changes, improvements, and several bug fixes.

## New Features

* Axway Appcelerator Dashboard is now AMPLIFY Platform Dashboard. A new onboarding experience and landing page presents users with quick links to App Builder (Studio and CLI), Dashboard, Mobile Backend Services, and API Builder and provides controls to request access to API Central, Business Event Service, and Search Service.

* Added links to API Central, Business Event Service, and Search Service product description pages to header links.

* First-time visitors to the new Platform landing page are presented with a welcome message.

## Behavior changes

* Trial period lengthened from 45 days to 60 days.

* Removed "Quick Start" page. Access now redirects to the new landing page.

* Updated Platform generated email templates.

* Activation and other Platform generated emails now sent from [amplify@axway.com](#!/guide/mailto:amplify@axway.com) address.

* Two-factor authentication is now opt-in (no longer enabled by default). Users may enable it by visiting their Account page.

* Accessing Dashboard on [https://platform.appcelerator.com](https://platform.appcelerator.com) may redirect to [https://platform.axway.com](https://platform.axway.com) if you are not currently logged in.

## Improvements

* Updated Getting Started Guides for Appcelerator Studio and Appcelerator CLI.

* Terms of Use have been updated to reflect new product naming and Early Access product use.

* Enterprise Purchase Agreement has been updated with current names and addresses.

* Updated icons for API Builder and Mobile Backend Services.

* AMPLIFY Runtime Services application logs now show 25 entries per page, instead of 10.

## Fixed issues

* Fixed an issue where navigating away from a page while data is still loading may cause that page to load after the subsequent page should be shown.

* Fixed an issue where Indie plan users may have access to the premium modules download page.

* Fixed issue with the display when an error occurs fetching AMPLIFY Runtime Services logs. An error message is now shown, instead of the page remaining in an empty state.

* Fixed issue where Mobile Backend Services scheduled push notifications may not appear in the Scheduled tab.

* Fixed issue when newly uploaded iOS certificate filenames may not be displayed.

* Fixed issue with the AMPLIFY Runtime Services application log view where the current page may not be reflected when toggling between access and application logs.

* Fixed issue where Mobile Backend Services push notifications scheduled for delivery later may be sent immediately. Fixed issue where Mobile Backend Services push notification form may not reset after creating a scheduled push notification.

* Fixed issue where site headers may show the user as logged in while device authorization had not been completed.

* Fixed issue with Mobile Backend Services (MBS) Manage Data custom object type list where long object types and their counts may not be displayed properly.
