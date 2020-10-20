<template>
  <section>
    <module-group title="User Interface">
      <module-card
        title="UI"
        icon="layer-group"
        link="./titanium/ui.html"
      >
        Root namespace for UI related code/widgets
      </module-card>
      <module-card
        title="View"
        icon="window-restore"
        link="./titanium/ui/view.html"
      >
        The base type for UI elements in Titanium and building block for your own UI.
      </module-card>
      <module-card
        title="Label"
        icon="align-left"
        link="./titanium/ui/label.html"
      >
        Fully stylable label to display one or multiple lines of text.
      </module-card>
      <module-card
        title="List View"
        icon="th-list"
        link="./titanium/ui/listview.html"
      >
        A list view is used to present rows of information, such as an item list or menu.
      </module-card>
    </module-group>

    <module-group title="Network, Filesystem and I/O">
      <module-card
        title="Network"
        icon="wifi"
        link="./titanium/network.html"
      >
        Root namespace for network related code, such as an <router-link to="./titanium/network/httpclient.html">HTTP client</router-link>.
      </module-card>
      <module-card
        title="Filesystem"
        icon="file-alt"
        link="./titanium/filesystem.html"
      >
        Root namespace for interacting with the filesystem.
      </module-card>
      <module-card
        title="Stream"
        icon="stream"
        link="./titanium/stream.html"
      >
        Utility methods for reading/writing to/from streams.
      </module-card>
      <module-card
        title="Buffer"
        icon="memory"
        link="./titanium/buffer.html"
      >
        A read/write instance of bytes typically used in conjunction with streams.
      </module-card>
    </module-group>

    <module-group title="Media">
      <module-card
        title="Media"
        icon="photo-video"
        link="./titanium/media.html"
      >
        Access the device's media-related functionality, such as the device's <router-link to="./titanium/media.html#showcamera">camera</router-link>  or photo <router-link to="./titanium/media.html#openphotogallery">gallery</router-link>.
      </module-card>
      <module-card
        title="Audio Player"
        icon="play"
        link="./titanium/media/audioplayer.html"
      >
        Stream audio to the device and control playback.
      </module-card>
      <module-card
        title="Music Player"
        icon="music"
        link="./titanium/media/musicplayer.html"
      >
        Lets you manage and playback a queue of <router-link to="./titanium/media/item.html">media objects</router-link>.
      </module-card>
      <module-card
        title="Video Player"
        icon="film"
        link="./titanium/media/videoplayer.html"
      >
        Play local video files or stream from a remote server, either in fullscreen or embedded in other views.
      </module-card>
    </module-group>

    <module-group title="Sensors">
      <module-card
        title="Accelerometer"
        icon="atom"
        link="./titanium/accelerometer.html"
      >
        Register for events when the device's x/y/z rotation changes.
      </module-card>
      <module-card
        title="Geolocation"
        icon="map-marker-alt"
        link="./titanium/geolocation.html"
      >
        Requesting and accessing location coordinates and geocoding addresses.
      </module-card>
      <module-card
        title="Gesture"
        icon="expand-alt"
        link="./titanium/gesture.html"
      >
        Query for device orientation and register for orientation changes or shake events.
      </module-card>
    </module-group>

    <module-group title="SQLite Database">
      <module-card
        title="Database"
        icon="layer-group"
        link="./titanium/database.html"
      >
        Root namespace for APIs to manage Databases
      </module-card>
      <module-card
        title="DB"
        icon="database"
        link="./titanium/database/db.html"
      >
        An instance of a Database
      </module-card>
      <module-card
        title="ResultSet"
        icon="poll-h"
        link="./titanium/database/resultset.html"
      >
        Result Sets from querying/manipulating a Database
      </module-card>
    </module-group>

    <module-group title="Utilities">
      <module-card
        title="DisplayCaps"
        icon="expand"
        link="./titanium/platform/displaycaps.html"
      >
        Provides details on the specific hardware densities and dimensions of the device
      </module-card>
      <module-card
        title="App"
        icon="mobile-alt"
        link="./titanium/app.html"
      >
        Access app-specific data at runtime, such as name, id, or version and for sending or listening for system events.
      </module-card>
      <module-card
        title="Properties"
        icon="hdd"
        link="./titanium/app/properties.html"
      >
        Store app related data that persists beyond app sessions and device power cycles.
      </module-card>
      <module-card
        title="Utils"
        icon="cog"
        link="./titanium/utils.html"
      >
        Utility for base64 encode/decode, as well as sha/md5 hashing
      </module-card>
    </module-group>

    <module-group title="Logging">
      <module-card
        title="API"
        icon="align-justify"
        link="./titanium/api.html"
      >
        A Titanium-specific logger. For developers used to the Web or Node.JS, you're probably looking for <router-link to="./global/console.html">console</router-link> instead.
      </module-card>
      <module-card
        title="Analytics"
        icon="search"
        link="./titanium/analytics.html"
      >
        Built in APIs for recording app-specific analytics, to record useful data/events from your app in the Platform Dashboard backend.
      </module-card>
    </module-group>
  </section>
</template>

<script>
import ModuleCard from '@components/api/ModuleCard'
import ModuleGroup from '@components/api/ModuleGroup'

export default {
  components: {
    ModuleCard,
    ModuleGroup
  }
}
</script>