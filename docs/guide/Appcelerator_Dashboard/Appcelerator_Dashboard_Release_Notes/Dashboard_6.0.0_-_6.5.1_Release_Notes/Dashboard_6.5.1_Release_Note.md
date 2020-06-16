---
title: Dashboard 6.5.1 Release Note
weight: '10'
---

# Dashboard 6.5.1 Release Note

## Dashboard 6.5.1 - 24 July 2019

Dashboard 6.5.1 is a patch release, which includes several new features and improvements.

## New Features

* Added a dropdown to allow filtering of **AMPLIFY Crash Analytics** events by **Handled** (in other words, logged exceptions) or **Unhandled** (in other words, crashes or uncaught exceptions) event types.

* Added a column in the **Crashes** table view to display **Handled** or **Unhandled** for easy identification of the crash type.

* Added option to the application level **Custom Queries** view to query and group by **Crash** events, display the crashes' error messages, and link to the crash details view.

## Improvements

* Improved behavior of the **Environments** dropdown on analytics views. Aside from default **Development** and **Production** values, the options will only include values received within the queried date range.
