---
title: Logger Class
weight: '60'
---

# Logger Class

The Logger class contains methods and properties for writing out items to the log file inside Studio.

## Usage

Examples of how you might interact with methods of the Logger class.

### Static:

```
require 'ruble'
require 'ruble/ui'

Ruble::Logger.log_level = :trace

command 'Tidy' do |cmd|
  cmd.output = :replace_document
  cmd.input = :document
  cmd.invoke do |context|
    Ruble::Logger.trace "trace"
    Ruble::Logger.log_info "Info"
    Ruble::Logger.log_warning "Warning"
    Ruble::Logger.log_error "Error"
  end
end
```

## Logger Methods

Logger objects have the following static methods:

| Property | Description |
| --- | --- |
| `log_level` | Sets the current log level to one of none, trace, info, warning, or error. |
| `log_error(message)` | Write out an error message to the log file. |
| `log_warning(message)` | Write out a warning message to the log file. |
| `log_info(message)` | Write out an info message to the log file. |
| `trace(message)` | Write out a trace message to the log file. |
