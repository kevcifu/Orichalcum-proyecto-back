import { gql } from 'apollo-server-express';

const tipoProyecto = gql`
    input camposProyecto {
        nombre: String
        objetivoGeneral: String
        objetivoEspecifico: String
        presupuesto: Float
        fechaInicial: Date
        fechaFinal: Date
        estado: EstadoProyecto
        fase: Fase
        lider: String
    }

    type Proyecto {
        _id: ID!
        nombre: String!
        objetivoGeneral: String!
        objetivoEspecifico: String!
        presupuesto: Float!
        fechaInicial: Date
        fechaFinal: Date
        estado: EstadoProyecto!
        fase: Fase!
        lider: Usuario!
    }

    type Query {
        Proyectos: [Proyecto]
        Proyecto(id: String!): [Proyecto]
    }

    type Mutation {
        crearProyecto(
            nombre: String!
            objetivoGeneral: String!
            objetivoEspecifico: String!
            presupuesto: Float!
            fechaInicial: Date
            fechaFinal: Date
            lider: String!
        ): Proyecto

        editarProyecto(_id: String!, campos: camposProyecto): Proyecto
    }
`;

export { tipoProyecto };
