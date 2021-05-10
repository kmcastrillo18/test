'use strict';

const mongoose = require('mongoose');

const schema_usuario = mongoose.Schema({
    nombre:{type: String, required : true},//Si require está en false, quiere decir que el campo es opcional //Unique en true: No pueden haber dos objetos con el mismo nombre
    apellido1: {type: String, required: true},
    apellido2: {type: String, required: false},
    mensualidad: {type: Number, required: false},
    correo: {type: String, required: false, unique: true},
    usuario: {type: String, required: true},
    contrasenna: {type: String, required: true}
});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuarios');