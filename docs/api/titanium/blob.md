# Titanium.Blob

<TypeHeader/>

## Overview

A `Blob` represents a chunk of binary information, often obtained through
an [HTTPClient](Titanium.Network.HTTPClient) or by reading a [File](Titanium.Filesystem.File).

Blobs are often used to store text or image data.
The `Blob` object includes a number of properties and methods specific to image blobs.

Android supports an [append](Titanium.Blob.append) method, but
otherwise blobs are immutable.

The <Titanium.Utils> module provides several utility methods for working with
blobs, including methods for converting between blobs and Base64-encoded strings,
and methods for generating SHA-1 and SHA-256 hashes and MD5 digests from blob data.

The [Buffer](Titanium.Buffer) object can also contain binary data, and is
more easily mutable. Extracting blob data to a buffer is somewhat roundabout:

``` js
var blobStream = Ti.Stream.createStream({ source: myBlob, mode: Ti.Stream.MODE_READ });
var newBuffer = Ti.createBuffer({ length: myBlob.length });
var bytes = blobStream.read(newBuffer);
```

Creating a blob from a buffer is much easier:
``` js
var newBlob = myBuffer.toBlob();
```

In both cases, the conversion involves copying the data from one object to another, so
you should be conscious of the amount of the data being copied.

<ApiDocs/>
