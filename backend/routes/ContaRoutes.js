const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertConta, 
  getAllContas,
  deleteConta,
  getContaById
} = require("../controllers/ContaController")

// Middlewares
const { insertContaValidation } = require("../middlewares/contaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertContaValidation(), validate, insertConta)
router.delete("/delete/:id_conta", deleteConta)
router.get("/get", getAllContas)
router.get("/get/:id_conta", getContaById)

module.exports = router