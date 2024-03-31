const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCategoriaProduto, 
} = require("../controllers/CategoriaProdutoController")

// Middlewares
const { insertCategoriaProdutoValidation } = require("../middlewares/categoriaValidation")
const authGuard = require("../middlewares/authGuard")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/", authGuard, validate, insertCategoriaProdutoValidation(), insertCategoriaProduto)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router