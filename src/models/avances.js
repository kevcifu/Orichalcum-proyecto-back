const { Schema, model } = require('mongoose')
const { ProjectsModel } = require('../models/proyectos')
const advanceSchema = new Schema({
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

const AdvanceModel = model('avance', advanceSchema);
module.exports ={ AdvanceModel };