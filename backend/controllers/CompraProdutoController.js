const CompraProduto = require('../models/CompraProduto'); // Atualize o caminho conforme necessário

const insertCompra = async (req, res) => {
  const { valor, quantidade, data_nf, id_produto } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaCompra = await CompraProduto.create({
      valor, quantidade, data_nf, id_produto    
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaCompra);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertCompra
};
