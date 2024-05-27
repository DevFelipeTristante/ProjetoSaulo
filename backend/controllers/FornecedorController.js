const Fornecedor = require('../models/Fornecedor'); // Atualize o caminho conforme necessário

const insertFornecedor = async (req, res) => {
  const { nome_fornecedor, cidade, cliente } = req.body;

  try {
    // Create a new Empresa
    const novoFornecedor = await Fornecedor.create({
      nome_fornecedor, cidade, cliente
    });

    // If Empresa was created successfully, return data
    res.status(201).json(novoFornecedor);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertFornecedor
};
