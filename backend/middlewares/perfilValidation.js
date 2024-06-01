const { body } = require("express-validator");

const insertPerfilValidation = () => {
  return [
    body("descricao")
      .isString()
      .withMessage("A descrição é obrigatória.")
      .isLength({ min: 2 })
      .withMessage("A descrição precisa ter no mínimo 2 caracteres."),
  ];
};

const updatePerfilValidation = () => {
  return [
    body("descricao")
      .optional()
      .isString()
      .withMessage("A descrição deve ser um texto.")
      .isLength({ min: 2 })
      .withMessage("A descrição precisa ter no mínimo 2 caracteres."),
  ];
};

module.exports = {
  insertPerfilValidation,
  updatePerfilValidation,
};
