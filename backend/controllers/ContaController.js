const Conta = require('../models/Conta'); // Atualize o caminho conforme necessário

const insertConta = async (req, res) => {
  const { data_conta, id_cliente, id_venda, id_estoque, id_empresa, qtde_parcelas, valor_parcela } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaConta = await Conta.create({
      data_conta, id_cliente, id_venda, id_estoque, id_empresa, qtde_parcelas, valor_parcela
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
