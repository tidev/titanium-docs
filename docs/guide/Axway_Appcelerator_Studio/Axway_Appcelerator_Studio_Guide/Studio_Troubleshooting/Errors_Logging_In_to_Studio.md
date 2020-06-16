---
title: Errors Logging In to Studio
weight: '60'
---

# Errors Logging In to Studio

## Overview

If you are unable to log in to Studio, please try the following diagnostic steps and then submit this as part of your question on the Q & A forum.

## Trouble logging in

### Launch Studio from the command line

1. Try the to login using the `appc login` command or using the command below on the command line:

    ```
    curl -F "username=XXXX" -F "password=YYYY" https://dashboard.appcelerator.com/api/v1/auth/login
    ```

    (replacing XXXX and YYYY with your username and password. The username needs to be url-escaped, like user@company.com => user%40company.com)

2. If the above command returns success, try to run Studio from the command line and then log in. Check the generated exception log on the command line.

    * From Mac: open a terminal and run `<install_dir>/AppceleratorStudio.app/Contents/MacOS/AppceleratorStudio` (by default, the installation directory is `/Applications/Titanium Studio`)

    * From Windows: open a command prompt and run `<install_dir>\AppceleratorStudio.exe -consoleLog` (by default, the installation directory is `C:\Users\<username>\AppData\Local\Titanium Studio`)

### Check the log file for thrown exceptions

Check the **Studio log** file to see if an exception was thrown when attempting to login. See [Accessing the Log File](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Accessing_the_Log_File/) for details on how to access the log file.

If the exception generated is **javax.net.ssl.SSLHandshakeException**, **javax.net.ssl.SSLPeerUnverifiedException** or **"PKIX path building failed"**, it means that the required certificate could not be added to Java's certificate store. You need to manually download and import the necessary certificates.

#### OS X

For **Appcelerator Studio**, on an OS X system, run:

```bash
openssl s_client -showcerts -connect dashboard.appcelerator.com:443 </dev/null 2>/dev/null|openssl x509 -outform PEM >dashboard.pem
sudo keytool -import -keystore /System/Library/Java/Support/CoreDeploy.bundle/Contents/Home/lib/security/cacerts -alias dashboard -file dashboard.pem
```

The first command downloads the server certificate, and the second command imports it to system Java's cacerts store.

#### Windows

Use the following steps:

1. Download InstallCert.jar to a local directory.

2. Open `cmd.exe`.

3. Change directory into the directory and run `java -classpath InstallCert.jar InstallCert dashboard.appcelerator.com`.

4. It should output the same exception stacktrace as above and detect what certificate needs to be added; enter `1`.

Let it run until it finishes, and afterward, Java should be able to complete a handshake with the host, and you could verify by running the program again.

### Login failure due to environment variables

If you cannot log into Studio even though you entered valid username and password information and the same credentials when used on appcelerator.com does work, it might be due one of the following possible causes:

* The NODE\_ENV environment variable is set to "development". The appc-platform-sdk module essentially assumes you are an internal developer for Appcelerator and forces you to a pre-production or development environment if you have it configured.

* You don't have development info configured. Studio will send you to a pre-prod environment.

* Pre-prod only environments has certain accounts whitelisted for login and returns 4xx invalid login for everyone else.

If one of these issues matches your problem, try these suggestions to fix it:

* **Use another (namespaced) environment variable**. This is only useful for your engineers internally. Use a namespace like APPC\_NODE\_ENV. The NODE\_ENV environment variable can be used by other developers and other projects for many uses (for better or worse).

* If you're in development mode, print out the top of appc commands that hit the API. If you're going to silently change how your entire module behaves for the end user, based on this common environment variable, you should at least read that you're in a development/pre-production mode and print this out to the user.

## Repeated prompting (or Failing to prompt) for credentials

If Studio fails to save the user credentials, it prompts you to enter userId and password every time it is restarted. This could be resultant of either change in master password of OS secure keyring, or corrupted secured storage. To resolve this issue, please try the following diagnostic steps and verify whether they address the problem. The Studio log will have series of exceptions on similar lines:

```
!MESSAGE (Build 3.1.1.1364101697) [ERROR]  Failed to save the signed-in user
!STACK 0
org.eclipse.equinox.security.storage.StorageException: No password provided.
    at org.eclipse.equinox.internal.security.storage.SecurePreferencesRoot.getModulePassword(SecurePreferencesRoot.java:304)
    at org.eclipse.equinox.internal.security.storage.SecurePreferencesRoot.getPassword(SecurePreferencesRoot.java:224)
    at org.eclipse.equinox.internal.security.storage.SecurePreferences.put(SecurePreferences.java:224)
    at org.eclipse.equinox.internal.security.storage.SecurePreferencesWrapper.put(SecurePreferencesWrapper.java:110)
    at com.appcelerator.titanium.core.TitaniumUserManager.saveSignedInUser(TitaniumUserManager.java:474)
    at com.appcelerator.titanium.rcp.IDEWorkbenchWindowAdvisor.postWindowOpen(IDEWorkbenchWindowAdvisor.java:376)
    at org.eclipse.ui.internal.WorkbenchWindow.fireWindowOpened(WorkbenchWindow.java:1365)
    at org.eclipse.ui.internal.WorkbenchWindow.open(WorkbenchWindow.java:826)
    at org.eclipse.ui.internal.Workbench$70.runWithException(Workbench.java:3724)
    at org.eclipse.ui.internal.StartupThreading$StartupRunnable.run(StartupThreading.java:31)
    at org.eclipse.swt.widgets.RunnableLock.run(RunnableLock.java:35)
    at org.eclipse.swt.widgets.Synchronizer.runAsyncMessages(Synchronizer.java:135)
    at org.eclipse.swt.widgets.Display.runAsyncMessages(Display.java:3563)
    at org.eclipse.swt.widgets.Display.readAndDispatch(Display.java:3212)
```

Deleting the secure storage from Studio

* Go to Preferences > General > Security > Secure Storage.

* In the Contents tab, select the '\[Default Secure Storage\]' item in the list and delete it.

* Restart Studio.

* Since the secure storage contents are deleted, Studio will prompt for user and password during startup. Restart again and if it still prompts for user/password, please try the following other workarounds.

### Delete KeyChain entry

* Open Keychain Access utility in Mac (Applications > Utilities > Keychain Access).

* Search for the service "equinox.secure.storage" in Keychain Access.

* If possible, create a backup copy and then, delete the service.

* Restart Studio.

* Since the secure storage contents are deleted, Studio will prompt for user and password during startup. Restart again and if it still prompts for user/password, please try the following other workarounds.

### Providing access to Keychain service

* Open Keychain Access utility in Mac (Applications > Utilities > Keychain Access).

* Search for the service 'equinox.secure.storage' in Keychain Access.

* Open the properties of 'equinox.secure.storage' service and then assign additional privileges to be accessed by the required/all applications (either make sure that Studio is added to access the keychain, or choose to 'Allow all applications to access this item' in Access Control section).

* Restart Studio.

* Since the secure storage contents are deleted, Studio will prompt for user and password during startup. Restart again and if it still prompts for user/password, please try the following other workarounds.
