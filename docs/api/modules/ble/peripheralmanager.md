---
editUrl: https://github.com/appcelerator-modules/appcelerator.ble/edit/master/apidoc/PeripheralManager.yml
---
# Modules.BLE.PeripheralManager

<TypeHeader/>

## Overview

Core Bluetooth uses PeripheralManager objects to manage published services within the local
peripheral’s Generic Attribute Profile (GATT) database and to advertise these services to
central devices (represented by Central objects). While a service is in the database, any
connected central can see and connect to it.
That said, if your app hasn’t specified the bluetooth-peripheral background mode, the contents
of its services become disabled when it’s in the background or in a suspended state. In this
scenario, any remote central trying to access the service’s characteristic value or characteristic
descriptors receives an error.

<ApiDocs/>
