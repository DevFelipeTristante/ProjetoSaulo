const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertProduto, 
  getAllProdutos,
  deleteProduto,
  getProdutoById,
  updateProduto
} = require("../controllers/ProdutoController")

// Middlewares
const { insertProdutoValidation, updateProdutoValidation } = require("../middlewares/produtoValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertProdutoValidation(), validate, insertProduto)
router.delete("/delete", deleteProduto)
router.get("/getall", getAllProdutos)
router.get("/get", getProdutoById)
router.put("/update", updateProdutoValidation(), validate, updateProduto)

module.exports = router