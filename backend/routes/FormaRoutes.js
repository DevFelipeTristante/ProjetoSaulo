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
router.delete("/delete", deleteForma)
router.get("/getall", getAllFormas)
router.get("/get", getFormaById)
router.put("/update", updateFormaValidation(), validate, updateForma);

module.exports = router