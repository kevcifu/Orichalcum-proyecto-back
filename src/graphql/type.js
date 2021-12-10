import { gql } from 'apollo-server-express';
import { tipoEnum } from '../models/enum/tipo.js';
import { tipoUsuario } from '../models/usuario/tipo.js';
import { tipoProyecto } from '../models/proyecto/tipo.js';
import { tipoAvance } from '../models/avance/tipo.js';
import { tipoInscripcion } from '../models/inscripcion/tipo.js';
import { tipoAutenticacion } from './auth/tipo.js';

const tiposGlobales = gql`
    scalar Date
`;

export const tipos = [
    tiposGlobales,
    tipoEnum,
    tipoUsuario,
    tipoProyecto,
    tipoAvance,
    tipoInscripcion,
    tipoAutenticacion,
];
