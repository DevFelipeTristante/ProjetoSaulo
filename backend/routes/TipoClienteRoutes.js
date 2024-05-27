const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertTipoCliente, 
} = require("../controllers/TipoClienteController")

// Middlewares
const { insertTipoValidation } = require("../middlewares/tipoValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertTipoValidation(), validate, insertTipoCliente)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router