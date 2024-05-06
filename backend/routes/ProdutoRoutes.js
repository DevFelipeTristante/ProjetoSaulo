const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertProduto, 
} = require("../controllers/ProdutoController")

// Middlewares
const { insertProdutoValidation } = require("../middlewares/produtoValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertProdutoValidation(), validate, insertProduto)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router