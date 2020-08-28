const express = require('express')
const app  =  express()
 const cors = require('cors')
const sequelize = require('../db/db')

 require('../relaciones')

const port = process.env.PORT || 4000


app.use((req, res, next)=> {
 
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
})
app.use(express.urlencoded({extended:false}))
app.use(express.json({extended:false}))

app.use('/api/empleados',require('../routers/empleado'))
app.use('/api/telefonos',require('../routers/telefono'))




app.use(cors())

app.listen(port,()=>{

console.log('Conectado al Puerto:',port)

sequelize.sync({ force: true });
     



})