---
id: 4acd0bfd-de22-43ac-a363-5b9637f3e55e
title: Performance of modern image formats
description: Modern image formats have spectacular compression improvements. But how fast are they overall?
date: 2022-01-30T11:38:00Z
---

Modern image formats like [WebP](https://en.wikipedia.org/wiki/WebP) and [AVIF](https://en.wikipedia.org/wiki/AVIF) have [spectacular compression improvements](https://jakearchibald.com/2020/avif-has-landed/) over the three decades old JPEG. But they come with a downside: longer encoding and decoding times. While the encoding time is negligible – it only happens once on a server or in a build step – the decoding is done over and over again on the clients.

While researching the topic I came across this [statement by Addy Osmani](https://www.smashingmagazine.com/2021/09/modern-image-formats-avif-webp/#avif-gotchas):

> Decoding AVIF images for display can also take up more CPU power than other codecs, though smaller file sizes may compensate for this.

What I couldn’t find were any hard numbers on WebP/AVIF vs. JPEG decoding times. So began my quest to somehow collect this data myself, leading to the development of the [Image Performance Measurement](https://github.com/mvsde/image-performance-measurement) tool.

## Terminology

Response time
: The time it takes the browser to request an image and receive the file.

Decode time
: The time it takes the browser to read and decompress the encoded image.

Paint time
: The time it takes the browser to “paint” the image’s pixels on the page.

## Methodology

::: note
_Disclaimer:_ I have no idea how scientific the following approach is. The numbers match expectations, though.
:::

In its default configuration the _Image Performance Measurement_ tool does the following:

1. Create scaled JPEG, WebP, and AVIF files from 10 sample images.
2. Start a local web server and Puppeteer session.
3. Throttle the network speed to simulated 4G.
4. Load each image and collect the file size, response, decode, and paint time.
5. Repeat step 4 five times to smooth out outliers.
6. Analyze raw data and create a summary.

## Results

### Slow device

Specifications: Intel Core 2 Duo T6400, 4 GB RAM, SATA1 HDD

| Type  | Size (kB) | Response (ms) | Decode (ms) | Paint (ms) | Total (ms) |
|-------|----------:|--------------:|------------:|-----------:|-----------:|
| .avif |  101.2182 |     214.22592 |    46.19268 |    0.49126 |  260.90986 |
| .jpg  |  177.5786 |     241.13594 |    29.14996 |    0.08198 |  270.36788 |
| .webp |  126.1962 |     222.16746 |    28.57188 |    0.07598 |  250.81532 |

<small>[Raw data for the slow device](https://gist.github.com/mvsde/babe7a3c07e0fb5f7b0529580216d357)</small>

### Fast device

Specifications: Intel Core i7-10750H, 32 GB RAM, NVMe SSD

| Type  | Size (kB) | Response (ms) | Decode (ms) | Paint (ms) | Total (ms) |
|-------|----------:|--------------:|------------:|-----------:|-----------:|
| .avif |  101.2182 |      185.6501 |    13.01362 |    0.02318 |   198.6869 |
| .jpg  |  177.5786 |      195.2597 |     9.84462 |    0.02324 |   205.1275 |
| .webp |  126.1962 |      188.9901 |    11.29712 |    0.02318 |   200.3104 |

<small>[Raw data for the fast device](https://gist.github.com/mvsde/3e42f33723b0cfff296f01bedc0dea94)</small>

## Takeaway

JPEG takes the decoding performance crown, indeed. Though, on modern devices the differences between JPEG, WebP, and AVIF are tiny – a couple of milliseconds at worst. The greatly reduced file sizes of WebP and AVIF lead to shorter response times that outweigh any advantage JPEG may have in the decoding department.

Even on slower devices the modern image formats are more performant than JPEG. True, decoding and painting AVIF takes significantly longer than JPEG, but once again the smaller file sizes of WebP and AVIF win.

And always bet on the future, I guess: JPEG had three decades to optimize every last bit. WebP is not even a dozen years old, and AVIF barely three. As old devices are replaced, the performance gap between JPEG and WebP/AVIF will only increase.
