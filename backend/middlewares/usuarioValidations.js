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
      .withMessage("A senha é obrigatória")
      .isLength({ min: 3 })
      .withMessage("A senha precisa ter no mínimo 3 caracteres"),
    body("confirmSenha")
      .isInt()
      .withMessage("A confirmação de senha é obrigatória.")
      .custom((value, {req}) => {
        if (value != req.body.senha) {
          throw new Error("As senhas não são iguais.")
        }
        return true
      }),
    body("id_perfil")
      .isInt()
      .withMessage("O ID Perfil é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Perfil precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Perfil precisa ser maior ou igual a 1."),   
    body("id_empresa")
      .isInt()
      .withMessage("O ID Empresa é obrigatório.")
      .isLength({min: 1})
      .withMessage("O ID Empresa precisa ter pelo menos 1 dígito.")
      .custom(value => value >= 1)
      .withMessage("O ID Empresa precisa ser maior ou igual a 1."),  
    body("comissao")
      .isDecimal({ decimal_digits: "1,2" }) // Permite até 10 dígitos inteiros e 2 dígitos decimais
      .withMessage("Insira a comissão no formato decimal")
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
  ]
}

const usuarioUpdateValidation = () => {
  return [
    body("nome_usuario")
      .optional()
      .isLength({ min:3 })
      .withMessage("O nome precisa de pelo menos 3 caracteres."),
    body("senha")
      .optional()
      .isLength({ min:3 })
      .withMessage("A senha precisa ter no mínimo 3 caracteres.")
  ]
}

module.exports = {
  usuarioCreateValidation,
  loginValidation,
  usuarioUpdateValidation,
}