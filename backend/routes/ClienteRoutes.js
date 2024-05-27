const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertCliente, 
} = require("../controllers/ClienteController")

// Middlewares
const { insertClienteValidation } = require("../middlewares/clienteValidation")
const validate = require ("../middlewares/handleValidation")


// Routes 
router.post("/insert", insertClienteValidation(), validate, insertCliente)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router