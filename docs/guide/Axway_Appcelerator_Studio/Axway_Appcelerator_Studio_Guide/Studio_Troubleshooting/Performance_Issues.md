---
title: Performance Issues
weight: '130'
---

# Performance Issues

If you are having issues with the speed of Studio, this document provides information you can use to diagnose the problem.

## Building Workspace taking longer than expected

There are several reasons why building a workspace could take a long time to index. We suggest trying the steps below in succession to resolve the issue.

### Studio is indexing extra files

It's possible that you have a large directory of generated or resource files that don't need to be indexed. To exclude items from indexing:

1. Right-click on a project's folder.

2. Select Build > Exclude from build.

### Studio is encountering an exception during indexing

Check the Studio log file. It may be a bug, or the index is corrupt.

1. Help > Studio > View Log File

If you notice things like , it's likely your index is corrupt. See below.

If you notice issues mentioned in [APSTUD-2260](https://jira.appcelerator.org/browse/APSTUD-2260) ( UTFDataFormatException in DiskIndex.readString() ), it is likely your index is corrupt. See [The index is corrupt](#the-index-is-corrupt) section below.

### A validator or builder is enabled that is taking a long time to process each file

Validators for JavaScript (like JSLint) can take a _long_ time to process many files. You may wish to only have them enabled on reconcile only

1. Open Preference > Studio > Validation

2. Disable items on "build" that seem like likely culprits

3. Select OK

Studio will rebuild using the new settings.

### The index is corrupt

Studio indexes your files in order to collect metadata about the project for use in content assist. There are two indexes.

#### Local project index

This stores the contents for your local project

To clear your local project index

1. **Project > Clean...**

2. Either choose your project, or "All Projects"

#### Global index

This contains information about the core JavaScript libraries, etc.

To clear your global index

1. Find your workspace directory on disk

2. Locate the .metadata folder indside (you may need to show hidden files)

3. Delete .metadata/.plugins/com.aptana.index.core/\*.index (index file/files for the JS, HTML etc.).

4. Delete .metadata/.plugins/com.aptana.editor.php/\*.index (index file/files for PHP).

5. Restart Studio

### If that still does not help...

There are diagnoses you can perform that will help us understand the issue:

1. Turn on Show Normally Hidden Processes: **Preferences** \> **Studio** \> **Troubleshooting** \> **Show Normally Hidden Processes**

2. In the same preference page, turn on the following:

    1. Debug Level: All

    2. Debug specific components

        1. com.aptana.core/debug/builder

        2. com.aptana.core/debug/builder/indexer

        3. com.aptana.core/debug/builder/participants

3. Then, clear the log file: **Help** > **Studio** > **Clear Log File**.

4. Restart Studio

Attach your findings to [APSTUD-2050](https://jira.appcelerator.org/browse/APSTUD-2050) ( "Building Workspace" job takes a while to complete ). You should see entries like:

```
!ENTRY com.aptana.core 1 0 2012-08-15 14:44:09.007
!MESSAGE (Build 0.0.0.qualifier) [INFO] com.aptana.core/debug/builder Performing incremental unified build on project 'geolocationClient'

!ENTRY com.aptana.buildpath.core 1 0 2012-08-15 14:44:09.069
!MESSAGE (Build 0.0.0.qualifier) [INFO] com.aptana.core/debug/builder/participants Executed build participant 'Index Build Participant' on 'file:/Users/ingo/Documents/Aptana%20Workspaces/Aptana%20Studio%203%20Workspace/geolocationClient/LICENSE' in 10.842 ms.

...

!ENTRY com.aptana.core 1 0 2012-08-15 14:44:09.556
!MESSAGE (Build 0.0.0.qualifier) [INFO] com.aptana.core/debug/builder Finished unified build of 'geolocationClient'. Took 589.057 ms.
```

## High CPU usage

Diagnosing high CPU usage is relatively straightforward, but requires a small amount of setup. However, the information gained here is invaluable to the developers.

In order to do so, we will use a tool called VisualVM. It is included with many Java distributions, so you may not even need to install it.

### VisualVM installation

1. Check to see if it's already installed. You may be able to run "visualvm" or "jvisualvm" on the command line.

2. If not, follow the steps [here](http://visualvm.java.net/download.html)which involve downloading a .zip file and running the program inside.

    1. Ubuntu users can use `apt-get virtualvm`

3. It will go through a brief step calibrating your machine.

### Find the Studio process

1. Shut down other Java applications other than Studio to make it easiest to find Studio in the list.

2. Once Visual VM has started, you will see at least two processes in the left-hand column. Studio is likely to be the "Unknown Application".

3. Double-click on that item.

A pane opens showing details about the process

### Start recording CPU usage

1. Switch to the "Sampler" tab, and click "CPU".

2. Sort by "Self Time (CPU)" to see if what are the most active threads.

3. Start replicating the item which provokes CPU usage.

4. Once you are complete, click the "snapshot" button.

5. Click on the small disk icon to the left to save the file to disk. Give it a descriptive name.

6. Attach that file to a JIRA ticket.

### Alternate approaches

Two other things to try that might highlight the issue

1. Turn on **Preferences > Studio > Troubleshooting > Show Normally Hidden Processes**

2. In the same preference page, turn on

    1. Debug Level: All

    2. Debug specific components

        1. com.aptana.core/debug/shell

3. Help > Studio > Clear Log File

4. Cause the CPU usage spike.

5. Check both the Progress View and the log file to see if any obvious processes are causing the problems.
