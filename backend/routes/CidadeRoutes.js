const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCidade, 
} = require("../controllers/CidadeController")

// Middlewares
const { insertCidadeValidation } = require("../middlewares/cidadeValidation")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertCidadeValidation(), validate, insertCidade)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router