# Modules.TouchId

<TypeHeader/>

## Overview

### WARNING
This module has been deprecated in Titanium SDK 6.3.0+ in favor of the [Ti.Identity](https://github.com/appcelerator-modules/titanium-identity) module
that includes the 1:1 same API's as this one but also more current API's like FaceID-related constants
and a unified naming-scheme to avoid confusions regarding the name "TouchID".

Touch ID is a security mechanism that uses a fingerprint to authenticate the user. The
fingerprint sensor is located in the Home button of the device. Users can use their fingerprint
instead of entering their passcode for authentication.

### Requirements

The Touch ID module is available with the Titanium SDK starting with Release 3.4.0.
This module only works with devices running iOS 8. You can only test the Touch ID module on a device.

The device must have a Touch ID sensor in the Home button and Touch ID must be setup in order to use
the Touch ID authentication mechanism. You can set up Touch ID in iOS Setup Assistant or by
tapping **Touch ID & Passcode** from Settings.

For information on setting up Touch ID, see
[iPhone 5s: Using Touch ID](http://support.apple.com/kb/HT5883).

### Getting Started

Add the module as a dependency to your application by adding a **`<module>`** item to the
**`<modules>`** element of your `tiapp.xml` file:

    <ti:app>
      ...
      <modules>
        <module platform="iphone">ti.touchid</module>
      </modules>
      ...
    </ti:app>

Use `require()` to access the module from JavaScript:

    var TouchID = require('ti.touchid');

The `TouchId` variable is a reference to the module. Make API calls using this reference:

    TouchID.authenticate({
        reason: 'Verify to modify personal settings',
        callback: function(e) {
            Ti.API.info(e);
        }
    });
    
### Lifetime Notes (iOS-only)

The current context will, once evaluated, be used until it's instance gets released or invalidated.
You can you use the <Modules.TouchId.invalidate> method to force the user to be prompted every time a
new authentication is triggered. On iOS 9 and later, this can also be called to cancel a current
evaluation of an auth-context, e.g. to hide the auth-dialoag.
    
### Native Keychain Integration (iOS-only)

For more infos regarding the keychain integration, check the <Modules.TiTouchId.KeychainItem>
documentation.

### Sample Application

The module contains a sample application in the
`<TITANIUM_SDK_HOME>/modules/iphone/ti.touchid/<VERSION>/example/` folder.

<ApiDocs/>
