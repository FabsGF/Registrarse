document.addEventListener('DOMContentLoaded', iniciarFormulario);

// funcion para escuchar un evento
function iniciarFormulario() {
    const form = document.getElementById('registration-form'); // toma el formulario por id
    if (form) {
        form.addEventListener('submit', enviarDatos); // asocia el evento 'submit' al formulario
    }
}

//funcion para enviar datos

function enviarDatos(event) {
    event.preventDefault(); // Evita el envío del formulario

    // valores del formulario
    const nombre = document.getElementById('nombre').value; //importante naturalizar sintaxis, se usa asi siempre para tomar elementos
    const password = document.getElementById('password').value;
    const codigolibro = document.getElementById('codigolibro').value;

    // objeto con los datos
    const data = { nombre, password, codigolibro };
    console.log(data);  // Mostrar los datos en la consola

    // respuesta exitosa
    console.log('Datos enviados correctamente'); // imprime en consola, se ve apretando f12 en el navegador y yendo a consola
    alert('Su prestamo fue aceptado: ' + codigolibro); // Muestra msj en navegador 
    
    }

