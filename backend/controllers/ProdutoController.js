// controllers/ProdutoController.js
const Produto = require('../models/Produto'); 

const insertProduto = async (req, res) => {
  const { descricao_produto, id_tabela, id_categoria, qtd_estoque } = req.body;

  try {
    // Create a new CategoriaProduto
    const novoProduto = await Produto.create({
      descricao_produto, id_tabela, id_categoria, qtd_estoque
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novoProduto);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

const getAllProdutos = async(req, res) => {
  try {
    const produtos = await Produto.findAll({})
    return res.status(200).json(produtos)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Um erro ocorreu ao buscar todas os produtos.' })
  }
}

const deleteProduto = async(req, res) => {
  const {id_produto} = req.params 

  try {
    const produto = await Produto.findByPk(id_produto)

    // Check if photo exists
    if(!produto) {
      res.status(404).json({ errors: ["Produto não encontrado!"] })
      return
    }

    await Produto.destroy({
      where: {
        id_produto: id_produto
      }
    })

    res
      .status(200)
      .json({ 
        id_produto: id_produto, message: "Produto excluído com sucesso." 
      })
  } catch (error) {
      res.status(404).json({ errors: ["Produto não encontrado!"] })
  }
}

const getProdutoById = async (req, res) => {
  const {id_produto} = req.params

  try {
    const produto = await Produto.findByPk(id_produto)

    // Check if photo exists
    if(!produto) {
      res.status(404).json({ errors: ["Produto não encontrada."]})
      return
    }

    res.status(200).json(produto)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Ocorreu um erro ao recuperar o produto' })
  }
}

module.exports = {
  insertProduto,
  getAllProdutos,
  deleteProduto,
  getProdutoById
};
