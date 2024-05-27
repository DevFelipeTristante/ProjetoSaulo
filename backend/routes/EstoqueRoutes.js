const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertEstoque, 
} = require("../controllers/EstoqueController")

// Middlewares
const { insertEstoqueValidation } = require("../middlewares/estoqueValidation")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertEstoqueValidation(), validate, insertEstoque)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router