---
title: Android Module Development Guide
weight: '30'
---

# Android Module Development Guide

## Overview

Titanium provides the ability to extend the built-in functionality of the Titanium SDK through a series of optional extensions called modules. Modules let you write code in a platform's native language (Java for Android). Through a series of components, we can expose new functionality to the JavaScript running in the Titanium SDK.

These guides assume you are familiar with native development using the Android SDK and an Eclipse-based IDE.

## Chapters

**[Android Module Quick Start](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Android_Module_Development_Guide/Android_Module_Quick_Start/)**

Provides basic information to quickly create, build, package and test modules.

**[Android Module Architecture](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Android_Module_Development_Guide/Android_Module_Architecture/)**

Provides in-depth information about the class components used to build modules. Titanium uses a specific notation for each module component.

**[Android Module Project](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Android_Module_Development_Guide/Android_Module_Project/)**

Provides in-depth information about the structure of a module project as well as using the CLI to manage the projects. Also provides information about adding assets and third-party frameworks to the module.

**[Android Module API Reference](http://docs.appcelerator.com/module-apidoc/latest/android/index.html)**

Useful APIs for module development. The module components extend the `KrollModule`, `KrollProxy`, `TiUIView` and `TiViewProxy` classes.

**[Android Module Upgrade Guide](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Android_Module_Development_Guide/Android_Module_Upgrade_Guide/)**

Guide for upgrading Android modules between major versions of Titanium SDK.
