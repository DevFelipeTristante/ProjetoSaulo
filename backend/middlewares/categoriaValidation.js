const {body} = require("express-validator")

const insertCategoriaValidation = () => {
  return [
    body("categoria")
      .isString()
      .withMessage("A categoria é obrigatória.")
      .isLength({min: 2})
      .withMessage("A categoria precisa ter no mínimo 2 caracteres."),
  ]
}

module.exports = {
  insertCategoriaValidation,
}