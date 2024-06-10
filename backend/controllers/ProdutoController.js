const Produto = require('../models/Produto');

const connection = require('../config/connection');

// Inserir um novo produto
const insertProduto = async (req, res) => {
  const { descricao_produto, id_categoria, id_tabela, qtd_estoque } = req.body;

  try {
    const novoProduto = await Produto.create({
      descricao_produto, id_categoria, id_tabela, qtd_estoque
    });
    res.status(201).json(novoProduto);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

// Listar todos os produtos
const getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll({});
    return res.status(200).json(produtos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todos os produtos.' });
  }
};

const getProdutosVendidos = (req, res) => {
  // Query para buscar as contas entre as datas especificadas
  const query = `
    SELECT *
    FROM total_vendido_produto
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Um erro ocorreu ao buscar os produtos mais vendidos.' });
    }
    return res.status(200).json(results);
  });
};

const getEntrada = (req, res) => {
  const { data_inicial, data_final } = req.query;

  // Query para buscar as contas entre as datas especificadas
  const query = `
    SELECT * FROM erp.relatorio_entrada where DataEntrada between ? AND ?;
  `;

  connection.query(query, [data_inicial, data_final], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as contas.' });
    }
    return res.status(200).json(results);
  });
};

const getSaida = (req, res) => {
  const { data_inicial, data_final } = req.query;

  // Query para buscar as contas entre as datas especificadas
  const query = `
    SELECT * FROM erp.relatorio_saida where DataSaida between ? AND ?;
  `;

  connection.query(query, [data_inicial, data_final], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas as contas.' });
    }
    return res.status(200).json(results);
  });
};

// Deletar um produto pelo ID
const deleteProduto = async (req, res) => {
  const { id_produto } = req.params;

  try {
    const produto = await Produto.findByPk(id_produto);

    if (!produto) {
      res.status(404).json({ errors: ["Produto não encontrado!"] });
      return;
    }

    await Produto.destroy({
      where: { id_produto: id_produto }
    });

    res.status(200).json({ id_produto: id_produto, message: "Produto excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Produto não encontrado!"] });
  }
};

// Obter um produto pelo ID
const getProdutoById = async (req, res) => {
  const { id_produto } = req.body;

  try {
    const produto = await Produto.findByPk(id_produto);

    if (!produto) {
      res.status(404).json({ errors: ["Produto não encontrado."] });
      return;
    }

    res.status(200).json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar o produto.' });
  }
};

// Atualizar um produto pelo ID
const updateProduto = async (req, res) => {
  const { id_produto, descricao_produto, id_categoria, id_tabela, qtd_estoque } = req.body;

  try {
    const produto = await Produto.findByPk(id_produto);

    if (!produto) {
      res.status(404).json({ errors: ["Produto não encontrado."] });
      return;
    }

    if (descricao_produto) produto.descricao_produto = descricao_produto;
    if (id_categoria) produto.id_categoria = id_categoria;
    if (id_tabela) produto.id_tabela = id_tabela;
    if (qtd_estoque) produto.qtd_estoque = qtd_estoque;

    await produto.save();

    res.status(200).json({ produto, message: "Produto atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["Houve um problema, por favor tente novamente mais tarde."] });
  }
};

module.exports = {
  insertProduto,
  getAllProdutos,
  getProdutosVendidos,
  getEntrada,
  getSaida,
  deleteProduto,
  getProdutoById,
  updateProduto
};
