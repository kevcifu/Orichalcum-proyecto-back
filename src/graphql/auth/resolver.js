import { UserModel } from '../../models/usuario/usuario.js';
import  bcrypt  from 'bcrypt';
import { generarToken } from '../../token/token.js';

const resolverAutenticacion = {
    Mutation: {
        registro: async (parent, args) =>{
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(args.password, salt);
            const usuarioCreado = await UserModel.create({
                correo: args.correo,
                identificacion: args.identificacion,
                nombreCompleto: args.nombreCompleto,
                password: hashPassword,
                tipoUsuario: args.tipoUsuario,
            });
            return {
                token: generarToken({
                    _id: usuarioCreado._id,
                    correo: usuarioCreado.correo,
                    identificacion: usuarioCreado.identificacion,
                    nombreCompleto: usuarioCreado.nombreCompleto,
                    tipoUsuario: usuarioCreado.tipoUsuario,
                }),
            };
        },

        login: async (parent, args) => {
            const passwordUsuario = await UserModel.password;
            const passEncriptado = await comparar(password, UserModel.password);
            const usuarioIngresado = await UserModel.findOne({
                    token: generarToken({
                        _id: usuarioIngresado._id,
                        identificacion: usuarioIngresado.identificacion,
                        nombreCompleto: usuarioIngresado.nombreCompleto,
                        tipoUsuario: usuarioIngresado.tipoUsuario,
                    }),
                });
            },
        },

        refrescarToken: async (parent, args, context) => {
            if (!context.datosUsuario) {
                return {
                    error: 'token no valido',
                };
            } else {
                return {
                    token: generarToken({
                        _id: context.datosUsuario._id,
                        correo: context.datosUsuario.correo,
                        identificacion: context.datosUsuario.identificacion,
                        nombreCompleto: context.datosUsuario.nombreCompleto,
                        tipoUsuario: context.datosUsuario.tipoUsuario,
                    }),
                };
            } //validar que el contexto tenga la información del usuario. Si no devolver null para que el front redirija al login
        },
},

export { resolverAutenticacion };
