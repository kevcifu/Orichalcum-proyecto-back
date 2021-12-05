import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { UserModel } from '../usuario/usuario.js';
import { ProjectModel } from '../proyecto/proyecto.js';

const inscriptionSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        require: true
    },

    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        require: true 
    },

    estado: {
        type: String,
        enum: ['PENDIENTE', 'ACEPTADO', 'RECHAZADO'],
        default: 'PENDIENTE'
    },
    
    fechaInscripcion: {
        type: Date,
        require: true,
    },

    fechaEgreso: {
        type: Date,
        require: false
    }
});

const InscriptionModel = model('inscripcion', inscriptionSchema);
export { InscriptionModel };
