'use strict';
const btn_registrar = document.querySelector('#registrar');
const input_nombre = document.querySelector('#nombre');
const input_apellido1 = document.querySelector('#apellido1');
const input_apellido2 = document.querySelector('#apellido2');
const input_correo = document.querySelector('#correo');
const input_usuario = document.querySelector('#usuario');
const input_contrasenna = document.querySelector('#contrasenna');

const gestor = new Gestor();

const obtener_datos_usuario = () => {
    let usuario = new Usuario(input_nombre.value, input_apellido1.value, input_apellido2.value, input_correo.value, input_usuario.value, input_contrasenna.value);
    gestor.registrar_usuario(usuario); //Función llamada desde el gestor
};

btn_registrar.addEventListener('click', obtener_datos_usuario);