---
title: Titanium.Android.Service
properties:
  - name: intent
    type: Titanium.Android.Intent
    summary: The intent used to start or bind to the Service.
  - name: serviceInstanceId
    type: Number
    summary: >
      A service can be started more than once -- this number (based on an
      incrementing integer)<br>

      indicates which &quot;start number&quot; in the sequence the current
      service instance is.<br>
methods:
  - name: foregroundCancel
    summary: >-
      Puts the service into the &quot;background&quot; state and removes its
      foreground notification.
    description: >
      <p>If you call the <a
      href="Titanium.Android.Service.foregroundNotify">foregroundNotify()</a>
      method to<br>

      put the service into the &quot;foreground&quot; state, then you call this
      method to put the service<br>

      back into the &quot;background&quot; state. This will also automatically
      remove the foreground service's<br>

      notification that was put into the status bar.</p>

      <p>Note that stopping a foreground service will remove its foreground
      notification from<br>

      the status bar as well. So, you do not have to call this method to remove
      it. This method<br>

      is only intended to be used by services that need to dynamically change
      states.</p>
  - name: foregroundNotify
    summary: >-
      Puts the service into the &quot;foreground&quot; state and displays a
      notification.
    description: >
      <p>Calling this method will change the service from the
      &quot;background&quot; state (the default)<br>

      to the &quot;foreground&quot; state. It will also post a notification to
      the status bar to notify the<br>

      end-user that the app is doing work, even while backgrounded. This feature
      is typically<br>

      used by apps that play music, monitor current location, or perform large
      downloads while<br>

      the app is in the background.</p>

      <p>Note that a foreground service is far less likely to be terminated by
      the operating system<br>

      while the app is in the background. A foreground service is also needed if
      the app<br>

      needs to acquire location data since Android 8.0 and higher throttles
      location acquisition<br>

      while the app is in the background.</p>

      <p>See Android 8.0 &quot;Background Execution Limits&quot;:</p>

      <ul>

      <li>https://developer.android.com/about/versions/oreo/background</li>

      </ul>

      <p>You can call this method before or after the service has been started.
      If you need to<br>

      change the displayed notification, then you can call this method again
      with the same<br>

      notification ID and with an updated [notification]<a
      href="/api/titanium/android/notification">Titanium.Android.Notification</a>
      object.</p>

      <p>The notification will be automatically removed from the status bar when
      the service has<br>

      been stopped or if you call the <a
      href="Titanium.Android.Service.foregroundCancel">foregroundCancel()</a><br>

      method.</p>

      <p>This method will fail on Android 9.0 and above unless you set the
      following Android manifest<br>

      permission in your &quot;tiapp.xml&quot; file.</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;ti:app&gt;
          &lt;android xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;&gt;
              &lt;manifest&gt;
                  &lt;uses-permission android:name=&quot;android.permission.FOREGROUND_SERVICE&quot;/&gt;
              &lt;/manifest&gt;
          &lt;/android&gt;
      &lt;/ti:app&gt;

      </code></pre></div>
    parameters:
      - name: id
        type: Number
        summary: Unique integer ID to be assigned to the notification. Cannot be zero.
      - name: notification
        type: Titanium.Android.Notification
        summary: Notification to display in the status bar. Cannot be null.
      - name: foregroundServiceType
        type: Number
        summary: >-
          Notification service type specified by
          &lt;Titanium.Android.FOREGROUND_SERVICE_TYPE_*&gt;.
        optional: true
  - name: start
    summary: Starts the Service.
    description: >
      <p>Effective only if this instance of <a
      href="/api/titanium/android/service">Titanium.Android.Service</a> was
      created<br>

      with <a
      href="/api/titanium/android">Titanium.Android.createService</a>.</p>
  - name: stop
    summary: Stops this running instance of the Service.
events:
  - name: pause
    summary: >
      For Javascript-based services that you create, <code>pause</code> fires
      after each time the JavaScript<br>

      code executes.<br>
    description: >
      <p>The <code>resume</code> and <code>pause</code> events occur in pairs,
      with <code>resume</code> firing just before your<br>

      JavaScript service code executes, and <code>pause</code> just after.</p>
    properties:
      - name: iteration
        type: Number
        summary: >
          Incrementing integer indicating which iteration of an interval-based
          Service is pausing.<br>

          For example, if you have an interval-based Service running every 10
          seconds, iteration<br>

          3 would occur at about 30 seconds after you start the instance
          (assuming your service<br>

          code runs quickly).<br>
  - name: resume
    summary: >
      For JavaScript-based Services which you create, <code>resume</code> fires
      each time the JavaScript<br>

      code executes.<br>
    description: >
      <p>For example, if your Service runs on an interval of 10000 (10 seconds),
      you would expect<br>

      to see <code>resume</code> fired every 10 seconds, just as the JavaScript
      service code you wrote is<br>

      about to execute.</p>
    properties:
      - name: iteration
        type: Number
        summary: >
          Incrementing integer indicating which iteration of an interval-based
          Service is pausing.<br>

          For example, if you have an interval-based Service running every 10
          seconds, iteration<br>

          3 would occur at about 30 seconds after you start the instance
          (assuming your service<br>

          code runs quickly).<br>
  - name: start
    summary: Fired when the bound service instance starts.
    description: >
      <p>Bound service instances are created via <a
      href="/api/titanium/android">Titanium.Android.createService</a>.</p>
  - name: stop
    summary: Fired when the bound service instance stops.
    description: >
      <p>The service stops when <a
      href="/api/titanium/android/service">Titanium.Android.Service.stop</a>
      or<br>

      <a href="/api/titanium/android">Titanium.Android.stopService</a> is called
      and there are no more bound,<br>

      un-stopped clients.</p>
  - name: taskremoved
    summary: >-
      Fired when the task that comes from the service's application has been
      removed.
    description: >
      <p>This event is fired if the service is currently running and the user
      has removed a task<br>

      that comes from the service's application, e.g. the user swipes the
      application away from<br>

      the recent applications list. It only works for unbound service which
      is<br>

      started using <a
      href="/api/titanium/android">Titanium.Android.startService</a>.</p>
examples:
  - title: Hello World Service
    code:
      - content: >-
          var service = Titanium.Android.currentService;

          var intent = service.intent;

          var message = intent.getStringExtra("message_to_echo");

          Titanium.API.info("Hello World!  I am a Service.  I have this to say:
          " + message);
        language: js
      - content: |-
          <ti:app>
              <android xmlns:android="http://schemas.android.com/apk/res/android">
                  <services>
                      <service url="myservice.js" type="interval"/>
                  </services>
              </android>
          </ti:app>
        language: xml
      - content: >-
          var intent = Titanium.Android.createServiceIntent( { url:
          'myservice.js' } );

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
        language: js
      - content: >-
          [INFO] [29,1942] Service code resumes, iteration 1

          [INFO] [70,2029] Hello World! I am a Service. I have this to say:
          Titanium rocks!

          [INFO] [3,2070] Service code pauses, iteration 1

          [INFO] [2,3915] Service code resumes, iteration 2

          [INFO] [31,3961] Hello World! I am a Service. I have this to say:
          Titanium rocks!

          [INFO] [5,3968] Service code pauses, iteration 2

          [INFO] [2,5917] Service code resumes, iteration 3

          [INFO] [27,5961] Hello World! I am a Service. I have this to say:
          Titanium rocks!

          [INFO] [16,5980] Service code pauses, iteration 3

          [INFO] [1,5981] Service code has run 3 times, will now stop it.
        language: ''
    intro: >-
      This example shows how to create a service in JavaScript.

      Your service code is included in its own JavaScript file.


      In this example, the service reads data from the <Titanium.Android.Intent>
      which created it,

      to see what it should say besides "Hello World".


      File: myservice.js:
---

# Titanium.Android.Service

Android application component that executes in the background.

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
     the [Titanium.Android.createServiceIntent](/api/titanium/android) method and set the interval to run the
     code using the intent's `putExtra()` method.
  4. Pass the Intent object to either the [Titanium.Android.createService](/api/titanium/android) method
     to create a `Service` object (*bound service*), where the application can
     manage the service by invoking methods and binding callbacks on the object,
     or to the [Titanium.Android.startService](/api/titanium/android) method to start the service (*started service*)
     and the service manages itself.

Use the `Titanium.Android.Service` API to manage the service.

To get a reference to the `Service` inside the JavaScript service code, use the
[Titanium.Android.currentService](/api/titanium/android) property to retrieve a reference to the service,
then invoke the `Titanium.Android.Service` APIs on the `Service` object.

Further Reading:

  * [Android Services guide](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Services.html)
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
            section.items = [
                { properties: { title: 'LOCATION:\n' + e.latitude + ', ' + e.longitude, color: 'green' } },
                { properties: { title: 'ALTITUDE:\n' + e.altitude, color: 'green' } },
                { properties: { title: 'ACCURACY:\n' + e.accuracy, color: 'green' } }
            ])

        } else {

            // Oops! Something bad happened.
            section.items = [
                { properties: { title: 'ERROR:\n' + e.error, color: 'red' } }
            ];
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


**Extends:** `Titanium.Proxy` · **Since:** 1.5 · **Platforms:** android

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

