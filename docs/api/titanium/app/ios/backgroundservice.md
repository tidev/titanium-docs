---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/App/iOS/BackgroundService.yml
---
# Titanium.App.iOS.BackgroundService

<TypeHeader/>

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

## Examples

### Background Services Example

Two background services are registered in the following application.

The first service logs a message every time the application is paused and then is stopped to 
release the service from memory. The service is not unregistered, and so will continue to be 
invoked.

The second creates an application property where it stores a run count value. For the first 4 
times the application is paused, a local notification is invoked that gives the user the 
opportunity to bring the application back to the foreground. Once the run count reaches 5, 
the service is unregistered and is not invoked again until the application is relaunched.

#### app.js
``` js
var win1 = Ti.UI.createWindow({  
  title:'Background Services Example',
  backgroundColor:'#4186cd',
  modal:true
});

Ti.API.info('Registering background services');
var service = Ti.App.iOS.registerBackgroundService({url:'bg-service1.js'});
var service2 = Ti.App.iOS.registerBackgroundService({url:'bg-service2.js'});
Ti.API.info('*** Press home button to pause application ***');

win1.open();
```
    
#### bg-service1.js
``` js
Ti.API.info('bg-service1: service has been invoked once, and will now be stopped to release it from memory. ');
Ti.App.currentService.stop();

var listener = Ti.App.currentService.addEventListener('stop',function(){
  Ti.API.info('bg-service1: Although the service has been stopped, it is still registered and will be executed again on next pause');
  Ti.API.info('bg-service1: As all background services are automatically stopped on resume, it is not always necessary to explicitly stop a service');
});
```

#### bg-service2.js
``` js
var count = Ti.App.Properties.getInt('bg-svc2-count', 0);

if (count > 4){
  // reset count after 4 invocations
  count = 0;
}

count++;

Ti.App.Properties.setInt('bg-svc2-count', count);

Ti.API.info('bg-service2 has been run ' + count + ' times');

if (count > 4){
  Ti.App.currentService.unregister();
  var finalNotif = Ti.App.iOS.scheduleLocalNotification({
    alertBody:'bg-service2: As service has been invoked more than 4 times, it has been unregistered and will NOT run again. Relaunch the app to re-register it',
    date:new Date(new Date().getTime() + 1000) // 1 second after unregister
  });	
} else {
  var curNotif = Ti.App.iOS.scheduleLocalNotification({
    alertBody:'bg-service2: has been invoked ' + count + ' times. It is still registered and will run again when the app is transitioned to the background',
    date:new Date(new Date().getTime() + 1000) // 1 second after pause
  });	
}
```

<ApiDocs/>
