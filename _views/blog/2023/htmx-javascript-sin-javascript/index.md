---
title: "HTMX: JavaScript Sin JavaScript"
date: 2023-12-22
description: "Descubre cómo HTMX, la biblioteca JavaScript ligera, se integra perfectamente con tu backend para mejorar la experiencia del usuario sin cambiar tu stack de desarrollo frontend. "

en: /en/blog/2023/htmx-javascript-without-javascript
---

En el siempre cambiante panorama del desarrollo web, la búsqueda constante de herramientas que simplifiquen y mejoren la experiencia del usuario ha llevado a la creación y adopción de diversas tecnologías. [HTMX](https://htmx.org/), una biblioteca JavaScript relativamente nueva, ha ganado popularidad al proporcionar una forma eficiente de **actualizar partes específicas de una página web sin necesidad de recargarla por completo**. Sin embargo, es imperativo entender que HTMX no pretende ser un reemplazo directo de ningún framework JavaScript, sino más bien una herramienta complementaria que colabora estrechamente con el backend.

## ¿Qué es HTMX?

HTMX **es una biblioteca JavaScript** ligera que facilita la actualización dinámica de partes específicas de una página web. Su nombre es una amalgama de "HTML" y "XMLHttpRequest", reflejando su capacidad para manipular el DOM (Modelo de Objeto del Documento) de manera ágil y eficiente.

A diferencia de los frameworks JavaScript que buscan redefinir completamente la forma en que se desarrolla el frontend, **HTMX se centra en mejorar la interacción del usuario sin imponer una estructura de código específica**. Utiliza atributos HTML para definir la lógica del lado del cliente, lo que simplifica su implementación sin requerir grandes cantidades de JavaScript.

## Colaboración Fructífera entre Backend y Frontend

Una de las características sobresalientes de HTMX es su capacidad para facilitar la comunicación entre el frontend y el backend de manera fluida. La actualización de elementos específicos sin recargar la página reduce la carga en el servidor y mejora significativamente la velocidad de respuesta.

Contrariamente a la tendencia de trasladar la carga hacia el frontend, como hacen muchos frameworks JavaScript, HTMX trabaja en colaboración con el backend. Esto significa que el backend sigue siendo la fuente única de verdad, simplificando la lógica del frontend y garantizando la coherencia de los datos.

## Simplicidad y Flexibilidad: Pilares de HTMX

HTMX se destaca por su simplicidad y flexibilidad. **Al no imponer una estructura rígida, permite a los desarrolladores integrarlo gradualmente en proyectos existentes**. La adopción de HTMX no implica una reescritura masiva del código, ya que es posible implementarlo selectivamente en partes específicas de la aplicación.

Además, al basarse en atributos HTML, la implementación se vuelve más legible y comprensible. No es necesario aprender un conjunto completo de nuevos conceptos o paradigmas, lo que facilita la adopción de HTMX por parte de equipos de desarrollo. Esto permite a los desarrolladores centrarse en la funcionalidad y la experiencia del usuario sin perderse en la complejidad de la tecnología subyacente.

## HTMX en Acción: Un Ejemplo Práctico

Veamos un ejemplo simple de cómo HTMX puede mejorar la interactividad de una página web. En este ejemplo vamos a usar nodeJs como backend, pero la parte del HTMX es aplicable a cualquier tecnología que quieras usar. Supongamos que tenemos una lista de tareas y queremos permitir a los usuarios marcar una tarea como completada sin recargar toda la página. Aquí hay un fragmento de código utilizando HTMX:

1. Primero, asegúrate de tener Node.js y npm instalados en tu sistema.
2. Crea un archivo `package.json` con el siguiente contenido:

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

1. Ejecuta `npm install` para instalar las dependencias.
2. Crea un archivo `server.js` con el siguiente contenido:

```jsx
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/complete_task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Lógica para marcar la tarea como completada en la base de datos
  // ...

  // Devolver la respuesta
  res.send('Tarea completada exitosamente');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

```

3. Crea una carpeta llamada `public` y dentro de ella un archivo `index.html` con el siguiente contenido:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTMX Ejemplo</title>
</head>
<body>
  <ul>
    <li hx-get="/complete_task/1" hx-swap="outerHTML">Tarea 1</li>
    <li hx-get="/complete_task/2" hx-swap="outerHTML">Tarea 2</li>
    <li hx-get="/complete_task/3" hx-swap="outerHTML">Tarea 3</li>
  </ul>
  <script src="https://unpkg.com/htmx.org@1.9.9"></script>
</body>
</html>

```

4. Ejecuta `npm start` para iniciar el servidor.

Este ejemplo utiliza Express para el servidor y HTMX para las solicitudes del lado del cliente. Al hacer clic en cada tarea, se realizará una solicitud al servidor para marcar la tarea como completada, y HTMX actualizará la interfaz de usuario sin recargar la página completa. Este es solo un ejemplo básico, y en un entorno de producción, deberías implementar la lógica del servidor de manera más robusta y segura.

## Conclusión: HTMX como Complemento Estratégico

En resumen, HTMX se presenta como una herramienta valiosa en el arsenal de cualquier desarrollador web. Su enfoque en mejorar la interactividad del usuario sin reemplazar a los frameworks JavaScript existentes lo convierte en una adición pragmática al ecosistema de desarrollo web.

Al colaborar estrechamente con el backend y ofrecer simplicidad y flexibilidad, HTMX se posiciona como una opción atractiva para proyectos que buscan un equilibrio entre eficiencia y complejidad. En lugar de ser un reemplazo, HTMX es una ayuda estratégica que potencia la capacidad del backend para proporcionar experiencias web dinámicas y eficientes. Su naturaleza no invasiva y su capacidad para integrarse fácilmente hacen de HTMX una opción valiosa para desarrolladores que buscan mejorar la interactividad de sus aplicaciones web de manera efectiva y sin complicaciones.
