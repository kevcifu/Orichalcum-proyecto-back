const { Schema, model } = require('mongoose');
const { UserModel } = require('../models/usuario');

const projectsSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    objetivoGeneral: {
        type: String,
        required: true,
    },
    objetivoEspecifico: {
        type: String,
        required: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
    fechaInicial: {
        type: Date,
        required: true,
    },
    fechaFinal: {
        type: Date,
        required: true,
    },
    estado: {
        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        default: 'INACTIVO',
    },
    fase: {
        type: String,
        enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
        default: 'NULO',
    },
    lider: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
});

const ProjectsModel = model('proyectos', projectsSchema);

module.exports = { ProjectsModel };