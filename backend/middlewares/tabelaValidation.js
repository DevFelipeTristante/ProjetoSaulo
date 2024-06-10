const { body } = require("express-validator");

const insertTabelaValidation = () => {
  return [
    body("preco")
      .isFloat({ min: 0.01 })
      .withMessage("O preço é obrigatório, deve ser numérico e maior que zero.")
  ];
};

const updateTabelaValidation = () => {
  return [
    body("preco")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O preço é obrigatório, deve ser numérico e maior que zero.")
  ];
};

module.exports = {
  insertTabelaValidation,
  updateTabelaValidation,
};
