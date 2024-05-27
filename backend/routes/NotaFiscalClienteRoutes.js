const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertNFCliente, 
} = require("../controllers/NFClienteController")

// Middlewares
const { insertNFClienteValidation } = require("../middlewares/nfclienteValidation")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertNFClienteValidation(), validate, insertNFCliente)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router