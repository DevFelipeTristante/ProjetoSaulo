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
    body("confirmSenha")
      .isInt()
      .withMessage("A confirmação de senha é obrigatória.")
      .custom((value, { req }) => {
        if (value !== req.body.senha) {
          throw new Error("As senhas não são iguais.");
        }
        return true;
      }),
    body("id_perfil")
      .isInt({ min: 1 })
      .withMessage("O ID Perfil é obrigatório e deve ser um número inteiro maior ou igual a 1."),
    body("id_empresa")
      .isInt({ min: 1 })
      .withMessage("O ID Empresa é obrigatório e deve ser um número inteiro maior ou igual a 1."),
    body("comissao")
      .isFloat({ min: 0.01 })
      .withMessage("A comissão é obrigatória e deve ser um número maior que zero.")
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
    body("confirmSenha")
      .optional()
      .isInt()
      .withMessage("A confirmação de senha deve ser um número inteiro.")
      .custom((value, { req }) => {
        if (value !== req.body.senha) {
          throw new Error("As senhas não são iguais.");
        }
        return true;
      }),
    body("id_perfil")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Perfil deve ser um número inteiro maior ou igual a 1."),
    body("id_empresa")
      .optional()
      .isInt({ min: 1 })
      .withMessage("O ID Empresa deve ser um número inteiro maior ou igual a 1."),
    body("comissao")
      .optional()
      .isFloat({ min: 0.01 })
      .withMessage("A comissão deve ser um número maior que zero.")
  ];
};

module.exports = {
  usuarioCreateValidation,
  loginValidation,
  usuarioUpdateValidation,
};
