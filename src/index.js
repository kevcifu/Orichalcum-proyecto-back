import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { conectarBD } from './db/db.js';

dotenv.config();

const app = express();

app.use(json());

app.use(cors());

app.listen({ port: 4000 }, async () => {
    await conectarBD();
    console.log(`Servidor corriendo`);
});
