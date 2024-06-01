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
router.delete("/delete", deleteVenda)
router.get("/getall", getAllVendas)
router.get("/get", getVendaById)
router.put("/update", updateVendaValidation(), validate, updateVenda);

module.exports = router