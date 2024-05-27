const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertConta, 
} = require("../controllers/ContaController")

// Middlewares
const { insertContaValidation } = require("../middlewares/contaValidation")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertContaValidation(), validate, insertConta)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router