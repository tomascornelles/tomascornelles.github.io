---
title: "Modifica el historial con HTML5"
date: 2024-01-19
description: "Usa las APIs de HTML5 pushState y replaceState para modificar el historial en  tu web"
tags:
- html
- webdev
en: /en/blog/2024/01/modify-the-history-with-html5
---

Esta semana me he encontrado con el problema de tener que cambiar una URL sin refrescar la página. Estaba ayudando a desarrollar una aplicación web que permitía a actualizar la URL según el estado de la página, pero no queríamos que se refrescara la página con su consiguiente scroll hacia arriba.

Para solucionar este problema, decidí utilizar la APIs pushState. Esta API, junto con replaceState, permiten a los desarrolladores web manipular el historial del navegador, lo que me permitía cambiar la URL de la página sin que el navegador la recargara.

Este enfoque me permitió crear una navegación fluida por el conternido sin refrescarse la página.

## APIs pushState y replaceState en HTML5

Las APIs pushState y replaceState son dos métodos de la API History que permiten a los desarrolladores web manipular el historial del navegador. Estas APIs se introdujeron en HTML5 y ofrecen una forma más flexible de controlar el historial que los métodos tradicionales de back y forward.

### Sintaxis

La sintaxis de las dos APIs es similar:

```javascript
history.pushState(state, title, url);
history.replaceState(state, title, url);
```

El primer parámetro, `state`, es un objeto JavaScript que se almacena en la entrada del historial. El segundo parámetro, `title`, es opcional y se utiliza para establecer el título de la entrada del historial. El tercer parámetro, `url`, es opcional y se utiliza para establecer la URL de la entrada del historial.

### Diferencias entre las dos APIs

La principal diferencia entre las dos APIs es que `pushState()` añade una nueva entrada al historial, mientras que `replaceState()` modifica la entrada actual del historial.

Otra diferencia es que `pushState()` no afecta a la URL de la barra de direcciones, mientras que `replaceState()` sí lo hace.

**Ejemplos de código**

El siguiente ejemplo muestra cómo utilizar `pushState()` para añadir una nueva entrada al historial:

```javascript
const state = {
  foo: "bar",
};

history.pushState(state, "Página 1", "pagina1.html");
```

Este código añadirá una nueva entrada al historial con el estado `{ foo: "bar" }`, el título "Página 1" y la URL "pagina1.html".

El siguiente ejemplo muestra cómo utilizar `replaceState()` para modificar la entrada actual del historial:

```javascript
const state = {
  foo: "baz",
};

history.replaceState(state, "Página 2", "pagina2.html");
```

Este código modificará la entrada actual del historial con el estado `{ foo: "baz" }`, el título "Página 2" y la URL "pagina2.html".

### Ejemplos de uso de las APIs pushState y replaceState en la web

Las APIs pushState y replaceState se utilizan en una variedad de sitios web para proporcionar una variedad de funcionalidades. Algunos ejemplos incluyen:

- **Navegación fluida:** Muchas aplicaciones web utilizan las APIs pushState y replaceState para crear una navegación fluida que no requiere que el usuario haga clic en un botón o enlace. Por ejemplo, la aplicación web de Gmail utiliza estas APIs para permitir a los usuarios navegar entre las pestañas de su bandeja de entrada sin tener que hacer clic en ellas.
- **Almacenamiento de datos en el historial:** Las APIs pushState y replaceState también se pueden utilizar para almacenar datos en el historial del navegador. Por ejemplo, muchos sitios web utilizan estas APIs para almacenar el estado de una aplicación web, como la selección de un elemento de menú o el valor de un campo de formulario.
- **Funcionalidad de historial personalizado:** Las APIs pushState y replaceState también se pueden utilizar para añadir funcionalidad de historial personalizado a una aplicación web. Por ejemplo, muchos sitios web utilizan estas APIs para añadir funcionalidad de historial a una aplicación web que no está diseñada para ello.
- **Actualizar la URL sin refrescar la página**: Puede que en tu aplicación quieras añadir parámetros a la URL en función del contenido modificado, pero sin tener que actualizar la página cada vez, de manera que puedas compartir la URL y ver el mismo contenido en el mismo estado

Los desarrolladores web pueden utilizar las APIs pushState y replaceState para mejorar la funcionalidad de sus propias páginas web.

## Conclusión

En mi caso, utilicé la API pushState porque quería añadir una nueva entrada al historial con la nueva URL. Esto me permitió que el navegador detectara la nueva entrada del historial y cargara la página correspondiente cuando el usuario hiciera clic en una pestaña.

Si en lugar de añadir una nueva entrada al historial, hubiera querido modificar la entrada actual del historial, habría utilizado la API replaceState. Esto me habría permitido cambiar la URL de la página sin que el navegador la recargara, pero el historial habría mostrado la nueva URL.

En resumen, las APIs pushState y replaceState son herramientas poderosas que pueden utilizarse para mejorar la funcionalidad de las páginas web. Los desarrolladores web deben estar familiarizados con estas APIs para poder aprovecharlas al máximo.
