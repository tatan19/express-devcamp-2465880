const sequelize = require('./seq')
const colors = require ('colors')


//crear función asincrona para la conexión
const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('conexión establecida exitosamente'.bgMagenta.blue)
        //selecionar los users
        // const users = await User.findAll();
        // console.log(users)
        // // // Create a new user
        // // const jane = await User.create({ name: "Jane", email: "noise@misena.edu.co" ,password: "10111" });
        // // console.log("Jane's auto-generated ID:", jane.id);
    } catch (error) {
        console.error(error)
    }

}

module.exports = connectDB