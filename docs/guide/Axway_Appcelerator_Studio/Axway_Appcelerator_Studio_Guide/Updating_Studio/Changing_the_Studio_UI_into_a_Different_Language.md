---
title: Changing the Studio UI into a Different Language
weight: '80'
---

# Changing the Studio UI into a Different Language

## Overview

This page discusses how to switch the Aptana Studio interface to a different language, such as Japanese or Chinese.

You can change the language of the user interface to a different language than what your operating system uses by default. Follow the instructions below to change the language of the UI. Note that while a reasonable percentage of the core UI may be translated, items like Titanium-specific features have not so that they will appear in English.

## Downloading Translations

1. Find the relevant update site for your version of Eclipse. For Studio standalone, use the "Indigo" version: [http://www.eclipse.org/babel/downloads.php](http://www.eclipse.org/babel/downloads.php).

2. Add the update site, as specified by [Installing a Plugin](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Updating_Studio/Installing_a_Plugin/).

3. Expand the node for the language you are interested in, and click the "eclipse" item.

4. Continue through the wizard. Make sure you change your language settings, as noted below.

## Setting Your Language

You can do either of the following to change the language of your user interface:

1. Change the language of your operating system, or

2. Change your application configuration options.

    1. Follow the instructions here: [Adding Command-Line Options](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Adding_Command-Line_Options/).

    2. Add the option (see below for language options):

        ```
        -nl
        Language-abbreviation
        ```

3. Save and close, and restart Studio.

## Language abbreviations

Studio recognizes the following language abbreviations, though most won't have translations available: [http://download.oracle.com/javase/1.5.0/docs/guide/intl/locale.doc.html#util-text](http://download.oracle.com/javase/1.5.0/docs/guide/intl/locale.doc.html#util-text)

## Translation Help

If you'd like to help with translation, join the [Eclipse Babel](http://babel.eclipse.org/babel/) project.
