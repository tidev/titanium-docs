---
editUrl: https://github.com/appcelerator-modules/appcelerator.ble/edit/master/apidoc/Descriptor.yml
---
# Modules.BLE.Descriptor

<TypeHeader/>

## Overview

Descriptor objects represent the descriptors of a remote peripheral’s characteristic. Descriptors
provide further information about a characteristic’s value. For example, they may describe the
value in human-readable form and describe how to format the value for presentation purposes.
Characteristic descriptors also indicate whether a characteristic’s value indicates or notifies
a client (a central) when the value of the characteristic changes.
iOS Note: You must use only one of the two currently supported descriptor 
types: CBUUID_CHARACTERISTIC_USER_DESCRIPTION_STRING or CBUUID_CHARACTERISTIC_FORMAT_STRING. 
Reference (https://developer.apple.com/documentation/corebluetooth/cbmutabledescriptor/1518999-init)

<ApiDocs/>
