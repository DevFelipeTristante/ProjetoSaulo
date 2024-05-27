const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertRegistro, 
} = require("../controllers/RegistroController")

// Middlewares
const { insertRegistroValidation } = require("../middlewares/registroValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertRegistroValidation(), validate, insertRegistro)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router