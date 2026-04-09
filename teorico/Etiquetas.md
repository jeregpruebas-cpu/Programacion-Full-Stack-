Etiquetas HTML
Etiquetas Obligatorias
html: Etiqueta principal donde se envuelve todo.
head: Contiene los metadatos de la pagina.
Elementos visuales de la pagina
<button>...</button>: Crea botones. Tiene etiqueta de apertura y cierre. Ejemplo <button type="button">Haz clic aquí </button>

<h1></h1>: Titulos de la pagina.

<img>: Inserta imagenes. Ejemplo <img src="ruta" alt="texto alternativo">

<figure>...</figure>: Seccion donde se colocan imagenes.

<figcaption>...</figcaption>: Texto descriptor de una imagen.

<p>...</p>: Informacion de tipo parrafo.

<span></span>: Informacion breve/abreviada de tipo texto.

<blockquote></blockquote>: Bloques largos de texto con sangria.

<q></q>: Citas cortas.

<cite></cite>: citado de titulo de una obra en cursiva.

<b></b>: Texto en negrita.

<i></i>: Texto en cursiva.

<u></u>: Texto subrayado.

<a>...</a>: Hipervinculo a otros lugares. Ejemplo: <a href="otraPagina.html" target="_blank">Enlace</a>

<ul></ul>: Lista desordenada.

<ol></ol>: Lista ordenada.

<li></li>: Indica item de la lista.

<table></table>: Indica seccion con tabla.

<th><th>: Encabezado de la tabla.

<tr></tr>: Indica una fila.

<td></td>: Datos dentro de una fila.

<thead></thead>: Categorias de la tabla.

<tbody></tbody>: Cuerpo de la tabla con los datos.

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
