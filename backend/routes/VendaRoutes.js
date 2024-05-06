const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertFornecedor, 
} = require("../controllers/FornecedorController")

// Middlewares
const { insertFornecedorValidation } = require("../middlewares/fornecedorValidation")


// Routes 
router.post("/", insertFornecedorValidation(), insertFornecedor)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router