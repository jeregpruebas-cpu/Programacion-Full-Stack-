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

