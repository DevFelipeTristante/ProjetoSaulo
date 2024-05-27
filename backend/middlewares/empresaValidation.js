const {body} = require("express-validator")

const insertEmpresaValidation = () => {
  return [
    body("cnpj")
      .isNumeric()
      .withMessage("O CNPJ é obrigatório.")
      .isLength({min: 2})
      .withMessage("O CNPJ precisa ter no mínimo 2 caracteres."),
    body("nome")
      .isString()
      .withMessage("O nome da empresa é obrigatório.")
      .isLength({min: 2})
      .withMessage("O nome da empresa precisa ter no mínimo 2 caracteres."),
    body("id_cidade")
      .isInt()
      .withMessage("O ID Cidade é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Cidade precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Cidade precisa ser maior que 1."),
  ]
}

module.exports = {
  insertEmpresaValidation,
}
