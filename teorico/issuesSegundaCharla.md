# <p align=center>Introduccion al uso de formularios con etiquetas html
---
##  ISSUE 1: Formulario de consultas  

### Etiquetas, significado y atributos

- `<form>` → Contenedor principal del formulario; agrupa los campos y permite enviar datos.  
  - **Atributos:**  
    - `action` → URL donde se envían los datos  
    - `method` → Método de envío (`GET` o `POST`)

- `<label>` → Texto descriptivo asociado a cada campo.  
  - **Atributos:**  
    - `for` → Vincula el label con un input específico  

- `<input>` → Campo de entrada de datos.  
  - **Atributos:**  
    - `type="text"` → Para nombre y apellido  
    - `type="tel"` → Para teléfono  
    - `type="email"` → Para correo electrónico  
    - `name` → Identificador del campo  
    - `required` → Campo obligatorio  
    - `placeholder` → Texto guía  
    - `pattern` → Validación personalizada  
    - `autocomplete` → Autocompletado de datos  
    - `inputmode="numeric"` → Teclado numérico en móviles  

- `<select>` → Lista desplegable de opciones.  
  - **Atributos:**  
    - `name`  
    - `required`  

- `<option>` → Opciones dentro de la lista.  
  - **Atributos:**  
    - `value` → Valor enviado al formulario  

- `<textarea>` → Campo de texto largo para descripciones.  
  - **Atributos:**  
    - `name`  
    - `required`  
    - `placeholder`  
    - `rows` → Cantidad de filas visibles  
    - `cols` → Cantidad de columnas visibles  

- `<button>` → Botón de envío del formulario.  
  - **Atributos:**  
    - `type="submit"`  

---

##  ISSUE 2: Formulario de empleo  

### Etiquetas, significado y atributos

- `<form>` → Contenedor del formulario de postulación.  
  - **Atributos:**  
    - `action`  
    - `method`  

- `<label>` → Describe los campos.  
  - **Atributos:**  
    - `for`  

- `<input>` → Campo de entrada de datos.  
  - **Atributos:**  
    - `type="email"` → Correo electrónico  
    - `type="file"` → Subida de archivo  
    - `name`  
    - `required`  
    - `accept=".pdf"` → Solo archivos PDF  

- `<textarea>` → Espacio para escribir información adicional.  
  - **Atributos:**  
    - `name`  
    - `required`  
    - `placeholder`  

- `<input type="checkbox">` → Casilla de confirmación.  
  - **Atributos:**  
    - `name`  
    - `required`  

- `<button>` → Botón de envío.  
  - **Atributos:**  
    - `type="submit"`  

---

## ISSUE 3: Uso de placeholder  

### Etiquetas, significado y atributos

- `<input>` → Campo de entrada con guía interna.  
  - **Atributos:**  
    - `type`  
    - `name`  
    - `placeholder`  

- `<textarea>` → Campo de texto largo con guía.  
  - **Atributos:**  
    - `name`  
    - `placeholder`  
    - `rows`  
    - `cols`  

---

## ISSUE 4: Login de empleados  

### Etiquetas, significado y atributos

- `<form>` → Contenedor del sistema de inicio de sesión.  
  - **Atributos:**  
    - `action`  
    - `method`  

- `<label>` → Describe los campos de acceso.  
  - **Atributos:**  
    - `for`  

- `<input>` → Campos de ingreso de datos.  
  - **Atributos:**  
    - `type="text"` → Para cédula  
    - `type="password"` → Para contraseña  
    - `name`  
    - `required`  
    - `pattern` → Validación (solo números)  
    - `inputmode="numeric"` → Teclado numérico  
    - `placeholder`  

- `<button>` → Botón de ingreso.  
  - **Atributos:**  
    - `type="submit"`  

