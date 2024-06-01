const express = require("express");
const router = express.Router();

// Controller
const { 
  insertCategoria, 
  getAllCategorias,
  deleteCategoria,
  getCategoriaById,
  updateCategoria
} = require("../controllers/CategoriaController");

// Middlewares
const { insertCategoriaValidation, updateCategoriaValidation } = require("../middlewares/categoriaValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertCategoriaValidation(), validate, insertCategoria);
router.delete("/delete/:id_categoria", deleteCategoria);
router.get("/get", getAllCategorias);
router.get("/get/:id_categoria", getCategoriaById);
router.put("/update/:id_categoria", updateCategoriaValidation(), validate, updateCategoria);

module.exports = router;
