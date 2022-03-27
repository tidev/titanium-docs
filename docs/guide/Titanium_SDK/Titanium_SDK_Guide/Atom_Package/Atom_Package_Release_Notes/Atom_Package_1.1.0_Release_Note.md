---
title: Atom Package 1.1.0 - 22 February 2018
weight: '10'
---

# Atom Package 1.1.0 - 22 February 2018

Atom Package 1.1.0 is a minor release that includes new features, improvements, and bug fixes.

## New features

* ATOM-11 - Snippets

    * Code snippets for common Alloy and Titanium APIs are provided for use in Alloy controllers and modules. A description of the snippet and link to documentation are provided where appropriate. Type the prefix and the autocomplete overlay will be displayed with matching snippets.

        | Prefix | Description |
        | --- | --- |
        | `tidebug` | Debug log message |
        | `tierror` | Error log message |
        | `tiinfo` | Info log message |
        | `tiwarn` | Warn log message |
        | `titrace` | Trace log message |
        | `tiaddevent` | Add event listener |
        | `tiremevent` | Remove event listener |
        | `tifireevent` | Fire event |
        | `tialer` | Show alert dialog |
        | `tiopt` | Show option dialog |
        | `tianim` | View animation |
        | `tifile` | Open file |
        | `tisound` | Play sound |
        | `tiaudio` | Play local or remote audio |
        | `tivideo` | Play local or remote video |
        | `ticamera` | Open camera |
        | `alglo` | Alloy Globals object |
        | `alcfg` | Allog CFG object |
        | `alcon` | Alloy create controller function |
        | `alcol` | Alloy create collection function |
        | `almod` | Alloy create model function |
        | `alwid` | Alloy create widget function |
        | `ifios` | iOS conditional statement |
        | `idand` | Android conditional statement |
        | `Irwin` | Windows conditional statement |

* ATOM-37 - Create Titanium projects within Atom

    * Added a menu item to create new Titanium projects (Packages > Appcelerator Titanium > New Titanium Project...)

* ATOM-38 - Add support for building modules from Atom

    * Native module projects are now supported

* ATOM-39 - Add keyboard shortcuts for opening related Alloy files

    | Keymap | Operation |
    | --- | --- |
    | `ctrl + alt + v` | Open related View |
    | `ctrl + alt + s` | Open related Style |
    | `ctrl + alt + c` | Open related Controller |
    | `ctrl + alt + a` | Open or close related files |

## Improvements

* ATOM-50 - Call \`appc\` command with full path

    * Added ability to specify full path to appc command in package settings. This may be required if Atom is unable to find the appc command automatically.

## Fixed issues

* ATOM-40 - Toolbar remains when closing project

* ATOM-43 - Image suggestion is not working as expected

* ATOM-49 - Fix error parsing tiapp.xml file
