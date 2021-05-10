'use strict';

const tabla = document.querySelector('#tbl-ejercicios tbody');
const gestor = new Gestor();

const imprimir_tabla = async() => {
    let ejercicios = await gestor.obtener_ejercicios();

    tabla.innerHTML = '';

    ejercicios.forEach(ejercicio => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = ejercicio.get_nombre();
        fila.insertCell().innerHTML = ejercicio.get_zona();

        let celda_modificar = fila.insertCell();
        let boton = document.createElement('button');
        boton.classList.add('btn', 'btn-success');
        boton.innerText = 'Modificar';

        celda_modificar.appendChild(boton);

        boton.addEventListener('click', () => {
            localStorage.setItem('ejercicio_seleccionado', JSON.stringify(ejercicio));

            window.location.href = 'modificar_ejercicio.html';
        });
    });
};

imprimir_tabla();