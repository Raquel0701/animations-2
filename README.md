# Animaciones Avanzadas con Cards y Resumen Interactivo

Este proyecto muestra una interfaz con tarjetas animadas que representan diferentes planes (A, B, C) y un resumen interactivo con barras de velocidad, almacenamiento y usuarios. Al hacer clic en una tarjeta, las barras se actualizan de manera animada según el plan seleccionado.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página.
- **CSS3 (SASS)**: Estilos con animaciones avanzadas, incluyendo efectos 3D en las tarjetas y animaciones en las barras.
- **JavaScript (Anime.js)**: Librería para las animaciones avanzadas.
- **SASS**: Preprocesador CSS para una mejor organización del código.

## Funcionalidades

1. **Animación de Entrada**: Las tarjetas aparecen con una animación de entrada, con un pequeño desplazamiento y rotación.
2. **Animación de Hover**: Al pasar el mouse sobre las tarjetas, se agrandan y rotan en 3D, con una sombra.
3. **Animación de Selección**: Al hacer clic en una tarjeta, se destaca con un cambio de fondo y un efecto de rebote.
4. **Resumen Interactivo**: Al hacer clic en una tarjeta, las barras de velocidad, almacenamiento y usuarios cambian de tamaño y se animan.

## Instalación

### Requisitos Previos

- **Node.js**: Asegúrate de tener instalado [Node.js](https://nodejs.org/).
- **SASS**: Necesitarás tener instalado el preprocesador SASS para compilar los archivos `.scss` en archivos `.css`. Puedes instalar SASS globalmente usando el siguiente comando:

```bash
npm install -g sass
```

## Pasos para Ejecutar el Proyecto

Clonar el repositorio: Si aún no tienes el proyecto, clónalo desde tu repositorio.

```bash
git clone https://github.com/tu_usuario/animaciones-proyecto.git
cd animaciones-proyecto
```

## Compilar los archivos SCSS a CSS:

Para compilar el archivo styles.scss en un archivo CSS, puedes ejecutar el siguiente comando en la terminal desde la raíz del proyecto:

```bash
sass style.scss styles.css
```

Si prefieres que el compilador observe y actualice automáticamente los cambios, puedes usar:


```bash
sass --watch style.scss:styles.css
```
Esto hará que cada vez que guardes el archivo .scss, automáticamente se actualice el archivo .css.

Abrir el proyecto en tu navegador: Una vez que hayas compilado los archivos CSS, simplemente abre el archivo index.html en tu navegador para ver la interfaz en acción.

open index.html

## Estructura del Proyecto
El proyecto tiene la siguiente estructura de archivos:

```bash
animaciones-proyecto/
│
├── index.html # Archivo principal HTML
├── script.js # Lógica y animaciones de JavaScript
├── style.scss # Estilos en SASS
├── styles.css # Estilos generados a partir de SCSS
├── assets/ # Archivos estáticos como imágenes, fuentes, etc.

```