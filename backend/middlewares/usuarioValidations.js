const { body } = require("express-validator");

const usuarioCreateValidation = () => {
  return [
    body("nome_usuario")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres"),
    body("senha")
      .isInt()
      .withMessage("A senha é obrigatória e deve ser numérica."),
    // body("confirmSenha")
    //   .isInt()
    //   .withMessage("A confirmação de senha é obrigatória.")
    //   .custom((value, { req }) => {
    //     if (value !== req.body.senha) {
    //       throw new Error("As senhas não são iguais.");
    //     }
    //     return true;
    //   }),
    body("id_perfil")
      .isInt({ min: 1 })
      .withMessage("Perfil usuário no formato incorreto. Escolha um já cadastrado."),
    body("id_empresa")
      .isInt({ min: 1 })
      .withMessage("Empresa no formato incorreto. Escolha uma já cadastrada."),
    body("comissao")
      .isFloat({ min: 0.00 })
      .withMessage("A comissão deve ser numérica.")
  ];
};

const loginValidation = () => {
  return [
    body("nome_usuario")
      .isString()
      .withMessage("O nome do usuário é obrigatório."),
    body("senha")
      .isInt()
      .withMessage("A senha é obrigatória.")
  ];
};

const usuarioUpdateValidation = () => {
  return [
    body("nome_usuario")
      .optional()
      .isString()
      .withMessage("O nome deve ser uma string.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("senha")
      .optional()
      .isInt()
      .withMessage("A senha deve ser um número inteiro."),
    // body("confirmSenha")
    //   .optional()
    //   .isInt()
    //   .withMessage("A confirmação de senha deve ser um número inteiro.")
    //   .custom((value, { req }) => {
    //     if (value !== req.body.senha) {
    //       throw new Error("As senhas não são iguais.");
    //     }
    //     return true;
    //   }),
    body("id_perfil")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Perfil usuário no formato incorreto. Escolha um já cadastrado."),
    body("id_empresa")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Empresa no formato incorreto. Escolha uma já cadastrada."),
    body("comissao")
      .optional()
      .isFloat({ min: 0.00 })
      .withMessage("A comissão deve ser numérica.")
  ];
};

module.exports = {
  usuarioCreateValidation,
  loginValidation,
  usuarioUpdateValidation,
};
