---
title: Building Aptana Studio
weight: '20'
---

# Building Aptana Studio

::: warning ⚠️ Warning
Aptana Studio is licensed under the terms of the GNU Public License. See [http://www.aptana.com/legal/](http://www.aptana.com/legal/) for questions regarding using the Aptana Studio source in other open-source or commercial products. If you create and distribute a derivative work, you release it under the terms of the GPL. Appcelerator and Titanium Studio are released under a closed-source license, and the parts specific to Appcelerator and Titanium Studio are excepted out as part of the GPL exception. If you need to reuse code in other projects, please pay attention to the license and ensure it is compatible with what you are working on.
:::

## Getting the Sources

Aptana Studio exists in a single GitHub repo. Below are the links to the relevant pieces.

### Aptana Studio 3

**Studio 3:** [https://github.com/aptana/studio3](https://github.com/aptana/studio3)
The core plugins for Aptana Studio 3. HTML/JS/CSS editors, JavaScript debuggers, etc all live here.

**Studio 3 RCP:** [https://github.com/aptana/studio3-rcp](https://github.com/aptana/studio3-rcp)
Wrapper plugins for the Aptana Studio standalone version, as well as projects to create platform-specific builders and installers.

**Ruby/Rails:** [https://github.com/aptana/studio3-ruby](https://github.com/aptana/studio3-ruby)
Ruby and Rails support for Aptana Studio 3. Previously referred to as RadRails.

**PHP:** [https://github.com/aptana/studio3-php](https://github.com/aptana/studio3-php)
PHP support for Aptana Studio 3. Somewhat a fork of PDT (Eclipse PHP Development Tools)

**Python:** [https://github.com/aptana/Pydev](https://github.com/aptana/Pydev)
Python support for Aptana Studio 3.

**Libraries:** [https://github.com/aptana/libraries\_com](https://github.com/aptana/libraries_com)
Core library support

### Rubles

There are also several other related repositories with the name \*.ruble. These are the command bundles that are built into Aptana Studio at compile-time and packaged with the default installation.

## Building Aptana Studio

### Main Source Code

1. Download the Eclipse RCP development version: [http://www.eclipse.org/downloads/packages/eclipse-rcp-and-rap-developers/indigosr1](http://www.eclipse.org/downloads/packages/eclipse-rcp-and-rap-developers/indigosr1)

2. Check out each of the repos onto your local machine. You may either use the built-in Git support or check out using Git on the command line and "Import Existing Projects".

3. Once all projects are imported, you will need to close several depending on the version of Eclipse you have installed. If you are using Eclipse 3.7 (recommended), close the following:

    * com.aptana.portal.ui.eclipse35

### Python Errors

1. There will be lots of build errors. Find org.python.pydev.core/tests/org.python.pydev.core/TestDependent.OS.template. You should create a copy of that file in that same dir named TestDependent.java and set the needed things according to your installation. If that still fails to resolve the errors, you can close the com.python and org.python project for now.

### FTP Errors

If you do not wish to close the FTP projects, you can get a trial license for FTP:

1. Download from here: [http://enterprisedt.com/products/edtftpjssl/trial\_licence.html](http://enterprisedt.com/products/edtftpjssl/trial_licence.html)

2. Unzip the package and drop /lib/\*.jar into com.aptana.ide.libraries.subscription.

### Launching

1. Inside Studio RCP, there is an aptana.product file.

2. Click on the link that says "Launch an Eclipse Application".

## Building Installers

Aptana Studio uses NSIS to build the Windows installer. Below are instructions to build that installer manually.

1. View com.aptana.win.installer inside Eclipse.

2. Create a "staging" folder at the root of that project.

3. Copy the Windows .zip version /staging. You could get a .zip file either by building the studio3-rcp project or by downloading a version from preview.appcelerator.com. You may have to rename it to fix what it expects (you'll be informed of this the first time you attempt to build)

4. Right-click on the build.xml file and "Run As > Ant Build...". You want to run the task "unpack-archives" at least once. After that, you can just run "main" over and over again.
