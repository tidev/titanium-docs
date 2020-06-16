---
title: Git and Github
weight: '40'
---

# Git and Github

## Overview

At Appcelerator we use [Git](http://en.wikipedia.org/wiki/Git_(software)) as our version control system. In addition, many of our open source projects, including the core SDKs, are hosted on [Github](http://github.com). For this reason, if you plan on contributing to Titanium, it's critical that you understand at least the basics of how Git and Github work.

The following sections give some references and tips for getting started with Git & Github. With this knowledge you'll better understand how Appcelerator manages out many open source projects. Also, you'll have the opportunity to start integrating this powerful version control system into your own workflow.

## Learning Git and Github

### Getting Started with Git

Git can be a little daunting if you've never used it before, but most people soon learn to love it. The following resources will help you to get started:

* [Git Official Website](http://git-scm.com)

* Michael Marner's [Git Tutorial](http://www.youtube.com/user/MichaelMarner#p/u/9/HaSDIdNkCDQ) (video)

* Linus Torvalds' [Git Tech Talk](http://www.youtube.com/watch?v=4XpnKHJAok8) (video)

* The [Pro Git Book](http://progit.org/book/)

* the `git help` command and the [Git online manual](http://www.kernel.org/pub/software/scm/git/docs/)

* Github [Git Reference](http://gitref.org) (manual)

* the Freenode IRC server's #git channel

* and [many others](http://www.google.com/search?hl=en&q=git+version+control)

### Git Prerequisites

Before you start, you will need to work through these points:

* configure SSH, required for pushing branches to Github. See "Generating SSH Keys" for [Mac OS X](http://help.github.com/mac-key-setup/) and [Windows](http://help.github.com/msysgit-key-setup/).

### Some Quick Git Tips

The following can make Git a little easier to use:

* use [gitk](http://gitk.sourceforge.net/development.html) to give a visual representation of your repository

* by default, if a file's permissions change, Git will perceive it just the same as if its contents were changed, Thus, to ignore permissions changes, run:

```
git config core.filemode false
```

### Committing Code with Git in 7 Easy Stages

The following diagram describes the full development cycle used to contribute code or documentation to an Appcelerator repository, using Git and Github.

![contribute-workflow-v3](./contribute-workflow-v3.png)

Download a hi-res version [here](#undefined).
