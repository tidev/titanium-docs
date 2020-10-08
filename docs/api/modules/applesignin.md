---
editUrl: https://github.com/appcelerator-modules/titanium-apple-sign-in/edit/master/apidoc/Applesignin.yml
---
# Modules.Applesignin

<TypeHeader/>

## Overview

### Apple sign in Resources
  - [Sign In with Apple](https://developer.apple.com/sign-in-with-apple/)
  - [Introducing Sign In with Apple  at WWDC17](https://developer.apple.com/videos/play/wwdc2019/706/)

### Requirements

  - iOS 13 and later

### Getting Started

### Configure iOS: Capabilities and Provisioning Profiles

-   Required capabilities:

    ``` xml
    <key>com.apple.developer.applesignin</key>
    <array>
      <string>Default</string>
    </array>
    ```

-   Provisioning Profile entitled with 'Sign In with Apple' capability

### Accessing the Module

-   Use `require` to access this module from JavaScript:

    ``` javascript
    var AppleSignin = require('ti.applesignin');
    ```

    The `AppleSignin` variable is a reference to the Module object.

### Example applications

-   Example applications are located in the `example/ios` folder of the module:

<ApiDocs/>
