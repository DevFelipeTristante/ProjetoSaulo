const express = require("express");
const router = express.Router();

// Controller
const { 
  insertTabelaPreco, 
  getAllTabelasPreco,
  deleteTabelaPreco,
  getTabelaPrecoById,
  updateTabelaPreco
} = require("../controllers/TabelaPrecoController");

// Middlewares
const { insertTabelaValidation, updateTabelaValidation } = require("../middlewares/tabelaValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertTabelaValidation(), validate, insertTabelaPreco);
router.delete("/delete/:id_tabela", deleteTabelaPreco);
router.get("/get", getAllTabelasPreco);
router.get("/get/:id_tabela", getTabelaPrecoById);
router.put("/update/:id_tabela", updateTabelaValidation(), validate, updateTabelaPreco);

module.exports = router;
