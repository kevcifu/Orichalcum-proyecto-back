import { gql } from 'apollo-server-express';

const tipoInscripcion = gql`
    type Inscripcion {
        _id: ID!
        proyecto: Proyecto!
        estudiante: Usuario!
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

export { tipoInscripcion };
