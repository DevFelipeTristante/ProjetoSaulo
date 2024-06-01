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
router.delete("/delete/:id_fornecedor", deleteFornecedor);
router.get("/get", getAllFornecedores);
router.get("/get/:id_fornecedor", getFornecedorById);
router.put("/update/:id_fornecedor", updateFornecedorValidation(), validate, updateFornecedor);

module.exports = router;
