import express from "express";
import "dotenv/config.js";
import "./config/database.js";

const server = express(); //se crea servidor

const PORT = process.env.PORT || 8080; //define el puerto donde se levanta la aplicacion
const ready = () => {
    console.log('server ready on port: ' + PORT);
};

//middlewords
server.use(express.json())
server.use (express.urlencoded 
    ({ extended: false }))

//router + server
server.listen(PORT, ready); //iniciar servidor

console.log(process.env.NODE_ENV);