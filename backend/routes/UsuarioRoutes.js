const express = require("express")
const router = express.Router()

// Controller
const { 
  register, 
  login, 
  getCurrentUsuario,
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
router.get("/profile/:id_usuario", getCurrentUsuario)
router.put("/:id_usuario", usuarioUpdateValidation(), validate, update)
router.delete("/:id_usuario", deleteUsuario)

module.exports = router