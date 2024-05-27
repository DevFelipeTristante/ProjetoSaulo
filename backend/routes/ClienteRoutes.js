const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCliente, 
  getAllClientes,
  deleteCliente,
  getClienteById
} = require("../controllers/ClienteController")

// Middlewares
const { insertClienteValidation } = require("../middlewares/clienteValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertClienteValidation(), validate, insertCliente)
router.delete("/delete/:id_cliente", deleteCliente)
router.get("/get", getAllClientes)
router.get("/get/:id_cliente", getClienteById)

module.exports = router