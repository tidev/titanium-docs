# DateTimeFormat

<TypeHeader/>

## Overview

A `DateTimeFormat` object is used to format a `Date` object to a localized date and/or time string.
This will respect the system's current language setting when outputting a full month or weekday name.
It will also respect the current locale's date component ordering such as Month/Day/Year,
Day/Month/Year, and Year/Month/Day.

For more detail, see the MDN website about
[Intl.DateTimeFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).

## Examples

### Output Numeric Date

``` js
// 2020-March-1st
const date = new Date(Date.UTC(2020, 2, 1));

// Logs "3/1/2020" for US English locale.
// Logs "1.3.2020" for German locale.
// Logs "2020/3/1" for Japanese locale.
const formatter = new Intl.DateTimeFormat(Ti.Locale.currentLocale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC'
});
console.log(`Time: ${formatter.format(date)}`);
```

### Output 12-Hour Time

``` js
// 2020-January-1st 08:02:05 PM
const date = new Date(Date.UTC(2020, 0, 1, 20, 2, 5));

// Logs "8:02:05 PM" for English locales.
// Logs "8:02:05 nachm." for German locales.
const formatter = new Intl.DateTimeFormat(Ti.Locale.currentLocale, {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    dayPeriod: 'narrow',
    timeZone: 'UTC'
});
console.log(`Time: ${formatter.format(date)}`);
```

### Output 24-Hour Time

``` js
// 2020-January-1st 08:02:05 PM
const date = new Date(Date.UTC(2020, 0, 1, 20, 2, 5));

// Logs "20:02:05".
const formatter = new Intl.DateTimeFormat(Ti.Locale.currentLocale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'UTC'
});
console.log(`Time: ${formatter.format(date)}`);
```

### Output Localized Weekday Name

``` js
// Log current weekday name (such as "Monday") using system's selected language.
const formatter = new Intl.DateTimeFormat(Ti.Locale.currentLocale, { weekday: 'long' });
console.log(formatter.format(new Date()));
```

<ApiDocs/>
