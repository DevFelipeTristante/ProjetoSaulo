const Fornecedor = require('../models/Fornecedor'); // Atualize o caminho conforme necessário

// Inserir um novo fornecedor
const insertFornecedor = async (req, res) => {
  const { nome_fornecedor, id_cidade } = req.body;

  // Verificar se o usuário existe
  const fornecedor = await Fornecedor.findOne({ where: { nome_fornecedor } });

  if (fornecedor) {
    res.status(422).json({ errors: ['Por favor, utilize outro nome de fornecedor'] });
    return;
  }

  try {
    const novoFornecedor = await Fornecedor.create({
      nome_fornecedor, id_cidade
    });
    res.status(201).json(novoFornecedor);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

// Listar todos os fornecedores
const getAllFornecedores = async (req, res) => {
  try {
    const fornecedores = await Fornecedor.findAll({});
    res.status(200).json(fornecedores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todos os fornecedores.' });
  }
};

// Deletar um fornecedor pelo ID
const deleteFornecedor = async (req, res) => {
  const { id_fornecedor } = req.params;

  try {
    const fornecedor = await Fornecedor.findByPk(id_fornecedor);

    if (!fornecedor) {
      res.status(404).json({ errors: ["Fornecedor não encontrado!"] });
      return;
    }

    await Fornecedor.destroy({
      where: { id_fornecedor: id_fornecedor }
    });

    res.status(200).json({ id_fornecedor: id_fornecedor, message: "Fornecedor excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Fornecedor não encontrado!"] });
  }
};

// Obter um fornecedor pelo ID
const getFornecedorById = async (req, res) => {
  const { id_fornecedor } = req.body;

  try {
    const fornecedor = await Fornecedor.findByPk(id_fornecedor);

    if (!fornecedor) {
      res.status(404).json({ errors: ["Fornecedor não encontrado."] });
      return;
    }

    res.status(200).json(fornecedor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar o fornecedor.' });
  }
};

// Atualizar um fornecedor pelo ID
const updateFornecedor = async (req, res) => {
  const { id_fornecedor, nome_fornecedor, id_cidade } = req.body;

  try {
    const fornecedorExistente = await Fornecedor.findByPk(id_fornecedor);

    if (!fornecedorExistente) {
      res.status(404).json({ errors: ["Fornecedor não encontrado."] });
      return;
    }

    if (nome_fornecedor) fornecedorExistente.nome_fornecedor = nome_fornecedor;
    if (id_cidade) fornecedorExistente.id_cidade = id_cidade;

    await fornecedorExistente.save();

    res.status(200).json({ fornecedor: fornecedorExistente, message: "Fornecedor atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertFornecedor,
  getAllFornecedores,
  deleteFornecedor,
  getFornecedorById,
  updateFornecedor
};
