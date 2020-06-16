---
title: Working with XML Data
weight: '40'
---

# Working with XML Data

## Objective

In this chapter, you will learn how to retrieve XML data from a remote data source via the HTTPClient object. You'll also see how to "walk" an XML document to parse its data.

## Contents

As was stated in the [previous chapter](/guide/Titanium_SDK/Titanium_SDK_How-tos/Working_with_Remote_Data_Sources/Working_with_JSON_Data/), JSON is the preferred format for data transport in a Titanium application because it is easy to consume inside your JavaScript application and it is a very compact format. However, many existing applications maintain an XML-based interface that you must work with in your client application. Titanium provides facilities for consuming XML by providing an [XML DOM Level 2 implementation](http://www.w3.org/TR/DOM-Level-2-Core/), and automatically serializing XML responses into one of our [XML Document objects](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.XML.Document-object.html). All XML-related functionality in Titanium is contained in the `Titanium.XML` namespace.

Inside your handler function, if your response has an XML `Content-Type` header, Titanium will automatically serialize the response text into XML for your use:

```javascript
xhr.onload = function(e) {
  var doc = this.responseXML.documentElement;
  //this is the XML document object

  //Use the DOM API to parse the document
  var elements = doc.getElementsByTagName("someTag");
};
```

### Parsing XML

A full treatment of the XML DOM and related methods is beyond the scope of this tutorial. We will take a brief look at the topic nonetheless.

The XML DOM presents a document as a hierarchy of nodes. Some types of nodes may have child nodes, while others are leaf nodes that don't have children. For XML and HTML documents, these are some of the supported node types:

* Document – represents the entire XML document and contains a maximum of one Element node

* Element – contains the remainder of the nodes in your document, this is generally the node you work with as the top-level of the hierarchy

* Attr – represents a node's attributes and contains Text nodes

* Text – a leaf node type with no children

* CDATASection – no children

* Entity – contains nodes of various types

You'll often use these methods when parsing an XML document:

* The `getElementsByTagName()` method, which returns an array of nodes with the given name

* The `item()` method which you use to select a specific node in an array

* The `getAttribute()` method which you use to retrieve the value of an attribute with the given name

* The `text` and `nodeValue` properties, which retrieve the leaf node values associated with the node

Consider this code snippet, which parses RSS (XML) data retrieved from a blog:

```javascript
xhr.onload = function() {
  // Data is returned from the blog, start parsing
  var xml = this.responseXML;
  // the blog's title is in a node named "channel"
  var channel = xml.documentElement.getElementsByTagName("channel");

  // begin looping through blog posts
  var data = [];
  // blog posts are in nodes named "item"
  var items = xml.documentElement.getElementsByTagName("item");
  for (var i = 0; i < items.length; i++) {
    data.push({
      postTitle: items.item(i).getElementsByTagName("title").item(0).textContent,
      postLink: items.item(i).getElementsByTagName("link").item(0).textContent
    });
  }
  // fire an app-level event to notify the UI that the blog data is available
  Ti.App.fireEvent('net:rssDataReturned', {
    blogTitle: channel.item(0).getElementsByTagName("title").item(0).textContent,
    blogPosts: data
  });
};
```

A key point to note for working with XML: you'll need to know the node hierarchy for your document in order to properly parse it. In other words, you'll need to know its DTD (document type definition). Some DTDs are standardized, such as the RSS ATOM feed XML format. Others are proprietary, defined by the companies that create them. A useful tool for viewing the XML structure of data retrieved from a web API is [http://apigee.com/](http://apigee.com/).

### Hands-on Practice

#### Goal

In this activity, you will write the beginnings of an RSS reader. It will download an RSS feed, parse the titles of the posts in the feed, and display them in a table.

#### Steps

1. Create a new Titanium Mobile project.

2. Replace the contents of app.js with code that defines a single window with a white background. To that window, add a TableView.

3. Declare an array to hold the data for your table.

4. Create an HTTPClient object that retrieves the RSS feed from [http://apod.nasa.gov/apod.rss](http://apod.nasa.gov/apod.rss) (the Astronomy Picture of the Day RSS feed).

5. With your browser, visit [http://apod.nasa.gov/apod.rss](http://apod.nasa.gov/apod.rss) to gain an understanding of the XML node hierarchy of the feed.

6. Declare an array named `items` that stores all the nodes with a tag name of `item`.

7. In the `onload` callback, loop through the `items` array. In each iteration of the loop, create an anonymous object with a single property named `title` whose value equals the text leaf of the `title` node. Push that anonymous object into your data array.

8. Assign your data array to the table's `data` property to populate your table's rows.

9. Build and test your app in the simulator/emulator. It should display the titles for each of the last seven pictures of the day.

As a challenge, improve the app by letting the user tap a row to view that day's picture.

### References and Further Reading

* [Finished code](http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/6.3_xml.zip)

## Summary

In this chapter, you learned how to retrieve XML data from a remote data source via the HTTPClient object. You also saw how to parse an XML document.
