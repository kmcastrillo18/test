'use strict';
const boton = document.querySelector('#btn-registrar');
const input_ejercicio = document.querySelector('#txt-ejercicio');
const slt_zona = document.querySelector('#slt-zona');
const slt_estado = document.querySelector('#slt-estado');
const gestor = new Gestor();
let ejercicio_seleccionado; 

if (localStorage.getItem('ejercicio_seleccionado'))
{
    ejercicio_seleccionado = JSON.parse(localStorage.getItem('ejercicio_seleccionado'));
}
const llenar_formulario = () => {
    input_ejercicio.value = ejercicio_seleccionado.nombre;
    slt_zona.value = ejercicio_seleccionado.zona;
    slt_estado.value = ejercicio_seleccionado.estado;
};

const obtener_info_ejercicio = () => {
    let ejercicio = new Ejercicio(input_ejercicio.value, slt_zona.value);
    ejercicio.set_estado(slt_estado.value);
    ejercicio.set_id(ejercicio_seleccionado._id);
    gestor.modificar_ejercicio(ejercicio);
};

llenar_formulario();
boton.addEventListener('click', obtener_info_ejercicio);