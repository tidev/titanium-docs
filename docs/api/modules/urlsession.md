# Modules.URLSession

<TypeHeader/>

## Overview

These APIs are supported on iOS 7 and later.

The URL session module (`com.appcelerator.urlSession`) provides the application the ability to
download large content via HTTP while the application is in the background. With this module, you can

  1. Create a URL session and a background download task.
  2. Monitor events to check the progress of the download and session.
  3. Cancel downloads and invalidate sessions.

URL session events are monitored through the following iOS application-level events:

  * <Titanium.App.iOS.backgroundtransfer>
  * <Titanium.App.iOS.downloadprogress>
  * <Titanium.App.iOS.downloadcompleted>
  * <Titanium.App.iOS.sessioncompleted>
  * <Titanium.App.iOS.sessioneventscompleted>

These events are monitored as application-level events by using the `addEventListener` method with the
Titanium.App.iOS namespace.

For more information on getting started, refer to the
[iOS Background Services guide](http://docs.appcelerator.com/platform/latest/#!/guide/iOS_Background_Services).

<ApiDocs/>
