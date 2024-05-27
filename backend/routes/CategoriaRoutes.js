const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCategoria, 
  getAllCategorias
} = require("../controllers/CategoriaController")

// Middlewares
const { insertCategoriaValidation } = require("../middlewares/categoriaValidation")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertCategoriaValidation(), validate, insertCategoria)
router.get("/", getAllCategorias)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router