'use strict';
class Usuario {
    constructor(nombre, apellido1, apellido2, mensualidad, correo, usuario, contrasenna) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.mensualidad = mensualidad;
        this.correo = correo;
        this.usuario = usuario;
        this.contrasenna = contrasenna;
    }

    get_nombre() {
        return this.nombre;
    }
    set_nombre(nombre) {
        this.nombre = nombre;
    }
    get_apellido1() {
        return this.apellido1;
    }
    set_apellido1(apellido1) {
        this.apellido1 = apellido1;
    }
    get_apellido2() {
        return this.apellido2;
    }
    set_apellido2(apellido2) {
        this.apellido2 = apellido2;
    }
    get_mensualidad() {
        return this.mensualidad;
    }
    set_mensualidad(mensualidad) {
        this.mensualidad = mensualidad;
    }
    get_correo() {
        return this.correo;
    }
    set_correo(correo) {
        this.correo = correo;
    }
    get_usuario() {
        return this.usuario;
    }
    set_usuario(usuario) {
        this.usuario = usuario;
    }
    get_contrasenna() {
        return this.contrasenna;
    }
    set_contrasenna(contrasenna) {
        this.contrasenna = contrasenna;
    }

    /*agregar_rutina(rutina) {
        this.lista_rutinas.push(rutina); 
    }*/
}