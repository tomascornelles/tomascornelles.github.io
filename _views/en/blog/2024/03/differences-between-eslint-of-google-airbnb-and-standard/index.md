---
title: "Differences between ESLint of Google, Airbnb, and Standard"
date: 2024-03-06
description: "Software development has become increasingly complex, leading to the need for tools that help maintain code quality. Among these tools, code linters play a crucial role, as they help identify and correct errors, as well as maintain a consistent coding style throughout a project."
tags:
- js
- webdev
es: /blog/2024/03/diferencias-entre-eslint-de-google-airbnb-y-standard
---

Software development has become increasingly complex, leading to the need for tools that help maintain code quality. Among these tools, code linters play a crucial role, as they help identify and correct errors, as well as maintain a consistent coding style throughout a project. ESLint is one of the most popular linting tools for JavaScript, and there are several style guides that can be used with ESLint for different projects. In this article, we will explore the differences between the ESLint style guides of Google, Airbnb, and Standard, and how each one can influence software development.

## Purpose and History of Linting

Linting, beyond eliminating typographical and syntax errors, focuses on maintaining a consistent coding style within a project. As a team grows, maintaining a consistent coding style becomes increasingly difficult without a strict set of rules. Consistency in coding style facilitates understanding among team members, accelerates code reviews, and reduces errors. Although the choice of coding style can be subjective, consistency is the true challenge. The time dedicated to lengthy discussions about the benefits of one coding style over another can generally be better invested in writing actual code. Therefore, choosing a coding style for the entire team to follow is a valuable use of time [1].

## Comparison of Style Guides

### Google JavaScript Style Guide

Google has established a JavaScript style guide that emphasizes the use of spaces instead of tabs, the need for semicolons, and the preference for single quotes. Although no specific code examples are provided in the source, these rules reflect a focus on clarity and simplicity, avoiding unnecessary debates about coding style. However, the lack of a specific style guide for React limits its applicability in projects that use this library.

### Airbnb Style Guide

Airbnb has developed a more detailed and prescriptive JavaScript style guide. It requires the use of semicolons, trailing commas, and prefers template literals. The provided code examples show how objects and arrow functions are handled, emphasizing readability and consistency. Airbnb also has a specific style guide for React development, making it an attractive option for projects that use this library.

### Standard Style Guide

Standard Style Guide distinguishes itself by its simplicity and flexibility. It does not require semicolons, prefers single quotes, and does not have a preference for template literals. The code examples show how arrow functions and spaces are handled, demonstrating a less restrictive style guide. Its minimalist approach can be attractive to teams looking for a less restrictive linter configuration.

Based on the available information from the sources, here is a table that summarizes the key differences between the ESLint style guides of Google, Airbnb, and Standard:

| Feature | Google JavaScript Style Guide | Airbnb Style Guide | Standard Style Guide |
|---------|--------------------------------|-----------------------|-------------------------|
| **Spaces vs. Tabs** | 2 or 4 spaces | 2 spaces | 2 spaces |
| **Semicolons** | Requires semicolons | Requires semicolons | Does not require semicolons |
| **Quotes** | Prefers single quotes | Prefers single quotes | Prefers single quotes |
| **Template Literals** | No preference | Prefers template literals | No preference |
| **Trailing Commas** | Does not recommend | Recommends | Does not recommend |
| **React** | No specific guide | Has specific guide | No specific guide |
| **Popularity** | Less popular | Very popular | Very popular |
| **Last Update Date** | 5 years ago | 2 years ago | 9 months ago |
| **Version** | 0.14.0 | 19.0.4 | 17.1.0 |

This table summarizes the key differences in terms of coding style, specific preferences, and popularity between the three style guides. Each guide has its own set of rules and recommendations, and the choice between them will depend on the specific needs of the project and the preferences of the development team.

## Code Example

To illustrate the differences between the ESLint style guides of Google, Airbnb, and Standard, the following code example is presented, adapted to the specific rules of each guide. This example demonstrates how an arrow function and how quotes and semicolon usage are handled, aspects that vary between the guides.

**Google JavaScript Style Guide**

```javascript
const greeting = function(name) {
 return 'Hello, ' + name + '.';
};

console.log(greeting('John'));
```

**Airbnb Style Guide**

```javascript
const greeting = (name) => {
 return `Hello, ${name}.`;
};

console.log(greeting('John'));
```

**Standard Style Guide**

```javascript
const greeting = (name) => `Hello, ${name}.`

console.log(greeting('John'))
```

## Observed Differences

**Google JavaScript Style Guide**:
- Uses function syntax instead of arrow function syntax.
- Prefers the use of single quotes.
- Requires the use of semicolons at the end of statements.

**Airbnb Style Guide**:
- Uses arrow function syntax, a common feature in modern JavaScript development.
- Prefers the use of template literals for string interpolation, improving readability.
- Requires the use of semicolons at the end of statements, unlike Standard.

**Standard Style Guide**:
- Uses arrow function syntax, similar to Airbnb.
- Prefers the use of template literals for string interpolation.
- Does not require the use of semicolons, allowing for a cleaner and more concise syntax.

These examples illustrate how different ESLint style guides can influence how code is written, highlighting aspects such as function syntax, quote usage, and the need for semicolons. The choice of an appropriate style guide depends on the team's preferences and the specific requirements of the project.

## ESLint Configuration

To configure ESLint with one of these style guides, it is necessary to adjust the project's `.eslintrc.js` file. This file allows specifying the execution environment, parser options, and the style guide to be used. The following example shows how to configure ESLint to use the Airbnb style guide:

```javascript
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "extends": "airbnb"
};
```

## Comparison and Conclusion

Each style guide has its own advantages and disadvantages, and the choice of which one to use largely depends on the specific needs of the project and the preferences of the development team. Google offers a clear and simple style guide, Airbnb provides a detailed and prescriptive set of rules, and Standard offers a minimalist and flexible style guide. The key to choosing the appropriate style guide is considering how each one can help maintain consistency and quality of code in the project.

## Recommendations

When adopting a style guide, it is important to properly configure ESLint and customize the rules according to the specific needs of the project. This can include configuring ESLint to use one of the mentioned style guides and adapting the rules to ensure they align with the team's coding practices. Resistance to change can be an obstacle, but strategies such as training and communication can help foster the adoption of a consistent style guide within the team.

In conclusion, ESLint style guides offer an effective way to maintain consistency and quality of code in JavaScript projects. The choice of the appropriate style guide can vary depending on the project's needs and the team's preferences, but the importance of code style consistency cannot be underestimated. By adopting a style guide and configuring ESLint to use it, teams can improve the quality of their code and facilitate collaboration among team members.
