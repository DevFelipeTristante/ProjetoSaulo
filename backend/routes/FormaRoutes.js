const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertForma, 
  getAllFormas,
  deleteForma,
  getFormaById,
  updateForma
} = require("../controllers/FormaController")

// Middlewares
const { insertFormaValidation, updateFormaValidation } = require("../middlewares/formaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertFormaValidation(), validate, insertForma)
router.delete("/delete/:id_forma", deleteForma)
router.get("/get", getAllFormas)
router.get("/get/:id_forma", getFormaById)
router.put("/update/:id_forma", updateFormaValidation(), validate, updateForma);

module.exports = router