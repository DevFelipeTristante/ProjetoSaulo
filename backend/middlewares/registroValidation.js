const {body} = require("express-validator")

const insertRegistroValidation = () => {
  return [
    body("data_registro")
      .isDate()
      .withMessage("A data é obrigatória."),
    body("venda")
      .isInt()
      .withMessage("O ID Venda é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Venda precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Venda precisa ser maior ou igual a 1."),    
  ]
}

module.exports = {
  insertRegistroValidation,
}