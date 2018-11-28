---
breadcrumbLabel: FeedbackGenerator
sidebar: auto
---

# Titanium.UI.iOS.FeedbackGenerator

<ProxySummary/>

## Overview

On supported devices, haptics provide a way to physically engage users with tactile feedback that gets attention and
reinforces actions. Some system-provided interface elements, such as pickers, switches, and sliders, automatically provide
haptic feedback as users interact with them. Your app can also ask the system to generate different types of haptic feedback.
iOS manages the strength and behavior of this feedback.

There are three different kind of feedback generators that can be used for different interaction scenarios:
 
  1. **Selection Feedback**: Indicates that a task or action, such as depositing a check or unlocking a vehicle, has completed,
     failed, or produced a warning of some kind.. This feedback type can be used when specifying the
     <Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_SELECTION> constant in the `type` property of the feedback generator.

  2. **Impact Feedback**: Provides a physical metaphor that complements the visual experience. For example, the user might feel
     a thud when a view slides into place or two objects collide. This feedback type can be used when specifying the
     <Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT> constant in the `type` property of the feedback generator. Note that if you use
     this generator type, you also have to specify the `style` property that can be one of the
     <Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT>, <Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_MEDIUM> or
     <Titanium.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_HEAVY> constant.

  3. **Notification Feedback**: Indicates that the selection is actively changing. For example, the user feels light taps while
     scrolling a picker wheel. This feedback is intended for communicating movement through a series of discrete values, not
     making or confirming a selection. This feedback type can be used when using the <Titanium.UI.iOS.FEEDBACK_GENERATOR_TYPE_NOTIFICATION>
     constant in the `type` property of the feedback generator.
     
**Example**
When clicking a button you should trigger an impact feedback as displayed below.

    var generator = Ti.UI.iOS.createFeedbackGenerator({
      type: Ti.UI.iOS.FEEDBACK_GENERATOR_TYPE_IMPACT,
      style: Ti.UI.iOS.FEEDBACK_GENERATOR_IMPACT_STYLE_LIGHT
    });
    generator.impactOccurred();     
  
We're not using `generator.prepare()` here because we're triggering the feedback immediately. When you know a feedback generator is triggered within a couple seconds you should use `prepare()` to know for sure the timing is correct.

See also:

  * [iOS Developer Library: Haptic Feedback](https://developer.apple.com/ios/human-interface-guidelines/interaction/feedback/)

<ApiDocs/>
