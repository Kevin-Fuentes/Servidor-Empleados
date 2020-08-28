const express = require("express");
const router = express.Router();
const telefonoController = require('../controllers/telefonoController.js')
router.get('/',telefonoController.obtenerTelefono)
router.post('/',telefonoController.crearTelefono)
router.delete('/:id',telefonoController.eliminarTelefono)
router.get('/:id',telefonoController.obtenerTelefonoId)
router.put("/:id",telefonoController.actualizarTelefono);
module.exports = router