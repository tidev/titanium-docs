---
title: GDPR Opt Out Sample App
weight: '150'
---

# GDPR Opt Out Sample App

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

## External Modules

There are many other components of app-development that should become GDPR-complient as well. Some modules that are already GDPR complient:

* [Ti.Admob](https://github.com/appcelerator-modules/ti.admob)

* [Ti.Firebase](https://github.com/hansemannn/titanium-firebase)

## Questions?

If you have further questions about how GDPR works in Titanium, feel free to open a [JIRA ticket](https://jira.appcelerator.org/) or reach out to us via [TiSlack](http://tislack.org/).
