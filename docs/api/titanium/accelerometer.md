---
breadcrumbLabel: Accelerometer
sidebar: auto
---

# Titanium.Accelerometer

<ProxySummary/>

## Overview

An accelerometer is a hardware unit integrated into a mobile device, that detects when the 
device has moved, and returns its new orientation in a three-dimensional space. With its 
single `update` event, this module provides an interface to access the output positional data.

An accelerometer needs to be switched on in order for it to report to the operating system, 
which consumes a lot of power that will deplete the battery over time. This is why it is 
recommended that the accelerometer is switched off when not in use.

The accelerometer may be switched on and off by simply adding and removing the `update` 
event listener function. See the example for a demonstration.

<ApiDocs/>
