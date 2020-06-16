---
title: PHP Web Page Debugging
weight: '20'
---

# PHP Web Page Debugging

## Basic Setup

The easiest way to set up and prepare your machine for PHP, and PHP debugging, is to install XAMPP, MAMP or ZendServer. Those packages are already pre-configured and ready to go with some very minor modifications.

The instruction here assumes that you already have a running server with PHP configured on it.

## Setting up XDebug in php.ini

* Locate your `php.ini` file (same path as you defined in your server's `httpd.conf`).

* Open the file and add the following lines (these paths _must_ be modified according to your system type):

    ```
    ;Hook the XDebug
     zend_extension_ts=C:\php\ext\php_xdebug-2.0.3-5.2.5.dll
     xdebug.remote_enable=1
     xdebug.remote_host=127.0.0.1
     xdebug.remote_port=9000
     xdebug.remote_handler="dbgp"
    ```

* Note that the XDebug extension should be added as a `zend_extension` or as a `zend_extension_ts` for Thread-Safe PHP environments. And, of course, change the version according to what you have.

In case you have XAMPP or MAMP installation, locate the XDebug extension that was delivered with the package and set it up.

Notes:

* `Port 9000` is the default port for XDebug. In case the Aptana PHP debugger client is set to list on port 9000, there is no real need to set it in the ini. However, it's a good practice to do so.

* In case that an XDebug session is triggered from the studio and the client port does not match the debug port defined in the ini, the Studio will prompt you about it and advise you what to do (see above).

* The `zend_extension_ts` is only valid in cases where the PHP interpreter was compiled as 'Thread-Safe'. In cases where it was not compiled as such (and you have a compatible xdebug extension), the line should be `zend_extension=<debugger path>/php_xdebug.so` (or similar).

## Verify the installation

Some of the packages mentioned above have a pre-configured link that can display your server's configurations. However, you can still verify that in a few simple steps (here we'll just assume you have an Apache server):

1. Restart your server.

2. Create a PHP file named `phpinfo.php` in Apache's htdocs directory containing something simple, such as `<?php phpinfo(); ?>` to the file and save it.

3. Open the file URL in your web browser: http://localhost/phpinfo.php

    * You should see the standard `phpinfo` output.

4. Verify that the XDebug was loaded by locating the note at the bottom of the first section. It should say something like: "with Xdebug v2.0.3, Copyright (c) 2002-2008, by Derick Rethans".

![PhpInfoXDebug](./PhpInfoXDebug.png)

## Setting up your project

There are several ways to set up your workspace in a way that the debugger will catch all the breakpoints and behave correctly. Here are a few best-practices which explains when and how to set it up.

### Creating a PHP project directly on your Document Root folder

This is perhaps the easiest way to make sure that you are always in sync with the content that the server is 'seeing' and the content that you are editing.

Follow these steps to create a PHP project that is pointed to your document root:

* Access the Studio's File View.

* Browse to your document root directory and select the folder that you wish to promote to a project.

* Right-click it and select 'Promote to project'.

* Right-click the created project and select Properties.

* Click on the Project Natures node and check the PHP Nature box.

* OK the dialog (also click 'Yes' to close and re-open the project when a prompt dialog appears).

That is all. You now have a PHP project that is pointing directly into your document root or one of its sub-folders.

**A few notes and warnings:**

* Since your edits are on the actual files that the server serve, it's only recommended for staging/development servers (which is probably the case if the server is on your local machine)

* You should take extra care when you delete a project that is pointing to an external folder, such as this. When deleting, you will be prompted to delete the actual project files. If you do you, you will lose the files in your server doc-root! So make sure you keep that check-box turned off when you delete a project from the workspace.

### Aliasing to your PHP project

In case you already have a PHP project set up in your Aptana Studio, and you choose not to move/recreate it to support the first option we mentioned above, you'll need to create an Apache Alias pointing to that project. **It is crucial that the alias name exactly matches your project name.**

For example, a project named RemoteDebugTest should have this Alias setting in the `httpd.conf`:

```
Alias /RemoteDebugTest C:\Eclipse\workspace\RemoteDebugTest
<Directory C:\Eclipse\workspace\RemoteDebugTest>
  Order allow,deny
  Allow from all
</Directory>
```

After saving `httpd.conf`, restart Apache to make your changes effective.

## Creating a launch configuration

In the steps above, we've prepared the Server-side, and the Client-side (for example, the IDE) for the debug session. So, the next step is to test that a debug session can be initiated successfully.

First, we've prepared this image to illustrate the sequence of events that are triggered when starting a debug session from the Aptana Studio.

![PhpDebugSessionSequence](./PhpDebugSessionSequence.png)

As you can see, the client (which is the Studio in this case) initiates the debug session by hitting a URL on the server-side and attaching a few debug parameters that are captured and handled by the debugger extension on the server-side (XDebug or Zend Debugger).

Once the server processed our request and determined that we want to debug, the server itself tries to contact the Studio to initiate a debug session. From that moment on, the communication is done through the debug protocol (DBGP or Zend Debug Protocol, according to the type of the debugger).

Breakpoints that were previously set in the editor are sent to the server when you start a session, while the debug protocol itself supports adding more breakpoints during the session.

Now that you are familiar a bit with the basics, it's time to test your settings.

For this example, we assume that you set up your server with an XDebug engine and that your project is in sync with the files that the server is accessing.

The first thing we'll need to check is the communication link between the server and the client.

* Create a new PHP file. Name if debugTest.php and paste this code into it:

    ```xml
    <?php
     $w = 'world';
     echo 'Hello ';
     echo $w;
    ?>
    ```

* Open the launch configuration dialog by accessing the debug shortcut (or by using the action from the menu Run > Open Debug Dialog): **Create a new\*PHP Web Page** debug configuration.

* Verify that the XDebug debugger is selected.

The launch configuration generates the URL that we use to contact the debugger. For that reason, and for _Path Mapping_ reasons, the configuration needs to have a valid server configuration attached to it.

To create a server configuration:

* Hit the plus button next to the _PHP Server_ line.

* Create an Apache, or a Generic, server configuration.

    ::: warning ⚠️ Warning
    **Make sure that the host name is without the _protocol_ part (for example, use localhost and not** `http://localhost`).
    :::

Continue with these steps:

* Select an _Initial Script_ from your workspace (for our test, select the debugTest.php file). This will be the entry point, and also the file that will be requested in the URL request.

* The configuration dialog will auto-generate the request URL according to the selected server and the initial script.

* Verify that the URL that was generated exists.

* In case the URL needs some tweaking to match your server, un-check the _Auto Generate_ and edit the URL path manually.

Finally, hit the _Debug_ button.
At this point, a debug session should be initiated. A browser is opened, and the Studio should break on the first line of the `debugTest.php` file.

In case it does not break on the first line, do the following to resolve the problem:

1. Re-check that you have the XDebug up and running on your server. Test it using a script with a `phpinfo()` line in it.

2. Check that the port is not blocked by a firewall. The default port for XDebug is 9000, and for Zend Debugger is 10000.

![PhpRemoteDebugConfig](./PhpRemoteDebugConfig.png)

### Notes

* The browser is opened with the URL to the aliased file with the added query string of `?XDEBUG_SESSION_START=ECLIPSE_DBGP&KEY=some_number, similar to ?XDEBUG_SESSION_START=ECLIPSE_DBGP&KEY=12276559562343`

* The number at the end of the URL changes for each launch

* Once you resume execution, even if there are no more breakpoints, the launch in your debug view is still alive. It's just waiting for more requests triggered by browser actions.

* For example, you have a form to debug. You can do so by starting a debug session and placing a breakpoint on the right spot to catch the form input after the user hits the submit button. The debug session will only be terminated when you hit the stop button on that.

## Using XDebug Helper browser extension to initiate a debug

### Installation

Using [XDebug Helper](https://chrome.google.com/webstore/detail/eadndfjplgieldjbigjakmdgkmoaaaoc) will allow you to start a debug session directly from the Chrome browser.

Once you install it, go to the Chrome Extensions (`chrome://chrome/extensions/`) page and locate the XDebug Helper. Click "Options" and verify that the IDE key is '_Eclipse_', and that your localhost (at least) is set up in the _Domain Filters_ list.

You can trigger the helper from the bug-shaped icon located on the right side of the browser's address bar. Once the icon is green, and you access a PHP page on your server, a debug session will be initiated on the Studio side.

### Debugging

As mentioned before, using this tool allows you to start a session straight from the browser.

So, for example, if you would like to debug the POST data that was sent from an HTML form, you can turn on the XDebug Helper right before you click the 'send' button. In case your Studio is opened and listens on port 9000, you will get a few notifications. The first would be about the session request, and the second would be for you to select the workspace resource that matches the file you just hit.

_**Notes:**_

1. The **JIT** (Just In Time) option must be turned on in the XDebug preferences (for example, under Aptana Studio | Editors | PHP | Debug preference page for the XDebug client)

2. Since the XDebug Helper caches some cookies in the browser, it might be necessary to delete them if you were experiencing continuous session requests pop-ups in the Studio even when you turned off the helper. In some cases, turning the XDebug Helper off and on again can help to clear those cookies.

3. We have mentioned above the way a debug session is initiated. The difference with the XDebug Helper session is that the URL that triggers the debug session is constructed and called from the helper. Thus, the Studio might need to get more information regarding the source location and will ask you to provide it when needed.

## Debug Ports

There are two debug port that the studio opens when loading.

Port 9000 for the XDebug debugger and port 10000 for the Zend debugger.

These ports can be controlled through a Preference:

* Preferences > Aptana Studio > Editors > PHP > Debug

When launching a PHP session, the Studio will inform you in case the port it's listening to does not match the XDebug port that was defined in the php.ini.

For example, if the php.ini indicates that the XDebug debugger should contact port 9001, while the Studio listens on port 9000, a message box will indicate the problem and will direct you to change the listen port or the ini setting.

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/30083033/XDebugPortNotification.jpg" alt="images/download/attachments/30083033/XDebugPortNotification.jpg" class="confluence-embedded-image"></p></td></tr></tbody></table>
