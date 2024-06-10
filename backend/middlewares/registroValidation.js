const { body } = require("express-validator");

const insertRegistroValidation = () => {
  return [
    body("data_registro")
      .isDate()
      .withMessage("A data é obrigatória e deve estar no formato correto."),
    body("id_venda")
      .isInt({ min: 1 })
      .withMessage("Venda no formato incorreto. Escolha uma já cadastrada.")
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
      .withMessage("Venda no formato incorreto. Escolha uma já cadastrada.")
  ];
};

module.exports = {
  insertRegistroValidation,
  updateRegistroValidation,
};
