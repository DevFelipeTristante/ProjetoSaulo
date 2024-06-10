const express = require("express")
const router = express.Router()

// Controller
const { 
  insertUsuario, 
  login, 
  getUsuarioById,
  getAllUsuarios,
  updateUsuario,
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
router.post("/insert", usuarioCreateValidation(), validate, insertUsuario)
router.post("/login", loginValidation(), validate, login)
router.get("/getall", getAllUsuarios);
router.get("/get/:id_usuario", getUsuarioById)
router.put("/update", usuarioUpdateValidation(), validate, updateUsuario)
router.delete("/delete/:id_usuario", deleteUsuario)

module.exports = router