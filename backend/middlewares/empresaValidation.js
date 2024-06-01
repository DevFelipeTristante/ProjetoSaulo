const { body } = require("express-validator");

const insertEmpresaValidation = () => {
  return [
    body("cnpj")
      .isLength({ min: 14 })
      .withMessage("O CNPJ é obrigatório e deve ter no mínimo 14 caracteres.")
      .isInt()
      .withMessage("O CNPJ deve ser numérico."),
    body("nome")
      .isLength({ min: 2 })
      .withMessage("O nome da empresa é obrigatório e deve ter no mínimo 2 caracteres.")
      .isString()
      .withMessage("O nome da empresa deve ser uma string."),
    body("id_cidade")
      .isInt({ min: 1 })
      .withMessage("O ID Cidade é obrigatório e deve ser um inteiro maior ou igual a 1.")
  ];
};

const updateEmpresaValidation = () => {
  return [
    body("cnpj")
      .optional()
      .isLength({ min: 14 })
      .withMessage("O CNPJ deve ter no mínimo 14 caracteres.")
      .isInt()
      .withMessage("O CNPJ deve ser numérico."),
    body("nome")
      .optional()
      .isLength({ min: 2 })
      .withMessage("O nome da empresa deve ter no mínimo 2 caracteres.")
      .isString()
      .withMessage("O nome da empresa deve ser uma string."),
    body("id_cidade")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Cidade deve ser um inteiro maior ou igual a 1.")
  ];
};

module.exports = {
  insertEmpresaValidation,
  updateEmpresaValidation,
};
