# Titanium.UI.iOS.DocumentViewer

<ProxySummary/>

## Overview

The DocumentViewer is created by the <Titanium.UI.iOS.createDocumentViewer> method.

Use this class to present an user interface for previewing files,
such as an e-mail program that previews attachments.

The DocumentViewer displays previews for the following document types:

  * Microsoft Office (DOC, XLS, PPT) (Office 97-2004), the XML versions are not supported
  * Portable Document Format files (PDF)
  * Images (JPEG, GIF, PNG)
  * Rich Text Format files (RTF)
  * HTML and XML files
  * Plain text files
  * Comma-separated value files (CSV)

Note: Using HTML content in the DocumentViewer is not recommended, since it does not support
all HTML-capabilities. Please use <Titanium.UI.WebView> to display complex HTML files.

You can launch the document either in the document viewer or with another application with the
options menu. To use the options menu, you need to specify a view with the `show` method to
anchor the options menu to.

In the document viewer, click the **Done** button to dismiss the document viewer or click the
right navigation button to open the options menu to perform another action with the document,
such as printing the document or opening the document in another application.

**Note for iOS 11 and later**
When using the DocumentViewer in iOS 11 and later, documents need to be placed in the app-bundle
in order to be shared to third-party apps. This is a privacy restriction and can be solved by
using either a document from the `Resources` directory (classic Titanium) or `app/assets` (Alloy).
Alternatively, documents can also be stored in the <Titanium.Filesystem.applicationCacheDirectory>
or <Titanium.Filesystem.applicationDataDirectory>.

**Note for iOS 11.2 and later**
Apple introduced a regression in iOS 11.2 that forces **all** files to be in the application data
directory. We handle this workaround for you in Titanium SDK 7.0.2+, but you
can also work around it without an SDK update. Here is an example:

    var fileName = 'example.pdf';

    // For iOS 11.2, workaround the Apple issue by creating a temporary file and
    // reference it. It will be removed from filesystem once the app closes.
    // Read more here: http://nshipster.com/nstemporarydirectory/
    if (isiOS11_2()) {
      fileName = fileInApplicationDataDirectory(fileName);
    }

    var docViewer = Ti.UI.iOS.createDocumentViewer({
      url: fileName
    });

    docViewer.show();

    // Check if the current device runs iOS 11.2+
    function isiOS11_2() {
      var version = Ti.Platform.version.split(".");
      return (parseInt(version[0]) >= 11 && parseInt(version[1]) >= 2);
    }

    // Create a temporary file with the contents of the old file
    // Expects the file to be in the resources directory. If you receive the file
    // from an API-call, receive pass the Ti.Blob/Ti.File/text to "write" directly.
    function fileInApplicationDataDirectory(fileName) {
      var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName);

      if (!file.exists()) {
        alert('File does not exist in resources!');
        return;
      }

      var newFile = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, fileName);
      newFile.createFile();

      if (!newFile.exists()) {
        alert('New file could not be created in application data directory!');
        return;
      }

      newFile.write(file);

      return newFile.nativePath;
    }

Read more about the issue in [TIMOB-25680](https://jira.appcelerator.org/browse/TIMOB-25680).

## Examples

### Document Viewer Example

In the example below, the navigation bar's right button opens the options menu,
while the window button immediately launches the document in the document viewer.

    var navButton = Ti.UI.createButton({
        title: 'Launch'
    });

    var win = Ti.UI.createWindow({
        rightNavButton: navButton
    });

    var navWin = Ti.UI.createNavigationWindow({
        window: win
    });

    var winButton = Ti.UI.createButton({
        title: 'Launch',
        height: 40,
        width: 200,
        top: 270
    });

    win.add(winButton);

    // Create a document viewer to preview a PDF file ("Example.pdf")
    docViewer = Ti.UI.iOS.createDocumentViewer({
        url: 'Example.pdf'
    });

    // Opens the options menu and when the user clicks on 'Quick Look'
    // the document viewer launches with an animated transition
    navButton.addEventListener('click', function() {
        docViewer.show({
            view: navButton,
            animated: true
        });
    });

    // The document viewer immediately launches without an animation
    winButton.addEventListener('click', function(){
        docViewer.show()
    });

    navWin.open();

<ApiDocs/>
