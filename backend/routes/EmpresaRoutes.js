const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertEmpresa, 
  getAllEmpresas,
  deleteEmpresa,
  getEmpresaById,
  updateEmpresa
} = require("../controllers/EmpresaController")

// Middlewares
const { insertEmpresaValidation, updateEmpresaValidation } = require("../middlewares/empresaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertEmpresaValidation(), validate, insertEmpresa)
router.delete("/delete/:id_empresa", deleteEmpresa)
router.get("/get", getAllEmpresas)
router.get("/get/:id_empresa", getEmpresaById)
router.put("/update/:id_empresa", updateEmpresaValidation(), validate, updateEmpresa);

module.exports = router