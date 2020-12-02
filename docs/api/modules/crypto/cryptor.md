---
editUrl: https://github.com/appcelerator-modules/ti.crypto/edit/master/apidoc/Cryptor.yml
---
# Modules.Crypto.Cryptor

<TypeHeader/>

## Overview

The Cryptor object provides access to both block ciphers and stream ciphers with the same API; however some options are available for block ciphers that do not apply to stream ciphers.
The Android version of this module only exposes block ciphers.

The general operation of a Cryptor is: 

1. Initialize it with raw key data and other optional fields with crypto.createCryptor()
2. Process input data via one or more calls to cryptor.update()
3. Obtain possible remaining output data with cryptor.final()
4. The cryptor object is disposed of by setting the cryptor variable to null. The cryptor object can be reused (with the same key data as provided to crypto.createCryptor()) by calling cryptor.reset() or cryptor.release().

Alternatively, cryptor.encrypt() and cryptor.decrypt() methods are provided for a stateless, one-shot encrypt or decrypt operation.

<ApiDocs/>
