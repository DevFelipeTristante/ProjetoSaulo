const { body } = require("express-validator");

const insertComissaoValidation = () => {
  return [
    body("id_usuario")
      .isInt({ min: 1 })
      .withMessage("Usuário no formato incorreto. Escolha um já cadastrado."),
    body("valor_comissao")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O valor da comissão deve ser numérico e maior que zero."),
    body("valor_total")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O valor total deve ser numérico e maior que zero."),
    body("comissao_paga")
      .isIn(['N', 'S'])
      .withMessage("A comissão paga deve ser 'N' (Não) ou 'S' (Sim).")
  ];
};

const updateComissaoValidation = () => {
  return [
    body("id_usuario")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Usuário no formato incorreto. Escolha um já cadastrado."),
    body("valor_comissao")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O valor da comissão deve ser numérico e maior que zero."),
    body("valor_total")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("O valor total deve ser numérico e maior que zero."),
    body("comissao_paga")
      .optional()
      .isIn(['N', 'S'])
      .withMessage("A comissão paga deve ser 'N' (Não) ou 'S' (Sim).")
  ];
};

module.exports = {
  insertComissaoValidation,
  updateComissaoValidation,
};