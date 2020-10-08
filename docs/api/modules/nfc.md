---
editUrl: https://github.com/appcelerator-modules/ti.nfc/edit/master/apidoc/Nfc.yml
---
# Modules.Nfc

<TypeHeader/>

## Overview

This module provides access to Near Field Communication (NFC) functionality, 
allowing applications to read and write (Android-only) NFC tags. 
A "tag" may actually be another device that appears as a tag.

### NFC Resources

- **Android**
  - [Near Field Communication](http://developer.android.com/guide/topics/connectivity/nfc/index.html)
  - [android.nfc](http://developer.android.com/reference/android/nfc/package-summary.html)
- **iOS**
  - [CoreNFC](https://developer.apple.com/documentation/corenfc)
  - [Introduction to CoreNFC at WWDC17](https://developer.apple.com/videos/play/wwdc2017/718/)
  - [Native example](https://github.com/hansemannn/iOS11-NFC-Example)

### Requirements

- **Android**
  - Android 4.1 (API 16) and later
  - An NFC capable device

- **iOS**
  - iOS 11 and later
  - iPhone 7 / iPhone 7 Plus and later

### Getting Started

-   View the [Using Titanium Modules](http://docs.appcelerator.com/platform/latest/#!/guide/Using_Titanium_Modules) 
    document for instructions on getting started with using this module in your application.
    
### Configure iOS: Capabilities and Provisioning Profiles

-   Required capabilities:

    ``` xml
    <key>com.apple.developer.nfc.readersession.formats</key>
    <array>
        <string>NDEF</string>
    </array>
    ```

-   Provisioning Profile entitled with the NFC Tag Reading capability

### Configure Android: Tag Dispatching and Intent Filters

-   The Android [tag dispatch system](http://developer.android.com/guide/topics/connectivity/nfc/nfc.html#tag-dispatch)
    is responsible for dispatching NFC messages to the appropriate application. In the
    situation where you are not using foreground dispatching, you will need to define intent-filters in the 
    tiapp.xml file to specify which types of NFC messages the application wants to receive. By using intent-filters in
    the tiapp.xml file, the application will be automatically started if a matching
    NFC message is dispatched. 

    Add code similar to the following to your tiapp.xml file:

    - Replace occurrences of the activity name (`Tagviewer`) with your activity name.
    - Add the NFC permissions to your Android configuration
    - Replace the NFC specific intent filters with filters appropriate for your application.

        ``` xml
        <android xmlns:android="http://schemas.android.com/apk/res/android">
            <manifest>
                <!-- Required NFC permissions -->
                <uses-permission android:name="android.permission.NFC" />
                <uses-feature android:name="android.hardware.nfc" android:required="true" /> 
                
                <!-- NFC Intent filters -->
                <application>
                    <activity android:name=".TagviewerActivity"
                      android:label="TagViewer" android:theme="@style/Theme.Titanium"
                      android:configChanges="keyboardHidden|orientation">
                        <intent-filter>
                            <action android:name="android.nfc.action.TECH_DISCOVERED"/>
                            <category android:name="android.intent.category.DEFAULT"/>
                        </intent-filter>

                        <intent-filter>
                            <action android:name="android.nfc.action.NDEF_DISCOVERED"/>
                            <category android:name="android.intent.category.DEFAULT"/>
                            <data android:mimeType="text/plain" />
                        </intent-filter>

                        <intent-filter>
                            <action android:name="android.nfc.action.TAG_DISCOVERED"/>
                            <category android:name="android.intent.category.DEFAULT"/>
                        </intent-filter>
                    </activity>
                </application>
            </manifest>
        </android>
        ```

    Note that if you are using [foreground dispatching](http://developer.android.com/guide/topics/connectivity/nfc/advanced-nfc.html#foreground-dispatch)
    you do not need to define intent filters in the application's tiapp.xml file.

### Accessing the Module

-   Use `require` to access this module from JavaScript:

    ``` javascript
    var nfc = require('ti.nfc');
    ```

    The `nfc` variable is a reference to the Module object.

### Creating an Adapter

-   The NFC adapter gives you access to the features of the NFC device. The NFC adapter proxy is always
    associated with the activity that was the current activity when it was created. Therefore, the NFC 
    Adapter should be created after the activity has been opened. You can use the window `open` event to know
    when the activity has been opened. 

    ``` javascript
    $.index.addEventListener('open', function(e) {
        nfcAdapter = nfc.createNfcAdapter({
            onNdefDiscovered: handleDiscovery,
            onTagDiscovered: handleDiscovery, // Android-only
            onTechDiscovered: handleDiscovery // Android-only
        });

        if (!nfcAdapter.isEnabled()) {
            Ti.API.error('NFC is not enabled on this device!');
            return;
        }
    });
    ```

### Handling Intents (Android)

-   NFC Intents are dispatched to an activity by the Android tag dispatch system. When your activity receives a new intent,
    it must forward the intent to the `onNewIntent` method of the NFC adapter for processing.

    ``` javascript
    Ti.Android.currentActivity.addEventListener('newintent', function (e) {
        nfcAdapter.onNewIntent(e.intent);
    });
    ```

    If your application is started as the result of an NFC intent, that intent will automatically be processed when the
    NFC module is loaded.

### Foreground Dispatch

-   The foreground dispatch system allows an activity to intercept an intent and claim priority over other activities that handle the same intent.
    When using foreground dispatching, you must process the `pause` and `resume` events on the activity and enable or disable
    foreground dispatching.

    ``` javascript
    var currentActivity = Ti.Android.currentActivity;

    currentActivity.addEventListener('resume', function(e) {
        nfcAdapter.enableForegroundDispatch(dispatchFilter);
    });
    currentActivity.addEventListener('pause', function(e) {
        nfcAdapter.disableForegroundDispatch();
    });
    ```

### Example applications

-   Android example applications are located in the `example/android` folder of the module:

    - `TagBeam` demonstrates how to use Android Beam to send messages to another NFC capable device.
    - `TagForeground` demonstrates how to read NFC tags only when the application is in the foreground.
    - `TagViewer` demonstrates how to receive NFC tag intents even when the application is not running.
    - `TagWriter` demonstrates how to write to an NFC tag using the Ndef tag technology data format.
    
-   iOS example applications are located in the `example/ios` folder of the module:
    
    - `TagViewer` demonstrates how to receive NFC tags even when the application is running.

## Examples

### Creating NFC Adapter (iOS & Android)

This example demonstrates the proper technique for creating an NFC adapter. 
The NFC Adapter should be created after the window has been opened.

``` javascript
var nfc = require('ti.nfc');
var nfcAdapter = null;

$.index.addEventListener('open', function(e) {
    // Must wait until the activity has been opened before setting up NFC
    // Create the NFC adapter to be associated with this activity. 
    // There should only be ONE adapter created per activity.
    nfcAdapter = nfc.createNfcAdapter({
        onNdefDiscovered: handleDiscovery,
        onTagDiscovered: handleDiscovery, // Android-only
        onTechDiscovered: handleDiscovery // Android-only
    });

    // It's possible that the device does not support NFC. Check it here
    // before we go any further. For iOS, right now this is decided 
    // internally by the system. 
    if (OS_ANDROID) {
        if (!nfcAdapter.isEnabled()) {
            alert('NFC is not enabled on this device');
            return;
        }
        Ti.Android.currentActivity.addEventListener('newintent', function (e) {
            nfcAdapter.onNewIntent(e.intent);
        });
        
    // iOS needs to be told to scan
    } else if (OS_IOS) {
        nfcAdapter.begin();
    }
});

function handleDiscovery(e) {
    alert(JSON.stringify(e, null, 2));
}

$.index.open();
```

<ApiDocs/>
