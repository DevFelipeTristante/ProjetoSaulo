const TipoCliente = require('../models/TipoCliente'); // Atualize o caminho conforme necessário

// Inserir um novo tipo de cliente
const insertTipoCliente = async (req, res) => {
  const { tipo_cliente } = req.body;

  try {
    const novoTipo = await TipoCliente.create({ tipo_cliente });
    res.status(201).json(novoTipo);
  } catch (error) {
    console.error(error);
    res.status(422).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

// Listar todos os tipos de cliente
const getAllTiposCliente = async (req, res) => {
  try {
    const tipos = await TipoCliente.findAll({});
    res.status(200).json(tipos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todos os tipos de cliente.' });
  }
};

// Deletar um tipo de cliente pelo ID
const deleteTipoCliente = async (req, res) => {
  const { id_tipo } = req.params;

  try {
    const tipo = await TipoCliente.findByPk(id_tipo);

    if (!tipo) {
      res.status(404).json({ errors: ["Tipo de cliente não encontrado!"] });
      return;
    }

    await TipoCliente.destroy({ where: { id_tipo: id_tipo } });

    res.status(200).json({ id_tipo, message: "Tipo de cliente excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Tipo de cliente não encontrado!"] });
  }
};

// Obter um tipo de cliente pelo ID
const getTipoClienteById = async (req, res) => {
  const { id_tipo } = req.params;

  try {
    const tipo = await TipoCliente.findByPk(id_tipo);

    if (!tipo) {
      res.status(404).json({ errors: ["Tipo de cliente não encontrado."] });
      return;
    }

    res.status(200).json(tipo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar o tipo de cliente.' });
  }
};

// Atualizar um tipo de cliente pelo ID
const updateTipoCliente = async (req, res) => {
  const { id_tipo } = req.params;
  const { tipo_cliente } = req.body;

  try {
    const tipoExistente = await TipoCliente.findByPk(id_tipo);

    if (!tipoExistente) {
      res.status(404).json({ errors: ["Tipo de cliente não encontrado."] });
      return;
    }

    if (tipo_cliente) tipoExistente.tipo_cliente = tipo_cliente;

    await tipoExistente.save();

    res.status(200).json({ tipo: tipoExistente, message: "Tipo de cliente atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertTipoCliente,
  getAllTiposCliente,
  deleteTipoCliente,
  getTipoClienteById,
  updateTipoCliente
};
