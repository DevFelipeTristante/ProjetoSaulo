const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertTabelaPreco, 
} = require("../controllers/TabelaPrecoController")

// Middlewares
const { insertTabelaValidation } = require("../middlewares/tabelaValidation")
const validate = require("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertTabelaValidation(), validate, insertTabelaPreco)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router