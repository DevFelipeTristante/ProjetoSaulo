const {body} = require("express-validator")

const insertFormaValidation = () => {
  return [
    body("descricao")
      .isString()
      .withMessage("A descrição é obrigatória.")
      .isLength({min: 2})
      .withMessage("A descrição precisa ter no mínimo 2 caracteres."),
  ]
}

module.exports = {
  insertFormaValidation,
}