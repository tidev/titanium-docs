# Getting started

## Overview

This guide walks through the steps of installing and configuring Studio and third-party SDKs and tools required to develop native mobile applications with Studio. If you prefer to use your own editor or IDE, you can integrate the Titanium command-line tools into your environment (see Setting up the Titanium CLI for instructions).

## Prerequisites

Your system environment must meet the following requirements to run Studio:

* **Operating System:** A recent version of Windows or Mac OS X
* **Memory:** 8 GB RAM minimum system memory (2 GB RAM available memory). 16 GB RAM recommended.
* **Java Runtime:** Oracle JDK (no other brand of Java is suitable)
* **Node.js:** Required for the Titanium command-line tools like the CLI, Alloy and API Runtime Services

::: tip
For Windows, you can use either 32-bit or 64-bit versions of Java JDK. Please refer to Studio Java Support for more information.
:::

For more details, please refer to [Prerequisites](/guides/prerequisites.md) document.

For a complete list of compatibility of system environments, dependencies, and other requirements, please review the [Titanium Compatibility Matrix](/guide/prequisites.md#compatibility-matrix).

## Download and install Studio

To download Studio you must have an AMPLIFY Appcelerator Services account. Visit our [Sign Up](https://www.appcelerator.com/signup/) page to create an account.

1. Log in to <https://platform.axway.com/>.
2. Expand the Axway menu available at top-left of screen and click on [App Builder Studio](https://platform.axway.com/#/product/studio).
3. Download the installer or ZIP file for your operating system.
4. Launch the downloaded installer.

### First launch

The first time you launch Studio you need to select a workspace, or folder where Titanium stores your project files and IDE preferences

![Workspace selection](/images/workspace.png)

::: tip
By default, upon each launch, Studio asks you to select a workspace. To hide this dialog on subsequent launches, select the **Use this as the default and do not ask again option.**
:::

On the Studio launch screen, enter your AMPLIFY Appcelerator Services account credentials and click **Login**. Studio remembers your login credentials until you sign out of Studio.

::: tip
Studio requires an internet connection to authenticate the user to the Appcelerator cloud. If you are behind a proxy, click **Proxy Setup...** to configure your proxy settings.
:::