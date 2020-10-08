---
editUrl: https://github.com/appcelerator-modules/titanium-identity/edit/master/apidoc/Identity.yml
---
# Modules.Identity

<TypeHeader/>

## Overview

Touch ID / Face ID are security mechanisms that use biometric sensors to authenticate the user.

### Requirements

The Identity module is available with the Titanium SDK starting with Release 6.3.0.
This module only works with devices running iOS 8 and later.

### Getting Started

Add the module as a dependency to your application by adding a **`<module>`** item to the
**`<modules>`** element of your `tiapp.xml` file:

``` xml
<ti:app>
  <!-- ... -->
  <modules>
    <module platform="iphone">ti.identity</module>
  </modules>
  <!-- ... -->
</ti:app>
```

Use `require()` to access the module from JavaScript:

``` javascript
var Identity = require('ti.identity');
```

The `Identity` variable is a reference to the module. Make API calls using this reference:

``` javascript
Identity.authenticate({
    reason: 'Verify to modify personal settings',
    callback: function(e) {
        Ti.API.info(e);
    }
});
```

### Lifetime Notes (iOS-only)

The current context will, once evaluated, be used until it's instance gets released or invalidated.
You can you use the <Modules.Identity.invalidate> method to force the user to be prompted every time a
new authentication is triggered. On iOS 9 and later, this can also be called to cancel a current
evaluation of an auth-context, e.g. to hide the auth-dialoag.

## Distinguish between Touch ID and Face ID

Use the <Modules.Identity.biometryType> to receive the currently used biometry type. See an example of
using the property to create a personalized interface when using Touch ID and Face ID:

``` javascript
var authPhrase = 'Unknown';

if (TiIdentity.biometryType === TiIdentity.BIOMETRY_TYPE_FACE_ID) { // Face ID
    authPhrase = 'Face ID';
} else if (TiIdentity.biometryType === TiIdentity.BIOMETRY_TYPE_TOUCH_ID) { // Touch ID
    authPhrase = 'Touch ID';
}
```
    
## Face ID Requirements (iOS only)

For Face ID to work properly, you need to add a **`<key>`** item to the
**`<plist>`** element of your `tiapp.xml` file:

``` xml
<ti:app>
  <!-- ... -->
  <ios>
    <!-- ... -->
    <plist>
      <dict>
        <key>NSFaceIDUsageDescription</key>
        <string>Why you need Face ID.</string>
      </dict>
    </plist>
    <!-- ... -->
  </ios>
  <!-- ... -->
</ti:app>
```

### Native Keychain Integration

For more infos regarding the keychain integration, check the "KeychainItem" "documentation.

### Sample Application

The module contains a sample application in the
`<TITANIUM_SDK_HOME>/modules/iphone/ti.identity/<VERSION>/example/` folder.

<ApiDocs/>
