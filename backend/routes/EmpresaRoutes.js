const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertEmpresa, 
  getAllEmpresas,
  deleteEmpresa,
  getEmpresaById
} = require("../controllers/EmpresaController")

// Middlewares
const { insertEmpresaValidation } = require("../middlewares/empresaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertEmpresaValidation(), validate, insertEmpresa)
router.delete("/delete/:id_empresa", deleteEmpresa)
router.get("/get", getAllEmpresas)
router.get("/get/:id_empresa", getEmpresaById)

module.exports = router