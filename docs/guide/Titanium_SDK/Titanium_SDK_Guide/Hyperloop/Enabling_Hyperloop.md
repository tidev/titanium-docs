---
title: Enabling Hyperloop
weight: '10'
---

# Enabling Hyperloop

## Introduction

This page lists information on how to use Hyperloop with new and existing projects. Hyperloop works as a native module and is pre-packaged with the SDK.

Each Titanium project that wants to use Hyperloop requires the Hyperloop service to be enabled. By default, Hyperloop is disabled and you can enable it for your projects via the CLI.

### Requirements

Refer to [Hyperloop Requirements](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/Hyperloop_Requirements.html) for instructions on what and how to install the necessary requirements for Hyperloop.

**Please note:**

* If you attempt to create an app that is called "Hyperloop" (the app-name in the **tiapp.xml**) you may experience failures in the build process, because it is a reserved word. Please use a different project name for this case.

* Hyperloop expects Xcode to be in **/Applications/Xcode.app** to reference system-libraries, so please ensure that Xcode is located at the this location.

## Using Hyperloop on existing projects

If you’d like to use Hyperloop in a new or existing Titanium project, add the following code to your tiapp.xml to configure the module:

```xml
<modules>
  <module>hyperloop</module>
</modules>
```

### Getting Started

Make sure to follow the [Hyperloop Guides](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/) section for deep-dives on how to use the native platforms in Titanium.
