const express = require("express");
const router = express.Router();
const empleadoController = require("../controllers/empleadoController");

router.get("/",empleadoController.obtenerEmpleados);
router.post("/",empleadoController.crearEmpleado);
router.put("/:id",empleadoController.actualizarEmpleado);
router.delete("/:id",empleadoController.eliminarEmpleado);
router.get("/:id",empleadoController.obtenerEmpleadoId);
module.exports = router;
