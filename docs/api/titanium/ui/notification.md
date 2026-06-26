---
title: Titanium.UI.Notification
properties:
  - name: message
    type: String
    summary: Notification text to display.
  - name: duration
    type: Number
    summary: Determines how long the notification stays on screen.
  - name: gravity
    type: Number
    summary: >-
      Determines the location at which the notification should appear on the
      screen.
    platforms:
      - android
    since: 5.4.0
  - name: xOffset
    type: Number
    summary: X offset from the default position, in pixels.
  - name: yOffset
    type: Number
    summary: Y offset from the default position, in pixels.
  - name: horizontalMargin
    type: Number
    summary: >-
      Horizontal placement of the notification, <em>as a fraction of the screen
      width</em>.
    description: >
      <p>Useful values range from -0.5 (far left) to 0.5 (far right). A value of
      zero indicates default placement.</p>
  - name: verticalMargin
    type: Number
    summary: >-
      Vertical placement of the notification, <em>as a fraction of the screen
      height</em>.
    description: >
      <p>Useful values range from -0.5 (top) to 0.5 (bottom). A value of zero
      indicates default placement.</p>
methods:
  - name: show
    summary: Show the notification.
examples:
  - title: Simple Toast Notification
    code:
      - content: |-
          var toast = Ti.UI.createNotification({
              message:"Please Stand By",
              duration: Ti.UI.NOTIFICATION_DURATION_LONG
          });
          toast.show();
        language: js
    intro: The simplest use case is also the most common.
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window>
                  <Notification id="toast" platform="android" message="Please Stand By" duration="Ti.UI.NOTIFICATION_DURATION_LONG" />
              </Window>
          </Alloy>
        language: xml
      - content: |-
          $.index.open();
          $.toast.show();
        language: js
    intro: |-
      Previous example as an Alloy view.

      index.xml
---

# Titanium.UI.Notification

A toast notification.

| Android | iOS |
| ------- | --- |
| ![Android](/images/toast_android.png) |  |

A toast notification is an unobtrusive, pop-up notification that does not
block the UI. Use the [Titanium.UI.createNotification](/api/titanium/ui) method or **`<Notification>`** Alloy element
to create a Toast notification.

On Android, by default, a toast notification appears centered on the bottom half of the screen.
On Windows Phone, by default, a toast notification appears over the status bar on the top part
of the screen.


**Extends:** `Titanium.Proxy` · **Since:** 0.8 · **Platforms:** android

<ApiProperties />

<ApiMethods />

<ApiExamples />

