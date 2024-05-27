const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertForma, 
} = require("../controllers/FormaController")

// Middlewares
const { insertFormaValidation } = require("../middlewares/formaValidation")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertFormaValidation(), validate, insertForma)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router