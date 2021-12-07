import { gql } from 'apollo-server-express';

const tipoUsuario = gql`
    type Usuario {
        _id: ID!
        correo: String!
        identificacion: String!
        nombreCompleto: String!
        password: String!
        tipoUsuario: TipoUsuario!
        estado: EstadoUsuario
        inscripciones: [Inscripcion]
    }

    type Query {
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
    }

    type Mutation {
        crearUsuario(
            correo: String!
            identificacion: String!
            nombreCompleto: String!
            password: String!
            tipoUsuario: TipoUsuario!
            estado: EstadoUsuario
        ): Usuario

        editarUsuario(
            _id: String!
            correo: String
            identificacion: String
            nombreCompleto: String
            password: String
            tipoUsuario: TipoUsuario
            estado: EstadoUsuario
        ): Usuario

        eliminarUsuario(_id: String!): Usuario
    }
`;

export { tipoUsuario };
