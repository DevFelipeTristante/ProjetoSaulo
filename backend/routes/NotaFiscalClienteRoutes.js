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
router.delete("/delete", deleteNFCliente);
router.get("/getall", getAllNFClientes);
router.get("/get", getNFClienteById);
router.put("/update", updateNFClienteValidation(), validate, updateNFCliente);

module.exports = router;
