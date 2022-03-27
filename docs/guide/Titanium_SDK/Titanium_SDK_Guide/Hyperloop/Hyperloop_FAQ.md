---
title: Hyperloop FAQ
weight: '40'
---

# Hyperloop FAQ

## Can you inject the <property name="run-on-main-thread" type="bool">true</property> tag in the tiapp.xml?

The tag `<property name="run-on-main-thread" type="bool">true</property>` should be in the `tiapp.xml` file by default.

## Will classic Titanium modules continue to be supported?

Yes, existing Titanium modules (built with Java for Android and Objective-C for iOS) will still be supported by the SDK.

## What is Hyperloop’s relationship with Swift?

Prior to Hyperloop, the only way to develop native iOS modules for Titanium was to use Objective-C. But with the release of Hyperloop, we not only support full, native access to the platform SDK from JavaScript, you can also mix Swift (as well as Objective-C) classes in your apps, allowing you to directly access them from JavaScript.

## Is Hyperloop available as part of the Platform trial?

Yes, you have full access to Hyperloop in trial. However, use of Hyperloop beyond trial requires a Pro plan or above.

## If I build an app using Hyperloop, what happens if I later downgrade to the Indie plan?

If you downgrade your plan or if your plan expires, your production apps will continue to function but you will not be able to make Hyperloop-related changes without a plan that supports Hyperloop.

## Does API Builder product REST Type 2 or 3?

This refers to the Swagger version. We currently support version 2. Swagger has been renamed to OpenAPI and version 3 was recently released. It will take some time before we can adopt this version.

## Can we use XIB files and storyboards in Hyperloop?

XIB files and Storyboards are supported however, they need to be programmatically loaded.

[Hyperloop examples - xib.js](https://github.com/appcelerator/hyperloop-examples/blob/master/app/controllers/ios/xib.js) is an example for XIB files.

[UIStoryboard](https://developer.apple.com/documentation/uikit/uistoryboard) provides an overview to use a storyboard that can be loaded.

## Can Hyperloop call an overload function of a class?

Hyperloop supports method overloading. On Android, Hyperloop will figure out the matching overload method of a class by inspecting the types of the given parameters. For iOS, it has named parameters which results in different method names.

## Question and Answer archives were removed from the website after the \[Axway\] merger. Can we get them back?

The Q&A archives were removed before the Axway acquisition. When we decided to move to StackOverflow, the archive was kept for some time but most of the information was outdated.

The open source community created this Q&A using our old archive. Most of the information is out of date but you can still find it here: [https://ti-qa-archive.github.io/](https://ti-qa-archive.github.io/)

## Hyperloop app's breakpoint in main listview click event never gets a hit

Debugging capabilities for Hyperloop in Studio are not optimal at the time of writing this document. The main reason for this is because Hyperloop modifies the source files which throws the debugger off track. [TIMOB-24037](https://jira-archive.titaniumsdk.com/TIMOB-24037) will hopefully address this issue and is currently slated to be address with the SDK 7.0.0 release (November 2017).

Nonetheless, in iOS, it is possible to debug apps using the Safari Web Inspector which allows debugging Hyperloop because it is directly talking to the active JS context inside the running app. Shockoe has posted a short tutorial called [Debugging Titanium Applications using Safari Web Inspector](https://shockoe.com/blog/debugging-titanium-applications-using-safari-web-inspector/). This approach allows debugging of all Hyperloop code up to where it switches over to the native side. The only downside to this is that there are no source maps available for process Alloy controllers.

[TIMOB-24723](https://jira-archive.titaniumsdk.com/TIMOB-24723) (currently slated for SDK 7.0.0 release) addresses the Android equivalent of this issue what allows the utilization of Chrome Dev tools
