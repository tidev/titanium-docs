---
title: Appcelerator CLI Troubleshooting
weight: '10'
---

# Appcelerator CLI Troubleshooting

## Overview

When running into issues with the Appcelerator CLI, there are some simple steps to figure out additional information.

## Submitting a bug

Refer to [Reporting Bugs or Requesting Features](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Reporting_Bugs_or_Requesting_Features/) for more information. Check [JIRA](https://jira.appcelerator.org/projects/CLI/issues) first as the issue may already have been reported with a fix or workaround. When submitting a bug, it is often helpful to provide a stack trace and debug log. You can do so by running the CLI with an extra parameter of `DEBUG=*` before the regular command and a trace flag after the regular command. For example (replace `<command>` with the actual command):

**OS X/Linux**

```bash
DEBUG=* appc <command> -l trace
```

**Windows**

```bash
cmd /C "set DEBUG=* && appc <command> -l trace"
```

Another useful piece of information is which version of Node you are running and which **versions** of the Appc CLI you are using. Here are some useful commands to get the Appc CLI versions:

```bash
npm ls -g appcelerator # shows you the version of Appc CLI from NPM that is currently installed
$ npm ls -g appcelerator
/usr/local/lib
└── appcelerator@4.2.12

appc use # shows you the version of Appc CLI from Registry that is currently selected and installed
$ appc use
The following versions are available:

6.2.4    Not Installed
6.3.0    Not Installed
7.0.0    Installed
7.0.1    Installed
7.0.2    Installed (Active)
```

## Errors

### Please re-try this install again

This error manifests items in several different ways, such as:

* Invalid file download checksum. This could be a result of the file being modified in transit or it could be because the download was interrupted or had an error....Please re-try this install again.

* Server responded with unexpected error: SSL authorization failed. URL: [appc-registry-server-distribution.s3.amazonaws.com](http://appc-registry-server-distribution.s3.amazonaws.com/) does not have a valid fingerprint which can be used to verify the SSL certificate...Please re-try your install again. If you continue to have this problem, please contact Appcelerator Support at support@appcelerator.com.

This is often best solved by two options: reinstalling the appcelerator command line via NPM or logging out with -D:

**Reinstall**

```bash
[sudo] npm install -g appcelerator
appc use latest
```

**Log out -D**

```bash
appc logout -D
appc login # reauthenticate again with access code
```

### Application deployment failed

* Application deployment failed. Error was: Error: Error loading connector/appc.arrowdb. RequestSSLError: SSL authorization failed. URL: api.cloud.appcelerator.com does not have a valid fingerprint which can be used to verify the SSL [certificate.](http://certificate.at/)
