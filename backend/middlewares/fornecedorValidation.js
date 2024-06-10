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
      .withMessage("Cidade no formato incorreto. Escolha uma já cadastrada.")
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
      .withMessage("Cidade no formato incorreto. Escolha uma já cadastrada.")
  ];
};

module.exports = {
  insertFornecedorValidation,
  updateFornecedorValidation,
};
