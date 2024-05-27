const Telefone = require('../models/Telefone'); // Atualize o caminho conforme necessário

const insertTelefone= async (req, res) => {
  const { numero } = req.body;

  try {
    // Create a new CategoriaProduto
    const novoTelefone = await Telefone.create({
      numero
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novoTelefone);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertTelefone
};
