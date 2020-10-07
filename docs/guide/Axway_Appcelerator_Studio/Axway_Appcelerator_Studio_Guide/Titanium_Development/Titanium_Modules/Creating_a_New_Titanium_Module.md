---
title: Creating a New Titanium Module
weight: '10'
---

# Creating a New Titanium Module

This guide details the module creation process inside Appcelerator Studio. For more information on what methods and properties are available as part of the module API and specific platform notes, see the [Android Module Development Guide](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Android_Module_Development_Guide/) and [iOS Module Development Guide](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/iOS_Module_Development_Guide/).

## Preparing Appcelerator Studio for Module Creation

If you are going to be creating Android modules, you will need to install Java support inside Appcelerator Studio. See [Installing the Java Development Tools](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/Installing_the_Java_Development_Tools/) for the brief steps if you have not already done so.

### For Android Module Development

You will need to install the Android NDK. Download the appropriate .zip file from [http://developer.android.com/sdk/ndk/index.html](http://developer.android.com/sdk/ndk/index.html) and extract it to some location on disk. Remember this location.

::: danger ❗️ Warning
As an additional note, you need to make sure the path to your Studio workspace does not contain spaces. See [Switching your Workspace](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Switching_your_Workspace/) for how to switch your workspace location. You can then import your projects from the old to the new workspace. This is a limitation of the Android NDK
:::

## Creating a New Module

Creating a new module is accomplished by running through a wizard. Below summarizes the properties required, and a description of the values.

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>Property</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Description/Purpose</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>moduleid</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>This is a read-only module id of your module that is generated when you created your project. You should not edit this value.</p><div class="confbox admonition admonition-note aui-message warning shadowed information-macro"><p>You must generate a unique id. We recommend using your reverse-DNS company name + module_name as a pattern to guarantee uniqueness. If you must edit this value, you must also edit the value in your module implementation file.</p></div></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>version</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>This is the version of your module. You should change this value each time you make major changes and distribute them. Version should be in the dotted notation (X.Y.Z) and must not con-tain any spaces or non-number characters.</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>description</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>This is a human-readable description of your module. It should be short and suitable for display next to your module name.</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>author</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>This is a human-readable author name you want to display next to your module. It can simply be your personal name or an organizational name such as "Appcelerator".</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>license</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>This is a human-readable name of your license. You should use a short description such as "Apache Public License" or "Commercial".</p></td></tr><tr><td class="confluenceTh" rowspan="1" colspan="1"><p>copyright</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>This is a human-readable copyright string for your module. For example, "Copyright (c) 2010 by Appcelerator, Inc."</p></td></tr></tbody></table>

### Module Creation Steps

1. Open **File > New > Mobile Module Project**.

2. Choose a project name, a module ID, and a deployment target (native platform).

3. Click **Next**.

4. Fill out the remainder of the items on the next page.

5. Click **Finish**.

    ![New_Titanium_Mobile_Module_Project_2](./New_Titanium_Mobile_Module_Project_2.png)

Your module is created. Note the two different folder structures, depending on the platform.

::: warning ⚠️ Warning
You may need to refresh your project to show missing files. See related ticket [http://jira.appcelerator.org/browse/TISTUD-948](http://jira.appcelerator.org/browse/TISTUD-948). For Android, you may also need to manually add JARs to your build path. See related ticket [http://jira.appcelerator.org/browse/TIMOB-6839](http://jira.appcelerator.org/browse/TIMOB-6839) for the workaround.
:::

## Building/Packaging a Module

Choose **Deploy** > **Package - iOS** **Module** or **Package - Android Module**.

![Screen_Shot_2011-11-08_at_9.48.29_PM](./Screen_Shot_2011-11-08_at_9.48.29_PM.png)

You may then choose to deploy the module for all projects, or for a specific project. This follows the installation rules as noted in [Using Titanium Modules](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Titanium_Modules/Using_Titanium_Modules/), though to summarize:

* For all projects: the module .zip file is dropped at the root of the the Titanium SDK installation location.

* For a particular project: The module .zip file is dropped at the root of your project.

### Troubleshooting Build Errors

#### Your Android application project path contains spaces

```
[exec] Android NDK: Your Android application project path contains spaces: '/Users/username/Documents/Aptana Studio 3 Workspace/testModule/build/generated'
[exec] Android NDK: The Android NDK build cannot work here. Please move your project to a different location.
[exec] /Users/username/Documents/android-ndk-r7/build/core/build-local.mk:109: *** Android NDK: Aborting.    .  Stop.
```

You need to change your Studio workspace to not have spaces in the path. See the top of the page for information on how to do that.

#### Android.ndk property is not set

```
BUILD FAILED
/Library/Application Support/Titanium/mobilesdk/osx/1.8.0.1/module/android/build.xml:192: The following error occurred while executing this line:
/Library/Application Support/Titanium/mobilesdk/osx/1.8.0.1/module/android/build.xml:175: Neither the ANDROID_NDK environment variable, or the android.ndk property is not set to an existing Android NDK installation (check your module's build.properties)
```

If you see this, you need to add android.ndk to the build.properties file. Set it to the path where you installed the NDK to begin with.

## Using Your Module

Follow the instructions in [Using Titanium Modules](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Titanium_Modules/Using_Titanium_Modules/) for more information.
