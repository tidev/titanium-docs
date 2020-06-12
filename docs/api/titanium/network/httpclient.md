# Titanium.Network.HTTPClient

<TypeHeader/>

## Overview

Use <Titanium.Network.createHTTPClient> to create a new `HTTPClient` object.

An `HTTPClient` object is intended to be used for a single request. It may be
possible to re-use an `HTTPClient` object, but this use case is not tested.

There are three steps in making a typical HTTP request:

* Creating an `HTTPClient` object.
* Opening the `HTTPClient` object.
* Sending the request.

Before opening the request, you must define one or more callbacks to handle
the HTTP response, as well as errors, progress updates, and other conditions.

The `HTTPClient` callbacks operate somewhat differently from other
Titanium callbacks, in accordance with the XMLHttpRequest specification.

When the callbacks are invoked, the `this` value is set to either the
original `HTTPClient` object itself, or a response object that holds all
of the response-related properties defined for the `HTTPClient` object. So the
callbacks can use code like this to access the response values:

``` js
httpResponse = this.responseText;
status = this.status;
```

### Content-Type Header

When sending a POST request with the HTTP client, the Content-Type header is set automatically
depending on the platform and data type sent.

On the Android and iOS platforms:

  * If you are sending a JavaScript object, the content type is set to `multipart/form-data`.
  * For all other data types on Android, the content type is set to `application/x-www-form-urlencoded`.
  * For all other data types on iOS, the content type is **NOT** set.

Use the [setRequestHeader](Titanium.Network.HTTPClient.setRequestHeader) method to override the
default Content-Type header.

### Asynchronous vs. Synchronous HTTP Requests

By default, the `HTTPClient` makes asynchronous requests.  Asynchronous requests do not block
the application and use callbacks to process responses when they are received.

Synchronous requests block the execution of the application until it receives a response.
On the iOS platform,  you can make synchronous requests by setting the optional
`async` parameter to `false` when calling the [open](Titanium.Network.HTTPClient.open) method.

The Android platform does not support synchronous requests.

### TLS Support

Transport Layer Security (TLS) is a protocol that ensures privacy between communicating applications
and their users on the Internet. When a server and client communicate, TLS ensures that no third
party may eavesdrop or tamper with any message. TLS is the successor to the Secure Sockets Layer (SSL).

To communicate to servers with the TLS protocol, you need to use the same TLS version between
the client and server.

<table class="doc-table" summary="This table provides information about TLS versions.">
  <caption><b>TLS versions by platform</b></caption>
  <thead>
    <tr>
      <th>Protocol</th>
      <th>Android</th>
      <th>iOS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th align="left">TLS 1.0</th>
      <td>1.0+</td>
      <td>1.0+</td>
    </tr>
    <tr>
      <th align="left">TLS 1.1</th>
      <td>4.1+</td>
      <td>5.0+</td>
    </tr>
    <tr>
      <th align="left">TLS 1.2</th>
      <td>4.1+</td>
      <td>5.0+</td>
    </tr>
    <tr>
      <th align="left">TLS 1.3</th>
      <td>10.0+</td>
      <td>12.2+</td>
    </tr>
  </tbody>
</table>

In Titanium, if a connection with TLS 1.2 fails, Titanium will re-attempt the connection with
TLS 1.1 and TLS 1.0. By default, TLS 1.2 is attempted first.

Use the <Titanium.Network.HTTPClient.tlsVersion> property to set the version of the TLS protocol
if you know the version the server is running.  If you do not know, do not set this property.
Titanium will not fallback with a lower TLS version if the `tlsVersion` property is set.
Setting the TLS version saves time from re-attempting connections with lower TLS versions and
provides added security by denying attempts to use lower TLS versions.

You can set the TLS version for the Android and iOS platforms.

### Caching Data

You can also use the HTTP client API to cache image, response data or related. A convenient
way to do so is by setting the <Titanium.Network.HTTPClient.file> property to a path or target
file, which will be populated with the response data in a successful case (e.g. in the `onload`
callback). For more complex use cases, make sure to check [To.ImageCache](https://github.com/Topener/To.ImageCache/)
which also supports expire-handling and extended cache control.

### Android Platform Implementation Notes

On Android, the `HTTPClient` uses its own cookie store which does not share cookies with the
system cookie store used by <Titanium.UI.WebView>. Developers can manage their cookies for both
cookie stores using the methods <Titanium.Network.addHTTPCookie>, <Titanium.Network.addSystemCookie>,
<Titanium.Network.getHTTPCookies>, <Titanium.Network.getHTTPCookiesForDomain>, <Titanium.Network.getSystemCookies>,
<Titanium.Network.removeHTTPCookie>, <Titanium.Network.removeHTTPCookiesForDomain>, <Titanium.Network.removeAllHTTPCookies>,
<Titanium.Network.removeSystemCookie>, <Titanium.Network.removeAllSystemCookies>.

## Examples

### Simple GET Request

The following code excerpt does a simple GET request and logs the response text.

``` js
var url = "http://www.appcelerator.com";
var client = Ti.Network.createHTTPClient({
    // function called when the response data is available
    onload : function(e) {
        Ti.API.info("Received text: " + this.responseText);
        alert('success');
    },
    // function called when an error occurs, including a timeout
    onerror : function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout : 5000  // in milliseconds
});
// Prepare the connection.
client.open("GET", url);
// Send the request.
client.send();
```

<ApiDocs/>
