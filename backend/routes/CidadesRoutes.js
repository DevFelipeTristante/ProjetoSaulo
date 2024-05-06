const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCidades, 
} = require("../controllers/CidadesController")

// Middlewares
const { insertCidadesValidation } = require("../middlewares/cidadesValidation")


// Routes 
router.post("/", insertCidadesValidation(), insertCidades)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router