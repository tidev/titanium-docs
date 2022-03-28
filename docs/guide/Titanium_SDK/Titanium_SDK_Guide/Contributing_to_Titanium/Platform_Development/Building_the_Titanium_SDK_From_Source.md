---
title: Building the Titanium SDK From Source
weight: '10'
---

# Building the Titanium SDK From Source

This document provides information on how to build Titanium SDK from source files by listing software requirements, how to set up your environment, where to get the source files, building the SDK, how to install a build SDK, and speeding up the Titanium SDK build.

## Software Requirements

You must have the following software installed to be able to compile the Titanium SDK. (Click on any item to get instructions on how to install it for your system.)

The following software is required for building Titanium applications, and you probably already have it installed:

* [Oracle JDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Oracle_JDK/)

* [iOS SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/) (8.0+, only on macOS systems)

* [Android SDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_Android_SDK/) (4.1+)

* [Node.js](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/) (8.x LTS+)

The following additional software is required for building the Titanium SDK:

* [Git](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Git/)

* [Android NDK](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_the_Android_NDK/)

* [Visual C++ 2010 Express](http://www.microsoft.com/visualstudio/eng/downloads#d-2010-express) (for Windows)

Many of these items you may already have installed for developing Titanium applications.

To build the SDK for Android, you must have either Apache Ant or Eclipse and ADT installed. In most cases, you should probably have both--Ant for command-line builds, and Eclipse and ADT for interactive builds and debugging. Building the SDK using `scons`, as described here, requires Ant.

::: danger ❗️ Warning
ADT has been discontinued and we don't recommend using it.
:::

### Windows Notes

For Windows, if you use Studio, you may need to reinstall some of the tools, such as Git, Java and Node.js, and modify your PATH variable to the new locations of the binary executables. Paths to tools should not contain spaces.

## Setting Up Your Environment

The following environment variables must be set in order to build the SDK from source.

| Varible | Value |
| --- | --- |
| ANDROID\_SDK | Android SDK directory, for example, `/opt/android-sdk` |
| ANDROID\_NDK | Android NDK directory, for example, `/opt/android-ndk` |
| JAVA\_HOME | Oracle JDK directory, for example, C:\\Java\\ jdk 1.8.0\_121 |

## Getting the Source

The simplest way to get the SDK source is to simply clone it:

```
git clone https://github.com/tidev/titanium_mobile.git
```

However, if you have any interest in contributing to Titanium, you should create your own fork of the `titanium_mobile` repository on github, as described in the [Pull Request Guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Pull_Request_Guide/).

### Checking Out a Pull Request Locally

If you want to test a changes that is a pull request on Github, you can add and checkout remote PR branches to your local titanium\_mobile repo. Note that there are over 10000 PRs in the titanium\_mobile Github repo, and over 10000 remote PR branches will be linked to your local repo. They will not be downloaded until you explicitly clone them.

**To add the remote PR branches:**

1. From the root level of your titanium\_mobile repo, open the `.git/config` file.

2. Locate the appcelerator/titanum\_mobile repo contents in the file. Note that the remote repo name will be different depending on how you retrieved the appcelerator/titanum\_mobile remote repo. In the example below, it was name "upstream".

    ```
    [remote "upstream"]
            fetch = +refs/heads/*:refs/remotes/upstream/*
            url = https://github.com/tidev/titanium_mobile.git
    ```

3. Add the following line to the section and replace `<remote_name>` with the name of the remote repo:

    ```
    fetch = +refs/pull/*/head:refs/remotes/<remote_name>/pr/*
    ```

    In the previous example, the section now looks like:

    ```
    [remote "upstream"]
            fetch = +refs/heads/*:refs/remotes/upstream/*
            url = https://github.com/tidev/titanium_mobile.git
            fetch = +refs/pull/*/head:refs/remotes/upstream/pr/*
    ```

4. Fetch the remote PR branches:

    ```
    git fetch upstream
    ```

5. Checkout the PR you want to test:

    ```
    git checkout pr/####
    ```

**To remove the PR remote branches, run the following command:**

```
git fetch upstream --prune
```

## Build the SDK

The method written below is the old way. The repo has now been updated to do away with scons. Please refer to [https://github.com/tidev/titanium\_mobile/blob/master/README.md#building-locally](https://github.com/tidev/titanium_mobile/blob/master/README.md#building-locally) on how to build locally with Node.JS scrips.

In the root of your `titanium_mobile` repo, run the following commands:

```bash
npm install

node scons.js cleanbuild
```

By default, the above will build the SDK for all platforms. You can specify platforms to limit the generation of unmentioned platforms, e.g. `node scons.js cleanbuild ios`.

When updating to a new version of the SDK, it is usually necessary to rerun `npm install` to update the local Node dependencies.

## Installing a Built SDK

Once you've built the SDK successfully, the built SDK is in `titanium_mobile_dir/dist/mobilesdk-<version>-<os>.zip`, where
`titanium_mobile` is the root of your local repo, `<version>` is the current version of the SDK master branch, and `<os>` is the OS you built for,
such as `windows` or `osx`. By using the above Node commands, the SDK will automatically installed for you. To manually install a packaged SDK,
select one of the following options:

### To Install the SDK Using Studio

Note that if you install an SDK using Studio, it will appear in Studio with the default version number. If you want to rename your custom SDK, see [To Install the SDK Manually](#to-install-the-sdk-manually).

1. Click **Help** > **Install Titanium SDK...**.

2. Select **Install from URL**.

3. Click **Browse**. Browse your `<titanium_mobile_dir>/dist` folder and select the zip file.

4. Click **Finish**.

### To Install the SDK Manually

1. Unzip the zip file.

2. Inside the `mobilesdk/<os>` folder, there is a folder named with the version number (for example, 7.2.0). You may want to rename this folder so you can distinguish it later – for example, 8`.2.0.TIMOB-1234`.

3. Copy the SDK folder to the folder where your other Titanium SDKs are installed.

The default installation folder for SDKs varies by operating system:

* macOS:

    `~/Library/Application Support/Titanium`

* Windows:

    `%ProgramData%\Titanium`

## Speeding Up the Titanium SDK Build

The process of compiling the [Titanium SDK source code](https://github.com/tidev/titanium_mobile) can be very time consuming if your environment is not primed to do so. Here's a short list of tips and tricks for getting that compile time down. In our testing so far, these tips can reduce compile time by as much as 80%!

::: warning ⚠️ Warning
At this time, the instructions refer specifically to speeding up the Titanium SDK build on a macOS machine.
:::

### Use ccache

The Android NDK can use [ccache](http://ccache.samba.org/), a tool for reusing cached C/C++ compilations. We get huge improvements in build time with it.

1. Install [HomeBrew](https://brew.sh/) if you don't have it installed already

2. Install `ccache` with the following command: **`brew install ccache`**

3. Set an environment variable `NDK_CCACHE` to point to it. Installed with HomeBrew, the command would be: **`export NDK_CCACHE=/usr/local/bin/ccache`**

### Parallelize Compiling

The NDK can also parallelize while compiling, which can speed up the process.

1. Determine how many cores your machine has. You can use this command on macOS: **`system_profiler | grep -i "Number Of Cores"`**

2. Multiply the above number by 2. So if the above command returned `Number of Cores: 2`, then your value should be 4.

3. Set an environment variable `NUM_CPUS` equal to the above value. In this case: **`export NUM_CPUS=4`**
