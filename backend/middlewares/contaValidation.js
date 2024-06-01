const { body } = require("express-validator");

const insertContaValidation = () => {
  return [
    body("data_conta")
      .isDate()
      .withMessage("A data é obrigatória e deve estar no formato correto."),
    body("id_cliente")
      .isInt({ min: 1 })
      .withMessage("O ID Cliente é obrigatório e deve ser um inteiro maior ou igual a 1."),
    body("id_venda")
      .isInt({ min: 1 })
      .withMessage("O ID Venda é obrigatório e deve ser um inteiro maior ou igual a 1."),
    body("id_empresa")
      .isInt({ min: 1 })
      .withMessage("O ID Empresa é obrigatório e deve ser um inteiro maior ou igual a 1."),
    body("qtde_parcelas")
      .isInt({ min: 1 })
      .withMessage("A quantidade de parcelas é obrigatória e deve ser um inteiro maior ou igual a 1."),
    body("valor_parcela")
      .isFloat({ min: 0.01 })
      .withMessage("O valor da parcela é obrigatório e deve ser numérico maior que zero.")
  ];
};

const updateContaValidation = () => {
  return [
    body("data_conta")
      .optional()
      .isDate()
      .withMessage("A data deve estar no formato correto."),
    body("id_cliente")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Cliente deve ser um inteiro maior ou igual a 1."),
    body("id_venda")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Venda deve ser um inteiro maior ou igual a 1."),
    body("id_empresa")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Empresa deve ser um inteiro maior ou igual a 1."),
    body("qtde_parcelas")
      .optional()
      .isInt({ min: 1 })
      .withMessage("A quantidade de parcelas deve ser um inteiro maior ou igual a 1."),
    body("valor_parcela")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O valor da parcela deve ser numérico maior que zero.")
  ];
};

module.exports = {
  insertContaValidation,
  updateContaValidation
};
