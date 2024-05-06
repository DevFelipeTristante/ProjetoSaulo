const {body} = require("express-validator")

const insertProdutoValidation = () => {
  return [
    body("descricao_produto")
      .isString()
      .withMessage("A descrição do produto é obrigatória.")
      .isLength({min: 2})
      .withMessage("A descrição do produto precisa ter no mínimo 2 caracteres."),
    body("id_tabela")
      .isInt()
      .withMessage("O ID Tabela é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Tabela precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Tabela precisa ser igual ou maior que 1."),    
    body("id_categoria")
      .isInt()
      .withMessage("O ID Categoria é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Categoria precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Categoria precisa ser igual ou maior que 1."),
  ]
}

module.exports = {
  insertProdutoValidation,
}