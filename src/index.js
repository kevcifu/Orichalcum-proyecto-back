import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { tipos } from './graphql/type.js';
import { resolvers } from './graphql/resolver.js';
import { ApolloServer } from 'apollo-server-express';
import { conectarBD } from './db/db.js';
import { validarToken } from './token/token.js';
import { TypeInfo } from 'graphql';

dotenv.config();

const getDatosUsuario = (token) => {
    const verificacion = validarToken(token.split(' ')[1]);
    if (verificacion.data) {
        return verificacion.data;
    } else {
        return null;
    }
};

const servidor = new ApolloServer({
    typeDefs: tipos,
    resolvers: resolvers,
    context: ({ req, res }) => {
        const token = req.headers?.authorization ?? null;
        if (token) {
            const datosUsuario = getDatosUsuario(token);
            if (datosUsuario) {
                return { datosUsuario };
            }
        }
        return null;
    },
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
    await conectarBD();
    await servidor.start();

    servidor.applyMiddleware({ app });

    console.log(`servidor corriendo`);
});
