const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCidade, 
  getAllCidades,
  deleteCidade,
  getCidadeById
} = require("../controllers/CidadeController")

// Middlewares
const { insertCidadeValidation } = require("../middlewares/cidadeValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertCidadeValidation(), validate, insertCidade)
router.delete("/delete/:id_cidade", deleteCidade)
router.get("/get", getAllCidades)
router.get("/get/:id_cidade", getCidadeById)

module.exports = router