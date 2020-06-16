---
title: Reporting Bugs or Requesting Features
weight: '100'
---

# Reporting Bugs or Requesting Features

## Overview

Bugs and feature requests need to be filed in two different locations, depending on if the issue relates to web development tools, or Titanium-specific functionality.

## Ticket checklist

The following table explains what information must be included in which fields in order for a ticket to be accepted.

::: tip 💡 Hint
If you have been directed to this section after creating a ticket in Jira, it probably means that you have omitted some vital information. If a field is omitted from the list below, you can leave it at the default value.

If the bug relates to the Titanium SDK rather than Studio, please follow the [Titanium Ticket Checklist](/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/How_to_Report_a_Bug_or_Make_a_Feature_Request/#jira-ticket-checklist) instead.
:::

| Field | Required | Information to include |
| --- | --- | --- |
| Summary | ![check](./check.png) | **A concise summary** that makes it easy to determine the nature of the issue |
| Severity | ![check](./check.png) | One of the following descriptions may be chosen to describe the issue's impact on your project :<br /><br />* Blocker: issue is blocking project<br />    <br />* Major: crashing or incorrect behavior issue that may have a workaround<br />    <br />* Minor: crash or incorrect behavior that does have a reasonable workaround<br />    <br />* Trivial: functions correctly, but appearance/functionality needs improvement<br />    <br />* None: default |
| Component/s | ![check](./check.png) | Find a component which most closely describes the problem area |
| Environment | ![check](./check.png) | **Studio version:** copied and pasted from Help / About |
| Description | ![check](./check.png) | **a concise, factual, description**  <br />**steps that demonstrate issue**, in a bulleted list, or placed within a {code} markdown block (if code)  <br />**a snippet of the main errors from the log**, placed within a {code} markdown block |
| Attachment | ![check](./check.png) | Always attach the Studio log, and depending on the issue, various other logs are helpful. See [Accessing the Log File](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Accessing_the_Log_File/) for which logs to attach. You may also be asked to attach your configuration log. See [Determining Your Studio Configuration](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Determining_Your_Studio_Configuration/). |

## Web tools feature requests/bugs

Please file a report at [http://jira.appcelerator.org/browse/APSTUD](http://jira.appcelerator.org/browse/APSTUD). Follow the checklist above and the steps below when creating a bug report.

## Titanium tools feature requests/bugs

Please file a report at [http://jira.appcelerator.org/browse/AC](http://jira.appcelerator.org/browse/AC). Follow the checklist above and the steps below when creating a bug report.

## Requesting a feature

1. [Search Jira](http://jira.appcelerator.org) in the relevant project thoroughly for similar issues. If it already exists, add yourself as a watcher. The more watchers a feature has, the higher likelihood it will be implemented.

2. Make sure that the request is something that actually requires a change in the core product. For the SDK, it may be best implemented as a module. For Studio, it could be implemented as an Eclipse plugin.

3. Describe as clearly as possible the feature and how you intend on using it. For features that are part of the SDK, include sample code demonstrating how'd you like to interact with the APIs. Pseduo-code is fine.

4. Explain why the feature is important, especially if the usage is non-obvious. The more people that are interested in the feature, and the more people it will benefit, the higher priority the feature will get.

5. Add test cases to let us know that we implemented the feature correctly.

6. If there are [Q & A](http://developer.appcelerator.com/questions/newest) posts around the feature, add those as well.

7. If you can, write the feature yourself and submit it to the project. This speeds up the process considerably!

## Bug submission steps

1. Find possible bug

2. [Search Jira](http://jira.appcelerator.org) in the relevant project thoroughly for similar issues

3. Once certain of a bug:

    * Create a Jira ticket (one ticket per bug)

    * Keep it as concise and as factual as possible

    * Include your usecase, and all the information described in checklist below

    * Watch ticket, to show your support for the ticket's resolution

4. If coming here to create a ticket from another forum, help others by posting the ticket's URL back in the source location.

### Creating a good use-case

A "usecase" is a working script that reliably reproduces a specific bug. The _best_ usecase is one that contains the _least possible_ code while still demonstrating the bug.

* Try the issue in a new workspace or a new project to see if that make a difference

* Include exact steps to perform the actions in your workspace. In particular, when referencing editor errors, a sample document with cursor positions, and expected and actual output is invaluable

* Try and create the smallest possible sample that illustrates the problem

### Creating a Jira ticket

* Open the Jira project page above. Tickets may be created in APSTUD directly, but TISTUD tickets will need to be verified by support personnel first. Please do not add Titanium tickets in the Aptana Studio tracker--they will be marked as invalid and you will be asked to resubmit the issue.

* Select from the list of ticket types in the top right-hand corner, although usually only **Bug**, **Improvement** or **New Feature** will be appropriate

* Complete as many fields as you can. Refer to checklist for help with this

* As the reporter, you will automatically receive any updates to the ticket. However, it's always a good idea to also watch the ticket if its resolution is crucial to your projects, in order for our team to gauge the issue's impact on the community from the watchers list

Thank you for your time!
