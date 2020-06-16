---
title: SSL Certificate Store Support for HTTP Clients
weight: '80'
---

# SSL Certificate Store Support for HTTP Clients

::: danger ❗️ Warning
**Since Release 3.3.0** , the mechanisms described in this document to support SSL Certificate Stores for HTTP Clients are no longer supported. You should instead use the HTTPClient's [securityManager](#!/api/Titanium.Network.HTTPClient-property-securityManager) property to implement support for SSL Certificate Stores.

* The Android-specific `Titanium.Network.HTTPClient` `addKeyManager` and `addTrustManager` methods are deprecated and removed in Release 3.4.0.

* The iOS-specific `Titanium.Network.HTTPClient` `clientCertificateIdentity` and `clientCertificates` properties are no longer supported.
:::

## Introduction

Starting with Release 3.1.0, the Android and iOS platforms have added functionality to support SSL Certificate Stores with the [Titanium.Network.HTTPClient](#!/api/Titanium.Network.HTTPClient). This document provides information on the changes made to the platforms and the related functionality.

Please note that neither platform includes functionality to actually parse certificates. This functionality can be implemented by developers in native modules to extend the HTTPClient.

## iOS Platform Notes

The HTTPClient on iOS exposes two properties:

* `clientCertificateIdentity` - sets a `SecIdentityRef`, which is a C structure containing a private key and certificate

* `clientCertificates` - sets an array whose elements are of type `SecCertificateRef`

These are concrete C structures of the native iOS SDK and cannot be exposed on the JavaScript side. Modules must set these properties on the HTTPClient object in native code. These properties must be set before calling [open](#!/api/Titanium.Network.HTTPClient-method-open) on the HTTPClient.

The `clientCertificateIdentity` property must be set for the `clientCertificates` to be honored.

These two properties can be used to set client-side certificates for secure HTTP connections. These are useful for environments where the server requires the client to present valid certificates as part of the SSL handshake.

Validation of server certificates is controlled by the [validatesSecureCertificate](#!/api/Titanium.Network.HTTPClient-property-validatesSecureCertificate) property of the HTTPClient and must be set to true validate the secure certificate.

For more information about using the native iOS SDK APIs for authentication processes, see [Mac Developer Guide: Certificate, Key, and Trust Services Tasks for iOS](https://developer.apple.com/library/mac/#documentation/security/conceptual/CertKeyTrustProgGuide/iPhone_Tasks/iPhone_Tasks.html#//apple_ref/doc/uid/TP40001358-CH208-SW13) and [iOS Developer Library: HTTPS Server Trust Evaluation](https://developer.apple.com/library/ios/technotes/tn2232/_index.html).

### iOS Example

The following example code shows how to load an external PKCS #12 file and use it with an HTTP client. This example contains two separate pieces: the Titanium application written in JavaScript and the iOS module written in Objective-C and using some of the native iOS SDK APIs. The Titanium application needs to use the iOS module to perform necessary functions as mentioned earlier.

In the Titanium application:

1. Require in the module.

2. Create an `HTTPClient` with the `validatesSecureCertificate` property set to true.

3. Call the module method to parse the PKCS #12 file and set the `clientCertificateIdentity` property.

4. Call the `open` and `send` methods to initiate the HTTP request.

```javascript
// Require the module
var certificateStore = require('com.certtest');
var url = "https://some.url";
var httpClient = Ti.Network.createHTTPClient({
  onload: function(e) {
    Ti.API.info("Received text: " + this.responseText);
    alert('success');
  },
  onerror: function(e) {
    Ti.API.info("Error: " + e.error);
    alert('error');
  },
  timeout: 5000,

    // this property must be set to true
  validatesSecureCertificate: true
});

// References a file called server.p12 in the Resources directory
var cert = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "server.p12");

// Call the module method and send the HTTPClient object
// to set the clientCertificateIdentity property
certificateStore.loadP12Cert(httpClient, cert, 'password');

httpClient.open("GET", url);
httpClient.send();
```

In an iOS module, the `loadP12Cert` method receives the HTTPClient object, the PKCS #12 file and the password to the file, then it:

1. Loads the external PKCS #12 file.

2. Parses it with the native `SecPKCS12Import` method.

3. Sets the `clientCertificateIdentity` of the HTTPClient object.

```objectivec
// Omitted boiler plate code created for a new module
// Note that this example does not perform type or error checking
-(id)loadP12Cert:(id)args
{
    // Parse the arguments
    NSArray* theArg = args;
    // Titanium.Network.HTTPClient object
    TiProxy* theClient = [theArg objectAtIndex:0];
    // Titanium.Filesystem.File object (p12 file)
    TiFile *theFile = [theArg objectAtIndex:1];
    // Password of the file
    NSString* thePassword = [theArg objectAtIndex:2];
    NSString* path = [theFile path];

    // Load the file data
    NSData *PKCS12Data = [[NSData alloc] initWithContentsOfFile:path];
    CFDataRef inPKCS12Data = (CFDataRef)PKCS12Data;
    SecIdentityRef myIdentity;
    SecTrustRef myTrust;
    OSStatus securityError = noErr;

    // Parse the file data
    securityError = extractIdentityAndTrust(inPKCS12Data, &myIdentity, &myTrust, thePass);

    if (securityError == 0) {
        // Set the clientCertificateIdentity property
        [theClient setValue:(id)myIdentity forUndefinedKey:@"clientCertificateIdentity"];
    }
    [PKCS12Data release];
    return securityError;
}

// Example code taken from the Mac Developer Guide: Certificate, Key, and Trust Services Tasks
OSStatus extractIdentityAndTrust(CFDataRef inPKCS12Data, SecIdentityRef *outIdentity, SecTrustRef *outTrust, NSString* thePass)
{
    OSStatus securityError = errSecSuccess;
    CFStringRef password = (CFStringRef)thePass;
    const void *keys[] =   { kSecImportExportPassphrase };
    const void *values[] = { password };
    CFDictionaryRef optionsDictionary = CFDictionaryCreate(NULL, keys, values, 1, NULL, NULL);

    CFArrayRef items = CFArrayCreate(NULL, 0, 0, NULL);

    securityError = SecPKCS12Import(inPKCS12Data, optionsDictionary, &items);

    if (securityError == 0) {
        CFDictionaryRef myIdentityAndTrust = CFArrayGetValueAtIndex (items, 0);
        const void *tempIdentity = NULL;
        tempIdentity = CFDictionaryGetValue (myIdentityAndTrust, kSecImportItemIdentity);
        *outIdentity = (SecIdentityRef)tempIdentity;
        const void *tempTrust = NULL;
        tempTrust = CFDictionaryGetValue (myIdentityAndTrust, kSecImportItemTrust);
        *outTrust = (SecTrustRef)tempTrust;
    }
    if (optionsDictionary)
        CFRelease(optionsDictionary);

    return securityError;
}
```

## Android Platform Notes

The HTTPClient on Android has exposed two new methods:

* `addKeyManager(X509KeyManager)`

* `addTrustManager(X509TrustManager)`

Users can add custom KeyManager and TrustManager implementations to use with the HTTPClient connection. These methods must be called before calling [open](#!/api/Titanium.Network.HTTPClient-method-open) on the HTTPClient.

You need to use an Android module to implement the [X509KeyManager](http://developer.android.com/reference/javax/net/ssl/X509KeyManager.html) or [X509TrustManager](http://developer.android.com/reference/javax/net/ssl/X509TrustManager.html) interface and return these objects to the Titanium application. The application uses the `addKeyManager` and `addTrustManager` methods to add support for these objects.

When either of these methods are used to initialize a custom SSLContext, the [validatesSecureCertificate](#!/api/Titanium.Network.HTTPClient-property-validatesSecureCertificate) property of the HTTPClient is ignored. For more information about custom SSL, see [Custom SSL for advanced JSSE developers](https://www.ibm.com/developerworks/java/library/j-customssl/).

### Android Example

For an example of writing an Android module that implements and returns an X509TrustManager interface, see [https://github.com/appcelerator-modules/ti.certificatestore](https://github.com/appcelerator-modules/ti.certificatestore). This module receives an external PKCS #12 file, parses it, then creates an X509TrustManager instance.

To use the module, in the Titanium application:

1. Require in the module.

2. Create an `HTTPClient`.

3. Make a call to the module by providing it a PKCS#12 file, which is used to create the X509TrustManager.

4. Retrieve the X509TrustManager interface from the module and add it to the HTTP client with the `addTrustManager` method.

5. Call the `open` and `send` methods to initiate the HTTP request.

```javascript
var certificateStore = require('ti.certificatestore');
var url = "https://some.url";
var httpClient = Ti.Network.createHTTPClient({
    onload: function(e) {
        Ti.API.info("Received text: " + this.responseText);
        alert('success');
    },
    onerror: function(e) {
        Ti.API.info("Error: " + e.error);
        alert('error');
    },
    timeout: 5000,
    // this property must be set to true
    // unless you are using a custom SSLContext
  validatesSecureCertificate: true
});

// Add the certificate to the certificate store
certificateStore.addCertificate('server.p12', 'password');

// Add the trust manager to the HTTP client
httpClient.addTrustManager(certificateStore.getTrustManager());

httpClient.open("GET", url);
httpClient.send();
```
