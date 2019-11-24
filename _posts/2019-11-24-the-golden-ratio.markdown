---
layout: post
title:  "The Golden Ratio"
date:   2019-11-24 10:31:00 -0600
categories: Software Development
published: true
---

I frequent [Reddit](https://reddit.com){:target="_blank"} as part of my daily internet routine. I trust the upvote system and the collective knowledge of the large userbase to provide me the freshest news, the most interesting opinons, and the funniest of memes.

A few years back Reddit introduced the concept of "Reddit Gold". Basically, users could purchase a gold icon from Reddit and award it to any comment or post of their liking. It was used as a means of recognizing users for their high quality content (e.g. very helpful information, or maybe a good joke). If you see gold on a post, it usually means it was valuable to many people and should be read.

Over time I noticed a disproportionate amount of golds being awarded in one of the subreddits I frequent - `r/politics`. I partly suspected the system was being gamed. The political nature of the subreddit lent to it being a desirable area of influence for different parties. Reddit gold, in some senses, is a form of influence.

Consequently I created a simple project meant to determine which subreddits have the highest gild-to-subscriber ratio.

To compute this ratio, we take (number of Gilds) / (number of subscribers x 10,000,000). In human-readable form, this equates to number of gilds per 10,000,000 subscribers. The higher the number, the more gildings we see in relation to the subreddit's size.

Today marks my first complete week with the project. I made many improvements over time, but after a week I wanted to share my initial results.

_Note_ I learned early on that smaller subreddits have a much higher gold-to-subscriber ratio, but this week's results do provide insight into which of the "most visible" subreddits are awarding disproportionate amounts of gold.

This data represents posts in the top 60 most-subscribed subreddits from November 16th, 2019 through November 22nd, 2019. The measurement in question is the `cumulative average gildings per 10,000,000 subscribers per day` - a representation of how much gold the subreddit issued relative to its subscription base.

![Initial Results](/assets/images/2019-11-24.jpg)

Notice that `r/politics` won by a mile. This week saw public US predential impeachment hearings which may explain the activity.

`r/announcements` always seems to be highly gilded. `r/blog` came in third. After this - you see an evening out of data.

[Animation created with Flourish](https://public.flourish.studio/visualisation/983347/){:target="_blank"}