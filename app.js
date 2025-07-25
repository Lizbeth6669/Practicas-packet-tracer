import mongose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

//importando librerias

 
dotenv.config(); //Trayendo configuracion de libreria
mongoose.connect(ProcessingInstruction.env.urlBD) //conectando a mongo db
.then(()=>{
    console.log("Funciona chida la base")
})
.catch((error)=>{
    console.log("No funciona la base ptm", error)
})//promesa de funcionamiento

const serv = express();//Realizando un servidor
serv.use(cors());//Dando seguridad al server
serv.listen(4000,()=>{
    console.log("Se escucha el servidor correctamente.")
})//Escuchando el server

