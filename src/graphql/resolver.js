import { resolverUsuario } from '../models/usuario/resolver.js';
import { resolverProyecto } from '../models/proyecto/resolver.js';
import { resolverInscripcion } from '../models/inscripcion/resolver.js';
import { resolverAvance } from '../models/avance/resolver.js';
import { resolverAutenticacion } from './auth/resolver.js';

export const resolvers = [
    resolverUsuario,
    resolverProyecto,
    resolverInscripcion,
    resolverAvance,
    resolverAutenticacion,
    
];