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
router.delete("/delete/:id_produto", deleteProduto)
router.get("/get", getAllProdutos)
router.get("/get/:id_produto", getProdutoById)
router.put("/update/:id_produto", updateProdutoValidation(), validate, updateProduto)

module.exports = router