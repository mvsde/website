---
title: Tackling Temporal Troubles
description: The JavaScript Date API is bad, so bad in fact that developers rather use third-party libraries instead. It’s time for an upgrade that has been years in the making.
tags:
  - Development
hero:
  iframe: https://www.youtube-nocookie.com/embed/6XaoBocYJ54
  title: Video of the talk “Tackling Temporal Troubles”
  aspect_ratio: 16 / 9
---

- [Interactive slides](https://pitch.com/v/tackling-temporal-troubles-x7bvz4) (Pitch)
- [Static slides](/files/tackling-temporal-troubles.pdf) (PDF, 2 MB)
- [Recording](https://www.youtube.com/watch?v=6XaoBocYJ54) (YouTube)

::: Note
The following text was [originally published on the Factorial website](https://www.factorial.io/en/blog/javascript-feature-temporal).
:::

## The Trouble with Times

Let’s take a date, for example 10 June 2025, store it in JavaScript and then print it for displaying on a website. To achieve this, we usually reach for the Date API and create a new date object like this:

```js
new Date("2025-06-10");
```

We quickly run into issues though when trying to work with this object. Printing it gives us somewhat unexpected results. When we’re in Hamburg, Germany, the printed date is:

```plain
Tue Jun 10 2025 02:00:00 GMT+0200 (CEST)
```

In another part of the world, for example in Los Angeles, California, we get:

```plain
Mon Jun 09 2025 17:00:00 GMT-0700 (PDT)
```

Even if we only specify a date, the Date API always adds a time component. When printing the date, the API converts to the user’s system time zone.

We can try to work around this issue, for example by explicitly printing the original date in the ISO format:

```js
new Date("2025-06-10").toISOString();
```

```plain
2025-06-10T00:00:00.000Z
```

This might not be the desired output format since user’s are more familiar with their locale’s format. Instead we can use the `toLocaleDateString` method to format the date in a specific locale:

```js
new Date("2025-06-10").toLocaleDateString("en-UK", { dateStyle: "full" });
```

Which again is printed in the user’s system time zone. In Hamburg this is:

```plain
Tuesday, 10 June 2025
```

And in Los Angeles:

```plain
Monday, 9 June 2025
```

Let’s force a specific time zone, in this case UTC since we’re not interested in time:

```js
new Date("2025-06-10").toLocaleDateString("en-UK", {
	dateStyle: "full",
	timeZone: "UTC",
});
```

And finally get the desired result:

```plain
Tuesday, 10 June 2025
```

You need to be aware of all these peculiarities of the Date API just to print a date while ignoring the time component.

### Hit list of bad Date API design

1. Limited time zone support:\
   UTC and the user’s system time zone. Should be enough, right?
2. Mutability:\
   Don’t forget to clone your date object or face the consequences.
3. Few high-level API methods:\
   Want to do calculations with dates? Good luck!
4. Design inconsistencies:\
   Zero-based months and the infamous `getYear`, anyone?

## Time for Temporal Technology

Let’s solve all these issues by switching to the Temporal API:

```js
Temporal.PlainDate.from("2025-06-10");
```

This stores a date without the time component, hence the name “plain” date.

Calling the `toLocaleString` method immediately gives us the desired result, without having to think about time zone issues:

```js
Temporal.PlainDate.from("2025-06-10").toLocaleString("en-UK", { dateStyle: "full" });
```

```plain
Tuesday, 10 June 2025
```

### Calendar day

`PlainDate` is useful when storing an event that happens on a specific calendar day, for example Easter holiday:

```js
const easter = Temporal.PlainDate.from("2026-04-05");
```

### Wall-clock time

The equivalent for time is `PlainTime`, for example when storing an alarm clock that shouldn’t change with time zones:

```js
const alarm = Temporal.PlainTime.from("07:00");
```

### Calendar day and wall-clock time

Combine both and get `PlainDateTime`, a time-zone-independent representation of date and time

```js
const newYear = Temporal.PlainDateTime.from("2026-01-01T00:00");
```

### Calendar month and day

To store a recurring event that happens on the same day every year, `PlainMonthDay` comes in handy:

```js
const mentalHealthDay = Temporal.PlainMonthDay.from("10-10");
```

### Calendar year and month

And the remaining plain API is `PlainYearMonth` to store a whole month for a specific year:

```js
const prideMonth = Temporal.PlainYearMonth.from("2025-06");
```

## Time Zones: the final frontier

But sometimes you can’t get away without considering time zones. Let’s add a time component to our date – 10 June 2025, 19:00, Europe/Berlin – and use Temporal to store it:

```js
Temporal.ZonedDateTime.from("2025-06-10T19:00[Europe/Berlin]");
```

Calling the `toLocaleString` method always prints the date in the originally specified time zone:

```js
Temporal.ZonedDateTime.from("2025-06-10T19:00[Europe/Berlin]").toLocaleString("en-UK", {
	dateStyle: "full",
	timeStyle: "long",
});
```

```plain
Tuesday, 10 June 2025 at 19:00:00 CEST
```

Of course it’s possible to convert to a different time zone, for example to show the date and time for an online event in a time zone better suited for the user:

```js
Temporal.ZonedDateTime.from("2025-06-10T19:00[Europe/Berlin]")
	.withTimeZone("America/Los_Angeles")
	.toLocaleString("en-UK", {
		dateStyle: "full",
		timeStyle: "long",
	});
```

```plain
Tuesday, 10 June 2025 at 10:00:00 GMT-7
```

One thing to note is the immutability of Temporal objects. Every time you call a method that modifies the date or time, a new Temporal object is returned while the original is left unchanged.

## Definitive Durations

So far, Temporal provides a cleaner and more intuitive API replacement for Date. Something completely new to JavaScript are duration objects:

```js
Temporal.Duration.from("PT1H30M");
```

We can also print these with the `toLocaleString` method in a more human-friendly format:

```js
Temporal.Duration.from("PT1H30M").toLocaleString("en-UK", { style: "long" });
```

```plain
1 hour, 30 minutes
```

Durations can be converted to numbers for use in JavaScript APIs that don’t directly accept Temporal objects:

```js
const delay = Temporal.Duration.from("PT1H30M").total("milliseconds");
setTimeout(callback, delay);
```

### Computer, add 2 days

In conjunction with other Temporal APIs, durations can be used for date and time calculations:

```js
Temporal.ZonedDateTime.from("2025-06-10T19:00[Europe/Berlin]")
	.add("P2D")
	.toLocaleString("en-UK", {
		dateStyle: "full",
		timeStyle: "long",
	});
```

```plain
Thursday, 12 June 2025 at 19:00:00 CEST
```

### How many days until Halloween?

The other way around, Temporal plain and zoned APIs expose methods to calculate durations:

```js
Temporal.PlainDate.from("2025-06-10")
	.until(Temporal.PlainDate.from("2025-10-31"))
	.toLocaleString("en-UK");
```

```plain
144 days
```

## String Theory

Temporal APIs work with one defined ISO format for dates, times, and durations. No more weird parsing issues like with the Date API.

### Date and time string

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone] [u-ca=calendar]
```

### Duration string

```plain
±P nY nM nW nD T nH nM nS
```

Depending on which API is used, not all components are required, for example `PlainDate` only uses the date component.

These serialized date, time, and duration representations are useful when communicating with backend APIs where a standardized format is necessary. For internal purposes in JavaScript, objects can be used instead of ISO strings.

### Date and time object

```js
Temporal.PlainDate.from({
	year: 2063,
	month: 4,
	day: 5,
});

Temporal.ZonedDateTime.from({
	year: 2233,
	month: 3,
	day: 22,
	timeZone: "America/Chicago",
});
```

### Duration object

```js
Temporal.Duration.from({
	hours: 10,
	minutes: 31,
});
```

## There’s so much more

This article only scratches the surface of the new Temporal APIs. The most comprehensive [documentation is available on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) with lots of examples. The [technical specification is available on the TC39 website](https://tc39.es/proposal-temporal/).
