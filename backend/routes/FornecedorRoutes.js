const express = require("express");
const router = express.Router();

// Controller
const { 
  insertFornecedor, 
  getAllFornecedores,
  deleteFornecedor,
  getFornecedorById,
  updateFornecedor
} = require("../controllers/FornecedorController");

// Middlewares
const { insertFornecedorValidation, updateFornecedorValidation } = require("../middlewares/fornecedorValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertFornecedorValidation(), validate, insertFornecedor);
router.delete("/delete", deleteFornecedor);
router.get("/getall", getAllFornecedores);
router.get("/get", getFornecedorById);
router.put("/update", updateFornecedorValidation(), validate, updateFornecedor);

module.exports = router;
