---
title: "HTMX: JavaScript without JavaScript"
date: 2023-12-22
description: "Explore how HTMX, the lightweight JavaScript library, seamlessly integrates with your backend to enhance the user experience without altering your frontend development stack."
tags:
- htmx
- html
- javascript
es: /blog/2023/htmx-javascript-sin-javascript
---

In the ever-evolving landscape of web development, the ongoing quest for tools that simplify and enhance the user experience has led to the creation and adoption of various technologies. [HTMX](https://htmx.org/), a relatively new JavaScript library, has gained popularity by providing an efficient way to **update specific parts of a web page without the need for a full reload**. However, it is imperative to understand that HTMX does not intend to be a direct replacement for any JavaScript framework but rather a complementary tool that closely collaborates with the backend.

## What is HTMX?

HTMX is a lightweight **JavaScript library** that facilitates dynamic updates to specific parts of a web page. Its name is a blend of "HTML" and "XMLHttpRequest," reflecting its ability to manipulate the DOM (Document Object Model) swiftly and efficiently.

Unlike JavaScript frameworks that seek to completely redefine how the frontend is developed, **HTMX focuses on improving user interaction without imposing a specific code structure**. It uses HTML attributes to define client-side logic, simplifying implementation without requiring extensive JavaScript.

## Fruitful Collaboration between Backend and Frontend

One outstanding feature of HTMX is its ability to facilitate smooth communication between the frontend and backend. Updating specific elements without reloading the page reduces server load and significantly improves response speed.

In contrast to the trend of shifting the load to the frontend, as done by many JavaScript frameworks, HTMX collaborates closely with the backend. This means the backend remains the single source of truth, simplifying frontend logic and ensuring data consistency.

## Simplicity and Flexibility: Pillars of HTMX

HTMX stands out for its simplicity and flexibility. **By not imposing a rigid structure, it allows developers to integrate it gradually into existing projects**. Adopting HTMX does not necessitate a massive code rewrite, as it can be selectively implemented in specific parts of the application.

Moreover, relying on HTML attributes makes the implementation more readable and understandable. There's no need to learn an entirely new set of concepts or paradigms, facilitating HTMX adoption by development teams. This enables developers to focus on functionality and user experience without getting lost in the complexity of the underlying technology.

## HTMX in Action: A Practical Example

Let's examine a simple example of how HTMX can enhance the interactivity of a web page. In this example I will use nodeJs as the backend, but the HTMX part can be used with any technology you want. Suppose we have a task list, and we want users to mark a task as completed without reloading the entire page. Here's a code snippet using HTMX:

1. First, ensure you have Node.js and npm installed on your system.
2. Create a `package.json` file with the following content:

```json
{
  "name": "htmx-example",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}

```

1. Run `npm install` to install dependencies.
2. Create a `server.js` file with the following content:

```jsx
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/complete_task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Logic to mark the task as completed in the database
  // ...

  // Return the response
  res.send('Task completed successfully');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at <http://localhost>:${PORT}`);
});

```

3. Create a folder named `public` and inside it, create an `index.html` file with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTMX Example</title>
</head>
<body>
  <ul>
    <li hx-get="/complete_task/1" hx-swap="outerHTML">Task 1</li>
    <li hx-get="/complete_task/2" hx-swap="outerHTML">Task 2</li>
    <li hx-get="/complete_task/3" hx-swap="outerHTML">Task 3</li>
  </ul>
  <script src="<https://unpkg.com/htmx.org@1.9.9>"></script>
</body>
</html>

```

4. Run `npm start` to start the server.

This example uses Express for the server and HTMX for client-side requests. Clicking on each task triggers a server request to mark the task as completed, and HTMX updates the user interface without reloading the entire page. This is a basic example, and in a production environment, you should implement server logic more robustly and securely.

## Conclusion: HTMX as a Strategic Complement

In summary, HTMX emerges as a valuable tool in the toolkit of any web developer. Its focus on improving user interaction without replacing existing JavaScript frameworks makes it a pragmatic addition to the web development ecosystem.

By closely collaborating with the backend and offering simplicity and flexibility, HTMX positions itself as an appealing choice for projects seeking a balance between efficiency and complexity. Rather than being a replacement, HTMX is a strategic aid that enhances the backend's ability to deliver dynamic and efficient web experiences. Its non-invasive nature and seamless integration make HTMX a valuable option for developers aiming to improve the interactivity of their web applications effectively and without complications.
