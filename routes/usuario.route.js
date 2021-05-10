'use strict';

const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');

router.post('/registrar-usuario', (req, res) => {
    let obj_usuario = JSON.parse(req.body.obj)
    let usuario = new Usuario({
        nombre: obj_usuario.nombre,
        apellido1: obj_usuario.apellido1,
        apellido2: obj_usuario.apellido2,
        correo: obj_usuario.correo,
        usuario: obj_usuario.usuario,
        contrasenna: obj_usuario.contrasenna
    });
    usuario.save((err, usuario_bd) => {
        if(err){
            res.json({
                msj: 'El usuario no se pudo registrar', err
            });
        }
        else {
            res.json({
                msj: 'El usuario se registró correctamente', usuario_bd
            });
        }
    });
});

router.post('/iniciar-sesion', (req, res) => {
    let usuario = req.body.usuario;
    let contrasenna = req.body.contrasenna;

    Usuario.findOne({ usuario: usuario }, (err, usuario) => {
        if (err) {
            res.json({
                msj: 'El usuario o la contraseña no son correctos',
                inicio: false,
                err
            });
        } else {
            if (usuario && usuario.contrasenna == contrasenna) {
                res.json({
                    usuario: usuario.usuario,
                    nombre: usuario.nombre,
                    inicio: true
                });
            } else {
                res.json({
                    msj: 'El usuario o la contraseña no son correctos',
                    inicio: false,
                    err
                });
            }


        }
    });
});

router.get('/buscar-usuario', (req, res) => {
    Usuario.findOne({ _id: req.query._id }, (err, usuario) => {
        if (err) {
            res.json({
                msj: 'No se encontró el usuario',
                err
            });
        } else {
            res.json({
                usuario
            });
        }
    });
});

router.get('/listar-usuarios', (req, res) => {
    Ejercicio.find((err, lista) => {
        if (err) {
            res.json({
                msj: 'No se encontraron usuarios',
                err
            });
        } else {
            res.json({
                lista
            });
        }
    });
});

router.put('/modificar-usuario', (req, res) => {
    let obj_usuario = JSON.parse(req.body.obj);
    Ejercicio.updateOne({ _id: obj_usuario._id }, {
        $set: {
            nombre: obj_usuario.nombre,
            apellido1: obj_usuario.apellido1,
            apellido2: obj_usuario.apellido2,
            mensualidad: obj_usuario.mensualidad
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el usuario',
                err
            });
        } else {
            res.json({
                info
            });
        }
    });

});

module.exports = router;