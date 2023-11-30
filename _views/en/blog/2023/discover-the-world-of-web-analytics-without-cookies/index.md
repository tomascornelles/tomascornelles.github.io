---
title: Discover the World of Web Analytics Without Cookies
date: 2023-11-24
description: Umami.is offers an innovative and reliable solution for analyzing online behavior without compromising user privacy, providing benefits such as simplifying regulatory compliance and obtaining accurate and accessible data, all with easy implementation and customization.
tags:
    - analytics
    - tracking
    - privacy
es: /blog/2023/descubre-el-mundo-de-las-analiticas-web-sin-cookies/
---

In a digital world where data privacy and security are of utmost importance, *[Umami.is](https://umami.is)* stands out as an innovative and reliable solution for analyzing online behavior without compromising user privacy. This article explores in detail the numerous benefits of using analytics without cookies, giving you a comprehensive insight into how this technology can enhance your data analysis strategies. It will also provide you with a step-by-step guide on how to implement this solution, even if you have no advanced programming knowledge. With *Umami.is*, you can securely and effectively obtain valuable information about your users' online behavior without the need for invasive cookies. Discover how to make informed decisions and optimize your digital strategies with *Umami.is* today!

## **Benefits of Analytics without Cookies with *Umami.is***

### 1. **Privacy at the Core:**

*Umami.is* distinguishes itself with its privacy-focused approach. By eliminating cookies, it offers an ethical alternative that addresses growing concerns about user tracking.

### 2. **Simplified Regulatory Compliance:**

Complying with regulations such as GDPR becomes easier with *Umami.is*. The absence of cookies reduces the complexity of consent and aligns your website with regulatory standards.

### 3. **Accurate and Accessible Data:**

*Umami.is* provides accurate data on user behavior without relying on cookies. This ensures that companies obtain valuable information without sacrificing data quality.

### 4. **Ease of Implementation:**

Unlike traditional solutions, implementing *Umami.is* is accessible even for those without advanced technical expertise. With a few simple steps, you can start gathering meaningful data.

## **How to Use *Umami.is* on Your Website**

### Step 1: **Registration on *Umami.is***

Visit the *[Umami.is](https://umami.is)* website and sign up for an account. This process is quick and free.

### Step 2: **Download and Configuration:**

Once registered, download the *Umami.is* code and follow the instructions to integrate it into your website. The process is user-friendly and well-documented.

### Step 3: **Customization:**

*Umami.is* allows you to customize your analytics dashboards according to your needs. Adjust the settings to reflect the information that matters most to you.

### Code Example to Integrate *Umami.is*:

The first step is to add the tracking script to the header of your site. They explain how to do it for different platforms on their website as well.

```html
<!-- Add this to the head section of your website -->
<script async src="<https://analytics.eu.umami.is/script.js>" data-website-id="YOUR_TRACKING_ID"></script>

```

From this moment on, *Umami.is* will receive the data from visits to your pages, and you can view it from their dashboard. If you also want to know where your visitors click, you can do it directly in the HTML of each link or button.

For example, if you have the following button:

```jsx
<button id="signup-button">Sign up</button>

```

You can add the `data-umami-event` attribute to create a new event in your dashboard.

```diff
<button id="signup-button"
+	data-umami-event="Signup button"
>Sign up</button>

```

You can even add more properties to the event using the `data-umami-event-*` attributes, such as:

```diff
<button id="signup-button"
	data-umami-event="Signup button"
+	data-umami-event-email="bob@aol.com"
+	data-umami-event-id="123"
>Sign up</button>

```

You can also use Umami with JS to give events more versatility, but that would require writing a guide in another article.

## User Privacy

I mentioned in the first point of the benefits of *Umami.is* that privacy is the most important thing, however, we have seen that by adding the tracking code, it starts tracking from the very beginning. So, where does privacy come in?

Umami offers the option to add the `data-do-not-track="true"` attribute so that it does not track users who have indicated in their browser that they do not want to be tracked. It is an option that I would prefer to be enabled by default, but at least they offer it.

```diff
<script
	async defer src="<http://mywebsite.com/umami.js>"
	data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
+	data-do-not-track="true"
></script>

```

## **Conclusion: Towards a More Ethical and Accessible Analytics Future**

*Umami.is* not only represents a way to perform web analytics without cookies, but it also paves the way for those who want to better understand their audience without technical complications. Its accessible and user-friendly approach demonstrates that ethical web analytics is not reserved only for advanced programmers. By adopting *Umami.is*, you not only improve the privacy of your users but also open the doors to a world of meaningful data in a simple and transparent manner.
