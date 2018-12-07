# Titanium.Calendar.RecurrenceRule

<ProxySummary/>

## Overview

On Android there is no option to have multiple recurrence rules set for the same event.
Android always uses only the first element in the array passed to [recurrenceRules](Titanium.Calendar.Event.recurrenceRules).

In case of having [daysOfTheWeek](Titanium.Calendar.RecurrenceRule.daysOfTheWeek) and [daysOfTheMonth](Titanium.Calendar.RecurrenceRule.daysOfTheWeek)
for an event with a recurrence rule of type [RECURRENCEFREQUENCY_MONTHLY](Titanium.Calendar.RECURRENCEFREQUENCY_MONTHLY) only 
[daysOfTheWeek] will be used.

<ApiDocs/>
