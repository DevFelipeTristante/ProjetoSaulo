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
router.delete("/delete", deleteCategoria);
router.get("/getall", getAllCategorias);
router.get("/get", getCategoriaById);
router.put("/update", updateCategoriaValidation(), validate, updateCategoria);

module.exports = router;
