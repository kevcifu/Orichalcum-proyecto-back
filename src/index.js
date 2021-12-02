const express = require('express')
const mongoose = require('mongoose')
const { ProjectsModel } = require('../src/models/proyectos');
const { UserModel } = require('../src/models/usuario');
const {InscriptionModel} = require('../src/models/inscripcion');
const {AdvanceModel} = require('../src/models/avances');
const conectarBD = require('../db/db');

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

    await InscriptionModel.create({
        proyecto: '61a6d87275ea06462a5d808d',
        estudiante: '61a6d87275ea06462a5d606f',
        estado: 'INSCRITO',
        fechaIncripcion: Date.now(),
        fechaEgreso: Date.now()

    }).then((i)=>{
        console.log(i);
    }).catch((e)=>{
        console.error(e);
    });

    await AdvanceModel.create({
        proyecto: '61a6d87275ea06462a5d808d',
        fecha: Date.now(),
        descripcion: 'avance 1',
        observaciones: 'observacion avance 1'
    }).then((a)=>{
        console.log(a);
    }).catch((e)=>{
        console.error(e);
    });

};

main();
