const {UserModel} = require('./models/usuario/usuario');
const {InscriptionModel} = require('./models/inscripcion/inscripcion');

const resolverUsuario = {
    Usuario:{
        inscripciones: async(parent,args,context)=>{
            return InscriptionModel.findOne({estudiante:parent._id});
        },
    },

    Query:{
        Usuarios: async (parent,args,context)=>{
            const usuarios = await UserModel.find();
            return usuarios;
        },

        Usuario: async (parent,args)=>{
            const usuario = await UserModel.findById(args._id);
            return usuario;
        },
    },

    Mutation:{
        crearUsuario: async (parent,args)=>{
            const usuarioCreado = await UserModel.create({
                correo: args.correo,
                identificacion: args.identificacion,
                nombreCompleto: args.nombreCompleto,
                password: args.password,
                tipoUsuario: args.tipoUsuario,
            });

            if (Object.keys(args).includes('estado')){
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
        },

        editarUsuario: async (parent,args)=>{
            const usuarioEditado = await UserModel.findByIdAndUpdate(
                args._id,
                {
                correo: args.correo,
                identificacion: args.identificacion,
                nombreCompleto: args.nombreCompleto,
                password: args.password,
                estado: args.estado,
            },{
                new : true
            });
            return usuarioEditado;
        },

        eliminarUsuario: async (parent,args)=>{
            const usuarioEliminado = await UserModel.findByIdAndRemove(args._id)
            return usuarioEliminado;
        },
    },
};

module.exports = {resolverUsuario};