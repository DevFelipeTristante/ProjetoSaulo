const { body } = require("express-validator");

const insertVendaValidation = () => {
  return [
    body("id_usuario")
      .isInt({ min: 1 })
      .withMessage("Usuário no formato incorreto. Escolha um já cadastrado."),
    body("id_cliente")
      .isInt({ min: 1 })
      .withMessage("Cliente no formato incorreto. Escolha um já cadastrado."),
    body("valor_venda")
      .isFloat({ min: 0.01 })
      .withMessage("O valor da venda é obrigatório e deve ser numérico, maior que 0."),
    body("id_forma")
      .isInt({ min: 1 })
      .withMessage("Forma de pagamento no formato incorreto. Escolha uma já cadastrada."),
    body("qtde_parcelas")
      .isInt({ min: 1 })
      .withMessage("A quantidade de parcelas é obrigatória e precisa ser um número inteiro maior ou igual a 1."),
    body("data")
      .isDate()
      .withMessage("A data é obrigatória e deve estar no formato correto."),
    body("id_empresa")
      .isInt({ min: 1 })
      .withMessage("Empresa no formato incorreto. Escolha uma já cadastrada.")
  ];
};

const updateVendaValidation = () => {
  return [
    body("id_usuario")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Usuário no formato incorreto. Escolha um já cadastrado."),
    body("id_cliente")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Cliente no formato incorreto. Escolha um já cadastrado."),
    body("valor_venda")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O valor da venda deve ser numérico, maior que 0."),
    body("id_forma")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Forma de pagamento no formato incorreto. Escolha uma já cadastrada."),
    body("qtde_parcelas")
      .optional()
      .isInt({ min: 1 })
      .withMessage("A quantidade de parcelas deve ser um número inteiro maior ou igual a 1."),
    body("data")
      .optional()
      .isDate()
      .withMessage("A data deve estar no formato correto."),
    body("id_empresa")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Empresa no formato incorreto. Escolha uma já cadastrada.")
  ];
};

module.exports = {
  insertVendaValidation,
  updateVendaValidation
};