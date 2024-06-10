const Usuario = require('../models/Usuario'); // Atualize o caminho conforme necessário

// Registrar usuário
const insertUsuario = async (req, res) => {
  const { nome_usuario, id_perfil, senha, comissao, id_empresa } = req.body;

  // Verificar se o usuário existe
  const usuario = await Usuario.findOne({ where: { nome_usuario } });

  if (usuario) {
    res.status(422).json({ errors: ['Por favor, utilize outro nome de usuário'] });
    return;
  }

  // Criar usuário
  const novoUsuario = await Usuario.create({
    nome_usuario, id_perfil, senha, comissao, id_empresa
  });

  if (!novoUsuario) {
    res.status(422).json({ errors: ['Houve um erro, por favor tente novamente mais tarde.'] });
    return;
  }

  res.status(200).json(novoUsuario);
};

// Fazer login do usuário
const login = async (req, res) => {
  const { nome_usuario, senha } = req.body;

  // Verificar se o usuário existe
  const usuario = await Usuario.findOne({ where: { nome_usuario } });

  if (!usuario) {
    res.status(404).json({ errors: ['Usuário não encontrado.'] });
    return;
  }

  // Verificar se a senha corresponde
  if (senha != usuario.senha) {
    res.status(422).json({ errors: ['Senha inválida'] });
    return;
  }

  // Retornar usuário
  res.status(201).json(usuario);
};

// Update an usuario
const updateUsuario = async (req, res) => {
  const { id_usuario, nome_usuario, id_perfil, comissao, senha, id_empresa } = req.body;

  try {
    const usuarioExistente = await Usuario.findByPk(id_usuario);

    if (!usuarioExistente) {
      res.status(404).json({ errors: ["Usuario não encontrado."] });
      return;
    }

    if (nome_usuario) usuarioExistente.nome_usuario = nome_usuario;
    if (id_perfil) usuarioExistente.id_perfil = id_perfil;
    if (comissao) usuarioExistente.comissao = comissao;
    if (senha) usuarioExistente.senha = senha;
    if (id_empresa) usuarioExistente.id_empresa = id_empresa;

    await usuarioExistente.save();

    res.status(200).json({ usuario: usuarioExistente, message: "Fornecedor atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

// Listar todos os usuários
const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({});
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todos os usuários.' });
  }
};

// Deletar um usuário pelo ID
const deleteUsuario = async (req, res) => {
  const { id_usuario } = req.params;

  try {
    const usuario = await Usuario.findByPk(id_usuario);

    if (!usuario) {
      res.status(404).json({ errors: ["Usuário não encontrado!"] });
      return;
    }

    await Usuario.destroy({ where: { id_usuario: id_usuario } });

    res.status(200).json({ id_usuario: id_usuario, message: "Usuário excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Usuário não encontrado!"] });
  }
};

// Obter um usuário pelo ID
const getUsuarioById = async (req, res) => {
  const { id_usuario } = req.params;

  try {
    const usuario = await Usuario.findByPk(id_usuario);

    if (!usuario) {
      res.status(404).json({ errors: ["Usuário não encontrado."] });
      return;
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar o usuário.' });
  }
};

module.exports = {
  insertUsuario,
  login,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario
}