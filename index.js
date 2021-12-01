const { ProjectsModel } = require('./models/proyectos');
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
};

main();
