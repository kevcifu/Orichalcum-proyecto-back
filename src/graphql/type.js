import { gql } from 'apollo-server-express';
import { tipoEnum } from '../models/enum/tipo.js';
import { EstadoUsuario } from '../models/usuario/tipo.js';
import { EstadoProyecto } from '../models/proyecto/tipo.js';
import { Fase } from '../models/avance/tipo.js';
import { EstadoInscripcion } from '../models/inscripcion/tipo.js';
import { tipoAutenticacion } from './auth/tipo.js';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tipoEnum,
  EstadoUsuario,
  EstadoProyecto,
  Fase,
  EstadoInscripcion,
  tipoAutenticacion,
];