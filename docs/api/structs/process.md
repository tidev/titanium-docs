---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/NodeJS/process.yml
---
# process

<TypeHeader/>

## Overview

Titanium provides a number of shims and ports of core Node.js module functionality.

This module is intended to provide a Node-compatible port of the `process` core module.

More details on the Node.js API can be found in their [process module documentation](https://nodejs.org/api/process.html)

Note that this particular shim has many unimplemented, no-op, or unsupported APIs and events.

The `process` object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using `require()`. It can also be explicitly accessed using `require()`:

``` javascript
const process = require('process');
```

<ApiDocs/>
