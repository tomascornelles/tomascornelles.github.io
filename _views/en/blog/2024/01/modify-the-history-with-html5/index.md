---
eleventyExcludeFromCollections: true

title: "Modify the history with HTML5"
date: 2024-01-19
description: "Use the HTML5 API useState and replaceState for modify the history in your web"
tags:
- html
- webdev
es: /blog/2024/01/modifica-el-historial-con-html5
---

This week I ran into the problem of having to change a URL without refreshing the page. I was helping to develop a web application that allowed the URL to be updated according to the state of the page, but we didn't want the page to be refreshed with its subsequent scroll to the top.

To solve this problem, I decided to use the pushState API. This API, along with replaceState, allows web developers to manipulate the browser history, which allowed me to change the URL of the page without the browser refreshing it.

This approach allowed me to create a fluid navigation through the content without refreshing the page.

## pushState and replaceState APIs in HTML5

The pushState and replaceState APIs are two methods of the History API that allow web developers to manipulate the browser history. These APIs were introduced in HTML5 and offer a more flexible way to control the history than traditional back and forward methods.

### Syntax

The syntax of the two APIs is similar:

```javascript
history.pushState(state, title, url);
history.replaceState(state, title, url);
```

The first parameter, `state`, is a JavaScript object that is stored in the history entry. The second parameter, `title`, is optional and is used to set the title of the history entry. The third parameter, `url`, is optional and is used to set the URL of the history entry.

### Differences between the two APIs

The main difference between the two APIs is that `pushState()` adds a new entry to the history, while `replaceState()` modifies the current history entry.

Another difference is that `pushState()` does not affect the URL of the address bar, while `replaceState()` does.

**Code examples**

The following example shows how to use `pushState()` to add a new entry to the history:

```javascript
const state = {
 foo: "bar",
};

history.pushState(state, "Page 1", "pagina1.html");
```

This code will add a new entry to the history with the state `{ foo: "bar" }`, the title "Page 1", and the URL "pagina1.html".

The following example shows how to use `replaceState()` to modify the current history entry:

```javascript
const state = {
 foo: "baz",
};

history.replaceState(state, "Page 2", "pagina2.html");
```

This code will modify the current history entry with the state `{ foo: "baz" }`, the title "Page 2", and the URL "pagina2.html".

### Examples of use of the pushState and replaceState APIs on the web

The pushState and replaceState APIs are used in a variety of websites to provide a variety of functionality. Some examples include:

- **Smooth navigation:** Many web applications use the pushState and replaceState APIs to create smooth navigation that does not require the user to click a button or link. For example, the Gmail web application uses these APIs to allow users to navigate between tabs in their inbox without having to click them.
- **Data storage in history:** The pushState and replaceState APIs can also be used to store data in the browser history. For example, many websites use these APIs to store the state of a web application, such as the selection of a menu item or the value of a form field.
- **Custom history functionality:** The pushState and replaceState APIs can also be used to add custom history functionality to a web application. For example, many websites use these APIs to add history functionality to a web application that is not designed for it.

## Conclusion

In my case, I used the pushState API because I wanted to add a new entry to the history with the new URL. This allowed the browser to detect the new history entry and load the corresponding page when the user clicked on a tab.

If I had wanted to modify the current history entry instead of adding a new entry, I would have used the replaceState API. This would have allowed me to change the URL of the page without the browser refreshing it, but the history would have shown the new URL.

In conclusion, the pushState and replaceState APIs are powerful tools that can be used to improve the functionality of web pages. Web developers should be familiar with these APIs in order to take full advantage of them.
