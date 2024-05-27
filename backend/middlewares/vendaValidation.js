const {body} = require("express-validator")

const insertContaValidation = () => {
  return [
    body("id_usuario")
      .isInt()
      .withMessage("O ID Usuário é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Usuário precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Usuário precisa ser maior ou igual a 1."),
    body("id_produto")
      .isInt()
      .withMessage("O ID Produto é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Produto precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Produto precisa ser maior ou igual a 1."),    
    body("id_cliente")
      .isInt()
      .withMessage("O ID Cliente é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Cliente precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Cliente precisa ser maior ou igual a 1."),
    body("valor_venda")
      .isFloat({ min: 1 })
      .withMessage("O valor da venda é obrigatório e deve ser numérico."),
    body("quantidade_prod")
      .isInt()
      .withMessage("A quantidade de produtos é obrigatória.")
      .isLength({min: 1})
      .withMessage("A quantidade de produtos precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("A quantidade de produtos precisa ser maior ou igual a 1."),
    body("id_forma")
      .isInt()
      .withMessage("O ID Forma de Pagamento é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Forma de Pagamento precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Forma de Pagamento precisa ser maior ou igual a 1."),
    body("qtde_parcelas")
      .isInt()
      .withMessage("A quantidade de parcelas é obrigatória.")
      .isLength({min: 1})
      .withMessage("A quantidade de parcelas precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("A quantidade de parcelas precisa ser maior ou igual a 1."), 
  ]
}

module.exports = {
  insertContaValidation,
}