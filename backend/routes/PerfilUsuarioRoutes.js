const express = require ("express")
const router = express.Router()

// Controller
const { 
  insertPerfil, 
} = require("../controllers/PerfilController")

// Middlewares
const { insertPerfilValidation } = require("../middlewares/perfilValidation")
const validate = require ("../middlewares/handleValidation")

// Routes 
router.post("/insert", insertPerfilValidation(), validate, insertPerfil)
// router.delete("/:id", authGuard, deleteCar)
// router.get("/", authGuard, getAllCars)
// router.get("/user/:id", getUserCars)
// router.get("/:id", authGuard, getCarById)
// router.put("/:id", authGuard, carUpdateValidation(), validate, updateCar)

module.exports = router