const express = require("express");
const router = express.Router();

// Controller
const { 
  insertPerfil, 
  getAllPerfis,
  deletePerfil,
  getPerfilById,
  updatePerfil
} = require("../controllers/PerfilController");

// Middlewares
const { insertPerfilValidation, updatePerfilValidation } = require("../middlewares/perfilValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertPerfilValidation(), validate, insertPerfil);
router.delete("/delete", deletePerfil);
router.get("/getall", getAllPerfis);
router.get("/get", getPerfilById);
router.put("/update", updatePerfilValidation(), validate, updatePerfil);

module.exports = router;
