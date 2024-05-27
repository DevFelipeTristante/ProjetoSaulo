const Venda = require('../models/Venda'); // Atualize o caminho conforme necessário

const insertVenda = async (req, res) => {
  const { id_usuario, id_produto, id_cliente, valor_venda, quantidade_prod, id_forma, 
    qtde_parcelas } = req.body;

  try {
    // Create a new CategoriaProduto
    const novaVenda = await Venda.create({
      id_usuario, id_produto, id_cliente, valor_venda, quantidade_prod, id_forma, qtde_parcelas
    });

    // If CategoriaProduto was created successfully, return data
    res.status(201).json(novaVenda);
  } catch (error) {
    console.log(error);
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    });
  }
};

module.exports = {
  insertVenda
};
