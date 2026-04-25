Etiquetas HTML

Etiquetas Obligatorias

html: Etiqueta principal donde se envuelve todo.
head: Contiene los metadatos de la pagina.
`<body>` → Contiene todo el contenido visible de la página
`<!DOCTYPE html>` → Define que el documento es HTML5

Elementos visuales de la pagina

`<button>` → Crea botones interactivos
- type → Tipo de botón (`submit`, `button`, `reset`) Tiene etiqueta de apertura y cierre. 
Ejemplo `<button type="button">Haz clic aquí </button>`

`<h1></h1>`: Titulos de la pagina.

`<img>:` Inserta imagenes. Ejemplo <img src="ruta" alt="texto alternativo">

`<figure>...</figure>`: Seccion donde se colocan imagenes.

`<figcaption>...</figcaption>`: Texto descriptor de una imagen.

`<p>...</p>`: Informacion de tipo parrafo.

`<span></span>`: Informacion breve/abreviada de tipo texto.

`<blockquote></blockquote>`: Bloques largos de texto con sangria.

`<q></q>`: Citas cortas.

`<cite></cite>`: citado de titulo de una obra en cursiva.

`<style>` → Permite agregar estilos CSS dentro del HTML

`<b></b>`: Texto en negrita.

`<i></i>`: Texto en cursiva.

`<u></u>`: Texto subrayado.

`<a>...</a>` → Hipervínculo a otras páginas o recursos
- `href` → URL de destino
- `target="_blank"` → Abre en nueva pestaña (opcional)
- Puede utilizarse como botón mediante clases CSS (ej: class="btn")
`<ul></ul>`: Lista desordenada.

`<ol></ol>`: Lista ordenada.

`<li></li>`: Indica item de la lista.


`<table></table>`: Indica seccion con tabla.

`<th><th>`: Encabezado de la tabla.

`<div></div>` → Contenedor genérico para agrupar elementos

`<br>` → Salto de línea

`<hr>` → Línea horizontal separadora

`<tr></tr>`: Indica una fila.

`<td></td>`: Datos dentro de una fila.

`<thead></thead>`: Categorias de la tabla.

`<tbody></tbody>`: Cuerpo de la tabla con los datos.

`<form>` → Contenedor de formularios
- `action` → URL de destino de los datos  
- `method` → Método de envío (`GET` o `POST`)  

---

 `<label>` → Etiqueta descriptiva de campos
- `for` → Asocia el label con un campo específico  

---

 `<input>` → Campo de entrada de datos
- `type` → Define el tipo de dato (`text`, `email`, `tel`, `password`, `file`, `checkbox`)  
- `name` → Identificador del campo  
- `required` → Indica que el campo es obligatorio  
- `placeholder` → Texto guía dentro del campo  
- `pattern` → Validación mediante expresión regular  
- `autocomplete` → Permite autocompletar datos  
- `inputmode` → Define el tipo de teclado en dispositivos móviles  
- `accept` → Especifica tipos de archivo permitidos (en `file`)  

---

 `<select>` → Lista desplegable
- `name` → Identificador del campo  
- `required` → Indica selección obligatoria  

---

 `<option>` → Opción dentro de una lista
- `value` → Valor enviado al formulario  

---

`<textarea>` → Campo de texto largo
- `name` → Identificador del campo  
- `required` → Campo obligatorio  
- `placeholder` → Texto guía  
- `rows` → Número de filas visibles  
- `cols` → Número de columnas visibles  

---
`maxlength` → Limita la cantidad máxima de caracteres
`type="submit"` → Envía el formulario y activa validaciones

---
Estructura semantica:
`<nav>` → Representa una sección de navegación del sitio (menú principal)
- `<ul>` y `<li>` → Utilizados también para menús de navegación (estructura de navbar)
`<header>` → Encabezado de la página o de una sección (títulos, logo, etc.)

`<footer>` → Pie de página con información adicional (copyright, enlaces, etc.)
     