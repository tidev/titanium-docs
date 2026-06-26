---
title: Titanium.UI.Label
properties:
  - name: attributedString
    type: Titanium.UI.AttributedString
    summary: Specify an attributed string for the label.
    description: >
      <p>The underlying attributed string drawn by the label. If set, avoid
      setting common attributes<br>

      in the label, such as <code>color</code> and <code>font</code>, as
      unexpected behaviors may result.</p>

      <p>For Alloy, you can use an <code>&lt;AttributedString&gt;</code><br>

      element inside a <code>&lt;Label&gt;</code> element and set the text
      property as node text:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;Alloy&gt;
        &lt;Window&gt;
            &lt;Label&gt;
              &lt;AttributedString&gt;
                  Alloy is great!
              &lt;/AttributedString&gt;
            &lt;/Label&gt;
        &lt;/Window&gt;
      &lt;/Alloy&gt;

      </code></pre></div>

      <p>Then set attributes in the TSS file:</p>

      <div class="language-js"><pre
      class="shiki"><code>&quot;AttributedString&quot; : {
        attributes: [
          {
            type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
            value: 'red',
            range: [0, 5]
          },
          {
            type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE,
            value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,
            range: [9, 5]
          }
        ]
      }


      Since 13.2.0 you can also use the AttributedString object without
      `Titanium.UI.createAttributedString()`:

      ``` js

      var text =  'Bacon ipsum dolor Titanium SDK rocks! sit amet fatback
      leberkas salami sausage tongue strip steak.';

      var label = Titanium.UI.createLabel({
          attributedString: {
              text: text,
              attributes: [
                  {
                      type: Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE,
                      value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,
                      range: [text.indexOf('Titanium'), ('Titanium').length]
                  },
                  {
                      type: Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR,
                      value: &quot;red&quot;,
                      range: [text.indexOf('Titanium'), ('Titanium').length]
                  }
              ]
          }
      });

      </code></pre></div>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 3.6.0
      iphone: 3.2.0
      ipad: 3.2.0
  - name: autoLink
    type: Number
    summary: Automatically convert certain text items in the label to clickable links.
    description: >
      <p>Multiple autolink values can be combined with a bitwise OR. For
      example:</p>

      <div class="language-js"><pre class="shiki"><code>label.autoLink =
      Ti.UI.AUTOLINK_MAP_ADDRESSES|Ti.UI.AUTOLINK_PHONE_NUMBERS;

      </code></pre></div>

      <p>Prior to Release 3.0, this field used platform-specific constants.
      These are now<br>

      deprecated in favor of the <code>AUTOLINK</code> constants.</p>

      <p>The Android-specific <code>LINKIFY</code> legacy constants are defined
      in <a href="/api/titanium/ui/android">Titanium.UI.Android</a>.</p>
    platforms:
      - android
  - name: autoSize
    type: Boolean
    summary: Automatically scales the label into its size.
    description: >
      <p>To use <code>autoSize</code> you have to set a <code>width</code> and
      <code>height</code> to the label and it will<br>

      automatically increase the font size to fill up the space. The actual
      <code>fontSize</code><br>

      value stays the same.</p>
    platforms:
      - android
    since: 11.1.0
  - name: backgroundPaddingBottom
    type: Number
    summary: >-
      Number of pixels to extend the background image past the label on the
      bottom.
    platforms:
      - iphone
      - ipad
      - macos
  - name: backgroundPaddingLeft
    type: Number
    summary: >-
      Number of pixels to extend the background image past the label on the
      left.
    platforms:
      - iphone
      - ipad
      - macos
  - name: backgroundPaddingRight
    type: Number
    summary: >-
      Number of pixels to extend the background image past the label on the
      right.
    platforms:
      - iphone
      - ipad
      - macos
  - name: backgroundPaddingTop
    type: Number
    summary: Number of pixels to extend the background image past the label on the top.
    platforms:
      - iphone
      - ipad
      - macos
  - name: color
    type: String, Titanium.UI.Color
    summary: Color of the label text, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>
  - name: ellipsize
    type: Number
    summary: >
      Causes words in the text that are longer than the view is wide to be
      ellipsized instead of broken in the middle.<br>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: font
    type: Font
    summary: Font to use for the label text.
  - name: highlightedColor
    type: String, Titanium.UI.Color
    summary: >-
      Color of the label when in the highlighted state, as a color name or hex
      triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>

      <p>Used when the label is part of a view that can be highlighted, such as
      a<br>

      <a
      href="/api/titanium/ui/table-view-row">Titanium.UI.TableViewRow</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
  - name: html
    type: String
    summary: Pass a HTML-based string and it will be formatted accordingly.
    description: >
      <p>Note that complex HTML structures like images are not supported.<br>

      Use a <a href="/api/titanium/ui/web-view">Titanium.UI.WebView</a> for
      those cases.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 0.8.0
      iphone: 12.3.0
      ipad: 12.3.0
      macos: 12.3.0
  - name: breakStrategy
    type: Number
    summary: >-
      Break strategy (control over paragraph layout). Check <a
      href="https://developer.android.com/reference/android/widget/TextView#attr_android:breakStrategy">Android
      breakStrategy</a> for more infos.
    platforms:
      - android
    since: 12.3.0
  - name: hyphenationFrequency
    type: Number
    summary: >-
      Frequency of automatic hyphenation. Check <a
      href="https://developer.android.com/reference/android/widget/TextView#attr_android:hyphenationFrequency">Android
      hyphenationFrequency</a> for more infos.
    platforms:
      - android
    since: 12.3.0
  - name: includeFontPadding
    type: Boolean
    summary: >-
      Includes extra top and bottom padding to make room for accents that go
      above normal ascent and descent.
    platforms:
      - android
    since: 3.3.0
  - name: lines
    type: Number
    summary: Makes the label be exactly this many lines tall.
    platforms:
      - android
    since: 4.1.0
  - name: lineCount
    type: Number
    summary: >-
      Returns the amount of lines the content is actually using. Is equal or
      lower than <code>maxLines</code>.
    since: 12.3.0
  - name: letterSpacing
    type: Number
    summary: >-
      Letter spacing of the <a href="Titanium.UI.Label.text">text</a> as a float
      value.
    platforms:
      - android
    since: 12.7.0
  - name: lineSpacing
    type: LabelLineSpacing
    summary: >-
      Line spacing of the <a href="Titanium.UI.Label.text">text</a>, as a
      dictionary with the properties <code>add</code> and <code>multiply</code>.
    platforms:
      - android
    since: 5.4.0
  - name: maxLines
    type: Number
    summary: Makes the label at most this many lines tall.
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 4.1.0
      iphone: 6.1.0
      ipad: 6.1.0
  - name: minimumFontSize
    type: Number
    summary: Minimum font size when the font is sized based on the contents.
    description: >
      <p>When set to a valid font size, this property enables single-line mode
      and the font<br>

      will be auto-downscaled so that its text will fit the label's width if
      necessary.<br>

      Will not downscale the font lower than the assigned minimum font size.</p>

      <p>When set to less than or equal to zero, the font auto-downscaling
      feature will be disabled.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      iphone: 0.8.0
      ipad: 0.8.0
      android: 6.1.0
  - name: shadowColor
    type: String, Titanium.UI.Color
    summary: >-
      Shadow color of the <a href="Titanium.UI.Label.text">text</a>, as a color
      name or hex triplet.
    description: >
      <p>Use in conjunction with <a
      href="Titanium.UI.Label.shadowOffset">shadowOffset</a> and <a
      href="Titanium.UI.Label.shadowRadius">shadowRadius</a>.<br>

      For information about color values, see the &quot;Colors&quot; section of
      <a href="/api/titanium/ui">Titanium.UI</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 3.2.0
  - name: shadowOffset
    type: Point
    summary: >-
      Shadow offset of the <a href="Titanium.UI.Label.text">text</a>, as a
      dictionary with the properties <code>x</code> and <code>y</code>.
    description: >
      <p>Use in conjunction with <a
      href="Titanium.UI.Label.shadowColor">shadowColor</a> and <a
      href="Titanium.UI.Label.shadowRadius">shadowRadius</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 3.2.0
  - name: shadowRadius
    type: Number
    summary: Shadow radius of the <a href="Titanium.UI.Label.text">text</a>.
    description: >
      <p>Use in conjunction with <a
      href="Titanium.UI.Label.shadowColor">shadowColor</a> and <a
      href="Titanium.UI.Label.shadowOffset">shadowOffset</a>.</p>
    platforms:
      - android
    since: 3.2.0
  - name: text
    type: String
    summary: Label text.
    description: >
      <p>Use the backslash and letter <code>n</code> line feed character
      combination, ie <code>\n</code>, to force a new<br>

      line.</p>

      <p>Use Unicode characters, such as those included in (but not limited to)
      the<br>

      <a
      href="http://en.wikibooks.org/w/index.php?title=Unicode/List_of_useful_symbols">Unicode
      List of Useful Symbols</a><br>

      section of wikipedia, to insert special characters and symbols.</p>

      <p>See the example in <a href="Titanium.UI.Label">label</a> for a
      demonstration.</p>
  - name: textTransform
    type: String
    summary: >-
      Property that specifies how to capitalize the text. Can be
      <code>lowercase</code>, <code>uppercase</code> or <code>none</code>
      (default)
    since: 12.7.0
  - name: textAlign
    type: String, Number
    summary: Text alignment.
  - name: textid
    type: String
    summary: Key identifying a string from the locale file to use for the label text.
    description: >
      <p>Only one of <code>text</code> or <code>textid</code> should be
      specified.</p>
  - name: visibleText
    type: String
    summary: >-
      Returns the actual text seen on the screen. If the text is ellipsized it
      will be different to the normal <code>text</code>.
    platforms:
      - android
    since:
      android: 12.3.0
  - name: wordWrap
    type: Boolean
    summary: Enable or disable word wrapping in the label.
    deprecated: true
    platforms:
      - android
  - name: verticalAlign
    type: Number, String
    summary: >
      Vertical text alignment, specified using one of the  vertical alignment
      constants<br>

      from <a href="/api/titanium/ui">Titanium.UI</a>.<br>
    description: >
      <p>On iPhone and iPad the default value of the property is undefined. The
      behavior of the label<br>

      depends on the actual content height. If the actual content height is
      larger than the available<br>

      height the text is truncated at the end and the content is center
      aligned.</p>

      <p>On Android, the default value of the property is undefined, and the
      default<br>

      behavior when the property is undefined is to center the text
      vertically.</p>
    since:
      iphone: 3.0.0
      ipad: 3.0.0
      android: 3.0.0
events:
  - name: link
    summary: Fired when user interacts with a URL in the Label.
    description: >
      <p>The URL is set using the <a
      href="Titanium.UI.ATTRIBUTE_LINK">ATTRIBUTE_LINK</a> property on the <a
      href="Titanium.UI.Label.attributedString">attributedString</a>.</p>

      <p>On Android, this event also fires if the <code>html</code> property is
      used instead of the <code>attributedString</code> property. This event
      will<br>

      also override the default behavior of opening the link in its default
      application.</p>

      <p>On iOS, this is only valid on version 7 and above. In previous versions
      of the the Titanium SDK this event required a <code>longpress</code><br>

      gesture to be performed. Beginning with Titanium SDK 4.0.0, only a
      <code>singletap</code> gesture is required to invoke this event.</p>
    properties:
      - name: url
        type: String
        summary: The URL that is associated with this event.
      - name: range
        type: Array
        summary: >-
          An array of two numbers [location, length] describing the character
          range of the text associated with this URL.
      - name: bubbles
        type: Boolean
        summary: This is false. This event does not bubble
examples:
  - title: Simple Alloy XML Example
    code:
      - content: |-
          <Alloy>
              <Window>
                  <Label text="Just a label with text"/>
              </Window>
          </Alloy>
        language: xml
    intro: Simple label in a Window
  - title: Basic Label
    code:
      - content: |-
          var win = Ti.UI.createWindow({
            backgroundColor: 'white',
            exitOnClose: true,
            fullscreen: false,
            layout: 'vertical',
            title: 'Label Demo'
          });

          var label1 = Ti.UI.createLabel({
            color: '#900',
            font: { fontSize:48 },
            shadowColor: '#aaa',
            shadowOffset: {x:5, y:5},
            shadowRadius: 3,
            text: 'A simple label',
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            top: 30,
            width: Ti.UI.SIZE, height: Ti.UI.SIZE
          });

          var label2 = Ti.UI.createLabel({
            color:'blue',
            text: 'A long label with\na few line breaks\nand Unicode (UTF8)\nsymbols such as\na white chess piece \u2655\nand the euro symbol \u20ac\nlooks like this!\n',
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            top: 30,
            width: 300, height: 200
          });

          win.add(label1);
          win.add(label2);
          win.open();
        language: js
    intro: >-
      Create a center-aligned label with a text shadow and specified-size font,
      and another

      containing forced line breaks and Unicode symbols.
  - title: Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window id="win" backgroundColor="white" exitOnClose="true" fullscreen="false" layout="vertical" title="Label Demo">

                  <!-- The text property can either be defined as an attribute or as node text. -->
                  <Label id="label1" color="#900" shadowColor="#aaa" text="A simple label" textAlign="Ti.UI.TEXT_ALIGNMENT_CENTER"
                      top="30" width="Ti.UI.SIZE" height="Ti.UI.SIZE" />
                  <Label id="label2" color="blue" textAlign="Ti.UI.TEXT_ALIGNMENT_LEFT" top="30" width="300" height="200">
                      A long label with\na few line breaks\nand Unicode (UTF8)\nsymbols such as\na white chess piece \u2655\nand the euro symbol \u20ac\nlooks like this!\n
                  </Label>
              </Window>
          </Alloy>
        language: xml
    intro: >-
      Previous example as an Alloy view.


      The font and shadowOffset properties need to be defined in the TSS or
      controller file.

      These property values are dictionaries, rather than single values,

      so they cannot be included in the markup.
---

# Titanium.UI.Label

A text label, with an optional background image.

| Android | iOS |
| ------- | --- |
| ![Android](/images/label_android.png) |  |

Use the [Titanium.UI.createLabel](/api/titanium/ui) method or **`<Label>`** Alloy element to create a label.


**Extends:** `Titanium.UI.View` · **Since:** 0.8

<ApiProperties />

<ApiEvents />

<ApiExamples />

