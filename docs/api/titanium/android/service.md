---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Android/Service.yml
---
# Titanium.Android.Service

<TypeHeader/>

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

### Background Location Service Example
In order to obtain location events while the application is backgrounded a foreground service must be used.
Below is an example of a simple background location service.

tiapp.xml:
``` xml
<android>
    <manifest>
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    </manifest>
    <services>
    <service url="locationService.js"/>
    </services>
</android>
```

locationService.js:
``` js
console.log(`Background location service started.`);

// Create foreground service.
Ti.Android.currentService.foregroundNotify(
    123,
    Ti.Android.createNotification({
    contentTitle: "Background Location Service",
    contentText: "Obtaining location data...",
    contentIntent: Ti.Android.createPendingIntent({
        intent: Ti.App.Android.launchIntent || Ti.Android.createIntent(),
    })
    }),
    Ti.Android.FOREGROUND_SERVICE_TYPE_LOCATION
);
```

app.js:
``` js
const win = Ti.UI.createWindow({ backgroundColor: 'gray', layout: 'vertical' });
const backgroundServiceBtn = Ti.UI.createButton({ title: 'START BACKGROUND SERVICE' });
const listView = Ti.UI.createListView();

let count = 1;
let service = null;

// Set accuracy to high
Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;

// Enable manual configuration via location providers.
Ti.Geolocation.Android.manualMode = true;

// Define a location provider.
Ti.Geolocation.Android.addLocationProvider(
    Ti.Geolocation.Android.createLocationProvider({
        name: Ti.Geolocation.Android.PROVIDER_GPS,
        minUpdateDistance: 0,
        minUpdateTime: 5000
    })
);

function getLocation () {

    // Create location event listener.
    Ti.Geolocation.addEventListener('location', e => {

        // Create new section for location data.
        let section = Ti.UI.createListSection({ headerTitle: `#${count++} - ${new Date().toTimeString()}` });
        if (e.success) {
            if (e.coords) {
                e = e.coords;
            }

            // Insert location data.
            section.setItems([
                { properties: { title: 'LOCATION:\n' + e.latitude + ', ' + e.longitude, color: 'green' } },
                { properties: { title: 'ALTITUDE:\n' + e.altitude, color: 'green' } },
                { properties: { title: 'ACCURACY:\n' + e.accuracy, color: 'green' } }
            ]);

        } else {

            // Oops! Something bad happened.
            section.setItems([
                { properties: { title: 'ERROR:\n' + e.error, color: 'red' } }
            ]);
        }

        // Add section to listView
        listView.appendSection(section);
    });
}

function startBackgroundLocationService() {
    if (service) {
        console.log('Starting background location service...');
        service.start();
        backgroundServiceBtn.title = 'STOP BACKGROUND SERVICE';
    }
}

function stopBackgroundLocationService() {
    if (service) {
        console.log('Stopping background location service...');
        service.stop();
        backgroundServiceBtn.title = 'START BACKGROUND SERVICE';
    }
}

win.addEventListener('open', () => {

    // Request location permissions.
    Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_ALWAYS, e => {
        if (e.success) {
            getLocation();
        } else {
            alert('Could not obtain location permissions.');
        }
    });
});

backgroundServiceBtn.addEventListener('click', () => {
    if (!service) {

        // Create background location service.
        const intent = Ti.Android.createServiceIntent({ url: 'locationService.js' });
        service = Ti.Android.createService(intent);

        // Android 10+ request background location permissions.
        if (parseInt(Ti.Platform.version.split('.')[0]) >= 10) {
            Ti.Android.requestPermissions([ 'android.permission.ACCESS_BACKGROUND_LOCATION' ], e => {
                if (e.success) {
                    startBackgroundLocationService();
                } else {
                    alert('Could not obtain background location permissions.');
                }
            });
        } else {
            startBackgroundLocationService();
        }

    } else {
        stopBackgroundLocationService();
    }
});

win.add([backgroundServiceBtn, listView]);
win.open();
```

## Examples

### Hello World Service

This example shows how to create a service in JavaScript.
Your service code is included in its own JavaScript file.

In this example, the service reads data from the <Titanium.Android.Intent> which created it,
to see what it should say besides "Hello World".

File: myservice.js:
``` js
var service = Titanium.Android.currentService;
var intent = service.intent;
var message = intent.getStringExtra("message_to_echo");
Titanium.API.info("Hello World!  I am a Service.  I have this to say: " + message);
```

Register the service in tiapp.xml:
``` xml
<ti:app>
    <android xmlns:android="http://schemas.android.com/apk/res/android">
        <services>
            <service url="myservice.js" type="interval"/>
        </services>
    </android>
</ti:app>
```

Code in "regular" Titanium file to launch the service and listen for pause/resume events.
Code also stops the service after its code runs 3 times.

``` js
var intent = Titanium.Android.createServiceIntent( { url: 'myservice.js' } );
// Service should run its code every 2 seconds.
intent.putExtra('interval', 2000);
// A message that the service should 'echo'
intent.putExtra('message_to_echo', 'Titanium rocks!');

var service = Titanium.Android.createService(intent);
service.addEventListener('resume', function(e) {
    Titanium.API.info('Service code resumes, iteration ' + e.iteration);
});
service.addEventListener('pause', function(e) {
    Titanium.API.info('Service code pauses, iteration ' + e.iteration);
    if (e.iteration === 3) {
        Titanium.API.info('Service code has run 3 times, will now stop it.');
        service.stop();
    }
});
service.start();
```

Console Output:
```
[INFO] [29,1942] Service code resumes, iteration 1
[INFO] [70,2029] Hello World! I am a Service. I have this to say: Titanium rocks!
[INFO] [3,2070] Service code pauses, iteration 1
[INFO] [2,3915] Service code resumes, iteration 2
[INFO] [31,3961] Hello World! I am a Service. I have this to say: Titanium rocks!
[INFO] [5,3968] Service code pauses, iteration 2
[INFO] [2,5917] Service code resumes, iteration 3
[INFO] [27,5961] Hello World! I am a Service. I have this to say: Titanium rocks!
[INFO] [16,5980] Service code pauses, iteration 3
[INFO] [1,5981] Service code has run 3 times, will now stop it.
```

<ApiDocs/>
