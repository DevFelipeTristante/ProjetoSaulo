const Estoque = require('../models/Estoque'); // Atualize o caminho conforme necessário

const insertEstoque = async (req, res) => {
  const { id_produto, qtd_prod } = req.body;

  try {
    // Create a new Empresa
    const novoEstoque = await Estoque.create({
      id_produto, qtd_prod
    });

    // If Empresa was created successfully, return data
    res.status(201).json(novoEstoque);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertEstoque
};
