const Produto = require('../models/Produto');

// Inserir um novo produto
const insertProduto = async (req, res) => {
  const { descricao_produto, id_categoria, qtd_estoque } = req.body;

  try {
    const novoProduto = await Produto.create({
      descricao_produto, id_categoria, qtd_estoque
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

// Deletar um produto pelo ID
const deleteProduto = async (req, res) => {
  const { id_produto } = req.body;

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
  const { id_produto, descricao_produto, id_categoria, qtd_estoque } = req.body;

  try {
    const produto = await Produto.findByPk(id_produto);

    if (!produto) {
      res.status(404).json({ errors: ["Produto não encontrado."] });
      return;
    }

    if (descricao_produto) produto.descricao_produto = descricao_produto;
    if (id_categoria) produto.id_categoria = id_categoria;
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
  deleteProduto,
  getProdutoById,
  updateProduto
};
