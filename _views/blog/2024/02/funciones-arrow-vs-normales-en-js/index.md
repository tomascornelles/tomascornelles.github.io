---
title: "Funciones Arrow vs Normales en JS"
date: 2024-02-02
description: "JavaScript, el lenguaje amigable y flexible que es, ofrece a los desarrolladores una variedad de formas de definir funciones. Entre estas, exploremos dos enfoques principales: las funciones normales tradicionales y las funciones de flecha más concisas. Prepárate para un viaje a través de las diferencias entre estas dos, cubriendo su sintaxis, comportamiento y casos de uso ideales."
tags:
- javascript
- desarrollo
en: /en/blog/2024/02/arrow-vs-normal-functions-in-js
---

JavaScript, el lenguaje amigable y flexible que es, ofrece a los desarrolladores una variedad de formas de definir funciones. Entre estas, exploremos dos enfoques principales: las funciones normales tradicionales y las funciones de flecha más concisas. Prepárate para un viaje a través de las diferencias entre estas dos, cubriendo su sintaxis, comportamiento y casos de uso ideales.

## Sintaxis simplificada:

### Sintaxis de Función Normal:

```javascript
function sumar(a, b) {
  return a + b;
}
```

### Sintaxis de Función de Flecha:

```javascript
const sumar = (a, b) => a + b;
```

Las funciones de flecha traen un soplo de aire fresco con su sintaxis concisa, especialmente cuando el cuerpo de la función es una sola expresión. Esta brevedad no solo hace que el código sea más limpio, sino que también mejora la legibilidad, convirtiendo a las funciones de flecha en una opción principal para operaciones más simples.

## Navegando por la palabra clave 'this':

Una de las principales diferencias entre las funciones de flecha y las funciones normales radica en cómo manejan la palabra clave `this`, un aspecto crucial para entender su comportamiento.

### Función Normal:

```javascript
function saludar() {
  console.log("Hola, " + this.nombre);
}

const persona = {
  nombre: "Juan",
  saludar: saludar
};

persona.saludar(); // Salida: Hola, Juan
```

### Función de Flecha:

```javascript
const saludar = () => {
  console.log("Hola, " + this.nombre);
};

const persona = {
  nombre: "Juan",
  saludar: saludar
};

persona.saludar(); // Salida: Hola, undefined
```

A diferencia de las funciones normales, las funciones de flecha carecen de su propio contexto `this`, heredándolo del ámbito circundante. Esta peculiaridad puede conducir a un comportamiento inesperado, particularmente en métodos de objetos.

## El objeto 'arguments':

Las funciones normales vienen con una característica útil: acceso al objeto `arguments`, que contiene todos los parámetros pasados a la función. Por otro lado, las funciones de flecha no tienen su propio objeto `arguments`.

### Función Normal:

```javascript
function mostrarArgumentos() {
  console.log(arguments);
}

mostrarArgumentos(1, "hola", true); // Salida: [1, "hola", true]
```

### Función de Flecha:

```javascript
const mostrarArgumentos = () => {
  console.log(arguments); // ReferenceError: arguments no está definido
}

mostrarArgumentos(1, "hola", true);
```

Cuando se trata de un número variable de parámetros, las funciones normales, con su objeto `arguments`, ofrecen flexibilidad que las funciones de flecha no tienen.

## Métodos de Objetos y Preferencias:

Las funciones normales toman la delantera cuando se trata de definir métodos dentro de objetos, especialmente si necesitas acceso a las propiedades del objeto.

### Función Normal:

```javascript
const carro = {
  marca: "Toyota",
  mostrarMarca: function() {
    console.log("Marca: " + this.marca);
  }
};

carro.mostrarMarca(); // Salida: Marca: Toyota
```

### Función de Flecha:

```javascript
const carro = {
  marca: "Toyota",
  mostrarMarca: () => {
    console.log("Marca: " + this.marca); // Salida: Marca: undefined
  }
};

carro.mostrarMarca();
```

Las funciones normales demuestran ser la elección para los métodos de objeto que requieren acceso al contexto del objeto, ya que las funciones de flecha carecen de un contexto `this` distinto.

## Conclusión:

En resumen, la elección entre funciones de flecha y funciones normales se reduce al caso de uso específico. Las funciones de flecha brillan en escenarios que priorizan la brevedad y no implican la manipulación de la palabra clave `this` o el uso del objeto `arguments`. Por otro lado, las funciones normales brindan más flexibilidad, lo que las hace más adecuadas para métodos de objetos y situaciones donde un contexto `this` claro es crucial.

Comprender las sutilezas entre estos dos tipos de funciones capacita a los desarrolladores para tomar decisiones informadas, seleccionando la herramienta más adecuada para cada escenario de codificación. Tanto las funciones de flecha como las funciones normales desempeñan roles fundamentales en el desarrollo de JavaScript, y dominar cuándo usar cada una sin duda elevará tu competencia en codificación. ¡Feliz codificación!
