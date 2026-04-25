# Selector de tipos
## Selecciona elementos por su tipo

 Selecciona todos los elementos del tipo `<a>`, 
 El tipo se refiere al tipo de etiqueta, por lo que div, py ulSon todos tipos de elementos diferentes.

- Selecciona todos los elementos `<a>`

```
a
```

- Selecciona todos los elementos `<p>`
```
p
```

# Selector de identificación
## Selecciona elementos por su id
#id
Selecciona el elemento con un específico id. También puedes combinar el selector de ID con el selector de tipo.

### Ejemplos

- Seleciona todos los elementos `<a>` cuya id sea "redes"
```
a#redes
```

# Selector de descendientes
## Selecciona un elemento que esta dentro de otro
Selecciona todo B dentro de A.
B se llama descendiente porque está dentro de otro elemento.

### Ejemplos

- Selecciona todos los `<button>` que esten dentro de las etiquetas `<a>`
```
a button
```

- Selecciona todos los `<p>` que esten dentro de etiquetas cuya id sea "mensaje"
```
#mensaje p
```

# Selector de clases
## Selecciona elementos por su clase
```
.clase
```
El selector de clase selecciona todos los elementos con ese atributo de clase. Los elementos solo pueden tener un ID, pero muchas clases.
### Ejemplos

- Selecciona todas las etiquetas cuya clase sea "enlace"
```
.enlace
```
- Selecciona todas las etiquetas `<a>` cuya clase sea "redes"
```
a.redes
```

# Combinador de comas
## Esto selecciona todo A y B elementos. Puedes combinar cualquier selector de esta manera y puedes especificar más de dos.
### Ejemplo

- Selecciona todas las etiquetas <a>, asi como todas las etiquetas cuya clase sea "enlace"
```
a, .enlace
```

# Selector universal
## Al utilizar `*` se seleccionan todos los elementos dentro de las etiquetas correspondientes
### Ejemplo
article *
Selecciona todos los elementos contenidos dentro de las etiquetas `<article>`

- Selecciona todos los elementos presentes
```
*
```

# Selector de "hermanos adyacentes"
## Seleccione un elemento que siga directamente a otro elemento
### Ejemplo

- Esto selecciona todo B elementos que siguen directamente A. Los elementos que se suceden se llaman hermanos. Están al mismo nivel o profundidad.

```
A + B
```
En el marcado HTML para este nivel, los elementos que tienen la misma sangría son hermanos.

# Selector general de hermanos
## Seleccione elementos que siguen a otro elemento
A ~ B

Puedes seleccionar todos los hermanos de un elemento que le siguen. Esto es como el Selector Adyacente (A + B) excepto que obtiene todos los siguientes elementos en lugar de uno.
### Ejemplos

- Selecciona todo B que siguen a a A
```
A ~ B 
```

# Selector de niños
## Seleccione hijos directos de un elemento

Puede seleccionar elementos que sean hijos directos de otros elementos. Un elemento secundario es cualquier elemento que está anidado directamente en otro elemento.
```
A > B 
```

Los elementos que están anidados más profundamente que eso se denominan elementos descendientes.
Ejemplos

- Selecciona todo B que son niños directos A
```
A > B 
```
---


# Clases reutilizables

### `.btn`
Clase utilizada para estilizar enlaces como botones.

Propiedades:
- display: inline-block; → Permite que el elemento se comporte como un bloque pero en línea (acepta padding y tamaño)
- background-color: white; → Define el color de fondo
- color: black; → Color del texto
- border: 2px solid black; → Borde del botón
- padding: 5px 20px; → Espaciado interno (alto y ancho del botón)
- cursor: pointer; → Cambia el cursor al pasar el mouse
- transition: 0.2s; → Suaviza cambios visuales (hover)

Uso:
<a href="..." class="btn">Texto</a>

---

### `.center`
Clase para centrar contenido de texto.

Propiedades:
- text-align: center; → Centra el contenido en línea (texto, enlaces, etc.)

---

# Navegación (Navbar)

### `.navbar`
Contenedor principal de la barra de navegación.

Propiedades:
- background-color: white; → Color de fondo del navbar
- border-bottom: 2px solid black; → Línea inferior separadora
- padding: 10px 20px; → Espaciado interno

---

### `.nav-container`
Contenedor interno del navbar.

Propiedades:
- display: flex; → Activa el modelo flexible (Flexbox)
- justify-content: space-between; → Separa los elementos (uno a la izquierda, otro a la derecha)
- align-items: center; → Alinea verticalmente los elementos al centro
- width: 100%; → Ocupa todo el ancho disponible
- max-width: 1200px; → Limita el ancho máximo (evita que se estire demasiado)
- margin: 0 auto; → Centra el contenedor horizontalmente

Función:
Distribuir el logo a la izquierda y el menú a la derecha

---

### `.nav-logo`
Contenedor del logo o nombre del sitio.

Propiedades (aplicadas al `<a>` interno):
- font-size: 20px; → Tamaño del texto
- font-weight: bold; → Texto en negrita
- color: black; → Color del texto
- text-decoration: none; → Elimina el subrayado del enlace

---

### `.nav-menu`
Lista de navegación.

Propiedades:
- display: flex; → Coloca los elementos en línea horizontal
- gap: 20px; → Espacio entre los elementos del menú
- list-style: none; → Elimina los puntos de la lista
- margin: 0; → Elimina el margen externo por defecto
- padding: 0; → Elimina el espacio interno por defecto

---

### `.nav-menu li a`
Enlaces dentro del menú.

Propiedades:
- text-decoration: none; → Elimina el subrayado
- color: black; → Color del texto
- padding: 5px 10px; → Área clickeable más grande
- transition: 0.2s; → Suaviza el efecto hover

---

### `.nav-menu li a:hover`
Efecto al pasar el mouse sobre los enlaces.

Propiedades:
- background-color: black; → Cambia el fondo
- color: white; → Cambia el color del texto

---

# Conceptos importantes

## Separación de estilos

- global.css → Contiene estilos reutilizables en todo el sitio (botones, navbar, tipografía)
- pagTrabajo.css → Contiene estilos específicos de una página

Orden de carga:
1. global.css
2. estilos específicos

Esto permite reutilizar código sin generar conflictos.

---

## Buenas prácticas aplicadas

- Uso de clases en lugar de estilos inline
- Separación entre estructura (HTML) y diseño (CSS)
- Uso de Flexbox para distribución de elementos
- Eliminación de estilos por defecto del navegador (margin, padding en listas)
