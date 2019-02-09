---
layout: post
title:  "What Agile Development has Meant to Me"
date:   2019-02-03 06:26:00 -0600
categories: Software Career Development
published: true
---

_Agile_ is one of the many terms that I never heard in college that seems to be ubiquitious in my professional career. 100% of my jobs have been Agile setups. Strangely, while I have never heard of anyone in my office complain about Agile, there are [plenty of examples](https://www.reddit.com/r/explainlikeimfive/comments/5b1fxx/eli5_what_is_agile_development/){:target="_blank"} of people [passionately ripping Agile apart](https://www.reddit.com/r/programming/comments/6rsyrd/in_a_nutshell_why_do_a_lot_of_developers_dislike/){:target="_blank"} online.

The [original Agile manifesto](https://agilemanifesto.org/){:target="_blank"} offers pretty sparse details about what Agile looks like when implemented. It's more of a set of guidelines than an actual process description. The words _story_, _sprint_, and _task_ never show up on the website.

Those who have been in professional software development longer probably have more meaningful insight into the _transition_ it takes to adopt Agile. For me, no such transition ever occurred. It simply has always _been_ Agile development. This fact makes it very difficult for me to put my finger on what Agile development is because, well, I can't confidently say what _it isn't_.

So, as a development manager with 10 years experience in the field, here is my attempt to correlate Agile tenets with what it has actually looked like in practice during my career.

## Welcome Changing Requirements

Requirements change frequently and our teams embrace it for the most part. You'll sometimes hear some frustration from developers if it represents wasted effort, but for the most part we embrace changing requirements especially if we can tell it's better for the end-users. Sometimes this involves mid-iteration changes, and sometimes it involves follow-up stories to "revisit" previous work.

## Deliver Working Software Frequently

Our development organization fills the whole spectrum on release schedules. Our legacy product, the bedrock of our sales, releases every 6 months. It requires massive planning and schedule predictions as well as a huge testing effort at the end. 

Our newer products release on a scheduled 2 week iteration with patch fixes going in from time to time. The development team and customers definitely prefer this faster cycle, and it has proven a great mechanism to get feedback much faster from customers.

## Business and Developers Work Together Daily

This tenet manifests in two forms - the daily standup and impromptu developer meetings with BAs. Both parties make themselves available to answer questions (e.g. the BA needs a difficulty estimate on a proposed feature, or the developer needs clarification on a requirement). Our organization has a pretty healthy relationship in between businses owners and development.

## Build Projects Around Motivated Individuals

This tenet does not ring any bells for me. You can argue that everyone in development is motivated, but there is no guarantee that a specific project's domain will be of interest to a developer. We are firmly set in the educational/classroom/library space and that does not inherently interest everyone.

That being said, we do make efforts at work to maintain modern technology stacks for our projects. More often than not, this entices and interests developers even if the actual business domain does not.

## Use Face-To-Face Conversation to Convey Information

This topic has evolved since I started as a developer. Initially everyone was in the same office every day. This definitely allowed for constant face-to-face conversation for all parties.

Now, however, we live in the era of the remote worker. We only have maybe 25% of development in office on any given day. Many on my team are permanently remote in different parts of the country due to company acquisitions. 

This change has forced us to go out of our way to contact coworkers when questions arise. It's far easier to get lost in a problem and be discouraged from asking questions when you're alone in your room. I often find myself reminding the team to pick up the phone (Skype/Zoom) to talk to coworkers instead of relying on pure text-based mediums like email.

## Working Software is the Measurement of Success

We don't hold many metrics that capturing how "successful" a team or individual is. In this sense, the functionality of our software (and uptime!) is really our guiding light.

On a side note, however, we do track iteration velocity as a side-effect of using VersionOne. I find this becomes a distraction far more often than a useful tool, with PLM sometimes incorrectly projecting "being behind schedule" for the iteration. We keep this sentiment in check for the most part, however.

## Development Practices Must be Sustainable

For me, this idea maps most closely to work schedule and overtime. Our culture is one to never put in overtime unless a true emergency arises. In my 4.5 years at my current company, there has been maybe 1 emergency. If you find yourself having justifications for overtime every week or month, you are doing something fundamentally wrong.

Of course there are small scheduling nuances that you have to account for. Perhaps your pair will be taking PTO tomorrow and you need to finish something, or maybe you need to stay late to write some documentation for a production release the next day. The guideline that I give to my entire team is to never put in more than 40 hours a week, and if you do, communicate with me so we can reduce your hours next week.

## Maintain Technical Excellence and Great Design

We strive to maintain high code quality. This includes great test coverage, following clean-coding principles, and refactoring mercilessly. 

Where we struggle in this aspect is legacy projects. As team members move in bewtween codebases, the high-level design is not always conveyed. This creates interesting spaghetti code that flies in the face of the original design and slows down development progressively. It is a topic that we must continue to work on.

## Simplicity is Essential

I find that working with product owners to accurately represent the amount of work in a custom features (super sexy calendar widget) vs default features (normal browser datepicker) is very effective in keeping things simple. When you can accurately project 2 hours vs. 2 weeks, product owners tend to take the more pragmatic option.

Admittedly, this is a constant battle that we have to keep in mind to prevent slowdowns. I find developers are often the culprits here (Oh yeah, that'll only take 5 minutes to implement).

## Self-Organizing Teams Create Best Designs

Our organizational structure is fairly independent from higher levels. The team has a fair amount of input regarding how to solve technical problems, what guidelines we follow, and how to best maintain quality and speed. Higher levels of management may have input based on experience, but ultimately the team decides.

## Reflect on Performance Regularly

All of our development teams hold retrospectives sporadically, not regularly. We found little value in holding a retrospective every iteration. Rather, we schedule them when we sense there is a throughput problem or team cohesion problem. This usually occurs organically every month or two.