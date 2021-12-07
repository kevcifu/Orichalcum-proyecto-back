import { UserModel } from '../../models/usuario/usuario.js';
import { encriptar, comparar } from '../../helper/encriptar.js';
import { generarToken } from '../../token/token.js';

const resolverAutenticacion = {
    Mutation: {
        registro: async (parent, args) => {
            const passwordEncriptado = await encriptar(UserModel.password);
            const usuarioCreado = await UserModel.create({
                correo: args.correo,
                identificacion: args.identificacion,
                nombreCompleto: args.nombreCompleto,
                password: passwordEncriptado,
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
                correo: args.correo,
            });
            if (await comparar(args.password, passEncriptado)) {
                return {
                    token: generarToken({
                        _id: usuarioIngresado._id,
                        correo: usuarioIngresado.correo,
                        identificacion: usuarioIngresado.identificacion,
                        nombreCompleto: usuarioIngresado.nombreCompleto,
                        tipoUsuario: usuarioIngresado.tipoUsuario,
                    }),
                };
            }
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
};

export { resolverAutenticacion };
