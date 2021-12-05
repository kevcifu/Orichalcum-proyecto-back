import { bcrypt } from 'bcrypt';

const encriptar = async(textoPlano) =>{
    const encriptado = await bcrypt.hash(textoPlano, 10)
    return encriptado;
}

const comparar = async(passwordPlano, passwordEncriptado) =>{
    return await bcrypt.compare(passwordPlano, passwordEncriptado)
}

export {encriptar, comparar};