const { body } = require("express-validator");

const insertNFClienteValidation = () => {
  return [
    body("valor")
      .isFloat({ min: 0.01 })
      .withMessage("O valor é obrigatório e deve ser numérico e maior que zero."),
    body("quantidade")
      .isInt({ min: 1 })
      .withMessage("A quantidade é obrigatória e deve ser um número inteiro maior que zero."),
    body("id_produto")
      .isInt({ min: 1 })
      .withMessage("O ID Produto é obrigatório e deve ser um inteiro maior ou igual a 1."),
    body("data_nf")
      .isDate()
      .withMessage("A data da nota fiscal é obrigatória e deve estar no formato correto."),
    body("id_cliente")
      .isInt({ min: 1 })
      .withMessage("O ID Cliente é obrigatório e deve ser um inteiro maior ou igual a 1."),
    body("id_venda")
      .isInt({ min: 1 })
      .withMessage("O ID Venda é obrigatório e deve ser um inteiro maior ou igual a 1.")
  ];
};

const updateNFClienteValidation = () => {
  return [
    body("valor")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O valor deve ser numérico e maior que zero."),
    body("quantidade")
      .optional()
      .isInt({ min: 1 })
      .withMessage("A quantidade deve ser um número inteiro maior que zero."),
    body("id_produto")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Produto deve ser um inteiro maior ou igual a 1."),
    body("data_nf")
      .optional()
      .isDate()
      .withMessage("A data da nota fiscal deve estar no formato correto."),
    body("id_cliente")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Cliente deve ser um inteiro maior ou igual a 1."),
    body("id_venda")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Venda deve ser um inteiro maior ou igual a 1.")
  ];
};

module.exports = {
  insertNFClienteValidation,
  updateNFClienteValidation,
};
