const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//Dependencias de la rutas
const bootcampsRoutes = require('./routes/BootcampsRoutes')

//establecer el arc de conf con variable de entorno
dotenv.config({
    path: './config_env/config.env'
})

//crear objeto app
const app = express()

app.use('/api/v1/bootcamps', bootcampsRoutes)

//ejecutar servidor de desarrollo de expres
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto:${process.env.PORT}`.bgGreen.red)
})