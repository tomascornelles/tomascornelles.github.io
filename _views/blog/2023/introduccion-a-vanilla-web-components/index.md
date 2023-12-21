---
title: "Introducción a Vanilla Web Components"
date: 2023-12-14
description: "Los Web Components son un conjunto de tecnologías web que permiten la creación de elementos reutilizables y personalizables para interfaces de usuario. En este artículo, exploraremos específicamente los Web Components escritos en vanilla JavaScript, sin depender de ningún framework o biblioteca adicional."
tags:
- webcomponents
- javascript
- html
en: /en/blog/2023/introduction-to-vanilla-web-components
---

Los Web Components se erigen como un **conjunto de estándares** que posibilitan la construcción de elementos modulares, flexibles y altamente personalizables, cuyo propósito fundamental es impulsar la **reutilización** y eficiencia en el diseño de aplicaciones web. En este contexto, nos sumergiremos de manera más detallada en la exploración de los Web Components.

Este enfoque de desarrollo sin dependencias externas subraya la versatilidad y la potencia intrínseca de JavaScript como un lenguaje que permite la creación de **componentes web independientes** y altamente eficientes. Al hacerlo, se fomenta la flexibilidad y la portabilidad de los Web Components, facilitando su integración fluida en una variedad de proyectos sin los desafíos asociados a posibles conflictos de dependencias.

En este viaje nos sumergiremos en los cuatro pilares esenciales: **Custom Elements, Shadow DOM y HTML Templates**. Estos estándares, cuando se combinan y aplican con destreza, allanan el camino para la creación de componentes web autónomos y encapsulados, ofreciendo un espectro amplio de posibilidades en términos de diseño y funcionalidad.

## ¿Qué son los Web Components?

Los Web Components constan de cuatro estándares principales: Custom Elements, Shadow DOM y HTML Templates. Estos estándares trabajan juntos para facilitar la creación de componentes web autónomos y encapsulados.

- **Custom Elements:** Permiten la creación de nuevos elementos HTML personalizados con comportamientos específicos.
- **Shadow DOM:** Proporciona encapsulamiento al estilo de sombreado, permitiendo que un componente tenga su propio árbol DOM aislado del DOM principal.
- **HTML Templates:** Permiten definir fragmentos de HTML que pueden ser clonados y utilizados dinámicamente.

### Custom Elements

Los Custom Elements son la piedra angular de los Web Components. Permiten la creación de elementos HTML personalizados con comportamientos específicos. Veamos un ejemplo más detallado:

```jsx
class MiComponente extends HTMLElement {
  constructor() {
    super();

    // Crear un shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Crear un elemento en el shadow DOM
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Hola, soy un Web Component con Shadow DOM';

    // Agregar el elemento al shadow root
    shadowRoot.appendChild(parrafo);
  }
}

customElements.define('mi-componente-shadow', MiComponente);
```

En este ejemplo, se utiliza el Shadow DOM para encapsular el contenido del componente. El **`mode: 'open'`** permite el acceso al shadow DOM desde fuera del componente.

### Shadow DOM

El Shadow DOM proporciona encapsulamiento al estilo de sombreado, permitiendo que un componente tenga su propio árbol DOM aislado del DOM principal. Aquí hay un ejemplo más avanzado que demuestra cómo el Shadow DOM puede encapsular estilos:

```jsx
class MiComponenteEstilizado extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Crear un estilo específico para el componente
    const estilo = document.createElement('style');
    estilo.textContent = `
      p {
        color: blue;
        font-weight: bold;
      }
    `;

    // Crear un elemento en el shadow DOM
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Hola, soy un Web Component estilizado';

    // Agregar el estilo y el elemento al shadow root
    shadowRoot.appendChild(estilo);
    shadowRoot.appendChild(parrafo);
  }
}

customElements.define('mi-componente-estilizado', MiComponenteEstilizado);
```

Este ejemplo muestra cómo se pueden aplicar estilos específicos al shadow DOM sin afectar el estilo global de la página.

### HTML Templates

Los HTML Templates permiten definir fragmentos de HTML que pueden ser clonados y utilizados dinámicamente. Aquí hay un ejemplo que utiliza un template para renderizar dinámicamente el contenido del componente:

```jsx
class MiComponenteConTemplate extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Obtener el contenido del template
    const template = document.getElementById('mi-componente-template');
    const contenido = template.content.cloneNode(true);

    // Agregar el contenido al shadow root
    shadowRoot.appendChild(contenido);
  }
}

customElements.define('mi-componente-con-template', MiComponenteConTemplate);
```

El template puede ser definido en el HTML de la página:

```html
<template id="mi-componente-con-template">
  <p>Hola, soy un Web Component con template</p>
</template>
```

## Ventajas de Vanilla Web Components

- **Reutilización de Código:** Los Web Components escritos en vanilla JavaScript facilitan la creación de componentes reutilizables que pueden ser incorporados en diferentes partes de una aplicación, mejorando la modularidad del código.
- **Encapsulamiento:** El uso del Shadow DOM asegura que los estilos y la lógica interna de un componente no afecten ni sean afectados por otros elementos de la página, proporcionando una mayor encapsulación y reduciendo posibles conflictos.
- **Mantenimiento Simplificado:** Al encapsular la funcionalidad en componentes independientes, el mantenimiento y la escalabilidad de la aplicación mejoran significativamente. Cada componente puede ser desarrollado, probado y mantenido de forma aislada.
- **Interoperabilidad:** Los Web Components escritos en vanilla JavaScript son independientes de frameworks, lo que facilita la integración en proyectos existentes. Esto permite a los desarrolladores aprovechar las ventajas de los Web Components sin comprometer la compatibilidad con otras tecnologías.

## Conclusión

En este artículo, hemos explorado a fondo los Vanilla Web Components, destacando cada uno de los estándares que los componen: Custom Elements, Shadow DOM y HTML Templates. Hemos examinado ejemplos prácticos para comprender cómo implementar estos conceptos en la creación de componentes web personalizados.

Los Web Components proporcionan una forma poderosa y modular de construir interfaces web. Al adoptar estas tecnologías, los desarrolladores pueden mejorar la reutilización de código, fortalecer el encapsulamiento, simplificar el mantenimiento y fomentar la interoperabilidad. Integrar estos principios en el desarrollo web puede conducir a una arquitectura más robusta y modular, allanando el camino para aplicaciones web más escalables y mantenibles.
