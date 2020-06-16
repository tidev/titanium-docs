---
title: Install Diagnostics Script Output
weight: '10'
---

# Install Diagnostics Script Output

Below is an example of the output generated from the _Install Diagnostics_ script when run on a correctly-working Windows 7 system:

```
C:\>cd \

C:\>echo %USERPROFILE%
C:\Users\appcel

C:\>echo %PATH%
C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Program Files (x86)\Common Files\Sage SData\;C:\Program Files (x86)\Common Files\Sage SBD\;C:\Program Files (x86)\Python27;C:\Program Files (x86)\Java\jdk1.6.0_23\bin;C:\Program Files (x86)\Android\android-sdk-windows\tools;C:\Program Files (x86)\Android\android-sdk-windows\platform-tools;C:\Program Files (x86)\Python27\Scripts;C:\Program Files (x86)\Git\bin

C:\>echo %JAVA_HOME%
C:\Program Files (x86)\Java\jdk1.6.0_23

C:\>java -version
java version "1.6.0_23"
Java(TM) SE Runtime Environment (build 1.6.0_23-b05)
Java HotSpot(TM) Client VM (build 19.0-b09, mixed mode, sharing)

C:\>javac -version
javac 1.6.0_23

C:\>python -V
Python 2.7.1

C:\>git --version
git version 1.7.3.1.msysgit.0

rem if the ANDROID_SDK variable is configured, please delete it and run this script again
C:\>echo %ANDROID_SDK%

C:\>cd %ANDROID_SDK%\tools

C:\>adb version
Android Debug Bridge version 1.0.26

C:\Program Files (x86)\Android\android-sdk-windows\tools>android list target
Available Android targets:
id: 1 or "android-4"
     Name: Android 1.6
     Type: Platform
     API level: 4
     Revision: 3
     Skins: HVGA (default), QVGA, WVGA800, WVGA854
id: 2 or "Google Inc.:Google APIs:4"
     Name: Google APIs
     Type: Add-On
     Vendor: Google Inc.
     Revision: 2
     Description: Android + Google APIs
     Based on Android 1.6 (API level 4)
     Libraries:
      * com.google.android.maps (maps.jar)
          API for Google Maps
     Skins: WVGA854, HVGA (default), WVGA800, QVGA
id: 3 or "android-7"
     Name: Android 2.1-update1
     Type: Platform
     API level: 7
     Revision: 2
     Skins: HVGA (default), QVGA, WQVGA400, WQVGA432, WVGA800, WVGA854
id: 4 or "Google Inc.:Google APIs:7"
     Name: Google APIs
     Type: Add-On
     Vendor: Google Inc.
     Revision: 1
     Description: Android + Google APIs
     Based on Android 2.1-update1 (API level 7)
     Libraries:
      * com.google.android.maps (maps.jar)
          API for Google Maps
     Skins: WVGA854, WQVGA400, HVGA (default), WQVGA432, WVGA800, QVGA
id: 5 or "android-8"
     Name: Android 2.2
     Type: Platform
     API level: 8
     Revision: 2
     Skins: HVGA (default), QVGA, WQVGA400, WQVGA432, WVGA800, WVGA854
id: 6 or "Google Inc.:Google APIs:8"
     Name: Google APIs
     Type: Add-On
     Vendor: Google Inc.
     Revision: 2
     Description: Android + Google APIs
     Based on Android 2.2 (API level 8)
     Libraries:
      * com.google.android.maps (maps.jar)
          API for Google Maps
     Skins: WVGA854, WQVGA400, HVGA (default), WQVGA432, WVGA800, QVGA
id: 7 or "Samsung Electronics Co., Ltd.:GALAXY Tab Addon:8"
     Name: GALAXY Tab Addon
     Type: Add-On
     Vendor: Samsung Electronics Co., Ltd.
     Revision: 1
     Based on Android 2.2 (API level 8)
     Skins: WVGA854, WQVGA400, GALAXY Tab (default), HVGA, WQVGA432, WVGA800, QVGA

C:\Program Files (x86)\Android\android-sdk-windows\tools>cd \

C:\>rem --- The following are optional ---

C:\>rem ----------------------------------

C:\>scons -v
SCons by Steven Knight et al.:
        engine: v2.0.1.r5134, 2010/08/16 23:02:40, by bdeegan on cooldog
Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010 The SCo
ns Foundation

C:\>rem ----------------------------------

C:\>echo %HTTP_PROXY%
%HTTP_PROXY%

C:\>echo %HTTPS_PROXY%
%HTTPS_PROXY%

C:\>rem ----------------------------------

C:\>echo %SOCKS_PROXY%
%SOCKS_PROXY%

C:\>rem ----------------------------------

C:\>rem

C:\>
C:\>
```
