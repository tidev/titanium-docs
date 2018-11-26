---
breadcrumbLabel: Network
sidebar: auto
---

# Titanium.Network

<ProxySummary/>

## Overview

The `Network` module is used to access networking related functionality.

For TCP sockets, see [Titanium.Network.Socket.TCP](Titanium.Network.Socket.TCP).

The legacy [Titanium.Network.TCPSocket](Titanium.Network.TCPSocket) object is still required
by the [BonjourBrowser](Titanium.Network.BonjourBrowser) and
[BonjourService](Titanium.Network.BonjourService) objects.

For all other socket needs, use [Titanium.Network.Socket.TCP](Titanium.Network.Socket.TCP).

### App Transport Security

Starting with iOS 9, Apple introduced new security and compatibility guidelines for networking
and connectivity, which include:

  * All connections must support TLS 1.2 or greater, and use forward secrecy ciphers supported by iOS
  * Certificates must use at least a SHA-256 fingerprint with either a 2048-bit or greater RSA key,
    or a 256-bit or greater ECC key
  * Application must be compatible with IPv6 DNS64/NAT64 networks as part of App Store submissions

Because of the new requirements, Titanium disables the App Transport Security (ATS)
requirements, which only includes the TLS and certificate cipher requirements,
to allow all connections by default.

If you wish to re-enable ATS, add the `NSAppTransportSecurity` dict to the `ios plist` section
of the `tiapp.xml` file, then add the `NSAllowArbitraryLoads` key and set it to `false`, indicating
that you want to manage your whitelisted URL's yourself.

    <ti:app>
      ...
      <ios>
        <plist>
          <dict>
            <key>NSAppTransportSecurity</key>
            <dict>
              <key>NSAllowsArbitraryLoads</key>
              <false/>
            </dict>
          </dict>
        </plist>
      </ios>
      ...
    </ti:app>

Note that Titanium will inject code into the plist file to whitelist `appcelerator.com` subdomains,
which is needed to communicate with the Appcelerator Anayltics server. To disable the whitelist,
set the `ios.whitelist.appcelerator.com` tiapp application property to false.

    <ti:app>
        <property name="ios.whitelist.appcelerator.com" type="bool">false</property>
    </ti:app>

Listed below are other guidelines from Apple.

**Avoid hard-coded IPv4 address literals**

Try not to include hard-coded IPv4 address literals in your application, for example, 127.0.0.1.

**Whitelist URLs**

If ATS is enabled and the web service you are trying to contact does not support the new security guidelines,
iOS will not allow you to connect to the service. An error will be returned in the network response
stating the connection failed because it did not meet the ATS policy standards.

To allow the connection, you will need to add
a `NSAppTransportSecurity` dict to the `ios plist` section of the `tiapp.xml` file.
In the `NSAppTransportSecurity` dict, you add the `NSExceptionDomains` dict to whitelist
specific domains.

For more information, see
[iOS Developer Library: App Transport Security](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33).

Example:

    <ti:app>
      ...
      <ios>
        <plist>
          <dict>
            <key>NSAppTransportSecurity</key>
            <dict>
              <!-- 1) Default: Disable ATS completely -->
              <key>NSAllowsArbitraryLoads</key>
              <true/>

              <-- 2) Alternative: Define whitelisted domains -->
              <key>NSExceptionDomains</key>
              <dict>
                <!-- Loosen security measure for www.foo.com domain -->
                <key>www.foo.com</key>
                <dict>
                  <!-- Set TLS v1.0 as the minimum TLS version -->
                  <key>NSExceptionMinimumTLSVersion</key>
                  <string>TLSv1.0</string>
                  <!-- Can use other ciphers besides forward secrecy ciphers -->
                  <key>NSExceptionRequiresForwardSecrecy</key>
                  <false/>
                  <!-- Allow HTTP connections -->
                  <key>NSExceptionAllowsInsecureHTTPLoads</key>
                  <true/>
                </dict>
              </dict>
            </dict>
          </dict>
        </plist>
      </ios>
      ...
    </ti:app>


**Test IPV6 DNS64/NAT64**

If you submit your application to the iTunes Store, you should setup an IPv6 DNS64/NAT64
network to test your application to verify it is compatible with IPv6.

If you are running macOS 10.11 or greater, you can use your computer to setup a local IPv6 Wi-Fi
network, which requires an Internet connection not through Wi-Fi.

To create the network, from System Preferences, enable Internet sharing with NAT64 network
enabled to share your Wi-Fi connection.

For detailed instructions, see
[Mac Developer Library: Test for IPv6 DNS64/NAT64 Compatibility](https://developer.apple.com/library/content/documentation/NetworkingInternetWeb/Conceptual/NetworkingOverview/UnderstandingandPreparingfortheIPv6Transition/UnderstandingandPreparingfortheIPv6Transition.html#//apple_ref/doc/uid/TP40010220-CH213-SW16).

<ApiDocs/>
