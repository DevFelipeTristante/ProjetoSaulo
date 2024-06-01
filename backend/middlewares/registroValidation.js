const { body } = require("express-validator");

const insertRegistroValidation = () => {
  return [
    body("data_registro")
      .isDate()
      .withMessage("A data é obrigatória e deve estar no formato correto."),
    body("id_venda")
      .isInt({ min: 1 })
      .withMessage("O ID Venda é obrigatório e deve ser um número inteiro maior ou igual a 1.")
  ];
};

const updateRegistroValidation = () => {
  return [
    body("data_registro")
      .optional()
      .isDate()
      .withMessage("A data deve estar no formato correto."),
    body("id_venda")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Venda deve ser um número inteiro maior ou igual a 1.")
  ];
};

module.exports = {
  insertRegistroValidation,
  updateRegistroValidation,
};
