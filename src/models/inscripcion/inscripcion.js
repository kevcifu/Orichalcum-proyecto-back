const { Schema, model } = require('mongoose');
const { UserModel } = require('../usuario/usuario');
const { ProjectModel } = require('../proyecto/proyecto');
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
        enum: ['NULO', 'INSCRITO'],
        default: 'NULO'
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
module.exports ={ InscriptionModel };
