# Titanium.Filesystem

<TypeHeader/>

## Overview

For examples of using the Filesystem APIs, refer to the
[Filesystem Access and Storage guide](https://docs.appcelerator.com/platform/latest/#!/guide/Filesystem_Access_and_Storage)
as well as the other Filesystem submodule API documentation.

## Examples

### Getting a directory for an application group (iOS)

This example writes a string to a text file in a shared directory

``` js
var suiteDir = Ti.Filesystem.directoryForSuite('group.appc.Sharing');
if (!suiteDir) {
    logInApp('Suite Directory not found, check Entitlements.');
    return;
}
var f = Ti.Filesystem.getFile(suiteDir,'emptyfile.txt');
f.write('The file is no longer empty!');
```


<ApiDocs/>
