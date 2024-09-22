const pantalla = document.querySelector('.pantalla')

let botones = document.querySelectorAll('.btn')
botones.forEach(boton => {
    boton.addEventListener('click', () => {

        const botonesApretados = boton.textContent

        pantalla.textContent = botonesApretados
    })
})