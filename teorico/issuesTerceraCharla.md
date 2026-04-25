# <p align=center>Mejorando el frontend de la pagina
---
## ISSUE 23: Barra de navegación  

### Etiquetas, significado y atributos

- `<nav>` → Contenedor semántico de la navegación principal del sitio; indica que el contenido corresponde a enlaces de navegación.

- `<div>` → Contenedor genérico utilizado para estructurar el navbar (agrupa logo y menú).

- `<ul>` → Lista no ordenada utilizada para estructurar los elementos del menú de navegación.

- `<li>` → Representa cada opción dentro del menú de navegación.

- `<a>` → Enlace que permite la navegación entre páginas.  
  - **Atributos:**  
    - `href` → Define la ruta o página de destino  
    - Puede utilizarse junto con clases CSS para aplicar estilos (ej: botón o menú)

---

### Clases y estilos utilizados

- `.navbar` → Contenedor principal de la barra de navegación  
  - **Propiedades:**  
    - `background-color` → Color de fondo  
    - `border-bottom` → Línea inferior separadora  
    - `padding` → Espaciado interno  

- `.nav-container` → Contenedor interno del navbar  
  - **Propiedades:**  
    - `display: flex` → Activa Flexbox  
    - `justify-content: space-between` → Separa elementos (izquierda/derecha)  
    - `align-items: center` → Centra verticalmente  
    - `width` → Ocupa todo el ancho disponible  
    - `max-width` → Limita el ancho máximo  
    - `margin: 0 auto` → Centra el contenedor  

- `.nav-logo` → Contenedor del nombre o logo del sitio  
  - **Propiedades (en `<a>`):**  
    - `font-size` → Tamaño del texto  
    - `font-weight` → Negrita  
    - `text-decoration: none` → Elimina subrayado  

- `.nav-menu` → Lista de navegación  
  - **Propiedades:**  
    - `display: flex` → Alineación horizontal  
    - `gap` → Espacio entre elementos  
    - `list-style: none` → Elimina viñetas  
    - `margin: 0` → Elimina margen externo  
    - `padding: 0` → Elimina padding interno  

- `.nav-menu li a` → Enlaces del menú  
  - **Propiedades:**  
    - `text-decoration: none` → Elimina subrayado  
    - `color` → Color del texto  
    - `padding` → Área clickeable  
    - `transition` → Suaviza efectos  

- `.nav-menu li a:hover` → Efecto al pasar el mouse  
  - **Propiedades:**  
    - `background-color` → Cambia el fondo  
    - `color` → Cambia el color del texto  

---
