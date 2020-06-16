---
title: Job Class
weight: '50'
---

# Job Class

The Job class contains methods and properties for interacting with the Jobs inside Studio.

## Usage

Examples of how you might interact with methods of the Job class.

### Static:

```
job = Ruble::Job.new("Speaking..."){ `"#{say_command}"` }
job.schedule
```

## Job Methods

Job objects have the following static method:

| Property | Description |
| --- | --- |
| `new(name)` | The name of the job, followed by the items to run. |

## Example

### Perform a job and wait for results to return

Here we do something similar to the existing command, but instead, we perform the processing inside a job and assign the results to a variable. We wait for the job to finish before returning.

```
require 'ruble'

command "Execute Selection/Line Inserting Results" do |cmd|
  cmd.key_binding = "CTRL+R"
  cmd.output = :insert_as_text
  cmd.input = [ :selection, :line ]
  cmd.invoke do |context|
    result = ""
    job = Ruble::Job.new("Running...") { result += IO.popen(STDIN.read, 'r') {|io| io.read } }
    job.schedule # start the job
    job.join # wait for it to finish
    return result
  end
end
```
