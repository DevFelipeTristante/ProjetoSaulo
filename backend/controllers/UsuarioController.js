const Usuario = require('../models/Usuario'); // Atualize o caminho conforme necessário

// Registrar usuário
const register = async (req, res) => {
  const { nome_usuario, senha, id_perfil, comissao } = req.body;

  // Verificar se o usuário existe
  const usuario = await Usuario.findOne({ where: { nome_usuario } });

  if (usuario) {
    res.status(422).json({ errors: ['Por favor, utilize outro nome de usuário'] });
    return;
  }

  // Criar usuário
  const novoUsuario = await Usuario.create({
    nome_usuario,
    senha,
    id_perfil,
    comissao
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
  if (senha !== usuario.senha) {
    res.status(422).json({ errors: ['Senha inválida'] });
    return;
  }

  // Retornar usuário
  res.status(201).json({ id_usuario: usuario.id_usuario });
};

const getCurrentUsuario = async (req, res) => {
  const { id_usuario } = req.params; // Obter o ID do usuário do parâmetro da rota

  // Encontrar o usuário
  const usuario = await Usuario.findByPk(id_usuario);

  if (!usuario) {
    res.status(404).json({ errors: ['Usuário não encontrado.'] });
    return;
  }

  // Retornar o usuário
  res.status(200).json(usuario);
};

// Update an usuario
const update = async (req, res) => {
  const { nome_usuario, senha } = req.body;
  const { id_usuario } = req.params; // Obter o ID do usuário do parâmetro da rota

  // Encontrar o usuário
  const usuario = await Usuario.findByPk(id_usuario);

  if (!usuario) {
    res.status(404).json({ errors: ['Usuário não encontrado.'] });
    return;
  }

  // Atualizar nome do usuário e senha
  if (nome_usuario) {
    usuario.nome_usuario = nome_usuario;
  }

  if (senha) {
    usuario.senha = senha;
  }

  // Salvar as alterações
  await usuario.save();

  res.status(200).json(usuario);
};

const deleteUsuario = async (req, res) => {
  const { id_usuario } = req.params; // Obter o ID do usuário do parâmetro da rota

  // Encontrar o usuário
  const usuario = await Usuario.findByPk(id_usuario);

  if (!usuario) {
    res.status(404).json({ errors: ['Usuário não encontrado.'] });
    return;
  }

  // Excluir o usuário
  await usuario.destroy();

  res.status(200).json({ id_usuario: id_usuario, message: 'Usuário excluído com sucesso.' });
};

module.exports = {
  register,
  login,
  getCurrentUsuario,
  update,
  deleteUsuario
}