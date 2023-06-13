import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import indexRouter from "./router/index.js";
import cors from 'cors';
import morgan from "morgan";

const server = express(); //se crea servidor

const PORT = process.env.PORT || 8080; //define el puerto donde se levanta la aplicacion
const ready = () => console.log('server ready on port: ' + PORT)

//middlewares
server.use(express.json())                              //permite entradas y tambien trabajar con formato json
server.use (express.urlencoded  ({ extended: true }))   //permite capturar consultas complejas
server.use (cors())                                     //para permitir origenes cruzados (front/back)
server.use(morgan('dev'))                               //para registrar peticiones HTTP

//router
server.use('/api',indexRouter)

//router + server
server.listen(PORT, ready); //iniciar servidor

console.log(process.env.NODE_ENV);