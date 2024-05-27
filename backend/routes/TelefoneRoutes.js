const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertTelefone, 
} = require("../controllers/TelefoneController")

// Middlewares
const { insertTelefoneValidation } = require("../middlewares/telefoneValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertTelefoneValidation(), validate, insertTelefone)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router