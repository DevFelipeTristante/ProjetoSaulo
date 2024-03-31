const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCidades, 
} = require("../controllers/CidadesController")

// Middlewares
const { insertCidadesValidation } = require("../middlewares/cidadesValidation")
const authGuard = require("../middlewares/authGuard")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/", authGuard, validate, insertCidadesValidation(), insertCidades)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router