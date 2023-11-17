---
title: Use an Emoji as a Favicon Based on the Day
date: 2023-11-11
description: Utilizing emojis as favicons allows you to customize them according to the day.
tags:
  - favicon
  - javascript
  - svg
---

It's been a while since Lea Verou [suggested a way to use emojis](https://twitter.com/LeaVerou/status/1241619866475474946) as favicons on your website, but I thought it might be interesting to remind you that with JavaScript, you can customize that emoji based on parameters of your choice.

In my case, I've considered changing the favicon according to the date, as I do on this website. However, I've shortened the code and made it exclusively with emojis since I typically use the SVG of my logo by default.

## Let's Break It Down

First, we define the icons we want. You can use any emoji selector to choose. First, our default icon and then an object whose key is the month followed by the day separated by an underscore (mm_dd), and the value is the emoji itself. I've marked a summer day, Halloween, and Christmas Eve.

```javascript
// Define the icons
const ICON_DEFAULT = '🖥️';
const ICONS = {
  '8_15': '🏖️',
  '10_31': '🎃',
  '12_24': '🎄',
  '12_25': '🎁',
  '12_31': '️🕰️',
}
```

Next, we get the current date and format the day as mentioned above (mm_dd).

```javascript
// Get and format the current date
const DATE = new Date();
const TODAY = `${DATE.getMonth() + 1}_${DATE.getDate()}`
```

And finally, the magic happens. We select the element that will receive the favicon, which is the link[type='image/svg+xml']. Then, we complete the href attribute of the tag with the SVG's data, which inserts the emoji of the day if it exists or the default emoji otherwise.

```javascript
// Set the chosen emoji as the favicon image
const LINK = document.querySelector("link[type='image/svg+xml']");
LINK.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">${ICONS[TODAY] || ICON_DEFAULT}</text></svg>`;
```

## Other Applications

It's clear that you can condition it in many other ways, such as weather icons if you have data, platform status, or whether the user is logged in. Endless possibilities without having to design any icons ☻.

## All Together

```javascript
// Define the icons
const ICON_DEFAULT = '🖥️';
const ICONS = {
  '8_15': '🏖️',
  '10_31': '🎃',
  '12_24': '🎄',
  '12_25': '🎁',
  '12_31': '️🕰️',
}

// Get and format the current date
const DATE = new Date();
const TODAY = `${DATE.getMonth() + 1}_${DATE.getDate()}`

// Set the chosen emoji as the favicon image
const LINK = document.querySelector("link[type='image/svg+xml']");
LINK.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">${ICONS[TODAY] || ICON_DEFAULT}</text></svg>`;
```

## Conclusions

In addition to using emojis in the favicon, SVG allows for a much greater range of transformations than traditional icons. It also enables embedding the SVG code in the DOM, avoiding additional requests.

Do you use SVG for your favicons? Do you often employ emojis in your projects? Do you find this technique useful?
