---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Stream/Stream.yml
---
# Titanium.Stream

<TypeHeader/>

## Overview

This module provides a set of methods for interacting with
[IOStream](Titanium.IOStream) objects, including asynchronous versions of the
`read` and `write` methods offered by all stream objects. These
methods should be used in any place where reading from or writing
to a stream might block.

See also:

* <Titanium.IOStream>
* <Titanium.BlobStream>
* <Titanium.BufferStream>
* <Titanium.Filesystem.FileStream>
* <Titanium.Network.Socket.TCP>

## Examples

### Stream.pump Example

The following example shows how to use the [pump](Titanium.Stream.pump) method.

``` js
var pumpCallback = function(arg) {
    if(arg.bytesProcessed == -1) {
        Ti.API.info("At end of stream.");
    } else {
        Ti.API.info(String.format("Received %.0f bytes. Total: %.0f bytes.",
                    arg.bytesProcessed, arg.totalBytesProcessed));
        // do something useful with the data in arg.buffer
    }
}
Ti.Stream.pump(inputStream, pumpCallback, 1024);
```

### Write Stream to File

The following example uses the [writeStream](Titanium.Stream.writeStream) method
to copy the contents of an input stream to a file. This can be used for any kind
of input stream -- `BufferStream`, `FileStream`, or `Socket.TCP`.

``` js
var outFileStream = Ti.Filesystem.getFile('outfile.txt').open(Ti.Filesystem.MODE_WRITE);

// writes all data from inputStream to outFileStream in chunks of 1024 bytes
var bytesWritten = Ti.Stream.writeStream(inputStream, outFileStream, 1024);
Ti.API.info('Wrote ' + bytesWritten + ' bytes, closing both streams.');

inputStream.close();
outFileStream.close();
```

<ApiDocs/>
