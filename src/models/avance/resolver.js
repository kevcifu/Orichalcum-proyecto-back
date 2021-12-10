import { AdvanceModel } from './avance.js';

const resolverAvance = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await AdvanceModel.find().populate('proyecto');
            return avances;
        },
        Avance: async (parent, args) => {
            const avance = await AdvanceModel.find({
                proyecto: args._id,
            }).populate('proyecto');
            return avance;
        },
    },
    Mutation: {
        crearAvance: async (parent, args) => {
            const avanceCreado = AdvanceModel.create({
                proyecto: args.proyecto,
                fecha: args.fecha,
                descripcion: args.descripcion,
            });
            return avanceCreado;
        },
    },
};
export { resolverAvance };
