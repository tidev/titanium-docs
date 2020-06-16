---
title: Stream Spec
weight: '30'
---

# Stream Spec

## Contents

## Overview

Titanium mobile needs support for stream IO operations on appropriate objects such as files, sockets and any other types we decide upon in the future. In order to support generic stream handling and the exchange of data between streams a common stream interface needs to be defined.

This document will outline the proposed additions for supporting stream operations within Titanium mobile, types that will support stream operations, API changes and source examples.

::: tip 💡 Hint
A separate spec exists that outlines encoding support for numeric and string values. The [Encoding Spec](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/Encoding_Spec/) enables the addition of reading and writing of numeric and string values along with support for specific encoding. In the future, we plan to support the ability for a developer to define their own stream types that can be used alongside the native Titanium streams.
:::

## Justification

Currently there isn't an easy or generic manner for reading or writing data from one complex type like xxx to another. By providing a Stream interface that these complex types can implement, we can allow developers to simplify the process of moving data between these complex types. In addition to the core stream interface which just allows these types to interact in a generic manner, convenience functions would be provided in a new Stream module that would allow many of the common operations on streams to be simplified further (IE: writing all data from one stream to another).

Ultimately, adding Stream support will enable our developers to simplify their source code and make IO operations for streaming types much more approachable.

## Definitions

* Stream - Generic input / output object that can be used for read / write operations with a variable frequency and amount.

* Buffer - Generally represents temporary storage for data when moving from one location to another (such as reading data off a socket and then writing to a file). In our case, the buffer will be a container for binary data rather than being limited to only string data. [Buffer Spec](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/Buffer_Spec/)

## Proposed Tasks

* Create Stream interface

* Create BufferStream object that implements Stream interface

* Create BlobStream object that implements the Stream interface

* Create FileStream object that implements Stream interface

* Update Socket object to implement Stream interface

## Proposed API

Stream objects below only list the methods that are applicable to the IO operations. More methods may exist already that are left out for the sake of focus on the stream operations.

### Ti.Stream

#### Module

Stream module would expose generic Stream functionality outside of just the types that implement the Stream interface.

Properties:

```
int Ti.Stream.MODE_READ // constant representing a read only mode
int Ti.Stream.MODE_WRITE // constant representing a write mode
int Ti.Stream.MODE_APPEND // constant representing a append mode
```

Methods:

```
// wraps specified blob in a container that implements the Stream interface
BlobStream Ti.Stream.createStream({source:<Blob>, mode:<mode>})
// wraps the specified buffer in a container that implements the Stream interface
BufferStream Ti.Stream.createStream({source:<Blob>, mode:<mode>})

// Exceptions are throw for void return type methods when an error is encountered.

// callback argument for async read operations is an object with the following fields:
// 1) Stream source
// 2) int bytesProcessed
// 3) int errorState
// 4) String errorDescription

void read(Stream sourceStream, Buffer buffer, KrollCallback resultsCallback) // async version of read
// async version of read
void read(Stream sourceStream, Buffer buffer, int offset, int length, KrollCallback resultsCallback)
// should throw exception if there is an error reading from stream or if unable
// to write all data to buffer
Buffer readAll(Stream sourceStream)
void readAll(Stream sourceStream, Buffer buffer, KrollCallback resultsCallback) // async version of readAll

// callback argument for async write operations is an object with the following fields:
// 1) Stream source
// 2) int bytesProcessed
// 3) int errorState
// 4) String errorDescription

void write(Stream outputStream, Buffer buffer, KrollCallback resultsCallback) // async version of write
// async version of write
void write(Stream outputStream, Buffer buffer, int offset, int length, KrollCallback resultsCallback)

// writes all data from <inputStream> to <outputStream> in chunks of <maxChunkSize> bytes.
int writeStream(Stream inputStream, Stream outputStream, int maxChunkSize)

// resultsCallback argument for async writeStream operation is an object with
// the following fields:
// 1) Stream fromStream
// 2) Stream toStream
// 3) int bytesProcessed
// 4) int errorState
// 5) String errorDescription

// async version of writeStream.  returns 0 and throws exception on error.
int writeStream(Stream inputStream, Stream outputStream, int maxChunkSize, KrollCallback resultsCallback)

// handler argument for pump operations is an object with the following fields:
// 1) Stream source
// 2) Buffer buffer
// 3) int bytesProcessed // -1 on end of stream
// 4) int totalBytesProcessed
// 5) int errorState
// 6) String errorDescription

// similar to writeStream, but instead of writing to another stream the
// chunks of data are handed off to <handler> in chunks of <maxChunkSize> bytes.
void pump(Stream inputStream, KrollCallback handler, int maxChunkSize)  // sync pump operation
// variant that allows setting the pump operation to async or sync
void pump(Stream inputStream, KrollCallback handler, int maxChunkSize, boolean isAsync)
```

#### Interface

Common interface defines which methods all stream objects will need to support.

Methods:

```
// read / write operations that return an int will return the number of bytes actually
// written or read, -1 if no data is available and will throw an exception on error.

int read(Buffer buffer) // reads buffer.length amount of data from stream into <buffer>
// reads <length> number of bytes from stream into <buffer> starting at <offset>
int read(Buffer buffer, int offset, int length)

int write(Buffer buffer) // writes specified <buffer> to stream
// writes <length> number of bytes from <buffer> starting at <offset> to stream
int write(Buffer buffer, int offset, int length)

boolean isWriteable();
boolean isReadable();

void close() // closes file stream, exception is thrown on error
```

### FileStream

File stream object used for IO operations on a physical file. Implements TiStream interface (not listing interface methods).

Creating file stream object:

```
// from existing file object
FileStream <Ti.Filesystem.File>.open(Ti.Filesystem.<MODE>)

// factory method for creating directly from path.  filepath represents a variable length array of paths that will be combined into a full path
FileStream Ti.Filesystem.openStream(Ti.Filesystem.<MODE>, string[] filePath)
```

### Socket

Socket object that supports IO operations. Implements Stream interface (not listing interface methods).

**\* refer to sockets spec for details on creating a socket**

Methods:

```
//  make sure the socket it actually in a connected state before trying to read or write data on socket
boolean isConnected()
```

## Source examples

Reading data from file:

```javascript
var messageBuffer = Ti.createBuffer()
var tempBuffer = Ti.createBuffer({length:1024}); // initialized with null characters

var bytesRead = 0;
while((bytesRead = fileStream.read(tempBuffer)) > -1) {
    // buffer is expanded to contain the new data and the length is updated to reflect this
    messageBuffer.append(tempBuffer, 0, bytesRead);
}
```

Reading data from file using readAll:

```javascript
try {
    var buffer = Ti.Stream.readAll(fileStream);
    if(buffer.length <= 0) {
        Ti.API.info('no data available');
    } else {
        Ti.API.info('received <' + buffer.length + '> bytes of data');
    }
} catch(e) {
    Ti.API.error('error when reading from file stream');
}
```

Writing data from one file to another

```javascript
var inFileStream = Ti.Filesystem.getFile('infile.txt').open(Ti.Filesystem.MODE_READ);
var outBuffer = inFileStream.readAll();

var outFileStream = Ti.Filesystem.getFile('outfile.txt').open(Ti.Filesystem.MODE_APPEND);
outFileStream.write(outBuffer);
```

Write data from one stream to another. Useful for when writing large amounts of data that can not or should not be read into memory as a single chunk.

```javascript
var outFileStream = Ti.Filesystem.getFile('outfile.txt').open(Ti.Filesystem.MODE_APPEND);
var inFileStream = Ti.Filesystem.getFile('infile.txt').open(Ti.Filesystem.MODE_READ);

// writes all data from inFileStream to outFileStream in chunks of 1024
var bytesWritten = Ti.Stream.writeStream(inFileStream, outFileStream, 1024);
Ti.API.info('<' + bytesWritten + '> byte written, closing both streams');

inFileStream.close();
outFileStream.close();
```

Reading data from one stream into a handler method:

```javascript
var pumpCallback = function(e) {
    Ti.API.info('Received data chunk of size <' + e.bytesPumped + '>');

    // do stuff with data (e.data)
    Ti.API.info('Total bytes received so far <' + e.totalBytesPumped + '>');
}

Ti.Stream.pump(inFileStream, pumpCallback, 1024);
```

Writing data from a buffer into a file (process is exactly the same if you replace TiBuffer with TiBlob):

```javascript
var buffer = // acquire TiBuffer from some previous means

var outFileStream = Ti.Filesystem.getFile('outfile.txt').open(Ti.Filesystem.MODE_WRITE);
var inBufferStream = Ti.Stream.createStream({value:buffer, mode:Ti.Stream.MODE_READ});

// note that the means for writing the data from the buffer to the stream is
// identical to the previous example when writing one file to another.  Both operations are
// identical from the view of writeStream since it only sees objects that
// implement the stream interface.

// writes all data from inBufferStream to outFileStream in chunks of 1024
var bytesWritten = Ti.Stream.writeStream(inBufferStream, outFileStream, 1024);Ti.API.info('<' + bytesWritten + '> byte written, closing both streams');

outFileStream.close();
```
