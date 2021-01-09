---
editUrl: https://github.com/appcelerator-modules/appcelerator.bluetooth/edit/master/apidoc/Bluetooth.yml
---
# Modules.Bluetooth

<TypeHeader/>

## Overview

The module is used for connecting your application via bluetooth.

<p class="note">Note: This feature requires a Pro or Enterprise subscription. More infos <a href="https://www.appcelerator.com/pricing/" target="_blank">here</a>!</p>

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
- Add the following `uses-permission` element to the Android manifest section of the tiapp.xml
    file. You may need to add the `manifest elements.
    ``` xml
    <ti:app>
        <android xmlns:android="http://schemas.android.com/apk/res/android">
            <manifest>
                <uses-permission android:name="android.permission.BLUETOOTH" />
                <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
                <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/> 
            </manifest>
        </android>
    </ti:app>
    ```

<ApiDocs/>
