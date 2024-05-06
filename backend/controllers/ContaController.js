const Conta = require('../models/Conta'); // Atualize o caminho conforme necessário

const insertConta = async (req, res) => {
  const { data_conta, cliente, id_venda, id_estoque, empresa } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaConta = await Conta.create({
      data_conta, cliente, id_venda, id_estoque, empresa
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaConta);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertConta
};
