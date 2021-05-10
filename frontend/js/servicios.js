'use strict';
const servidor = 'http://localhost:3000/api'

const obtener_datos = async(endpoint) => { //El endpoint se recibe como parámetro para hacer la 
    //función dinámica; el endpoint es parte de la dirección a la que se dirige toda la ruta 
    let lista = [];
    await axios({
            method: 'get',
            url: `${servidor}${endpoint}`,
            responseType: 'json'
        })
        .then((response) =>{
            lista = response.data.lista
        })
        .catch((response) =>{
            console.log(response.data.msj);
            console.log(response.data.err);
        });
    return lista;        
};

const obtener_datos_info = async(endpoint, _id) => { //El endpoint se recibe como parámetro para hacer la 
    //función dinámica; el endpoint es parte de la dirección a la que se dirige toda la ruta 
    let lista = [];
    await axios({
            method: 'get',
            url: `${servidor}${endpoint}${_id}`,
            responseType: 'json'
        })
        .then((response) =>{
            lista = response.data.lista
        })
        .catch((response) =>{
            console.log(response.data.msj);
            console.log(response.data.err);
        });
    return lista;        
};

const registrar_datos = async(obj, endpoint) => {
    await axios({
            method: 'post',
            url: `${servidor}${endpoint}`,
            responseType: 'json',
            data: {
                obj: JSON.stringify(obj)
            }
        })
        .then((response) =>{
            console.log(response.data.msj)
        })
        .catch((response) =>{
            console.log(response.data.err);
        });
    //return lista;        
};

const modificar_datos = async(obj, endpoint) => {
    await axios({
            method: 'put',
            url: `${servidor}${endpoint}`,
            responseType: 'json',
            data: {
                obj: JSON.stringify(obj)
            }
        })
        .then((response) => {
            window.location.href = 'usuarios.html';
        })
        .catch((err) => {
            console.log(response.data.msj);
            console.log(response.data.err)
        });
};

const validar_credenciales = async (usuario, contrasenna, endpoint) => {
    await axios({
            method: 'post',
            url: `${servidor}${endpoint}`,
            responseType: 'json',
            data: {
                usuario: usuario,
                contrasenna: contrasenna
            }
        })
        .then((response) =>{
            if (response.data.inicio == true) {
                Swal.fire({
                    'icon': 'success',
                    'title': 'Bienvenido',
                    'text': 'Ha iniciado sesión correctamente'
                }).then(() => {
                    let usuario = {
                        nombre: response.data.nombre,
                        usuario: response.data.usuario
                    }
                    if (usuario.usuario == 'testing') {
                        localStorage.setItem('usuario_conectado', JSON.stringify(usuario))
                        window.location.href = 'sesion_admin.html';
                    }
                    else {
                        localStorage.setItem('usuario_conectado', JSON.stringify(usuario))
                        window.location.href = 'sesion_usuario.html';
                    }
                })
            }
        })
        .catch((response) =>{
            Swal.fire({
                
            })
        });
};