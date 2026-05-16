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
## ISSUE 48: NombreDelIssue
### Clases, estilos, y propiedades utilizadas
---

---
## ISSUE 49: NombreDelIssue
### Clases, estilos, y propiedades utilizadas
---
