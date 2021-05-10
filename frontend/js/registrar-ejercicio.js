'use strict';
const boton = document.querySelector('#btn-registrar');
const input_ejercicio = document.querySelector('#txt-ejercicio');
const slt_zona = document.querySelector('#slt-zona');
const gestor = new Gestor();

const obtener_info_ejercicio = () => {
    let ejercicio = new Ejercicio(input_ejercicio.value, slt_zona.value);
    gestor.registrar_ejercicio(ejercicio);
}

boton.addEventListener('click', obtener_info_ejercicio);