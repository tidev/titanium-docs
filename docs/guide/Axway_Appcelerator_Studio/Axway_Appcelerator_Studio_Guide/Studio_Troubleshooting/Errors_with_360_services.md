---
title: Troubleshooting enabling SOASTA
weight: '140'
---

# Troubleshooting enabling SOASTA

Along with the Studio log, after enabling Debug level, go to All in Preferences > Troubleshooting and then recreate the scenario.

When a project has to be enabled for test module, the following steps are performed by Studio

* Studio downloads the latest version of SOASTA plugin:

    * It verifies whether the latest version of test plugin is already available under plugins folder of Titanium SDK Root (default is /Users/<user>/Library/Application Support/Titanium/plugins). If the latest version is not available, then it downloads the latest test plugin to plugins folder of Titanium SDK root.

    * The URL is available in 'Test Service Host/URL' of Diagnostic tests, but the default url is [http://appctest-2.appcelerator.com/concerto/downloads/mobile/MakeAppTouchTestable.zip](http://appctest-2.appcelerator.com/concerto/downloads/mobile/MakeAppTouchTestable.zip)

    * [T](http://appctest-2.appcelerator.com/concerto/downloads/mobile/MakeAppTouchTestable.zip)he diagnostic tests also indicate whether the latest version of Soasta plugin is installed on the machine, something similar to : Test Service Module Required version: 6937.16. Is Installed: false

    * If the download of test plugin fails due to network connectivity or proxy issues, then it can be verified whether the latest version is available under /Users/<user>/Library/Application Support/Titanium/plugins/[com.appcelerator.test/versions](http://com.appcelerator.test/versions)

* Execute a jar file to enable the app with the latest version of SOASTA plugin :

    * If the latest version is available, then the failure would have happened while enabling the app with soasta plugin. The Studio log contains a command similar to

        ```
        /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home/bin/java" "-jar" "/Users/<user>/Library/Application Support/Titanium/plugins/com.appcelerator.test/versions/6937.16/MakeAppTouchTestable/MakeAppTouchTestable.jar" "-project" "/path/to/project" "-url" "https://appctest-2.appcelerator.com/concerto" "-username" "user@appcelerator.com/id" "-password" "**********" "-appobjectname" "project_guid" "-overwriteapp
        ```

    * Copy the command from the Studio log and then fill in the password param with original password and get the output of that command on terminal. This would help us to determine the root cause of the failure.
