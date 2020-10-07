# Global.Intl.NumberFormat

<TypeHeader/>

## Overview

A `NumberFormat` object is used to convert a `Number` value to a localized numeric string.
It provides various formatting options controlling the number of integer and fractional digits
to be displayed. It can also output currency values, percentage based values, and
scientific notation.

For more detail, see the MDN website about
[Intl.NumberFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat).

## Examples

### Format with Leading Zeros

``` js
// Set up to pad first 3 integer digits with zeros if needed.
const formatter = new Intl.NumberFormat(Ti.Locale.currentLocale, {
    minimumIntegerDigits: 3,
    useGrouping: false
});

// Logs: 000
console.log(formatter.format(0));

// Logs: 001
console.log(formatter.format(1));

// Logs: 001.23
console.log(formatter.format(1.23));

// Logs: 12345
console.log(formatter.format(12345));
```

### Round to Significant Digits

``` js
// Round up to 3 significant digits.
// All trailing non-fractional digits will be zero.
const formatter = new Intl.NumberFormat(Ti.Locale.currentLocale, {
    maximumSignificantDigits: 3,
    useGrouping: false
});

// Logs: 12300
console.log(formatter.format(12345.6));

// Logs: -12300
console.log(formatter.format(-12345.6));

// Logs: 1.23
console.log(formatter.format(1.23456));
```

### Currency Format

``` js
// Set up currency style format options.
const options = {
    style: 'currency',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    useGrouping: true
};

// Format in dollars in USA. Logs: $1,000.00
// Note that the "currency" option is required.
let formatter = Intl.NumberFormat('en-US', Object.assign({ currency: 'USD' }, options));
console.log(formatter.format(1000));

// Format in euros in USA. Logs: €1,000.00
formatter = Intl.NumberFormat('en-US', Object.assign({ currency: 'EUR' }, options));
console.log(formatter.format(1000));

// Format in euros in Germany. Logs: 1.000,00 €
formatter = Intl.NumberFormat('de-DE', Object.assign({ currency: 'EUR' }, options));
console.log(formatter.format(1000));

// Format in dollars in Germany. Logs: 1.000,00 $
formatter = Intl.NumberFormat('de-DE', Object.assign({ currency: 'USD' }, options));
console.log(formatter.format(1000));
```

### Percentage Format

``` js
// Set up percentage style numeric formatting.
const formatter = new Intl.NumberFormat(Ti.Locale.currentLocale, {
    style: 'percent',
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
    useGrouping: false
});

// Logs: 25.0%
console.log(formatter.format(0.25));

// Logs: 100.0%
console.log(formatter.format(1.0));

// Logs: 1234.5%
console.log(formatter.format(12.345));

// Logs: 1234.6%
// Since value exceeds "maximumFractionDigits" of 1, it is rounded.
console.log(formatter.format(12.3456));
```

### Scientific Notation (Android Only)

``` js
// Logs: 1.235E5
// Decimal point will be a period, comma, or space depending on the locale.
const formatter = new Intl.NumberFormat(Ti.Locale.currentLocale, { notation: 'scientific' });
console.log(formatter.format(123456.7));
```

<ApiDocs/>
