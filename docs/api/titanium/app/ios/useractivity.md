---
breadcrumbLabel: UserActivity
sidebar: auto
---

# Titanium.App.iOS.UserActivity

<ProxySummary/>

## Overview

A UserActivity object requires the `activityType` property to be specified at creation time.
Additional properties can be set either at creation or set individually after creation.

Handoff will not work in the simulator.  You must build and run on a compatible device.

Handoff functionality depends on a few things:

  * You must be logged into the same iCloud account on each device you wish to use Handoff.
  * Handoff broadcasts activities via Bluetooth LE signals, so both the broadcasting and receiving devices must have Bluetooth LE 4.0 support.
  * Connect all devices to the same Wi-Fi network.

Make sure you have two devices that are logged onto the same iCloud account.

Since iOS 12, you can also configure the UserActivity API for handling Siri Shortcuts. See the
below API's and example or refer to the [Apple Siri Shortcuts Docs](https://developer.apple.com/documentation/sirikit/donating_shortcuts?language=objc)
for details.

<ApiDocs/>
