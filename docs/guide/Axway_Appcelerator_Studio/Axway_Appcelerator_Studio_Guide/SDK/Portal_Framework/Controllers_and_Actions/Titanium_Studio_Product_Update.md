---
title: Titanium Studio Product Update
weight: '120'
---

# Titanium Studio Product Update

## Requirements

The examples in this page use the **_Prototype_** library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Description

This command checks for any updates available for the **_Titanium Studio Product_** . When a _dispatch_ request for a check is made, the Studio will access the Titanium Studio update site and will check for any available updates. A post-check event will then be fired from the Studio. The event will old the information regarding any available update.

## Invocation

This command is executed **_asynchronously_** .

## Checking for Titanium Studio updates

This is the _dispatch_ call for the check for updates.

```
dispatch($H({
  controller: 'portal.titanium.studio.update',
  action: "checkForUpdate"
}).toJSON());
```

When triggered, the Studio will perform the required checks and will later on send a notification to the portal by calling a JavaScript function **_eventsDispatcher.notify()_** and passing an **_event_** JSON into it.

The portal should handle this by defining an **_eventsDispatcher_** object that has a **_notify_** function that accepts an argument.
For example (taken from the _studio3-sdk_ repository):

```javascript
var Events = {TITANIUM_STUDIO_UPDATE : 'studioUpdate'};
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
    this.updates = new Updates();
    this.updates.render();
    // Add a Mobile SDKs observer to the dispatcher. Render the Mobile SDK table on a 'mobileSDK' events.
    eventsDispatcher.addObserver(Events.TITANIUM_STUDIO_UPDATE , function(e) { portal.tiStudioUpdates.update(e); });
  }
});
```

The example above calls _portal.tiStudioUpdates.update(e);_ whenever the Studio fires a _studioUpdate_ event. The _update_ function than handles the event by reading the JSON content from it and re-render the UI.

The event that the Studio sends contains these fields:

| key | content |
| --- | --- |
| event.data.status | Indicate the status of the check. Can hold the following values: 'ok', 'processing', 'error', 'incomplete' or 'unknown' |
| event.data.installedVersion | The currently installed Titanium Studio version |
| event.data.needsUpdate | A boolean indication that an update is available |
| event.data.availableUpdateVersion | The available update version for Titanium Studio (non-empty when _'needsUpdate'_ is _'true'_) |

::: warning ⚠️ Warning
When the _event.data.installedVersion_, for example, is _undefined_, the _event.data.status_ will indicate the stage of the command. The studio will fire multiple events after the dispatch call, and it's up to the JavaScript call to handle those and render the UI accordingly (for example, show a spinning wheel when the _processing_ status is received).

The **_studio3\_sdk_** repository contains a complete example of handling these events and tunneling them to the UI (see _updates.js_)
:::

## Installing a Titanium Studio update

When the Studio indicates that a Titanium Studio update is available, a displayed link can activate the _action_ to open the Studio's update dialog.

Here is the _dispatch_ call that does that:

```
dispatch($H({
  controller: 'portal.titanium.studio.update',
  action: "installUpdate"
}).toJSON());
```
