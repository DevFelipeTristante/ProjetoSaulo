const TabelaPreco = require('../models/TabelaPreco'); // Atualize o caminho conforme necessário

const insertTabelaPreco = async (req, res) => {
  const { preco } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaTabela = await TabelaPreco.create({
      preco
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaTabela);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertTabelaPreco
};
