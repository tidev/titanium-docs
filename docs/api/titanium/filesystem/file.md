---
title: Titanium.Filesystem.File
properties:
  - name: executable
    type: Boolean
    summary: |
      <code>true</code> if the file is executable.<br>
    description: |
      <p>On iOS, this property exists but is always <code>false</code>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: hidden
    type: Boolean
    summary: Set to <code>true</code> if the file is hidden.
    description: |
      <p>On iOS, this property exists but is always <code>false</code>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: name
    type: String
    summary: Name of the file.
  - name: nativePath
    type: String
    summary: Native path associated with this file object, as a file URL.
    description: >
      <p>On iOS, use the <a
      href="Titanium.Filesystem.File.resolve">resolve</a><br>

      method to obtain a plain file path for use with native modules.</p>
  - name: parent
    type: Titanium.Filesystem.File
    summary: >-
      A <code>File</code> object representing the parent directory of the file
      identified by this object.
    description: >
      <p>iOS platform-note: Prior to Titanium SDK 7.0.0, this method returned
      the<br>

      path of the parent directory as a String. Since Titanium SDK 7.0.0 it<br>

      returns a <a
      href="/api/titanium/filesystem/file">Titanium.Filesystem.File</a>
      reference for parity wih Android and Windows.</p>
    platforms:
      - android
  - name: readonly
    type: Boolean
    summary: |
      <code>true</code> if the file identified by this object is read-only.<br>
    platforms:
      - android
  - name: size
    type: Number
    summary: Size, in bytes, of the file identified by this object.
  - name: remoteBackup
    type: Boolean
    summary: Value indicating whether or not to back up to a cloud service.
    description: >
      <p>Some apps may be rejected by Apple for backing up specific files; if
      this<br>

      is the case, ensure that this value is set to <code>false</code> for them.
      This<br>

      value should only need to be set once by your app, but setting it<br>

      multiple times will not cause problems. For files distributed with
      your<br>

      app, this will need to be set on boot. This flag will only affect iOS<br>

      versions 5.0.1 and later, but is safe to set on earlier versions.</p>

      <p>Note that setting this property to <code>false</code> will also prevent
      the<br>

      file identified by this object from being backed up to iCloud.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 1.8.0
  - name: symbolicLink
    type: Boolean
    summary: >
      <code>true</code> if the file identified by this object is a symbolic
      link.<br>
  - name: writable
    type: Boolean
    summary: |
      <code>true</code> if the file identified by this object is writable.<br>
methods:
  - name: append
    summary: Appends data to the file identified by this file object.
    description: >
      <p>Data to append can be specified as a String, <code>Blob</code>, or
      <code>File</code>.</p>

      <p>If the <code>data</code> argument is a <code>File</code> object, the
      file's contents<br>

      are appended to this file.</p>

      <p>Returns <code>true</code> if the operation succeeds.</p>
    parameters:
      - name: data
        type: String, Titanium.Blob, Titanium.Filesystem.File
        summary: Data to append.
    returns:
      type: Boolean
  - name: copy
    summary: Copies the file identified by this file object to a new path.
    description: |
      <p>Returns <code>true</code> if the copy succeeds.</p>
    parameters:
      - name: destinationPath
        type: String
        summary: Destination path to copy to.
    returns:
      type: Boolean
  - name: createDirectory
    summary: Creates a directory at the path identified by this file object.
    description: >
      <p>Returns <code>true</code> if the directory was created
      successfully.</p>
    parameters:
      - name: recursive
        type: Boolean
        summary: >
          Toggles whether to recursively create the directory structure (like
          mkdir -p).<br>

          Pass <code>false</code> to avoid recursively creating the
          directory.<br>

          Defaults to true on SDK 7.3.0+, defaults to false on older SDK
          versions.<br>
        optional: true
    returns:
      type: Boolean
  - name: createFile
    summary: Creates a file at the path identified by this file object.
    description: >
      <p>Note that if you write to a file that doesn't exist, the file is
      created automatically,<br>

      so it is not necessary to call this method unless you want to explicitly
      create the file<br>

      (for example, to create an empty file).</p>

      <p>Returns <code>true</code> if the file was created successfully. Returns
      <code>false</code> if the<br>

      file already exists, or if the file couldn't be created for some other
      reason.</p>
    returns:
      type: Boolean
  - name: createTimestamp
    summary: >-
      Returns the creation timestamp for the file identified by this file
      object.
    description: |
      <p>On Android, returns 0 for resource files.</p>
    returns:
      type: Number
  - name: createdAt
    summary: Returns the creation Date for the file identified by this file object.
    description: >
      <p>On Android, returns a Date whose <code>getTime()</code> value is 0 for
      resource files.</p>

      <p><strong>Important</strong>: When developing for the Apple ecosystem,
      using this API requires the
      <code>NSPrivacyAccessedAPICategoryFileTimestamp</code><br>

      property set in the privacy manifest that was introduced in iOS 17. You
      can learn more about it <a
      href="https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api">here</a>.</p>
    returns:
      type: Date
  - name: deleteDirectory
    summary: Deletes the directory identified by this file object.
    description: >
      <p>Returns <code>true</code> if the operation was successful. Does nothing
      if the file<br>

      object does not identify a directory.</p>
    parameters:
      - name: recursive
        type: Boolean
        summary: Pass <code>true</code> to recursively delete any directory contents.
        optional: true
    returns:
      type: Boolean
  - name: deleteFile
    summary: Deletes the file identified by this file object.
    description: |
      <p>Returns <code>true</code> if the operation was successful.</p>
    returns:
      type: Boolean
  - name: exists
    summary: >-
      Returns <code>true</code> if the file or directory identified by this file
      object exists on the device.
    returns:
      type: Boolean
  - name: extension
    summary: Returns the extension for the file identified by this file object.
    returns:
      type: String
  - name: getDirectoryListing
    summary: >
      Returns a listing of the directory identified by this file object, or
      <code>null</code><br>

      if this object doesn't identify a directory.<br>
    returns:
      type: Array<String>
  - name: getParent
    summary: >
      Returns the path of the parent directory holding the file identified by
      this<br>

      file object, as a String (deprecated) <strong>or</strong> as a
      <code>File</code> object.<br>
    description: >
      <p>Prior to Titanium SDK 7.0.0, on iOS this method returned the path of
      the parent<br>

      directory as a String. Since Titanium SDK 7.0.0, this method has been
      deprecated<br>

      in favor of the <a href="Titanium.Filesystem.File.parent">parent</a>
      property and will return<br>

      a <a href="Titanium.Filesystem.File">File</a> reference in the future as
      well.</p>
    returns:
      type: String, Titanium.Filesystem.File
      summary: Returns a String on iOS, a `Titanium.Filesystem.File` on Android
  - name: getProtectionKey
    summary: |
      Returns the protection key value of this file object.<br>
      Returns <code>null</code> if there's an error.<br>
    returns:
      type: String
  - name: isDirectory
    summary: Returns <code>true</code> if this file object represents a directory.
    returns:
      type: Boolean
  - name: isFile
    summary: Returns <code>true</code> if this file object represents an ordinary file.
    returns:
      type: Boolean
  - name: modificationTimestamp
    summary: Returns the last modification time for this file.
    description: |
      <p>On Android, returns 0 for resource files.</p>
    returns:
      type: Number
  - name: modifiedAt
    summary: >-
      Returns the last modification Date for the file identified by this file
      object.
    description: >
      <p>On Android, returns a Date whose <code>getTime()</code> value is 0 for
      resource files.</p>

      <p><strong>Important</strong>: When developing for the Apple ecosystem,
      using this API requires the
      <code>NSPrivacyAccessedAPICategoryFileTimestamp</code><br>

      property set in the privacy manifest that was introduced in iOS 17. You
      can learn more about it <a
      href="https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api">here</a>.</p>
    returns:
      type: Date
  - name: move
    summary: Moves the file identified by this file object to another path.
    description: >
      <p>Note that this method moves the stored file, but doesn't update
      this<br>

      file object to point to the new path. To access the file after moving
      it,<br>

      you must call <a href="Titanium.Filesystem.getFile">getFile</a> using the
      destination<br>

      path to obtain a new file handle.</p>
    parameters:
      - name: newpath
        type: String
        summary: New location for the file.
    returns:
      type: Boolean
  - name: open
    summary: Opens the file identified by this file object for random access.
    description: >
      <p>You can open the file for reading, writing, or appending by specifying
      one of the<br>

      <code>MODE</code> constants from <a
      href="/api/titanium/filesystem">Titanium.Filesystem</a>:<br>

      <a href="Titanium.Filesystem.MODE_READ">MODE_READ</a>, <a
      href="Titanium.Filesystem.MODE_WRITE">MODE_WRITE</a>,<br>

      or <a href="Titanium.Filesystem.MODE_APPEND">MODE_APPEND</a>.</p>

      <p>The <code>FileStream</code> object returned by this call can be used to
      read from, write to, or<br>

      append to the file, depending on what mode the file is opened in.</p>
    parameters:
      - name: mode
        type: Number
        summary: >
          Mode to open the file in: <code>MODE_READ</code>,
          <code>MODE_WRITE</code>, or <code>MODE_APPEND</code>.<br>
    returns:
      type: Titanium.Filesystem.FileStream
  - name: read
    summary: >-
      Returns the contents of the file identified by this file object as a
      <code>Blob</code>.
    returns:
      type: Titanium.Blob
  - name: rename
    summary: Renames the file identified by this file object.
    description: >
      <p>Returns <code>true</code> if the file was successfully renamed.</p>

      <p>Fails if the destination is in a different directory than the current
      file.<br>

      Use <a href="Titanium.Filesystem.File.move">move</a> to move a file to a
      different directory.</p>

      <p>Note that this method renames the stored file, but doesn't update
      this<br>

      file object to point to the new path. To access the file after renaming
      it,<br>

      you must call <a href="Titanium.Filesystem.getFile">getFile</a> using the
      destination<br>

      path to obtain a new file handle.</p>
    parameters:
      - name: newname
        type: String
        summary: New name for the file.
    returns:
      type: Boolean
  - name: resolve
    summary: Returns the fully-resolved native path associated with this file object.
    description: >
      <p>On iOS, the path returned by this method is a plain file path, not a
      URL. It is suitable<br>

      for use in native modules that need to access the file using native
      APIs.</p>

      <p>On Android, the return value of <code>resolve</code> is a
      <code>file://</code> URL, identical to the<br>

      <a href="Titanium.Filesystem.File.nativePath">nativePath</a> property.</p>
    returns:
      type: String
  - name: setProtectionKey
    summary: >-
      Sets the protection key as an attribute to the file identified by this
      file object.
    description: >
      <p>Returns <code>true</code> if successfully set. Returns
      <code>false</code> if failed.</p>
    parameters:
      - name: fileProtectionType
        type: String
        summary: |
          File protection type.<br>
    returns:
      type: Boolean
  - name: spaceAvailable
    summary: >-
      Returns the amount of free space available on the device where the file
      identified by this file object is stored.
    description: >
      <p>Free space is returned in bytes.</p>

      <p><strong>Important</strong>: When developing for the Apple ecosystem,
      using this API requires the
      <code>NSPrivacyAccessedAPICategoryDiskSpace</code><br>

      property set in the privacy manifest that was introduced in iOS 17. You
      can learn more about it <a
      href="https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api">here</a>.</p>
    returns:
      type: Number
  - name: write
    summary: Writes the specified data to the file identified by this file object.
    description: >
      <p>If the <code>append</code> parameter is <code>false</code> or not
      specified, any existing data in<br>

      the file is overwritten.</p>

      <p>If <code>append</code> is <code>true</code>, the specified data is
      appended to the end of the file.</p>
    parameters:
      - name: data
        type: String, Titanium.Filesystem.File, Titanium.Blob
        summary: >-
          Data to write, as a String, <code>Blob</code> or <code>File</code>
          object.
      - name: append
        type: Boolean
        summary: If <code>true</code>, append the data to the end of the file.
        optional: true
    returns:
      type: Boolean
examples:
  - title: Reading a File
    code:
      - content: >-
          // resourcesDirectory is actually the default location, so the first

          // argument could be omitted here.

          file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,
          "textfile.txt");

          var blob = file.read();

          var readText = blob.text;

          // dispose of file handle & blob.

          file = null;

          blob = null;
        language: js
    intro: >-
      Data files shipped with the application are stored in the resources
      directory.


      This example reads string data from a text file.
  - title: Creating a Subdirectory
    code:
      - content: >-
          var imageDir =
          Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,
              'downloaded_images');
          if (! imageDir.exists()) {
              imageDir.createDirectory();
          }


          // .resolve() provides the resolved native path for the directory.

          var imageFile  = Ti.Filesystem.getFile(imageDir.resolve(), myImageID +
          '.jpg');

          Ti.API.info("ImageFile path is: " + imageFile.resolve());

          if (imageFile.write(myImageData)===false) {
              // handle write error
          }

          // dispose of file handles

          imageFile = null;

          imageDir = null;
        language: js
    intro: |-
      Files that the application writes to need to be stored outside of the
      resources directory, since that directory is read-only.

      This example creates a subdirectory to store downloaded images.
      The example assumes that two variables are defined elsewhere in the code:
      myImageID, a string containing some kind of ID for the downloaded image,
      and myImageData, a `Blob` containing JPEG image data.
---

# Titanium.Filesystem.File

Object representing a path to a file or directory in the device's persistent storage.

Use the [Titanium.Filesystem.getFile](/api/titanium/filesystem) method to get a handle to a `File` object,
which represents a given path.  There does not need to be an existing file or directory
does not need to exist before `getFile` is called. If the file doesn't exist, and
the file path identifies a file in a writable directory, writing to the file
creates the file implicitly.

See [Titanium.Filesystem](/api/titanium/filesystem) for constants identifying commonly-used device directories.

Use the [exists](Titanium.Filesystem.File.exists) method to test whether the file exists.

A file object can point to an ordinary file, a directory or a symbolic link.
Use [createDirectory](Titanium.Filesystem.File.createDirectory) to create a directory.
Use the [getDirectoryListing](Titanium.Filesystem.File.getDirectoryListing) method to
retrieve a list of the directory's contents.

The `File` object doesn't provide methods for random access into the file.
The `read` method reads the file's entire contents into a `Blob` object.
The `write` method can either overwrite the entire file or append to an
existing file.

For random access to a file, such as accessing a small portion of a larger file,
you can open a file as a [FileStream](Titanium.Filesystem.FileStream) object. Use the
[open](Titanium.Filesystem.File.open) method to get a `FileStream` for an
existing `File` object, or use the [Titanium.Filesystem.openStream](/api/titanium/filesystem) method
to get a `FileStream` directly without calling `getFile` first.

The [Titanium.Filesystem](/api/titanium/filesystem) module defines a number of properties and methods related to
filesystem access, including properties that specify paths for application-specific
directories, and methods for creating temporary files and directories.

On Android, files may be stored on external storage (that is, removable media such as
SD Cards).

Note that once created with `getFile`, the path associated with a file object is
immutable. If you move the underlying file using [move](Titanium.Filesystem.File.move)
or [rename](Titanium.Filesystem.File.rename), you can no longer access it with the
original `File` object. You must use `getFile` to get a handle to the new path.

#### Resource Files

The `Resources` directory and all the files in it are read-only. On Android, resource
files are stored in the resource bundle and do not have all of the properties of
normal files. In particular, they do not have creation or modification timestamps.


**Extends:** `Titanium.Proxy` · **Since:** 0.1

<ApiProperties />

<ApiMethods />

<ApiExamples />

