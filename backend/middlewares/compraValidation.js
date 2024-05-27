const {body} = require("express-validator")

const insertCompraValidation = () => {
  return [
    body("valor")
      .isFloat({ min: 1 })
      .withMessage("O valor da parcela é obrigatório e deve ser numérico."),
    body("quantidade")
      .isInt()
      .withMessage("A quantidade de parcelas é obrigatória.")
      .isLength({min: 1})
      .withMessage("A quantidade de parcelas precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("A quantidade de parcelas precisa ser maior ou igual a 1."),
    body("data_nf")
      .isDate()
      .withMessage("A data é obrigatória."),
    body("id_produto")
      .isInt()
      .withMessage("O ID Produto é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Produto precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Produto precisa ser maior ou igual a 1.")
  ]
}

module.exports = {
  insertCompraValidation,
}