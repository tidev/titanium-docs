---
title: Titanium.IOStream
methods:
  - name: read
    summary: Reads data from this stream into a buffer.
    description: >
      <p>Takes an optional <code>resultsCallback</code> function as the last
      argument. If specified,<br>

      the operation is done asynchronously. If no callback is passed in, the<br>

      operation is done synchronously.</p>

      <p>If <code>offset</code> and <code>length</code> are specified, data is
      written into the buffer starting at<br>

      position <code>offset</code>. Data is read from this stream until one of
      the following occurs:</p>

      <ul>

      <li>the end of this stream is reached</li>

      <li>the end of the buffer is reached</li>

      <li>a total of <code>length</code> bytes have been read from the
      stream</li>

      </ul>

      <p>If <code>offset</code> and <code>length</code> are omitted, data is
      written starting at the beginning<br>

      of the buffer.</p>

      <p>When called synchronously: returns the number of bytes read, or -1 if
      the end of<br>

      stream was reached before any data was read.</p>

      <p>Returns 0 when called asynchronously.</p>

      <p>Throws an exception on error. For example, if the <code>offset</code>
      value is past<br>

      the last byte of <code>buffer</code>.</p>
    parameters:
      - name: buffer
        type: Titanium.Buffer
        summary: Buffer to read stream data into.
      - name: offset
        type: Number
        summary: |
          Offset into the buffer to start writing stream data.<br>
          If specified, <code>length</code> must also be specified.<br>
        optional: true
      - name: length
        type: Number
        summary: |
          Maximum number of bytes to read.<br>
          If specified, <code>offset</code> must also be specified.<br>
        optional: true
      - name: resultsCallback
        type: Callback<ReadCallbackArgs>
        summary: Function to call with the results of the read operation.
        optional: true
    returns:
      type: Number
      summary: Number of bytes read.
  - name: write
    summary: Writes data from a buffer to this stream.
    description: >
      <p>Takes an optional <code>resultsCallback</code> function as the last
      argument. If specified,<br>

      the operation is done asynchronously. If no callback is passed in, the<br>

      operation is done synchronously.</p>

      <p>If <code>offset</code> and <code>length</code> are specified, data is
      read from the buffer starting at<br>

      <code>offset</code>. Bytes are read from the buffer and written to the
      stream until:</p>

      <ul>

      <li>the end of the buffer is reached</li>

      <li><code>length</code> bytes have been written</li>

      <li>the stream returns an error</li>

      </ul>

      <p>If <code>offset</code> and <code>length</code> are omitted, all of the
      data in the buffer is written to<br>

      this stream.</p>

      <p>Returns the number of bytes actually written when called
      synchronously.</p>

      <p>Returns 0 when called asynchronously.</p>

      <p>Throws an exception if an error is encountered.</p>
    parameters:
      - name: buffer
        type: Titanium.Buffer
        summary: Buffer to write to this stream.
      - name: offset
        type: Number
        summary: |
          Offset in the buffer of the first byte to write to the stream.<br>
          If specified, <code>length</code> must also be specified.<br>
        optional: true
      - name: length
        type: Number
        summary: |
          Maximum number of bytes to write to the stream.<br>
          If specified, <code>offset</code> must also be specified.<br>
        optional: true
      - name: resultsCallback
        type: Callback<WriteCallbackArgs>
        summary: Function to call with the results of the write operation.
        optional: true
    returns:
      type: Number
      summary: Number of bytes written.
  - name: isWritable
    summary: Indicates whether this stream is writable.
    returns:
      type: Boolean
      summary: True if stream is writable, false otherwise.
  - name: isReadable
    summary: Indicates whether this stream is readable.
    returns:
      type: Boolean
      summary: True if stream is readable, false otherwise.
  - name: close
    summary: Closes this stream.
    description: |
      <p>Throws an exception on error.</p>
examples:
  - title: Write Data to a Stream
    code:
      - content: >-
          var outBuffer = Ti.createBuffer({data: "write me"});

          // stream object could be socket, file, buffer or blob

          var outStream = Ti.Stream.createStream({mode: Ti.Stream.MODE_WRITE});


          var bytesWritten = outStream.write(outBuffer);  // writes entire
          buffer to stream

          Ti.API.info("Bytes written:" + bytesWritten);  // should be 8


          bytesWritten = outStream.write(outBuffer, 2, 5);  // only writes "ite
          m" to stream

          Ti.API.info("Bytes written:" + bytesWritten);  // should be 5
        language: js
    intro: This example demonstrates writing data to a stream.
  - title: Read Data From a Stream
    code:
      - content: |-
          var size = 0;
          // read data one buffer full at a time
          while ((size = instream.read(buffer)) > -1) {
              // do something with the data here ...
              Ti.API.info("Read " + size + " bytes.");
          }
        language: js
    intro: >-
      This shows a simple example of reading data from a stream, one buffer full
      at a

      time.
  - title: Read Data With Offset and Length
    code:
      - content: >-
          var inBuffer = Ti.createBuffer({ value: "Hello [           ]" });


          // Read the first 6 bytes from the stream to the buffer, starting at
          position 10.

          var bytesRead = inStream.read(inBuffer, 10, 6);


          Ti.API.info("Bytes read: " + bytesRead);

          Ti.API.info(inBuffer.toString());


          // Read the next 8  bytes from the stream to the buffer, starting at
          position 8.

          bytesRead = inStream.read(inBuffer, 8, 8);


          Ti.API.info("Bytes read: " + bytesRead);

          Ti.API.info(inBuffer.toString());
        language: js
      - content: |-
          [INFO] Bytes read: 6
          [INFO] Hello [   World   ]
          [INFO] Bytes read: 8
          [INFO] Hello [ Titanium  ]
        language: ''
    intro: >-
      This example shows how to read data from a stream into a buffer. We assume
      that

      the `inStream` variable holds a previously initialized stream that
      contains the

      string, "World Titanium".
---

# Titanium.IOStream

IOStream is the interface that all stream types implement.

See the [Titanium.Stream](/api/titanium/stream) module for related utility methods that support asynchronous
I/O.


**Extends:** `Titanium.Proxy` · **Since:** 1.7, 1.7, 1.7, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiMethods />

<ApiExamples />

