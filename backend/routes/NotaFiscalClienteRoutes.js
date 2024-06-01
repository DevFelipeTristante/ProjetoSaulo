const express = require("express");
const router = express.Router();

// Controller
const { 
  insertNFCliente, 
  getAllNFClientes,
  deleteNFCliente,
  getNFClienteById,
  updateNFCliente
} = require("../controllers/NFClienteController");

// Middlewares
const { insertNFClienteValidation, updateNFClienteValidation } = require("../middlewares/nfClienteValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertNFClienteValidation(), validate, insertNFCliente);
router.delete("/delete/:numeroNF", deleteNFCliente);
router.get("/get", getAllNFClientes);
router.get("/get/:numeroNF", getNFClienteById);
router.put("/update/:numeroNF", updateNFClienteValidation(), validate, updateNFCliente);

module.exports = router;
