---
title: Encoding Spec
weight: '20'
---

# Encoding Spec

## Contents

## Overview

Applications that read and manipulate binary data also require the ability to encode and decode that data into easily recognizable primitive types. This spec aims to solve this problem by exposing encoding, decoding, and byte order operations on the Ti.Codec module.

## Numbers / widths

This is a list of the accepted encoding types for numbers, and their corresponding width in bytes

| Name | Encoding Type | Width in bytes |
| --- | --- | --- |
| byte | integer | 1 |
| short | integer | 2 |
| int | integer | 4 |
| float | single precision floating-point | 4 |
| long | integer | 8 |
| double | double precision floating-point | 8 |

## Byte Order

Depending on the use of a Ti.Buffer, different underlying primitive byte orders may be required to support various architectures. The standard byte orders are:

* Little Endian : Least significant byte first

* Big Endian : Most significant byte first (aka Network Order)

Byte Order should only matter for operations on multi-byte primitive values ("Numbers")

## Proposed API

### Ti Module

#### Ti Module Methods

* `Ti.Buffer` `createBuffer``(Object args)` : Create a new buffer

    * args : named arguments

        * `Number length` : The length of the buffer (optional, default value is 0 unless `value` is specified, at which case the length of the encoded data is used)

        * `String|Number value` : Value to be encoded. If `value` is a Number, `type` must also be set. (this is simply a convenient way of calling Ti.Codec.encodeString or Ti.Codec.encodeNumber)

        * `String type` : The type of data encoding to use with `value`. Required when `value` is a Number. When `value` is a String, `Ti.Codec.CHARSET_UTF8` is the default.

        * `Number byteOrder` : The byte order of this buffer. The OS native byte order is used by default

### Ti.Codec Module

#### Ti.Codec Constants

* `String CHARSET_ASCII` : The [ASCII Character Set](http://en.wikipedia.org/wiki/ASCII), value: "ascii"

* `String CHARSET_ISO_LATIN_1` : The [ISO 8859-1 (LATIN-1) Character Set](http://en.wikipedia.org/wiki/ISO/IEC_8859-1), value "iso-latin-1"

* `String CHARSET_UTF8` : The [UTF-8 Character Set](http://en.wikipedia.org/wiki/UTF-8), value: "utf8"

* `String CHARSET_UTF16` : The [UTF-16 Character Set](http://en.wikipedia.org/wiki/UTF-16/UCS-2), value: "utf16"

* `String CHARSET_UTF16BE` : The [UTF-16 Character Set](http://en.wikipedia.org/wiki/UTF-16/UCS-2) with Big Endian byte order, value: "utf16be"

* `String CHARSET_UTF16LE` : The [UTF-16 Character Set](http://en.wikipedia.org/wiki/UTF-16/UCS-2) with Little Endian byte order, value: "utf16le"

* `String TYPE_BYTE` : 8 bit integer encoding type, value: "byte"

* `String TYPE_SHORT` : 16 bit integer encoding type, value: "short"

* `String TYPE_INT` : 32 bit integer encoding type, value: "int"

* `String TYPE_FLOAT` : 32 bit single precision floating-point type, value: "float"

* `String TYPE_LONG` : 64 bit integer encoding type, value: "long"

* `String TYPE_DOUBLE` : 64 bit double precision floating-point type, value: "double"

* `Number BIG_ENDIAN` : Big Endian byte order (aka Network Order)

* `Number LITTLE_ENDIAN` : Little Endian byte order

#### Ti.Codec Methods

* `Number` `encodeNumber``(Object args)` : encodes the Number `source` into `dest` using the passed in data `type`

    * `args` : Named arguments

        * `Number source` : The Number to encode (required)

        * `Ti.Buffer dest` : The destination buffer (required)

        * `Number position` : The position in `dest` to set the encoded data (optional, default: 0)

        * `String type` : The encoding type to use. Must be `TYPE_BYTE`, `TYPE_SHORT`, `TYPE_INT`, `TYPE_FLOAT`, `TYPE_LONG`, or `TYPE_DOUBLE` (required)

        * `Number byteOrder` : The byte order to encode with (optional, default: native byte order)

    * returns the position after the encoded Number inside `dest`

* `Number` `decodeNumber``(Object args)` : decodes `source` (starting at the optional `position`) using the passed in data `type`

    * `args` : Named arguments

        * `Ti.Buffer source` : The buffer to decode (required)

        * `String type` : The encoding type to use. Must be `TYPE_BYTE`, `TYPE_SHORT`, `TYPE_INT`, `TYPE_FLOAT`, `TYPE_LONG`, or `TYPE_DOUBLE` (required)

        * `Number position` : The position to start at (optional, default: 0)

        * `Number byteOrder` : The byte order to decode with (optional, default: native byte order)

    * returns the Number decoded from `source`

    * throws an Exception if `buffer` is null, or `position` is greater than `buffer`'s length

* `Number` `encodeString``(Object args)` : encodes the String `source` into `dest` using `charset`

    * `args` : Named arguments

        * `String source` : The string to encode (required)

        * `Ti.Buffer dest` : The destination buffer (required)

        * `Number destPosition` : The position to set the encoded data (optional, default: 0)

        * `Number sourcePosition` : The position in `source` to start encoding (optional, default: 0)

        * `Number sourceLength` : The number of characters in `source` to encode (optional, default: length of `source`)

        * `String charset` : The character set to use when encoding this string to bytes (optional, default: `CHARSET_UTF8`)

    * returns the position after the encoded String inside `dest`

    * throws an Exception if `charset` is not a valid character set, `string` is null, or either `sourcePosition`, `sourceLength`, or `sourcePosition`+`sourceLength` is greater than `string`'s length

* `String` `decodeString``(Object args)` : decodes the passed in `buffer` into a String starting at `position`, with `length` bytes, using the supplied character set

    * `args` : Named arguments

        * `Ti.Buffer source` : The buffer to decode (required)

        * `Number position` : The position to start decoding (optional, default: 0)

        * `Number length` : The number of bytes to decode (optional, default: length of `source`)

        * `String charset` : The character set to use when decoding this buffer (optional, default: `CHARSET_UTF8`)

    * throws an Exception if `charset` is not a valid character set, `buffer` is null, or either `position`, `length`, or `position`+`length` is greater than `buffer`'s length

* `Number` `getNativeByteOrder``()` : Get the OS native byte order (either `BIG_ENDIAN` or `LITTLE_ENDIAN`)
