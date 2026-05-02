# Estándares de Codificación (HTML y CSS)
 ## HTML
1. Estructura semántica
Usar una estructura semántica:
`<header>, <nav>, <main>, <section>, <article>, <footer>`
- Usar `<section>` solo cuando haya un bloque de contenido con sentido propio
  Evitar usar `<section>` solo para agrupar sin significado
- `<article>` debe usarse solo para contenido independiente (ej: noticias, testimonios)
No usar `<article>` para layout o estructura
- Usar `<main>` solo una vez por página
- Cosas que no puede pasar
 Prohibido usar `<div>`
 Prohibido usar `<script>` (aun no se utiliza)
 Prohibido usar `<hr>`
 Prohibido usar `<br>`
2. Estructura base obligatoria

Todas las páginas deben tener la misma estructura:

`<header>`
`<nav>`
`<main>`
`<footer>`

El header y footer deben mantener una estructura y estilo consistente en todas las páginas

3. Configuración básica del documento

Todo documento HTML debe incluir:

`<!DOCTYPE html>`
`<html lang="es">`
`<head>`
  `<meta charset="UTF-8">` 
4. Buenas prácticas
Mantener una indentación consistente (2 o 4 espacios, pero siempre igual)
Usar nombres claros en clases e IDs (ej: nav-principal, footer-links)
Evitar etiquetas innecesarias
Todas las imágenes deben tener atributo alt
Formularios con etiquetas `<label>` correctamente asociadas (for + id)
5. Navegación
El `<nav>` debe ser igual en todas las páginas
Debe permitir navegar entre todas las secciones del sitio
Los enlaces deben tener texto claro (evitar “click aquí”)
 ## CSS
1. Uso correcto
Separar el CSS en archivos externos (styles.css)
No usar style="" en HTML
No usar `<style>` dentro del HTML
No usar `<script>`
Usar clases en lugar de IDs para estilos
2. Organización del CSS

Mantener un orden lógico:

Layout (display, position)
Box model (margin, padding)
Tipografía
Colores

Organizar el archivo por secciones:

Reset / General
Header
Nav
Main
Footer
3. Reutilización y modularidad
Si algo se repite más de una vez → convertirlo en clase reutilizable
Evitar copiar y pegar estilos

Crear componentes:

Botones
Cards
Navbar
Footer

Ejemplo:

.btn { 
  padding: 10px;
  border-radius: 5px;
}

.btn-primary {
  background: black;
  color: white;
}
4. Naming convention
Usar nombres en minúscula
Separar palabras con guiones (kebab-case)

✔ footer-links
❌ footerLinks
❌ caja1

5. Estados de interacción
Botones y enlaces deben tener estado :hover
Mantener coherencia visual
 Footer (Buenas prácticas)
Debe estar al final del documento
Debe ser igual en todas las páginas
Debe incluir:
Información de contacto
Redes sociales
Derechos de autor

 Consistencia
Mantener mismos tamaños de:
Tipografías
Botones
Espaciados
Usar una paleta de colores definida
Evitar estilos distintos en cada página
 Responsive (básico)
Evitar tamaños fijos excesivos
Adaptar contenido a diferentes pantallas
 Separación de responsabilidades
HTML → estructura
CSS → diseño
 No mezclar ambos
 
 
 ### Buenas prácticas a evitar
 CSS inline (style="")
 Uso excesivo de IDs
 Código duplicado
 Nombres confusos (caja1, coso)
 Mezclar estructura (HTML) con diseño (CSS)

 #### Anadidos
Usar comentarios en CSS:
/* Navbar */
Organizar el CSS por secciones
Mantener el código limpio y legible