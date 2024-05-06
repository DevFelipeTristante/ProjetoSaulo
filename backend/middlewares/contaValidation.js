const {body} = require("express-validator")

const insertContaValidation = () => {
  return [
    body("data_conta")
      .isDate()
      .withMessage("A data é obrigatória."),
    body("cliente")
      .isNumeric()
      .withMessage("O ID Cliente é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Cliente precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Cliente precisa ser maior que 1."),
    body("id_venda")
      .isNumeric()
      .withMessage("O ID Venda é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Venda precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Venda precisa ser maior que 1."),    
    body("id_estoque")
      .isNumeric()
      .withMessage("O ID Estoque é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Estoque precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Estoque precisa ser maior que 1."),
    body("empresa")
      .isNumeric()
      .withMessage("O ID Empresa é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Empresa precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Empresa precisa ser maior que 1."),
  ]
}

module.exports = {
  insertContaValidation,
}