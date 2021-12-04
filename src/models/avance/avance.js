const { Schema, model } = require('mongoose');
const { ProjectModel } = require('../proyecto/proyecto');
const advanceSchema = new Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
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