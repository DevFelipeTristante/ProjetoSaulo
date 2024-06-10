const { body } = require("express-validator");

const insertProdutoValidation = () => {
  return [
    body("descricao_produto")
      .isString()
      .withMessage("A descrição do produto é obrigatória.")
      .isLength({ min: 2 })
      .withMessage("A descrição do produto precisa ter no mínimo 2 caracteres."),
    body("qtd_estoque")
      .isInt({ min: 1 })
      .withMessage("A quantidade em estoque é obrigatória e deve ser um número inteiro maior ou igual a 1."),
    body("id_categoria")
      .isInt({ min: 1 })
      .withMessage("Categoria no formato incorreto. Escolha uma já cadastrada."),
    body("id_tabela")
      .isInt({ min: 1 })
      .withMessage("Tabela de preço no formato incorreto. Escolha uma já cadastrada."),
    
  ];
};

const updateProdutoValidation = () => {
  return [
    body("descricao_produto")
      .optional()
      .isString()
      .withMessage("A descrição do produto deve ser uma string.")
      .isLength({ min: 2 })
      .withMessage("A descrição do produto precisa ter no mínimo 2 caracteres."),
    body("id_categoria")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Categoria no formato incorreto. Escolha uma já cadastrada."),
    body("id_tabela")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Tabela de preço no formato incorreto. Escolha uma já cadastrada."),
    body("qtd_estoque")
      .optional()
      .isInt({ min: 1 })
      .withMessage("A quantidade em estoque deve ser um número inteiro maior ou igual a 1.")
  ];
};

module.exports = {
  insertProdutoValidation,
  updateProdutoValidation,
};
