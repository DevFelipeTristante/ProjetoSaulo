const {body} = require("express-validator")

const insertCidadesValidation = () => {
  return [
<<<<<<< HEAD
    body("nome_cidade")
      .isString()
      .withMessage("O nome da cidade é obrigatório.")
      .isLength({min: 2})
      .withMessage("O nome da cidade precisa ter no mínimo 2 caracteres."),
    body("estado_cidade")
      .isString()
      .withMessage("O nome do estado é obrigatório.")
      .isLength({min: 2})
      .withMessage("O nome do estado precisa ter no mínimo 2 caracteres."),
=======
    body("categoria")
      .isString()
      .withMessage("A categoria é obrigatória.")
      .isLength({min: 2})
      .withMessage("A categoria precisa ter no mínimo 2 caracteres."),
>>>>>>> a7a8ff1e26a1cf6b7cddc6c57954a568114e9c12
  ]
}

module.exports = {
  insertCidadesValidation,
}