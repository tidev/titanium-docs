---
title: Appcelerator CLI 4.0.0 - 21 May 2015
weight: '70'
---

# Appcelerator CLI 4.0.0 - 21 May 2015

Initial release. This release of the Appcelerator CLI includes version 4.0.0 of the NPM package and version 4.0.0 of the Core package.

## Component Versions

The following components are shipped with CLI 4.0.0:

| Name | Version |
| --- | --- |
| Alloy | 1.6.0 |
| Arrow Builder | 0.4.0 |
| Arrow Cloud CLI | 1.0.24 |
| Titanium CLI | 4.0.0 |

## Known Issues

### ETIMEDOUT is returned when you publish an Arrow app

Occasionally, when publishing an Arrow application, the CLI may return an ETIMEOUT error ([CLI-654](https://jira.appcelerator.org/browse/CLI-654)).

To workaround this issue, try republishing the application again.

### Fail to Encrypt JavaScript Files on Windows

When building an application on Windows, the build fails at the encryption stage ([CLI-658](https://jira.appcelerator.org/browse/CLI-658)).

To workaround this issue, install the 32-bit version of Java.
