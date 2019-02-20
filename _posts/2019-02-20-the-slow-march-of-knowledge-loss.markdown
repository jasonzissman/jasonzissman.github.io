---
layout: post
title:  "The Slow March of Knowledge Loss"
date:   2019-02-20 06:36:00 -0600
categories: Software Career Development
published: true
---

# Or, How to let Technical Debt Ruin Your Day

When I started working at my current employer I was assigned to work on one of the company's newer customer-facing projects. The project was one year old by the time I came around and already had an established technology stack, design, and release process. The other developers working on the project were all the original team and had a very clear picture of how that stack, design, and release processe functioned.

Fast forward 4.5 years. None of the original developers are on the team anymore. The project's architect has moved on to different projects, and a new architect put in place. The development manager has changed roles (full disclosure, I am now the dev manager). Worst of all, the full details of the stack, design, and release process are now much more foreign to the team actively working on the project.

This is a recipe for headaches that I am sure many development teams have encountered. Slowly but gradually the core knowledge of the system fades away. We start hearing comments like _the JBoss platform has just always worked, I'm not sure what's wrong_ and _the original intent of the code was unclear so I just put my changes down and it seemed to worked_. A growing series of statements like this were made, by yours truly included, over a long enough time that it finally bit us in production this week. 

Four days and three hot-fixes later, our production system seems to be functional but the team does not feel confident about it. Late night and early morning deploys have become common. Product owners are wondering why influxes of customer tickets are coming in every time we push a "fix".

## A Retrospective

So what exactly went wrong? There are a number of items.

* Our feature work for the project focused 95% on UI modernization and rewrites for nearly a year. Only the most superficial of backend changes were ever made during this time, leaving 50% of the codebase untouched for a year with new developers moving in and out. *We neglected to stay up to date on our own code.*

* The stack in use slowly fell out of date. What was top-of-the-line 5 years ago is now ancient. Not only is the technology itself old, but the company-defined build and deploy process has fallen out of favor and few people around know the low-level details of it. *We neglected to stay up to date on our server stack and deploy process*

* While we heavily promote clean and readable code, we seem to focus on it at the micro level. Pull any individual piece of our code and you'll see good naming conventions, short methods with single purposes, etc. But we fail to convey the same cleanliness at the macro level. *The design of a large feature, its flow through the codebase, is not intuitive to new developers on the team.* 

## What Can We Do Better

1. Technical debt improvements need to be routinely scheduled. 4 year old versions of a stack should be aggressively updated.
2. Automated acceptance tests need to be more robust.
3. Unfamiliarity with the code needs to be tackled heads on with targeted, merciless refactors. While this will be painful for the developer who first dives in, ultimtately it will grow the knowledge of our own codebase.

## In Conclusion

As a development organization there is always a tradeoff in between delivering timely and meaningful features and maintaining the state of your applications/codebases. The two are not mutually exclusive; however, they both require time and attention. To let the maintenance of your codebase fall too far behind will directly impact your customers and should be avoided appropriately.