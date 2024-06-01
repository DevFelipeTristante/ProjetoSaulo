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
router.delete("/delete", deleteRegistro);
router.get("/getall", getAllRegistros);
router.get("/get", getRegistroById);
router.put("/update", updateRegistroValidation(), validate, updateRegistro);

module.exports = router;
