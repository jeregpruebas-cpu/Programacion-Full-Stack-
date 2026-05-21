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
## ISSUE 49

## Clases Utilizadas

Para cumplir con el requerimiento del formulario oculto en la sección de administrador, se implementaron clases encargadas de:
- ocultar y mostrar el formulario
- organizar visualmente los campos
- mantener compatibilidad con dispositivos móviles y escritorio

### Formulario oculto
Se creó la clase `formularioAltaUsuario`, encargada de ocultar inicialmente el formulario y organizar su contenido mediante Flexbox.

```css
.formularioAltaUsuario {
    display: none;

    flex-direction: column;
    gap: 20px;

    margin-top: 30px;
    padding: 20px;

    border: 2px solid #ccc;
    border-radius: 10px;

    width: 90%;
    max-width: 600px;
}
```

### Organización de campos
Se añadió la clase `campo` para alinear correctamente cada label con su input correspondiente.

```css
.campo {
    display: flex;
    align-items: center;
    gap: 15px;
}

.campo label {
    width: 220px;
}
```

### Organización de botones
Se reutilizó la clase `operaciones` para mantener alineados y separados los botones del formulario.

```css
.operaciones {
    display: flex;
    gap: 20px;
}
```

---

## JavaScript Utilizado

Para mostrar y ocultar el formulario se creó el archivo:

```text
operacionesAdministrador.js
```

Con el siguiente código:

```javascript
document
    .getElementById("btnAltaUsuario")
    .addEventListener("click", function () {

        document.querySelector(
            ".formularioAltaUsuario"
        ).style.display = "flex";

});


document
    .getElementById("btnCerrarAltaUsuario")
    .addEventListener("click", function () {

        document.querySelector(
            ".formularioAltaUsuario"
        ).style.display = "none";

});
```

### Además
Se añadieron identificadores (`id`) a los botones correspondientes para que JavaScript pudiera detectarlos correctamente.

```html
<button class="btn" id="btnAltaUsuario">
    Añadir empleado
</button>
```

```html
<button type="button" id="btnCerrarAltaUsuario" class="btn">
    Cancelar
</button>
```

---

## Propiedades Utilizadas

- `display: none` → Oculta inicialmente el formulario.
- `display: flex` → Muestra el formulario utilizando Flexbox.
- `flex-direction: column` → Organiza los elementos del formulario verticalmente.
- `gap: 20px` → Añade separación uniforme entre elementos.
- `margin-top: 30px` → Genera separación respecto al contenido superior.
- `padding: 20px` → Añade espacio interno dentro del formulario.
- `border-radius: 10px` → Redondea las esquinas del formulario.
- `width: 90%` → Hace el formulario responsive para dispositivos pequeños.
- `max-width: 600px` → Limita el tamaño máximo en pantallas grandes.
- `align-items: center` → Centra verticalmente los elementos del contenedor flex.
- `addEventListener("click")` → Detecta clicks realizados por el usuario.
- `querySelector()` → Selecciona elementos mediante clases CSS.
- `getElementById()` → Selecciona elementos mediante su identificador único.
---
