---
title: Browser Class
weight: '10'
---

# Browser Class

The Browser class contains methods and properties for interacting with a browser inside Studio.

## Usage

Examples of how you might interact with methods of the browser class.

### Instance:

```
context.browser.open(url, :browser => :default)
```

## Browser Methods

Currently, the Browser object only supports a single method:

| Method | Description |
| --- | --- |
| `open(url, BROWSER_OPTIONS_SPECIFIER)` | Open a new browser pointed at the specified `url`, using the options in the BROWSER\_OPTIONS\_SPECIFIER hash. |

## BROWSER\_OPTIONS\_SPECIFIER

All the options are, as the name implies, optional.

| Key | Description |
| --- | --- |
| `:new_window` | Boolean which specifies whether or not to open a new browser window (tab) or not. The default is `false`, which will re-use the last browser window opened if possible. |
| `:title` | The title of the browser window. It can be overridden by the HTML within the browser window. |
