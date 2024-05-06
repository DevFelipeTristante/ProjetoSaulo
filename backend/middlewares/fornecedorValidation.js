const {body} = require("express-validator")

const insertFornecedorValidation = () => {
  return [
    body("nome_fornecedor")
      .isString()
      .withMessage("O nome do fornecedor é obrigatório.")
      .isLength({min: 2})
      .withMessage("O nome do fornecedor precisa ter no mínimo 2 caracteres."),
    body("cidade")
      .isNumeric()
      .withMessage("O ID Cidade é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Cidade precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Cidade precisa ser maior ou igual a 1."),
    body("cliente")
      .isNumeric()
      .withMessage("O ID Cliente é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Cliente precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Cliente precisa ser maior ou igual a 1."),
  ]
}

module.exports = {
  insertFornecedorValidation,
}
