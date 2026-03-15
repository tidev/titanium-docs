---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Bluetooth.yml
---
# Modules.Bluetooth

<TypeHeader/>

## Overview

The module is used for connecting your application via bluetooth.

You can download the module at [appcelerator.bluetooth](https://github.com/tidev/appcelerator.bluetooth/releases)

### Getting Started
- Add the module as a dependency to your application by adding a **`<module>`** item to the
  **`<modules>`** element of your `tiapp.xml` file:
  ``` xml
  <ti:app>
    <!-- ... -->
    <modules>
      <module platform="android">appcelerator.bluetooth</module>
    </modules>
    <!-- ... -->
  </ti:app>
  ```
- Use `require()` to access the module from JavaScript:
  ``` javascript
  var bluetooth = require('appcelerator.bluetooth');
  ```
- The `bluetooth` variable is a reference to the module. Make API calls using this reference:
  ``` javascript
  bluetooth.isSupported();
  ```

### Example application
  Please see the /modules/android/appcelerator.bluetooth/x.y.z (version of module)/example folder.

### Observations
- On a bluetooth socket object with a given `uuid`, if device A connects to device B and the same device A tries to create another socket object with the same uuid and attempts to connect with the same device B, then it won't be successful to connect because socket connection is already established between them. Moreover, while attempting for the new connect, the existing connection would also get disconnected. 
  `Recommendation:` It would always be recommended to close the socket connection properly before trying to connect using the newly created socket object on the same device and same uuid.
- When device scanning/discovery is in-progress, the same device can be found multiple times from the deviceFound event in span of 12 seconds. This scenario should be handled by the application. More information refer to deviceFound event and startDiscovery method.

## Examples

### How to Check if Bluetooth is supported on your device.

``` javascript
  if(bluetooth.isSupported())
  {
    Ti.API.info('Bluetooth is supported');
  } else 
  {
    Ti.API.info('Bluetooth is not supported in this device');
  }
```

### How to get paired devices with local adapter.

``` javascript
  var dict = bluetooth.getPairedDevices();
  var device = []; // array for paired devices.
  if (dict.success) {
      var pdevices = dict.pairedDevices;
      for (var index = 0; index < pdevices.length; index++){
          device[index] = pdevices[index];
      }
  } else {
      //Failed to get paired devices.
      Ti.API.info(dict.message);
  }
```

### To creates an object of the BluetoothServerSocketProxy class.

This object can be used to listen the incoming connections.

``` javascript
  var serverSocket = bluetooth.createServerSocket({
    name: 'Test_Server_Socket',
    uuid: '8ce255c0-200a-11e0-ac64-0800200c9a66',
    secure: true
  });
  // To accept the incoming connections.
  serverSocket.startAccept(false); 
```

### If you want to get bluetooth device information

To get the bluetooth device name.

``` javascript
  var btName = bluetooth.name;
```

And to check the current state

``` javascript
  var state = bluetooth.state;
  if(state === bluetooth.STATE_ON)
  {
      Ti.API.info('Bluetooth is on');
  }
```

<ApiDocs/>
