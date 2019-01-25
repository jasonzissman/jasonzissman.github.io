---
layout: post
title:  "That one time I lost 2 hours after overriding assertEquals() in a unit test"
date:   2019-01-24 07:25:00 -0600
categories: Software Career Development
published: true
---

> There is no graceful way to be a junior engineer.

When I was a new developer at Zebra Technologies, I was backfilling some unit tests for a trivial feature that I was working on (I oftened worked on trivial features at that point in my career). During my unit testing, I was seeing some really strange behavior. The following assertion was inexplicably passing:

```java
String firstResult = "100";
int secondResult = 100;
AssertEquals(firstResult, secondResult); // passes (all green)
```

This test should have failed. Now, to those well-versed in Java, you can immediately tell something is afoul. Comparing Strings against ints? An upper-case method name? Definitely not following convention. For a junior engineer, however? Easily missed mistakes.

So, I concluded that I must have discovered some weird Java address vs value thing, or something, so I tweaked the test a little:

```java
AssertEquals("100", 100); // still passes (all green)
```

But it stilled passed! What was going on? Surely the string "100" and the int `100` were not the same thing. Did I discover some magical Java casting magic in JUnit?

Sheepishly, I approached a senior engineer on the team and asked them if Java/JUnit would automatically cast strings to integers during assertions. The senior laughed and said no, that's ridiculous, and he told me to look more closely at my test. 

So I did. I reran the tests a dozen times. I added more, similar cases. I restarted Eclipse. I even restarted my computer. The tests always passed. 

```java
AssertEquals("1", 1);
AssertEquals("999", 999);
AssertEquals("100", 100); // still passes (all green)
```

At this point I was terrified of asking my coworker for help again. This seemed like a fundamental Java behavior. I must have just been missing something, and importantly, _I didn't want to look stupid_.

I started Googling. Not a nice, succint, efficient Google search; rather, it was that early-stage junior developer Googling. Irrelevant search terms, copy/pasting full stack traces containing super-specific and localized code. I wasted hours trying to figure out why "100" would equal `100` in Java. Both Google and StackOverflow, in all their power, were of no use to me.

Finally, I approached my coworker again. He seemed frustrated but came over to my machine. Within 5 seconds he spotted this auto-generated beauty at the end of my test file:

```java
private void AssertEquals(Object arg1, Object arg2) {
    // TODO Auto-generated method stub
}
```

I must have accidentally triggered one of Eclipse's many helpful hotkeys. This one decided that since I incorrectly capitalized the method `assertEquals(firstArg, secondArg)` that I must have wanted a new version of the method automatically generated for me, out of view, at the bottom of the file. Where I would never see it. For 2 hours.

There is no graceful way to be a new engineer. You just have to make your mistakes and keep pushing onward.