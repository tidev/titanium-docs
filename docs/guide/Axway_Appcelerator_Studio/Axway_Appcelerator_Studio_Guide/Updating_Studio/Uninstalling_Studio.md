---
title: Uninstalling Studio
weight: '50'
---

# Uninstalling Studio

This document contains information on how to uninstall Studio. Read all steps for the platform you will be uninstalling before starting the uninstallation process.

## Mac OS X

1. Quit Axway Appcelerator Studio if it is currently running.

2. Delete `/Applications/Aptana Studio 3`, `/Applications/Titanium Studio`, and `/Application/Appcelerator Studio` folders.

## Windows

1. **Quit Axway Appcelerator Studio** if it is currently running.

2. Launch the **Add or Remove Programs** applet from the Control Panel to uninstall Studio.

3. If Studio is not listed in your Add or Remove Programs, it may be because you chose to install Studio with a zip. You will have to determine where you installed it (hopefully in your Program Files) and manually delete it.

4. **Delete the remaining application folder(s)** off the hard drive (we do not automatically delete these folders in some cases). If you did not change your installation location on disk during the install, it is likely in:

    * **Windows 10**: `C:\Users\<username>\AppData\Roaming\Appcelerator\Appcelerator Studio\`

    * **Windows Vista/7**:`C:\Users\<username>\AppData\Local\Appcelerator Studio`, `C:\Users\<username>\AppData\Local\Titanium Studio`, and `C:\Users\<username>\AppData\Local\Aptana Studio`

    * **Windows XP**: `C:\Program Files\Aptana Studio or Titanium Studio`

## Eclipse Plugin

Follow the instructions here: [http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.user/tasks/tasks-126.htm](http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.user/tasks/tasks-126.htm).
