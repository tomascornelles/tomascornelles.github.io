---
title: "Diferencias entre ESLint de Google, Airbnb y Standard"
date: 2024-03-06
description: "El desarrollo de software se ha vuelto cada vez más complejo, lo que ha llevado a la necesidad de herramientas que ayuden a mantener la calidad del código. Entre estas herramientas, los linters de código juegan un papel crucial, ya que ayudan a identificar y corregir errores, así como a mantener un estilo de código consistente a lo largo de un proyecto"
tags:
- js
- webdev
en: /en/blog/2024/03/differences-between-eslint-of-google-airbnb-and-standard
---

El desarrollo de software se ha vuelto cada vez más complejo, lo que ha llevado a la necesidad de herramientas que ayuden a mantener la calidad del código. Entre estas herramientas, los linters de código juegan un papel crucial, ya que ayudan a identificar y corregir errores, así como a mantener un estilo de código consistente a lo largo de un proyecto. ESLint es una de las herramientas de linting más populares para JavaScript, y existen varias guías de estilo que se pueden utilizar con ESLint para diferentes proyectos. En este artículo, exploraremos las diferencias entre las guías de estilo de ESLint de Google, Airbnb y Standard, y cómo cada una de ellas puede influir en el desarrollo de software.

## Propósito y Historia del Linting

El linting, más allá de eliminar errores tipográficos y de sintaxis, se centra en mantener un estilo de código consistente dentro de un proyecto. A medida que un equipo crece, mantener un estilo de código consistente se vuelve cada vez más difícil sin un conjunto de reglas estrictas. La consistencia en el estilo de código facilita la comprensión entre los miembros del equipo, acelera las revisiones de código y reduce los errores. Aunque la elección del estilo de código puede ser subjetiva, la consistencia es el verdadero desafío. El tiempo dedicado a discusiones prolongadas sobre los beneficios de un estilo de código sobre otro generalmente puede ser mejor invertido en la escritura de código real. Por lo tanto, elegir un estilo de código para que todo el equipo lo siga es un uso valioso del tiempo [1].

## Comparación de las Guías de Estilo

### Google JavaScript Style Guide

Google ha establecido una guía de estilo de JavaScript que enfatiza el uso de espacios en lugar de tabulaciones, la necesidad de punto y coma y la preferencia por las comillas simples. Aunque no se proporcionan ejemplos específicos de código en la fuente, estas reglas reflejan un enfoque en la claridad y la simplicidad, evitando debates innecesarios sobre el estilo de código. Sin embargo, la falta de una guía de estilo específica para React limita su aplicabilidad en proyectos que utilizan esta biblioteca.

### Airbnb Style Guide

Airbnb ha desarrollado una guía de estilo de JavaScript que es más detallada y prescriptiva. Requiere el uso de punto y coma, comas finales y prefiere las cadenas de plantilla. Los ejemplos de código proporcionados muestran cómo se manejan objetos y funciones de flecha, enfatizando la legibilidad y la consistencia. Airbnb también tiene una guía de estilo específica para el desarrollo de React, lo que la hace una opción atractiva para proyectos que utilizan esta biblioteca.

### Standard Style Guide

Standard Style Guide se distingue por su simplicidad y flexibilidad. No requiere punto y coma, prefiere las comillas simples y no tiene una preferencia sobre las comillas de plantilla. Los ejemplos de código muestran cómo se manejan las funciones de flecha y los espacios, mostrando una guía de estilo menos restrictiva. Su enfoque minimalista puede ser atractivo para equipos que buscan una configuración de linter menos restrictiva.

Basándome en la información disponible de las fuentes, aquí te presento una tabla que resume las diferencias clave entre las guías de estilo de ESLint de Google, Airbnb y Standard:

| Característica | Google JavaScript Style Guide | Airbnb Style Guide | Standard Style Guide |
|-----------------|--------------------------------|-----------------------|-------------------------|
| **Espacios vs. Tabulaciones** | 2 o 4 espacios | 2 espacios | 2 espacios |
| **Punto y coma** | Requiere punto y coma | Requiere punto y coma | No requiere punto y coma |
| **Comillas** | Prefiere comillas simples | Prefiere comillas simples | Prefiere comillas simples |
| **Comillas de plantilla** | No tiene preferencia | Prefiere cadenas de plantilla | No tiene preferencia |
| **Comas finales** | No recomienda | Recomienda | No recomienda |
| **React** | No tiene guía específica | Tiene guía específica | No tiene guía específica |
| **Popularidad** | Menos popular | Muy popular | Muy popular |
| **Fecha de última actualización** | Hace 5 años | Hace 2 años | Hace 9 meses |
| **Versión** | 0.14.0 | 19.0.4 | 17.1.0 |

Esta tabla resume las diferencias clave en términos de estilo de código, preferencias específicas y popularidad entre las tres guías de estilo. Cada guía tiene sus propias reglas y recomendaciones, y la elección entre ellas dependerá de las necesidades específicas del proyecto y las preferencias del equipo de desarrollo.

## Ejemplo de Código

Para ilustrar las diferencias entre las guías de estilo de ESLint de Google, Airbnb y Standard, a continuación se presenta el mismo ejemplo de código, pero adaptado a las reglas específicas de cada guía. Este ejemplo demuestra cómo se maneja una función de flecha y cómo se manejan las comillas y el uso de punto y coma, aspectos que varían entre las guías.

**Google JavaScript Style Guide**

```javascript
const saludo = function(nombre) {
 return 'Hola, ' + nombre + '.';
};

console.log(saludo('Juan'));
```

**Airbnb Style Guide**

```javascript
const saludo = (nombre) => {
 return `Hola, ${nombre}.`;
};

console.log(saludo('Juan'));
```

**Standard Style Guide**

```javascript
const saludo = (nombre) => `Hola, ${nombre}.`

console.log(saludo('Juan'))
```

## Diferencias Observadas

**Google JavaScript Style Guide**:
- Utiliza la sintaxis de función en lugar de la sintaxis de función de flecha.
- Prefiere el uso de comillas simples.
- Requiere el uso de punto y coma al final de las declaraciones.

**Airbnb Style Guide**:
- Utiliza la sintaxis de función de flecha, lo cual es una característica común en el desarrollo moderno de JavaScript.
- Prefiere el uso de comillas de plantilla (template literals) para la interpolación de cadenas, lo que mejora la legibilidad.
- Requiere el uso de punto y coma al final de las declaraciones, a diferencia de Standard.

**Standard Style Guide**:
- Utiliza la sintaxis de función de flecha, similar a Airbnb.
- Prefiere el uso de comillas de plantilla para la interpolación de cadenas.
- No requiere el uso de punto y coma, lo que permite una sintaxis más limpia y concisa.

Estos ejemplos ilustran cómo las diferentes guías de estilo de ESLint pueden influir en la forma en que se escribe el código, destacando aspectos como la sintaxis de las funciones, el uso de comillas y la necesidad de punto y coma. La elección de una guía de estilo adecuada depende de las preferencias del equipo y de los requisitos específicos del proyecto.

## Configuración de ESLint

Para configurar ESLint con una de estas guías de estilo, es necesario ajustar el archivo `.eslintrc.js` del proyecto. Este archivo permite especificar el entorno de ejecución, las opciones del analizador y la guía de estilo que se desea utilizar. A continuación, se muestra un ejemplo de cómo configurar ESLint para usar la guía de estilo de Airbnb:

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

## Comparación y Conclusión

Cada guía de estilo tiene sus propias ventajas y desventajas, y la elección de la que usar depende en gran medida de las necesidades específicas del proyecto y las preferencias del equipo de desarrollo. Google ofrece una guía de estilo clara y simple, Airbnb proporciona un conjunto de reglas detalladas y prescriptivas, y Standard ofrece una guía de estilo minimalista y flexible. La clave para elegir la guía de estilo adecuada es considerar cómo cada una de ellas puede ayudar a mantener la consistencia y la calidad del código en el proyecto.

## Recomendaciones

Al adoptar una guía de estilo, es importante configurar ESLint adecuadamente y personalizar las reglas según las necesidades específicas del proyecto. Esto puede incluir la configuración de ESLint para usar una de las guías de estilo mencionadas y la adaptación de las reglas para asegurar que se ajusten a las prácticas de codificación del equipo. La resistencia al cambio puede ser un obstáculo, pero estrategias como la formación y la comunicación pueden ayudar a fomentar la adopción de una guía de estilo consistente en el equipo.

En conclusión, las guías de estilo de ESLint ofrecen una forma eficaz de mantener la consistencia y la calidad del código en proyectos de JavaScript. La elección de la guía de estilo adecuada puede variar según las necesidades del proyecto y las preferencias del equipo, pero la importancia de la consistencia en el estilo de código no puede ser subestimada. Al adoptar una guía de estilo y configurar ESLint para usarla, los equipos pueden mejorar la calidad de su código y facilitar la colaboración entre los miembros del equipo.
