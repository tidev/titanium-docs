---
title: Android Titanium SDK Development Setup
weight: '20'
---

# Android Titanium SDK Development Setup

## Overview

This is a guide to setup the Android development environment to develop for Titanium Mobile.

## Getting started

You can use [Android Studio](https://developer.android.com/studio) to work with the Titanium SDK or Titanium Android modules. It allows you to use Android Studio features like auto completion or syntax checks.

## Titanium SDK

To build a local Titanium SDK you have to do the following steps:

* clone the repo `git clone https://github.com/tidev/titanium_mobile`
* go into the folder `cd titanium_mobile`
* install node packages `npm i`
* open the `android/` folder in Android Studio
* make your changes
* run `npm run cleanbuild` to build the SDK. If you need to rebuild it again you can use `npm run build:local` to skip the clean & zip part

## Titanium modules

In order to use Android Studio for a module you have to build it once and then open the `android/build` folder in Android Studio. After that you can normally edit your source files in Studio and build the module with `ti build -p android -b`.
