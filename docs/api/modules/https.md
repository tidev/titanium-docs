# Modules.Https

<TypeHeader/>

## Overview

<p class="note">Note: This feature requires a Pro or Enterprise subscription. More infos <a href="https://www.appcelerator.com/pricing/" target="_blank">here</a>!</p>

Use the HTTPS module to create a Security Manager for `Titanium.Network.HTTPClient`
that authenticates a set of HTTPS servers by pinning an HTTPS server's URL to its
public key contained in the certificate.

The X.509 certificate files can have any name and extension you
wish, but they must be in DER binary format.

The security manager will guarantee that all `HTTPClient` connections to this URL
are to a server that holds the private key corresponding to the public key embedded in the
certificate, therefore authenticating the server and preventing man-in-the-middle attacks.

### Concepts

Typically, HTTPS connections are authenticated using a chain of trust, where the identities of various
intermediate certificate authorities (CA) are checked until a trusted root CA can be authenticated.

For example, an intermediate CA signs the HTTPS server's certificate used to check the identity
of the HTTPS server you want to connect to.  However, the intermediate CA cannot be trusted
until its identity is verified. The certificate of the intermediate CA must be checked to see if the
CA is trusted. This process repeats until a root CA can be checked.
Once all identities have been validated, the application can establish
a secure connection to the HTTPS server.  This mechanism is known as a certificate chain.

This mechanism relies on trusting third parties to carefully check and validate other companies
that sign certificates.  If an untrustworthy CA issues a valid certificate to
an attacker or an attacker gets a hold of a CA's private key, the attacker can insert
themselves into the certificate chain, then intercept and send data to the client.
This is known as a man-in-the-middle attack.

To prevent man-in-the-middle-attacks, the security manager,
created by this module, ensures that the public key in the leaf certificate (or other certificate identified
by the `trustChainIndex` property) of the chain is the same as the public key in the certificate configured 
with this URL. If the public keys match, the chain is passed onto the underlying OS to authenticate. 
If they do not match, the connection is terminated.

Since we pass the chain to the underlying OS to validate, self-signed certificates will be rejected.
Note that the `validatesSecureCertificate` property of the `HTTPClient` is not honored for pinned URL's.

For the Security Manager to participate in the connection, the initial URL must be configured.

If a connection redirects to a different host, then public key validation on the redirected URL will
only be performed if that URL is also configured in the Security Manager. If the redirected URL is
not configured, then the default OS authentication is triggered.

### Getting Started

Once you have [installed](#!/guide/Using_a_Module) the module and added it as a depedency and
use `require()` (ES5) or `import` (ES6+) to access it from JavaScript:

``` javascript
// ES5
var https = require('appcelerator.https');

// ES6+
import 'https' from 'appcelerator.https';
```

The `https` variable is a reference to the module object.  Use this reference to call the 
`createX509CertificatePinningSecurityManager()` method to authenticate the specified HTTPS URLs.
Pass in an array of dictionaries as the only required parameter to the method. Each
dictionary in the array contains three keys (two of them required):

  * `url`: URL of the server to contact. Can be a fixed URL or wildcard URL (if supported by the certificate)
  * `serverCertificate`: X.509 certificate in DER format to verify the server's identity
  * `trustChainIndex`: (Optional) index of the trust-chain certificate to validate against (default: 0 - leaf certificate). 

For example:

``` javascript
var securityManager = https.createX509CertificatePinningSecurityManager([
    {
        url: 'https://www.example.com',
        serverCertificate: 'exampleServerCertificate.der',
        trustChainIndex: 0
    }
]);
```

After the security manager is created, create an `HTTPClient` object and set the
[securityManager](Titanium.Network.HTTPClient.securityManager) property to the security manager
object you just created.  You must set this property when creating the `HTTPClient` instance.

``` javascript
var httpClient = Ti.Network.createHTTPClient({
    onload: function(e) {
        Ti.API.info('Received text: ' + httpClient.responseText);
    },
    onerror: function(e) {
        Ti.API.error(e.error);
    },
    timeout: 5000,
    // You can only set this property when creating the HTTPClient
    securityManager: securityManager
});
```

After the `securityManager` property is set, call the `HTTPClient`'s `open()` and `send()`
methods to initiate the HTTPS request.

``` javascript
httpClient.open('GET', 'https://example.com');
httpClient.send();
```

If the authentication fails, a security exception is thrown. The HTTP client's `onerror`
callback will be passed an error object with the `code` key set to `-1` and the `message` key
set to the following message:

    `Certificate could not be verified with provided public key`

To perform another HTTPS request, you need to create another `HTTPClient` object and follow the
same procedure to initiate an HTTPS request.  You can reuse the same security manager object.

## Examples

### Simple Example

This example pins two URLs.
 
The first URL, https://dashboard.appcelerator.com, is pinned to the
public key in the X.509 certificate, named `appcelerator.com.pem`, located in the
application's `Resources` directory (Classic) or `app/assets/` directory (Alloy).

The second URL, https://www.wellsfargo.com, is pinned to the public
key in the X.509 certificate, named `wellsfargo.der`, located the application's
`Resources` directory (Classic) or `app/assets/` directory (Alloy).

``` javascript
// Require in the module
var https = require('appcelerator.https'),
    securityManager,
    httpClient;

// Use the module to create a Security Manager that authenticates the specified URLs
securityManager = https.createX509CertificatePinningSecurityManager([
    {
        url: 'https://dashboard.appcelerator.com',
        serverCertificate: 'dashboard.appcelerator.com.der'
    },
    {
        url: 'https://www.wellsfargo.com',
        serverCertificate: 'wellsfargo.der'
    }
]);

// Create an HTTP client the same way you always have
// but pass in the optional Security Manager that was created previously.
httpClient = Ti.Network.createHTTPClient({
    onload: function(e) {
        Ti.API.info('Received text: ' + httpClient.responseText);
    },
    onerror: function(e) {
        Ti.API.error(e.error);
    },
    timeout: 5000,
    // Set this property before calling the `open` method. 
    securityManager: securityManager
});

// Prepare the HTTPS connection in the same way you always have
// and the Security Manager will authenticate all servers for
// which it was configured before any communication happens.
httpClient.open('GET', 'https://dashboard.appcelerator.com');

// Send the request in the same way you always have.
// Throws a Security Exception if authentication fails.
httpClient.send();
```

<ApiDocs/>
