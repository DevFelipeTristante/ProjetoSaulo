const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertEmpresa, 
  getAllEmpresas,
  deleteEmpresa,
  getEmpresaById,
  updateEmpresa,
  getProdutosVendidosEmpresa
} = require("../controllers/EmpresaController")

// Middlewares
const { insertEmpresaValidation, updateEmpresaValidation } = require("../middlewares/empresaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertEmpresaValidation(), validate, insertEmpresa)
router.delete("/delete/:id_empresa", deleteEmpresa)
router.get("/getall", getAllEmpresas)
router.get("/getempresa", getProdutosVendidosEmpresa)
router.get("/get", getEmpresaById)
router.put("/update", updateEmpresaValidation(), validate, updateEmpresa);

module.exports = router