import mongoose from 'mongoose';
const { connect } = mongoose;

const conectarBD = async () => {
    return await connect(process.env.DB_URL)
        .then(() => {
            console.log('Conexion exitosa');
        })
        .catch((e) => {
            console.error('Error al conectar', e);
        });
};

export { conectarBD };
