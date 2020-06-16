---
title: Widget Configuration File (widget.json)
weight: '40'
---

# Widget Configuration File (widget.json)

All widgets have a configuration file called `widget.json` located in the root directory of the widget. The configuration file follows the [npm package.json format](https://docs.npmjs.com/files/package.json) with a few exceptions.

The widget configuration file also accepts the following key-value pairs:

| Key | Value | Description |
| --- | --- | --- |
| id | String | **Mandatory.** Needs to be the same name as the widget root folder. |
| copyright | String | Widget copyright information. |
| license | String | Widget license information. |
| min-alloy-version\* | Float | Minimum required Alloy version to run the widget. |
| min-titanium-version\* | Float | Minimum required Titanium version to run the widget. |
| tags | String | List of keywords. |
| platforms\* | Any combination of platforms (comma delimited) | Which platforms the widget will run on. |

(\*) Currently, the min-alloy-version, min-titanium-version and platforms keys are not required, but in the future, Alloy will perform a check against these values.
