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
router.delete("/delete", deleteTabelaPreco);
router.get("/getall", getAllTabelasPreco);
router.get("/get", getTabelaPrecoById);
router.put("/update", updateTabelaValidation(), validate, updateTabelaPreco);

module.exports = router;
