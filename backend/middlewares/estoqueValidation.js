const {body} = require("express-validator")

const insertEstoqueValidation = () => {
  return [
    body("id_produto")
      .isInt()
      .withMessage("O ID Produto é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Produto precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Produto precisa ser maior ou igual a 1."),
    body("qtd_prod")
      .isInt()
      .withMessage("A quantidade de produtos é obrigatória.")
      .isLength({min: 1})
      .withMessage("A quantidade de produtos precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("A quantidade de produtos precisa ser maior ou igual a 1."),
    body("numero_nf")
      .isInt()
      .withMessage("O número da NF é obrigatório.")
      .isLength({min: 1})
      .withMessage("O número da NF precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O número da NF precisa ser maior ou igual a 1."),
  ]
}

module.exports = {
  insertEstoqueValidation,
}
