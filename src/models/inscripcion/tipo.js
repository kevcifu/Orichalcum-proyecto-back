const {gql} = require ('apollo-server-express');
const {tipoEnum} = require('../enum/tipo');

const tipoInscripcion = gql `
    type Inscripcion{
        _id: ID!
        proyecto: Proyecto!
        estudiante: Estudiante!
        estado: EstadoInscripcion!
        fechaInscripcion: Date!
        fechaEgreso: Date
    }

    type Query {
        Inscripciones: [Inscripcion]
    }

    type Mutation {
        crearInscripcion(
            proyecto: String!
            estudiante: String!
            estado: EstadoInscripcion!
        ): Inscripcion

        aprobarInscripcion(id: String!): Inscripcion
    }
`;

module.exports = {tipoInscripcion};