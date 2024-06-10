const { body } = require("express-validator");

const insertContaValidation = () => {
  return [
    body("data_conta")
      .isDate()
      .withMessage("A data é obrigatória e deve estar no formato correto."),
    body("id_cliente")
      .isInt({ min: 1 })
      .withMessage("Cliente no formato incorreto. Escolha um já cadastrado."),
    body("id_venda")
      .isInt({ min: 1 })
      .withMessage("Venda no formato incorreto. Escolha uma já cadastrada."),
    body("id_empresa")
      .isInt({ min: 1 })
      .withMessage("Empresa no formato incorreto. Escolha uma já cadastrada."),
    body("qtde_parcelas")
      .isInt({ min: 1 })
      .withMessage("A quantidade de parcelas é obrigatória e deve ser um inteiro maior ou igual a 1."),
    body("valor_parcela")
      .isFloat({ min: 0.01 })
      .withMessage("O valor da parcela é obrigatório e deve ser numérico maior que zero."),
    body("status")
      .isString()
      .withMessage("O status é obrigatório.")
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
      .withMessage("Cliente no formato incorreto. Escolha um já cadastrado."),
    body("id_venda")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Venda no formato incorreto. Escolha uma já cadastrada."),
    body("id_empresa")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Empresa no formato incorreto. Escolha uma já cadastrada."),
    body("qtde_parcelas")
      .optional()
      .isInt({ min: 1 })
      .withMessage("A quantidade de parcelas deve ser um inteiro maior ou igual a 1."),
    body("valor_parcela")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O valor da parcela deve ser numérico maior que zero."),
    body("status")
      .optional()
      .isString()
      .withMessage("O status deve ser uma string.")
  ];
};

module.exports = {
  insertContaValidation,
  updateContaValidation
};
