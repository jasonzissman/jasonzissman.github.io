---
layout: post
title:  "Taking On Accessibility"
date:   2019-05-25 06:27:00 -0600
categories: Software Development
published: true
---

A growing number of companies are adopting accessibility initiatives for their user-facing applications. The catalyst is often a customer request or changing legal requirements. As more businesses implement a digital interface for their products or services, appropriate considerations must be made for users with impairments to consume that digital interface.

## The goal

Loosely, *accessible applications* are ones that can be _fully experienced_ by populations with different degrees of visual, auditory, and motor impairments. The experience does not be identical for all users; however, the same functionality and information should be made available to all users.

## The difficulty

As a development organization, taking on an accessibility commitment can be daunting. This is especially true when you have legacy products and no team knowledge on the topic. For many of us, the topics of keyboard control, screen readers, and color contrast are foreign. Where do you start?

In early 2018, my teams were presented with such a scenario. Several of our applications had to meet accessibility requirements before a large customer would finalize a purchase. Our teams had limited knowledge of accessibility practices, and our products reflected this lack of knowledge: they were entirely unusable if you didn't have perfect vision and motor skills.

## First: what exactly makes an application accessible?

The answer to this question requires some reflection. How does a user *experience* a website today? Consider the following:

- When you view a Google search results page, you don't just see text results. You see a logical organization and a thousand visual cues. Links have a blue color to indicate that can be clicked. Search results titles are bigger than description text. Supplemental information is to the side, while main search results are in the middle. _How could you perceive these same cues if you could not see?_
![Google Search Results](/assets/images/google-search-results.png)

- When you make a purchase on Amazon, you don't just click the "buy" button. You filter through categories. You compare items against each other. You add items to a cart. You leave reviews on an item. _How would you accomplish these actions if you are physically unable to use a mouse?_
![Amazon Reviews](/assets/images/amazon-review.png)

An underlying goal of accessibility is to make the *entire experience* of an application available to everyone, including those with limited visual, auditory, or motor abilities. As such, an application could be considered accessible when it meets the following guidelines:

1. All information and cues are perceivable and understandable by users with impairments

2. All functionality is operable by users with impairments

These two guidelines manifest in thousands of ways. All links and buttons must be accessible via keyboard access only. All text must be available to screen readers. Any adjacent components must have sufficient color contrast to be legible by those with color-blindness. Each page should have logical organization using headers, titles, and semantic HTML. Notifications, alerts, and state changes must be alerted to a screen reader. This is just a subset of everything that must be considered.

## Why would a company do this?

There are countless benefits to making applications more accessible. Much of it is the same reasoning that a brick and mortar store has wheelchair ramps and handicap parking. Screen reader support and keyboard-only access are simply analogs in the digital space. 

The most salient reason to make your websites accessible include:

1. Increased usage and sales
2. Greatly enhanced perception of brand
3. Accessible designs result in better user experience for users without impairments
4. Codebases for accessible applications tend to be easier to develop and test
5. Your competition is also doing it
6. Legal requirements (e.g. ADA)

Most importantly, the ethical argument: all users, with or without impairments, should reap the benefits of our collective work. 

## Where do we start?

Over the next blog entries, I will detail the path from the beginning (no support whatsoever!) to complete accessibility compliance. I will cover process change, team education, and specific technical considerations.