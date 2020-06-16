---
title: Changing the VM Used with Studio
weight: '60'
---

# Changing the VM Used with Studio

Some Studio users may need to change the VM they use for running Studio. These instructions describe how to switch between GCJ and Sun's JVM.

1\. Open a command prompt and type **java -version** to see which VM you are currently running. If you are running GCJ, the command output will look like:

```
java version "1.5.(some number)"
gij (GNU libgcy) version 5.1.0 (some number) (Red Hat some version number)
```

If you're running Sun's JVM, the output will look like:

```
java version "1.5.2_12"
Java(TM) 2 Runtime Enrivonment, Standard Edition (build 1.4.5_12)
```

2\. At the command prompt, type the path for the VM that Studio should use. An example of this for GCJ is:

```
cd <path-to-aptana-root-directory>
./aptanastudio3 -vm /etc/alternatives/java
```

3\. To check that the correct VM is running, replace the path with the path to Sun's "java" executable, or update your "java" soft link to point to Sun's java.
