// routes/cidades.js (ou onde você definir suas rotas)
const express = require("express");
const router = express.Router();

// Controller
const { 
  insertCidade, 
  getAllCidades,
  deleteCidade,
  getCidadeById,
  updateCidade
} = require("../controllers/CidadeController");

// Middlewares
const { insertCidadeValidation, updateCidadeValidation } = require("../middlewares/cidadeValidation");
const validate = require("../middlewares/handleValidation");

// Routes 
router.post("/insert", insertCidadeValidation(), validate, insertCidade);
router.delete("/delete/:id_cidade", deleteCidade);
router.get("/get", getAllCidades);
router.get("/get/:id_cidade", getCidadeById);
router.put("/update/:id_cidade", updateCidadeValidation(), validate, updateCidade);

module.exports = router;
