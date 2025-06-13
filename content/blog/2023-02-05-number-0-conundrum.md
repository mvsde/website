---
title: The Number("") === 0 conundrum
description: Why is an empty string passed to the Number constructor parsed as a 0?
tags:
  - Development
---

## The case

This [video by ThePrimeagen](https://web.archive.org/web/20230205174413/https://www.youtube.com/watch?v=34jdBsvOnqM) sent me on a fun archaeology trip.

The case to solve: Why is the following statement true? Why is an empty string parsed as a number in JS?

```js
Number("") === 0;
```

## ECMAScript 0.14 and 1 (1997)

[ECMAScript 0.14](https://archives.ecma-international.org/1997/TC39/97-021.pdf#page=26) from March 1997 and later [ECMAScript 1](https://www.ecma-international.org/wp-content/uploads/ECMA-262_1st_edition_june_1997.pdf#page=28) from June 1997 contain the following on page 26 and 28 respectively:

> The MV of `StringNumericLiteral` ::: (an empty character sequence) is 0.

0.14 is the first version of the spec where this appears.

## JavaScript 1.1 (1996)

But [JavaScript 1.1](https://archives.ecma-international.org/1996/TC39/96-002.pdf#page=23) from November 1996 states this on page 23:

<!-- markdownlint-capture -->
<!-- markdownlint-disable no-inline-html -->
<div class="Table">
  <table>
    <thead>
      <tr>
        <th colspan="3" rowspan="2" style="border: none; background: none;"></th>
        <th colspan="5">To type</th>
      </tr>
      <tr>
        <th>Function</th>
        <th>Object</th>
        <th>Number</th>
        <th>Boolean</th>
        <th>String</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowspan="20">From type</th>
        <th colspan="2">undefined</th>
        <td>error</td>
        <td>null</td>
        <td>error</td>
        <td>false</td>
        <td>"undefined"</td>
      </tr>
      <tr>
        <th colspan="2">Function</th>
        <td>N/C</td>
        <td>Function object</td>
        <td>valueOf/error</td>
        <td>valueOf/true</td>
        <td>decompile</td>
      </tr>
      <tr>
        <th rowspan="2">Object</th>
        <th>not null</th>
        <td>Function object</td>
        <td rowspan="2">N/C</td>
        <td>valueOf/error</td>
        <td>valueOf/true</td>
        <td>toString/valueOf</td>
      </tr>
      <tr>
        <th>null</th>
        <td>error</td>
        <td>0</td>
        <td>false</td>
        <td>"null"</td>
      </tr>
      <tr>
        <th rowspan="5">Number</th>
        <th>zero</th>
        <td rowspan="5">error</td>
        <td rowspan="5">Number</td>
        <td rowspan="5">N/C</td>
        <td>false</td>
        <td>"0"</td>
      </tr>
      <tr>
        <th>nonzero</th>
        <td>true</td>
        <td>default</td>
      </tr>
      <tr>
        <th>NaN</th>
        <td>false</td>
        <td>"NaN"</td>
      </tr>
      <tr>
        <th>+Infinity</th>
        <td>true</td>
        <td>"+Infinity"</td>
      </tr>
      <tr>
        <th>-Infinity</th>
        <td>true</td>
        <td>"-Infinity"</td>
      </tr>
      <tr>
        <th rowspan="2">Boolean</th>
        <th>false</th>
        <td rowspan="2">error</td>
        <td rowspan="2">Boolean</td>
        <td>0</td>
        <td rowspan="2">N/C</td>
        <td>"false"</td>
      </tr>
      <tr>
        <th>true</th>
        <td>1</td>
        <td>"true"</td>
      </tr>
      <tr>
        <th rowspan="2">String</th>
        <th>empty</th>
        <td rowspan="2">error</td>
        <td rowspan="2">String</td>
        <td>error</td>
        <td>false</td>
        <td rowspan="2">N/C</td>
      </tr>
      <tr>
        <th>non-empty</th>
        <td>number/error</td>
        <td>true</td>
      </tr>
    </tbody>
  </table>
</div>
<!-- markdownlint-restore -->

So, something happened between 1996 and 1997. But I couldn’t figure out what. There is an [archive of TC39 documents from 1997](https://archives.ecma-international.org/1997/), though nothing hints at the reasoning for this decision.

## JScript 0.1 (1996)

[JScript 0.1](https://archives.ecma-international.org/1996/TC39/96-005.pdf#page=14) from 1996 seems to be the source for something similar:

```js
Number() === 0;
```

On page 14 it states:

> The Number constructor has two modes.
>
> - With no arguments, it returns an object whose valueOf method returns 0.
> - With one argument, which must be a number, it returns an object whose valueOf method returns the argument.

## Fun side tangent

[Alternative names for _ECMAScript_](https://archives.ecma-international.org/1997/TC39/97-002.pdf) were collected, some are actually pretty good but others are totally wild:

| Name       | Explanation                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| CoolScript | No known issues                                                             |
| CoScript   | No known issues. Stands for "Common Scripting System"                       |
| Descartes  | Unknown -- too many matches.                                                |
| DeScript   | Unknown -- too many matches. In honor of Descartes.                         |
| DynaScript | Used in a physics class at Moorhead State                                   |
| EScript    | No known issues                                                             |
| InfoScript | No known issues                                                             |
| JScript    | None, but it is in use by Microsoft                                         |
| JustScript | No known issues                                                             |
| JSL        | Acronym used -- Japanese as a Second Language. For "Just a Script Language" |
| RadScript  | No known issues                                                             |
| ScriptJ    | No known issues                                                             |
| TranScript | Unknown -- too many matches.                                                |
| W3Script   | No known issues                                                             |
| WScript    | No known issues                                                             |
| wwwscript  | No known issues                                                             |
