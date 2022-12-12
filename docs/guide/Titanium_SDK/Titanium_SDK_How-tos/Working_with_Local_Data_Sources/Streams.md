---
title: Streams
weight: '60'
---

# Streams

## Overview

A stream is a data type used to serially read and write bytes. The term "Stream", used generically, refers to a data type which implements a particular interface consisting of the methods that you would expect from a stream-like object, namely `read()`, `write()`, `close()`, `isWritable()`, and `isReadable()`. The Titanium SDK, starting with version 1.7.0, defines four types which implement this interface:

* `Titanium.Stream.BufferStream`, an in-memory stream implementation.

* `Titanium.Stream.BlobStream`, a read-only stream specifically for reading from Titanium Blobs.

* `Titanium.Filesystem.FileStream`, for reading and writing files on the mobile device.

* `Titanium.Network.Socket.TCP`, a TCP socket implementation which, among other things, implements the Stream interface. Sockets, of course, have lots of other interesting features beyond their stream implementation, and therefore there will be another installment of this article series devoted to sockets. We won't cover sockets any further in this article.

## BufferStream

Buffers are basically resizable byte arrays. A `BufferStream` reads or writes the bytes in a `Buffer` in a serial fashion and maintains an internal pointer to the current read/write position in the `Buffer`. So rather than needing to read or write each individual byte in a `Buffer`, you can read or write a series of bytes using a `BufferStream`.

One use-case might be if you want to prepare a message in its entirety before opening a socket and sending the message. You can use a `BufferStream` to assemble the message in a buffer in memory, then later pass that buffer to a socket write operation.

### BufferStream examples

Here's a simple example of writing strings to a `BufferStream` and then reading them back.

**ex01-bufferstream-create.js**

```javascript
// Create the buffer & stream
var paragraph = Titanium.createBuffer({length: 1024});
var stream = Titanium.Stream.createStream({
  mode: Titanium.Stream.MODE_WRITE, // There is also MODE_APPEND for writing
  source: paragraph
});
```

**ex02-bufferstream-write.js**

```javascript
// Write to stream in chunks, filling up "paragraph" buffer.
// Each chunk will be an encoded UTF-8 string because we
// don't specify otherwise.
var length = 0;
length += stream.write(Titanium.createBuffer({
  value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
}));
length += stream.write(Titanium.createBuffer({
  value: "Morbi vel mi in nunc bibendum congue at a ligula. Nunc at mauris dui, ac posuere ligula. "
}));
length += stream.write(Titanium.createBuffer({
  value: " Curabitur posuere cursus orci, id convallis metus venenatis sed."
}));

// Close the stream. The buffer still has the data in it.
stream.close();
```

**ex03-bufferstream-resetlength.js**

```javascript
// Set the buffer length to the actual bytes written.
paragraph.length = length;
```

**ex04-bufferstream-create2.js**

```javascript
// Read back the buffer in chunks.
// Create the read stream & buffer.
var CHUNK_SIZE = 10;
var read_buffer = Titanium.createBuffer({length: 1024});
stream = Titanium.Stream.createStream({
  mode: Titanium.Stream.MODE_READ,
  source: paragraph
});
```

**ex05-bufferstream-readchunks.js**

```javascript
// Read until end.
length = 0;
var bytes_read = 0;
while ((length = stream.read(read_buffer, bytes_read, CHUNK_SIZE)) > 0) {
  bytes_read += length;
};
```

**ex07-bufferstream-decode.js**

```javascript
// Get the read_buffer contents into a string.
var lorem = Ti.Codec.decodeString({
  source: read_buffer,
  charset: Ti.Codec.CHARSET_UTF8,
  length: bytes_read,
  position: 0
});

// Cleanup
stream.close();
```

## FileStream

The `FileStream`, surprise surprise, helps you read from and write to files on the mobile device. This can have memory advantages, such as if you want to read and write in chunks rather than pull a file's entire contents into memory at one time.

There are two ways to get a `FileStream` instance. If you already have a `File` object, you can open a stream for it by using the new `open` method of `Titanium.Filesystem.File`. Alternatively, you can skip getting the `File` object if you have no other use for it and instead get a stream directly with the new `Titanium.Filesystem.openStream` method.

The supported modes are `Titanium.Filesystem.MODE_READ`, `Titanium.Filesytem.MODE_WRITE` and `Titanium.Filesytem.MODE_APPEND`.

### FileStream examples

This simple example reads and writes a file in 1K chunks rather than loading up the entirety of the file in memory. In this example we get streams by first getting <code>File</code> objects then calling their `open()` methods. However, in the case of the output file, we show the alternative `openStream(...)` method as well in a commented line.

**ex01-filestream-getfile.js**

```javascript
// Get the source file (this one is in Resources).
var infile = Titanium.Filesystem.getFile('emmy.jpg');
if (!infile.exists()) {
  Ti.API.error("File not exists()");
  return;
}
```

**ex02-filestream-openread.js**

```javascript
// Open for reading.
var instream = infile.open(Titanium.Filesystem.MODE_READ);
```

**ex03-filestream-getoutfile.js**

```javascript
// Get a file descriptor for output file. (Doesn't need to exist.)
var outfile =
  Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'emmy_out.jpg');
```

**ex04-filestream-openwrite.js**

```javascript
// Open for writing.
var outstream = outfile.open(Titanium.Filesystem.MODE_WRITE);
```

**ex04a-filestream-openstream.js**

```javascript
// The last two steps could have been combined into one using this code:
//var outstream =
// Titanium.Filesystem.openStream(Titanium.Filesystem.MODE_WRITE, Titanium.Filesystem.applicationDataDirectory, 'emmy_out.jpg');
```

**ex05-filestream-buffer.js**

```javascript
// Create a 1K buffer for reading chunks.
var buffer = Titanium.createBuffer({length: 1024});
```

**ex06-filestream-loopreadwrite.js**

```javascript
// Read and write chunks.
var size = 0;
while ((size = instream.read(buffer)) > -1) {
  outstream.write(buffer);
  Titanium.API.info('Wrote ' + size + ' bytes');
}
```

**ex07-filestream-cleanup.js**

```javascript
// Cleanup.
instream.close();
outstream.close();
```

## BlobStream

The `BlobStream` is a read-only stream that provides you with the ability to read blobs in chunks rather than load them up completely in memory. Blobs appear in a few places throughout the Titanium API, such as in [Titanium.Media](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media-module.html) when dealing with images from the camera and photo gallery. You read from a `BlobStream` in the same manner you would for a `BufferStream` or a `FileStream`.

### BlobStream examples

In this example, we use [Titanium.Media.showCamera](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.showCamera-method.html) to take a photo and stream its bytes to a file.

**ex01-blobstream-full.js**

```javascript
Ti.Media.showCamera({
  success: function(e) {
    // Open stream on blob.
    var instream = Titanium.Stream.createStream({
      mode: Titanium.Stream.MODE_READ,
      source: e.media // e.media is a Blob
    });
    // Open an output stream for a file
    // to hold the blob data.
    var f =
      Titanium.Filesystem.getFile(
          Titanium.Filesystem.applicationDataDirectory, "out.jpg");
    var outstream = f.open(Titanium.Filesystem.MODE_WRITE);
    // Create a buffer for chunking the data.
    var buffer = Ti.createBuffer({length: 1024});
    // Read and write chunks.
    var read_bytes = 0;
    while ((read_bytes = instream.read(buffer)) > 0) {
      outstream.write(buffer, 0, read_bytes);
    }
    // Cleanup.
    instream.close();
    outstream.close();
  }
});
```
