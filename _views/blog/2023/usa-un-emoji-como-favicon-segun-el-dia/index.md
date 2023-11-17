---
title: Usa un emoji como favicon según el día
date: 2023-11-11
description: Utilizar emojis como favicon te permite hacer cosas como personalizarlo segun el dia.
tags:
  - favicon
  - javascript
  - svg
---

Hace tiempo que Lea Verou [propuso una forma de usar emojis](https://twitter.com/LeaVerou/status/1241619866475474946) como favicon en tu web, pero he pensado que puede ser interesante recordar que con javascript se puede personalizar ese emoji según los parámetros que quieras.

En mi caso he pensado cambiar el favicon segun la fecha, como hago en esta web, aunque he cambiado el codigo para hacerlo más corto y solo con emojis, pues yo por defecto uso el svg de mi logo.

## Vayamos por partes

En primer lugar definimos los iconos que queremos. Puedes usar cualquier selector de emojis para escoger. Primero nuestro icono por defecto y despues un objeto cuya clave es el mes seguido del dia separado por un guión bajo (mm_dd) y el valor es el propio emoji. Yo he marcado un dia de verano, halloween y fiestas de navidad.

``` javascript
// Definimos los iconos
const ICON_DEFAULT = '🖥️';
const ICONS = {
  '8_15': '🏖️',
  '10_31': '🎃',
  '12_24': '🎄',
  '12_25': '🎁',
  '12_31': '️🕰️',
}
```

A continuación recogemos la fecha actual y montamos el dia con el formato anterior (mm_dd)

``` javascript
// Recogemos y formamos la fecha
const DATE = new Date();
const TODAY = `${DATE.getMonth() + 1}_${DATE.getDate()}`
```

Y por último la magia, seleccionamos el elemento que recibirá el favicon, será el `link[type='image/svg+xml']`. Después completamos el `href` de la etiqueta con el `data` del svg, el cual inserta el emoji del dia si existe o el emoji por defecto en otro caso.

``` javascript
// Asignamos como imagen del favicon el emoji escogido
const LINK = document.querySelector("link[type='image/svg+xml']");
LINK.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">${ICONS[TODAY] || ICON_DEFAULT}</text></svg>`;
```

## Otras aplicaciones

Está claro que se puede condicionar de muchas otras formas, iconos del clima si dispones de datos, estado de la plataforma, o si el usuario está logueado. Un sin fin de opciones y sin tener que diseñar ningún icono ☻.

## Todo junto

``` javascript
// Definimos los iconos
const ICON_DEFAULT = '🖥️';
const ICONS = {
  '8_15': '🏖️',
  '10_31': '🎃',
  '12_24': '🎄',
  '12_25': '🎁',
  '12_31': '️🕰️',
}

// Recogemos y formamos la fecha
const DATE = new Date();
const TODAY = `${DATE.getMonth() + 1}_${DATE.getDate()}`

// Asignamos como imagen del favicon el emoji escogido
const LINK = document.querySelector("link[type='image/svg+xml']");
LINK.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">${ICONS[TODAY] || ICON_DEFAULT}</text></svg>`;
```

## Conclusiones

Además de usar emojis en el favicon, el svg te permite una cantidad de transformaciones muy superior a los iconos tradicionales. Además permite incrustar el codigo svg en el DOM y evitamos más peticiones.

Y tú ¿usas svg para tus favicons? ¿Sueles emplear emojis en tus pproyectos? ¿Te parece útil esta técnica?
