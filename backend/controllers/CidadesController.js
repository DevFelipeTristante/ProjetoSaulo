// controllers/CategoriaProdutoController.js
const Cidades = require('../models/Cidades'); // Atualize o caminho conforme necessário

const insertCidades = async (req, res) => {
  const { nome_cidade, estado_cidade } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaCidade = await Cidades.create({
        nome_cidade, estado_cidade
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaCidade);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertCidades
};
