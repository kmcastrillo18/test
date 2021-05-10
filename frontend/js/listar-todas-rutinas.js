'use strict';

const tabla = document.querySelector('#tbl-rutinas');
const gestor = new Gestor();

const imprimir_tabla = async() => {
    let rutinas = await gestor.obtener_ejercicios();

    tabla.innerHTML = '';

    rutinas.forEach(rutina => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = rutina.get_creacion();
        fila.insertCell().innerHTML = rutina.get_vencimiento();

        let celda_ejercicios = fila.insertCell();
        let ul_ejercicios = document.createElement('button');

        rutina.get_lista_ejercicios().forEach(ejercicio => {
            let li_ejercicio = document.createElement('li');
            li_ejercicio.innerText = ejercicio.get_nombre() + ':' + ejercicio.get_zona();
            ul_ejercicios.appendChild(li_ejercicio);
        });
        celda_ejercicios.appendChild(ul_ejercicios);

        let celda_modificar = fila.insertCell();
        let boton = document.createElement('button');
        boton.classList.add('btn', 'btn-success');
        boton.innerText = 'Modificar';

        celda_modificar.appendChild(boton);
    });
};

imprimir_tabla();