---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Ble.yml
---
# Modules.BLE

<TypeHeader/>

## Overview

Using Bluetooth Low Energy module is used to interact with Bluetooth Low Energy (BLE) devices.

You can download the module at [appcelerator.ble](https://github.com/tidev/appcelerator.ble/releases)

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

Note: A detailed information about how to use module in your application, can be found with artifacts at path modules/iphone (platform)/appcelerator.ble/x.y.z (version of module)/documentation/index.html

<ApiDocs/>
