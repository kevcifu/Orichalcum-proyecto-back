import { gql } from 'apollo-server-express';

const tipoEnum = gql`
    enum EstadoUsuario {
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum TipoUsuario {
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum EstadoProyecto {
        ACTIVO
        INACTIVO
    }

    enum Fase {
        INICIADO
        DESARROLLO
        TERMINADO
        NULO
    }

    enum EstadoInscripcion {
        ACEPTADO
        RECHAZADO
        PENDIENTE
    }
`;

export { tipoEnum };
