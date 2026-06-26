---
title: Titanium.UI.Picker
properties:
  - name: backgroundColor
    type: String, Titanium.UI.Color
    summary: Background color of the picker, as a color name or hex triplet.
    description: >
      <p>For information about color values, see the &quot;Colors&quot; section
      of <a href="/api/titanium/ui">Titanium.UI</a>.</p>

      <p>Android: If you want to change the backgroundColor you have to set the
      <code>borderStyle</code> to<br>

      <code>Ti.UI.INPUT_BORDERSTYLE_ROUNDED</code> or
      <code>Ti.UI.INPUT_BORDERSTYLE_NONE</code></p>
    platforms:
      - iphone
      - ipad
      - android
      - macos
    since:
      iphone: 5.2.0
      ipad: 5.2.0
      android: 0.9.0
  - name: borderStyle
    type: Number
    summary: >-
      Border style to use when picker is shown as a text field or drop-down
      field.
    description: >
      <p>This is an Android only property which only applies to pickers of
      type:</p>

      <ul>

      <li>

      <p><a href="Titanium.UI.PICKER_TYPE_DATE">PICKER_TYPE_DATE</a> or <a
      href="Titanium.UI.PICKER_TYPE_TIME">PICKER_TYPE_TIME</a><br>

      that also have <a
      href="Titanium.UI.Picker.datePickerStyle">datePickerStyle</a> set to<br>

      <a
      href="Titanium.UI.DATE_PICKER_STYLE_COMPACT">DATE_PICKER_STYLE_COMPACT</a>.</p>

      </li>

      <li>

      <p><a href="Titanium.UI.PICKER_TYPE_PLAIN">PICKER_TYPE_PLAIN</a> that also
      have property<br>

      <a href="Titanium.UI.Picker.useSpinner">useSpinner</a> set
      <code>false</code> to show a drop-down picker.</p>

      </li>

      </ul>
    platforms:
      - android
    since: 10.0.1
  - name: columns
    type: Array<Titanium.UI.PickerColumn>
    summary: >-
      Columns used for this picker, as an array of <a
      href="/api/titanium/ui/picker-column">Titanium.UI.PickerColumn</a>
      objects.
    description: >
      <p>You can only set columns for the plain picker.  If you set the type to
      anything<br>

      else except <code>Titanium.UI.PICKER_TYPE_PLAIN</code>, you cannot modify
      the columns.</p>

      <p>In an Alloy application you can specify this property with a
      <code>&lt;PickerColumn&gt;</code> (or <code>&lt;Column&gt;</code>)<br>

      element that contains one or more <code>&lt;PickerRow&gt;</code> (or
      <code>&lt;Row&gt;</code>) elements, as shown below:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;Alloy&gt;
          &lt;Window&gt;
              &lt;Picker useSpinner=&quot;true&quot;&gt;
                  &lt;PickerColumn id=&quot;column1&quot;&gt;
                      &lt;PickerRow title=&quot;Bananas&quot;/&gt;
                      &lt;PickerRow title=&quot;Strawberries&quot;/&gt;
                      &lt;PickerRow title=&quot;Mangos&quot;/&gt;
                  &lt;/PickerColumn&gt;
                  &lt;!-- Picker shorthand notation --&gt;
                  &lt;Column id=&quot;column2&quot;&gt;
                      &lt;Row title=&quot;red&quot;/&gt;
                      &lt;Row title=&quot;green&quot;/&gt;
                      &lt;Row title=&quot;blue&quot;/&gt;
                  &lt;/Column&gt;
              &lt;/Picker&gt;
          &lt;/Window&gt;
      &lt;/Alloy&gt;

      </code></pre></div>
  - name: countDownDuration
    type: Number
    summary: Duration in milliseconds used for a Countdown Timer picker.
    description: >
      <p>Applicable to <a
      href="/api/titanium/ui/picker_type_count_down_timer">Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER</a>
      picker types.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: dateTimeColor
    type: String, Titanium.UI.Color
    summary: Sets the text color of date- and time-pickers.
    description: >
      <p>Applicable to <a
      href="/api/titanium/ui/picker_type_time">Titanium.UI.PICKER_TYPE_TIME</a>
      and <a
      href="/api/titanium/ui/picker_type_date_and_time">Titanium.UI.PICKER_TYPE_DATE_AND_TIME</a>
      picker types.<br>

      The picker type <a
      href="/api/titanium/ui/picker_type_date">Titanium.UI.PICKER_TYPE_DATE</a>
      does not support text customizing as stated in the<br>

      <a
      href="https://developer.apple.com/documentation/uikit/uidatepicker">UIKit
      User Interface Catalog</a>.</p>

      <p>Important: On iOS 14+, you also have to set the <a
      href="/api/titanium/ui/picker">Titanium.UI.Picker.datePickerStyle</a>
      to<br>

      <a
      href="/api/titanium/ui/date_picker_style_wheels">Titanium.UI.DATE_PICKER_STYLE_WHEELS</a>
      in order to use this property.</p>
    platforms:
      - iphone
      - ipad
    since: 5.2.0
  - name: overrideUserInterfaceStyle
    type: Number
    summary: Forces the picker to used assigned theme instead of the system theme.
    description: >
      <p>When set to <a
      href="Titanium.UI.USER_INTERFACE_STYLE_DARK">USER_INTERFACE_STYLE_DARK</a>
      or<br>

      <a
      href="Titanium.UI.USER_INTERFACE_STYLE_LIGHT">USER_INTERFACE_STYLE_LIGHT</a>,
      the picker will ignore<br>

      the system's current theme and use the theme assigned to this property
      instead.</p>

      <p>When set to <a
      href="Titanium.UI.USER_INTERFACE_STYLE_UNSPECIFIED">USER_INTERFACE_STYLE_UNSPECIFIED</a>,<br>

      the picker will use the system's current theme.</p>
    since: 12.4.0
  - name: format24
    type: Boolean
    summary: >
      Determines whether the Time pickers display in 24-hour or 12-hour clock
      format.<br>
    description: >
      <p>Only applicable to pickers of type <a
      href="/api/titanium/ui/picker_type_time">Titanium.UI.PICKER_TYPE_TIME</a>.</p>

      <p>When this property is set <code>true</code>, a time picker is displayed
      with hours 0 through 23.<br>

      When set <code>false</code>, hours will be 1 through 12 with am/pm
      controls.</p>
    platforms:
      - android
  - name: hintText
    type: String
    summary: >-
      Text to be shown above date/time when picker is shown as a text field or
      drop-down field.
    description: >
      <p>This is an Android only property which only applies to pickers of
      type:</p>

      <ul>

      <li>

      <p><a href="Titanium.UI.PICKER_TYPE_DATE">PICKER_TYPE_DATE</a> or <a
      href="Titanium.UI.PICKER_TYPE_TIME">PICKER_TYPE_TIME</a><br>

      that also have <a
      href="Titanium.UI.Picker.datePickerStyle">datePickerStyle</a> set to<br>

      <a
      href="Titanium.UI.DATE_PICKER_STYLE_COMPACT">DATE_PICKER_STYLE_COMPACT</a>.</p>

      </li>

      <li>

      <p><a href="Titanium.UI.PICKER_TYPE_PLAIN">PICKER_TYPE_PLAIN</a> that also
      have property<br>

      <a href="Titanium.UI.Picker.useSpinner">useSpinner</a> set
      <code>false</code> to show a drop-down picker.</p>

      </li>

      </ul>
    platforms:
      - android
    since: 10.0.1
  - name: locale
    type: String
    summary: Locale used when displaying Date and Time picker values.
    description: >
      <p>Applicable to <a
      href="/api/titanium/ui/picker_type_date">Titanium.UI.PICKER_TYPE_DATE</a>,
      <a
      href="/api/titanium/ui/picker_type_time">Titanium.UI.PICKER_TYPE_TIME</a>
      and<br>

      <a
      href="/api/titanium/ui/picker_type_date_and_time">Titanium.UI.PICKER_TYPE_DATE_AND_TIME</a>
      picker types.</p>

      <p>Locale must be represented as a combination of ISO 2-letter language
      and country codes.<br>

      For example, <code>en-US</code> or <code>en-GB</code>. See the<br>

      <a href="http://en.wikipedia.org/wiki/ISO_639-1">ISO 639-1</a> and<br>

      <a
      href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements">ISO
      3166-1 alpha-2</a><br>

      sections of wikipedia for reference.</p>

      <p>On iOS, the system locale is always used.</p>
    platforms:
      - android
  - name: maxDate
    type: Date
    summary: Maximum date displayed when a Date picker is in use.
    description: >
      <p>Applicable to <a
      href="/api/titanium/ui/picker_type_date">Titanium.UI.PICKER_TYPE_DATE</a>
      and <a
      href="/api/titanium/ui/picker_type_date_and_time">Titanium.UI.PICKER_TYPE_DATE_AND_TIME</a><br>

      picker types.</p>

      <p>For JavaScript files, use a JavaScript Date object.</p>

      <p>For Alloy XML and TSS files, use a date string that can be parsed by
      the<br>

      <a href="http://momentjs.com/docs/#/parsing/string/">moment.js
      constructor</a>,<br>

      which includes ISO-8601 and RFC2822 dates.</p>

      <p>This property is ignored when <code>maxDate</code> is less than
      <code>minDate</code>.</p>
  - name: minDate
    type: Date
    summary: Minimum date displayed when a Date picker is in use.
    description: >
      <p>Applicable to <a
      href="/api/titanium/ui/picker_type_date">Titanium.UI.PICKER_TYPE_DATE</a>
      and <a
      href="/api/titanium/ui/picker_type_date_and_time">Titanium.UI.PICKER_TYPE_DATE_AND_TIME</a><br>

      picker types.</p>

      <p>For JavaScript files, use a JavaScript Date object.</p>

      <p>For Alloy XML and TSS files, use a date string that can be parsed by
      the<br>

      <a href="http://momentjs.com/docs/#/parsing/string/">moment.js
      constructor</a>,<br>

      which includes ISO-8601 and RFC2822 dates.</p>

      <p>This property is ignored when <code>maxDate</code> is less than
      <code>minDate</code>.</p>
  - name: minuteInterval
    type: Number
    summary: >
      Interval in minutes displayed when one of the Time types of pickers is in
      use.<br>
    description: >
      <p>Applicable to <a
      href="/api/titanium/ui/picker_type_time">Titanium.UI.PICKER_TYPE_TIME</a>
      and <a
      href="/api/titanium/ui/picker_type_date_and_time">Titanium.UI.PICKER_TYPE_DATE_AND_TIME</a><br>

      picker types.</p>

      <p>The minimum permitted value is 1 and maximum is 30. If the value cannot
      be evenly divided<br>

      into 60, the default value is used.</p>
    platforms:
      - iphone
      - ipad
      - macos
  - name: selectionIndicator
    type: Boolean
    summary: |
      Determines whether the visual selection indicator is shown.<br>
    description: >
      <p>As of Titanium 10.0.1, this property will be ignored and Android will
      always show an indicator.</p>
    deprecated: true
    platforms:
      - android
  - name: selectionOpens
    type: Boolean
    summary: >
      Determines whether calling the method <code>setSelectedRow</code> opens
      when called<br>
    description: >
      <p>If <code>true</code>, selection will open when
      <code>setSelectedRow</code> is called.</p>

      <p>If <code>false</code>, selection will not open when
      <code>setSelectedRow</code> is called.</p>
    platforms:
      - android
    since: 5.0.0
  - name: textAlign
    type: String, Number
    summary: >
      Horizontal text alignment of the date picker when using <a
      href="/api/titanium/ui/picker_type_date">Titanium.UI.PICKER_TYPE_DATE</a>.<br>
    platforms:
      - android
    since: 12.4.0
  - name: datePickerStyle
    type: Number
    summary: Determines how a date or time picker should appear.
    description: >
      <p>Used to display the picker has calendar/clock view, as wheel spinners,
      or<br>

      as a field which displays selection dialog when tapped on.</p>

      <p>This property is ignored if the <a
      href="Titanium.UI.Picker.type">type</a> property is set to<br>

      <a
      href="/api/titanium/ui/picker_type_plain">Titanium.UI.PICKER_TYPE_PLAIN</a>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 10.0.1
      iphone: 9.2.0
      ipad: 9.2.0
      macos: 9.2.0
  - name: type
    type: Number
    summary: Determines the type of picker displayed
    description: >
      <p>You can only set columns for the plain picker.  If you set the type to
      anything<br>

      else except <code>Titanium.UI.PICKER_TYPE_PLAIN</code>, you cannot modify
      the columns.</p>

      <p><code>PICKER_TYPE_DATE_AND_TIME</code> is only available for iOS.<br>

      <code>PICKER_TYPE_COUNT_DOWN_TIMER</code> is only available for iOS.</p>
  - name: useSpinner
    type: Boolean
    summary: >-
      Determines if a multi-column spinner or single column drop-down picker
      should be used.
    description: >
      <p>This property is intended to be used by plain picker types. When set on
      date/time pickers,<br>

      this property will override the <a
      href="Titanium.UI.Picker.datePickerStyle">datePickerStyle</a>
      property.</p>

      <p>If <code>true</code>, Android will show spinners for each column like
      iOS.</p>

      <p>If <code>false</code>, Android will display the 1st column as a
      drop-down list picker and all other<br>

      columns will be ignored.</p>

      <p>As of Titanium 10.0.1, this property shows a native Android spinner
      widget like how the<br>

      <a href="Titanium.UI.Picker.nativeSpinner">nativeSpinner</a> property
      worked in older versions.<br>

      On older Titanium versions, this property shows a non-native custom
      spinner view.</p>
    platforms:
      - android
  - name: nativeSpinner
    type: Boolean
    summary: >-
      Determines if a multi-column spinner or single column drop-down picker
      should be used.
    description: >
      <p>This property is intended to be used by time picker types.</p>

      <p>If <code>true</code>, Android will show hour, minute, and am/pm
      spinners like iOS.</p>

      <p>If <code>false</code>, Android will display a clock view.</p>

      <p>If <code>undefined</code> with Titanium 10.0.1 or higher, the<br>

      <a href="Titanium.UI.Picker.datePickerStyle">datePickerStyle</a> property
      is used.</p>

      <p>As of Titanium 10.0.1, this property has the same effect as the<br>

      <a href="Titanium.UI.Picker.useSpinner">useSpinner</a> property which also
      shows a native spinner.</p>

      <div class="language-js"><pre class="shiki"><code>const picker =
      Ti.UI.createPicker({
          type: Ti.UI.PICKER_TYPE_TIME,
          nativeSpinner: true,
          format24: false,
          minuteInterval: 4,
          minDate: new Date(2018, 5, 24),
          maxDate: new Date(2020, 5, 24),
          value: new Date(2019, 5, 24)
      });

      </code></pre></div>
    platforms:
      - android
    since: 5.4.0
  - name: value
    type: Date
    summary: Date and time value for Date and Time pickers.
    description: >
      <p>Applicable to <a
      href="/api/titanium/ui/picker_type_date">Titanium.UI.PICKER_TYPE_DATE</a>,
      <a
      href="/api/titanium/ui/picker_type_time">Titanium.UI.PICKER_TYPE_TIME</a>
      and <a
      href="/api/titanium/ui/picker_type_date_and_time">Titanium.UI.PICKER_TYPE_DATE_AND_TIME</a><br>

      picker types.</p>

      <p>For JavaScript files, use a JavaScript Date object.</p>

      <p>For Alloy XML and TSS files, use a date string that can be parsed by
      the<br>

      <a href="http://momentjs.com/docs/#/parsing/string/">moment.js
      constructor</a>,<br>

      which includes ISO-8601 and RFC2822 dates.</p>
  - name: visibleItems
    type: Number
    summary: >
      Number of visible rows to display. This is only applicable to a plain
      picker and when the<br>

      <code>useSpinner</code> is <code>true</code>.<br>
    description: >
      <p>The spinner-style Android picker shows 5 rows by default; one selected
      in the middle and 2<br>

      above and below. Set to an odd number to ensure the selected row is in the
      middle.</p>
    deprecated: true
    platforms:
      - android
  - name: calendarViewShown
    type: Boolean
    summary: |
      Determines whether the calenderView is visible.<br>
    description: |
      <p>If 'calendarViewShown' is 'true', the calenderView is visible</p>
    platforms:
      - android
  - name: font
    type: Font
    summary: Font to use for text.
    description: >
      <p>Only applicable to <a
      href="/api/titanium/ui/picker_type_date">Titanium.UI.PICKER_TYPE_DATE</a>
      and <a
      href="/api/titanium/ui/picker_type_time">Titanium.UI.PICKER_TYPE_TIME</a><br>

      picker types for android. For <a
      href="/api/titanium/ui/picker_type_plain">Titanium.UI.PICKER_TYPE_PLAIN</a>,
      refer to <a
      href="/api/titanium/ui/picker-column">Titanium.UI.PickerColumn</a><br>

      for android, and <a
      href="/api/titanium/ui/picker-row">Titanium.UI.PickerRow</a> for iphone /
      ipad.</p>
    platforms:
      - android
  - name: color
    type: String, Titanium.UI.Color
    summary: Text color of the Picker
    platforms:
      - android
    since:
      android: 12.0.0
methods:
  - name: add
    summary: Adds rows or columns to the picker.
    description: >
      <p>Once you use this method to add rows and columns to a picker, you
      cannot remove or<br>

      manipulate them.</p>
    parameters:
      - name: data
        type: >-
          Array<Titanium.UI.PickerRow>, Titanium.UI.PickerRow,
          Array<Titanium.UI.PickerColumn>, Titanium.UI.PickerColumn
        summary: >
          A row, set of rows, a column of rows or a set of columns of rows. When
          this method is<br>

          used to add a row or set of rows, a single-column picker is
          created.<br>
  - name: getSelectedRow
    summary: Gets the selected row for a column, or <code>null</code> if none exists.
    parameters:
      - name: index
        type: Number
        summary: A column index.
    returns:
      type: Titanium.UI.PickerRow
  - name: reloadColumn
    summary: Repopulates values for a column.
    parameters:
      - name: column
        type: Titanium.UI.PickerColumn
        summary: Column to repopulate.
  - name: setSelectedRow
    summary: Selects a column's row.
    description: >
      <p>On iOS, this method must be called after the picker is rendered.<br>

      On Android, the picker has a default value of 0 for both column and row
      index.</p>
    parameters:
      - name: column
        type: Number
        summary: A column index.
      - name: row
        type: Number
        summary: A row index.
      - name: animated
        type: Boolean
        summary: >
          Determines whether the selection should be animated. (iPhone,
          iPad-only)<br>
        optional: true
  - name: setValue
    summary: Sets the date and time value property for Date pickers.
    description: >
      <p>Applicable to the <a
      href="/api/titanium/ui/picker_type_date">Titanium.UI.PICKER_TYPE_DATE</a>
      and <a
      href="/api/titanium/ui/picker_type_date_and_time">Titanium.UI.PICKER_TYPE_DATE_AND_TIME</a><br>

      picker types.</p>
    parameters:
      - name: date
        type: Date
        summary: A Javascript <code>Date</code> object.
    returns:
      type: Titanium.UI.PickerRow
  - name: showDatePickerDialog
    summary: Shows Date picker as a modal dialog.
    description: >
      <p>Applicable to the <a
      href="/api/titanium/ui/picker_type_date">Titanium.UI.PICKER_TYPE_DATE</a>
      picker type.</p>

      <p>See &quot;Date Picker using showDatePickerDialog()&quot; for an
      example.</p>
    parameters:
      - name: dictObj
        type: Object
        summary: >
          Dictionary object with a subset of <code>Titanium.UI.Picker</code>
          properties<br>

          and a callback defined. Acceptable object properties are<br>

          <code>callback</code>, <code>title</code> and <code>value</code>.
          Property <code>okButtonTitle</code> is only<br>

          supported on Titanium versions older than 10.0.0.<br>
  - name: showTimePickerDialog
    summary: Shows Time picker as a modal dialog.
    description: >
      <p>Applicable to the <a
      href="/api/titanium/ui/picker_type_time">Titanium.UI.PICKER_TYPE_TIME</a>
      picker type.</p>

      <p>See &quot;Date Picker using showDatePickerDialog()&quot; for a similar
      example.</p>
    parameters:
      - name: dictObj
        type: Object
        summary: >
          Dictionary object with a subset of <code>Titanium.UI.Picker</code>
          properties<br>

          and a callback defined. Acceptable object properties are<br>

          <code>callback</code>, <code>format24</code>, <code>title</code> and
          <code>value</code>.<br>

          Property <code>okButtonTitle</code> is only supported on Titanium
          versions older than 10.0.0.<br>
events:
  - name: change
    summary: Fired when the value of any column's row is changed.
    properties:
      - name: columnIndex
        type: Number
        summary: >
          Selected column index. On iOS, only applicable to <a
          href="/api/titanium/ui/picker_type_plain">Titanium.UI.PICKER_TYPE_PLAIN</a><br>

          picker types.<br>
      - name: rowIndex
        type: Number
        summary: >
          Selected row index. On iOS, only applicable to <a
          href="/api/titanium/ui/picker_type_plain">Titanium.UI.PICKER_TYPE_PLAIN</a><br>

          picker types.<br>
      - name: column
        type: Titanium.UI.PickerColumn
        summary: >
          The column object. On iOS, only applicable to <a
          href="/api/titanium/ui/picker_type_plain">Titanium.UI.PICKER_TYPE_PLAIN</a><br>

          picker types.<br>
      - name: countDownDuration
        type: Number
        summary: >
          The selected duration in milliseconds. Applicable to <a
          href="/api/titanium/ui/picker_type_count_down_timer">Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER</a>
          picker types.<br>
      - name: value
        type: String
        summary: >
          The selected value. Applicable to date/time pickers only. This
          property is read-only<br>

          on Android.<br>
      - name: row
        type: Titanium.UI.PickerRow
        summary: >
          The row object. On iOS, only applicable to <a
          href="/api/titanium/ui/picker_type_plain">Titanium.UI.PICKER_TYPE_PLAIN</a>
          picker types.<br>
      - name: selectedValue
        type: Array<String>
        summary: >
          Array of selected values, one element per column in the picker.
          Applicable to<br>

          <a
          href="/api/titanium/ui/picker_type_plain">Titanium.UI.PICKER_TYPE_PLAIN</a>
          picker types.<br>
  - name: click
    summary: Fired when the device detects a click against the view.
    description: |
      <p>This event is only available for non-spinner plain pickers.</p>
    properties:
      - name: x
        type: Number
        summary: >-
          X coordinate of the event from the <code>source</code> view's
          coordinate system.
      - name: 'y'
        type: Number
        summary: >-
          Y coordinate of the event from the <code>source</code> view's
          coordinate system.
examples:
  - title: Multi-Column Picker using Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window id="win" backgroundColor="white" layout="vertical" exitOnClose="true">
                  <Picker id="picker" top="50" selectionIndicator="true" useSpinner="true">
                      <PickerColumn id="column1">
                          <PickerRow title="Bananas"/>
                          <PickerRow title="Strawberries"/>
                          <PickerRow title="Mangos"/>
                          <PickerRow title="Grapes"/>
                      </PickerColumn>
                      <!-- Picker shorthand notation -->
                      <Column id="column2">
                          <Row title="red"/>
                          <Row title="green"/>
                          <Row title="blue"/>
                          <Row title="orange"/>
                      </Column>
                  </Picker>
              </Window>
          </Alloy>
        language: xml
      - content: $.win.open();
        language: js
    intro: >-
      Creates a picker with two columns.  You can optionally use `Column` and
      `Row` as shorthand

      notation for `PickerColumn` and `PickerRow`, respectively.


      `app/views/index.xml`:
  - title: Date Picker using Alloy XML Markup
    code:
      - content: |-
          <Alloy>
              <Window backgroundColor="blue">
                  <Picker id="picker"
                    onChange="report"
                    type="Ti.UI.PICKER_TYPE_DATE"
                    minDate="2014,4,1"
                    maxDate="May 1, 2014 12:00:00"
                    value="2014-04-15T12:00:00">
                  </Picker>
              </Window>
          </Alloy>
        language: xml
      - content: |-
          function report(e) {
              Ti.API.info('User selected: ' + e.value);
          }

          $.index.open();
        language: js
    intro: >-
      Creates a date picker, then monitors the `change` event to see when the
      user updates the picker.


      For the date string, use string values accepted by the moment.js
      constructor in the XML and TSS files.

      If you are defining dates in the controller code, use a JavaScript Date
      object.


      `app/views/index.xml`:
  - title: Basic Single Column Picker
    code:
      - content: |-
          Ti.UI.backgroundColor = 'white';
          var win = Ti.UI.createWindow({
            exitOnClose: true,
            layout: 'vertical'
          });

          var picker = Ti.UI.createPicker({
            top:50
          });

          var data = [];
          data[0]=Ti.UI.createPickerRow({title:'Bananas'});
          data[1]=Ti.UI.createPickerRow({title:'Strawberries'});
          data[2]=Ti.UI.createPickerRow({title:'Mangos'});
          data[3]=Ti.UI.createPickerRow({title:'Grapes'});

          picker.add(data);
          picker.selectionIndicator = true;

          win.add(picker);
          win.open();

          // must be after picker has been displayed
          picker.setSelectedRow(0, 2, false); // select Mangos
        language: js
    intro: >-
      Create a one-column, platform-specific style, picker and automatically
      select a row.
  - title: Multi-Column Picker
    code:
      - content: |-
          Ti.UI.backgroundColor = 'white';
          var win = Ti.UI.createWindow({
            exitOnClose: true,
            layout: 'vertical'
          });

          var picker = Ti.UI.createPicker({
            top:50,
            useSpinner: true
          });
          picker.selectionIndicator = true;

          var fruit = [ 'Bananas', 'Strawberries', 'Mangos', 'Grapes' ];
          var color = [ 'red', 'green', 'blue', 'orange' ];

          var column1 = Ti.UI.createPickerColumn();

          for(var i=0, ilen=fruit.length; i<ilen; i++){
            var row = Ti.UI.createPickerRow({
              title: fruit[i]
            });
            column1.addRow(row);
          }

          var column2 = Ti.UI.createPickerColumn();

          for(var i=0, ilen=color.length; i<ilen; i++){
            var row = Ti.UI.createPickerRow({ title: color[i] });
            column2.addRow(row);
          }

          picker.add([column1,column2]);

          win.add(picker);

          win.open();

          // must be after picker has been displayed
          picker.setSelectedRow(0, 2, false); // select Mangos
          picker.setSelectedRow(1, 3, false); // select Orange
        language: js
    intro: >-
      Create a two-column, platform-specific style, picker and automatically
      select a row in

      each column.
  - title: Date Picker
    code:
      - content: |-
          Ti.UI.backgroundColor = 'white';
          var win = Ti.UI.createWindow({
            exitOnClose: true,
            layout: 'vertical'
          });

          var picker = Ti.UI.createPicker({
            type:Ti.UI.PICKER_TYPE_DATE,
            minDate:new Date(2009,0,1),
            maxDate:new Date(2014,11,31),
            value:new Date(2014,3,12),
            top:50
          });

          win.add(picker);
          win.open();

          picker.addEventListener('change',function(e){
            Ti.API.info("User selected date: " + e.value.toLocaleString());
          });
        language: js
    intro: Create a date picker and handle the subsequent user action.
  - title: Date Picker using showDatePickerDialog() (Android only)
    code:
      - content: |-
          Ti.UI.backgroundColor = 'white';

          var picker = Ti.UI.createPicker({
            type:Ti.UI.PICKER_TYPE_DATE,
            minDate:new Date(2009,0,1),
            maxDate:new Date(2014,11,31),
            value:new Date(2014,3,12)
          });

          picker.showDatePickerDialog({
            value: new Date(2010,8,1),
            callback: function(e) {
              if (e.cancel) {
                Ti.API.info('User canceled dialog');
              } else {
                Ti.API.info('User selected date: ' + e.value);
              }
            }
          });
        language: js
    intro: >-
      Create a date picker that is automatically displayed as a modal dialog and
      handle the

      subsequent user action.
---

# Titanium.UI.Picker

A control used to select one or more fixed values.


| Android | iOS |
| ------- | --- |
| ![Android](/images/picker_android.png) | ![iOS](/images/picker_ios.png) |

Use the [Titanium.UI.createPicker](/api/titanium/ui) method or Alloy **`<Picker>`** element to create a picker control.

On Android, the `useSpinner` property must be enabled to support multiple columns.
By default, the spinner is automatically sized to fit its content and can overflow
to additional spinner rows. The size of the picker can be adjusted with the `width`
and `height` properties, but may omit picker columns or cut off picker rows
if the size is set too small. This property is deprecated. Please use the default
Android native "dropdown" style by not setting `useSpinner` to `true`.

On iOS, the `height` property is only available in iOS 9 and later.
By default, the size of the picker, including its background, is fixed at the
same height as the iPhone keyboard to respect the
[iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/#//apple_ref/doc/uid/TP40006556-CH15-SW3).
The default `width` on iOS is 320px and the `height` is 228px.
The contents of the picker are sized to fit the picker, which may cut off text
in the picker rows. Adding views to picker rows is also supported on iOS.

On iPad, Apple recommends using a picker only in a popover.  Since the size of the picker
cannot be adjusted, it is not suitable for the main screen.

**Note:** you can only set the [columns](Titanium.UI.Picker.columns) property for the plain picker.
If you set the [type](Titanium.UI.Picker.type) property to anything else except
`Titanium.UI.PICKER_TYPE_PLAIN`, you cannot modify the picker's columns.


**Extends:** `Titanium.UI.View` · **Since:** 0.8 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

