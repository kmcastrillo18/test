'use strict';
const tabla = document.querySelector('#tbl-usuarios tbody');
const gestor = new Gestor();

const mostrar_usuarios = () => {
    let lista_usuarios = gestor.obtener_usuarios();

    lista_usuarios.forEach(usuario => {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = usuario.get_nombre();
        fila.insertCell().innerHTML = usuario.get_apellido1();
        fila.insertCell().innerHTML = usuario.get_apellido2();
        fila.insertCell().innerHTML = usuario.get_mensualidad();

        let celda_rutina = fila.insertCell();
        let boton_rutina = document.createElement('button');
        boton_rutina.innerText = 'Modificar';
        boton_rutina.classList.add('btn', 'btn-primary');

        celda_rutina.appendChild(boton_rutina);

        boton_rutina.addEventListener('click', () => {

            localStorage.setItem('usuario_seleccionado', JSON.stringify(usuario));

            window.location.href = "modificar_usuario.html";
        });
    });
};

mostrar_usuarios();