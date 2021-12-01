const {Schema, model} = require('mongoose')
const {UserModel} = require('../models/usuario')
const {ProjectsModel} = require('../models/proyectos')

const incriptionSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectsModel,
        require: true
    },

    idEstudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        require: true 
    },

    estado: {
        type: String,
        enum: ['NULO', 'INSCRITO'],
        default: 'NULO'
    },
    
    fechaIncripcion: {
        type: Date,
        require: true,
    },

    fechaEgreso: {
        type: Date,
        require: true
    }
});

const InscriptionModel = model('inscripcion', InscriptionSchema);
module.exports ={InscriptionModel};
