const { UserModel } = require('./models/usuario');
const conectarBD = require('./db/db');

const main = async () => {
    await conectarBD();
    await UserModel.create({
        correo: 'mjcifuentes@gmail.com',
        identificacion: '56789975',
        nombre: 'Magda Cifuentes',
        password: '12345678',
        tipoUsuario: 'ESTUDIANTE',
    }).then((u)=>{
        console.log(u);
    }).catch((e) => {
        console.error(e);
    });
};

main();
