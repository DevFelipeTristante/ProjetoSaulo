const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertProduto, 
  getAllProdutos,
  deleteProduto,
  getProdutoById
} = require("../controllers/ProdutoController")

// Middlewares
const { insertProdutoValidation } = require("../middlewares/produtoValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertProdutoValidation(), validate, insertProduto)
router.delete("/delete/:id_produto", deleteProduto)
router.get("/get", getAllProdutos)
router.get("/get/:id_produto", getProdutoById)

module.exports = router