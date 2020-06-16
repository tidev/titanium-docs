---
title: Appcelerator CLI Getting Started
weight: '10'
---

# Appcelerator CLI Getting Started

## Introduction

Appcelerator provides a command-line interface to check and configure your environment setup, create and build applications, and much more. This guide covers how to install the Appcelerator CLI and execute some common tasks.

Run **`appc --help`** to see all available target options or see the [Appcelerator Command-Line Interface Reference](/guide/Appcelerator_CLI/Appcelerator_CLI_How-tos/Appcelerator_Command-Line_Interface_Reference/).

## Installation

To setup the Appcelerator CLI, install Node.js, install the `appcelerator` module using the NPM CLI, then run the `appc setup` command to download and setup the latest CLI package.

### Install Node.js

The CLI requires Node.js 0.10.13 or later. The minimum Node version depends upon the appc CLI version you want to use. To obtain the exact Node version you need please refer to [Titanium Compatibility Matrix#Node.js](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/#node.js). If you don't have Node installed, install it from: [nodejs.org](http://nodejs.org/)

Before installing the CLI, you should decide where you want the Node Package Manager (`npm`) to install packages. By default `npm` installs into `/usr/local` on OS X, which requires that you run `npm` as root. This is not recommended. You can avoid having to run `npm` by doing one of the following:

* Make the `/usr/local` directory writable by all: `sudo chmod 777 /usr/local`

* Set `npm` to install to your home directory, or another directory of your choosing by setting the `npm` prefix. For example, you can add the following to your `.bash_profile` or other initialization file: `export NPM_CONFIG_PREFIX=$HOME`

In this case, `npm` packages are installed to `$HOME/lib/node_modules` and launch scripts are installed in `$HOME/bin`. `$HOME/bin` must be in your PATH.

For more information, see [Installing Node](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/).

### Install the CLI

1. Install the `appc` CLI. You many need to prepend the command with `sudo`.

    ```bash
    npm install appcelerator -g
    ```

2. Setup the AMPLIFY Appcelerator Services environment. This process will download the latest updates, setup the CLI and verify your development environment.

    ```bash
    appc setup
    ```

3. After getting the latest updates, you are prompted for your AMPLIFY Appcelerator Services credentials.

4. If you are a member or more than one organization, you will be prompted to select an organization.

5. Next, you must authorize your computer. Select either to send the authorization code to a phone number (using SMS/text messaging) or e-mail associated with your AMPLIFY Appcelerator Services account.

6. Enter the code you received.

7. Finally, the CLI will ask you about the projects you want to develop, and based on your answers, will check your environment to verify it is OK.

If you encounter an error installing `appc`, see [Troubleshooting npm Problems](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/Installing_Node/#issues-installing-npm-packages).

## Update the CLI

The CLI has two components: the NPM package and the Core package, which contains the other CLI components.

**To update the NPM package**, run the **`npm install appcelerator -g`** command. Note that you may need to prefix the command with `sudo` on OS X systems.

**To update the Core package**, run the **`appc setup`** command to download and install the latest package.

## Configure the CLI

### Proxy Setup

If you are using the Appcelerator CLI from behind a proxy, you need to configure your proxy server settings using the `appc config set` command to set the `proxyServer` variable to your proxy server settings.

```bash
appc config set proxyServer [http|https]://<username>:<password>@<domain>:<port_number>

## Example
appc config set proxyServer https://admin:password1234@foo.com:554
```

Note: We encourage you to use **`appc config set cafile`** as a security option over `appc config set strictSSL false`as the latter doesn’t do SSL key validation when making requests.

### Set the Core Package Version

To use a specific version of the core package (which contains specific versions of the Alloy, Arrow and Titanium CLIs), run the `appc use <version>` command. If you do not have the specified version installed, the CLI will download and install it for you.

To see a list of available versions, run the **`appc use`** command (without a version).

```bash
appc use
The following versions are available:
5.3.0
5.3.1
5.4.0
5.5.0
5.5.1
6.0.0
6.1.0
6.1.2
6.1.4
6.2.0
6.2.1
6.2.2
6.2.3
6.2.4
6.3.0
7.0.0
7.0.1
7.0.2
```

## Next steps

After setting up the CLI, please review [Appcelerator CLI Tasks](/guide/Appcelerator_CLI/Appcelerator_CLI_How-tos/Appcelerator_CLI_Tasks/) on building apps with the CLI.
