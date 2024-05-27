const {body} = require("express-validator")

const insertTabelaValidation = () => {
  return [
    body("preco")
      .isFloat({ min: 1 })
      .withMessage("O valor da parcela é obrigatório e deve ser numérico.")
  
  ]
}

module.exports = {
  insertTabelaValidation,
}