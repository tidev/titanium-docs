---
title: Setting Memory Levels
weight: '70'
---

# Setting Memory Levels

## Overview

Studio allows you to see your current memory usage and adjust the settings based on the types of projects with which you work.

## Showing your current memory level

In order to see your current memory levels, you may turn on a "Heap Status" indicator. This shows you your available memory and current usage.

To enable the memory status indicator, turn on **Preferences > General : Show Heap Status**. You will see a small bar in the bottom right corner of your workspace, similar to the one below:

![Screen_shot_2011-07-19_at_9.53.12_AM](./Screen_shot_2011-07-19_at_9.53.12_AM.png)

## Setting your memory configuration

By default, Studio allocates a certain amount of memory to start (the **\-Xms** parameter) and uses a maximum amount (the **\-Xmx** parameter) of Java heap memory, which is usually enough for most development tasks. However, depending on the JRE that you are running and if you are working with additional plugins and have many files open, you may need to increase your amount of memory. You may also find it helpful to increase the size of the permanent generation memory (the **\--launcher.XXMaxPermSize** parameter).

In some situations, such as when you have many projects in your workspace or when a project under source control has many files, you may get better performance by increasing the maximum heap memory (the **\-Xmx** parameter). However, setting the memory allocation larger than the available physical memory on your machine can cause issues with Java, which will severely degrade your computer's performance and should be avoided.

Memory usage configuration changes are made in the .ini file. Studio must be restarted for any changes to this file to take effect.

Certain parameters in the AptanaStudio3.ini or TitaniumStudio.ini file are platform-dependent; For example, only OS X needs the **XstartOnFirstThread** parameter.

## Configuration files across platforms

::: warning ⚠️ Warning
Find your configuration file by following the steps here: [Modifying Your Configuration](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Updating_Studio/Modifying_Your_Configuration/)
:::

### Windows

```
--launcher.XXMaxPermSize
256m
--launcher.defaultAction
openFile
-vmargs
-Xms40m
-Xmx384m
-Declipse.p2.unsignedPolicy=allow
-Djava.awt.headless=true
```

### OS X

```
-startup
../../../plugins/org.eclipse.equinox.launcher_1.1.1.R36x_v20101122_1400.jar
--launcher.XXMaxPermSize
256m
--launcher.defaultAction
openFile
-vmargs
-Xms40m
-Xmx384m
-Declipse.p2.unsignedPolicy=allow
-Xdock:icon=../Resources/aptana.icns
-XstartOnFirstThread
-Dorg.eclipse.swt.internal.carbon.smallFonts
```
