<template>
  <section>
    <h3>User Interface</h3>
    <div class="grid grid-cols-2 gap-6 mt-8 mb-16">
      <module-card
        title="UI"
        icon="layer-group"
        link="/api/titanium/ui.html"
      >
        Root namespace for UI related code/widgets
      </module-card>
      <module-card
        title="DisplayCaps"
        icon="mobile-alt"
        link="/api/titanium/platform/displaycaps.html"
      >
        Details on the specific hardware densities, dimensions of the device
      </module-card>
      <module-card
        title="Locale"
        icon="language"
        link="/api/titanium/locale.html"
      >
        APIs for formatting text, numbers, currency for locales and setting current locale.
      </module-card>
      <module-card
        title="Intl"
        icon="globe-americas"
        link="/api/global/intl.html"
      >
        Web compatible Intl APIs for formatting dates, times, numbers and sorting strings.
      </module-card>
    </div>

    <h3>Network, Filesystem and I/O</h3>
    <div class="grid grid-cols-2 gap-6 mt-8 mb-16">
      <module-card
        title="Network"
        icon="wifi"
        link="/api/titanium/network.html"
      >
        Root namespace for network related code, such as an <router-link to="./titanium/network/httpclient.html">HTTP client</router-link>.
      </module-card>
      <module-card
        title="Filesystem"
        icon="file-alt"
        link="/api/titanium/filesystem.html"
      >
        Root namespace for interacting with the filesystem
      </module-card>
      <module-card
        title="Stream"
        icon="stream"
        link="/api/titanium/stream.html"
      >
        Utility methods for reading/writing to/from streams
      </module-card>
      <module-card
        title="Buffer"
        icon="memory"
        link="/api/titanium/buffer.html"
      >
        A read/write instance of bytes typically used in conjunction with streams
      </module-card>
    </div>

    <h3>Sensors</h3>
    <div class="grid grid-cols-2 gap-6 mt-8 mb-16">
      <module-card
        title="Accelerometer"
        icon="layer-group"
        link="/api/titanium/accelerometer.html"
      >
        Register for events when the device's x/y/z rotation changes.
      </module-card>
      <module-card
        title="Geolocation"
        icon="map-marker-alt"
        link="/api/titanium/geolocation.html"
      >
        Requesting and accessing location coordinates and geocoding addresses.
      </module-card>
      <module-card
        title="Gesture"
        icon="expand-alt"
        link="/api/titanium/gesture.html"
      >
        Query for device orientation and register for orientation changes or shake events.
      </module-card>
    </div>

    <h3>SQLite Database</h3>
    <div class="grid grid-cols-2 gap-6 my-5">
      <module-card
        title="Database"
        icon="layer-group"
        link="/api/titanium/database.html"
      >
        Root namespace for APIs to manage Databases
      </module-card>
      <module-card
        title="DB"
        icon="database"
        link="/api/titanium/database/db.html"
      >
        An instance of a Database
      </module-card>
      <module-card
        title="ResultSet"
        icon="poll-h"
        link="/api/titanium/database/resultset.html"
      >
        Result Sets from querying/manipulating a Database
      </module-card>
    </div>
  </section>
</template>

<script>
import ModuleCard from '@components/api/ModuleCard'

export default {
  components: {
    ModuleCard
  }
}
</script>