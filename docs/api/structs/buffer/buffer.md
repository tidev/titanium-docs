---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/NodeJS/buffer.yml
---
# buffer.Buffer

<TypeHeader/>

## Overview

Note that this `Buffer` class is highly related to the <Titanium.Buffer> type. Both are wrappers around an underlying array of bytes and can be accessed in an array-like manner:

``` javascript
const value = buffer[index];
buffer[index] = 1;
```

In fact, this Node.js shim has been written to allow wrapping a <Titanium.Buffer> into a Node.js compatible instance:

``` javascript
const wrapped = Buffer.from(tiBuffer);
```

Note that this will result in a **slow** `Buffer` instance (because reads/writes pass-through to the underlying
`Ti.Buffer` which in turn goes through the JS/native binding layer). If you only intend to *read* the data
(or do not need to write back to the original <Titanium.Buffer>) you can perform a one-time copy
of the underlying bytes to a faster JS-only `Uint8Array`:

```javascript
const fastBuffer = Buffer.from(tiBuffer.toBlob().toArrayBuffer()); // here we're converting from Blob to Ti.Buffer to ArrayBuffer and the shim wraps that copy
```

<ApiDocs/>
