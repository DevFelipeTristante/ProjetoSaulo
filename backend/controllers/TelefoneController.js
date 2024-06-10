const Telefone = require('../models/Telefone'); // Atualize o caminho conforme necessário

// Inserir um novo telefone
const insertTelefone = async (req, res) => {
  const { id_cliente, numero } = req.body;

  try {
    const novoTelefone = await Telefone.create({ id_cliente, numero });
    res.status(201).json(novoTelefone);
  } catch (error) {
    console.error(error);
    res.status(422).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

// Listar todos os telefones
const getAllTelefones = async (req, res) => {
  try {
    const telefones = await Telefone.findAll({});
    res.status(200).json(telefones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todos os telefones.' });
  }
};

// Deletar um telefone pelo ID
const deleteTelefone = async (req, res) => {
  const { id_telefone } = req.params;

  try {
    const telefone = await Telefone.findByPk(id_telefone);

    if (!telefone) {
      res.status(404).json({ errors: ["Telefone não encontrado!"] });
      return;
    }

    await Telefone.destroy({ where: { id_telefone: id_telefone } });

    res.status(200).json({ id_telefone, message: "Telefone excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Telefone não encontrado!"] });
  }
};

// Obter um telefone pelo ID
const getTelefoneById = async (req, res) => {
  const { id_telefone } = req.body;

  try {
    const telefone = await Telefone.findByPk(id_telefone);

    if (!telefone) {
      res.status(404).json({ errors: ["Telefone não encontrado."] });
      return;
    }

    res.status(200).json(telefone);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar o telefone.' });
  }
};

// Atualizar um telefone pelo ID
const updateTelefone = async (req, res) => {
  const { id_telefone, id_cliente, numero } = req.body;

  try {
    const telefoneExistente = await Telefone.findByPk(id_telefone);

    if (!telefoneExistente) {
      res.status(404).json({ errors: ["Telefone não encontrado."] });
      return;
    }

    if (id_cliente) telefoneExistente.id_cliente = id_cliente;
    if (numero) telefoneExistente.numero = numero;

    await telefoneExistente.save();

    res.status(200).json({ telefone: telefoneExistente, message: "Telefone atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertTelefone,
  getAllTelefones,
  deleteTelefone,
  getTelefoneById,
  updateTelefone
};
