// routes/clientes.js (ou onde você definir suas rotas)
const express = require("express");
const router = express.Router();

// Controller
const { 
  insertCliente, 
  getAllClientes,
  deleteCliente,
  getClienteById,
  updateCliente
} = require("../controllers/ClienteController");

// Middlewares
const { insertClienteValidation, updateClienteValidation } = require("../middlewares/clienteValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertClienteValidation(), validate, insertCliente);
router.delete("/delete/:id_cliente", deleteCliente);
router.get("/get", getAllClientes);
router.get("/get/:id_cliente", getClienteById);
router.put("/update/:id_cliente", updateClienteValidation(), validate, updateCliente);

module.exports = router;
