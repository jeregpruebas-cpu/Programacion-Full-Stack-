# <p align=center>Ajustando el contenido de la página


---
##  ISSUE 42: Aplicar y comparar modelos de caja en secciones principales

### Clases, estilos, significado y atributos


---

## Clases y estilos utilizados

### `.bloque`
Se usa en las secciones principales de contenido, como “Nuestra Propuesta de valor”, “Cobertura Logística” y “Categorías de Productos”.

**Propiedades aplicadas:**
- `width: 80vw` → Hace que la sección ocupe un ancho relativo al tamaño de la ventana.
- `padding: 30px` → Agrega espacio interno entre el contenido y el borde.
- `margin: 20px auto` → Centra la sección horizontalmente.
- `box-sizing: content-box` → El `padding` y el `border` se suman al ancho definido.

### `.flex-container`
Se usa en la sección de testimonios.

**Propiedades aplicadas:**
- `display: flex` → Coloca los testimonios en línea.
- `justify-content: space-between` → Distribuye el espacio entre los elementos.
- `flex-direction: row-reverse` → Invierte el orden visual de los elementos.
- `width: (nuevo valor)` → Mantiene un ancho adaptable al tamaño de la pantalla.
- `padding: 30px` → Agrega espacio interno.
- `border` → Delimita la sección.
- `margin: 20px auto` → Centra el contenedor.
- `box-sizing: content-box` → El tamaño total aumenta al agregar `padding` y `border`.

---

## Código utilizado

### Sección principal con `content-box`
```
.bloque {
    width: 80%;
    padding: 30px;
    border: 10px solid var(--azul-gris);
    margin: 20px auto;
    box-sizing: content-box;
    border-bottom: 2px solid var(--gris-oscuro);
}
```

Sección de testimonios con content-box
```
 .flex-container { 
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 80%;
    padding: 30px;
    border: 10px solid var(--amarillo);
    margin: 20px auto;
    box-sizing: content-box;
}

.testimonio {
    width: 30%;
    height: auto;
}
```
Explicación simple

¿Qué hace content-box?

Con content-box, el ancho definido corresponde solo al contenido.
Eso significa que el padding y el border se agregan aparte, haciendo que la caja total crezca.

¿Qué se observó en la página?

Al usar content-box en las secciones principales:

la tabla se adapta mejor dentro de su contenedor,
los testimonios conservan más espacio,
el contenido no queda apretado,
la sección puede crecer si necesita más espacio.

Esto fue útil para el diseño de esta página, porque hay contenido amplio que necesita respirar y mostrarse con comodidad.

Comparación realizada

Durante la prueba se comparó también con border-box.

¿Qué hace border-box?

Con border-box, el padding y el border se incluyen dentro del ancho definido.

¿Qué se observó?

En la sección de testimonios, el contenido quedó más ajustado y comprimido.
En ese caso, la caja mantuvo su tamaño, pero el contenido perdió espacio visual. En cambio se pudo observar que con el texto la utilizacion de este hace que si o si este dentro de la caja, pero si se utiliza mucho texto.

Capturas de evidencia

Captura 1 — Resultado con content-box
![alt text](../../todoEnBlanco/assets/img/border.png)

Se observa que las secciones principales se expanden de forma natural y el contenido se mantiene visible y ordenado.



Captura 2 — Comparación con border-box
![alt text](../../todoEnBlanco/assets/img/content.png)

Se observa que el contenido queda más comprimido dentro de la caja definida.



Conclusión

Luego de realizar la comparación, se concluye que para esta página resulta más conveniente usar content-box en los testimonios, porque permite que el contenido se adapte mejor cuando hay testimonios e imágenes. A su vez tambien se decidio usar border-box para que los section que contengan solo texto, tengan un tamaño predeterminado.

border-box sigue siendo útil en otros elementos más pequeños o controlados, pero para el caso de los testimonios content-box ofrece un resultado más cómodo y visualmente adecuado para el contenido principal del sitio.

# ISSUE 45 — Reorganización visual del encabezado sin modificar HTML

## Objetivo
Reorganizar visualmente el encabezado de la página utilizando únicamente CSS, sin realizar cambios en la estructura HTML existente.

El objetivo fue:

- ubicar el logo y el título hacia el extremo derecho,
- mantener la navegación centrada,
- conservar la estructura semántica original.

---

## Etiquetas utilizadas

- `<nav>` → Contenedor semántico de la navegación principal.
- `<section>` → Agrupa el contenido interno del encabezado.
- `<span>` → Contenedor utilizado para el logo o nombre del sitio.
- `<ul>` → Lista no ordenada para los enlaces de navegación.
- `<li>` → Elementos individuales del menú.
- `<a>` → Enlaces de navegación entre páginas.

---

## Contenedores y selectores utilizados

### `.navbar`
Contenedor principal del encabezado visual.

**Propiedades utilizadas:**
- `border-bottom` → Genera una separación visual inferior.
- `padding` → Agrega espacio interno.

---

### `.nav-container`
Contenedor interno que organiza el logo y la navegación.

**Código aplicado:**

```
.nav-container {
    position: relative;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    max-width: 1200px;
    margin: 0 auto;
}
```
<u>display: flex</u>

Activa Flexbox para distribuir los elementos horizontalmente.

<u>justify-content: flex-end</u>

Desplaza el logo y el título hacia el extremo derecho del contenedor.

<u>align-items: center</u>

Centra verticalmente los elementos dentro del encabezado.

<u>position: relative</u>

Permite utilizar posicionamiento absoluto en elementos internos tomando este contenedor como referencia.

.nav-menu

Lista de navegación principal.

Código aplicado:
```
.nav-menu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    list-style: none;
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
}
```
### Explicación de las propiedades

`position: absolute`

Permite posicionar la navegación libremente dentro del contenedor.

`left: 50%`

Mueve el inicio del menú hacia el centro horizontal.

`transform: translateX(-50%)`

Corrige la posición para que el menú quede perfectamente centrado.

`display: flex`

Organiza los enlaces en línea horizontal.

`gap`

Agrega separación entre los elementos del menú.

`flex-wrap: wrap`

Evita problemas de desbordamiento en pantallas pequeñas.
 
 ### Resultados obtenidos

Con los cambios aplicados:

el logo y el nombre del sitio quedaron alineados hacia el extremo derecho,
la navegación permaneció centrada,
no fue necesario modificar el HTML,
se reutilizaron correctamente los contenedores existentes.

<b>Justificación técnica</b>
 
Se utilizó Flexbox en .nav-container para controlar la distribución principal de los elementos del encabezado.

Luego, la navegación fue centrada mediante posicionamiento absoluto dentro del mismo contenedor, utilizando:

```
left: 50%;
transform: translateX(-50%);
```
Esto permitió centrar visualmente el menú independientemente de la posición del logo, manteniendo una distribución más controlada y adaptable.
