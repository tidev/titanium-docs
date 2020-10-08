---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Analytics/Analytics.yml
---
# Titanium.Analytics

<TypeHeader/>

## Overview

The Analytics module can be used to supply additional context or application-specific 
information which can then be accessed during analysis using Analytics.

Use the [featureEvent](Titanium.Analytics.featureEvent) method to generate custom
events that you can view through the Analytics product. You can specify a name for 
the feature event which is visible through Analytics.

**NOTE** The Analytics module lets you transmit some data that is stored, but 
not made accessible through the Analytics UI. To access this data, you must
sign up for the optional raw data export service. 

*The following types of data are stored but not made available through the Analytics UI:*

*   Navigation events.

*   Extra data added to feature events (the `data` parameter).

Viewing navigation events in the Analytics UI will be supported in a future version 
of the Analytics product. There is no plan to support the other event types, and they 
should not be used.

**GDPR Compliance**

The Ti.Analytics namespace in Titanium is GDPR compliant since SDK 7.2.0. End users
should be able to opt out of Analytics using the <Titanium.Analytics.optedOut> property.
If a user opted out from Analytics and you still call Analytics events, they will be ignored.

Note: This does not affect your app until you make use of the `optedOut` property. Once
enabled for your users (e.g. by having a <Titanium.UI.Switch> in your settings), you
should handle it within your app logic.

## Examples

### Custom Feature Event

This example shows how to send a feature event during an application session to indicate 
some feature that you would like to track was used.

``` js
Ti.Analytics.featureEvent('app.feature');
```

In this case, the Analytics product would show statistics about how many times the
'app.feature' event was generated.

<ApiDocs/>
