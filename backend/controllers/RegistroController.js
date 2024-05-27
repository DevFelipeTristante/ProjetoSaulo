const Registro = require('../models/Registro'); // Atualize o caminho conforme necessário

const insertRegistro = async (req, res) => {
  const { data_registro, venda } = req.body;

  try {
    // Create a new CategoriaProduto
    const novoRegistro = await Registro.create({
      data_registro, venda
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novoRegistro);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertRegistro
};
