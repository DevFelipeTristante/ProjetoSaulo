const express = require("express");
const router = express.Router();

// Controller
const { 
  insertTelefone, 
  getAllTelefones,
  deleteTelefone,
  getTelefoneById,
  updateTelefone
} = require("../controllers/TelefoneController");

// Middlewares
const { insertTelefoneValidation, updateTelefoneValidation } = require("../middlewares/telefoneValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertTelefoneValidation(), validate, insertTelefone);
router.delete("/delete/:id_telefone", deleteTelefone);
router.get("/get", getAllTelefones);
router.get("/get/:id_telefone", getTelefoneById);
router.put("/update/:id_telefone", updateTelefoneValidation(), validate, updateTelefone);

module.exports = router;
