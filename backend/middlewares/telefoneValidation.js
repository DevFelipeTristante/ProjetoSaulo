const { body } = require("express-validator");

const insertTelefoneValidation = () => {
  return [
    body("id_cliente")
      .isInt({ min: 1 })
      .withMessage("O ID Cliente é obrigatório e deve ser um número inteiro maior ou igual a 1."),
    body("numero")
      .isString()
      .withMessage("O número é obrigatório e deve ser uma string.")
  ];
};

const updateTelefoneValidation = () => {
  return [
    body("id_cliente")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Cliente deve ser um número inteiro maior ou igual a 1."),
    body("numero")
      .optional()
      .isString()
      .withMessage("O número deve ser uma string.")
  ];
};

module.exports = {
  insertTelefoneValidation,
  updateTelefoneValidation,
};
