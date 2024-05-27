const TipoCliente = require('../models/TipoCliente'); // Atualize o caminho conforme necessário

const insertTipoCliente= async (req, res) => {
  const { numero } = req.body;

  try {
    // Create a new CategoriaProduto
    const novoTipo = await TipoCliente.create({
      tipo_cliente
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novoTipo);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertTipoCliente
};
