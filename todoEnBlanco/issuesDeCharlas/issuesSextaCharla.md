# <p align=center>"Manejo del DOM"</p>

---
## ISSUE 47: Implementación de alta de empleados
---

Se modifico la tabla de alta presente, eliminando todos los objetos estaticos, dejando la tabla vacía y pronta para los objetos dinámicos.

Tambien de modificaron los input previos, haciendo que los mismos coincidieran con lo solicitado, y añadiendo los parametros:
- Limites de caracteres `maxlength=...`
- Placeholders `placeholder=...`
- Patrones `pattern=...`
- Tipo de input `input=...`

### Scripts Utilizadas
`altaEmpleados.js`:
```
const nombre = document.getElementById('nombreEmpleado')
const apellido = document.getElementById('apellidoEmpleado')
const cedula = document.getElementById('cedulaEmpleado')
const cargo = document.getElementById('cargoEmpleado')

const form = document.getElementById('formAltaUsuario')

const tabla = document.getElementById('tablaEmpleados')



form.addEventListener("submit", function(e){

    e.preventDefault()

    const empleado = {

        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        cargo: cargo.value

    }


    agregarEmpleado(empleado)

    form.reset()

})





const agregarEmpleado = (empleado) =>
{
    const fila = document.createElement("tr")

    const tdCedula = document.createElement("td")
    tdCedula.textContent = empleado.cedula


    const tdNombre = document.createElement("td")
    tdNombre.textContent = empleado.nombre


    const tdApellido = document.createElement("td")
    tdApellido.textContent = empleado.apellido


    const tdCargo = document.createElement("td")
    tdCargo.textContent = empleado.cargo

    fila.appendChild(tdCedula)
    fila.appendChild(tdNombre)
    fila.appendChild(tdApellido)
    fila.appendChild(tdCargo)

    tabla.appendChild(fila)

}
```
Se hizo uso de variables constantes `const` ya que el valor de las variables y funciones no iba a ser modificado en ningún momento.

Se agarraron los elementos del formulario usando la id de cada uno, para despues añadirlos en un único objeto `empleado`, agarrando los valores `.value` de cada variable constante requerida.

Con ayuda de una función de tipo flecha se logra agarrar dicho objeto empleado, asignarle un elemento `<td>` a cada valor, para despues poder ser insertado en un `<tr>`, para finalmente poder ser incluido todo a la tabla

### IDs y/o Clases Utilizadas:
En html, se usaron las siguientes IDs para poder recuperar los siguientes datos:

- `nombreEmpleado`, `apellidoEmpleado`, `cedulaEmpleado`, `cargoEmpleado`: Identificadores utilizados para recuperar la información del empleado a añadir al sistema.

- `formAltaUsuario`: Identificador usado para poder recuperar el formulario, clave para crear el evento del boton `submit`.

- `tablaEmpleados`: Identificador usado para recuperar la tabla con su respectivo contenido, clave para añadir el nuevo valor y devolver la tabla modificada.

Tambien se hace uso de la etiqueta `<script>` con el atributo `src=...` esto para poder hacer uso de la función .js dentro del .html.