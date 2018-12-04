# Titanium.Filesystem.File

<ProxySummary/>

## Overview

Use the <Titanium.Filesystem.getFile> method to get a handle to a `File` object,
which represents a given path.  There does not need to be an existing file or directory
does not need to exist before `getFile` is called. If the file doesn't exist, and
the file path identifies a file in a writable directory, writing to the file
creates the file implicitly.

See <Titanium.Filesystem> for constants identifying commonly-used device directories.

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
existing `File` object, or use the <Titanium.Filesystem.openStream> method
to get a `FileStream` directly without calling `getFile` first.

The <Titanium.Filesystem> module defines a number of properties and methods related to
filesystem access, including properties that specify paths for application-specific
directories, and methods for creating temporary files and directories.

On Android, files may be stored on external storage (that is, removable media such as
SD Cards).

Note that once created with `getFile`, the path associated with a file object is
immutable. If you move the underlying file using [move](Titanium.Filesystem.File.move)
or [rename](Titanium.Filesystem.File.rename), you can no longer access it with the
original `File` object. You must use `getFile` to get a handle to the new path.

### Resource Files

The `Resources` directory and all the files in it are read-only. On Android, resource
files are stored in the resource bundle and do not have all of the properties of
normal files. In particular, they do not have creation or modification timestamps.

## Examples

### Reading a File

Data files shipped with the application are stored in the resources directory.

This example reads string data from a text file.

    // resourcesDirectory is actually the default location, so the first
    // argument could be omitted here.
    file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "textfile.txt");
    var blob = file.read();
    var readText = blob.text;
    // dispose of file handle & blob.
    file = null;
    blob = null;

### Creating a Subdirectory

Files that the application writes to need to be stored outside of the
resources directory, since that directory is read-only.

This example creates a subdirectory to store downloaded images.
The example assumes that two variables are defined elsewhere in the code:
myImageID, a string containing some kind of ID for the downloaded image,
and myImageData, a `Blob` containing JPEG image data.

    var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,
        'downloaded_images');
    if (! imageDir.exists()) {
        imageDir.createDirectory();
    }

    // .resolve() provides the resolved native path for the directory.
    var imageFile  = Ti.Filesystem.getFile(imageDir.resolve(), myImageID + '.jpg');
    Ti.API.info("ImageFile path is: " + imageFile.resolve());
    if (imageFile.write(myImageData)===false) {
        // handle write error
    }
    // dispose of file handles
    imageFile = null;
    imageDir = null;

<ApiDocs/>
