import { InscriptionModel } from '../inscripcion/inscripcion.js';
import { UserModel } from '../usuario/usuario.js';
import { ProjectModel } from '../proyecto/proyecto.js';

const resolverProyecto = {
    Proyecto: {
        lider: async (parent, args, context) => {
            const user = await UserModel.findOne({
                _id: parent.lider.toString(),
            });
            return user;
        },
    },
    Query: {
        Proyectos: async (parent, args, context) => {
            const proyectos = await ProjectModel.find();
            return proyectos;
        },
        Proyecto: async (parent, args, context) => {
            const proyecto = await ProjectModel.findOne({
                _id: args.id,
            });
            return proyecto;
        },
    },
    Mutation: {
        crearProyecto: async (parent, args, context) => {
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                objetivoGeneral: args.objetivoGeneral,
                objetivoEspecifico: args.objetivoEspecifico,
                presupuesto: args.presupuesto,
                fechaInicial: args.fechaInicial,
                fechaFinal: args.fechaFinal,
                lider: args.lider,
            });
            return proyectoCreado;
        },
        editarProyecto: async (parent, args, context) => {
            const proyectoEditado = await ProjectModel.findOneAndUpdate(
                args._id,
                { ...args.campos },
                { new: true }
            );
            return proyectoEditado;
        },
    },
};

export { resolverProyecto };
