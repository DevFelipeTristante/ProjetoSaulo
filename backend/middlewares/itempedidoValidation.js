const { body } = require("express-validator");

const insertItemPedidoValidation = () => {
  return [
    body("id_venda")
      .isInt({ min: 1 })
      .withMessage("O ID Venda é obrigatório e deve ser um inteiro maior ou igual a 1."),
    body("id_produto")
      .isInt({ min: 1 })
      .withMessage("Produto no formato incorreto. Escolha um já cadastrado."),
    body("id_tabela")
      .isInt({ min: 1 })
      .withMessage("Tabela de preço no formato incorreto. Escolha uma já cadastrada."),
    body("preco_total")
      .isFloat({ min: 0.01 })
      .withMessage("O preço total é obrigatório e deve ser numérico maior que zero."),
    body("quantidade")
      .isInt({ min: 1 })
      .withMessage("A quantidade é obrigatória e deve ser um número inteiro maior que zero.")
  ];
};

const updateItemPedidoValidation = () => {
  return [
    body("id_venda")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Venda deve ser um inteiro maior ou igual a 1."),
    body("id_produto")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Produto no formato incorreto. Escolha um já cadastrado."),
    body("id_tabela")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Tabela de preço no formato incorreto. Escolha uma já cadastrada."),
    body("preco_total")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O preço total deve ser numérico maior que zero."),
    body("quantidade")
      .optional()
      .isInt({ min: 1 })
      .withMessage("A quantidade deve ser um número inteiro maior que zero.")
  ];
};

module.exports = {
  insertItemPedidoValidation,
  updateItemPedidoValidation,
};
