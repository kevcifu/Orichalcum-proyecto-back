const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    identificacion: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tipoUsuario: {
        type: String,
        required: true,
        enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
    },
    estado: {
        type: String,
        enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
        default: 'PENDIENTE',
    },
});

const UserModel = model('User', userSchema);

module.exports = { UserModel };
