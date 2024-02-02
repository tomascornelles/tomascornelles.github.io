---
title: Arrow vs Normal Functions in JS
description: "JavaScript, the friendly and flexible language that it is, offers developers a variety of ways to define functions. Among these, let's explore two primary approaches: the traditional normal functions and the more concise arrow functions. Get ready for a journey into the differences between these two, covering their syntax, behavior, and ideal use cases."
date: 2024-02-02
tags:
- javascript
- development
es: /blog/2024/02/funciones-arrow-vs-normales-en-js/
---

JavaScript, the friendly and flexible language that it is, offers developers a variety of ways to define functions. Among these, let's explore two primary approaches: the traditional normal functions and the more concise arrow functions. Get ready for a journey into the differences between these two, covering their syntax, behavior, and ideal use cases.

## Syntax made simple:

### Normal Function Syntax:

```javascript
function add(a, b) {
  return a + b;
}
```

### Arrow Function Syntax:

```javascript
const add = (a, b) => a + b;
```

Arrow functions bring a breath of fresh air with their concise syntax, especially when the function body is a single expression. This brevity not only makes the code cleaner but also enhances readability, making arrow functions a go-to choice for simpler operations.

## Navigating the 'this' Keyword:

One of the key differences between arrow functions and normal functions lies in how they handle the `this` keyword, a crucial aspect for understanding their behavior.

### Normal Function:

```javascript
function greet() {
  console.log("Hello, " + this.name);
}

const person = {
  name: "John",
  greet: greet
};

person.greet(); // Outputs: Hello, John
```

### Arrow Function:

```javascript
const greet = () => {
  console.log("Hello, " + this.name);
};

const person = {
  name: "John",
  greet: greet
};

person.greet(); // Outputs: Hello, undefined
```

Unlike normal functions, arrow functions lack their own `this` context, inheriting it from the surrounding scope. This quirk can lead to unexpected behavior, particularly in object methods.

## The 'arguments' Object:

Normal functions come with a handy feature: access to the `arguments` object, holding all the parameters passed to the function. On the flip side, arrow functions miss out on having their own `arguments` object.

### Normal Function:

```javascript
function displayArguments() {
  console.log(arguments);
}

displayArguments(1, "hello", true); // Outputs: [1, "hello", true]
```

### Arrow Function:

```javascript
const displayArguments = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
}

displayArguments(1, "hello", true);
```

When dealing with a variable number of parameters, normal functions, with their `arguments` object, offer flexibility that arrow functions lack.

## Object Methods and Preferences:

Normal functions take the lead when it comes to defining methods within objects, especially if you need access to the object's properties.

### Normal Function:

```javascript
const car = {
  brand: "Toyota",
  displayBrand: function() {
    console.log("Brand: " + this.brand);
  }
};

car.displayBrand(); // Outputs: Brand: Toyota
```

### Arrow Function:

```javascript
const car = {
  brand: "Toyota",
  displayBrand: () => {
    console.log("Brand: " + this.brand); // Outputs: Brand: undefined
  }
};

car.displayBrand();
```

Normal functions prove to be the go-to for object methods requiring access to the object's context, as arrow functions lack a distinct `this` context.

## Conclusion:

In a nutshell, choosing between arrow functions and normal functions boils down to the specific use case. Arrow functions shine in scenarios that prioritize brevity and don't involve manipulating the `this` keyword or using the `arguments` object. On the other hand, normal functions provide more flexibility, making them a better fit for object methods and situations where a clear `this` context is crucial.

Understanding the nuances between these two function types empowers developers to make informed decisions, selecting the most suitable tool for each coding scenario. Both arrow functions and normal functions play pivotal roles in JavaScript development, and mastering when to use each will undoubtedly elevate your coding proficiency. Happy coding!
