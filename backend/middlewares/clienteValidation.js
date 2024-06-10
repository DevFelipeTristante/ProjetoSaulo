const { body } = require("express-validator");

const insertClienteValidation = () => {
  return [
    body("nome_cliente")
      .isString()
      .withMessage("O nome do cliente é obrigatório e deve ser uma string.")
      .isLength({ min: 2 })
      .withMessage("O nome do cliente precisa ter no mínimo 2 caracteres."),
    body("endereco")
      .isString()
      .withMessage("O endereço é obrigatório e deve ser uma string.")
      .isLength({ min: 2 })
      .withMessage("O endereço precisa ter no mínimo 2 caracteres."),
    body("id_tipo")
      .isInt({ min: 1 })
      .withMessage("Tipo no formato incorreto. Escolha um já cadastrado."),
    body("id_cidade")
      .isInt({ min: 1 })
      .withMessage("Cidade no formato incorreto. Escolha uma já cadastrada.")
  ];
};

const updateClienteValidation = () => {
  return [
    body("nome_cliente")
      .optional()
      .isString()
      .withMessage("O nome do cliente deve ser uma string.")
      .isLength({ min: 2 })
      .withMessage("O nome do cliente precisa ter no mínimo 2 caracteres."),
    body("endereco")
      .optional()
      .isString()
      .withMessage("O endereço deve ser uma string.")
      .isLength({ min: 2 })
      .withMessage("O endereço precisa ter no mínimo 2 caracteres."),
    body("id_tipo")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Tipo no formato incorreto. Escolha um já cadastrado."),
    body("id_cidade")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Cidade no formato incorreto. Escolha uma já cadastrada.")
  ];
};

module.exports = {
  insertClienteValidation,
  updateClienteValidation,
};
