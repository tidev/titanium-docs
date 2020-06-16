---
title: Mobile SDK
weight: '40'
---

# Mobile SDK

## Requirements

The examples in this page use the _**Prototype**_ library, which is included by default inside the a portal. However, the same concepts may be applied using other implementations.

## Invocation

This command executes _**asynchronously**_.

## Description

This _Mobile SDK_ commands retrieves information regarding the installed Android and iOS.
The Studio compares the detected SDKs to a set of pre-required versions we have online, and returns a JSON response that contains detailed information about the installed items, the missing ones, and the items that needs to be updated.
The _Mobile SDK_ command handler can also trigger a download and install process for _Android_, as well as an _Android_ SDK update.

## SDK Info Command

The following sample triggers a **request** for an SDK info. The _'sdk'_ variable can accept **android** and **ios** strings.

```
dispatch($H({
  controller: 'portal.mobileSDK',
  action: "getSDKInfo",
  args: [sdk].toJSON()
}).toJSON());
```

When triggered, the Studio will perform the required checks and will later on send a notification to the portal by calling a JavaScript function _**eventsDispatcher.notify()**_ and passing an _**event**_ JSON into it.

The portal should handle this by defining an _**eventsDispatcher**_ object that has a _**notify**_ function that accepts an argument.
For example (taken from the _studio3-sdk_ repository):

```javascript
var Events = {MOBILE_SDK : 'mobileSDK'};
// Creates the eventsDispatcher which contains the notify() function.
// IMPORTANT! The Studio expects the observable to be called 'eventsDispatcher', and
// expects the eventsDispatcher function to be called 'notify()'. Do not change these names.
var eventsDispatcher = new Observable();

/**
 * The Portal class
 */
var Portal = Class.create({
  initialize: function() {
    // Create the UI parts and render them
    this.sdks = new MobileSDK();
    this.sdks.render();
    // Add a Mobile SDKs observer to the dispatcher. Render the Mobile SDK table on a 'mobileSDK' events.
    eventsDispatcher.addObserver(Events.MOBILE_SDK, function(e) { portal.sdks.update(e); });
  }
});
```

The example above calls _portal.sdks.update(e);_ whenever the Studio fires a _mobileSDK_ event. The _update_ function than handles the event by reading the JSON content from it and re-render the UI.

The event that the Studio sends contains these fields:

| key | content |
| --- | --- |
| response | The event type. In this case, the studio is 'responding' an SDK-info request. |
| data | The JSON data that the Studio collected. This data holds the actual SDK info (see) |
| data.sdkName | An 'sdkName' field inside the sdk-data. This field allows the JS part to determine the SDK type that this response is referring to. |
| data.sdkInfo | The data JSON that the Studio collected for the SDK-Info request. That data may be later sent to be rendered on the UI |

```
update : function(sdkEvent) {
  if (sdkEvent["eventType"] == "response") {
    eventData = sdkEvent["data"];
    sdkName = eventData["sdkName"];
    sdkInfo = eventData["sdkInfo"];
    if(typeof (console) !== 'undefined') {
      console.log("Got an update for the " + sdkName + " SDK info.");
    }
    if (sdkName == "ios") {
      this.renderIOS(sdkInfo);
    } else if (sdkName == "android") {
      this.renderAndroid(sdkInfo);
    }
  }
},
```

### Reading the SDK-Info

The SDK-info JSON object holds the following information:

| key | content | restrictions |
| --- | --- | --- |
| installedPlatform | An array of the installed SDK platform versions (Android/iOS | None |
| requiredPlatform | An array of required SDK platform versions | None |
| sdkURL | A URL for the SDK (An installer URL for Android, or an iOS installation page | None |
| errorInfo | An **_optional_** key that holds additional error information that should be displayed | None |
| shouldUpdatePlatform | A boolean value that indicates that an update/install is needed (based on version comparison of the items above) | Android Only |
| installedPlatformTools | Android installed 'Platform Tools' version | Android Only |
| requiredPlatformTools | Android required 'Platform tools' version | Android Only |
| shouldUpdatePlatformTools | A boolean value that indicates that an update/install is needed for the Android 'Platform Tools' | Android Only |
| installedSDKTools | Android installed 'SDK Tools' version | Android Only |
| requiredSDKTools | Android required 'Platform Tools' version | Android Only |
| shouldUpdateSDKTools | A boolean value that indicates that an update/install is needed for the Android 'SDK Tools' | Android Only |
| installedAddOns | An array of installed Android 'Add-Ons' | Android Only |
| requiredAddOns | An array of required Android 'Add-Ons' | Android Only |
| shouldUpdateAddOns | A boolean value that indicates that an update/install is needed for the Android 'Add-Ons' | Android Only |
| installedAPILevels | An array of API-levels for the installed Android platforms | Android Only, TiStud 2.0.2+ |
| requiredAPILevels | An array of Android API-levels required by all of the installed Titanium SDK versions | Android Only, TiStud 2.0.2+ |
| shouldUpdateAPILevels | A boolean value that indicates that an update/install is needed for the Android platforms (API-levels) | Android Only, TiStud 2.0.2+ |
| hasJavaHome | A boolean value that indicates that the system environment contains a JAVA\_HOME setting | Android Only |
| hasJDK | A boolean value that indicates that the system has a valid JDK installed | Android Only |
| jdkURL | A JDK installer URL | Android Only |

**Example (from the studio3\_sdk repository):**

```javascript
/**
 * Render the Android SDK table, potentially replacing the previous content with an updated one.
 */
renderAndroid : function(androidVersionInfo) {
  mobileSDKDiv = $('mobileSDKs');
  with(Elements.Builder) {
    androidTable = table({
      "border": "1",
      "style": "border-collapse:collapse"
    },
    tbody(tr(
      td("Installed Platforms: "),
      td(androidVersionInfo["installedPlatforms"])),
    tr(
      td("Required Platforms: "),
      td(androidVersionInfo["requiredPlatforms"])),
    tr(
      td("Needs Platforms Update: "),
      td(androidVersionInfo["shouldUpdatePlatforms"])),
    tr(
      td("Installed Platform-Tools: "),
      td(androidVersionInfo["installedPlatformTools"])),
    tr(
      td("Required Platform-Tools: "),
      td(androidVersionInfo["requiredPlatformTools"])),
    tr(
      td("Needs Platform-Tools Update: "),
      td(androidVersionInfo["shouldUpdatePlatformTools"])),
    tr(
      td("Installed SDK-Tools: "),
      td(androidVersionInfo["installedSDKTools"])),
    tr(
      td("Required SDK-Tools: "),
      td(androidVersionInfo["requiredSDKTools"])),
    tr(
      td("Needs SDK-Tools Update: "),
      td(androidVersionInfo["shouldUpdateSDKTools"])),
    tr(
      td("Installed Add-Ons: "),
      td(androidVersionInfo["installedAddOns"])),
    tr(
      td("Required Add-Ons: "),
      td(androidVersionInfo["requiredAddOns"])),
    tr(
      td("Needs Add-Ons Update: "),
      td(androidVersionInfo["shouldUpdateAddOns"])),
    tr(
      td("SDK-Tools URL: "),
      td(androidVersionInfo["sdkURL"])),
    tr(
      td("Has JAVA_HOME Setting: "),
      td(androidVersionInfo["hasJavaHome"])),
    tr(
      td("Has JDK: "),
      td(androidVersionInfo["hasJDK"])),
    tr(
      td("JDK URL: "),
      td(androidVersionInfo["jdkURL"]))
    ));
    // Create a div that wraps all of it, so we can easily replace the children on
    // render calls that were made as a result of an event handling.
    wrapperDiv = div({
      'id': 'androidSDKDiv'
    });
    wrapperDiv.appendChild(div({
      "style": "color: red"
    }, "=== Android ==="));
    wrapperDiv.appendChild(androidTable);

    // An install/update Android link.
    // Note that for iOS we should just show install instructions.
    wrapperDiv.appendChild(div({
      "style": "color: red"
    }, "=== Android Install/Update ==="));
    installOrUpdate = table(tbody(tr(td(a({
      'href' : '#'
    }, "Install/Update Android")))));
    wrapperDiv.appendChild(installOrUpdate);

    var prevContent = $('androidSDKDiv');
    if(prevContent) {
      mobileSDKDiv.replaceChild(wrapperDiv, prevContent);
    } else {
      mobileSDKDiv.appendChild(wrapperDiv);
    }
    installOrUpdate.observe('click', function(e) {
      if( typeof (console) !== 'undefined' && typeof (dispatch) !== 'undefined') {
        console.log("Dispatching the 'execute' action on the 'portal.mobileSDK' controller...");
        dispatch($H({
          controller: 'portal.mobileSDK',
          action: "installOrUpdateSDK",
          args: ["Android"].toJSON()
        }).toJSON());
      }
      return false;
    });
  }
},
```

## Trigger an Install/Update

To trigger an SDK installation or Update, all that needs to be done is to call the _**installOrUpdateSDK**_ action, and passing the SDK type as an argument.
For Example:

```
dispatch($H({
  controller: 'portal.mobileSDK',
  action: "installOrUpdateSDK",
  args: ["Android"].toJSON()
}).toJSON());
```

For the Android installer, you may choose to force the installer UI even when the installed SDK matches the requirements. You do so by passing _'true'_ as a second command argument.

```
dispatch($H({
  controller: 'portal.mobileSDK',
  action: "installOrUpdateSDK",
  args: ["Android", true].toJSON()
}).toJSON());
```

(The example in the sections above shows the integration of this code when observing the link _click_ event)

## Trigger a SDK refresh

To trigger a 'manual' refresh for a specific SDK, all that needs to be done is to call the _**refreshSDK**_ action, and passing the SDK type as an argument.
For Example:

```
dispatch($H({
  controller: 'portal.mobileSDK',
  action: "refreshSDK",
  args: ["Android"].toJSON()
}).toJSON());
```

## MobileWeb Browser Check

The _getSDKInfo_ call, when called with a _'MobileWeb'_ argument, will perform a Browser check and will return a data set that contains information about the required and the detected browsers.
The call will compare the browsers that are set in the Studio's preferences to the browsers and versions required by the MobileWeb. When a mismatch is detected, the Studio will run a detection process that will update the preferences. After that detection, another check is made before returning a JSON response to the caller.

| key | content | restrictions |
| --- | --- | --- |
| installedBrowsers | An array of the installed browsers versions | None |
| requiredBrowsers | An array of required browsers versions (read from the sdk\_info.json) | None |
| shouldUpdateBrowsers | A boolean value that indicates that an update/install is needed (based on version comparison of the items above) | None |

### Note

This action is synchronous, and the returned value will include all the available SDK versions that were detected after refreshing the specified SDK loader.

_Usage example:_ When installing an iOS SDK, a user might want to hit the refresh link to check if the SDK was detected by the Studio after the installation.
