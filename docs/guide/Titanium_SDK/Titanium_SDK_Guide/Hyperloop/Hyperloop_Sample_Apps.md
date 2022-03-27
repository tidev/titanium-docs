---
title: Hyperloop Sample Apps
weight: '30'
---

# Hyperloop Sample Apps

## Introduction

There are many Hyperloop open source projects on Github already. Make sure to check the following sample apps to get started with native app-development and Hyperloop.

Cross-platform example app

Our cross-platform example app can be found in this Github repo: [https://github.com/tidev/hyperloop-examples](https://github.com/tidev/hyperloop-examples)

* A large sample app that demonstrates native APIs for all three platforms (iOS, Android & Windows), including CocoaPods and Android `.aar` packages

* Examples for the UICollectionView, Beacons, Android Bottom Navigation View, native Android XML layouts, iOS storyboards, XIB's, and so on.

### Requirements

* Titanium 7.0.0+

* Alloy 1.10.0+

### Running this app

**BEFORE** attempting to run this application, ensure that you have downloaded and followed the instructions from the appropriate guide below. There are specific prerequisites that must be first met before this application will run properly.

This sample application only runs on the simulator because it uses a demo application GUID. If you would like to run this application on device, you need to import the application into your own platform account using `appc new ---import`.

## Hyperloop examples organization on Github

We have an organization on Github hosting a number of Hyperloop "modules". These are good examples of wrapping native APIs in Javascript and showcase how you can use Hyperloop to provide APIs that previously would have required writing native modules (in Objective-C, C#, or C++).

Github repo: [https://github.com/hyperloop-modules](https://github.com/hyperloop-modules)

Here are a few of them, but be sure to check out the [organization on Github](https://github.com/hyperloop-modules) for the latest and full listing.

* [https://github.com/hyperloop-modules/ti.speech](https://github.com/hyperloop-modules/ti.speech)

    * Use the iOS 10+ Speech framework in Hyperloop

* [https://github.com/hyperloop-modules/ti.mapbox](https://github.com/hyperloop-modules/ti.mapbox)

    * Use the native Mapbox iOS-SDK in Hyperloop & CocoaPods

* [https://github.com/hyperloop-modules/ti.snackbar](https://github.com/hyperloop-modules/ti.snackbar)

    * Use the native Android Snackbar UI-widget in Hyperloop

There are more samples in development right now, so stay tuned and ensure to get in touch with the community on [TiSlack](http://tislack.org) in the **#hyperloop** channel!
