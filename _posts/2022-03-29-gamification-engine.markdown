---
layout: post
title:  "Gamification Engine Matching Algorithm"
date:   2022-03-29 20:01:00 -0600
categories: Software Development
published: true
---

A year ago I [started writing a gamification engine](https://github.com/jasonzissman/gamification-engine). The goal was to create a generic solution that could facilitate common gamification activities (badge systems, awards, trophies, etc.) in other applications. I took the extra step of [documenting the initial design process](https://jasonzissman.medium.com/designing-a-scalable-gamification-system-part-1-183b12de59f7).

The primary responsibilities of the engine were to let admins define criteria describing the completion of a goal and, over time, ingest client applications events (via HTTP request or Kafka topics) that were relevant to goal completion. If a received event fulfilled the minimum requirements of a goal, then the user associated with the event would be marked as having 'achieved' the goal.

For example: an admin could define a goal such as "award a 'Power User' badge if a user logs in 5 times while on a mobile device" and any user would receive that badge when they logged into the app 5 times from a mobile device. As a user interacted with the application, the application sends various events to the gamification engine.  Underneath the hood, the gamification engine would be responsible for scanning all inbound events to see if any contained the goal criteria `{ action: "log-in", device: "mobile" }`. In the case that one event included *at least* the properties indicated in the criteria above, then the user would be marked as having made progress towards the goal.

This design created a robust feature set:
- A detailed event schema is not required since irrelevant events are just ignored
- Users could be inferred during event ingestion and did not have to be defined explicitly
- A single event could impact progress towards multiple goals for multiple users
- Anything could make progress towards goals (not just 'people')

## Problem

An integral part of this flow was for the gamification engine to accurately and quickly determine when an incoming event fulfilled criteria for an existing goal. When presented with an irrelevant event, the engine had to discard it as quickly as possible in order to not hog resources. 

I designed multiple algorithms relying on either database queries (Mongo) or custom in-code (JavaScript) lookup constructs. Each attempt to solve this problem faced the same two concerns:

1. The algorithms were not efficient as the number of goals/criteria/events increased
2. The algorithms had many implicit couplings that made the code hard to maintain (e.g. disparate sections call sort() and would break if done out of order)

## A Different Approach

I am revisiting this problem a year older and wiser. Recent work with graph databases has increased my awareness on the potential utility of the graph data model (whether used simply as a data structure or within a full blown graphDb). Specifically, I now view this problem as one that can be expressed in terms of a simple graph:

- A goal has relationships with multiple criteria `(goal) -[:HAS_CRITERIA]-> (criteria)`
- An event has one or more key/value pairs that potentially map to criteria
- If 100% of a goal's criteria are captured within an event, that we say the criteria has been met
- We can traverse a graph to check if 100% of a goal's [HAS_CRITERIA] relationships map to criteria which are a subset of the inbound event

The beauty of a graph-based solution is that the relationships between goals and criteria are created at data-ingestion and not at query time. This means that it is trivial to identify all goals whose complete set of criteria are satisfied to any received event. Conceptually, when an event is received, a graph performs the following steps:

1. Identify all criteria in the graph equal to the field/value pairs in the event (an indexed search)
2. Identify all goals with relationships to those criteria (simple pointer references)
3. Filter the goals to only return those whose entire criteria exist within the array identified in step #1.

We can use this approach to quickly and efficiently find all goals whose criteria is completely fulfilled by a received event. Here are goals and criteria visualized in Neo4j:

![Visualized Goal and Criteria Graph](/assets/images/graph.png)

## Next Steps

So, a graph representation of the data should lead to a suitable 

- Compare/constrast on an in-memory graph solution or delegation to a GraphDB
- Determine the big-O resource consumption as different parameters increase
- Performance test the solution

## Sample Neo4j Commands

The following Cypher commands demonstrate the creation of goals/criteria and queries to find goals relevant for inbound events.

```cypher
// Create sample goals, criteria, and their relationships
CREATE (g1:Goal { name: "Log in"})
CREATE (g2:Goal { name: "Log in on Mobile"})
CREATE (g3:Goal { name: "View Page 123"})
CREATE (c1:Criteria { expression: "action=log_in"})
CREATE (c2:Criteria { expression: "device=mobile"})
CREATE (c3:Criteria { expression: "action=view_page"})
CREATE (c4:Criteria { expression: "page_id=123"})
CREATE (g1)-[:HAS_CRITERIA]->(c1)
CREATE (g2)-[:HAS_CRITERIA]->(c1)
CREATE (g2)-[:HAS_CRITERIA]->(c2)
CREATE (g3)-[:HAS_CRITERIA]->(c3)
CREATE (g3)-[:HAS_CRITERIA]->(c4)

// Find events fully satisfied by "logged in on desktop" received payload
WITH
  ["action=log_in","device=desktop", "foo=bar"] as receivedEventProps
MATCH
  (g:Goal)-[:HAS_CRITERIA]->(c:Criteria)
WHERE
  ALL(c IN [(g)-[:HAS_CRITERIA]->(candidateCriteria:Criteria) | candidateCriteria] WHERE c.expression IN receivedEventProps)
RETURN
  g

// Find events fully satisfied by "logged in on mobile" received payload
WITH
  ["action=log_in","device=mobile","foo=bar"] as receivedEventProps
MATCH
  (g:Goal)-[:HAS_CRITERIA]->(c:Criteria)
WHERE
  ALL(c IN [(g)-[:HAS_CRITERIA]->(candidateCriteria:Criteria) | candidateCriteria] WHERE c.expression IN receivedEventProps)
RETURN
  g

// Find events fully satisfied by "viewed page 789" received payload
WITH
  ["action=view_page","page_id=789","device=mobile","foo=bar"] as receivedEventProps
MATCH
  (g:Goal)-[:HAS_CRITERIA]->(c:Criteria)
WHERE
  ALL(c IN [(g)-[:HAS_CRITERIA]->(candidateCriteria:Criteria) | candidateCriteria] WHERE c.expression IN receivedEventProps)
RETURN
  g
```