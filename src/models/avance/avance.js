import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import { ProjectModel } from '../proyecto/proyecto.js';

const advanceSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        require: true,
    },

    fecha: {
        type: Date,
        require: true,
    },

    descripcion: {
        type: String,
        require: true,
    },

    observaciones: {
        type: String,
        require: true,
    },
});

const AdvanceModel = model('avance', advanceSchema);
export { AdvanceModel };
