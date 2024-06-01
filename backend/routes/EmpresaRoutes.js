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
router.delete("/delete", deleteEmpresa)
router.get("/getall", getAllEmpresas)
router.get("/get", getEmpresaById)
router.put("/update", updateEmpresaValidation(), validate, updateEmpresa);

module.exports = router