const {body} = require("express-validator")

const insertTelefoneValidation = () => {
  return [
    body("numero")
      .isString()
      .withMessage("O número é obrigatório.")
  ]
}

module.exports = {
  insertTelefoneValidation,
}