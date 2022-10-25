const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

const connectDB = require('./config/db')

//Dependencias de la rutas
const bootcampsRoutes = require('./routes/BootcampsRoutes')
const UserRoutes = require('./routes/UserRoutes')


//establecer el arc de conf con variable de entorno
dotenv.config({
    path: './config_env/config.env'
})

//crear objeto app
const app = express()

//ejecutar la conexión
connectDB()

app.use('/api/v1/bootcamps', bootcampsRoutes)
app.use('/api/v1/users', UserRoutes)

//ejecutar servidor de desarrollo de expres
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto:${process.env.PORT}`.bgGreen.red)
})