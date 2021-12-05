import { gql } from "apollo-server-express";

const tipoAvance =gql `
    type Avance { 
        _id: ID!
        proyecto: Proyecto!
        fecha: Date!
        descripcion: String!
        observaciones: [String]
    }
    type Query {
        Avances: [Avance]
        Avance(_id: String!): [Avance]
    }
    type Mutation {
        crearAvance(
            proyecto: Proyecto!
            fecha: Date!
            descripcion: String!
        )
    }
`;

export {tipoAvance};