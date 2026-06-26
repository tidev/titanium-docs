---
title: Titanium.Buffer
properties:
  - name: length
    type: Number
    summary: Length of the buffer in bytes.
    description: >
      <p>When <code>length</code> is modified the buffer will be re-sized while
      preserving existing data where<br>

      possible. If the new buffer length is smaller than the length of the
      existing data then the<br>

      existing data will be truncated down to the size of the new buffer.</p>

      <p>Resizing a buffer by setting its length should be used sparingly due to
      the associated overhead.</p>
  - name: value
    type: Number, String
    summary: Data to be encoded.
    description: >
      <p>If <code>value</code> is a Number, <code>type</code> must also be set.
      (This is simply a convenient way of<br>

      calling <a href="/api/titanium/codec">Titanium.Codec.encodeString</a> or
      <a href="/api/titanium/codec">Titanium.Codec.encodeNumber</a>.)</p>
  - name: type
    type: String
    summary: The type of data encoding to use with <code>value</code>.
    description: >
      <p>Required when <code>value</code> is a Number. For numbers, specify a
      <code>TYPE</code> constant<br>

      from <a href="/api/titanium/codec">Titanium.Codec</a>, for example, <a
      href="/api/titanium/codec/type_double">Titanium.Codec.TYPE_DOUBLE</a>.</p>

      <p>When <code>value</code> is a String, specify a <code>CHARSET</code>
      constant from <a href="/api/titanium/codec">Titanium.Codec</a>.</p>
  - name: byteOrder
    type: Number
    summary: Byte order of this buffer.
    description: >
      <p>Specify either <a
      href="/api/titanium/codec/big_endian">Titanium.Codec.BIG_ENDIAN</a> or <a
      href="/api/titanium/codec/little_endian">Titanium.Codec.LITTLE_ENDIAN</a>.</p>
methods:
  - name: append
    summary: Appends <code>sourceBuffer</code> to the this buffer.
    description: >
      <p>This buffer is grown dynamically to accommodate the additional data if
      need be.</p>

      <p>If <code>sourceOffset</code> and <code>sourceLength</code> are
      specified, data from <code>sourceBuffer</code> is<br>

      copied starting at position <code>sourceOffset</code>, and no more than
      <code>sourceLength</code> bytes<br>

      are copied.</p>
    parameters:
      - name: sourceBuffer
        type: Titanium.Buffer
        summary: Buffer to append to this buffer.
      - name: sourceOffset
        type: Number
        summary: |
          Offset to start reading buffer data from.<br>
          If specified, <code>sourceLength</code> must also be specified.<br>
        optional: true
      - name: sourceLength
        type: Number
        summary: |
          Number of bytes to read from <code>sourceBuffer</code>.<br>
          If specified, <code>sourceOffset</code> must also be specified.<br>
        optional: true
    returns:
      type: Number
      summary: The number of bytes appended.
  - name: insert
    summary: >-
      Inserts data from <code>sourceBuffer</code> into this buffer at
      <code>offset</code>.
    description: >
      <p>Buffer is grown to accommodate the new data.</p>

      <p>If <code>sourceOffset</code> and <code>sourceLength</code> are
      specified, <code>sourceLength</code> bytes<br>

      of data are copied from <code>sourceBuffer</code>, with the first byte at
      <code>sourceOffset</code>.</p>
    parameters:
      - name: sourceBuffer
        type: Titanium.Buffer
        summary: Buffer holding data to insert into this buffer.
      - name: offset
        type: Number
        summary: |
          Offset in this buffer to insert the first byte copied from<br>
          <code>sourceBuffer</code>.<br>
      - name: sourceOffset
        type: Number
        summary: |
          Offset in <code>sourceBuffer</code> of the first byte to insert.<br>
          If specified, <code>sourceLength</code> must be specified as well.<br>
        optional: true
      - name: sourceLength
        type: Number
        summary: |
          Number of bytes to insert from <code>sourceBuffer</code>.<br>
          If specified, <code>sourceOffset</code> must be specified as well.<br>
        optional: true
    returns:
      type: Number
      summary: The number of bytes inserted.
  - name: copy
    summary: >-
      Copies data from <code>sourceBuffer</code> into the current buffer at
      <code>offset</code>.
    description: >
      <p>Does not expand this buffer if there is not enough room to accommodate
      the data<br>

      from <code>sourceBuffer</code>.</p>

      <p>If <code>sourceOffset</code> and <code>sourceLength</code> are
      specified, bytes are copied from<br>

      <code>sourceBuffer</code> starting at <code>sourceOffset</code>, and a
      maximum of <code>sourceLength</code> bytes<br>

      are copied.</p>
    parameters:
      - name: sourceBuffer
        type: Titanium.Buffer
        summary: Buffer to copy data from.
      - name: offset
        type: Number
        summary: Offset in this buffer for the first byte of the copied data.
      - name: sourceOffset
        type: Number
        summary: |
          Offset in <code>sourceBuffer</code> to copy data from.<br>
          If specified, <code>sourceLength</code> must be specified as well.<br>
        optional: true
      - name: sourceLength
        type: Number
        summary: |
          Number of bytes to copy from <code>sourceBuffer</code>.<br>
          If specified, <code>sourceOffset</code> must be specified as well.<br>
        optional: true
    returns:
      type: Number
      summary: The number of bytes copied.
  - name: clone
    summary: Creates a complete or partial copy of this buffer.
    description: >
      <p>If called with no arguments, returns a complete copy of the current
      buffer.</p>

      <p>If <code>offset</code> and <code>length</code> are specified, creates a
      new buffer from the original<br>

      buffer contents starting at <code>offset</code> and ending at
      <code>offset</code>+<code>length</code>-1.</p>
    parameters:
      - name: offset
        type: Number
        summary: |
          Offset of first byte of this buffer to clone.<br>
          If specified, <code>length</code> must be specified as well.<br>
        optional: true
      - name: length
        type: Number
        summary: Number of bytes of data to clone.
        optional: true
    returns:
      type: Titanium.Buffer
  - name: fill
    summary: Fills this buffer with the specified byte value.
    description: >
      <p>Fills the buffer by setting byte values to <code>fillByte</code>.</p>

      <p>If <code>offset</code> and <code>length</code> are specified, fills the
      buffer starting at<br>

      <code>offset</code> and ending at
      <code>offset</code>+<code>length</code>-1.</p>

      <p>If <code>offset</code> and <code>length</code> are omitted, fills the
      entire buffer.</p>
    parameters:
      - name: fillByte
        type: Number
        summary: Byte to fill buffer with.
      - name: offset
        type: Number
        summary: Offset of the first byte to set to <code>fillByte</code>.
        optional: true
      - name: length
        type: Number
        summary: Number of bytes to fill.
        optional: true
  - name: clear
    summary: Clears this buffer's contents but does not change the size of the buffer.
  - name: release
    summary: Releases the space allocated to the buffer, and sets its length to 0.
    description: |
      <p>This is effectively the same as <code>buffer.length = 0</code>.</p>
  - name: toString
    summary: Converts this buffer to a String.
    returns:
      type: String
  - name: toBlob
    summary: Converts this buffer to a <a href="/api/titanium/blob">Titanium.Blob</a>.
    returns:
      type: Titanium.Blob
---

# Titanium.Buffer

Buffer is a mutable, resizable container for raw data.

A `Buffer` works like a resizable array of byte values.

Use the &lt;Titanium.createBuffer&gt; method to create a buffer.


**Extends:** `Titanium.Proxy` · **Since:** 1.7, 1.7, 1.7, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

