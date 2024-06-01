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
router.delete("/delete", deleteCidade);
router.get("/getall", getAllCidades);
router.get("/get", getCidadeById);
router.put("/update", updateCidadeValidation(), validate, updateCidade);

module.exports = router;
