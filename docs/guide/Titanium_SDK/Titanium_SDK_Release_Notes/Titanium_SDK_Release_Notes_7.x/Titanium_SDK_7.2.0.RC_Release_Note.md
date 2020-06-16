---
title: Titanium SDK 7.2.0.RC - 7 June 2018
weight: '200'
---

# Titanium SDK 7.2.0.RC - 7 June 2018

## About this release

Titanium SDK 7.2.0.RC is a minor release of the SDK, addressing high-priority issues from previous releases.

This release primarily focuses on GDPR compliance and implementing them in the Analytics API.

As of this release, Titanium SDK 7.1.x will not be supported six months from 7.2.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## GDPR

With the enactment of European Union's General Data Protection Regulation (GDPR), we've updated our Privacy Policy and the way Axway collects and processes personal information. We welcome this change and understand the importance of data privacy as a human right. We are taking this opportunity to strengthen our global practices, expanding our robust data privacy practices, and will continue to support data privacy compliance.

For more information, please refer to Axway's **[Privacy compliance program](https://www.axway.com/gdpr)**.

You can contact the Axway Data Protection Office by sending an email to **[privacy@axway.com](#!/guide/mailto:privacy@axway.com)**. If you'd like to contact us in writing, see the following list of addresses that best applies to your location:

* USA: Axway Inc, 6811 E. Mayo Blvd, 4th Floor, Phoenix, AZ 85054, USA

* EMEA: Axway Software, Tour W, 102 Terrasse Boieldieu - 92807 Puteaux Cedex, FRANCE

* APAC: Axway Australia, Suite 1301, 99 Mount Street, North Sydney, 2060 NSW, AUSTRALIA

## GDPR opt out sample app

We have created a sample app that shows users how to opt out from Analytics (per the GDPR).

To guide you through the GDPR compliance process for you app, we have create a [7.2.0 Sample App](https://github.com/appcelerator-developer-relations/appc-sample-ti720) that demonstrates the usage of the new `optedOut` property as part of `Ti.Analytics`.

Here is a practical example: Let's assume, you have a `Ti.UI.Switch` instance in your app that controls whether or not the user should opt out of Analytics. By default, the user is opted in to Analytics.

```javascript
// Create a switch, default optOut status = `false`
const switch = Ti.UI.createSwitch({ value: false });

// On change, toggle the opt-out property
switch.addEventListener('change', (event) => {
  Ti.Analytics.optedOut = event.value;
});

// ...

// For every Analytics event, validate the `Ti.Analytics.optedOut` property. If the user opted out
// and you did not validate it, the Analatyics event will be skipped silently.
if (!Ti.Analytics.optedOut) {
  Ti.Analytics.featureEvent('i_love_gdpr', { really: true });
}
```

### External Modules

There are many other components of app-development that should become GDPR-complient as well. Some modules that are already GDPR complient:

* [Ti.Admob](https://github.com/appcelerator-modules/ti.admob)

* [Ti.Firebase](https://github.com/hansemannn/titanium-firebase)

### Questions?

If you have further questions about how GDPR works in Titanium, feel free to open a [JIRA ticket](https://jira.appcelerator.org/) or reach out to us via [TiSlack](http://tislack.org/).

## New features

* The following API's have been added for all platforms:

    * ```
        Ti.Analytics.optedOut
        ```

    * ```
        Ti.Analytics.setOptedOut(Boolean optedOut)
        ```

    * ```
        Ti.Analytics.getOptedOut() -> Boolean
        ```

* [TIMOB-26003](https://jira.appcelerator.org/browse/TIMOB-26003) - Android: Provide API to support opt-out of Analytics at runtime

    * Implemented API interface for GDPR compliance

* [TIMOB-26004](https://jira.appcelerator.org/browse/TIMOB-26004) - iOS: Provide API to support opt-out of Analytics at runtime

    * Implemented API interface for GDPR compliance

* [TIMOB-26005](https://jira.appcelerator.org/browse/TIMOB-26005) - Windows: Provide API to support opt-out of Analytics at runtime

    * Implemented API interface for GDPR compliance

## Fixed issues

* [TIMOB-26027](https://jira.appcelerator.org/browse/TIMOB-26027) - Android: Analytics can cause a crash on Android 8 if app is backgrounded

## Improvements

* [TIMOB-26083](https://jira.appcelerator.org/browse/TIMOB-26083) - Titanium CLI: Add ability opt-out analytics and remove email from analytics payload

    * Added option to opt out of analytics in Titanium CLI

    * You can opt out using this command: `appc ti config cli.analytics false`

* [TIMOB-26084](https://jira.appcelerator.org/browse/TIMOB-26084) - Remove project directory from analytics payloads

    * Removed project directory analytic info when opting out of analytics

## API changes

There were no API changes in this release.
