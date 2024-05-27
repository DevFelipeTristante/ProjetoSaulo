const {body} = require("express-validator")

const insertTipoValidation = () => {
  return [
    body("tipo_cliente")
      .isString()
      .withMessage("O tipo do cliente é obrigatório.")
      .isLength({min: 2})
      .withMessage("O tipo do cliente precisa ter no mínimo 2 caracteres."),
  ]
}

module.exports = {
  insertTipoValidation,
}