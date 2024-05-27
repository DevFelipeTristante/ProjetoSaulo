const {body} = require("express-validator")

const insertContaValidation = () => {
  return [
    body("data_conta")
      .isDate()
      .withMessage("A data é obrigatória."),
    body("id_cliente")
      .isInt()
      .withMessage("O ID Cliente é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Cliente precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Cliente precisa ser maior ou igual a 1."),
    body("id_venda")
      .isInt()
      .withMessage("O ID Venda é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Venda precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Venda precisa ser maior ou igual a 1."),    
    body("id_estoque")
      .isInt()
      .withMessage("O ID Estoque é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Estoque precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Estoque precisa ser maior ou igual a 1."),
    body("id_empresa")
      .isInt()
      .withMessage("O ID Empresa é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Empresa precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Empresa precisa ser maior ou igual a 1."),
    body("qtde_parcelas")
      .isInt()
      .withMessage("A quantidade de parcelas é obrigatória.")
      .isLength({min: 1})
      .withMessage("A quantidade de parcelas precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("A quantidade de parcelas precisa ser maior ou igual a 1."),
    body("valor_parcela")
      .isFloat({ min: 1 })
      .withMessage("O valor da parcela é obrigatório e deve ser numérico.")
  
  ]
}

module.exports = {
  insertContaValidation,
}