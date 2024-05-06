// controllers/CategoriaProdutoController.js
const CategoriaProduto = require('../models/CategoriaProduto'); // Atualize o caminho conforme necessário

const insertCategoriaProduto = async (req, res) => {
  const { categoria } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaCategoria = await CategoriaProduto.create({
      categoria
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaCategoria);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertCategoriaProduto
};
