---
breadcrumbLabel: Item
sidebar: auto
---

# Titanium.Media.Item

<ProxySummary/>

## Overview

This is a read-only object that describes a single media item, not a playlist. 
Titanium does not support access to playlists.

`Item` objects cannot be created explicitly.  The 
[openMusicLibrary](Titanium.Media.openMusicLibrary) returns `Item` objects in its
`success` callback function, while [queryMusicLibrary](Titanium.Media.queryMusicLibrary)
returns an array of `Item` objects.

<ApiDocs/>
