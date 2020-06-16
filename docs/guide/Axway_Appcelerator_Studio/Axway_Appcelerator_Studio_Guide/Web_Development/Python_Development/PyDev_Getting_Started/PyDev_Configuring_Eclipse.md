---
title: PyDev Configuring Eclipse
weight: '70'
---

# PyDev Configuring Eclipse

## Configuring Eclipse to suit your needs

Well, Eclipse has lots of things you can configure, and below are some things that make a difference...

– there is only one tip currently, but I intend to make it grow with the questions I receive about it, now that I have a good place to put those

## Configuring auto-refresh

Eclipse by default (at least on 3.1) does not refresh things automatically, so if you make changes outside of the workspace, you will not see the changes until you refresh it (F5 on the navigator). However, you can change the default setting and ask Eclipse to refresh automatically.

To set auto-refresh, go to **window > preferences > general > workspace** and check the **refresh automatically** check-box. **NOTE:** not doing so may have some especially strange results with .pyc files not being deleted, as PyDev will only acknowledge that the .pyc file exists on a refresh.
