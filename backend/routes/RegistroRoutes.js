const express = require("express");
const router = express.Router();

// Controller
const { 
  insertRegistro, 
  getAllRegistros,
  deleteRegistro,
  getRegistroById,
  updateRegistro
} = require("../controllers/RegistroController");

// Middlewares
const { insertRegistroValidation, updateRegistroValidation } = require("../middlewares/registroValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertRegistroValidation(), validate, insertRegistro);
router.delete("/delete/:id_registro", deleteRegistro);
router.get("/get", getAllRegistros);
router.get("/get/:id_registro", getRegistroById);
router.put("/update/:id_registro", updateRegistroValidation(), validate, updateRegistro);

module.exports = router;
