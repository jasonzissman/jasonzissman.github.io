---
layout: post
title:  "GraphQL API Discrepancy"
date:   2022-03-16 02:34:00 -0600
categories: Software Development, GraphQL
published: true
---

This is a situation behavior impact (SBI) review of a technical problem that I recently encountered working on a web application.

## Situation

System ABC is responsible for managing widgets. The system has a Fetch API (GraphQL) for fetching widget records and a Create API (REST) for creating widget records. Both APIs interact with the same document database and use the same schema to define what a widget record looks like. The schema defining a widget has many properties including a "tags" property which itself is a open-ended map of strings to strings.

![System ABC Architectural Diagram](/assets/images/system-abc-diagram.png)

Users routinely invoke the Create API to create records with tags successfully. Tens of thousands of records with tags already exist with tags; however, users report they are unable to retrieve a record's "tags" from the Fetch API. They are also unable to filter based on a record's "tags" in the Fetch API. In both cases, the API returns an error indicating that the GraphQL request is malformed. This means the existing tags are valuable but clients have no way to fetch them.

Schema Definition:

```json
{
  "$id": "https://jasons-application.com/the-defining-schema.json",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "tags": {
      "type": "object",
      "patternProperties": {
        ".*": {
          "type": "string"
        }
      }
    }
  }
}
```

Sample Record:

```json
{
  name: "record one",
  tags: {
    /** Can be any key value pair!!! **/
    foo: "bar",
    some: "value"
  }
}
```

## Behavior
 
### 1. Understand Technical Causes
 
GraphQL does not support open-ended schema definitions like maps of strings to strings. This is why filtering and fetching of the tags property is broken.
 
### 2. Understand Systemic Causes

- The Fetch API and Create API use different technologies (GraphQL vs REST) which apply schema rules differently.
- There is a slow feedback loop in between schema definition and first schema usage (by test or by real client).

### 3. Brainstorm Potential Solutions

- Programmatically seed map keys to GraphQL on API startup
- Pull in third party library (graphql-type-json)
- Changed schema.tags from map to array of strings (<<< **winner**)

### 4. Apply Changes

- Changed schema.tags from map to array of strings
- Reformatted existing records' tags from maps to string arrays (following name=value format)
- Designed integration tests which tested all fields in a schema
- Recommended GraphQL for Create API (future effort)

## Impact
 
- New users able to fetch/filter tags as required
- Existing records can be queried/filtered via existing tags 
- Faster schema feedback loop reduces chances of similar problems happening again