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
router.delete("/delete", deleteTipoCliente);
router.get("/getall", getAllTiposCliente);
router.get("/get", getTipoClienteById);
router.put("/update", updateTipoValidation(), validate, updateTipoCliente);

module.exports = router;
