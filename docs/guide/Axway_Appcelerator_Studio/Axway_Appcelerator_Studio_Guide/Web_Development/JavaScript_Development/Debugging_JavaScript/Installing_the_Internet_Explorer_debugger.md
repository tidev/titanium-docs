---
title: Installing the Internet Explorer debugger
weight: '60'
---

# Installing the Internet Explorer debugger

## Overview

The debugger for IE works the same as the JavaScript debugger for Firefox, but you will also be able to debug your code for Internet Explorer.

## Instructions

1. Open the file that you want to debug so that it is the active page in your Editor.

2. From the **Debug** menu ![IconDebug1](./IconDebug1.png) , select **Debug...** to open a **Debug** window (shown below).

    ![IEdebugWindow](./IEdebugWindow.png)
3. If you do not already have a Web Browser configuration for IE, create a new one and point it to the location where IE is installed on your computer. (See [Installing the JavaScript debugger](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Installing_the_JavaScript_debugger/) for details.)

4. In the lower-right corner of the window, click the **Debug** button and follow the prompts to install the IE debugger and start debugging your page.

## Troubleshooting tips

If the IE debugger does not appear to be working, check the following Internet Explorer options.

### Enabling the Aptana Debugger add-ons

You must have the Aptana Debugger add-ons enabled for the Aptana IE debugger to work.

To enable the add-ons:

1. In IE, select **Manage Add-ons...** from the **Tools** menu, and select **Enable or Disable Add-ons...** to open a **Manage Add-ons** window.

2. Make sure that the two Aptana debugger plug-ins are enabled (shown below). If not, select each plug-in and choose the Enable settings option.

    ![ManageAddOns](./ManageAddOns.png)

### Enabling script debugging

You must enable script debugging in your Internet Options in IE for the Aptana debugger to work properly.

To enable script debugging:

1. In IE, select **Internet Options** from the **Tools** menu to open an **Internet Options** window.

2. On the **Internet Options** window, click the Advanced tab.

3. Under **Browsing**, make sure that the **Disable script debugging (Internet Explorer)** option is unchecked (shown below).

    ![DisableScriptDebugging](./DisableScriptDebugging.png)

### Updating your DLL Version

If you determined that you have an older version of the IE debugger (the latest one is 1.0.2.1), you can update it by following these instructions.

1. Go to your <workspace>/.metadata/.plugins/com.aptana.js.debug.core/.dll directory

2. Look for aptanadebugger.dll in there

3. Replace it with the latest version: [aptanadebugger.dll](https://github.com/aptana/studio3/blob/development/bundles/com.aptana.js.debug.core.ie/res/ie/AptanaDebugger.dll)

4. Create aptanadebugger.dll.noupdate file in the same folder.

### Items not yet supported

* Debugging straight JavaScript files

* Debugging local file:// pages

* Breakpoints in eval() code (dojo etc.)

* Detail formatters

* Anonymous functions name resolving

* Exception trace/breakpoint handling

* Assert API (like in Firefox extension)

* XMLHttpRequest: response data is not displayed

* Scripts tree
