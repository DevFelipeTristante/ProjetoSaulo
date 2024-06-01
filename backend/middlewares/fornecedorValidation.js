const { body } = require("express-validator");

const insertFornecedorValidation = () => {
  return [
    body("nome_fornecedor")
      .isLength({ min: 2 })
      .withMessage("O nome do fornecedor é obrigatório e deve ter no mínimo 2 caracteres.")
      .isString()
      .withMessage("O nome do fornecedor deve ser uma string."),
    body("id_cidade")
      .isInt({ min: 1 })
      .withMessage("O ID Cidade é obrigatório e deve ser um inteiro maior ou igual a 1.")
  ];
};

const updateFornecedorValidation = () => {
  return [
    body("nome_fornecedor")
      .optional()
      .isLength({ min: 2 })
      .withMessage("O nome do fornecedor deve ter no mínimo 2 caracteres.")
      .isString()
      .withMessage("O nome do fornecedor deve ser uma string."),
    body("id_cidade")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Cidade deve ser um inteiro maior ou igual a 1.")
  ];
};

module.exports = {
  insertFornecedorValidation,
  updateFornecedorValidation,
};
