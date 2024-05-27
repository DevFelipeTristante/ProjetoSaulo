const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertEmpresa, 
} = require("../controllers/EmpresaController")

// Middlewares
const { insertEmpresaValidation } = require("../middlewares/empresaValidation")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertEmpresaValidation(), validate, insertEmpresa)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router