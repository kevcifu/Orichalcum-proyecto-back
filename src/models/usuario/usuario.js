const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    correo: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (correo) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    correo
                );
            },
            message: '¡no es un correo valido!',
        },
    },
    identificacion: {
        type: String,
        required: true,
        unique: true,
    },
    nombreCompleto: {
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

const UserModel = model('usuario', userSchema);

module.exports = { UserModel };
