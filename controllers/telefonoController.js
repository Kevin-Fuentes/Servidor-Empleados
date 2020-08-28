const Telefonos = require("../models/Telefono");
const sequelize = require("../db/db");
const Empleados = require("../models/Empleado");

exports.obtenerTelefono = (req, res) => {
   Telefonos.findAll({
     include:{
         model:Empleados,
         as:"empleado",
        
     }
   }).then((telefono) => res.json({ ok: true, Telefonos: telefono }));
 };


 
 exports.actualizarTelefono = (req, res) => {
  const { tipo,numero,indicativo,personaId } = req.body;

  

  Telefonos.update(
    {
      tipo,numero,indicativo,personaId 
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



exports.crearTelefono = (req, res) => {
  const { tipo, numero, indicativo,personaId } = req.body;
 
  
  Telefonos.create({ tipo, numero, indicativo,personaId })
  
    .then((telefono) => { 
     res.json({ 
         telefono: telefono, ok: true })})
    .catch((err) => {
       
      res.json({ err });
    });
};

exports.obtenerTelefonoId = (req, res) => {
  
  Telefonos.findOne(req.body.id).then((telefono) => res.json({ ok: true, telefono}));
};


exports.eliminarTelefono = (req, res) => {
     Telefonos.destroy({
       where: {
         id: req.params.id,
       },
     }).then((result) => {
       res.json({ ok: result, res: "Telefono Eliminado" });
     });
   };
   