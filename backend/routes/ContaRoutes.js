const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertConta, 
  getAllContas,
  getContasReceber,
  deleteConta,
  getContaById,
  updateConta
} = require("../controllers/ContaController")

// Middlewares
const { insertContaValidation, updateContaValidation } = require("../middlewares/contaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertContaValidation(), validate, insertConta)
router.delete("/delete", deleteConta)
router.get("/getall", getAllContas)
router.get("/getcontas", getContasReceber)
router.get("/get", getContaById)
router.put("/update", updateContaValidation(), validate, updateConta);

module.exports = router