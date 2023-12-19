---
title: "Introduction to Vanilla Web Components"
date: 2023-12-14
description: "Web Components constitute a set of web technologies that enable the creation of reusable and customizable elements for user interfaces. In this article, we will specifically explore Web Components written in vanilla JavaScript, without relying on any additional framework or library."

es: /blog/2023/introduccion-a-vanilla-web-components
---

Web Components stand as a **set of standards** that enable the construction of modular, flexible, and highly customizable elements, with the fundamental purpose of **driving reuse** and efficiency in web application design. In this context, we will delve more deeply into the exploration of Web Components.

This approach to development without external dependencies underscores the versatility and intrinsic power of JavaScript as a language that allows the creation of **independent and highly efficient web components**. By doing so, flexibility and portability are fostered, facilitating seamless integration into a variety of projects without the challenges associated with potential dependency conflicts.

In this journey, we will immerse ourselves in the four essential pillars: **Custom Elements, Shadow DOM and HTML Templates**. These standards, when skillfully combined and applied, pave the way for the creation of standalone and encapsulated web components, offering a broad spectrum of possibilities in terms of design and functionality.

## What are Web Components?

Web Components consist of four core standards: Custom Elements, Shadow DOM and HTML Templates. These standards work together to facilitate the creation of standalone and encapsulated web components.

- **Custom Elements:** Enable the creation of new HTML elements with specific behaviors.
- **Shadow DOM:** Provides encapsulation akin to shadowing, allowing a component to have its own DOM tree isolated from the main DOM.
- **HTML Templates:** Enable the definition of HTML fragments that can be cloned and used dynamically.

### Custom Elements

Custom Elements are the cornerstone of Web Components, allowing the creation of custom HTML elements with specific behaviors. Let's delve into a more detailed example:

```jsx
class MyComponent extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Create an element in the shadow DOM
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello, I am a Web Component with Shadow DOM';

    // Add the element to the shadow root
    shadowRoot.appendChild(paragraph);
  }
}

customElements.define('my-component-shadow', MyComponent);

```

In this example, the Shadow DOM is used to encapsulate the component's content. The **`mode: 'open'`** allows access to the shadow DOM from outside the component.

### Shadow DOM

The Shadow DOM provides encapsulation akin to shadowing, allowing a component to have its own DOM tree isolated from the main DOM. Here's a more advanced example demonstrating how the Shadow DOM can encapsulate styles:

```jsx
class StyledComponent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Create a style specific to the component
    const style = document.createElement('style');
    style.textContent = `
      p {
        color: blue;
        font-weight: bold;
      }
    `;

    // Create an element in the shadow DOM
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello, I am a styled Web Component';

    // Add the style and the element to the shadow root
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(paragraph);
  }
}

customElements.define('styled-component', StyledComponent);

```

This example illustrates how specific styles can be applied to the shadow DOM without affecting the global styles of the page.

### HTML Templates

HTML Templates allow the definition of HTML fragments that can be cloned and used dynamically. Here's an example using a template to dynamically render the component's content:

```jsx
class TemplateComponent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Get the template content
    const template = document.getElementById('component-template');
    const content = template.content.cloneNode(true);

    // Add the content to the shadow root
    shadowRoot.appendChild(content);
  }
}

customElements.define('template-component', TemplateComponent);

```

The template can be defined in the HTML of the page:

```html
<template id="component-template">
  <p>Hello, I am a Web Component with a template</p>
</template>

```

## Advantages of Vanilla Web Components

- **Code Reusability:** Vanilla JavaScript Web Components facilitate the creation of reusable components that can be incorporated into different parts of an application, enhancing code modularity.
- **Encapsulation:** The use of Shadow DOM ensures that the styles and internal logic of a component do not affect or get affected by other elements on the page, providing greater encapsulation and reducing potential conflicts.
- **Simplified Maintenance:** By encapsulating functionality in independent components, maintenance and scalability of the application improve significantly. Each component can be developed, tested, and maintained in isolation.
- **Interoperability:** Vanilla JavaScript Web Components are framework-agnostic, making integration into existing projects easier. This allows developers to leverage the advantages of Web Components without compromising compatibility with other technologies.

## Conclusion

In this article, we have thoroughly explored Vanilla Web Components, highlighting each of the standards that compose them: Custom Elements, Shadow DOM and HTML Templates. We have examined practical examples to understand how to implement these concepts in the creation of custom web components.

Web Components provide a powerful and modular way to build web interfaces. By adopting these technologies, developers can enhance code reusability, strengthen encapsulation, simplify maintenance, and promote interoperability. Integrating these principles into web development can lead to a more robust and modular architecture, paving the way for more scalable and maintainable web applications.
