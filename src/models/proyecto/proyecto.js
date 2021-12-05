import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { UserModel } from '../usuario/usuario.js';

const projectSchema = new Schema({
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
        required: false,
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

const ProjectModel = model('proyecto', projectSchema);

export { ProjectModel };
