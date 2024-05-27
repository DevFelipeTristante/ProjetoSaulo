const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCompra, 
} = require("../controllers/CompraProdutoController")

// Middlewares
const { insertCompraValidation } = require("../middlewares/compraValidation")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertCompraValidation(), validate, insertCompra)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router