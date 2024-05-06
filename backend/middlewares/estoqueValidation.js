const {body} = require("express-validator")

const insertEstoqueValidation = () => {
  return [
    body("id_produto")
      .isNumeric()
      .withMessage("O ID Produto é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Produto precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Produto precisa ser maior ou igual a 1."),
    body("qtd_prod")
    .isNumeric()
    .withMessage("A quantidade do produto é obrigatória.")
    .isLength({min: 1})
    .withMessage("O estoque disponível para o produto precisa ter pelo menos 1 dígito.")
  ]
}

module.exports = {
  insertEstoqueValidation,
}
