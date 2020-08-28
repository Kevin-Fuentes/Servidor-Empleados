const {Sequelize}= require('sequelize')
require('dotenv').config({ path:'variables.env'})


const sequelize  = new Sequelize("prueba_de_conocimiento","root","root",{
     host:"127.0.0.1",
     port:"3307",
     dialect:'mysql',
     define:{
          timestamps:true
     }, pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      operatorsAliases:0

})


sequelize.authenticate().then(()=>{
     console.log("Nos hemos conectados a la base de dato")
     
})
.catch(err=>{
     console.log("Se ha producido un error")
})

module.exports = sequelize