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