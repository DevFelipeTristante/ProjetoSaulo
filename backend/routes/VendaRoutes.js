const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertVenda, 
} = require("../controllers/VendaController")

// Middlewares
const { insertContaValidation } = require("../middlewares/vendaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertContaValidation(), validate, insertVenda)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router