const {body} = require("express-validator")

const insertCidadeValidation = () => {
  return [
    body("nome_cidade")
      .isString()
      .withMessage("O nome da cidade é obrigatório.")
      .isLength({min: 2})
      .withMessage("O nome da cidade precisa ter no mínimo 2 caracteres."),
    body("estado_cidade")
      .isString()
      .withMessage("O nome do estado é obrigatório.")
      .isLength({min: 2})
      .withMessage("O nome do estado precisa ter no mínimo 2 caracteres."),
  ]
}

module.exports = {
  insertCidadeValidation,
}