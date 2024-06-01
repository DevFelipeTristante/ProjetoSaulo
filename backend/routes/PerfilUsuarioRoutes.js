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
router.delete("/delete/:id_perfil", deletePerfil);
router.get("/get", getAllPerfis);
router.get("/get/:id_perfil", getPerfilById);
router.put("/update/:id_perfil", updatePerfilValidation(), validate, updatePerfil);

module.exports = router;
