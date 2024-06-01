const NotaFiscalCliente = require('../models/NotaFiscalCliente'); // Atualize o caminho conforme necessário

// Inserir uma nova nota fiscal de cliente
const insertNFCliente = async (req, res) => {
  const { valor, quantidade, id_produto, data_nf, id_cliente, id_venda } = req.body;

  try {
    const novaNFCliente = await NotaFiscalCliente.create({
      valor, quantidade, id_produto, data_nf, id_cliente, id_venda    
    });
    res.status(201).json(novaNFCliente);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

// Listar todas as notas fiscais de cliente
const getAllNFClientes = async (req, res) => {
  try {
    const notas = await NotaFiscalCliente.findAll({});
    res.status(200).json(notas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as notas fiscais de cliente.' });
  }
};

// Deletar uma nota fiscal de cliente pelo ID
const deleteNFCliente = async (req, res) => {
  const { numeroNF } = req.body;

  try {
    const nota = await NotaFiscalCliente.findByPk(numeroNF);

    if (!nota) {
      res.status(404).json({ errors: ["Nota fiscal de cliente não encontrada!"] });
      return;
    }

    await NotaFiscalCliente.destroy({
      where: { numeroNF: numeroNF }
    });

    res.status(200).json({ numeroNF: numeroNF, message: "Nota fiscal de cliente excluída com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Nota fiscal de cliente não encontrada!"] });
  }
};

// Obter uma nota fiscal de cliente pelo ID
const getNFClienteById = async (req, res) => {
  const { numeroNF } = req.body;

  try {
    const nota = await NotaFiscalCliente.findByPk(numeroNF);

    if (!nota) {
      res.status(404).json({ errors: ["Nota fiscal de cliente não encontrada."] });
      return;
    }

    res.status(200).json(nota);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar a nota fiscal de cliente.' });
  }
};

// Atualizar uma nota fiscal de cliente pelo ID
const updateNFCliente = async (req, res) => {
  const { numeroNF, valor, quantidade, id_produto, data_nf, id_cliente, id_venda } = req.body;

  try {
    const notaExistente = await NotaFiscalCliente.findByPk(numeroNF);

    if (!notaExistente) {
      res.status(404).json({ errors: ["Nota fiscal de cliente não encontrada."] });
      return;
    }

    if (valor) notaExistente.valor = valor;
    if (quantidade) notaExistente.quantidade = quantidade;
    if (id_produto) notaExistente.id_produto = id_produto;
    if (data_nf) notaExistente.data_nf = data_nf;
    if (id_cliente) notaExistente.id_cliente = id_cliente;
    if (id_venda) notaExistente.id_venda = id_venda;

    await notaExistente.save();

    res.status(200).json({ nota: notaExistente, message: "Nota fiscal de cliente atualizada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertNFCliente,
  getAllNFClientes,
  deleteNFCliente,
  getNFClienteById,
  updateNFCliente
};
