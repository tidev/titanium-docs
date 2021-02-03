---
editUrl: https://github.com/appcelerator-modules/appcelerator.ble/edit/master/apidoc/Ble.yml
---
# Modules.BLE

<TypeHeader/>

## Overview

Using Bluetooth Low Energy module is used to interact with Bluetooth Low Energy (BLE) devices.

<p class="note">Note: This feature requires a Pro or Enterprise subscription. More infos <a href="https://www.appcelerator.com/pricing/" target="_blank">here</a>!</p>

- Note (IOS): Starting iOS 13, it's mandatory for developers to specify the Privacy Usage Description
  for Bluetooth by including NSBluetoothAlwaysUsageDescription in their tiapp.xml file. Otherwise
  accessing any Core Bluetooth APIs would lead to a crash. For backward support for older iOS
  versions, NSBluetoothPeripheralUsageDescription needs to be defined.

- If your app needs to run in background to perform certain Bluetooth-related tasks, it must declare
  that it supports a Core Bluetooth background execution mode in tiapp.xml using UIBackgroundModes key
  ``` xml
  <key>UIBackgroundModes</key>
  <array>
      <string>bluetooth-central</string>
      <string>bluetooth-peripheral</string>
  </array>
  ```

bluetooth-central : The app communicates with Bluetooth low energy peripherals using the Core Bluetooth framework.
bluetooth-peripheral :The app shares data using the Core Bluetooth framework.

The Apple documentation states that applications are allowed to scan while backgrounded but the
scan must specify the service types. wild card scan is not supported in the background.

- Note(Android): Add the following `uses-permission` element to the Android manifest section of
  the tiapp.xml file required for this module. You may need to add the `manifest elements. Starting
  Android 9(API level 28), its mandatory to request the FOREGROUND_SERVICE for using the foreground service.
  ``` xml
    <ti:app>
        <android xmlns:android="http://schemas.android.com/apk/res/android">
            <manifest>
                <uses-permission android:name="android.permission.BLUETOOTH" />
                <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
                <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
                <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
            </manifest>
        </android>
    </ti:app>
  ```
  Note: A detailed information about how to use module in your application, can be found with artifacts at path modules/iphone (platform)/appcelerator.ble/x.y.z (version of module)/documentation/index.html

<ApiDocs/>
