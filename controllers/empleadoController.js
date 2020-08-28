const Empleados = require("../models/Empleado");
const Telefonos =  require('../models/Telefono')
const {formatterPeso} = require('../helpers/helps')

exports.obtenerEmpleados = (req, res) => {
  
  Empleados.findAll({
    
    include:{
        model:Telefonos,
        as:"telefono",
      attributes:["tipo","numero"]
    }
  }).then((empleado) => res.json({ ok: true, empleados: empleado}));
};


exports.obtenerEmpleadoId = (req, res) => {
  
  Empleados.findOne(req.body.id).then((empleado) => res.json({ ok: true, empleado}));
};


exports.crearEmpleado = (req, res) => {
  
 
  const { nombres, apellidos, tipoIdentificacion, identificacion,correo,salario } = req.body;


  const salarioMensual =  formatterPeso.format(salario)
   


  Empleados.create({nombres, apellidos, tipoIdentificacion, identificacion,correo,salarioMensual })

    .then((empleado) => {
      
      res.json({ empleado: empleado, ok: true })})
    .catch((err) => {
         

      res.json({ err });
    });
};

exports.actualizarEmpleado = (req, res) => {
  const { nombres, apellidos, tipoIdentificacion, identificacion,correo,salario } = req.body;

  const salarioMensual = !salario?undefined:formatterPeso.format(salario)


  Empleados.update(
    {
     nombres, apellidos, tipoIdentificacion, identificacion,correo,salarioMensual
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((result) => {
    res.json({ ok: result, res: "Actualizacion correcta" });
  });
};

exports.eliminarEmpleado = (req, res) => {
  Empleados.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json({ ok: result, res: "Empleado Eliminado" });
  });
};




