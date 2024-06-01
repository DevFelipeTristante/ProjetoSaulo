const express = require("express")
const router = express.Router()

// Controller
const { 
  register, 
  login, 
  getUsuarioById,
  getAllUsuarios,
  update,
  deleteUsuario
} = require("../controllers/UsuarioController")

// Middlewares
const validate = require("../middlewares/handleValidation")
const {
  usuarioCreateValidation,
  loginValidation,
  usuarioUpdateValidation,
} = require("../middlewares/usuarioValidations")

// Routes
router.post("/register", usuarioCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)
router.get("/get", getAllUsuarios);
router.get("/get/:id_usuario", getUsuarioById)
router.put("/update/:id_usuario", usuarioUpdateValidation(), validate, update)
router.delete("/delete/:id_usuario", deleteUsuario)

module.exports = router