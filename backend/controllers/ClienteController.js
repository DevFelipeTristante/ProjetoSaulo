const Cliente = require('../models/Cliente'); // Atualize o caminho conforme necessário

const insertCliente = async (req, res) => {
  const { nome_cliente, endereco, id_telefone, tipo_cliente, cidade } = req.body;

  try {
    // Create a new CategoriaProduto
    const novoCliente = await Cliente.create({
      nome_cliente, endereco, id_telefone, tipo_cliente, cidade
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novoCliente);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertCliente
};
