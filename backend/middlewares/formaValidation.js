const { body } = require("express-validator");

const insertFormaValidation = () => {
  return [
    body("descricao")
      .isString()
      .withMessage("A descrição é obrigatória.")
      .isLength({ min: 2 })
      .withMessage("A descrição precisa ter no mínimo 2 caracteres."),
  ];
};

const updateFormaValidation = () => {
  return [
    body("descricao")
      .optional()
      .isString()
      .withMessage("A descrição deve ser uma string.")
      .isLength({ min: 2 })
      .withMessage("A descrição precisa ter no mínimo 2 caracteres."),
  ];
};

module.exports = {
  insertFormaValidation,
  updateFormaValidation,
};