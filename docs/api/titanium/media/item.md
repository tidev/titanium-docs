---
title: Titanium.Media.Item
properties:
  - name: albumArtist
    type: String
    summary: Artist credited for the album containing this item.
  - name: albumArtistPersistentID
    type: Number
    summary: The persistent identifier for an album artist.
    since: 6.1.0
  - name: albumPersistentID
    type: Number
    summary: The key for the persistent identifier for an album.
    since: 6.1.0
  - name: albumTitle
    type: String
    summary: Title of the album containing this item.
  - name: albumTrackCount
    type: Number
    summary: Number of tracks for the album containing this item.
  - name: albumTrackNumber
    type: Number
    summary: Track number for this item.
  - name: artist
    type: String
    summary: Artist credited for this item.
  - name: artwork
    type: Titanium.Blob
    summary: >
      Image for the item's artwork as a <code>Blob</code> object,  or
      <code>null</code> if no artwork is<br>

      available.<br>
  - name: assetURL
    type: String
    summary: A URL pointing to the media item.
    since: 6.1.0
  - name: beatsPerMinute
    type: Number
    summary: |
      The number of musical beats per minute for the media item.<br>
    since: 6.1.0
  - name: bookmarkTime
    type: String
    summary: The user's place in the media item the most recent time it was played.
    since: 6.1.0
  - name: comments
    type: String
    summary: |
      Textual information about the media item.<br>
    since: 6.1.0
  - name: composer
    type: String
    summary: Composer of this item.
  - name: dateAdded
    type: Date
    summary: Date when the item was added to the music library.
    since: 6.1.0
  - name: discCount
    type: Number
    summary: Total number of discs for the album containing this item.
  - name: discNumber
    type: Number
    summary: Disc number for this item in the album.
  - name: genre
    type: String
    summary: Genre of this item.
  - name: genrePersistentID
    type: Number
    summary: The persistent identifier for a genre.
    since: 6.1.0
  - name: hasProtectedAsset
    type: Boolean
    summary: True if the item represents a protected asset.
    since: 6.1.0
  - name: isCloudItem
    type: Boolean
    summary: True if the media item is an iCloud item.
    since: 6.1.0
  - name: isCompilation
    type: Boolean
    summary: True if this item is part of a compilation album.
  - name: isExplicit
    type: Boolean
    summary: True if this item is marked as &quot;Explicit&quot;.
    since: 6.1.0
  - name: lastPlayedDate
    type: Date
    summary: The most recent calendar date on which the user played the media item.
    since: 6.1.0
  - name: lyrics
    type: String
    summary: Lyrics for this item.
  - name: mediaType
    type: Number
    summary: |
      The type of the media.<br>
    description: >
      <p>At least in theory, a single item can have more than one media type, in
      which case the<br>

      value represents a bitwise-OR of all the applicable media types.</p>
  - name: persistentID
    type: String
    summary: The key for the persistent identifier for the media item.
    since: 6.1.0
  - name: playCount
    type: Number
    summary: Number of times the item has been played.
  - name: playbackDuration
    type: Number
    summary: Length (in seconds) of this item.
  - name: playbackStoreID
    type: Number
    summary: Used to enqueue store tracks by their ID.
    since: 6.1.0
  - name: podcastTitle
    type: String
    summary: Title of a podcast item.
    description: >
      <p>Only included if the media type is <a
      href="/api/titanium/media/music_media_type_podcast">Titanium.Media.MUSIC_MEDIA_TYPE_PODCAST</a>.</p>
  - name: podcastPersistentID
    type: Number
    summary: The persistent identifier for an audio podcast.
    since: 6.1.0
  - name: rating
    type: Number
    summary: Rating for this item.
  - name: releaseDate
    type: Date
    summary: Date when this this item was released.
    since: 6.1.0
  - name: skipCount
    type: Number
    summary: Number of times this item has been skipped.
  - name: title
    type: String
    summary: Title of this item.
  - name: userGrouping
    type: String
    summary: |
      Grouping information for the media item.<br>
    since: 6.1.0
---

# Titanium.Media.Item

A representation of a media item returned by [openMusicLibrary](Titanium.Media.openMusicLibrary) or [queryMusicLibrary](Titanium.Media.queryMusicLibrary).

This is a read-only object that describes a single media item, not a playlist. 
Titanium does not support access to playlists.

`Item` objects cannot be created explicitly.  The 
[openMusicLibrary](Titanium.Media.openMusicLibrary) returns `Item` objects in its
`success` callback function, while [queryMusicLibrary](Titanium.Media.queryMusicLibrary)
returns an array of `Item` objects.


**Extends:** `Titanium.Proxy` · **Since:** 1.4.0 · **Platforms:** iphone, ipad, macos

<ApiProperties />

