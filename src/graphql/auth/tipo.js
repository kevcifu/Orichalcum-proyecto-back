import { gql } from 'apollo-server-express';

const tipoAutenticacion = gql`
    type Token {
        token: String
        error: String
    }

    type Mutation {
        registro(
            correo: String!
            identificacion: String!
            nombreCompleto: String!
            password: String!
            tipoUsuario: TipoUsuario!
            estado: EstadoUsuario
        ): Token!

        login(correo: String!, password: String!): Token

        refreshToken: Token
    }
`;

export {tipoAutenticacion};