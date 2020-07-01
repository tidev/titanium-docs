---
title: Studio Components
weight: '40'
---

# Studio Components

This document lists the various components (and the related scopes) inside Studio.

## General Guidelines

There are a few guidelines to observe when creating a new scope or using them in practice.

::: warning ⚠️ Warning
.\* for components indicate that there is a per-editor/language component associated, i.e. editor.js, scripting.rubles.js.
:::

* If it has a view in studio, it is a root-level scope (i.e. validation, terminal)

* Multi-word components have words separated by hyphens (i.e. content-assist)

* Per-language components are created on a as-needed basis in JIRA. Thus, there may not yet be a editor.navigation.js in JIRA. Thus, you can assign items to editor.navigation. When we get enough sub-issues, we can then break it apart.

## Editors

| Scope | Description |
| --- | --- |
| [call-hierarchy.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22call-hierarchy%22) | Call Hierarchy |
| [colorization.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22colorization%22) | Syntax colorization |
| [editor](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22editor%22) | Cross-language editor functionality (infrastructure) |
| [editor.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22editor%22) | auto-indentation, pair matching, double/triple clicks, pair highlighting, branding/icons, templates, browsing perspective |
| [editor.content-assist](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22content-assist%22) | Cross-language editor content assist functionality (infrastructure) |
| [editor.content-assist.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22content-assist%22) | Core/Global, User-defined, Libraries/references, Hippie Completion |
| [editor.documentation.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22documentation%22) | Language-specific version of JavaDocs |
| [editor.folding.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22folding%22) | language folding |
| [editor.hover.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22hover%22) | Item Documentation, Value Visualizers (i.e. color preview of RGB CSS value), Debugging hovers, Source of referenced item |
| [editor.navigation.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22navigation%22) | Go To Declaration, Find References, Open Type, Editor hyperlink |
| [editor.occurences.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22editor%22) | text-based, semantic mark occurences |
| [formatting.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22formatting%22) | language formatting |
| [outline.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22outline%22) | Outline, Quick Outline |
| [problems.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22problems%22) | Problem description from validation |
| [problems.parsing.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22problems%22) | Parse Errors |
| [problems.spelling.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22problems%22) | Spell Checking |
| [problems.style.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22problems%22) | Style/Usage Validation |
| [problems.quick-fixes.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22problems%22) | Quick Fixes |
| [tasks.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22tasks%22) | Task Markers (TODO, FIXME, XXX) |
| [type-hierarchy.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22type-hierarchy%22) | Type Hierarchy |

## Previewing/Servers

| Scope | Description |
| --- | --- |
| [preview](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22preview%22) | [Previewing](#undefined) core infrastructure |
| [preview.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22preview%22) | Language/editor-specific previewing issues |

## Scripting

| Scope | Description |
| --- | --- |
| [scripting](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22scripting%22) | The core java and jruby support that implements the ruble framework |
| [scripting.rubles](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22scripting%22) | Scripting extensions to Studio |
| [scripting.rubles.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22scripting%22) | Ruble snippets and commands for particular languages |

## Miscellaneous

| Scope | Description |
| --- | --- |
| [app-explorer](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22app-explorer%22) | The App Explorer view |
| [build](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22build%22) | Anything having to do with hudson or configuring the build server |
| [debugging](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22debugging%22) | The core debugger functionality |
| [debugging.js](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22debugging%22) | Support for debugging JavaScript on various devices |
| [debugging.php](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22debugging%22) | Support for debugging PHP applications |
| [debugging.ruby](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22debugging%22) | Support for debugging Ruby applications |
| [deployment](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22deployment%22) | The deployment and packaging system. Synchronization, upload, etc. |
| [deployment.ftp](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22deployment%22) | FTP support |
| [deployment.ftps](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22deployment%22) | FTPS support |
| [deployment.sftp](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22deployment%22) | SFTP support |
| [file.wizard](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22file%22) | The infrastructure for creating new files |
| [file.wizard.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22file%22) | Language/editor file creation wizards |
| [installer](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22installer%22) | Anything having to do with the installation process |
| [project-explorer](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22project-explorer%22) | The project explorer view |
| [project.wizard](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22project%22) | The infrastructure for creating new projects |
| [project.wizard.\*](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22project%22) | Language/editor project creation wizards |
| [source-control.git](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22source-control.git%22) | Git support |
| [source-control.svn](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22source-control.svn%22) | SVN support |
| [terminal](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22terminal%22) | The terminal window |
| [theme](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22theme%22) | Theming support inside Studio |
| [update](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22update%22) | Anything having to do with updating Titanium Studio |

## Titanium

| Scope | Description |
| --- | --- |
| [analytics](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22analytics%22) | Cloud analytics |
| [debugging.android](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22debugging%22) | Debugging on Android |
| [debugging.ios](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22debugging%22) | Debugging on iOS |
| [platform.android](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22android%22) | Android platform support |
| [platform.ios](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22ios%22) | iOS platform support |
| [platform.mobileweb](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22mobileweb%22) | html5 output platform support |
| [sdk](http://jira.appcelerator.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=component%3D%22sdk%22) | Updating and installation of the Titanium SDKs inside Titanium Studio |
