const { ProjectModel } = require('../proyecto/proyecto');
const { InscriptionModel } = require('./inscripcion');

const resolverInscripcion = {
    Inscripcion: {
        proyecto: async (parent, args, context) => {
            return await ProjectModel.findOne({ _id: parent.proyecto });
        },
    },
    Query: {
        Inscipciones: async (parent, args) => {
            const inscripciones = await InscriptionModel.find();
            return inscripciones;
        },

        inscripcionesNoAprobadas: async () => {
            const pendiente = await InscriptionModel.find({ estado: 'PENDIENTE' }).populate('estudiante');
        },
    },

    Mutation: {
        crearInscripciones: async (parent, args) => {
            const inscripcionCreada = await InscriptionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
        },

        arpobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
                args.id,
                {
                    estado: 'ACEPTADO',
                    fechaIngreso: Date.now(),
                },
                { new: true }
            );
            return inscripcionAprobada;
        },
    },

};

module.exports = {resolverInscripcion};