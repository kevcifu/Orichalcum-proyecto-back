const { connect } = require('mongoose');

const conectarBD = async () => {
    return await connect(
        'mongodb+srv://OrichalcumSoftware:OrichalcumSoftware123*@gestionproyectosinvesti.7p3b4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
        .then(() => {
            console.log('Conexion exitosa');
        })
        .catch((e) => {
            console.error('Error al conectar', e);
        });
};

module.exports = conectarBD;
