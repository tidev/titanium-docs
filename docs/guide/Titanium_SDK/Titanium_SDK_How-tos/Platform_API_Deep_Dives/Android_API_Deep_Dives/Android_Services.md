---
title: Android Services
weight: '40'
---

# Android Services

## Introduction

An Android service is a component started by an application that runs in the background. The service does not have any application UI associated with it, so the user does not directly interact with it, only your application. The service continues to run if the user backgrounds the application, such as when switching to a different application or hitting the **Home** button.

The Titanium SDK gives you the ability to write your own Android Services using JavaScript but with some limitations:

* Can only run at intervals that you specify (or only once).

* Can only be started programmatically by the Titanium application that defined it. They cannot be declared in the Android manifest and started by a separate application.

* May stop running if the application is killed, even though the service is restarted.

## Types of services

In Android, services can either be started or bound:

* A _started service_ is a service started by the application, but the application has no direct reference to the service. It runs freely in the background. If the application is destroyed, the service continues to run.

* A _bound service_ is a service started by the application, where the application binds itself to the service. If the application is destroyed, the service is destroyed.

In Titanium, there really is not a distinction between the two services. The only difference is:

* A started service is a service created and started by a Titanium application and may stop running if the application is destroyed.

* A bound services is a service created by a Titanium application, which returns a reference to a Service object that the application can invoke methods on to start and stop the service, and bind callbacks to.

These services are discussed in more detail below.

## Create a JavaScript service

To create a JavaScript service:

1. Create a JavaScript file with the code to execute.

2. Declare the JavaScript file as a service in the `tiapp.xml` file.

3. Create a service intent referencing the JavaScript file using the `Titanium.Android.createServiceIntent()` method and set the interval to run the code using the intent's `putExtra()` method, then:

    * Start a started service using the intent using the `Titanium.Android.startService()` method.

    * Create a bound service using the intent with the `Titanium.Android.createService()` method and start the bound service using the service's `start()` method.

### Service code

Code your JavaScript service using the Titanium APIs, specifically the non-UI APIs, such as `Ti.API.info()` or `Ti.Network.createHTTPClient()`.

Place the file in either the `app/lib` folder for Alloy projects or the `Resources` folder for classic Titanium projects. You can place the file in subfolders within either of those folders. When referencing the file URL, do not include the `app/lib` or `Resources` folder, or start the URL with a slash ('/').

Use the `Titanium.Android.Service` API to manage to the service. To get a reference to the service, use the `Titanium.Android.currentService` property inside the JavaScript service code to retrieve a reference to the service, then invoke the `Titanium.Android.Service` APIs on the `Service` object. With the `Service` object, you can:

* Use the`intent` property to retrieve the intent that started the service to get extra data that was added to the intent.

* Use the `serviceInstanceId` property to retrieve the instance ID of the service. A service can be started multiple times and have multiple instances running.

* Invoke the `start()` method to start the service. Only used with bound services.

* Invoke the `stop()` method to stop the service.

* Monitor the `pause` event to know when the service enters the pause state. Fired when the code finishes executing.

* Monitor the `resume` event to know when the service enters the resume state. Fired when the code is executed.

* Monitor the `start` event to know when the service starts. Only used with bound services.

* Monitor the `stop` event to know when the service stops. Only used with bound services.

* Monitor the `taskremoved` event to know if the application that started the service is destroyed. Only used with started services.

::: tip 💡 Hint
To retrieve extras sent with the intent, call the intent's `hasExtra()` method and pass it the property to retrieve to verify the data exists, then call one of the intent's `get*Extra()` methods and pass it the same property name to retrieve the data.

The example below checks for EXTRA\_TEXT data sent with the intent.

```javascript
var extra;
if (intent.hasExtra(Ti.Android.EXTRA_TEXT) && (extra = intent.getStringExtra(Ti.Android.EXTRA_TEXT))) {
    // Do something with the extra
}
```

**Please ask your Confluence administrator to update the license for the [MultiExcerpt Plugin for Confluence 4+](https://plugins.atlassian.com/plugins/biz.artemissoftware.confluence.multiexcerpt.MultiExcerptMacro) .**
**Admin Info: The error is: license VERSION\_MISMATCH**
:::

The example below demonstrates the usage of some of the service APIs. The service monitors some of its events and stops itself after ten iterations.

**someService.js**

```javascript
// Grab a reference to the service and its intent
var service = Ti.Android.currentService;
var serviceIntent = service.intent;

Ti.API.info(service.serviceInstanceId);

// Bind event listeners to the service
if (!Ti.App.Properties.getBool('bind')) {

    Ti.App.Properties.setInt('inc', 0);

    service.addEventListener('taskremoved', function(){
        Ti.API.info('**************************** taskremoved fired');
    });
    service.addEventListener('pause', function(){
        Ti.API.info('**************************** pause fired');
    });
    service.addEventListener('resume', function(){
        Ti.API.info('**************************** resume fired');
    });

    Ti.App.Properties.setBool('bind', true);
}

var count = Ti.App.Properties.getInt('inc') || 0;
if (count >= 10) {
    // Stop the service
    service.stop(serviceIntent);
} else {
    Ti.App.Properties.setInt('inc', ++count);
}
```

### Declare a service

For both started and bound services, you need to declare the JavaScript file as a service in the `tiapp.xml` file.

**To declare a service:**

1. Add the `<services>` element as a child of the `<android>` element.

2. For each service, add a `<service>` element as a child of the `<services>` element. Set the `url` attribute to the URL of the JavaScript file and the `type` attribute to `interval`. Currently, `interval` is the only supported type, which indicates the code will be run at intervals. The interval is set when creating the service intent.

**tiapp.xml**

```xml
<ti:app>
    <android>
        <services>
            <service url='someService.js' type='interval'/>
        </services>
    </android>
</ti:app>
```

### Started services

A started service is a service created **and** started using the `Titanium.Android` API. The application creates an intent referencing the JavaScript code to run as a service, then starts the service. The service self manages itself after it starts.

#### Create a service intent

To create a started service, create a service intent with the `Titanium.Android.createServiceIntent()` method. Pass the method a dictionary with the `url` property set to the URL of the JavaScript file that contains the code the application wants to run as a service. You can optionally set the `startMode` property to either:

* `Titanium.Android.START_REDELIVER_INTENT`: Indicates to restart the service with the original intent if the application is destroyed. (Default)

* `Titanium.Android.START_NOT_STICKY`: Indicates not to restart the service if the application is destroyed.

To pass data to the service, use the Intent object's `putExtra()` method to add extras to the intent. For details, see [Android Intents: Add extra data](/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Intents/#add-extra-data).

To set the interval for the service, use the `putExtra` `()` method, and set the property name to `interval` and the value to how often to call the code in milliseconds.

The example below creates an intent to call the service every ten seconds.

```javascript
var SECONDS = 10; // every 10 seconds
var intent = Titanium.Android.createServiceIntent({
  url: 'someService.js'
});
intent.putExtra('interval', SECONDS * 1000); // Needs to be milliseconds
```

#### Start a started service

To start a started service, pass the `Titanium.Android.startService()` method a service intent object.

```
Titanium.Android.startService(intent);
```

#### Stop a started service

To stop a started service from the application, pass the `Titanium.Android.stopService()` method the service intent object that was passed to the `startService()` method.

::: tip 💡 Hint
The service can stop itself by retrieving a reference to itself and calling its `stop()` method.

```
Ti.Android.currentService.stop();
```
:::

```
Titanium.Android.stopService(intent);
```

#### Monitor started services

The application can see if the service is still running by calling the `Titanium.Android.isServiceRunning()` method and pass it the intent object that created the service.

The example below checks to see if the intent was used to start a service that is currently running. If not, it will start the service.

```
if (!Ti.Android.isServiceRunning(intent)) {
    Ti.Android.startService(intent);
} else {
    Ti.API.info('Service is already running.');
}
```

### Bound services

A bound service is a service only created using the `Titanium.Android` API. The application can manage the service using the `Titanium.Android.Service` API to invoke the `start()` and `stop()` methods on it as well as bind some event callbacks to it.

#### Create a bound service

To create a bound service, create a service intent with the`Titanium.Android.createServiceIntent()` method, then pass the intent to the `Titanium.Android.createService()` method to create a `Service` object.

**To create a service intent**, pass the method a dictionary with the `url` property set to the URL of the JavaScript file that contains the code the application wants to run as a service. You can optionally set the `startMode` property to either:

* `Titanium.Android.START_REDELIVER_INTENT`: Indicates to restart the service with the original intent if the application is destroyed. (Default)

* `Titanium.Android.START_NOT_STICKY`: Indicates not to restart the service if the application is destroyed.

To pass data to the service, use the Intent object's `putExtra()` method to add extras to the intent. For details, see [Android Intents: Add Extra Data](/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Intents/#AddExtraData).

To set the interval for the service, use the `putExtra` `()` method, and set the property name to `interval` and the value to how often to call the code in milliseconds.

**To create the Service object**, pass the `Titanium.Android.createService()` method the service intent object.

The example below creates an intent to call the service every ten seconds, then creates the service object.

```javascript
var intent = Ti.Android.createServiceIntent({
  url: 'someService.js'
});
intent.putExtra('interval', SECONDS * 1000);
var service = Ti.Android.createService(intent);
```

#### Manage the bound service

Use the `Titanium.Android.Service` API to manage some aspects of the bound service.

**To start or stop the service**, call the Service object's `start()` or `stop()` methods, respectively.

```
service.start();
// Do stuff
service.stop();
```

**To monitor when the service starts or stops**, the application can bind event listeners to the `start` and `stop` events.

```
service.addEventListener('start', doSomething);
service.addEventListener('stop', doSomethingElse);
```

## Simple service example

This example shows a simple started service which does nothing other than write to logcat (the Android log). Not exciting, but it's a complete example from A to Z.

### Write your service Javascript code

Remember, these simple services execute code on an interval. The code that executes is defined by you in a JavaScript file, just like when you define other Titanium executable code. Create an application and add a file named (for this example) `logservice.js` into the `app/lib` folder for Alloy projects or `Resources` folder for classic Titanium projects. Open the `logservice.js` file in an editor and add the following code:

```
Titanium.API.info('Hello World, I am a Service');
```

You can do all sorts of things in that JavaScript file, and everything you put in it will run every **N** milliseconds.

### Update the tiapp.xml

You need to let the Titanium builder know that this Javascript file you just created is meant to be the code that executes when a Service runs.

1. Open the project's `tiapp.xml` and add a `<services>` element under the `<android>` element.

2. Next, add a `<service>` element under the `<services>` element. Assign the `url` attribute the name of the JavaScript file, which is `logservice.js` and assign the `type` attribute to `interval`

```xml
<ti:app>
  <android xmlns:android="http://schemas.android.com/apk/res/android">
    <services>
      <service url="logservice.js" type="interval"/>
    </services>
  </android>

</ti:app>
```

At this point, you've successfully defined the service. If you were to build your app right now and check the generated `AndroidManifest.xml` in the `build/android` folder, you would see an entry for the service:

```xml
<service android:name="com.billdawson.logservicedemo.LogserviceService"/>
```

### Write some code to start the service

As we noted up in the introduction, one caveat about these simple services is that they are pretty much bound to the Titanium application in which you create them. In other words, the services will not get started and run successfully unless you start them from code inside the same application in which you define them. Modify your project's `app/alloy.js` file for Alloy projects or `app.js` file for classic Titanium projects to start the service.

For purposes of this example, all of the code examples that follow can just be put down at the bottom of your app's file so they run when the app starts.

First, create an intent in which we specify the JavaScript file to start using the `url` property, and the interval (in milliseconds) at which it should run the code in its JavaScript file. Use `Ti.Android.createServiceIntent()` to make the intent, then add the interval information to it using the intent's `putExtra()` method:

```javascript
var SECONDS = 10; // every 10 seconds
var intent = Titanium.Android.createServiceIntent({
  url: 'logservice.js'
});
intent.putExtra('interval', SECONDS * 1000); // Needs to be milliseconds
```

With the intent in hand, we need to tell Android to start the service defined by the intent:

```
Titanium.Android.startService(intent);
```

That's it! Go ahead and start your application in an emulator or on your phone.

### Write some code to stop the service

Notice we did not write any code yet to actually **stop** the service once it's running. You can do that by calling `Titanium.Android.stopService()` by passing it an intent that has the same information (or even the same intent object). (You do not need to set the "interval" extra in the intent if you are just stopping the service.)

```javascript
var intent = Titanium.Android.createServiceIntent({
  url: 'logservice.js'
});
Titanium.Android.stopService(intent);
```

### Testing notes

While you are testing your service you can back out completely from the application, and the service should still continue to run and emit the "Hello World" statements to the log. However, if you back out of the application then launch it again, the service will get started a _second_ time, because your `app.js` code will run again and call `Titanium.Android.startService()`. Behind the scenes, there is only one instance of the Service running (in Android terms, its `onCreate()` has occurred only once, but it has been "started" twice, that is, its `onStart()` has occurred twice). A new set of intervals will then queue up and your service code will run double the number of times. This may not be what you want, so you can call `Titanium.Android.isServiceRunning()` by passing it the same intent that you would use to start the service. Then you can conditionally start it only if it is not already running.

## Other examples

See the following for other examples of services:

* KitchenSink's [android\_services.js](https://github.com/tidev/KitchenSink/blob/stable/Resources/ui/handheld/android/platform/android_services.js) script

## Further reading

* [Titanium.Android API Reference](#!/api/Titanium.Android)

* [Android Developer: Services](http://developer.android.com/guide/components/services.html)
