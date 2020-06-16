---
title: Android Titanium SDK Development Setup
weight: '20'
---

# Android Titanium SDK Development Setup

## Overview

This is a guide to setup the Android development environment to develop for Titanium Mobile.

## Getting started

::: danger ❗️ Warning
ADT has been discontinued and we don't recommend using it.
:::

1. Make sure you have the environment setup to build Titanium Mobile: [Building the Titanium SDK From Source](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Building_the_Titanium_SDK_From_Source/)

2. Download Eclipse IDE: [http://www.eclipse.org/downloads/](http://www.eclipse.org/downloads/)

3. After download finishes, unzip and run it. You'll need to create a new workspace if you don't have one already.

4. Uninstall CDT plug-in if you have it installed in Eclipse. Our setup will not work with CDT.

5. Install ADT by following the instruction on [http://developer.android.com/sdk/eclipse-adt.html#installing](http://developer.android.com/sdk/eclipse-adt.html#installing)

    * If you see a warning message of "installing unsigned content" during installation, click OK

6. Restart Eclipse after installation complete.

## Set up Eclipse environment

After completing the [getting started](#GettingStarted) section:

1. Import Projects by launching Eclipse and go to **File** > **Import** > **General** > **Existing Projects into Workspace**.

    1. Click **Next**.

    2. Click **Browse**, then go into this directory: `titanium_mobile/android`

        * Note: this path will vary (depends on where you clone the directory).

    3. Click **Open**.

    4. Now you should see a number of projects under `Projects` directory. You can enable "Copy projects into workspace", but I prefer not to, b/c if this is enabled, every time you pull from master, or rebuild titanium\_mobile, your eclipse workspace will not get updated.

    5. Click **Finish**.

2. Create a Java project named `titanium-dist` by navigating to **File** > **New** > **Java Project**.

3. After you name the project, click **Finish**.

4. Create a `lib` directory inside `titanium-dist` and link it with `titanium_mobile/dist/android` directory. Right-click on titanium-dist project and go to **New** > **directory** > enter name. Next, click **Advanced** > select **Link to Alternate Location** > **Browse** > select `titanium_mobile/dist/android` directory (titanium\_mobile is the directory you cloned from above).

5. **Run SCons** from terminal, then refresh your workspace. At this point, you should NOT see any errors. If you see odd errors, regarding DDMS or similar, try restarting Eclipse/ADB.

    * NOTE: If you encounter an error to do with ANDROID\_NDK not found, go to Eclipse > About Eclipse > Installation Details, and remove the Android Native Development item.

## Create test projects in Eclipse

After the [Eclipse environment](#SetUpEclipseEnvironment) is set-up, we are now ready to create a test project in Eclipse for debugging purposes.

1. Create a new Android project named TitaniumTest:

    1. **File** > **New** > **Project...** > **Android** > **Android Project**.

    2. Click **Next** > Select **Google API 2.2 (API 8)**. Note: you may see two copies of the google APIs, pick one.

    3. Hit **Next** > enter **Package Name**: `com.titanium.test`

    4. Click **Finish**.

2. Create a new Titanium Project via Titanium Studio with the exact same credentials:

    1. **File** > **New** > **Titanium Mobile Project**.

    2. Enter **name**: `TitaniumTest`, with the **app Id**: `com.titanium.test`

    3. Click **Finish**.

3. Under `src/com.titanium.test/`, rename the class `TitaninumTestActivity.java` to `TitaniumtestActivity.java`. If Eclipse doesn't automatically update the classname, update it yourself. (This is necessary for the generated files in the next step.)

4. Run the project you just created via **Titanium Studio** on an **Android device/emulator**. This should generate a build directory in your Filesystem.

5. Navigate to the Filesystem: **Build** > **Android** > **gen** > **com** > **titanium** > **test.**

6. Copy all the `.java` files except for `R.java` over to your Eclipse project. These files go to **src/com/titanium/test** on your Filesystem.

7. Replace the contents of your `AndroidManfiest.xml` in Eclipse with the one in Titanium Studio, precisely build>Android>AndroidManifest.xml. If you see any errors like missing themes or icons, just delete those fields from your xml.

8. In your Eclipse Filesystem, create a directory named `Resources` in `/assets`, and **copy Resources** directory from your Titanium Studio project to `/assets/Resources`. Creating a symlink between two directories **will not** work.

9. In your Eclipse project, add necessary libraries to it. You can do this by right clicking on the project, go to Properties > Android, then under the Library section, click Add on the right side. You should see a list of options, add ALL of them (you can only add one at a time). This won't actually work anymore with the latest Android SDK. The problem is that you won't be able to breakpoint in the Library project. In your Eclipse project, add necessary libraries to it: go to **Properties** > **Java Build Path** > **Projects**. Add all the Titanium projects. Now go to the next tab "Libraries". Add JARS... select all the projects libraries (each time under bin directory). You have to do them one by one. Finally go to the last tab "Order and Export", Select all the titanium projects + jars

    * If you updated to ADT 22, there's an existing bug that will cause Eclipse environment to stop working. Here's the link to the issue: [https://code.google.com/p/android/issues/detail?id=55304](https://code.google.com/p/android/issues/detail?id=55304). To fix this, right-click on the project you want to run (NOT the library projects), **Properties** > **Java Build Path** > **Order and Export** > check **Android Private Libraries** box.

10. In your Eclipse project, locate `TitaniumtestApplication.java`, and remove the **content** inside `verifyCustomModules` method, but **DO NOT** remove the method.

11. **Refresh** your workspace, full clean, and re-build.

12. **Run/Debug** the project.

## Setting up IntelliJ IDEA environment

1. **Download** and install IntelliJ IDEA here: [https://www.jetbrains.com/idea/download/](https://www.jetbrains.com/idea/download/)

2. **Import Projects** > Select your **source** (`~/Titanium_Mobile/android`) > choose **Eclipse** box, and hit **Next**.

3. Make sure format is `.idea` and hit **Next** \> **Now**. All the projects should be selected and you want to **unselect** the `android-build` and `TitaniumTest` projects. Then hit **Next**.

4. **Select Android 6.0 SDK** and click **Finish**.

    * Note: if this is your first time running InteillJ, you may need to set Android home path. If you don't see Android 6.0, you'll need to install Android 6.0.

5. Now you may see a "Locate Eclipse Information" dialog window, click **Cancel**. A dialog window called "Import from Eclipse" may pop up in which case you click **Cancel**. This will result in an error says unknown JDKs. If you're seeing this, one or more projects imported is using the JDK that is not configured in IntelliJ. For instance, if you have JDK 1.7 on IntelliJ, and kroll-apt project is using 1.6, you'll see this. Click **Ok** for now.

6. Now you may see the dialog window "Import Android dependencies from property files", check all, and click **Ok**.

7. This step assumes you have JDK 1.7 configured on IntelliJ. Do a quick **Build** > **Make Project**. You should see the error "Cannot start compiler... SDK is not specified for module kroll-apt". Click **Ok**, this should take you to Project Structure of kroll-apt, where you'll see "JavaSE-1.6" and "ECLIPSE" boxes red. Remove ECLIPSE by right-clicking and selecting **remove**. Then change "Module SDK" to **1.7**.

8. In the same window, go through each module and remove `com.android.ide.eclipse.adt.DEPENDENCIES`. Click **Ok** once you're done.

9. Right-click on **titanium** **module** > **Open Modules Settings** > **Remove "kroll-apt.jar"** > click on the "+" button at bottom left corner, choose **Module Dependencies**, then choose "**kroll-apt**". Now check the export box for `kroll-apt`, `kroll-common`, `android-support-v7-cardview` and `android-support-v7-appcompat`. Now change the scope of `android-support-v7-cardview` to "Provided". Then go to each modules, and remove `kroll-apt.jar` if present.

10. **Build** > **Rebuild Module**. It should compile successfully. If the build fails due to map, right-click the **map module** > **Open Module Settings**, and make sure the Module SDK is "Android 6.0 Google APIs".

## Create test projects in IntelliJ

These steps assumes you already have a working test project for Eclipse, if not please follow the procedure for creating one above.

1. Import your Eclipse project over: **File** > **New** > **Module** from existing sources. For first timers, import `titanium_mobile/android/dev/TitaniumTest`.

2. Right-click on your newly imported module, go to module settings, click on the "+" button on the bottom left, select "Module Dependency" and add everything on that list EXCEPT for `kroll-common`, `appcompat`, and `cardview`.

3. Run **SCons** if you haven't already. Forgetting to run SCons will result in runtime error. To run SCons for Titanium SDK versions 5.4.0+, navigate to `titanium_mobile/build` directory then run this in the terminal: `npm install && node scons.js build && node scons.js package && node scons.js install`. Ensure you have latest stable version of Node and npm installed for this to work.

4. Go to **Build** > **Rebuild Project**.

## Setting up InteliJ IDEA environment on Windows

### Requirements

* [InteliJ IDEA](https://www.jetbrains.com/idea/download/)

* [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

* [Android SDK](https://developer.android.com/studio/index.html)

* [Android NDK](https://developer.android.com/ndk/downloads/index.html)

* [Ant](http://ant.apache.org/bindownload.cgi)

### Environment variables

* ANDROID\_SDK - Location of Android SDK with no spaces: `(C:\PROGRA~2\Android\ANDROI~1)`

* ANDROID\_NDK - Location of Android NDK with no spaces: `(C:\PROGRA~2\Android\ANDROI~2)`

* ANT\_HOME - Location of Ant: `(C:\ant)`

* JAVA\_HOME - Location of JDK: `(C:\Program Files (x86)\Java\jdk1.8.0_102\)`

### Importing Android Titanium project into InteliJ

![import_titanium_android](./import_titanium_android.gif)

### Fix dependencies

1. Right-click on the `android` project and click **Open Module Settings**.

2. Click the "+" to add a **New Project Library**, and click **Java**.

3. Navigate to `titanium\lib\aps-analytics.jar` and click **OK**.

4. Add this library to **app**, **locale**, **network**, and **platform** modules.

5. In the library list you should also see `lib3`, right-click, and select **Add to Modules...**.

6. Add this library to `calendar`, `contacts`, `geolocation`, `gesture map`, and `TitaniumTest` modules.

7. Again, right-click `lib1`, and select **Add to Modules...**.

8. Add this library to **TitaniumTest**.

### Compiling kroll-v8 on Windows

#### Additional Requirements

* [gzip](http://gnuwin32.sourceforge.net/packages/gzip.htm)

* [gperf](http://gnuwin32.sourceforge.net/packages/gperf.htm)

Download the binaries, rename _gzip_ into _gunzip_ and place both into `C:\Windows\System32`

#### SCons

1. Open a command prompt and navigate to `titanium_mobile/build`.

2. Execute `node scons.js build`

## Formatting

For formatting, we follow Android's formatting style. You can follow the eclipse formatting rules at [https://source.android.com/source/using-eclipse.html#eclipse-formatting](https://source.android.com/source/using-eclipse.html#eclipse-formatting).

You can download the formatting file here: [android-formatting.xml](./attachments_39846449_1_android-formatting.xml)
