const {Schema, model} = require('mongoose')
const {ProjectModel} = require('../models/proyectos')

const AvanceSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectsModel,
        require: true
        
    },

    fecha: {
        type: Date,
        require: true
    },

    descripcion:{
        type: String,
        require: true
    },

    observaciones:{
        type: String,
        require: true
    }
});

const AdvanceModel = model('avance', AvanceSchema);
module.exports ={AdvanceModel};