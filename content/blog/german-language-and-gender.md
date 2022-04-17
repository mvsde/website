---
id: e23a0cdd-2f0b-484f-9cd9-9f11196820c2
title: The German language and gender
description: I’m thinking a lot about how I can express myself inclusively, be it in written or spoken word.
date: 2020-10-17 12:39:00
---

I’m thinking a lot about how I can express myself inclusively, be it in written or spoken word. [For English this is a solved problem](https://en.wikipedia.org/wiki/Singular_they), all it takes is the willpower to _actually do it_. But my native language – German – has a unique challenge: Every noun is attached to one or sometimes multiple genders. These genders are the well-known _feminine_, _masculine_, and _neuter_.

## The problem

While English consents to the neutral singular _they_, this isn’t grammatically possible in German. Take the following example which may sound a bit contrived but illustrates the problem. The highlighted words mark gendered nouns:

> **The teacher** needs a pen. **They** want to assess the exam.

This is a perfectly fine expression in English that becomes clear through context. Now compare this to the German translation:

> {% lang "de", "**Der Lehrer** braucht einen Stift. **Er** möchte die Prüfung korrigieren." %}

This works and at first glance looks good. But translated back to English, something has been lost:

> **The teacher** needs a pen. **He** wants to assess the exam.

The German version uses the so-called _generic masculine form_ because “{% lang "de", "Lehrer" %}” (teacher) is masculine. A _generic feminine form_ exists for feminine nouns and a _generic neutral form_ for the neuter.

As mentioned the English solution for this problem is the singular _they_, which isn’t directly translatable to German. But don’t give up hope just yet, there are a few solutions for the German language.

## Gender pair

A straightforward albeit verbose technique is enumeration of every gender. This is possible because a lot of German nouns have a feminine and masculine form.

> {% lang "de", "**Die Lehrerin** oder **der Lehrer** braucht einen Stift. **Sie** oder **er** möchte die Prüfung korrigieren." %}

The English translation sounds like this:

> **The teacher** needs a pen. **She** or **he** wants to assess the exam.

The gender pair has a few downsides:

* It’s exceedingly long but can be shortened (“{% lang "de", "Die Lehrerin oder der Lehrer" %}” becomes the rather unaesthetic “{% lang "de", "Die/Der Lehrer/-in" %}”).
* It assumes a binary gender (female or male) and thus excludes non-binary people.
* [Compound nouns](https://en.wikipedia.org/wiki/German_nouns#Compounds) – another German specialty – may have parts with different genders that each need to be transformed.

## Gender star

Instead of enumerating all possible genders which becomes unwieldy very quickly, an alternative is the “[gender star](https://en.wikipedia.org/wiki/Gender_star).” The star is placed inside a noun to delimit the genders and include non-binary people:

> {% lang "de", "**Die&ast;der Lehrer&ast;in** braucht einen Stift. **Sie&ast;er** möchte die Prüfung korrigieren." %}

The gender star is great because it is concise and inclusive, but has its own downsides:

* It’s hard to pronounce in spoken German, some [insert a short pause](https://en.wikipedia.org/wiki/Glottal_stop) for the star.
* It’s only usable for nouns with a similar female and male form, so the star has a place to be inserted into.
* Overuse of the gender star makes texts harder to read.

## Neutralization

Despite having a rather “brutal”-sounding name, neutralization is an elegant way of dealing with edge cases. The language becomes a lot less personal and more _neutral_ as the name suggests.

Neutralization can be achieved in a few ways. The most basic is replacing a noun with a more generic one without implied gender:

> {% lang "de", "**Die Lehrkraft** braucht einen Stift. Sie möchte die Prüfung korrigieren." %}

The word “{% lang "de", "Lehrkraft" %}” (teaching staff) is grammatically feminine but does not imply a gender like “{% lang "de", "Lehrerin" %}” (female teacher) or “{% lang "de", "Lehrer" %}” (male teacher).

Rephrasing, relative clauses, and passive voice are additional tools for gender neutral language:

> {% lang "de", "**Die Lehrkraft** braucht einen Stift, um die Prüfung zu korrigieren." %}

> {% lang "de", "Für die Korrektur der Prüfung, braucht **die Lehrkraft** einen Stift." %}

If the expression doesn’t need an article, generic nouns can be formed from adjectives:

> {% lang "de", "**Lehrende** brauchen einen Stift, um Prüfungen zu korrigieren." %}

Note that this example has a different meaning than the original one. It translates into English as follows:

> **Teachers** need a pen to assess exams.

Neutralization is incredibly powerful and flexible but needs more rephrasing than gender pairs or stars:

* It’s generally used in written German due to the complexity.
* It can lead to unwieldy relative clauses and passive voice.

## The solution

As of late 2020 all three approaches are used in real-world writing and speaking. The debate over the best solution is still ongoing. Maybe there is no “one size fits all” for a problem this all-encompassing. After all, gendered nouns are integral to the German language. This of course doesn’t mean we should “just ignore” the issue and go on with our lives. On the contrary. Inclusivity in language cannot be emphasized enough. It’s literally what we use every day to include and – unfortunately – exclude people.

The website [Genderleicht.de (German)](https://www.genderleicht.de) has lots of tips for writing and speaking discrimination-free.
