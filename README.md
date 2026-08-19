# 🎨 Colorfly Studio – Generador de Paletas de Colores Aleatorios


Aplicación web estática e interactiva que permite generar paletas de colores aleatorias de forma rápida y visual.

🔗 **Demo en vivo:** [https://matiasg42003-lgtm.github.io/ProyectoM1-MatiasGarcia/](https://matiasg42003-lgtm.github.io/ProyectoM1-MatiasGarcia/)  
📦 **Repositorio:** [https://github.com/matiasg42003-lgtm/ProyectoM1-MatiasGarcia](https://github.com/matiasg42003-lgtm/ProyectoM1-MatiasGarcia)

---

## 📋 Descripción del proyecto

Herramienta sencilla que permite:

- Elegir la cantidad de colores de la paleta (6, 8 o 9).
- Generar colores en formato **HSL** o **RGBA**.
- Visualizar cada color junto a su código.
- Copiar un color individual haciendo clic sobre la tarjeta.
- Copiar toda la paleta de una sola vez.
- Recibir feedback visual (toast) al copiar.
- Usar la aplicación cómodamente en desktop y dispositivos móviles.

---

## 🖼️ Capturas y flujo de la aplicación

[INICIO](Documentacion/capturas/inicio.png)

[PALETA-GENERADA](Documentacion/capturas/paleta-generada.png)

[RESPONSIVE](Documentacion/capturas/responsive.png)

[FLUJO](Documentacion/flujo.gif)


### Flujo principal

1. El usuario selecciona la **cantidad de colores** y el **formato**.
2. Hace clic en **“Generar paleta de colores”**.
3. Se renderizan las tarjetas de color de forma dinámica.
4. Puede hacer clic en una tarjeta para copiar el código individual.
5. Puede usar el botón **“Copiar”** para copiar toda la paleta.

## 🛠️ Tecnologías

- HTML5: Estructura de la página.
- CSS3: Estilos, diseño móvil y animaciones.
- JavaScript: Lógica del proyecto y eventos.
- Git & GitHub: Control de código y despliegue web.
- Fuentes e Iconos: Google Fonts y Font Awesome.

## ⚙️ Decisiones técnicas

### 1. Generación de colores
- Se implementaron dos generadores independientes:
  - `generarColorHSL()` → valores aleatorios de tono, saturación y luminosidad.
  - `generarColorRGBA()` → valores aleatorios de R, G y B con alpha fijo en 1.
- El formato se elige mediante un `<select>` y se aplica al momento de generar la paleta.

### 2. Renderizado dinámico
- Al hacer clic en “Generar paleta” se limpia el contenedor (`innerHTML = ""`) y se crean las tarjetas con `document.createElement`.
- Cada tarjeta es un `div` con clase `.color-card` que recibe el color como `background-color` y muestra el código como texto.

### 3. Accesibilidad
- Se utilizaron `<label for="...">` asociados a cada `<select>`.
- Se eliminó el outline nativo y se aplicó un borde de color de acento en `:focus`.
- Se usó HTML semántico (`header`, `main`, `section`, `nav`, `footer`).

### 4. Experiencia de usuario
- Toast de confirmación al copiar color individual o toda la paleta.
- Animaciones sutiles en hover (escala y desplazamiento).
- Selects personalizados (`appearance: none` + flecha SVG).
- Diseño responsive con media queries a partir de 992px.

### 5. Estructura del proyecto 

```
Proyecto-Paleta/
├── css/styles.css
├── js/script.js
├── Documentacion/
│   ├── capturas/
│   ├── flujo.gif
│   └── uso-ia.md
├── index.html
└── README.md
```

---

## 🤖 Documentación del uso de Inteligencia Artificial

Durante el desarrollo del proyecto utilicé **ChatGPT como herramienta de apoyo y aprendizaje**, principalmente para comprender conceptos, resolver errores puntuales, revisar decisiones de implementación y mejorar aspectos visuales y de documentación.

### Principales usos de la IA

* **JavaScript y lógica:** explicación paso a paso de conceptos como `Math.random()`, `Math.floor()`, funciones, eventos, `map()`, `join()`, `children`, `innerHTML` y manipulación del DOM.
* **Generación de colores:** orientación para estructurar las funciones `generarColorHSL()` y `generarColorRGBA()` y comprender cómo generar valores aleatorios dentro de los rangos correspondientes.
* **Renderizado dinámico:** ayuda para comprender cómo crear las tarjetas de colores mediante `document.createElement()` y cómo actualizar dinámicamente el contenedor.
* **Copiado al portapapeles:** asistencia para detectar y corregir problemas en la función de copiado individual y en la copia de toda la paleta.
* **Experiencia de usuario:** sugerencias para implementar el toast de confirmación, estados `hover` y `focus`, animaciones y comportamiento visual de los controles.
* **CSS y diseño responsive:** orientación para mejorar variables CSS, tipografías, colores, tamaños, posiciones y adaptar la interfaz a distintos tamaños de pantalla.
* **Accesibilidad:** revisión de aspectos como el uso de etiquetas `label`, estados `focus` y estructura semántica HTML.
* **Git y GitHub:** ayuda para comprender el flujo de trabajo con commits, ramas y despliegue mediante GitHub Pages, además de la resolución de errores durante el deployment.
* **Documentación:** asistencia para organizar el README, explicar las decisiones técnicas y preparar la documentación del proyecto.

### Metodología de uso

El principal objetivo fue **aprender mientras desarrollaba**. Cuando tenia un problema, utilizaba la IA para tener una explicación, probar una solución y modificar o comprobar el código por mi cuenta.

También se utilizaron capturas de algunas conversaciones relevantes como evidencia del proceso de asistencia con IA.

La documentación detallada de los prompts y ejemplos utilizados durante el desarrollo se encuentra en:

[USO-DE-LA-IA-DOCUMENTACION](Documentacion/uso-ia.md)
