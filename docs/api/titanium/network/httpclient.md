---
title: Titanium.Network.HTTPClient
properties:
  - name: DONE
    type: Number
    summary: Ready state constant indicating that the request is complete.
    description: >
      <p>In this ready state, either the data has been transferred, or an error
      has occurred.</p>

      <p>See also <a
      href="Titanium.Network.HTTPClient.readyState">readyState</a>.</p>
  - name: HEADERS_RECEIVED
    type: Number
    summary: Ready state constant indicating that response headers have been received.
    description: >
      <p>See also <a
      href="Titanium.Network.HTTPClient.readyState">readyState</a>.</p>
  - name: LOADING
    type: Number
    summary: >
      Ready state constant indicating that response data is being received from
      the remote server.<br>
    description: >
      <p>See also <a
      href="Titanium.Network.HTTPClient.readyState">readyState</a>.</p>
  - name: OPENED
    type: Number
    summary: >
      Ready state constant indicating that the connection has been opened, but
      the request has<br>

      not yet been sent.<br>
    description: >
      <p>See also <a
      href="Titanium.Network.HTTPClient.readyState">readyState</a>.</p>
  - name: UNSENT
    type: Number
    summary: >-
      Ready state constant indicating that HTTPClient request has not been
      opened or sent.
    description: >
      <p>See also <a
      href="Titanium.Network.HTTPClient.readyState">readyState</a>.</p>
  - name: allResponseHeaders
    type: String
    summary: All of the response headers.
    description: >
      <p>Contains a single string, or an empty string if no headers are
      available.</p>

      <p>See also: <a
      href="Titanium.Network.HTTPClient.getResponseHeader">getResponseHeader</a>.</p>
    platforms:
      - android
  - name: responseHeaders
    type: Dictionary
    summary: Returns all the response headers returned with the request.
    description: >
      <p>Contains a dictionary of response headers only after the http call has
      finished.</p>

      <p>See also: <a
      href="Titanium.Network.HTTPClient.getResponseHeader">getResponseHeader</a>.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: autoEncodeUrl
    type: Boolean
    summary: Determines whether automatic encoding is enabled for the specified URL.
    description: |
      <p>Set to <code>false</code> to disable automatic URL-encoding.</p>
    platforms:
      - android
  - name: autoRedirect
    type: Boolean
    summary: >-
      Determines whether automatic automatic handling of HTTP redirects is
      enabled.
    description: >
      <p>Set to <code>false</code> to disable automatic HTTP redirects
      handling.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: connected
    type: Boolean
    summary: Indicates whether the response was successful.
  - name: connectionType
    type: String
    summary: >-
      Connection type, normally either <code>GET</code>, <code>POST</code> or
      <code>PATCH</code>.
  - name: domain
    type: String
    summary: Sets the domain parameter for authentication credentials.
    description: >
      <p>Set this parameter when authentication against NTLM domains along with
      the <a href="Titanium.Network.HTTPClient.username">username</a><br>

      and <a href="Titanium.Network.HTTPClient.password">password</a>
      properties.<br>

      iOS supports NTLM authentication natively.<br>

      Android can be extended using the <a
      href="Titanium.Network.HTTPClient.addAuthFactory">addAuthFactory</a>
      method.<br>

      Must be set before calling <a
      href="Titanium.Network.HTTPClient.open">open</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: enableKeepAlive
    type: Boolean
    summary: >-
      Determines whether the client should attempt to keep a persistent
      connection.
    description: |
      <p>Set to <code>true</code> to maintain a persistent connection.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: file
    type: String, Titanium.Filesystem.File
    summary: Target local file or file path to receive data.
    description: >
      <p>This property can be set anytime prior to calling <a
      href="Titanium.Network.HTTPClient.send">send</a>.<br>

      The file must be writable such as the application data directory or temp
      directory.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 3.4.0
  - name: location
    type: String
    summary: Absolute URL of the request.
    description: >
      <p>If the request redirects, this property returns the URL of the
      redirected request.</p>
  - name: ondatastream
    type: Callback<Object>
    summary: >-
      Function to be called at regular intervals as the request data is being
      received.
    description: >
      <p>Must be set before calling <code>open</code>.</p>

      <p>The <code>progress</code> property of the event will contain a value
      from 0.0-1.0 with the progress of<br>

      the request. If the progress can not be calculated,<br>

      the value will be <a
      href="Titanium.Network.PROGRESS_UNKNOWN">PROGRESS_UNKNOWN</a>.</p>
  - name: onerror
    type: Callback<FailureResponse>
    summary: Function to be called upon a error response.
    description: >
      <p>Must be set before calling <code>open</code>.<br>

      The <code>code</code> property of the callback's argument is -1001 for
      timed-out requests.</p>
  - name: onload
    type: Callback<SuccessResponse>
    summary: Function to be called upon a successful response.
    description: >
      <p>Must be set before calling <code>open</code>.</p>

      <p>To access response data and headers, access the <code>HTTPClient</code>
      object itself (accessible as<br>

      <code>this</code> during the callback, or the <code>source</code> property
      of the callback event).</p>
  - name: onreadystatechange
    type: Callback<Object>
    summary: >
      Function to be called for each <a
      href="Titanium.Network.HTTPClient.readyState">readyState</a> change.<br>
    description: >
      <p>Must be set before calling <code>open</code>.</p>

      <p>When the callback is invoked, <code>this.readyState</code> is set to
      one of the<br>

      <code>Titanium.Network.HTTPClient</code> ready-state constants,<br>

      <a href="Titanium.Network.HTTPClient.OPENED">OPENED</a>,<br>

      <a
      href="Titanium.Network.HTTPClient.HEADERS_RECEIVED">HEADERS_RECEIVED</a>,<br>

      <a href="Titanium.Network.HTTPClient.LOADING">LOADING</a>,<br>

      or <a href="Titanium.Network.HTTPClient.DONE">DONE</a>.</p>

      <p>Due to the asynchronous nature of the Titanium platform, the internal
      value of<br>

      <a href="Titanium.Network.HTTPClient.readyState">readyState</a> might be
      different from the state change<br>

      for which the event was fired. To address this discrepancy, the function
      is now invoked with a<br>

      payload object of type &lt;ReadyStatePayload&gt;. This is supported on the
      iOS and Android platforms.</p>
  - name: onsendstream
    type: Callback<Object>
    summary: >-
      Function to be called at regular intervals as the request data is being
      transmitted.
    description: >
      <p>Must be set before calling <code>open</code>.</p>

      <p>The <code>progress</code> property of the event will contain a value
      from 0.0-1.0 with the progress of<br>

      the upload.</p>
  - name: password
    type: String
    summary: Sets the password parameter for authentication credentials.
    description: >
      <p>Must be set before calling <a
      href="Titanium.Network.HTTPClient.open">open</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: readyState
    type: Number
    summary: The current ready state of this HTTP request.
    description: >
      <p>The ready state describes the current state of the request. The ready
      state is set to one of<br>

      the five <code>Titanium.Network.HTTPClient</code> ready state constants. A
      typical HTTP request goes<br>

      through the states in this order:</p>

      <ul>

      <li><a href="Titanium.Network.HTTPClient.UNSENT">UNSENT</a></li>

      <li><a href="Titanium.Network.HTTPClient.OPENED">OPENED</a></li>

      <li><a
      href="Titanium.Network.HTTPClient.HEADERS_RECEIVED">HEADERS_RECEIVED</a></li>

      <li><a href="Titanium.Network.HTTPClient.LOADING">LOADING</a></li>

      <li><a href="Titanium.Network.HTTPClient.DONE">DONE</a></li>

      </ul>

      <p>The <code>onreadystatechange</code> callback is invoked each time the
      ready state changes.</p>
  - name: responseData
    type: Titanium.Blob
    summary: Response data as a <code>Blob</code> object.
  - name: responseText
    type: String
    summary: Response as text.
    description: >
      <p>Set to <code>null</code> if an error was received or no data was
      returned.</p>
  - name: responseDictionary
    type: String
    summary: Response as JSON object.
    description: >
      <p>Set to <code>null</code> if the content type returned by the server was
      not a JSON or if the content could not be parsed.</p>
  - name: responseXML
    type: Titanium.XML.Document
    summary: Response object as an XML DOM Document object.
    description: >
      <p>Set to <code>null</code> if the content type returned by the server was
      not XML or if the content could not be parsed.</p>
  - name: securityManager
    type: SecurityManagerProtocol
    summary: The Security Manager for this client.
    description: >
      <p>This property <strong>must</strong> be specified during creation. Set
      this property on the HTTPClient to participate in the authentication and
      resource management of the connection. See &lt;SecurityManagerProtocol&gt;
      for further information.</p>
    platforms:
      - ipad
      - iphone
      - android
      - macos
    since: 3.3.0
  - name: status
    type: Number
    summary: Response HTTP status code.
  - name: statusText
    type: String
    summary: Human-readable status message associated with the status code.
  - name: timeout
    type: Number
    summary: Timeout in milliseconds when the connection should be aborted.
  - name: timeoutForResource
    type: Number
    summary: >
      The maximum amount of time (in milliseconds) that a resource request
      should be allowed to take.<br>
    description: >
      <p>The resource timeout controls how long (in milliseconds) to wait for an
      entire resource to transfer before giving up.<br>

      The resource timer starts when the request is initiated and counts until
      either the request completes or this timeout is reached, whichever comes
      first.<br>

      For more detail see <a
      href="https://developer.apple.com/documentation/foundation/nsurlsessionconfiguration/1408153-timeoutintervalforresource?language=objc">timeoutintervalforresource</a><br>

      from Apple documentation.<br>

      This property also applies if <a
      href="/api/ti/network/http-client">Ti.Network.HttpClient.waitsForConnectivity</a>
      is set to <code>true</code>.</p>
    platforms:
      - iphone
      - ipad
    since: 9.2.0
  - name: waitsForConnectivity
    type: Boolean
    summary: >
      A Boolean value that indicates whether the session should wait for
      connectivity to become available, or fail immediately.<br>
    description: >
      <p>Causes tasks to wait for network connectivity to become available,
      rather than immediately failing<br>

      with an error when it is not. When waiting for connectivity, the <a
      href="/api/ti/network/http-client">Ti.Network.HttpClient.timeout</a><br>

      property does not apply, but the <a
      href="/api/ti/network/http-client">Ti.Network.HttpClient.timeoutForResource</a>
      property does.</p>
    platforms:
      - iphone
      - ipad
    since: 9.2.0
  - name: username
    type: String
    summary: Sets the username parameter for authentication credentials.
    description: >
      <p>Must be set before calling <a
      href="Titanium.Network.HTTPClient.open">open</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since: 3.0.0
  - name: validatesSecureCertificate
    type: Boolean
    summary: Determines how SSL certification validation is performed on connection.
    description: >
      <p>On Android, this property is ignored if the
      <code>securityManager</code> property is used to create a custom SSL
      context and will handle the given URI.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: tlsVersion
    type: Number
    summary: Sets the TLS version to use for handshakes.
    description: >
      <p>If you experience handshake failures, set this value to a lower version
      using the TLS<br>

      constants in <a href="/api/titanium/network">Titanium.Network</a>.
      'undefined', 'null', or unsupported values use the default<br>

      behavior for that Android versions.</p>

      <p>Setting this property disables falling back to lower TLS versions.</p>
    platforms:
      - android
    since:
      android: 3.6.0
  - name: cache
    type: Boolean
    summary: Determines whether HTTP responses are cached.
    description: >
      <p>If <code>cache</code> is set to <code>true</code>, requests using this
      HTTP client will cache their responses<br>

      (respecting headers such as &quot;no-cache&quot;, &quot;no-store&quot;,
      and cache expiry). In this case, repeated<br>

      requests to the same URL may retrieve the initial response rather than
      triggering a new<br>

      request. The cache is shared between all instances of
      <code>HTTPClient</code>.</p>

      <p>Caching should only be enabled for HTTP requests which you expect the
      result to remain<br>

      consistent for.</p>

      <p>If <code>cache</code> is <code>false</code>, any request on this HTTP
      client will result in a new HTTP request.</p>

      <p>This property must be set before <code>open</code> is called.</p>
    platforms:
      - iphone
      - ipad
      - macos
    since: 2.0.0
methods:
  - name: abort
    summary: Cancels a pending request.
  - name: clearCookies
    summary: Clears any cookies stored for the host.
    parameters:
      - name: host
        type: String
        summary: The URL of the host/domain to clear cookies for.
  - name: getAllResponseHeaders
    summary: All of the response headers.
    description: >
      <p>Contains a single string, or an empty string if no headers are
      available.</p>

      <p>See also: <a
      href="Titanium.Network.HTTPClient.getResponseHeader">getResponseHeader</a>.</p>

      <p>Intended to match the <code>XMLHTTPRequest</code> <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders">getAllResponseHeaders
      API</a>.</p>
    returns:
      type: String
  - name: getResponseHeader
    summary: Returns the value of the specified response header.
    parameters:
      - name: name
        type: String
        summary: Name of the header to retrieve.
    returns:
      type: String
  - name: open
    summary: Opens the request and prepares the connection.
    parameters:
      - name: method
        type: String
        summary: >-
          HTTP method for this request, such as 'GET' or 'POST'. 'PATCH' is
          available on Android from SDK 4.1.0.
      - name: url
        type: String
        summary: URL for the request.
      - name: async
        type: Boolean
        summary: >-
          Determines whether the request should be made asynchronously. Only
          used on iOS.
        optional: true
  - name: send
    summary: Sends the request.
    description: >
      <p>For POST requests, use the <code>data</code> parameter to send POST
      data.</p>

      <p>If you pass a serializable JavaScript object, it is automatically
      turned into form-encoded<br>

      POST data. You can also send an arbitrary string or binary data (in the
      form of a<br>

      <a href="/api/titanium/blob">Titanium.Blob</a>).</p>

      <p>To send array data, specify each array element individually as a
      property of the object.<br>

      For example, normally, you specify an array in an object as:</p>

      <div class="language-js"><pre class="shiki"><code>var payload = { myArray:
      [1, 2, 3] };

      </code></pre></div>

      <p>Instead, for the HTTP client to encode the data correctly, you need to
      send the data as:</p>

      <div class="language-js"><pre class="shiki"><code>var payload = {
          &quot;myArray[0]&quot; : 1,
          &quot;myArray[1]&quot; : 2,
          &quot;myArray[2]&quot; : 3
      };

      </code></pre></div>

      <p>On iOS, you can specify a synchronous request when you call
      <code>open</code> by passing <code>false</code> for<br>

      the <code>async</code> parameter. In the case of a synchronous request,
      <code>send</code> blocks until the request<br>

      is complete.</p>
    parameters:
      - name: data
        type: Object, String, Titanium.Filesystem.File, Titanium.Blob
        summary: Data to send with a POST request.
        optional: true
  - name: setRequestHeader
    summary: >
      Sets the value for the specified request header. Must be called after
      <code>open</code> but before <code>send</code>.<br>
    parameters:
      - name: name
        type: String
        summary: Name of the header to set.
      - name: value
        type: String
        summary: >
          Value to assign to the header. May be <code>null</code> to clear a
          default header value, such as<br>

          X-Requested-With.<br>
  - name: setTimeout
    summary: Sets the request timeout.
    parameters:
      - name: timeout
        type: Number
        summary: Timeout in milliseconds.
examples:
  - title: Simple GET Request
    code:
      - content: |-
          var url = "http://www.titaniumsdk.com";
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
        language: js
    intro: >-
      The following code excerpt does a simple GET request and logs the response
      text.
---

# Titanium.Network.HTTPClient

HTTP client object that (mostly) implements the XMLHttpRequest specification.

Use [Titanium.Network.createHTTPClient](/api/titanium/network) to create a new `HTTPClient` object.

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

#### Content-Type Header

When sending a POST request with the HTTP client, the Content-Type header is set automatically
depending on the platform and data type sent.

On the Android and iOS platforms:

  * If you are sending a JavaScript object, the content type is set to `multipart/form-data`.
  * For all other data types on Android, the content type is set to `application/x-www-form-urlencoded`.
  * For all other data types on iOS, the content type is **NOT** set.

Use the [setRequestHeader](Titanium.Network.HTTPClient.setRequestHeader) method to override the
default Content-Type header.

#### Asynchronous vs. Synchronous HTTP Requests

By default, the `HTTPClient` makes asynchronous requests.  Asynchronous requests do not block
the application and use callbacks to process responses when they are received.

Synchronous requests block the execution of the application until it receives a response.
On the iOS platform,  you can make synchronous requests by setting the optional
`async` parameter to `false` when calling the [open](Titanium.Network.HTTPClient.open) method.

The Android platform does not support synchronous requests.

#### TLS Support

Transport Layer Security (TLS) is a protocol that ensures privacy between communicating applications
and their users on the Internet. When a server and client communicate, TLS ensures that no third
party may eavesdrop or tamper with any message. TLS is the successor to the Secure Sockets Layer (SSL).

To communicate to servers with the TLS protocol, you need to use the same TLS version between
the client and server.

&lt;table class="doc-table" summary="This table provides information about TLS versions."&gt;
  &lt;caption&gt;&lt;b&gt;TLS versions by platform&lt;/b&gt;&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Protocol&lt;/th&gt;
      &lt;th&gt;Android&lt;/th&gt;
      &lt;th&gt;iOS&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th align="left"&gt;TLS 1.0&lt;/th&gt;
      &lt;td&gt;1.0+&lt;/td&gt;
      &lt;td&gt;1.0+&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th align="left"&gt;TLS 1.1&lt;/th&gt;
      &lt;td&gt;4.1+&lt;/td&gt;
      &lt;td&gt;5.0+&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th align="left"&gt;TLS 1.2&lt;/th&gt;
      &lt;td&gt;4.1+&lt;/td&gt;
      &lt;td&gt;5.0+&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th align="left"&gt;TLS 1.3&lt;/th&gt;
      &lt;td&gt;10.0+&lt;/td&gt;
      &lt;td&gt;12.2+&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

In Titanium, if a connection with TLS 1.2 fails, Titanium will re-attempt the connection with
TLS 1.1 and TLS 1.0. By default, TLS 1.2 is attempted first.

On Android, use the [Titanium.Network.HTTPClient.tlsVersion](/api/titanium/network/httpclient) property to set the version of the TLS protocol
if you know the version the server is running.  If you do not know, do not set this property.

On iOS, add the `NSExceptionMinimumTLSVersion` key in the `<plist>` section of `tiapp.xml` to set a minimum TLS version.
See following example:

```
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSExceptionDomains</key>
  <dict>
    <key>www.titaniumsdk.com</key>
    <dict>
      <key>NSExceptionMinimumTLSVersion</key>
      <string>TLSv1.3</string>
    </dict>
  </dict>
</dict>
```
Titanium will not fallback with a lower TLS version if the `tlsVersion` property in Android or `NSExceptionMinimumTLSVersion` in iOS, is set.
Setting the TLS version saves time from re-attempting connections with lower TLS versions and
provides added security by denying attempts to use lower TLS versions.

#### Caching Data

You can also use the HTTP client API to cache image, response data or related. A convenient
way to do so is by setting the [Titanium.Network.HTTPClient.file](/api/titanium/network/httpclient) property to a path or target
file, which will be populated with the response data in a successful case (e.g. in the `onload`
callback). For more complex use cases, make sure to check [To.ImageCache](https://github.com/Topener/To.ImageCache/)
which also supports expire-handling and extended cache control.

#### Android Platform Implementation Notes

On Android, the `HTTPClient` uses its own cookie store which does not share cookies with the
system cookie store used by [Titanium.UI.WebView](/api/titanium/ui/web-view). Developers can manage their cookies for both
cookie stores using the methods [Titanium.Network.addHTTPCookie](/api/titanium/network), [Titanium.Network.addSystemCookie](/api/titanium/network),
[Titanium.Network.getHTTPCookies](/api/titanium/network), [Titanium.Network.getHTTPCookiesForDomain](/api/titanium/network), [Titanium.Network.getSystemCookies](/api/titanium/network),
[Titanium.Network.removeHTTPCookie](/api/titanium/network), [Titanium.Network.removeHTTPCookiesForDomain](/api/titanium/network), [Titanium.Network.removeAllHTTPCookies](/api/titanium/network),
[Titanium.Network.removeSystemCookie](/api/titanium/network), [Titanium.Network.removeAllSystemCookies](/api/titanium/network).

#### Connect to local network in iOS

On iOS 14 and later, while connecting to local network a prompt will be shown to request user's permission.
Add key `NSLocalNetworkUsageDescription` to the `ios plist` section of the tiapp.xml file to show the message on prompt.
If this key is not added default message will be shown in prompt.

Example:

``` xml
<ti:app>
  <!-- ... -->
  <ios>
    <plist>
      <dict>
        <!-- Reason to access local network-->
        <key>NSLocalNetworkUsageDescription</key>
        <string>
            Specify the reason for accessing the local network.
            This appears in the alert dialog when asking the user
            for permission to access local network.
        </string>
      </dict>
    </plist>
  </ios>
  <!-- ... -->
</ti:app>
```


**Extends:** `Titanium.Proxy` · **Since:** 0.1

<ApiProperties />

<ApiMethods />

<ApiExamples />

