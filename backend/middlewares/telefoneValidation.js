const { body } = require("express-validator");

const insertTelefoneValidation = () => {
  return [
    body("id_cliente")
      .isInt({ min: 1 })
      .withMessage("Cliente no formato incorreto. Escolha um já cadastrado."),
    body("numero")
      .isString()
      .withMessage("O número é obrigatório e deve ser uma string.")
      .matches(/^\(\d{2}\)\d{4,5}-\d{4}$/)
      .withMessage("O número de telefone deve estar no formato (xx)xxxxx-xxxx ou (xx)xxxx-xxxx.")
  ];
};

const updateTelefoneValidation = () => {
  return [
    body("id_cliente")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Cliente no formato incorreto. Escolha um já cadastrado."),
    body("numero")
      .optional()
      .isString()
      .withMessage("O número é obrigatório e deve ser uma string.")
      .matches(/^\(\d{2}\)\d{4,5}-\d{4}$/)
      .withMessage("O número de telefone deve estar no formato (xx)xxxxx-xxxx ou (xx)xxxx-xxxx.")
  ];
};

module.exports = {
  insertTelefoneValidation,
  updateTelefoneValidation,
};