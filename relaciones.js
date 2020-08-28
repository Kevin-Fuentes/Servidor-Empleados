const Telefonos = require('./models/Telefono')
const Empleados = require('./models/Empleado')



// Usuario.hasOne(Producto,{as:"producto",foreignKey:"usuarioid"})

// Producto.belongsTo(Usuario,{as:"usuario",foreignKey:"usuarioid"})


Empleados.hasMany(Telefonos,{as:"telefono",foreignKey:"personaId"})
Telefonos.belongsTo(Empleados,{as:"empleado",foreignKey:"personaId"})