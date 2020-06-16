---
title: Working with JSON Data
weight: '30'
---

# Working with JSON Data

## Objective

In this chapter, you will learn how to send and receive JSON data from a remote data source via the HTTPClient object.

## Contents

The best data transport format for use with JavaScript (and hence Titanium) is JavaScript Object Notation, or [JSON](http://json.org). JSON is a great fit for JavaScript applications since it can very easily be serialized into and out of JavaScript Objects. Moreover, since JSON is such a terse transport format, it takes less less time and less bandwidth to transfer over the air, which can become important on low-speed data networks. For more on JSON, [check out the official website](http://json.org).

### Built-in JSON functions

Titanium has built-in support for JSON serialization in the `JSON` namespace. The two functions provided in this namespace are:

* `JSON.stringify()` which takes a JavaScript object and converts it to a string.

* `JSON.parse()` which takes a JSON-formatted string and converts it to a JavaScript object

(Remember that in JavaScript, arrays are objects. So these methods work with both arrays and objects.)

```javascript
var myObject = {
  foo: 'bar',
  stuff: [1,2,3]
};

//serialize
var myObjectString = JSON.stringify(myObject);
// returns '{"foo": "bar","stuff": [1,2,3]}'

//deserialize...
var myNewObject = JSON.parse(myObjectString);
// myNewObject.stuff[1] === 2
```

If you have a server-side resource (web service) that has a JSON response format, you can very easily serialize that response inside HTTPClient's `onload` function. The data returned from your web service will be stored as a property of the HTTPClient [object](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient-object.html), so it is accessed and parsed like so:

```javascript
xhr.onload = function(e) {
  var myData = JSON.parse(this.responseText);
};
```

### Methods cannot be stringified

JSON cannot represent methods. So, the `stringify()` method will not support converting an object with methods to a JSON string. If you attempt to stringify an object that has methods, the function will return an empty string. Keep in mind that most native Titanium objects have methods. Attempting to stringify any of them will return an empty representation.

### Receiving and parsing JSON data

You retrieve JSON data using the HTTPClient object. Within the `onload` callback, `this.responseText` contains the raw text response from the target URL. It is the property you should use when processing JSON or other plain text data.

```javascript
var url = "http://example.com/json.txt";
var json;

var xhr = Ti.Network.createHTTPClient({
    onload: function() {
    // parse the retrieved data, turning it into a JavaScript object
      json = JSON.parse(this.responseText);
    // ...
  }
});
```

### Sending JSON data

The HTTPClient's `send()` method automatically stringifies data for you. So, you don't need to explicitly take this action before submitting data in a POST payload. Then again, since `send()` accepts null, dictionary, string, File object or Blob data, there's no harm in calling `JSON.stringify()` on the data first. Should you need to send object data in a GET querystring, you will need to stringify data first. You'll probably need to URL encode the resulting string to safely pass it as a querystring parameter. Use the JavaScript `encodeURIComponent()` function to do that.

```javascript
var blogPost = {
  title: 'My awesome blog',
  body: 'Today I met Susy at the laundromat. Best day EVAR\!'
};

var xhr = Ti.Network.createHTTPClient({
  onload: function() {
    // handle the response
  }
});

xhr.open('POST','http://www.myblog.com/post.php');
// optional:
// blogPost = JSON.stringify(blogPost);
xhr.send(blogPost);
```

### References and Further Reading

* [Ti.Network.HTTPClient object](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Network.HTTPClient-object)

## Summary

In this chapter, you learned how to send and receive JSON data from a remote data source via the HTTPClient object.
