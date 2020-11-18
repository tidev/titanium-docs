---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/NodeJS/fs.yml
---
# fs

<TypeHeader/>

## Overview

Titanium provides a number of shims and ports of core Node.js module functionality.

This module is intended to provide a Node-compatible port of the `fs` core module.

More details on the Node.js API can be found in their [fs module documentation](https://nodejs.org/api/fs.html)

The `fs` module enables interacting with the file system in a way modeled on standard POSIX functions.

To use this module:

``` javascript
const fs = require('fs');
```

All file system operations have synchronous and asynchronouse callback forms.

**NOTE:** The Titanium shim for this module does not support the new Promises API yet, nor does it support some of the newer (and a subset of older) APIs.

Some of the APIs are implemented as no-ops:

- `chmod`
- `chmodSync`
- `chown`
- `chownSync`
- `fchmod`
- `fchmodSync`
- `fchown`
- `fchownSync`
- `fdatasync`
- `fdatasyncSync`
- `symlink`
- `symlinkSync`
- `unwatchFile`
- `utimes`
- `utimesSync`
- `watch`
- `watchFile`

Explicitly unsupported for now are:

- `fs.createReadStream`
- `fs.createWriteStream`
- `fs.fsync(fd, callback)`
- `fs.fsyncSync(fd)`
- `fs.ftruncate(fd[, len], callback)`
- `fs.ftruncateSync(fd[, len])`
- `fs.futimes(fd, atime, mtime, callback)`
- `fs.futimesSync(fd, atime, mtime)`
- `fs.lchmod(path, mode, callback)`
- `fs.lchmodSync(path, mode)`
- `fs.lchown(path, uid, gid, callback)`
- `fs.lchownSync(path, uid, gid)`
- `fs.link(existingPath, newPath, callback)`
- `fs.linkSync(existingPath, newPath)`
- `fs.opendir`
- `fs.opendirSync`
- `fs.readlink(path[, options], callback)`
- `fs.readlinkSync(path[, options])`
- `fs.rm`
- `fs.rmSync`

<ApiDocs/>
