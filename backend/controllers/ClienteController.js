const Cliente = require('../models/Cliente'); // Atualize o caminho conforme necessário

const insertCliente = async (req, res) => {
  const { nome_cliente, endereco, id_tipo, id_cidade } = req.body;

  try {
    const novoCliente = await Cliente.create({ nome_cliente, endereco, id_tipo, id_cidade });
    res.status(201).json(novoCliente);
  } catch (error) {
    console.log(error);
    res.status(422).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

const getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({});
    return res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todos os clientes.' });
  }
};

const deleteCliente = async (req, res) => {
  const { id_cliente } = req.params;

  try {
    const cliente = await Cliente.findByPk(id_cliente);

    if (!cliente) {
      res.status(404).json({ errors: ["Cliente não encontrado!"] });
      return;
    }

    await Cliente.destroy({ where: { id_cliente } });
    res.status(200).json({ id_cliente, message: "Cliente excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Cliente não encontrado!"] });
  }
};

const getClienteById = async (req, res) => {
  const { id_cliente } = req.body;

  try {
    const cliente = await Cliente.findByPk(id_cliente);

    if (!cliente) {
      res.status(404).json({ errors: ["Cliente não encontrado."] });
      return;
    }

    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar o cliente.' });
  }
};

const updateCliente = async (req, res) => {
  const { id_cliente, nome_cliente, endereco, id_tipo, id_cidade } = req.body;

  try {
    const clienteExistente = await Cliente.findByPk(id_cliente);

    if (!clienteExistente) {
      res.status(404).json({ errors: ["Cliente não encontrado."] });
      return;
    }

    if (nome_cliente) clienteExistente.nome_cliente = nome_cliente;
    if (endereco) clienteExistente.endereco = endereco;
    if (id_tipo) clienteExistente.id_tipo = id_tipo;
    if (id_cidade) clienteExistente.id_cidade = id_cidade;

    await clienteExistente.save();
    res.status(200).json({ cliente: clienteExistente, message: "Cliente atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertCliente,
  getAllClientes,
  deleteCliente,
  getClienteById,
  updateCliente
};
