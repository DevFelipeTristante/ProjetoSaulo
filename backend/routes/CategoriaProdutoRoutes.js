const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCategoriaProduto, 
} = require("../controllers/CategoriaProdutoController")

// Middlewares
const { insertCategoriaProdutoValidation } = require("../middlewares/categoriaValidation")
<<<<<<< HEAD

// Routes 
router.post("/", insertCategoriaProdutoValidation(), insertCategoriaProduto)
=======
const authGuard = require("../middlewares/authGuard")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/", authGuard, validate, insertCategoriaProdutoValidation(), insertCategoriaProduto)
>>>>>>> a7a8ff1e26a1cf6b7cddc6c57954a568114e9c12
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router