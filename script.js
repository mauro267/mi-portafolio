// Mensaje de bienvenida en la consola
console.log('Página cargada correctamente')

// Animación de entrada para los servicios
const servicios = document.querySelectorAll('ul li')

servicios.forEach((servicio, index) => {
    servicio.style.opacity = '0'
    servicio.style.transform = 'translateX(-20px)'
    servicio.style.transition = `all 0.4s ease ${index * 0.1}s`

    setTimeout(() => {
        servicio.style.opacity = '1'
        servicio.style.transform = 'translateX(0)'
    }, 100)
})

// Click en el nombre muestra un mensaje
const nombre = document.querySelector('h1')

if (nombre) {
    nombre.style.cursor = 'pointer'
    nombre.addEventListener('click', () => {
        alert('¡Hola! Soy Mauro, desarrollador web en Cali.')
    })
}
// Formulario de contacto
const formulario = document.getElementById('formulario')
const confirmacion = document.getElementById('confirmacion')

if (formulario) {
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault()

        const datos = new FormData(formulario)

        const respuesta = await fetch(formulario.action, {
            method: 'POST',
            body: datos,
            headers: { 'Accept': 'application/json' }
        })

        if (respuesta.ok) {
            formulario.style.display = 'none'
            confirmacion.style.display = 'block'
        }
    })
}