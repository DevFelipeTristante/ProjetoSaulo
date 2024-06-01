const express = require("express");
const router = express.Router();

// Controller
const { 
  insertTipoCliente, 
  getAllTiposCliente,
  deleteTipoCliente,
  getTipoClienteById,
  updateTipoCliente
} = require("../controllers/TipoClienteController");

// Middlewares
const { insertTipoValidation, updateTipoValidation } = require("../middlewares/tipoValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertTipoValidation(), validate, insertTipoCliente);
router.delete("/delete/:id_tipo", deleteTipoCliente);
router.get("/get", getAllTiposCliente);
router.get("/get/:id_tipo", getTipoClienteById);
router.put("/update/:id_tipo", updateTipoValidation(), validate, updateTipoCliente);

module.exports = router;
