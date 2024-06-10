const express = require("express");
const router = express.Router();

// Controller
const { 
  insertCompra, 
  getAllCompras,
  deleteCompra,
  getCompraById,
  updateCompra
} = require("../controllers/CompraProdutoController");

// Middlewares
const { insertCompraValidation, updateCompraValidation } = require("../middlewares/compraValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertCompraValidation(), validate, insertCompra);
router.delete("/delete/:numeroNF", deleteCompra);
router.get("/getall", getAllCompras);
router.get("/get", getCompraById);
router.put("/update", updateCompraValidation(), validate, updateCompra);

module.exports = router;
