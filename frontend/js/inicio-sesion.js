'use strict';

const input_usuario = document.querySelector('#txt-usuario');
const input_contrasenna = document.querySelector('#txt-contrasenna');
const btn_inicio = document.querySelector('#btn-iniciar');
const gestor = new Gestor();
const obtener_info_inicio = () => {
    gestor.iniciar_sesion(input_usuario.value, input_contrasenna.value);
};

btn_inicio.addEventListener('click', obtener_info_inicio);