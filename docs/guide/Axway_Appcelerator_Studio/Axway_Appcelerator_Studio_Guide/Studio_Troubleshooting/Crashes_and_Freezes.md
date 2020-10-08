---
title: Crashes and Freezes
weight: '20'
---

# Crashes and Freezes

## Overview

Studio does its best not to crash, but when it does, there are helpful pieces of information you can send to the developers.

## Freezes

A freeze is likely caused by either a deadlock in code or an infinite loop. To diagnose:

1. If you are on OS X or have the JDK installed on Windows, you can use the `jps` command

2. To check, try typing `jps` on the command line, or you may need to look in `c:\Program Files\Java\jdk_directory\bin` or wherever your Java is installed. If you do not have a directory with "JDK" in the name, you won't be able to use JPS.

### Using JPS

::: warning ⚠️ Warning
On Unix, you may need to run the following commands as "sudo"
:::

1. Open a command prompt.

2. Type `jps -v` shows you a list of jvm process ids. You should see one referencing Eclipse.

3. Type `jstack <pid> >> logfile.log`to dump the stack trace for the specified VM process id. Copy this into a file and attach it to the JIRA ticket. You may need to pipe the output to a location where you have write permissions, i.e.:

    1. `c:\Program Files\Java\jdk1.6.0_29\bin\jstack 2616 >> "C:\Users\Username\Desktop\test2.log"`

Example:

```
Machine$ jps -v
9528 Jps -Dapplication.home=/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home -Xms8m
8455  -Dorg.eclipse.swt.internal.carbon.smallFonts -Xms40m -Xmx1024m -Declipse.p2.unsignedPolicy=allow -Declipse.log.size.max=10000 -Declipse.log.backup.max=5 -Xdock:icon=../Resources/titanium.icns -XstartOnFirstThread -Dorg.eclipse.swt.internal.carbon.smallFonts -XX:MaxPermSize=256m
Machine$ jstack 8455 >> logfile.log
```

### Without JPS

Unfortunately, the easiest way requires restarting Studio on the command line. If that's not possible for some reason, you can use this free tool (though it requires registration: [http://www.adaptj.com/main/tracehowtos](http://www.adaptj.com/main/tracehowtos))

To use the command line:

1. Start Studio on the command line:

    1. On Windows: `Appcelerator Studio.exe -consolelog,` `TitaniumStudio.exe -consolelog` or `AptanaStudio.exe -consolelog`

    2. On OS X: `/Applications/Appcelerator\ Studio/AppceleratorStudio.app/Contents/MacOS/AppceleratorStudio`, `/Applications/Titanium\ Studio/TitaniumStudio.app/Contents/MacOS/TitaniumStudio` or `/Applications/Aptana\ Studio\ 3/AptanaStudio3.app/Contents/MacOS/AptanaStudio3`

2. You may wish to adjust the buffer size of your console

    1. On Windows, right-click in the console window and choose **Properties**. Set the buffer size to 3000.

3. Enter the key sequence `<ctrl> + \` in the console window.

4. Copy and paste the resulting output information into a document, and attach it to the JIRA ticket

::: tip 💡 Hint
If you have additional questions, you can see [http://wiki.eclipse.org/How\_to\_report\_a\_deadlock](http://wiki.eclipse.org/How_to_report_a_deadlock) for more information.
:::

## JVM Terminated

When this happens, you'll see a rectangular dialog with a title of **JVM Terminate** on your screen and Studio will disappear. This indicates Java itself has crashed, but it creates a log file in the process.

By default, the crash file should be in either the Studio installation directory, or in the system temp directory, most likely with a file name of `hs_err_pid*.log`. If you still could not locate it, follow the directions here:

* [Finding your Error Log](http://www.oracle.com/technetwork/java/javase/felog-138657.html#gbwcy)

* On OS X, the location is `~/Library/Logs/Java/*.crash.log` or `~/Library/Logs/CrashReporter`, and the file will have the word java in its name.

Please attach this log if you submit a support ticket.
