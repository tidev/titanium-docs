# Collator

<TypeHeader/>

## Overview

A collator is used to perform a localized string compare or sort using a given language locale.

For more detail, see the MDN website about
[Intl.Collator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator).

## Examples

### Array Sorting

``` js
// Sort using collator. Array becomes: [ 'a', 'b', 'c' ]
const elements = [ 'c', 'b', 'a' ];
elements.sort(new Intl.Collator().compare);
console.log(`Sorted Elements: ${elements}`);
```

### String Compare Sensitivity

``` js
// Case sensitive and accent sensitive string matching.
// This is the default collator sensitivity.
console.log('Variant Sensitivity:');
let collator = new Intl.Collator(Ti.Locale.currentLocale, { sensitivity: 'variant' });
console.log(collator.compare('a', 'a') === 0);  // Equal
console.log(collator.compare('a', 'á') === 0);  // Not Equal
console.log(collator.compare('a', 'A') === 0);  // Not Equal
console.log(collator.compare('a', 'b') === 0);  // Not Equal

// Match strings that are the same case, ignoring accent marks.
console.log('Case Sensitivity:');
collator = new Intl.Collator(Ti.Locale.currentLocale, { sensitivity: 'case' });
console.log(collator.compare('a', 'a') === 0);  // Equal
console.log(collator.compare('a', 'á') === 0);  // Equal
console.log(collator.compare('a', 'A') === 0);  // Not Equal
console.log(collator.compare('a', 'b') === 0);  // Not Equal

// Do an accent sensitive match, ignoring case.
console.log('Accent Sensitivity:');
collator = new Intl.Collator(Ti.Locale.currentLocale, { sensitivity: 'accent' });
console.log(collator.compare('a', 'a') === 0);  // Equal
console.log(collator.compare('a', 'á') === 0);  // Not Equal
console.log(collator.compare('a', 'A') === 0);  // Equal
console.log(collator.compare('a', 'b') === 0);  // Not Equal

// Match strings having same base letters, ignoring case and accents.
console.log('Base Sensitivity:');
collator = new Intl.Collator(Ti.Locale.currentLocale, { sensitivity: 'base' });
console.log(collator.compare('a', 'a') === 0);  // Equal
console.log(collator.compare('a', 'á') === 0);  // Equal
console.log(collator.compare('a', 'A') === 0);  // Equal
console.log(collator.compare('a', 'b') === 0);  // Not Equal
```

<ApiDocs/>
