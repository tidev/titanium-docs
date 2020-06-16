---
title: HTTPClient and the Request Lifecycle
weight: '10'
---

# HTTPClient and the Request Lifecycle

## Objective

In this chapter, you will learn how to access and interact with remote servers via the HTTP protocol. You will also examine the XMLHTTPRequest (XHR) lifecycle and how it is implemented within Titanium.

## Contents

Your Titanium application can interact with remote servers over [HTTP](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) using the [Ti.Network.HTTPClient object](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient-object.html). Titanium's HTTPClient API mirrors that of the XMLHTTPRequest object in the web browser, so if you have done any Ajax programming in the browser (outside of libraries like Dojo or jQuery, which use XMLHTTPRequest), HTTPClient will be familiar to you.

::: warning ⚠️ Warning
With Mobile Web apps, in order to access cross-domain resources (resources not on the server that hosts your Mobile Web pages) you must either enable CORS header support on your web server or configure a proxy service on your web server and define a custom Ti.Network.httpURLFormatter. A good guide on CORS is available from [Mozilla.org](https://developer.mozilla.org/en/HTTP_access_control).
:::

As shown in the code example below, you declare an `HTTPClient` object and pass to it a number of parameters. Of these, the most critical is the `onload` callback function. It is the function called when data is returned and available for use. The `onerror` callback function is called when there's a network error, such as a timeout.

**Ti.Network.HTTPClient skeleton**

```javascript
var url = 'https://www.appcelerator.com';
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
    // this function is called when data is returned from the server and available for use
        // this.responseText holds the raw text return of the message (used for text/JSON)
        // this.responseXML holds any returned XML (including SOAP)
        // this.responseData holds any returned binary data
        Ti.API.debug(this.responseText);
        alert('success');
    },
    onerror: function(e) {
    // this function is called when an error occurs, including a timeout
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout: 5000 // milliseconds
});
xhr.open('GET', url);
xhr.send();  // request is actually sent with this statement
```

It is possible to use HTTPClient to interact with many popular types of web services, but the easiest form to work with are REST-style web services. Defining and explaining RESTful web services is beyond the scope of this guide, but [you can learn more about REST here](http://en.wikipedia.org/wiki/Representational_State_Transfer). For our purposes, it is sufficient to understand that a 'resource' is some bit of data on the web, identified by a [URI](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier). Most commonly, your mobile application will interact with this data on the web using HTTP GET or POST requests, though the full range of HTTP verbs are supported by HTTPClient: GET, POST, PUT, and DELETE. PATCH is supported on the Android platform since Release 4.1.0.

The handling of network communication is handled asynchronously. Mobile data networks are less reliable and consistently available than office or home Internet connections. You would not want your application to hang while waiting on an HTTP request to return.

### GET requests

Making a GET (or any other type of) request to a resource on the web consists of three steps:

* Creating an HTTP Client (starts on line 2 in the code above)

* Opening an HTTP connection to a specified resource (line 18)

* Sending an HTTP request (line 19)

Most of the time, simply sending the request is not useful to your application. You are likely interested in the data the server will respond with, which is available in the response body. In order to access this data, you can specify callback functions to be executed at specific points in the lifecycle of the request. As shown in the code above, `onload` is called after a response from the resource has been successfully received, and `oneerror` is called if there is an error.

Within those callback functions:

* `this.responseText` holds the returned payload as raw text

* `this.responseXML` holds the payload as an [XML document](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML.DOMDocument-object.html) instance

* `this.responseData` holds the payload as a BLOB (binary data)

### POST requests

Often you will need to send data to the server in the body of your request, as you would in a standard HTML form. This is typically accomplished via a POST (or PUT) request. Titanium provides an easy way of sending along a POST body with a request, automatically serializing JavaScript object graphs into form-encoded POST parameters:

```javascript
var xhr = Ti.Network.createHTTPClient();

xhr.onload = function(e) {
  // handle response, which at minimum will be an HTTP status code
};

xhr.open('POST', 'http://www.myblog.com/post.php');
xhr.send({
  title: 'My awesome blog',
  body: 'Today I met Susy at the laundromat. Best day EVER\!'
});
```

You can also send arbitrary string data as the body of your post by passing a string to `send`:

```
xhr.send('<some><xml><data></data></xml></some>');
```

### HTTP headers

It is often necessary to manually add HTTP headers to your requests. This can be accomplished easily by using the `setRequestHeader` function on HTTPClient. **NOTE: HTTP Headers must be set AFTER client.open(), but before client.send(), as below:**

```javascript
var client = Ti.Network.createHTTPClient();
client.open('POST', 'http://someserver.com/files/new');
client.setRequestHeader('Content-Type', 'text/csv');
client.send('foo,bar,foo,bar');
```

### XHR lifecycle

`HTTPClient` implements the [five XHR ready states](http://www.w3.org/TR/XMLHttpRequest/#states) defined by the W3 specification. Should you need to, your app can react to these state changes with the `onreadystatechange` callback. The five states are:

* UNSENT – The object has been constructed. Titanium doesn't report on this state with the `onreadystatechange` handler.

* OPENED – The open() method has been successfully invoked. During this state request headers can be set using setRequestHeader() and the request can be made using the send() method.

* HEADERS\_RECEIVED – All redirects (if any) have been followed and all HTTP headers of the final response have been received. Several response members of the object are now available.

* LOADING – The response entity body is being received.

* DONE – The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects).

In code, it would look like this:

**Monitoring ready state changes**

```javascript
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        Ti.API.info('onload called');
    },
    onerror: function(e) {
        Ti.API.info('onerror called');
    },
    ondatastream: function(e) {
        Ti.API.info('ondatastream called');
    },
    onsendstream: function(e) {
        Ti.API.info('onsendstream called');
    },
    onreadystatechange: function(e) {
        switch(this.readyState) {
            case Ti.Network.HTTPClient.UNSENT:
                Ti.API.info('readyState: UNSENT');
            break;
            case Ti.Network.HTTPClient.OPENED:
                Ti.API.info('readyState: OPENED');
            break;
            case Ti.Network.HTTPClient.HEADERS_RECEIVED:
                Ti.API.info('readyState: HEADERS_RECEIVED');
            break;
            case Ti.Network.HTTPClient.LOADING:
                Ti.API.info('readyState: LOADING');
            break;
            case Ti.Network.HTTPClient.DONE:
                Ti.API.info('readyState: DONE');
            break;
            default:
                Ti.API.info('readyState: UNKNOWN ' + this.readyState);
        }
    },
    timeout: 5000  // milliseconds
});
xhr.open('GET', 'https://www.appcelerator.com/blog/');
xhr.send();  // request is actually sent with this statement
```

### Hands-on practice

#### Goal

In this activity, you will write an app that downloads and displays an image from a remote web URL using the HTTPClient object.

#### Resources

To perform the steps in this activity, you will need to reference the HTTPClient API docs at [https://docs.appcelerator.com/platform/latest/#!/api/Titanium.Network.HTTPClient](#!/api/Titanium.Network.HTTPClient). You will also need a working internet connection on your simulator/emulator or test device.

#### Steps

1. Create a new Titanium Mobile project.

2. In app.js, declare an HTTPClient object with a name of your choosing. It will `GET` the image at [http://developer.appcelerator.com/assets/img/DEV\_appteam\_photo.png](http://developer.appcelerator.com/assets/img/DEV_appteam_photo.png)

3. Write an onload callback for your HTTPClient that will perform these operations:

    * Log the HTTP status code to the console. See the API docs for the correct property to use to access the status code.

    * Define an ImageView object whose image property is set equal to the binary data returned from the network.

    * Add that ImageView object to the `win1` window so that it will be displayed.

4. Write an onerror callback for your HTTPClient that will perform these operations:

    * Log the HTTP status code to the console.

    * Display the contents of the error message in an `alert()` dialog.

5. Make sure to open and then send the request.

6. Build and test your app. The photo should be displayed on the first tab after it is downloaded.

### References and further reading

* [Finished code](http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/6.1_httpclient.zip)

* [HTTPClient API docs](#!/api/Titanium.Network.HTTPClient)

## Summary

In this chapter, you learned learned that Titanium implements the XHLHTTPRequest (XHR) via the `HTTPClient` module. You used that module to access and interact with remote servers over HTTP. You also examined the XHR lifecycle and how it is implemented within Titanium.
