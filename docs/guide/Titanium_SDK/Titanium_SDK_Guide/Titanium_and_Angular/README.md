---
title: Titanium and Angular
weight: '50'
---

# Titanium and Angular

This document will guide you on how to use Titanium and Angular together.

::: warning ⚠️ Techical Preview
Titanium and Angular is currently only available as a Technical Preview and is under ongoing development. Expect things to be broken or APIs to change. Titanium Angular is not yet ready for production use!

If you run into problems read the [Titanium Angular - FAQ](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_FAQ/) or check out [Titanium Angular - Limitations and Workarounds](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_Limitations_and_Workarounds/) for more details about what features are already implemented and what is to come.
:::

## Prerequisites

In order to use Titanium and Angular together you will need a recent nightly build of the Titanium SDK. Both the `master` and `9_2_X` branch will have the latest updates for the Angular support. We recommend using `9_2_X` as that branch is already in maintenance mode, whereas `master` is under active development. Chose one of the following commands to install the latest build from the `9_2_X` branch and automatically select it as your default SDK.

**Install Titanium CLI with Angular support**

```bash
// appc-cli
ti sdk install -b 9_2_X -d

// ti-cli
ti sdk install -b 9_2_X -d
```

Titanium Angular makes use of our new webpack build pipeline introduced with SDK 9.1.0. For this you need to have the Appcelerator Daemon (appcd) and webpack plugin installed as well. For `appc` CLI versions 8.0.0+, appcd comes bundled with the CLI so you will already have it. If you use the `ti` CLI you need to install appcd globally on your machine.

**Install appcd**

```bash
npm i -g appcd
```

After appcd is installed you need to add the webpack plugin by running the following:

**Install @appcd/plugin-webpack**

```bash
npm i -g @appcd/plugin-webpack
```

Now that all the necessary tooling for Titanium Angular is installed you can create your first Titanium Angular project. Head over to the [Getting Started](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Getting_Started_Guide/) guide to learn how to create a new Titanium Angular project and get to know the basic Titanium Angular project structure.

You can also visit the [webpack Guide](/guide/Titanium_SDK/Titanium_SDK_How-tos/Webpack_Guide/) if you want to know more about the webpack build that powers Titanium Angular.

## Open Source

Make sure to also check out the [titanium-angular](https://github.com/tidev/titanium-angular) repository on GitHub, which includes the most active state of the Angular support in Titanium.

## Related documents

* [Titanium Angular Getting Started Guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Getting_Started_Guide/)

* [Titanium Angular Basics](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Basics/)

* [Titanium Angular Routing](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Routing/)

* [Titanium Angular - Helpers and Services](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_Helpers_and_Services/)

* [Titanium Angular - Limitations and Workarounds](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_Limitations_and_Workarounds/)

* [Titanium Angular - FAQ](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_-_FAQ/)
