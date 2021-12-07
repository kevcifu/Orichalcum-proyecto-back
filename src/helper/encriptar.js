import bcrypt from 'bcryptjs';
import { UserModel } from '../models/usuario/usuario.js';

const encriptar = async (textPlain) => {
    const encriptado = await bcrypt.hash(UserModel.password, 10);
    return encriptado;
};

const comparar = async (passwordPlano, passwordEncriptado) => {
    return await bcrypt.compare(passwordPlano, passwordEncriptado);
};

export { encriptar, comparar };
