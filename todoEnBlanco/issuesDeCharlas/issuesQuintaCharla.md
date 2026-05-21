# <p align=center>"Responsive"</p>

---
## ISSUE 47: Implementación del botón de inicio
### Clases, estilos, y propiedades utilizadas
---

## Clases Utilizadas
Los requerimientos del botón de inicio incluian caracteristicas como:
- Fijación a la pagina (individual al código): Se logro mediante la creación y uso de la clase `boton-subir` y `boton-subir img`
```
.boton-subir {
    position: fixed;
    z-index: 1;
    bottom: 20px;
    right: 20px;

}

.boton-subir img {
    width: 5vw;
}
```

### Además
Se añadió una tercera clase encargada del hover de dicho botón
```
.boton-subir:hover{
            filter: invert(1);
            transition: 0.2s;
}

```
Únicamente le añade una transición de colores al botón al pasar el mouse por arriba.

El boton es añadido en todas las paginas, inclusive a las que no tienen mucha altura, debería ser corregido mediante uso de js, implementando funcion para ver cuanto deslizo el usuario.

Para el movimiento en `<html>` se utilizo `href=#top`, en conjunto con la etiqueta `<body id="top">` Esto para redireccionar a un elemento dentro de la misma pagina, en este caso, arriba del todo.

## Propiedades Utilizadas:
- `position: fixed` → Fija el botón correspondiente a la ventana, aislandolo del contenido de la pagina
- `z-index: 1` → Establece el index del botón en 1, ya que es el único objeto que hace uso de index, no es necesario insertar un numero excesivamente alto.
- `bottom: 20px
    right: 20px` → Añade una distancia de dicho tamaño en las direcciones especificadas, esto para darle una separación al contenido de la ventana.
- `width: 5vw` → Se encarga de proporcionarle medidas elásticas a la imagen que hace de boton, esto para ayudar a que sea responsive.
- `filter: invert(1)` → Invierte el orden de colores del objeto al cuál se le asgina.
- `transition: 0.2s` → Transición fluida entre colores y colores.

---
## ISSUE 48: Implementación de barra de navegación lateral
### Clases, estilos, y propiedades utilizadas
---

#### Clases e identificadores utilizados

Los requerimientos de la barra de navegación responsive incluían:

- Mostrar un botón de navegación en pantallas reducidas.
- Ocultar la barra de navegación tradicional en dispositivos móviles.
- Desplegar las opciones de navegación en forma de columna.
- Implementar la funcionalidad únicamente con HTML y CSS.

---

#### Checkbox oculto e interacción sin JavaScript

Para lograr la interacción sin JavaScript se utilizó un `<input type="checkbox">` oculto mediante el identificador `#menu-toggle`.

```css
#menu-toggle {
    display: none;
}
```

Este checkbox funciona como un interruptor interno que permite detectar mediante CSS cuándo el menú debe mostrarse u ocultarse.

---

#### Icono de menú

Se implementó la clase `.menu-icon` para representar el botón encargado de abrir y cerrar la navegación en dispositivos móviles.

```css
.menu-icon {
    display: none;
}
```

Dentro del `@media` se hace visible:

```css
.menu-icon {

    display: flex;
    color: white;
    font-size: 7vw;

    cursor: pointer;
}
```

### Además

El icono es implementado mediante la etiqueta `<label>` vinculada al checkbox oculto mediante el atributo `for="menu-toggle"`.

```html
<label for="menu-toggle" class="menu-icon">
    ☰
</label>
```

Esto permite modificar el estado del checkbox al presionar el icono, sin necesidad de JavaScript.

---

#### Barra de navegación responsive

Para ocultar el menú en dispositivos móviles se utilizó:

```css
.nav-menu {

    display: none;

    position: absolute;

    top: 100%;
    right: 0;

    width: 100%;

    background-color: var(--gris-oscuro);

    padding: 1rem;

    gap: 1rem;
}
```

Posteriormente, al detectar que el checkbox se encuentra marcado, se despliega el menú mediante:

```css
#menu-toggle:checked ~ .nav-menu {

    display: flex;
    flex-direction: column;
}
```

Esto reorganiza los elementos de navegación en forma vertical.

---


## Responsive mediante Media Queries

La adaptación para dispositivos móviles fue realizada utilizando:

```css
@media screen and (max-width: 480px)
```

Esto permite aplicar estilos específicos únicamente cuando el ancho de pantalla sea igual o menor a 480 píxeles.

---

## Propiedades utilizadas

- `display: none` → Oculta elementos visualmente sin eliminarlos del documento HTML.
- `display: flex` → Permite distribuir elementos utilizando Flexbox.
- `flex-direction: column` → Reorganiza los elementos verticalmente.
- `position: absolute` → Permite posicionar el menú de forma independiente al flujo normal del documento.
- `top: 100%` → Posiciona el menú inmediatamente debajo de la barra de navegación.
- `width: 100%` → Hace que el menú desplegable ocupe todo el ancho disponible.
- `gap: 1rem` → Añade separación uniforme entre elementos.
- `cursor: pointer` → Indica visualmente que el elemento es interactivo.
- `@media` → Permite aplicar estilos condicionales según el tamaño de pantalla.
- `:checked` → Detecta cuándo un checkbox se encuentra marcado.
- `~` → Selector de hermanos generales utilizado para modificar el menú cuando el checkbox cambia de estado.

---
## ISSUE 49: NombreDelIssue
### Clases, estilos, y propiedades utilizadas
---
