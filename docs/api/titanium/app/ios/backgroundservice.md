---
breadcrumbLabel: BackgroundService
sidebar: auto
---

# Titanium.App.iOS.BackgroundService

<ProxySummary/>

## Overview

A background service is created by <Titanium.App.iOS.registerBackgroundService>.  

At creation, a local URL to a JavaScript file must be defined. The code it contains is executed 
each time the application is no longer in the foreground, along with all other services that have 
been registered in the same way. When this happens, all background services continue to run until 
one of the following occurs:

* A service is stopped with the `stop` method.
* The application resumes, at which points all background services are stopped.
* The OS terminates the service for one of the reasons discussed in 
"Background Service Limitations", below.

A background service can invoke a <Titanium.App.iOS.LocalNotification>, which prompts users via 
a dialog to return to the application and provides a button that brings it back into the 
foreground.

### Background Service Limitations

A background service is subject to limitations imposed by the operating system, such as

* The OS limits the total amount of time a background service can run for after the application 
is paused, typically to no more than 10 minutes.
* The OS may terminate the background service at any point to reclaim resources.

<ApiDocs/>
