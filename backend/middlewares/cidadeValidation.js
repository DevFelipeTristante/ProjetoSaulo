const { body } = require("express-validator");

const insertCidadeValidation = () => {
  return [
    body("nome_cidade")
      .isString()
      .withMessage("O nome da cidade é obrigatório.")
      .isLength({ min: 2 })
      .withMessage("O nome da cidade precisa ter no mínimo 2 caracteres."),
    body("estado_cidade")
      .isString()
      .withMessage("O estado da cidade é obrigatório.")
      .isLength({ min: 2 })
      .withMessage("O estado da cidade precisa ter no mínimo 2 caracteres."),
  ];
};

const updateCidadeValidation = () => {
  return [
    body("nome_cidade")
      .optional()
      .isString()
      .withMessage("O nome da cidade deve ser uma string.")
      .isLength({ min: 2 })
      .withMessage("O nome da cidade precisa ter no mínimo 2 caracteres."),
    body("estado_cidade")
      .optional()
      .isString()
      .withMessage("O estado da cidade deve ser uma string.")
      .isLength({ min: 2 })
      .withMessage("O estado da cidade precisa ter no mínimo 2 caracteres."),
  ];
};

module.exports = {
  insertCidadeValidation,
  updateCidadeValidation,
};
