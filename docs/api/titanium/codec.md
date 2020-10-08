---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Codec/Codec.yml
---
# Titanium.Codec

<TypeHeader/>

## Overview

The `Codec` module can be used for encoding strings and numbers into [Buffer](Titanium.Buffer)
objects, and decoding primitive types from buffers.

### Byte Order

Multi-byte data can be stored in two different byte orders: big-endian or
little-endian. In big-endian byte order, the most significant or highest-value
byte is stored first. For example, the 4-byte integer 0xFEDCBA98 is made up of the
bytes 0xFE, 0xDC, 0xBA and 0x98, from most-significant to least-significant.

If we represent a buffer as an array of byte values, a big-endian encoding of
0xFEDCBA98 would look like this:

``` js
[ 0xFE, 0xDC, 0xBA, 0x98 ]
```

In little-endian order, the bytes would be stored in this order:

``` js
[ 0x98, 0xBA, 0xDC, 0xFE ]
```

For 8-bit character encodings, including ASCII, Latin-1 and UTF-8, byte order is not
significant: the text is a sequence of individual bytes.

For UTF-16, text is represented as a sequence of 16-bit values. For example,
a capital T in UTF-16 is 0x0054, and lowercase i is 0x0069. If we encode the string
"Ti" with UTF-16 in big-endian byte order, we get:

``` js
[ 0x00, 0x54, 0x00, 0x69 ]
```

In UTF-16 with little-endian byte order, "Ti" is encoded as:

``` js
[ 0x54, 0x00, 0x69, 0x00 ]
```

Note that the bytes for each character are stored least-significant byte first, but
the order of the characters is unchanged.

<ApiDocs/>
