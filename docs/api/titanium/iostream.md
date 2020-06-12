# Titanium.IOStream

<TypeHeader/>

## Overview

See the <Titanium.Stream> module for related utility methods that support asynchronous
I/O.

## Examples

### Write Data to a Stream

This example demonstrates writing data to a stream.

``` js
var outBuffer = Ti.createBuffer({data: "write me"});
// stream object could be socket, file, buffer or blob
var outStream = Ti.Stream.createStream({mode: Ti.Stream.MODE_WRITE});

var bytesWritten = outStream.write(outBuffer);  // writes entire buffer to stream
Ti.API.info("Bytes written:" + bytesWritten);  // should be 8

bytesWritten = outStream.write(outBuffer, 2, 5);  // only writes "ite m" to stream
Ti.API.info("Bytes written:" + bytesWritten);  // should be 5
```

### Read Data From a Stream

This shows a simple example of reading data from a stream, one buffer full at a
time.

``` js
var size = 0;
// read data one buffer full at a time
while ((size = instream.read(buffer)) > -1) {
    // do something with the data here ...
    Ti.API.info("Read " + size + " bytes.");
}
```

### Read Data With Offset and Length

This example shows how to read data from a stream into a buffer. We assume that
the `inStream` variable holds a previously initialized stream that contains the
string, "World Titanium".

``` js
var inBuffer = Ti.createBuffer({ value: "Hello [           ]" });

// Read the first 6 bytes from the stream to the buffer, starting at position 10.
var bytesRead = inStream.read(inBuffer, 10, 6);

Ti.API.info("Bytes read: " + bytesRead);
Ti.API.info(inBuffer.toString());

// Read the next 8  bytes from the stream to the buffer, starting at position 8.
bytesRead = inStream.read(inBuffer, 8, 8);

Ti.API.info("Bytes read: " + bytesRead);
Ti.API.info(inBuffer.toString());
```

The second `read` overwrites the data from the first `read`, so the output looks
like this:

```
[INFO] Bytes read: 6
[INFO] Hello [   World   ]
[INFO] Bytes read: 8
[INFO] Hello [ Titanium  ]
```

<ApiDocs/>
