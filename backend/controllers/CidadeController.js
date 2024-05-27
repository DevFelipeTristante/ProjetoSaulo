// controllers/CategoriaProdutoController.js
const Cidade = require('../models/Cidade'); // Atualize o caminho conforme necessário

const insertCidade = async (req, res) => {
  const { nome_cidade, estado_cidade } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaCidade = await Cidade.create({
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
  insertCidade
};
