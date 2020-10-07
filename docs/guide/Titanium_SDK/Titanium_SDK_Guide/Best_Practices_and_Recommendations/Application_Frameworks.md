---
title: Application Frameworks
weight: '30'
---

# Application Frameworks

## Alloy Framework

**[Alloy](/guide/Alloy_Framework/)** is a framework developed by Appcelerator based on the model-view-controller architecture and provides built-in support for various third-party, freely-distributable JavaScript libraries, such as Backbone.js and Underscore.js. Alloy abstracts the Titanium API, making it easier and quicker to write maintainable applications.

## Angular support

We are currently in the process of integrating Titanium SDK with Angular. This is under active development and is not yet released. More details may be found at this blog post announcing the effort: [https://www.appcelerator.com/blog/2018/02/introducing-angular-support-in-titanium/](https://www.appcelerator.com/blog/2018/02/introducing-angular-support-in-titanium/)

## React (Community based)

You can use the community based [titanium-react](https://github.com/yuchi/react-titanium) framework that enables you to use React components in Titanium. For questions on how to use it, feel free to ask on [TiSlack](http://tislack.org), the Slack channel of Titanium.

## Previous suggested frameworks

We provide here two reference application frameworks that have been used successfully by Appcelerator prior to the creation of Alloy. Neither is a model that as a company we "bless" as _the_ approach to use. Both are examples of ways you _could_ structure an app, and each offers benefits or stylistic choices that might fit within your programming experiences and comfort levels.

### MVC style app framework

This sample framework adapts a model-view-controller architecture, defines an event architecture, and defines an object inheritance pattern. It is not a pure MVC implementation. It also was created prior to our adoption of CommonJS require() as the preferred technique. Still, it is an instructive model and has been used successfully for Appcelerator-led projects. see [MVC Style App Framework](#undefined) for more details.

### Modern JavaScript app framework

The Developer Relations team's Community app represents a type of "true" JavaScript app that doesn't attempt to apply another language's constructs. It uses CommonJS modules and carefully protects the global scope. It takes advantage of Titanium's platform build directories for run-time optimization. And it demonstrates how to wrap native proxies rather than extending them (which is a no-no!).

This app is not a template for new projects. It is a living app, one that is in constant development by our Development Relations team. We encourage you to pull ideas from the app rather than specific code. Learn more about it here: [Community app](#undefined)
