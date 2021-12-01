const { ProjectsModel } = require('./models/proyectos');
const { UserModel } = require('./models/usuario');
const conectarBD = require('./db/db');

const main = async () => {
    await conectarBD();

    await ProjectsModel.create({
        nombre: "Proyecto1",
        presupuesto: 500000000,
        fechaInicial: Date.now(),
        fechaFinal: Date.now(),
        objetivoGeneral: "prueba1",
        objetivoEspecifico: "pruebapp",
        lider: "61a6d87275ea06462a5d707d",

    
    }).then((p) =>{ 
        console.log("proyecto creado", p );
    }).catch((e)=>{
        console.error("error", e );
    }); 

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
