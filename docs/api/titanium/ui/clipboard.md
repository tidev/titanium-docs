---
breadcrumbLabel: Clipboard
sidebar: auto
---

# Titanium.UI.Clipboard

<ProxySummary/>

## Overview

The Clipboard is a temporary data store, used to save a single item of data that may then
be accessed by the user using UI copy and paste interactions within an app or between apps.

On iOS, the module's `*Data()` methods enable multiple representations of the
same data item to be stored together with their respective
[MIME type](http://en.wikipedia.org/wiki/Internet_media_type) to describe their format. For
example, `'text'` and `'text/plain'` for text, and `'image/jpg'` and `'image/png'` for an image.

When working with text, either the `*Data()` methods may be used with a `'text/plain'` type, or
the `*Text()` methods without the need to specify the type.

Android currently only supports text type of data to be stored.

### Clipboard Data Types

The `*Text()` methods are equivalent to calling `*Data()` with a `'text'` or `'text/plain'`
type. These work with plain Unicode strings.

An image is stored using the `'image'` type, or an explicit image MIME type, and is returned as
a <Titanium.Blob> (binary) type.

A URL is stored with the `'url'` or `'text/uri-list'` type, and is returned as a string.

Any data type that is specified but not correctly mapped to a clipboard type by the system is
retrieved as a <Titanium.Blob> type.

<ApiDocs/>
