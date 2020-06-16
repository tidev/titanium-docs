---
title: Problems with WST and PDT
weight: '110'
---

# Problems with WST and PDT

## Problem Description

In some cases, when installing WST/PDT side-by-side with the Studio, scripts cannot be opened correctly with the WST/PDT editors that were assigned to work on the same file extensions that the Studio is assigned to.
A reported error of _"Unsupported content type in editor"_ is opened, and the edited content is displayed as simple text.

## Problem Source

This problem is originated in a known WST issue that can be viewed at [https://bugs.eclipse.org/bugs/show\_bug.cgi?id=268635](https://bugs.eclipse.org/bugs/show_bug.cgi?id=268635). The issue's affect on the Studio is explained in details at [https://jira.appcelerator.org/browse/APSTUD-3185](https://jira.appcelerator.org/browse/APSTUD-3185).

## Suggested Workaround

To be able to open those files with the WST/PDT editors, you will need to remove the _Aptana Natures_ from your project.

1. Right click the project and select _Properties_

2. Select the _Project Natures_ item

3. Uncheck the _Aptana Natures_ (PHP & Web)

This workaround will allow you opening the files. However, the _Nature_ change will have an effect on the features that Studio can provide while working with that specific project (Code Assist, Debugging, etc.).
