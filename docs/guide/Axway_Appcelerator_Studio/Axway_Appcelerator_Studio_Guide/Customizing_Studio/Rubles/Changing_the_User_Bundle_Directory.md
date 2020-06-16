---
title: Changing the User Bundle Directory
weight: '20'
---

# Changing the User Bundle Directory

## Changing Your User Bundle Path

By default, user bundles are placed in an "Aptana Rubles" directory in the user's home directory or Documents directory, depending on the OS. There may be times when you want to change the user bundle directory. To do this, you will need to edit the eclipse.ini file (when running Studio as a plugin) or the `AptanaStudio3.ini` file (when running standalone). Add something like the following to the end of the file: `-Dstudio.rubleUserLocation=<location>`

Replace `<location>` with the full path of the directory where you would like your user bundles to live. Once you make this change and save the file, you will need to restart Studio for the changes to take effect.

## User Bundle Path Requirements

For your new location to be used for the user bundle directory, the following requirements must be satisfied:

1\. The directory must exist
2\. The directory must be writable
3\. The directory must be readable

Alternately, if the directory does not exist, Studio will try to create it. If it is created successfully, the above criteria must be satisfied as well. If any of these conditions fail, then Studio will use the default location as if the ini property were never defined.

## Moving Existing Bundles

If you run Studio before changing your ini file, you will need to migrate your user bundles. Move the contents of your old user bundle directory into the new location you specified in the ini property. You should be able to find your user bundles at `~/Documents/Aptana Rubles`. On Windows, they will be located in an "Aptana Rubles" directory in your user's home directory as defined by the `user.home` system property.
