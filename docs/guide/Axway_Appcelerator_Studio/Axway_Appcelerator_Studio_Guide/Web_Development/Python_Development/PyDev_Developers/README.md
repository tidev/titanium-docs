---
title: PyDev Developers
weight: '60'
---

# PyDev Developers

This document contains information on how to obtain, configure, PyDev, and how to contribute.

## Getting the code

The first thing you probably want to do in order to code in PyDev is **getting its code**.

**Pre-requisites:** Eclipse SDK 3.7.0, Git, and Java 5.0 (note that other versions of those should work too, but details may differ a bit).

Before getting the code, there's an important step you need to make: Change your java 'compiler compliance-level' to 5.0. To do this, go to **window** \> **preferences** \> **Java** \> **compiler** and change that setting from **1.4 to 5.0**.

### Repository

Get the code with Git from [https://github.com/aptana/Pydev](https://github.com/aptana/Pydev) (ideally, fork it at github, create your own branch at the forked repository -- usually based in the development branch -- and later send a pull request on github so that the code can be merged back). Later, if you want to provide some other feature/bugfix, a new branch should be created again.

Then, in Eclipse, go to: **File** \> **Import** \> **Existing projects into workspace** and point it to the root of the repository you just downloaded.

Note that currently, PyDev has a project (org.python.pydev.red\_core) which has a dependency on Aptana Studio 3, so, if you plan on doing a local build, you'll need to get Aptana Studio 3 installed as a plugin in the SDK used for the build (i.e.: not necessarily in the SDK you use for developing), now if you don't need to do a local build (i.e.: just do your local changes and run Eclipse with your changes from within the SDK and contribute that as a patch later on), you can just close this project so that it doesn't get compiled.

## Configuring the environment after getting the code

Important: Before doing any changes to the code, it's important to note that you should create a new branch (usually based on the development branch) for doing code changes. See: [http://book.git-scm.com/3\_basic\_branching\_and\_merging.html](http://book.git-scm.com/3_basic_branching_and_merging.html) and also [http://nvie.com/git-model](http://nvie.com/git-model) for details on creating and using branches.

::: warning ⚠️ Warning
For running the tests, a file: `org.python.pydev.core/tests/org.python.pydev.core/TestDependent.OS.properties` must have the values set regarding to the computer that'll execute the tests.
:::

If the head does not compile in git, send an e-mail to the pydev-code list at sourceforge to know what's happening.

## Where to start?

Ok, this may be the most difficult thing... especially because answers may change a lot depending on what you want to do, so, below are outlined 2 different approaches:

* Extending PyDev **with Jython**: recommended if you want to add some editor-related action or something that does not need implementing some Eclipse extension-point.

* Extending PyDev **in Java**: if you want something that won't map to an action, this might be the better way to go.

To start in any of those approaches, it might be worth taking a look at some Eclipse documentation, to try to grasp some of its concepts. One of the finest documentations for that is the [Eclipse FAQ](http://wiki.eclipse.org/index.php/Eclipse_FAQs).

If you want to take the Jython approach, check out this article on how to do [jython scripting in PyDev](#undefined)

For supporting a new Python based language, the first step would be creating a grammar that can parse it while providing a Python like AST. See: [PyDev Grammar](#undefined) for instructions on that.

And that's it. If you have further doubts about how to code in PyDev, direct your questions to the [pydev-code list](http://lists.sourceforge.net/lists/listinfo/pydev-code) at sourceforge.

## Creating a distribution locally

Provided that the steps were followed, PyDev should have the following structure:

> /builders
> /org.python.pydev.build
>
> /features
> /org.python.pydev.feature
>
> /plugins
> /org.python.pydev
> ... (other plugins)

Now, on to the build: start a shell and follow the instructions at `/plugins/org.python.pydev.build/build_cmd.txt` (read the end of the file for details on customizing it properly)

## Contributing

Create a pull request in Github: [https://help.github.com/articles/creating-a-pull-request/](https://help.github.com/articles/creating-a-pull-request/)

## Related docs

Page not found: null.
