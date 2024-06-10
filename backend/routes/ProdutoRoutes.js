const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertProduto, 
  getAllProdutos,
  deleteProduto,
  getProdutoById,
  updateProduto,
  getProdutosVendidos,
  getEntrada,
  getSaida
} = require("../controllers/ProdutoController")

// Middlewares
const { insertProdutoValidation, updateProdutoValidation } = require("../middlewares/produtoValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertProdutoValidation(), validate, insertProduto)
router.delete("/delete/:id_produto", deleteProduto)
router.get("/getall", getAllProdutos)
router.get("/getprodutos", getProdutosVendidos)
router.get("/getentrada", getEntrada)
router.get("/getsaida", getSaida)
router.get("/get", getProdutoById)
router.put("/update", updateProdutoValidation(), validate, updateProduto)

module.exports = router