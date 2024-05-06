// controllers/ProdutoController.js
const Produto = require('../models/Produto'); 

const insertProduto = async (req, res) => {
  const { descricao_produto, id_tabela, id_categoria } = req.body;

  try {
    // Create a new CategoriaProduto
    const novoProduto = await Produto.create({
      descricao_produto, id_tabela, id_categoria
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

module.exports = {
  insertProduto
};
