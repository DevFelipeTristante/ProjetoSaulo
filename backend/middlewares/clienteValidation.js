const {body} = require("express-validator")

const insertClienteValidation = () => {
  return [
    body("nome_cliente")
      .isString()
      .withMessage("O nome do cliente é obrigatório.")
      .isLength({min: 2})
      .withMessage("O nome do cliente precisa ter no mínimo 2 caracteres."),
    body("endereco")
      .isString()
      .withMessage("O endereço é obrigatório.")
      .isLength({min: 2})
      .withMessage("O endereço precisa ter no mínimo 2 caracteres."),
    body("id_telefone")
      .isNumeric()
      .withMessage("O ID Telefone é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Telefone precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Telefone precisa ser maior que 1."),    
    body("tipo_cliente")
      .isNumeric()
      .withMessage("O ID Tipo Cliente é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Tipo Cliente precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Tipo Cliente precisa ser maior que 1."),
    body("cidade")
      .isNumeric()
      .withMessage("O ID Cidade é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Cidade precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Cidade precisa ser maior que 1."),
  ]
}

module.exports = {
  insertClienteValidation,
}