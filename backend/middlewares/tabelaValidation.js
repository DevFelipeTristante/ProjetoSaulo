const { body } = require("express-validator");

const insertTabelaValidation = () => {
  return [
    body("id_tabela")
      .isInt({ min: 1 })
      .withMessage("O ID Tabela é obrigatório e deve ser um número inteiro maior ou igual a 1."),
    body("id_produto")
      .isInt({ min: 1 })
      .withMessage("O ID Produto é obrigatório e deve ser um número inteiro maior ou igual a 1."),
    body("preco")
      .isFloat({ min: 0.01 })
      .withMessage("O preço é obrigatório, deve ser numérico e maior que zero.")
  ];
};

const updateTabelaValidation = () => {
  return [
    body("id_tabela")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Tabela deve ser um número inteiro maior ou igual a 1."),
    body("id_produto")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Produto deve ser um número inteiro maior ou igual a 1."),
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
