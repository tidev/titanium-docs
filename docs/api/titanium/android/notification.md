---
title: Titanium.Android.Notification
properties:
  - name: audioStreamType
    type: Number
    summary: The audio stream type to use when playing the sound.
    description: >
      <p>Specify one of the <code>STREAM</code> constants from <a
      href="/api/titanium/android">Titanium.Android</a>.</p>
  - name: category
    type: String
    summary: Sets the notification's category.
    description: >
      <p>If your notification falls into one of the predefined categories,
      assign it accordingly.<br>

      Aspects of the system UI such as the notification shade may use this
      information<br>

      to make ranking and filtering decisions. This property only works for
      devices running Android 5.0 (API 21)<br>

      and greater.</p>
    since: 3.6.0
  - name: channelId
    type: String
    summary: The channel id specified for the notification.
    platforms:
      - android
    since: 7.0.0
  - name: contentIntent
    type: Titanium.Android.PendingIntent
    summary: >-
      The <code>PendingIntent</code> to execute when the expanded status entry
      is clicked.
  - name: contentText
    type: String
    summary: Description text of the notification.
  - name: contentTitle
    type: String
    summary: Title of the notification.
  - name: contentView
    type: Titanium.Android.RemoteViews
    summary: Custom layout to display in the notification.
    description: >
      <p>Calling <a
      href="Titanium.Android.Notification.setLatestEventInfo">setLatestEventInfo</a>
      or<br>

      setting the <code>contentText</code> or <code>contentTitle</code>
      properties causes the notification to use<br>

      the default notification layout, overriding any custom layout set
      through<br>

      <code>contentView</code>.</p>

      <p>If you use a custom layout, you can use the<br>

      <a href="Titanium.Android.RemoteViews">RemoteViews</a> methods to update
      the displayed<br>

      notification.</p>
  - name: defaults
    type: Number
    summary: Specifies which values should be taken from the defaults.
    description: >
      <p>Specify the bitwise OR of the desired values:<br>

      <a
      href="/api/titanium/android/default_lights">Titanium.Android.DEFAULT_LIGHTS</a>,
      <a
      href="/api/titanium/android/default_sound">Titanium.Android.DEFAULT_SOUND</a>,
      and<br>

      <a
      href="/api/titanium/android/default_vibrate">Titanium.Android.DEFAULT_VIBRATE</a>.
      Use <a
      href="/api/titanium/android/default_all">Titanium.Android.DEFAULT_ALL</a>
      to specify<br>

      that all values should be taken from the defaults.</p>
  - name: deleteIntent
    type: Titanium.Android.PendingIntent
    summary: >-
      The <code>PendingIntent</code> to execute when the status entry is deleted
      by the user with the &quot;Clear All Notifications&quot; button.
  - name: flags
    type: Number
    summary: Set of flags for the notification.
  - name: groupKey
    type: String
    summary: The group key that the notification will belong to.
    since: 6.2.0
  - name: groupSummary
    type: Boolean
    summary: Specifies if this is a group summary notification.
    since: 6.2.0
  - name: icon
    type: Number, String
    summary: >-
      Notification icon, specified as an Android resource ID, or a local URL to
      a density-specific image.
    description: >
      <p>If specified as a URL, the icon must be placed in one of the
      density-specific<br>

      folders under <code>Resources/android/images</code>. For example, if your
      icon is called<br>

      <code>my_icon.png</code>, you would create high- and medium-density
      versions of the icons<br>

      with the following paths:</p>

      <pre><code>Resources/android/images/res-hdpi/my_icon.png

      Resources/android/images/res-mdpi/my_icon.png

      </code></pre>

      <p>To access this icon, you'd use the URL '/images/my_icon.png'.</p>

      <p>To access the same icon using an Android resource ID, place the icon
      in:</p>

      <pre><code>platform/android/res/drawable/my_icon.png

      </code></pre>

      <p>This icon's resource ID can be referenced through the <a
      href="/api/titanium/app/android/r">Titanium.App.Android.R</a><br>

      object:</p>

      <div class="language-js"><pre class="shiki"><code>icon:
      Ti.App.Android.R.drawable.my_icon,

      </code></pre></div>

      <p>See <a href="/api/titanium/app/android/r">Titanium.App.Android.R</a>
      for more information on accessing<br>

      Android resources by ID.</p>
  - name: largeIcon
    type: Number, String
    summary: >-
      Add a large icon to the notification (and the ticker on some devices)
      specified as an Android resource ID, or a local URL to a density-specific
      image.
    description: >
      <p>If specified as a URL, the icon must be placed in one of the
      density-specific<br>

      folders under <code>Resources/android/images</code>. For example, if your
      icon is called<br>

      <code>my_large_icon.png</code>, you would create high- and medium-density
      versions of the icons<br>

      with the following paths:</p>

      <pre><code>Resources/android/images/res-hdpi/my_large_icon.png

      Resources/android/images/res-mdpi/my_large_icon.png

      </code></pre>

      <p>To access this large icon, you'd use the URL
      '/images/my_large_icon.png'.</p>

      <p>To access the same large icon using an Android resource ID, place the
      icon in:</p>

      <pre><code>platform/android/res/drawable/my_large_icon.png

      </code></pre>

      <p>This large icon's resource ID can be referenced through the <a
      href="/api/titanium/app/android/r">Titanium.App.Android.R</a><br>

      object:</p>

      <div class="language-js"><pre class="shiki"><code>icon:
      Ti.App.Android.R.drawable.my_large_icon,

      </code></pre></div>

      <p>See <a href="/api/titanium/app/android/r">Titanium.App.Android.R</a>
      for more information on accessing<br>

      Android resources by ID.</p>
    since: 4.2.0
  - name: color
    type: String
    summary: Accent color used behind icon.
    description: >
      <p>Accent color of the circle used behind icon. The Icon will be stenciled
      in white on top of a<br>

      circle of the color set. For information about color values, see the
      &quot;Colors&quot; section of <a
      href="/api/titanium/ui">Titanium.UI</a>.</p>

      <p>See Android Reference for the <a
      href="https://developer.android.com/reference/android/app/Notification.html#color">color</a>
      property.</p>
    since: 7.0.0
  - name: ledARGB
    type: Number
    summary: The color for the LED to blink.
  - name: ledOffMS
    type: Number
    summary: The number of milliseconds for the LED to be off while it's flashing.
  - name: ledOnMS
    type: Number
    summary: The number of milliseconds for the LED to be on while it's flashing.
  - name: number
    type: Number
    summary: The number of events that this notification represents.
  - name: priority
    type: Number
    summary: Sets the priority of the notification.
    description: >
      <p>This property only works for devices running Android 4.1 (API 16) and
      greater.</p>
    since: 3.6.0
  - name: sound
    type: String
    summary: A URL to the sound to play.
    description: >
      <p>The URL cannot refer to a file in the Resources directory, but it can
      refer to<br>

      a file in the raw resources directory<br>

      (<a
      href="Titanium.Filesystem.resRawDirectory">Filesystem.resRawDirectory</a>)
      or the<br>

      external storage directory<br>

      (<a
      href="Titanium.Filesystem.externalStorageDirectory">Filesystem.externalStorageDirectory</a>).</p>

      <p>Note that this sound property is ignored on Android 8.0 and above. On
      these OS versions,<br>

      you must use the <a
      href="Titanium.Android.NotificationChannel.sound">NotificationChannel.sound</a><br>

      property and that sound will play for any notification posted under that
      channel. Also, you will<br>

      still need to set this notification's sound property for OS versions older
      than Android 8.0 too,<br>

      meaning that the sound URL needs to be set in both places.</p>

      <p>To play a raw resource file, place the audio file in the
      <code>platform/android/res/raw</code><br>

      folder and reference it as:</p>

      <div class="language-js"><pre class="shiki"><code>notification.sound =
      Ti.Filesystem.resRawDirectory + audioFileName;

      </code></pre></div>

      <p>To play a file from the Resources directory, first copy it to external
      storage. For example, you<br>

      could define the following function:</p>

      <div class="language-js"><pre class="shiki"><code>// Copy resource file to
      SD card, and return a native path.

      // Return undefined if we can't copy the file.

      function getOrCopyAudioFile(resourceFilename) {
          var outFile = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, 'sound', 'cricket.wav');
          var outPath = outFile.nativePath;

          if (! outFile.exists()) {
              var outDir = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, 'sound');
              if (! outDir.isDirectory()) {
                  if (! outDir.createDirectory()) {
                      Ti.API.debug(&quot;Failed to create directory.&quot;);
                      outDir = null;
                      return undefined;
                  }
              }
              outDir = null;

              var inFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'cricket.wav');
              try {
                  inFile.copy(outPath);
              } catch (ex) {
                  Ti.API.debug(&quot;Failed to copy file.&quot;);
                  inFile = null;
                  return undefined;
              }
              inFile = null;
          }
          outFile = null;
          return outPath;
      }

      </code></pre></div>

      <p>Then when creating a notification, specify the sound like this:</p>

      <div class="language-js"><pre class="shiki"><code>var sound =
      getOrCopyAudioFile();

      if (sound) {
          notification.sound = sound;
      }

      </code></pre></div>
  - name: style
    type: Titanium.Android.BigTextStyle, Titanium.Android.BigPictureStyle
    summary: Style object that can apply a rich notification style.
    description: >
      <p>Notifications in the notification drawer appear in two main visual
      styles, normal view and big view.<br>

      The big view of a notification only appears when the notification is
      expanded.<br>

      This happens when the notification is at the top of the drawer, or the
      user clicks the notification.<br>

      On platform versions that don't offer expanded notifications, styles that
      depend on expanded notifications have no effect.</p>
    since: 5.4.0
  - name: tickerText
    type: String
    summary: >-
      Text to scroll across the screen when this item is added to the status
      bar.
    description: >
      <p>For devices running Android 5.0 (API 21) and greater, the ticket text
      is no longer displayed<br>

      in the status bar.  However, this property is used as an audible
      notification if accessibility<br>

      services are enabled.</p>
  - name: visibility
    type: Number
    summary: >-
      Allows user to conceal private information of the notification on the lock
      screen.
    description: >
      <p>This property only works on devices running Android 5.0 (API 21) and
      greater.</p>
    since: 3.6.0
  - name: wakeLock
    type: wakeLockOptions
    summary: >
      Will wake up the device for the given time (in milliseconds) when the
      notification is shown.<br>

      The application needs to also set the
      <code>android.permission.WAKE_LOCK</code> permission<br>

      in the Android manifest section of the <code>tiapp.xml</code> file.<br>

      <br>

      <code>xml &lt;ti:app&gt;     &lt;android&gt;        
      &lt;manifest&gt;             &lt;uses-permission
      android:name=&quot;android.permission.WAKE_LOCK&quot; /&gt;        
      &lt;/manifest&gt;     &lt;/android&gt; &lt;/ti:app&gt;</code><br>
    since: 6.2.0
  - name: when
    type: Date, Number
    summary: The timestamp for the notification (defaults to the current time).
    description: >
      <p>If the timestamp is set to 0, no time is displayed in the
      notification<br>

      window for this notification.</p>
methods:
  - name: setLatestEventInfo
    summary: >-
      Sets the latest event info using the built-in notification view for this
      notification.
    parameters:
      - name: contentTitle
        type: String
        summary: Title to display when the notification is expanded.
      - name: contentText
        type: String
        summary: Text to display when the notification is expanded.
      - name: contentIntent
        type: Titanium.Android.PendingIntent
        summary: Intent to launch when the user clicks on the notification.
  - name: setProgress
    summary: Set the progress this notification represents.
    parameters:
      - name: max
        type: Number
        summary: Defines the maximum value the progress can take.
      - name: progress
        type: Number
        summary: Defines the progress value, between 0 and max.
      - name: indeterminate
        type: Boolean
        summary: Allows to enable the indeterminate mode.
  - name: addAction
    summary: Add an action button to the notification
    description: >
      <p>Up to three actions buttons can be added, additional buttons will be
      ignored.</p>
    parameters:
      - name: icon
        type: Number, String
        summary: Icon of the action button as URL or resource ID
      - name: title
        type: String
        summary: Title of the action button
      - name: intent
        type: Titanium.Android.PendingIntent
        summary: Intent of the action button
examples:
  - title: Simple Notification Example
    code:
      - content: com.appcelerator.notificationsample.NotificationsampleActivity
        language: ''
      - content: |-
          // Intent object to launch the application
          var intent = Ti.Android.createIntent({
              action: Ti.Android.ACTION_MAIN,
              // Substitute the correct class name for your application
              className: 'com.appcelerator.notificationsample.NotificationsampleActivity',
              // Substitute the correct package name for your application
              packageName: 'com.appcelerator.notificationsample'
          });
          intent.flags |= Ti.Android.FLAG_ACTIVITY_NEW_TASK;
          intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);

          // Create a PendingIntent to tie together the Activity and Intent
          var pending = Titanium.Android.createPendingIntent({
              intent: intent,
              flags: Titanium.Android.FLAG_UPDATE_CURRENT
          });

          // Create the notification
          var notification = Titanium.Android.createNotification({
            // icon is passed as an Android resource ID -- see Ti.App.Android.R.
              icon: Ti.App.Android.R.drawable.my_icon,
            contentTitle: 'Something Happened',
            contentText : 'Click to return to the application.',
            contentIntent: pending
          });

          // Send the notification.
          Titanium.Android.NotificationManager.notify(1, notification);
        language: js
    intro: >-
      The following example shows how to create a notification that launches the

      application when the user clicks on the notification.


      To have the notification launch an application when the user clicks on it,

      assign the `contentIntent` property to an
      [Intent](Titanium.Android.Intent) object

      that launches the main activity of the application by specifying the
      `packageName`

      and `className` properties of the intent.


      The `packageName` is the project's application ID. For Titanium
      applications, you

      can find this in the `tiapp.xml` file.


      The `className` is the name of the main activity, prefixed with the
      `packageName`.

      For Titanium applications, the name of the main activity is the
      application name with

      only the first character capitalized suffixed with `Activity`.  You can
      also find the name

      of the main activity in the `build/android/AndroidManifest.xml` file after
      you build your

      application.


      For example, if the application ID is
      `com.appcelerator.notificationsample` and the

      application name is `NotificationSample`, the class name will be:
  - title: Bundled Notifications Example
    code:
      - content: |-
          var id = 100,
              groupKey = 'group_key';

          for (var i = 3; i > 0; i--) {
              Ti.Android.NotificationManager.notify(id++,
                  Ti.Android.createNotification({
                      icon: Ti.Android.R.drawable.ic_dialog_info,
                      contentTitle: 'NOTIFICATION #' + i,
                      contentText : 'Lorem ipsum dolor sit amet, facer eruditi omittantur cu pri, nibh nonumy putant eam eu.'
                      groupKey: groupKey
                  })
              );
          }
          Ti.Android.NotificationManager.notify(id++,
              Ti.Android.createNotification({
                  icon: Ti.Android.R.drawable.ic_dialog_info,
                  contentTitle: 'NOTIFICATIONS',
                  contentText : 'You have 3 notifications.',
                  groupKey: groupKey,
                  groupSummary: true
              })
          );
        language: js
    intro: The following example shows how to create bundled notifications.
---

# Titanium.Android.Notification

UI notifications that can be sent while the application is in the background.

Notifications alert the user that something is happening to your application while it is
in the background. Notifications appear in the notification drawer until the user
clears them and on the lock screen for devices running Android 5.0 or greater.
Note that the user can filter or turn notifications on and off from **Settings**.

For Android toast notifications (pop-up notifications sent while the application is in the
foreground), see [Titanium.UI.Notification](/api/titanium/ui/notification).

To create a notification, use the [Titanium.Android.createNotification](/api/titanium/android) method.

Pass the Notification object to the methods of the [Titanium.Android.NotificationManager](/api/titanium/android/notification-manager) class
to send or cancel notifications.

For examples of using Notifications, see [Android Notifications](#!/guide/Android_Notifications).

Further Reading:

  * [Android Developers: Notifications](https://developer.android.com/design/patterns/notifications.html)

#### Android 5.0 Changes

Starting with Android 5.0 (API 21), ticker text, defined with the `tickerText` property,
no longer appears in the status bar when the notification is first sent but is used as an
audible notification if accessibility services are enabled.

Notifications now appear in the lock screen.  The user can customize the visibility level of
these notifications from **Settings**.  The visibility level is based on the `visibility`
property set on the notification.


**Extends:** `Titanium.Proxy` · **Since:** 1.5 · **Platforms:** android

<ApiProperties />

<ApiMethods />

<ApiExamples />

