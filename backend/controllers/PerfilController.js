const PerfilUsuario = require('../models/PerfilUsuario');

// Inserir um novo perfil
const insertPerfil = async (req, res) => {
  const { descricao } = req.body;

  try {
    const novoPerfil = await PerfilUsuario.create({ descricao });
    res.status(201).json(novoPerfil);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

// Listar todos os perfis
const getAllPerfis = async (req, res) => {
  try {
    const perfis = await PerfilUsuario.findAll({});
    res.status(200).json(perfis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todos os perfis.' });
  }
};

// Deletar um perfil pelo ID
const deletePerfil = async (req, res) => {
  const { id_perfil } = req.body;

  try {
    const perfil = await PerfilUsuario.findByPk(id_perfil);

    if (!perfil) {
      res.status(404).json({ errors: ["Perfil não encontrado!"] });
      return;
    }

    await PerfilUsuario.destroy({ where: { id_perfil: id_perfil } });

    res.status(200).json({ id_perfil: id_perfil, message: "Perfil excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Perfil não encontrado!"] });
  }
};

// Obter um perfil pelo ID
const getPerfilById = async (req, res) => {
  const { id_perfil } = req.body;

  try {
    const perfil = await PerfilUsuario.findByPk(id_perfil);

    if (!perfil) {
      res.status(404).json({ errors: ["Perfil não encontrado."] });
      return;
    }

    res.status(200).json(perfil);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar o perfil.' });
  }
};

// Atualizar um perfil pelo ID
const updatePerfil = async (req, res) => {
  const { id_perfil, descricao } = req.body;

  try {
    const perfilExistente = await PerfilUsuario.findByPk(id_perfil);

    if (!perfilExistente) {
      res.status(404).json({ errors: ["Perfil não encontrado."] });
      return;
    }

    if (descricao) perfilExistente.descricao = descricao;

    await perfilExistente.save();

    res.status(200).json({ perfil: perfilExistente, message: "Perfil atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertPerfil,
  getAllPerfis,
  deletePerfil,
  getPerfilById,
  updatePerfil
};
