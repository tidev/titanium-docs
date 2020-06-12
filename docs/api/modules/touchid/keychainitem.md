# Modules.TouchId.KeychainItem

<TypeHeader/>

## Overview

The following example demonstrates the basic usage to save, read and delete 
values with the native iOS keychain:
    
    // Create a keychain item
    var keychainItem = TouchID.createKeychainItem({
        identifier: 'password'
    });
    
    // Triggered when the keychain item was successfully saved
    keychainItem.addEventListener('save', function(e) {
        // Notify the user that the operation succeeded or failed
    });

    // Write to the keychain
    keychainItem.save('s3cr3t_p4$$w0rd');

For advanced security options, you can specify accessibility mode to the keychain 
that will be applied when writing items to the keychain, for example:
    
    // Create a keychain item
    var keychainItem = TouchID.createKeychainItem({
        identifier: 'mypassword',
        accessGroup: '<YOUR-TEAM-ID>.com.appc.touchidtest',
        accessibilityMode: TouchID.ACCESSIBLE_WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
        accessControlMode: TouchID.ACCESS_CONTROL_TOUCH_ID_ANY,
        // Pass more native options to the keychain. Since there are hundrets of them,
        // look up the value of the constant and pass it here. Example:
        options: {
            // The value of kSecUseOperationPrompt
            'u_OpPrompt': 'Please authenticate yourself!'
        }
    });

<ApiDocs/>
