const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCategoria, 
  getAllCategorias,
  deleteCategoria,
  getCategoriaById
} = require("../controllers/CategoriaController")

// Middlewares
const { insertCategoriaValidation } = require("../middlewares/categoriaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertCategoriaValidation(), validate, insertCategoria)
router.delete("/delete/:id_categoria", deleteCategoria)
router.get("/get", getAllCategorias)
router.get("/get/:id_categoria", getCategoriaById)

module.exports = router