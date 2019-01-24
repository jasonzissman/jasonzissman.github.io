---
layout: post
title:  "That one time I lost half a day after overriding assertEquals() in a unit test"
date:   2019-01-24 07:25:00 -0600
categories: Software Career Development
published: false
---

When I was a junior engineer at Zebra Technologies, I was backfilling some unit tests for a trivial feature that I was working on (I oftened worked on trivial features at that point). During my testing, I was seeing some really strange behavior. The following assertion was failing:

```java
assertEquals("should be equal", object1.toString(), object2.toString());
```

// Need to figure out how exactly I overrode assertEquals()