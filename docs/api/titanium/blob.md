---
title: Titanium.Blob
properties:
  - name: file
    type: Titanium.Filesystem.File
    summary: >
      File object represented by this blob, or <code>null</code> if this blob is
      not<br>

      associated with a file.<br>
  - name: length
    type: Number
    summary: Length of this blob in bytes.
  - name: text
    type: String
    summary: UTF-8 string representation of the data in this blob.
    description: >
      <p>If this blob represents pure binary data, the value will be
      <code>null</code>.</p>
  - name: mimeType
    type: String
    summary: Mime type of the data in this blob.
  - name: height
    type: Number
    summary: >-
      If this blob represents an image, this is the height of the image in
      pixels.
    description: >
      <p>If this blob doesn't represent an image, <code>height</code> is
      reported as 0.</p>

      <p><strong>NOTE 1</strong>: On SDK versions prior to 9.1.0, Ti.Blob images
      may have reported in points, not pixels.<br>

      This would occur for images with a higher density/scale returned by <a
      href="/api/titanium/ui/view">Titanium.UI.View.toImage</a> or images with
      <code>@dx</code> density suffixes.<br>

      You may multiply by <a
      href="/api/titanium/platform/display-caps">Titanium.Platform.DisplayCaps.logicalDensityFactor</a>
      to try and determine the pixels, but this value may be off for some
      pixel/density combinations.<br>

      (e.g. a <code>10px</code> image would report as <code>3</code> on a
      <code>3x</code> density screen, so multiplying would give you
      <code>9</code> pixels, which is still incorrect)</p>

      <p><strong>NOTE 2</strong>: This represents the height the platform
      decodes the image to in memory. iOS will automatically<br>

      rotate a JPEG based on its EXIF orientation when loaded into memory, but
      Android does not and instead<br>

      rotates it when shown on-screen. You can read the <a
      href="Titanium.Blob.uprightHeight">uprightHeight</a> to determine<br>

      what the image height will be after rotation, if applicable.</p>
  - name: uprightHeight
    type: Number
    summary: >-
      If the blob references an image, this provides the height in pixels after
      factoring in EXIF orientation.
    description: >
      <p>The height of the image in pixels after rotating/flipping it based on
      its EXIF orientation,<br>

      which is commonly the case with JPEGs. Will return the save value as the
      <a href="Titanium.Blob.height">height</a><br>

      property if image does not have an EXIF orientation or if the orientation
      is already upright.</p>

      <p>On iOS, properties <a href="Titanium.Blob.height">height</a> and <a
      href="Titanium.Blob.uprightHeight">uprightHeight</a> will always
      match.<br>

      On Android, these properties may differ when loading a JPEG since this
      platform does not automatically<br>

      rotate the loaded image in memory, but it is rotated when displaying it
      on-screen.</p>
    since: 9.2.0
  - name: width
    type: Number
    summary: >-
      If this blob represents an image, this is the width of the image in
      pixels.
    description: >
      <p>If this blob doesn't represent an image, <code>width</code> is reported
      as 0.</p>

      <p><strong>NOTE 1</strong>: On SDK versions prior to 9.1.0, Ti.Blob images
      may have reported in points, not pixels.<br>

      This would occur for images with a higher density/scale returned by <a
      href="/api/titanium/ui/view">Titanium.UI.View.toImage</a> or images with
      <code>@dx</code> density suffixes.<br>

      You may multiply by <a
      href="/api/titanium/platform/display-caps">Titanium.Platform.DisplayCaps.logicalDensityFactor</a>
      to try and determine the pixels, but this value may be off for some
      pixel/density combinations.<br>

      (e.g. a <code>10px</code> image would report as <code>3</code> on a
      <code>3x</code> density screen, so multiplying would give you
      <code>9</code> pixels, which is still incorrect)</p>

      <p><strong>NOTE 2</strong>: This represents the width the platform decodes
      the image to in memory. iOS will automatically<br>

      rotate a JPEG based on its EXIF orientation when loaded into memory, but
      Android does not and instead<br>

      rotates it when shown on-screen. You can read the <a
      href="Titanium.Blob.uprightWidth">uprightWidth</a> to determine<br>

      what the image width will be after rotation, if applicable.</p>
  - name: uprightWidth
    type: Number
    summary: >-
      If the blob references an image, this provides the width in pixels after
      factoring in EXIF orientation.
    description: >
      <p>The width of the image in pixels after rotating/flipping it based on
      its EXIF orientation,<br>

      which is commonly the case with JPEGs. Will return the save value as the
      <a href="Titanium.Blob.width">width</a><br>

      property if image does not have an EXIF orientation or if the orientation
      is already upright.</p>

      <p>On iOS, properties <a href="Titanium.Blob.width">width</a> and <a
      href="Titanium.Blob.uprightWidth">uprightWidth</a> will always match.<br>

      On Android, these properties may differ when loading a JPEG since this
      platform does not automatically<br>

      rotate the loaded image in memory, but it is rotated when displaying it
      on-screen.</p>
    since: 9.2.0
  - name: nativePath
    type: String
    summary: >
      If this blob represents a <a href="Titanium.Filesystem.File">File</a>,
      this is the file URL<br>

      that represents it.<br>
    description: >
      <p>If this blob doesn't represent a file, the value of
      <code>nativePath</code> is <code>null</code>.</p>
  - name: size
    type: Number
    summary: >
      Size of the blob in pixels (for image blobs) or bytes (for all other
      blobs).<br>
    description: >
      <p>If this blob represents an image, this is the total number of pixels in
      the image.<br>

      Otherwise it returns the number of bytes in the binary data.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 7.2.0
      iphone: 0.9.0
      ipad: 0.9.0
      macos: 9.2.0
  - name: rotation
    type: Number
    summary: >-
      EXIF rotation of the image if available. Can be <code>undefined</code> if
      no orientation was found.
    platforms:
      - android
    since:
      android: 12.3.0
methods:
  - name: toString
    summary: Returns a string representation of this blob.
    returns:
      type: String
  - name: append
    summary: Appends the data from another blob to this blob.
    parameters:
      - name: blob
        type: Titanium.Blob
        summary: Blob to append to this blob.
  - name: imageAsCropped
    summary: >-
      Creates a new blob by cropping the underlying image to the specified
      dimensions.
    description: |
      <p>Returns the cropped image as a blob.</p>
      <p>If this blob doesn't represent an image, returns <code>null</code>.</p>
    parameters:
      - name: options
        type: Dimension
        summary: >
          Image cropping options. &lt;Dimension&gt; properties are all optional
          for this use case.<br>

          <br>

          Defaults will be to use the current image's
          <code>height</code>/<code>width</code> and to center the cropped
          rectangle horizontally/vertically on the original image
          (<code>x</code>/<code>y</code>).<br>
    returns:
      type: Titanium.Blob
      summary: Cropped image as a blob.
  - name: imageAsResized
    summary: >-
      Creates a new blob by resizing and scaling the underlying image to the
      specified dimensions.
    description: |
      <p>Returns the resized image as a blob.</p>
      <p>If this blob doesn't represent an image, returns <code>null</code>.</p>
    parameters:
      - name: width
        type: Number
        summary: Width to resize this image to.
      - name: height
        type: Number
        summary: Height to resize this image to.
    returns:
      type: Titanium.Blob
      summary: Resized image as a blob.
  - name: imageAsCompressed
    summary: >-
      Creates a new blob by compressing the underlying image to the specified
      quality.
    description: |
      <p>Returns the compressed image as a blob.</p>
      <p>If this blob doesn't represent an image, returns <code>null</code>.</p>
    parameters:
      - name: quality
        type: Number
        summary: >-
          Quality to compress this image to. From 0.0 (lowest quality) to 1.0
          (highest quality).
    returns:
      type: Titanium.Blob
      summary: Compressed image as a blob.
  - name: imageAsThumbnail
    summary: >-
      Returns a thumbnail version of the underlying image, optionally with a
      border and rounded corners.
    description: >
      <p>Returns the thumbnail image as a blob.</p>

      <p>If this blob doesn't represent an image, returns <code>null</code>.</p>

      <p>The final height/width of the image will actually be <code>size + (2 *
      borderSize)</code> as the border is added around the image.<br>

      By default the <code>borderSize</code> is <code>1</code>.</p>
    parameters:
      - name: size
        type: Number
        summary: Size of the thumbnail, in either width or height.
      - name: borderSize
        type: Number
        summary: Width of the thumbnail's border.
        optional: true
      - name: cornerRadius
        type: Number
        summary: Radius of the thumbnail's corners.
        optional: true
    returns:
      type: Titanium.Blob
      summary: The image thumbnail in a blob.
  - name: imageWithAlpha
    summary: Returns a copy of the underlying image with an added alpha channel.
    description: >
      <p>Returns the new image as a blob, or <code>null</code> if this blob is
      not an image.</p>
    returns:
      type: Titanium.Blob
      summary: >-
        The image with an alpha channel in a blob, or `null` if this blob is not
        an image.
  - name: imageWithRoundedCorner
    summary: Returns a copy of the underlying image with rounded corners added.
    description: >
      <p>Returns the new image as a blob, or <code>null</code> if this blob is
      not an image.<br>

      The image will grow in height and width by <code>(2 * borderSize)</code>
      as the border is added around the image to avoid scaling.<br>

      By default the <code>borderSize</code> is <code>1</code>.</p>
    parameters:
      - name: cornerSize
        type: Number
        summary: Size of the rounded corners in pixels.
      - name: borderSize
        type: Number
        summary: Width of the border in pixels.
        optional: true
    returns:
      type: Titanium.Blob
      summary: >-
        Image with a rounded corner in a blob, or `null` if this blob is not an
        image.
  - name: imageWithTransparentBorder
    summary: Returns a copy of the underlying image with an added transparent border.
    description: >
      <p>Returns the new image as a blob, or <code>null</code> if this blob is
      not an image.<br>

      The image will grow in height and width by <code>(2 * borderSize)</code>
      as the border is added around the image to avoid scaling.</p>
    parameters:
      - name: size
        type: Number
        summary: Width of the transparent border in pixels.
    returns:
      type: Titanium.Blob
      summary: >-
        The image with a transparent border in a blob, or `null` if this blob is
        not an image.
  - name: toArrayBuffer
    summary: Returns an <code>ArrayBuffer</code> representation of this blob.
    returns:
      type: ArrayBuffer
  - name: arrayBuffer
    summary: >-
      Returns a <code>Promise</code> that resolves with the contents of the blob
      as binary data contained in an <code>ArrayBuffer</code>.
    returns:
      type: Promise<ArrayBuffer>
---

# Titanium.Blob

A container for binary data.

A `Blob` represents a chunk of binary information, often obtained through
an [HTTPClient](Titanium.Network.HTTPClient) or by reading a [File](Titanium.Filesystem.File).

Blobs are often used to store text or image data.
The `Blob` object includes a number of properties and methods specific to image blobs.

Android supports an [append](Titanium.Blob.append) method, but
otherwise blobs are immutable.

The [Titanium.Utils](/api/titanium/utils) module provides several utility methods for working with
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


**Extends:** `Titanium.Proxy` · **Since:** 0.9, 0.9, 0.9, 9.2.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

