const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertVenda, 
  getAllVendas,
  deleteVenda,
  getVendaById,
  updateVenda
} = require("../controllers/VendaController")

// Middlewares
const { insertVendaValidation, updateVendaValidation } = require("../middlewares/vendaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertVendaValidation(), validate, insertVenda)
router.delete("/delete/:id_venda", deleteVenda)
router.get("/get", getAllVendas)
router.get("/get/:id_venda", getVendaById)
router.put("/update/:id_venda", updateVendaValidation(), validate, updateVenda);

module.exports = router