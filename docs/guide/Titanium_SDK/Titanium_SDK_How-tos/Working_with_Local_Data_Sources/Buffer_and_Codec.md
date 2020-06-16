---
title: Buffer and Codec
weight: '50'
---

# Buffer and Codec

## Objective

In this section, you'll learn about using the `Buffer` object and the `Codec` module to interact with binary data streams.

## Definitions

The [Titanium.Buffer](#!/api/Titanium.Buffer) is a container for bytes. It differs from [Titanium.Blob](#!/api/Titanium.Blob) in that a \`Buffer\` is mutable and resizable.

The [Titanium.Codec](#!/api/Titanium.Codec) provides utility methods to convert to and from binary data.

`Buffer` and `Codec` are primarily used in conjunction with [Titanium.IOStream](#!/api/Titanium.IOStream) objects, including [Titanium.Network.Socket.TCP](#!/api/Titanium.Network.Socket.TCP) and [Titanium.Filesystem.FileStream](#!/api/Titanium.Filesystem.FileStream).

The [Titanium.Stream](#!/api/Titanium.Stream) module provides additional utility methods for working with streams.

## Titanium.Buffer

Buffers are created from the Titanium module using `Titanium.createBuffer()`. Buffers are similar to byte arrays in other programming languages but have the ability to be resized. Buffers may be grown by setting the `length` property to a larger value, or when using the `insert()` or `append()` methods. Their length may also be reduced by setting the `length` property to a smaller value or using the `release()` method.

You can create an empty buffer with a specified initial size, or use a string or numeric value as the initial value of a buffer. The following code excerpt show several ways to initialize a buffer.

```javascript
// Create a Buffer with initial length of 0
var buffer1 = Ti.createBuffer();

// Create a buffer with initial size of 512 bytes
var buffer2 = Ti.createBuffer({ length: 512 });

// Create a buffer, initialized with a string value.
var buffer3 = Ti.createBuffer({ value: "This is a string, which will form the contents of a new buffer."});
```

The following code excerpt shows some other manipulations on a buffer, including appending one buffer to another and truncating buffers.

```javascript
//
var buffer1 = Ti.createBuffer({ value: "One buffer full of data. " });
var buffer2 = Ti.createBuffer({ value: "Another buffer full of data." });

// Append the contents of one buffer to another
buffer1.append(buffer2);
Ti.API.info(buffer1.toString());

// Truncate the buffer to 32 bytes
buffer1.length = 32;
Ti.API.info(buffer1.toString());

// Set buffers to zero length and release underlying storage.
buffer1.release();
buffer2.release();
```

Buffers can also be addressed directly as if they were arrays of byte values, as shown in the following code excerpt.

```javascript
var buffer = Ti.createBuffer({ length: 2 });
buffer[0] = 1;
buffer[1] = 3;

var buffer2 = Ti.createBuffer({ length: 1 });
buffer2[0] = 2;
buffer.insert(buffer2, 1);

// writes 123
Ti.API.info(String(buffer[0]) + String(buffer[1]) + String(buffer[2]));
```

The `Buffer` object's `append`, `copy`, and `insert` methods resize the buffer as needed. However, when you access a buffer as an array, the buffer is _not_ automatically extended like a JavaScript array. For example, the following code throws an exception, because the value is being assigned to a position past the end of the buffer.

```javascript
var buffer = Ti.createBuffer({ length: 2 });
buffer[100] = 1;
```

Also note that when assigning values to the buffer this way, the values must be byte values.

```
// Assigning a string value -- throws an exception
buffer[0] = "a";
// Assigning a byte value works
buffer[0] = "a".charCodeAt(0);
```

## Titanium.Codec

The `Titanium.Codec` module provides methods for encoding and decoding binary data from buffers into JavaScript primitives. The `Codec` module supports conversion of two basic primitive types: Numbers and Strings. `Codec` also handles byte order conversion.

The `Codec` module methods do **not** resize the target buffer.

### Numeric conversions

Numeric conversion is provided for the following types: `byte`, `short`, `int`, `long`, `float`, and `double`.

The following code excerpt encodes a 4-byte integer into the buffer, starting at index 10 (the 11th byte of the integer).

```javascript
// Encode a 4 byte integer into position 10 using BIG_ENDIAN encoding
var buffer = Ti.createBuffer({ length: 100 });
Ti.Codec.encodeNumber({
    source: 0x3456789a,
    dest: buffer,
    position: 10,
    type: Ti.Codec.TYPE_INT,
    byteOrder: Ti.Codec.BIG_ENDIAN
});
```

The following code excerpt **decodes** the 4-byte integer written to the buffer in the previous example.

```javascript
//Decode a 4 byte integer from position 10 using BIG_ENDIAN encoding
var value = Ti.Codec.decodeNumber({
    source: buffer,
    position: 10,
    type: Ti.Codec.TYPE_INT,
    byteOrder: Ti.Codec.BIG_ENDIAN
});
```

### String conversions

String conversion is provided using the following character sets: `ISO_LATIN1`, `UTF8`, `UTF16`, `UTF16BE`, and `UTF16LE`. The default is UTF-8. Titanium.Codec also suports both Big Endian and Little Endian byte ordering.

The following excerpt encodes a string into a buffer, then trims the buffer to the length of the encoded string.

```javascript
var buffer = Ti.createBuffer({ length: 1024 });
var encodedLength = Ti.Codec.encodeString({
    source: "hello world",
    dest: buffer
});
buffer.length = encodedLength;
```

The following excerpt decodes a UTF-8 string from a buffer.

```javascript
var string = Ti.Codec.decodeString({ source: buffer });
```

### Buffer creation with encode

`Titanium.createBuffer()` has convenience options for creating a buffer from existing data. These options are just a convenient alternative to calling \`createBuffer\` and \`encodeString\` or \`encodeNumber\` separately, as shown in the following excerpt.

```javascript
// Create a buffer and encode a string at the same time.
// Using default encoding of Ti.Codec.CHARSET_UTF8
var buffer_utf8 = Ti.createBuffer({ value: "Hello World" });

// Create a buffer and encode a string to UTF16
var buffer_utf16 = Ti.createBuffer({
    value: "Hello World",
    type: Ti.Codec.CHARSET_UTF16
});
```
