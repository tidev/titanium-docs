---
title: Buffer Spec
weight: '10'
---

# Buffer Spec

## Contents

## Overview

Titanium mobile needs support for binary data operations. A new buffer type needs to be created that will be used for read / write operations on streams.

::: tip 💡 Hint
A separate spec exists that outlines encoding support for numeric and string values. The [Encoding Spec](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/Encoding_Spec/) enables the addition of reading and writing of numeric and string values along with support for specific encoding.
:::

## Definitions

* Buffer - Generally represents temporary storage for data when moving from one location to another (such as reading data off a socket and then writing to a file). In our case, the buffer will be a container for binary data rather than being limited to only string data.

## Proposed Tasks

* Create Buffer data type for use with Stream IO

### Ti.Buffer

In order to support generic handling of Stream operations, all read / write operations will utilize the new buffer type. Buffer type will allow for array style access for individual bytes (IE: myarray\[spe:3\] = 1)

Creating buffer object:

```
// the only creation argument supported is size
Buffer Ti.createBuffer() // buffer is empty with size 0 if no size is specified
Buffer Ti.createBuffer({length: x})
```

Members:

```
/*
length is accessed via standard get / set methods.  When length is modified,
the buffer will be re-sized while preserving existing where possible.  If the new buffer size
is smaller than the size of the existing data then the existing data will be truncated down to
the size of the new buffer.
*/
int length;
```

Methods:

```
// appends specified buffer to the current buffer.  Buffer is grown dynamically to accommodate the
// additional data if need be.  returns the number of bytes appended
int append(Buffer sourceBuffer)

// same as normal append except this allows appending only <sourceLength> bytes from the
// <sourceBuffer> starting at <sourceOffset>. returns the number of bytes appended
int append(Buffer sourceBuffer, int sourceOffset, int sourceLength)

// inserts <sourceBuffer> into the current buffer at <offset>.  Buffer is grown to accommodate
// the new data.  returns the number of bytes inserted
int insert(Buffer sourceBuffer, int offset)

// inserts <sourceLength> amount of data starting at <sourceOffset> from <sourceBuffer> into
// current buffer at <offset>.  Buffer is grown to accommodate the new data.  returns
// the number of bytes inserted
int insert(Buffer sourceBuffer, int offset, int sourceOffset, int sourceLength)

// copies the contents of <sourceBuffer> into the current buffer at <offset>.  will not
// expand buffer if there is not enough room in the current buffer to accomodate all
// the requested data from <sourceBuffer>.  returns the number of bytes copied
int copy(Buffer sourceBuffer, int offset)

// copies <sourceLength> contents from <sourceBuffer> starting at <sourceOffset> into the
// current buffer at <offset>.  will not expand buffer if there is not enough room
// in the current buffer to accomodate all the request data from <sourceBuffer>.  returns
// the number of bytes copied
int copy(Buffer sourceBuffer, int offset, int sourceOffset, int sourceLength)

Buffer clone() // create new copy of the current buffer

// creates a new buffer from the original buffer contents starting at <offset>
// and ending at <offset> + <length>
Buffer clone(int offset, int length)

void fill(int fillByte) // fills buffer with <fillByte>
// fills buffer starting from <offset> until <length> number of <fillByte> has
// been written or the end of the buffer is reached
void fill(int fillByte, int offset, int length)

void clear() // clears buffer contents but does not change the size of the buffer

// releases the space allocated to the buffer, sets length to 0.  This is effectively
// nothing more than an alias for buffer.length = 0
void release()

String toString() // converts buffer to string
Blob toBlob() // converts buffer to TiBlob
```
