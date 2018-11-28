---
breadcrumbLabel: Service
sidebar: auto
---

# Titanium.Android.Service

<ProxySummary/>

## Overview

A service is a component started by an application that runs in the background. The service
does not have any application UI associated with it, so the user does not directly interact
with it, only your application.

The Titanium SDK gives you the ability to write your own Android Services using JavaScript.
The service executes your JavaScript code at intervals you specify.  Note that the service
may stop running if the application is killed.

To create a service:

  1. Write the JavaScript code you want the service to execute in a separate file.
     The service can execute any Titanium APIs but you should only use non-UI APIs.
  2. Register the service in your `tiapp.xml` file. Refer to the example below.
  3. Create a service intent by passing the JavaScript file to
     the <Titanium.Android.createServiceIntent> method and set the interval to run the
     code using the intent's `putExtra()` method.
  4. Pass the Intent object to either the <Titanium.Android.createService> method
     to create a `Service` object (*bound service*), where the application can
     manage the service by invoking methods and binding callbacks on the object,
     or to the <Titanium.Android.startService> method to start the service (*started service*)
     and the service manages itself.

Use the `Titanium.Android.Service` API to manage the service.

To get a reference to the `Service` inside the JavaScript service code, use the
<Titanium.Android.currentService> property to retrieve a reference to the service,
then invoke the `Titanium.Android.Service` APIs on the `Service` object.

Further Reading:

  * [Android Services guide](https://docs.appcelerator.com/platform/latest/#!/guide/Android_Services)
  * [Android Developer: Service](https://developer.android.com/reference/android/app/Service.html)

<ApiDocs/>
