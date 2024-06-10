const { body } = require("express-validator");

const insertCompraValidation = () => {
  return [
    body("numeroNF")
      .isInt({ min: 1 })
      .withMessage("O Número da Nota Fiscal é obrigatório e deve ser um inteiro maior ou igual a 1."),
    body("valor")
      .isFloat({ min: 0.01 })
      .withMessage("O valor da nota é obrigatório e deve ser numérico e maior que zero."),
    body("quantidade")
      .isInt({ min: 1 })
      .withMessage("A quantidade de parcelas é obrigatória e deve ser um inteiro maior ou igual a 1."),
    body("data_nf")
      .isDate()
      .withMessage("A data é obrigatória e deve estar no formato correto."),
    body("id_produto")
      .isInt({ min: 1 })
      .withMessage("Produto no formato incorreto. Escolha um já cadastrado.")
  ];
};

const updateCompraValidation = () => {
  return [
    body("numeroNF")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O Número da Nota Fiscal deve ser um inteiro maior ou igual a 1."),
    body("valor")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O valor da nota deve ser numérico e maior que zero."),
    body("quantidade")
      .optional()
      .isInt({ min: 1 })
      .withMessage("A quantidade de parcelas deve ser um inteiro maior ou igual a 1."),
    body("data_nf")
      .optional()
      .isDate()
      .withMessage("A data deve estar no formato correto."),
    body("id_produto")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Produto no formato incorreto. Escolha um já cadastrado.")
  ];
};

module.exports = {
  insertCompraValidation,
  updateCompraValidation,
};
