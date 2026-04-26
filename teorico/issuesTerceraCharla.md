# <p align="center">Mejorando el frontend de la pagina</p>
---

## ISSUE 23

### Etiquetas, significado y atributos

- `<nav>` → Contenedor semántico de la navegación principal del sitio; indica que el contenido corresponde a enlaces de navegación.

- `<div>` → Contenedor genérico utilizado para estructurar el navbar (agrupa logo y menú).

- `<ul>` → Lista no ordenada utilizada para estructurar los elementos del menú de navegación.

- `<li>` → Representa cada opción dentro del menú de navegación.

- `<a>` → Enlace que permite la navegación entre páginas.  
  - **Atributos:**  
    - `href` → Define la ruta o página de destino  
    - Puede utilizarse junto con clases CSS para aplicar estilos (ej: menú o botón)

---

### Clases y estilos utilizados

- `.navbar` → Contenedor principal de la barra de navegación  
  - **Propiedades:**  
    - `background-color` → Color de fondo del navbar  
    - `border-bottom` → Línea inferior para separar del contenido  
    - `padding` → Espaciado interno  

---

- `.nav-container` → Contenedor interno del navbar  
  - **Propiedades:**  
    - `display: flex` → Activa Flexbox para organizar elementos  
    - `justify-content: space-between` → Separa logo (izquierda) y menú (derecha)  
    - `align-items: center` → Centra verticalmente los elementos  
    - `max-width` → Limita el ancho máximo del contenido  
    - `margin: 0 auto` → Centra el contenedor horizontalmente  

---

- `.nav-logo` → Contenedor del nombre o logo del sitio  
  - **Propiedades (en `<a>`):**  
    - `font-size` → Tamaño del texto  
    - `font-weight` → Aplica negrita  
    - `color` → Color del texto  
    - `text-decoration: none` → Elimina subrayado  

---

- `.nav-menu` → Lista de navegación  
  - **Propiedades:**  
    - `display: flex` → Coloca los elementos en línea horizontal  
    - `gap` → Espacio entre los elementos del menú  
    - `list-style: none` → Elimina los puntos de la lista  
    - `margin: 0` → Elimina margen externo  
    - `padding: 0` → Elimina padding interno  

---

- `.nav-menu li a` → Enlaces del menú  
  - **Propiedades:**  
    - `color` → Define el color del texto  
    - `padding` → Aumenta el área clickeable  
    - `transition` → Suaviza los cambios visuales  
    - `white-space: nowrap` → Evita que el texto se divida en varias líneas  

---

- `.nav-menu li a:hover` → Efecto al pasar el mouse  
  - **Propiedades:**  
    - `background-color` → Cambia el fondo al interactuar  
    - `color` → Cambia el color del texto  

---

### Mejora aplicada

- Se utilizó **Flexbox** para lograr una distribución adaptable y ordenada de los elementos.  
- Se agregó `white-space: nowrap` para evitar que los enlaces largos se dividan en varias líneas.  
- Se eliminaron estilos por defecto de listas (`ul`) para lograr un diseño limpio.  
- Se implementaron efectos `hover` para mejorar la interacción del usuario.  

---

## ISSUE 25
### Nuevas etiquetas y metodos utilizados para las implementaciones solicitadas
`<div>` → Se utilizaron las etiquetas para enmarcar las areas correspondientes a los contactos de la persona.
- `class` → Se utilizo la clase `enmarcado` correspondiente a la etiqueta, esto para añadirle el enmarcado a estas etiquetas en especifico.

`<select>` → Se hizo uso de esta etiqueta para especificar grado de estudio alcanzado, un nuevo apartado del formulario de trabajo por petición del cliente
`<option>` → Etiqueta utilizada para añadir las opciones correspondientes a dicha lista, los metodos utilizados de la misma son:
- `value` → Atributo requerido dentro de los formularios, esto para mandar la información resultante en caso de ser necesario.
- `selected` → Atributo utilizado para asignar una opcion por defecto a la hora de cargar la pagina.
`<input>` → Etiqueta que permite trabajar con entradas de usuario variadas
- `autocomplete`→ Permite mostrar sugerencias guardadas en el navegador correspondientes al campo especifico.
- `pattern` → Atributo el cual permite añadir un patron o una estructura especifica requerida en el campo de entrada, en caso de que lo ingresado no cumpla con el mismo, no se continua con el formulario.
- `inputmode` → Es un atributo que indica el tipo de teclado (en pantalla) debe desplegarse en dispositivos tactiles.
- `type="number"` Es usado para poder crear un campo variable de numeros, donde, aunque se pueda ingresar texto, solo se puede proceder al ingresar un numero dentro de los valores establecidos como validos.

`<span>` → Uso de clases para tratar con parametros correspondientes de la etiqueta.
se utilizo la clase `obligatorio` para hacer que el contenido dentro de span sea de color rojo. "<span style="color: red">*</span>"

---

## ISSUE 26
`<h1>` Titulos de la pagina.
- Se editaron el contenido de los `h1` de los formularios para que correspondieran con los asuntos que pidio el cliente, no se uso nada nuevo.

---

## ISSUE 27
`<a>...</a>` → Hipervínculo a otras páginas o recursos
- `href` → URL de destino
`<h1>` Titulos de la pagina.

Se edito el contenido de `a` y `h1` que antes decian consultas, a contactanos
`<ul></ul>`: Lista desordenada.

`<li></li>`: Indica item de la lista.
Se anadio mediante una lista los contactos de la empresa

## ISSUE 29
Este issue esta relacionado al formato en el cuál se guardaban los archivos de la pagina en el repositorio.

Se requería que los titulos de los archivos siguieran la convención de nomenclatura Camel Case, esto para mantener un mejor funcionamiento y orden sobre todos nuestros archivos y documentos, el tema es que para aplicarlo habia que renombrar todos los archivos correspondientes a la pagina web (imagenes, html, etc.).

El problema es que git no diferenció entre mayúsculas y minúsculas, lo que hacia que los archivos se subieran pero que los nombres no cambiaran a lo requerido.

Tras intentar usar el explorador de archivos y comandos de git para que se detectaran los cambios de nombre, no dimos con una solución que realmente funcionara, por lo que finalmente se optó por modificar los nombres directamente desde github, realizando un commit explicando la situación de una forma mas breve, solucionando por fin el inconveniente.

## ISSUE 33
### Descripción

Se realizó la implementación de una paleta de colores definida por el cliente con el objetivo de mejorar la identidad visual del sitio y lograr una apariencia más profesional y consistente.

La paleta utilizada es:

- Gris claro → `#c0c0c0`
- Amarillo/Dorado → `#eeb906`
- Gris oscuro azulado → `#4e5b64`
- Azul grisáceo → `#47606f`

---

### Aplicación de colores

- **Fondo general (`body`)**  
  - `background-color: #c0c0c0` → Se aplica un fondo neutro para reducir el contraste fuerte del blanco puro.

- **Texto principal**  
  - `color: #4e5b64` → Mejora la legibilidad sin usar negro absoluto.

- **Navbar**  
  - `background-color: #4e5b64` → Color principal de la interfaz  
  - `border-bottom: 3px solid #eeb906` → Acento visual

- **Botones (`.btn`)**  
  - `background-color: #4e5b64` → Color base  
  - `color: white` → Contraste  
  - `:hover → background-color: #eeb906` → Feedback visual al usuario  

- **Links del menú (`.nav-menu li a`)**  
  - `color: white` → Visibilidad sobre fondo oscuro  
  - `:hover → background-color: #eeb906`  

- **Separadores (`hr`)**  
  - `background-color: #47606f` → Línea suave que no rompe la estética  

- **Footer**  
  - `background-color: #4e5b64` → Mantiene consistencia con navbar  
  - `color: white` → Contraste adecuado  
  - `border-top: 3px solid #eeb906` → Refuerza identidad visual  

---

### Tecnologías y conceptos utilizados

- Variables CSS (`:root`) para definir colores reutilizables
- Pseudo-clases (`:hover`) para interacción del usuario
- Uso de contraste para mejorar accesibilidad
- Separación de estilos globales (`global.css`)

---
### Tipografia e interlineado

 font-family: 'Poppins', Arial, sans-serif;
 line-height: 1.5;
### Mejora aplicada

- Se unificó el diseño visual en todas las páginas mediante una paleta consistente  
- Se eliminó el uso de colores por defecto (blanco/negro puro)  
- Se mejoró la experiencia del usuario mediante feedback visual en botones y navegación  
- Se logró una identidad visual más profesional y alineada con los requerimientos del cliente  

---

### Resultado

El sitio ahora presenta:

- Mayor coherencia visual  
- Mejor jerarquía de elementos  
- Interacciones más claras  
- Apariencia más moderna y profesional  